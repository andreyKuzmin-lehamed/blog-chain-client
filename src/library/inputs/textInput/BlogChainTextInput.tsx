import { FC } from "react";
import { IBlogChainTextInputProps } from "./BlogChainTextInput.types";
import styles from "./BlogChainTextInput.module.css";
import { Input, Space } from "antd";

export const BlogChainTextInput: FC<IBlogChainTextInputProps> = ({
  title,
  placeholder,
  value,
  setValue,
}) => {
  return (
    <>
      <div className={styles.title}>
        <label>{title}</label>
      </div>
      <div className={styles.input}>
        <Input
          size="large"
          placeholder={placeholder}
          value={value}
          onChange={setValue}
        />
      </div>
    </>
  );
};
