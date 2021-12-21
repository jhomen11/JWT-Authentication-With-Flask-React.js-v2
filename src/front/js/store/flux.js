const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,

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

      getMessage: (datoslogin) => {
        // fetching data from the backend
        let status;
        fetch(
          "https://3001-scarlet-antlion-0pnnx640.ws-us23.gitpod.io/api/login"
        )
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            
            status = data.status;
          })
          .catch((error) => console.log("error", error));
        if (status == "OK") {
          return true;
        } else {
          return false;
        }
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
