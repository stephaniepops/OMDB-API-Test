export const ADD_NOMINEE = "ADD_NOMINEE";
export const REMOVE_NOMINEE = "REMOVE_NOMINEE";

export const addNomination = (payload) => {
  return {
    type: ADD_NOMINEE,
    payload,
  };
};

export const removeNomination = (payload) => {
  return {
    type: REMOVE_NOMINEE,
    payload,
  };
};
