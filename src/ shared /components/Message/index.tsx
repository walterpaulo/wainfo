import React, { ComponentType, useEffect, useState } from "react";
import { IconBaseProps } from "react-icons";
import { Container } from "./style";
import { FaInfo } from "react-icons/fa";
import { MdClose } from "react-icons/md"

type Prop = {
  text: string;
  type?: "success" | "error" | "info" | "warging";
  icon?: React.ComponentType<IconBaseProps>;
};

export const Message: React.FC<Prop> = ({ text, type, icon }) => {
  const [visible, setVisible] = useState(false);

  const typeIcon = (type?: string) => {
    return !type && <FaInfo />;
  };
  useEffect(() => {
    if (text.length === 0) {
      setVisible(false);
      return;
    }
    setVisible(true);

    const timer = setInterval(() => {
      setVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
    return;
  }, [text]);

  return (
    <>
      {visible && (
        <Container>
          {<MdClose onClick={()=>setVisible(false)} />}
          {typeIcon()}
          <p>{text}</p>
        </Container>
      )}
    </>
  );
};

export default Message;
