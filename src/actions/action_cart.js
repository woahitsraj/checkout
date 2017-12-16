export const CHANGE_QUANTITY = 'CHANGE_QUANTITY'
export const DELETE_ITEM = 'DELETE_ITEM'

export function changeQuantity (index, quantity) {
  return {
    type : CHANGE_QUANTITY,
    index,
    quantity
  }
}

export function deleteItem (index) {
  return {
    type: DELETE_ITEM,
    index
  }
}
