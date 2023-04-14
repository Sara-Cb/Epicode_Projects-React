export const fetchSuccess = (tracks) => ({
  type: "FETCH_SUCCESS",
  payload: tracks,
});

export const fetchFailure = (error) => ({
  type: "FETCH_FAILURE",
  payload: { error },
});

export const fetchSearch = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const tracks = data.data;

      dispatch(fetchSuccess(tracks));
      console.log(tracks);
    } catch (error) {
      dispatch(fetchFailure(error.message));
    }
  };
};
