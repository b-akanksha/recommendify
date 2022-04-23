import initialState from "../initialState";
import { actionTypes } from "../actions/index.js";

const {
  REQUEST_DATA,
  REQUEST_USER_DATA_SUCCESSFUL,
  REQUEST_FAILED,
  REQUEST_TOP_TRACKS_SUCCESSFUL,
  REQUEST_ANALYSIS_SUCCESSFUL,
  REQUEST_RECOMMENDATION_SUCCESSFUL,
  REQUEST_GENRE_SUCCESSFUL,
  TOGGLE_THEME,
} = actionTypes;

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_THEME:
      return { ...state, darkMode: !state.darkMode };
    case REQUEST_DATA:
      return { ...state, loading: true };
    case REQUEST_USER_DATA_SUCCESSFUL:
      return { ...state, loading: false, error: {}, userDetails: payload };
    case REQUEST_TOP_TRACKS_SUCCESSFUL:
      const tempData = payload.items.map((item) => item.id);
      return {
        ...state,
        loading: false,
        error: {},
        tracks: [...tempData],
      };
    case REQUEST_ANALYSIS_SUCCESSFUL:
      const length = payload.audio_features.length;
      const acousticness = (
        payload.audio_features
          .map((item) => item.acousticness)
          .reduce((p, c) => p + c) / length
      ).toFixed(2);
      const danceability = (
        payload.audio_features
          .map((item) => item.danceability)
          .reduce((p, c) => p + c) / length
      ).toFixed(2);
      const energy = (
        payload.audio_features
          .map((item) => item.energy)
          .reduce((p, c) => p + c) / length
      ).toFixed(2);
      const key = (
        payload.audio_features.map((item) => item.key).reduce((p, c) => p + c) /
        length
      ).toFixed(2);
      const loudness = (
        payload.audio_features
          .map((item) => item.loudness)
          .reduce((p, c) => p + c) / length
      ).toFixed(2);
      const mode = (
        payload.audio_features
          .map((item) => item.mode)
          .reduce((p, c) => p + c) / length
      ).toFixed(2);
      const speechiness = (
        payload.audio_features
          .map((item) => item.speechiness)
          .reduce((p, c) => p + c) / length
      ).toFixed(2);
      const instrumentalness = (
        payload.audio_features
          .map((item) => item.instrumentalness)
          .reduce((p, c) => p + c) / length
      ).toFixed(2);
      const liveness = (
        payload.audio_features
          .map((item) => item.liveness)
          .reduce((p, c) => p + c) / length
      ).toFixed(2);
      const valence = (
        payload.audio_features
          .map((item) => item.valence)
          .reduce((p, c) => p + c) / length
      ).toFixed(2);
      const tempo = (
        payload.audio_features
          .map((item) => item.tempo)
          .reduce((p, c) => p + c) / length
      ).toFixed(2);
      const duration_ms = (
        payload.audio_features
          .map((item) => item.duration_ms)
          .reduce((p, c) => p + c) / length
      ).toFixed(2);
      const time_signature = (
        payload.audio_features
          .map((item) => item.time_signature)
          .reduce((p, c) => p + c) / length
      ).toFixed(2);
      return {
        ...state,
        loading: false,
        error: {},
        analysis: {
          acousticness,
          liveness,
          loudness,
          energy,
          tempo,
          instrumentalness,
          speechiness,
          danceability,
          duration_ms,
          valence,
          mode,
          key,
          time_signature,
        },
      };
    case REQUEST_GENRE_SUCCESSFUL:
      const tempGenre = payload.items[0].genres;
      const tempArtist = payload.items.splice(0, 4).map((item) => item.id);
      return {
        ...state,
        genre: tempGenre,
        artists: tempArtist,
        loading: false,
      };
    case REQUEST_RECOMMENDATION_SUCCESSFUL:
      return { ...state, error: {}, recommendation: payload, loading: false };
    case REQUEST_FAILED:
      return { ...state, loading: false, error: { message: payload } };
    default:
      return { ...state };
  }
};
