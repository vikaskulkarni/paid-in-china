export const RESIZE_STOP = "RESIZE_STOP";
export const CHANGE_ORDER = "CHANGE_ORDER";

export const resizeStop = (dimension) => ({
  type: RESIZE_STOP,
  dimension,
});

export const changeOrder = (order) => ({
  type: CHANGE_ORDER,
  order,
});
