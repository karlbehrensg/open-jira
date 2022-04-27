import { FC, PropsWithChildren, useReducer } from "react";
import { UIContext, uiReducer } from "./";

interface Props {}

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

export const UIProvider: FC<PropsWithChildren<Props>> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "[UI] - OpenSidebar" });
  };

  const closeSideMenu = () => {
    dispatch({ type: "[UI] - CloseSidebar" });
  };

  const setIsAddingEntry = (isAddingEntry: boolean) => {
    dispatch({ type: "[UI] - Set IsAddingEntry", payload: isAddingEntry });
  };

  const startDragging = () => {
    dispatch({ type: "[UI] - Start Dragging" });
  };

  const endDragging = () => {
    dispatch({ type: "[UI] - End Dragging" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,

        // Methods
        openSideMenu,
        closeSideMenu,

        setIsAddingEntry,

        startDragging,
        endDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
