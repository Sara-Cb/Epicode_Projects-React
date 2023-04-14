const initialState = {
  tracks: [],
  loading: true,
  error: null,
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        tracks: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        tracks: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default search;
