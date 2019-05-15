// Test away!
import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import Display from "./Display";
cleanup(afterEach);
describe("<Display />", () => {
  it("renders the component", () => {
    render(<Display />);
  });

  it("displays if gate is open/closed and if it is locked/unlocked", () => {
    const { getByText, getByTestId } = render(
      <Display locked={false} closed={false} />
    );
    // const open = getByText(/open/i);
    // const unlocked = getByText(/unlocked/i);
    // expect(open).toHaveTextContent(/open/i);
    // expect(unlocked).toHaveTextContent(/unlocked/i);

    const locked = getByTestId("locked");
    const closed = getByTestId("closed");

    expect(locked).toHaveTextContent(/unlocked/i);
    expect(closed).toHaveTextContent(/open/i);
  });

  it("displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise", () => {
    const { getByText, getByTestId } = render(<Display closed={true} />);
    const closed = getByTestId("closed");
    expect(closed).toHaveTextContent(/closed/i);
  });

  it("displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise", () => {
    const { getByText, getByTestId } = render(<Display locked={true} />);
    const locked = getByTestId("locked");
    expect(locked).toHaveTextContent(/locked/i);
  });

  it("when `locked` or `closed` use the `red-led` class", () => {
    const { getByText, getByTestId } = render(
      <Display locked={true} closed={true} />
    );
    const locked = getByTestId("locked");
    const closed = getByTestId("closed");
    expect(locked).toHaveClass("red-led");
    expect(closed).toHaveClass("red-led");
  });

  it("when `unlocked` or `open` use the `green-led` class", () => {
    const { getByText, getByTestId } = render(
      <Display locked={false} closed={false} />
    );
    const locked = getByTestId("locked");
    const closed = getByTestId("closed");
    expect(locked).toHaveClass("green-led");
    expect(closed).toHaveClass("green-led");
  });
});
