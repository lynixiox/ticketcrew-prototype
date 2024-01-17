import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextInput from "../TextInput";

test("Render test", () => {
  render(<TextInput />);
  expect(screen.getByRole("textbox")).toBeInTheDocument();
});

test("Label value", () => {
  const label = "Hello, world!";
  render(<TextInput label={label} />);
  expect(screen.getByLabelText(label)).toBeInTheDocument();
});

test("Preset value", () => {
  const value = "Hello!";
  render(<TextInput value={value} />);
  expect(screen.getByRole("textbox")).toHaveValue(value);
});

test("To be password type", () => {
  render(<TextInput isPassword="password" testid="passwd" />);
  expect(screen.getByDisplayValue("")).toHaveAttribute("type", "password");
});

describe("Callback test", () => {
  test("onChange callback is called", () => {
    const input = "Hello!";
    const onChangeMock = jest.fn();
    render(<TextInput onChange={onChangeMock} />);
    userEvent.type(screen.getByRole("textbox"), input);
    expect(onChangeMock).toBeCalled();
  });

  test("onBlur callback is called", () => {
    const input = "Hello!";
    const onBlurMock = jest.fn();
    render(<TextInput onBlur={onBlurMock} />);
    const inputField = screen.getByRole("textbox");
    userEvent.type(inputField, input);
    userEvent.tab();
    expect(onBlurMock).toBeCalled();
  });
});