import { ADD_ITEM, CLEAR_ITEMS, REMOVE_ITEM, SET_ITEMS } from "./constants";

export function addItem(item) {
  return {
    type: ADD_ITEM,
    item,
  };
}
export function removeItem(item) {
  return {
    type: REMOVE_ITEM,
    item,
  };
}
export function clearItems() {
  return {
    type: CLEAR_ITEMS,
  };
}
export function setItems(items) {
  return {
    type: SET_ITEMS,
    items,
  };
}
