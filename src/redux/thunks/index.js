import { getUserDetailsService } from "../services";
import {
  requestUserDetails,
  requestUserDetailsSuccessful,
  requestUserDetailsFailed,
} from "../actions";

export const getUserDetailsThunk = () => {
  return async (dispatch) => {
    dispatch(requestUserDetails());
    try {
      const response = await getUserDetailsService();
      if (response.status === 200) {
        dispatch(requestUserDetailsSuccessful(response.data));
      } else {
        throw new Error(response.error.message);
      }
    } catch (error) {
      dispatch(requestUserDetailsFailed(error));
    }
  };
};
