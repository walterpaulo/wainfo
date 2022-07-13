import React, { ComponentType, useEffect, useState } from "react";
import { IconBaseProps } from "react-icons";
import { Container } from "./style";
import { FaBan, FaCheck, FaInfo } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Environment } from "../../../environment";

type Prop = {
  text: string;
  type?: "success" | "error" | "info";
  icon?: React.ComponentType<IconBaseProps>;
};

const icons = {
  info: {
    icon: <FaInfo size={24} />,
    color: Environment.COLOR_INFO,
  },
  error: {
    icon: <FaBan size={24} />,
    color: Environment.COLOR_ERROR,
  },
  success: {
    icon: <FaCheck size={24} />,
    color: Environment.COLOR_SUCESS,
  },
};

export const Message: React.FC<Prop> = ({ text, type, icon }) => {
  const [visible, setVisible] = useState(false);

  const typeIcon = () => {
    const iconType = icons[type || "info"];
    return iconType;
    // return !type && <FaInfo />;
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
        <Container color={typeIcon().color}>
          {<MdClose onClick={() => setVisible(false)} />}
          {typeIcon().icon}
          <p>{text}</p>
        </Container>
      )}
    </>
  );
};

export default Message;
