export const CHANGE_QUANTITY = 'CHANGE_QUANTITY'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'

export function changeQuantity (index, quantity) {
  return {
    type : CHANGE_QUANTITY,
    index,
    quantity
  }
}

export function deleteProduct (index) {
  return {
    type: DELETE_PRODUCT,
    index
  }
}
