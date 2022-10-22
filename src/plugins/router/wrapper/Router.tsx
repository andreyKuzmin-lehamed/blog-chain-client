import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

export const Router: FC<{ children: JSX.Element }> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
