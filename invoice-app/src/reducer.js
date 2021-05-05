const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":

    case "REMOVE_ITEM":
    case "TOGGLE_MODAL":
      return {
        ...state,
        isShowModal: !state.isShowModal,
      };
  }
};

export default reducer;
