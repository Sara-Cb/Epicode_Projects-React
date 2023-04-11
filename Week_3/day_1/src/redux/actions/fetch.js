const setJobs = (data) => {
  return {
    type: "SHOW_JOBS",
    payload: data,
  };
};

const emptyJobs = () => {
  return {
    type: "REFRESH",
  };
};

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
const companyEndpoint =
  "https://strive-benchmark.herokuapp.com/api/jobs?company=";

export const fetchJobs = (query) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobs(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCompanies = (company) => {
  return async (dispatch, getState) => {
    dispatch(emptyJobs());
    try {
      const response = await fetch(companyEndpoint + company);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobs(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
