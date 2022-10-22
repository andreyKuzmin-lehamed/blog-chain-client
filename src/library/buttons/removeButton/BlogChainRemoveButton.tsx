import { Button } from "antd";
import { FC } from "react";
import { IBlogChainRemoveButtonProps } from "./BlogChainRemoveButton.types";

export const BlogChainRemoveButton: FC<IBlogChainRemoveButtonProps> = ({
  text,
  clickHandler,
}) => {
  return (
    <Button
      type="primary"
      style={{ backgroundColor: "#ff1818" }}
      onClick={clickHandler}
    >
      {text}
    </Button>
  );
};
