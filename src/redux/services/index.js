import * as api from "../../util/api";

export const getUserDetailsService = async () => {
  return await api.get("/me");
};

export const getTopTracksService = async () => {
  return await api.get("/me/top/tracks?time_range=short_term&limit=10");
};

export const getTopGenreService = async () => {
  return await api.get("/me/top/artists?time_range=short_term&limit=5");
};

export const getAnalysisService = async (ids) => {
  return await api.get(`/audio-features?ids=${ids.join("%2C")}`);
};

export const getRecommendationService = async (
  data,
  tracks,
  artists,
  genre
) => {
  return await api.get(
    `/recommendations?limit=12&market=IN&seed_artists=${artists}&seed_genres=${genre.join(
      "%2C"
    )}&seed_tracks=${tracks}&target_acousticness=${
      data.acousticness
    }&target_danceability=${data.danceability}&target_energy=${
      data.energy
    }&target_instrumentalness=${data.instrumentalness}&target_liveness=${
      data.liveness
    }&target_loudness=${data.loudness}&target_speechiness=${
      data.speechiness
    }&target_tempo=${data.tempo}&target_valence=${data.valence}`
  );
};
