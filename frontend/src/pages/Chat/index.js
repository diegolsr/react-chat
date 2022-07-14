/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../../services/ws";
import { faker } from "@faker-js/faker";
import { Container, Form } from "./styles";
import Send from "../../assets/send.png";

import { Messages } from "../../components/Messages";

var connectedUsersTemp = {};
var messagesUsersTemp = [];

export const Chat = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser);
  const connectedUsers = useSelector((state) => state.connectedUsers);
  const messagesUsers = useSelector((state) => state.messagesUsers.messages);

  const [loggedUserMessage, setLoggedUserMessage] = useState("");

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    const image = faker.image.avatar();

    dispatch({
      type: "ADD_TO_LOGGED_USER",
      loggedUser: { name, image },
    });

    socket.on("connect", () => {
      setIsConnected(true);

      socket.emit("guest.new", { name, image });
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("guest.show", (message) => {
      console.log("guest.show", message);

      connectedUsersTemp[message.name] = message;

      receiveUsers();
    });

    socket.on("message.show", (message) => {
      // console.log("message.show", message);

      messagesUsersTemp.push(message);

      console.log(messagesUsersTemp);

      dispatch({
        type: "ADD_TO_MESSAGES_USERS",
        messagesUsers: {
          messages: [...messagesUsersTemp],
        },
      });
    });

    socket.on("guest.old", (message) => {
      // console.log("guest.old", message);

      connectedUsersTemp = message;

      receiveUsers();
    });

    socket.on("message.old", (message) => {
      // console.log("message.old", message);

      messagesUsersTemp = message;

      receiveMessage();
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("guest.show");
      socket.off("message.show");
      socket.off("guest.old");
      socket.off("message.old");
    };
  }, []);

  const receiveMessage = () => {
    dispatch({
      type: "ADD_TO_MESSAGES_USERS",
      messagesUsers: {
        messages: messagesUsersTemp,
      },
    });
  };

  const receiveUsers = () => {
    dispatch({
      type: "ADD_TO_CONNECTED_USERS",
      connectedUsers: connectedUsersTemp,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loggedUserMessage) {
      alert("Digite uma mensagem");
    }

    const message = {
      sender: loggedUser.name,
      text: loggedUserMessage,
    };

    messagesUsersTemp.push(message);

    receiveMessage();

    socket.emit("message.new", message);

    setLoggedUserMessage("");
  };

  return (
    <Container>
      <Messages messagesUsers={messagesUsers} connectedUsers={connectedUsers} />

      <Form onSubmit={handleSubmit}>
        <input
          type={"text"}
          value={loggedUserMessage}
          onChange={(e) => {
            setLoggedUserMessage(e.target.value);
          }}
          placeholder="Escreva uma mensagem..."
        />
        <button type="submit">
          <img src={Send} height={30} width={30} alt="" />
        </button>
      </Form>
    </Container>
  );
};
