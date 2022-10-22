import { ReactEventHandler } from "react";

export interface IBlogChainTextAreaProps {
  title: string;
  placeholder: string;
  value: string;
  setValue: ReactEventHandler;
}
