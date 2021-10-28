export const getCartTotal = (cartData) => {
    return cartData.reduce((acc, val) => {
      console.log('map', val, acc)
      return val.price + acc
    }, 0)
}