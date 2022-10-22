import { Button } from "antd";
import { FC } from "react";
import { IBlogChainPrimaryButtonProps } from "./BlogChainPrimaryButton.types";

export const BlogChainPrimaryButton: FC<IBlogChainPrimaryButtonProps> = ({
  text,
  clickHandler,
}) => {
  return (
    <Button type="primary" onClick={clickHandler}>
      {text}
    </Button>
  );
};
