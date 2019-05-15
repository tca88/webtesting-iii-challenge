import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import Dashboard from "./Dashboard";
import Controls from "../controls/Controls";
import Display from "../display/Display";
cleanup(afterEach);
describe("<Dashboard />", () => {
  it("shows the controls and display", () => {
    render(<Dashboard />);
  });
  it("shows the controls and display", () => {
    render(<Controls />);
  });
  it("shows the controls and display", () => {
    render(<Display />);
  });
});
