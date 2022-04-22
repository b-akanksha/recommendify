import {
  getUserDetailsService,
  getTopTracksService,
  getAnalysisService,
  getRecommendationService,
  getTopGenreService,
} from "../services";
import {
  requestData,
  requestUserDetailsSuccessful,
  requestFailed,
  requestTracksSuccessful,
  requestAnalysisSuccessful,
  requestRecommendationSuccessful,
  requestGenreSuccessful,
} from "../actions";

export const getUserDetailsThunk = () => {
  return async (dispatch) => {
    dispatch(requestData());
    try {
      const response = await getUserDetailsService();
      if (response.status === 200) {
        await dispatch(requestUserDetailsSuccessful(response.data));
        await dispatch(getTopTracksThunk());
        await dispatch(getTopGenreThunk());
        await dispatch(getAnalysisThunk());
        await dispatch(getRecommendationThunk());
      } else {
        throw new Error(response.error.message);
      }
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};

export const getTopTracksThunk = () => {
  return async (dispatch) => {
    dispatch(requestData());
    try {
      const response = await getTopTracksService();
      if (response.status === 200) {
        dispatch(requestTracksSuccessful(response.data));
      } else {
        throw new Error(response.error.message);
      }
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};

export const getTopGenreThunk = () => {
  return async (dispatch) => {
    dispatch(requestData());
    try {
      const response = await getTopGenreService();
      if (response.status === 200) {
        dispatch(requestGenreSuccessful(response.data));
      } else {
        throw new Error(response.error.message);
      }
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};

export const getAnalysisThunk = () => {
  return async (dispatch, getState) => {
    const ids = getState().user.tracks;
    dispatch(requestData());
    try {
      const response = await getAnalysisService(ids);
      if (response.status === 200) {
        dispatch(requestAnalysisSuccessful(response.data));
      } else {
        throw new Error(response.error.message);
      }
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};

export const getRecommendationThunk = () => {
  return async (dispatch, getState) => {
    const { tracks, artists, analysis, genre } = getState().user;

    dispatch(requestData());
    try {
      const response = await getRecommendationService(
        analysis,
        tracks[0],
        artists[0],
        genre
      );
      if (response.status === 200) {
        dispatch(requestRecommendationSuccessful(response.data.tracks));
      } else {
        throw new Error(response.error.message);
      }
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
