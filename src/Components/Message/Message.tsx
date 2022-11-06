import "./Message.scss";
interface MessageProps {
  message: string;
  color: "good" | "bad" | "warning";
}

const Message: React.FC<MessageProps> = ({ color, message }) => {
  return <div className={`message message__${color}`}>{message}</div>;
};

export default Message;
