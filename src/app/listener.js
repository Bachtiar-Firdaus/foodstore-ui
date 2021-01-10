import store from "./store";

let currentAuth;
let currentCart;

function listener() {
  let previousAuth = currentAuth;
  let previousCart = currentCart;
  currentAuth = store.getState().auth;
  currentCart = store.getState().cart;
  if (currentAuth !== previousAuth) {
    localStorage.setItem("auth", JSON.stringify(currentAuth));
  }
  if (currentCart !== previousCart) {
    localStorage.setItem("cart", JSON.stringify(currentCart));
  }
}
function listen() {
  store.subscribe(listener);
}

export { listen };
