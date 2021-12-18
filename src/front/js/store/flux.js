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

      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/user")
          .then((resp) => resp.json())
          //.then(data => console.log(data))
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("error", error)
          );
      },

      //POST
      setDatosFormulario: (datosFormulario) => {
        fetch("https://3001-scarlet-antlion-0pnnx640.ws-us23.gitpod.io/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datosFormulario),
        })
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
