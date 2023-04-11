const initialState = {
  jobs: {
    list: [],
  },
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_JOBS":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          list: action.payload,
        },
      };
    case "REFRESH":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          list: [],
        },
      };
    default:
      return state;
  }
};

export default fetchReducer;
