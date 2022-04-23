export const actionTypes = {
  REQUEST_DATA: "REQUEST_DATA",
  REQUEST_USER_DATA_SUCCESSFUL: "REQUEST_USER_DATA_SUCCESSFUL",
  REQUEST_TOP_TRACKS_SUCCESSFUL: "REQUEST_TOP_TRACKS_SUCCESSFUL",
  REQUEST_FAILED: "REQUEST_FAILED",
  REQUEST_ANALYSIS_SUCCESSFUL: "REQUEST_ANALYSIS_SUCCESSFUL",
  REQUEST_RECOMMENDATION_SUCCESSFUL: "REQUEST_RECOMMENDATION_SUCCESSFUL",
  REQUEST_GENRE_SUCCESSFUL: "REQUEST_GENRE_SUCCESSFUL",
  TOGGLE_THEME: "TOGGLE_THEME",
};

export const requestData = () => ({
  type: actionTypes.REQUEST_DATA,
});

export const requestUserDetailsSuccessful = (payload) => ({
  type: actionTypes.REQUEST_USER_DATA_SUCCESSFUL,
  payload,
});

export const requestTracksSuccessful = (payload) => ({
  type: actionTypes.REQUEST_TOP_TRACKS_SUCCESSFUL,
  payload,
});

export const requestFailed = (payload) => ({
  type: actionTypes.REQUEST_FAILED,
  payload,
});

export const requestAnalysisSuccessful = (payload) => ({
  type: actionTypes.REQUEST_ANALYSIS_SUCCESSFUL,
  payload,
});

export const requestRecommendationSuccessful = (payload) => ({
  type: actionTypes.REQUEST_RECOMMENDATION_SUCCESSFUL,
  payload,
});

export const requestGenreSuccessful = (payload) => ({
  type: actionTypes.REQUEST_GENRE_SUCCESSFUL,
  payload,
});

export const toggleTheme = () => ({ type: actionTypes.TOGGLE_THEME });
