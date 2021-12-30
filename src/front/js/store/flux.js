const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      datos : null,
      message: null

      // demo: [
      // 	{
      // 		title: "FIRST",
      // 		background: "white",
      // 		initial: "white"
      // 	},
      // 	{
      // 		title: "SECOND",
      // 		background: "white",
      // 		initial: "white"
      // 	}
      // ]
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      setLogin: async (datoslogin) => {
        
        await fetch(
          "https://3001-scarlet-antlion-0pnnx640.ws-us25.gitpod.io/api/login",
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
            setStore({ datos: data })
          })
          .catch((error) => console.log("error", error));
        
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
