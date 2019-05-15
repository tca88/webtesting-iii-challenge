import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import Controls from "./Controls";
cleanup(afterEach);
describe("<Controls />", () => {
  it("renders the component", () => {
    render(<Controls />);
  });

  it("provide buttons to toggle the `closed` and `locked` states.", () => {
    const { getByText, getByTestId } = render(<Controls locked={true} />);

    const closedButton = getByTestId("closed");
    const lockedButton = getByTestId("locked");

    expect(closedButton).toHaveTextContent(/lock gate/i);
    expect(lockedButton).toHaveTextContent(/close gate/i);
  });

  it("buttons' text changes to reflect the state the door will be in if clicked", () => {
    const { getByTestId } = render(<Controls locked={true} />);
    const closed = getByTestId("closed");
    fireEvent.click(closed);

    expect(closed).toHaveTextContent(/unlock gate/i);
  });

  it("the closed toggle button is disabled if the gate is closed", () => {
    const { getByText, getByTestId } = render(<Controls closed={true} />);

    const closedButton = getByTestId("locked");

    expect(closedButton).toHaveProperty("disabled");
  });

  it("the locked toggle button is disabled if the gate is open", () => {
    const { getByText, getByTestId } = render(<Controls closed={false} />);

    const lockedButton = getByTestId("closed");

    expect(lockedButton).toHaveProperty("disabled");
  });
});
