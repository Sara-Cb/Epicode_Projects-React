const initialState = {
  companies: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMPANY":
      return {
        ...state,
        companies: [...state.companies, action.payload],
      };
    case "REMOVE_COMPANY":
      return {
        ...state,
        companies: state.companies.filter(
          (company) => company.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
