import { render, screen } from "@testing-library/react";
import App from "./App";

test("use the attribute data-testid by default", () => {
  render(<App />);
  const linkElement = screen.getByTestId("container-messages");
});

test("search for all elements with a placeholder attribute", () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText("Escreva uma mensagem...");
});
