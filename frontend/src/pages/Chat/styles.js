import styled from "styled-components";

const Container = styled.div`
  /* background: var(--white); */
  background: var(--gray-300);
  height: 98%;
  margin: 0.25rem;
  padding: 0.25rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 2rem;
  width: 100%;
  border: none;
  border-radius: 5px;
  background: var(--white);

  input {
    width: 95%;
    border: none;
    margin-left: 1px;
  }

  input:focus {
    outline: none;
  }

  button {
    display: flex;
    /* border: none; */
    background: var(--white);
    border-radius: 5px;
  }
`;

export { Container, Form };
