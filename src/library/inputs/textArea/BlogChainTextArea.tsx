import { FC } from "react";
import { IBlogChainTextAreaProps } from "./BlogChainTextArea.types";
import styles from "./BlogChainTextArea.module.css";
import TextArea from "antd/lib/input/TextArea";

export const BlogChainTextArea: FC<IBlogChainTextAreaProps> = ({
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
      <TextArea
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        autoSize={{
          minRows: 2,
          maxRows: 6,
        }}
      />
    </>
  );
};
