const initState = {
  videoList: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "SEARCH_VIDEO": {
      return {
        videoList: action.payload.data
      };
    }
    default:
      return state;
  }
};

export default reducer;
