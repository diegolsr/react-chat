import styled from "styled-components";

const Container = styled.div`
  background: var(--white);
  height: calc(100% - 36px);
  display: flex;
  flex-direction: column;
  margin-bottom: 0.2rem;
  overflow-y: scroll;
  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 0.25rem;
`;

const MessageUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isLoggedUser ? "flex-end" : "flex-start")};
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 100px;
    margin-right: 2px;
    margin-left: 2px;
  }

  div {
    font-size: 12px;
    font-weight: bold;
  }
`;

export { Container, Avatar, MessageUser };
