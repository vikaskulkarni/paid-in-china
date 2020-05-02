export const SHOW_AGREEMENT = "SHOW_AGREEMENT";
export const SHOW_FORM = "SHOW_FORM";
export const HIDE_FORM = "HIDE_FORM";

export const showAgreement = (show) => ({
  type: SHOW_AGREEMENT,
  show,
});

export const showForm = (show) => ({
  type: SHOW_FORM,
  show,
});

export const hideForm = (show) => ({
  type: HIDE_FORM,
  show,
});
