const initialState = {
  currentTrack: {},
};

const onPlayReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_TRACK":
      return {
        ...state,
        currentTrack: action.payload,
      };
    default:
      return state;
  }
};

export default onPlayReducer;
