
//chatgpt code
// const getTokenFromLocalStorage = localStorage.getItem("customer")
//   ? JSON.parse(localStorage.getItem("customer"))
//   : null;

// export const config = {
//   headers: {
//     Authorization: getTokenFromLocalStorage
//       ? `Bearer ${getTokenFromLocalStorage.token}`
//       : "",
//     Accept: "application/json",
//   },
// };





//Indian guy code
const getTokenFromLocalStorage = localStorage.getItem("customer") ? JSON.parse(localStorage.getItem("customer")) : null;

const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""}`,
    Accept: "application/json",
  }
};

export { config };



//former code
// const getTokenFromLocalStorage = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

// const config = {
//     headers: {
//        Authorization: `Bearer ${getTokenFromLocalStorage.token}`,
//        Accept: "application/json",
//     }
// };

// export { config };