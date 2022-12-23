type Action =
  | { type: "SELECT_VALUE"; payload: string }
  | { type: "DESELECT_VALUE"; payload: string }
  | { type: "CLEAR_SELECTION" };

export const FilterReducer = (state: string[], action: Action) => {
  switch (action.type) {
    case "SELECT_VALUE":
      return [...state, action.payload];
    case "DESELECT_VALUE":
      return state.filter((val) => val !== action.payload);
    case "CLEAR_SELECTION":
      return [];
    default:
      return state;
  }
};