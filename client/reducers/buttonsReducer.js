const initialState = {
  buttons: [
    {
      faIcon: "fa-info-circle fa-3x",
      faID: "fa-hs",
      actionName: "showAgreement",
    },
    {
      faIcon: "fa-file-invoice-dollar fa-4x",
      faID: "fa-invoice",
      actionName: "showForm",
    },
    {
      faIcon: "fa-comment-dots fa-3x disabledd",
      faID: "fa-comments",
      actionName: "",
    },
    {
      faIcon: "fa-chart-line fa-3x disabledd",
      faID: "fa-chart",
      actionName: "",
    },
  ],
};
const buttonsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default buttonsReducer;
