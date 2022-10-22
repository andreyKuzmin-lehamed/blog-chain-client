import { KeyboardEventHandler, ReactEventHandler } from "react";

export interface IBlogChainTextInputProps {
  title: string;
  placeholder: string;
  value: string;
  setValue: ReactEventHandler;
}
