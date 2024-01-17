import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomButton from "../Button";

test("Calls on click callback", () => {
  const onClick = jest.fn();
  render(<CustomButton onClick={onClick} />);
  const button = screen.getByRole("button");
  userEvent.click(button);
  expect(onClick).toHaveBeenCalled();
});

test("Should render given label", () => {
  const label = "Hello";
  render(<CustomButton label={label} />);
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent(label);
});