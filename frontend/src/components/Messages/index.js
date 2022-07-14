import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Avatar, MessageUser } from "./styles";

export const Messages = ({ messagesUsers = [], connectedUsers = {} }) => {
  const loggedUser = useSelector((state) => state.loggedUser);

  useEffect(() => {
    setTimeout(() => {
      const getElementById = document.getElementById("container-messages");

      if (getElementById) {
        getElementById.scrollTop = getElementById.scrollTopMax;
      }
    }, 2000);
  }, [messagesUsers]);

  return (
    <Container id="container-messages" data-testid="container-messages">
      {messagesUsers.map((message, key) => (
        <MessageUser
          key={key}
          isLoggedUser={loggedUser.name === message.sender}
        >
          {(key === 0 || messagesUsers[key - 1].sender !== message.sender) && (
            <Avatar>
              <img
                height={40}
                width={40}
                src={
                  connectedUsers[message.sender] &&
                  connectedUsers[message.sender].image
                }
                alt={message.sender}
              />
              <div>{message.sender}</div>
            </Avatar>
          )}

          <div>{message.text}</div>
        </MessageUser>
      ))}
    </Container>
  );
};
