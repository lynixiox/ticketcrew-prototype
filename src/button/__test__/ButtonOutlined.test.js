import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonOutlined from "../ButtonOutlined";

describe("Style tests", () => {

  test("Should render as #000 and #000c", () => {
    render(<ButtonOutlined isDark={true} />);
    const btnObject = screen.getByRole("button");
    expect(btnObject).toHaveStyle("color: #000");
    expect(btnObject).toHaveStyle("border: 1px solid #000c");
  });

  test("Should render as #fff and #fffc", () => {
    render(<ButtonOutlined isDark={false} />)
    const btnObject = screen.getByRole("button");
    expect(btnObject).toHaveStyle("color: #fff");
    expect(btnObject).toHaveStyle("border: 1px solid #fffc");
  });
});

test("Calls on click callback", () => {
  const onClick = jest.fn();
  render(<ButtonOutlined onClick={onClick} />);
  const button = screen.getByRole("button");
  userEvent.click(button);
  expect(onClick).toHaveBeenCalled();
});

test("Has button label", () => {
  const btnLabel = "ButtonLabel";
  render(<ButtonOutlined isDark={false} label={btnLabel} />)
  const btnLabelObject = screen.getByRole("button");
  expect(btnLabelObject).toHaveTextContent(btnLabel);
});

