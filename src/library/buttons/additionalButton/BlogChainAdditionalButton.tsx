import { Button } from "antd";
import { FC } from "react";
import { IBlogChainAdditionalButtonProps } from "./BlogChainAdditionalButton.types";

export const BlogChainAdditionalButton: FC<IBlogChainAdditionalButtonProps> = ({
  text,
  clickHandler,
}) => {
  return (
    <Button
      type="primary"
      style={{ backgroundColor: "#fff", color: "#434343" }}
      onClick={clickHandler}
    >
      {text}
    </Button>
  );
};
