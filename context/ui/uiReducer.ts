import { UIState } from "./";

type UIActionType =
  | { type: "[UI] - OpenSidebar" }
  | { type: "[UI] - CloseSidebar" }
  | { type: "[UI] - Set IsAddingEntry"; payload: boolean };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "[UI] - OpenSidebar":
      return {
        ...state,
        sidemenuOpen: true,
      };

    case "[UI] - CloseSidebar":
      return {
        ...state,
        sidemenuOpen: false,
      };

    case "[UI] - Set IsAddingEntry":
      return {
        ...state,
        isAddingEntry: action.payload,
      };

    default:
      return state;
  }
};
