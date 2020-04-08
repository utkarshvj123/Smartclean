export const GET_DATA = "GET_DATA";
export const ACTIVE_CLASS_DATA = "ACTIVE_CLASS_DATA";

export function getData(value) {
  return dispatch => {
    dispatch({
      type: GET_DATA,
      payload: value
    });
  };
}