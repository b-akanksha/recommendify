import * as api from "../../util/api";

export const getUserDetailsService = async () => {
  return await api.get("/me");
};
