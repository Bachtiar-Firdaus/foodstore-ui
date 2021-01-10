import debounce from "debounce-promise";
import { getProducts } from "../../api/product";

let debouncedFetchProducts = debounce(getProducts, 1000);
export const fetchProducts = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingProducts());
    let perPage = getState().products.perPage || 9;
    let currentPage = getState().products.currentPage || 1;
    let tags = getState().products.tags || [];
    let keyword = getState().products.keyword || "";
    let category = getState().products.category || "";
    const params = {
      limit: perPage,
      skip: currentPage * perPage - perPage,
      q: keyword,
      tags,
      category,
    };
    try {
      let {
        data: { data, count },
      } = await debouncedFetchProducts({ params });

      dispatch(successFetchingProducts({ data, count }));
    } catch (err) {
      dispatch(errorFetchingProducts());
    }
  };
};
export const startFetchingProducts = () => {
  return {
    type: START_FETCHING_PRODUCT,
  };
};

export const errorFetchingProducts = () => {
  return {
    type: ERROR_FETCHING_PRODUCT,
  };
};
export const successFetchingProducts = ({ data, count }) => {
  return {
    type: SUCCESS_FETCHING_PRODUCT,
    data,
    count,
  };
};
