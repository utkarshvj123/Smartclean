import { IS_VALID_USER } from "../modules/Login/actions";


export const authenticateUser = (state=false, action) => {
  switch (action.type) {
    case IS_VALID_USER:
      return  action.payload
    default:
      return state;
  }
};
