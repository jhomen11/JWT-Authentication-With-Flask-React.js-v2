const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      datos : null,
      data:{},
      status: "",
      usuarios: [],
      usuario:{}

      
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      //Todos los usuarios
      getUsuarios: async () => {
				await fetch("https://3001-scarlet-antlion-0pnnx640.ws-us27.gitpod.io/api/user")
					.then(response => response.json())
          .then(data =>console.log(data))
					.then(data => setStore({ usuarios: data }))
					.catch(error => console.log("error", error));
			},

      //Detalle usuario
      // verDetalle: async id => {
			// 	await fetch(`https://3001-scarlet-antlion-0pnnx640.ws-us27.gitpod.io/api/users/${id}`)
			// 		.then(response => response.json())
			// 		.then(data => {
      //       console.log(data)
			// 			setStore({ usuario: data })
			// 		})
			// 		.catch(error => console.log("error", error));
			// },

      setLogin: async (datoslogin) => {
        await fetch(
          "https://3001-scarlet-antlion-0pnnx640.ws-us27.gitpod.io/api/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(datoslogin),
          }
        )
          .then((resp) => resp.json())
          .then(data => {
            sessionStorage.setItem("token", data.token)
            setStore({ datos: data  })
            console.log("Desde Flux", data )
          })
          .catch((error) => console.log("error", error));
        
      },

      datosPrivados: async (id) => {
        try {
        const store = getStore()
        await fetch(
          `https://3001-scarlet-antlion-0pnnx640.ws-us27.gitpod.io/api/users/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${store.datos?.token}`
            }
          }
        )
          .then((resp) => resp.json())
          .then(data => {
            console.log(data )
            setStore({ usuario: data })
          }) 
        } catch (error) {
          console.log("error", error)
        }
          
        
      },

      getTokenSessionStorage: () =>{
        const token = sessionStorage.getItem("token")
        if(token && token !=="" && token !== undefined){
          setStore({ datos: token })
        }
      },

      logout: (history) =>{
        sessionStorage.removeItem("token")
          setStore({ datos: null });
          history.push('/')
      },

      //POST
      setDatosFormulario: (datosFormulario) => {
        fetch(
          "https://3001-scarlet-antlion-0pnnx640.ws-us23.gitpod.io/api/user",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(datosFormulario),
          }
        )
          .then((response) => response.json())
          //.then(result => console.log(result))
          .catch((error) => {
            console.log("El error", error);
          });
      },
    },
  };
};

export default getState;
