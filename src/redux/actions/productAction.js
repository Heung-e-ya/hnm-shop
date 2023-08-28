function getProducts(serachQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/Heung-e-ya/hnm-shop/products?q=${serachQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProducts };
