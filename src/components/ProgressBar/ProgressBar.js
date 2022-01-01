/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZE = {
  small: "8px",
  medium: "12px",
  large: "24px",
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
  height: var(--size);

  &::before {
    content: " ";
    display: block;
    width: ${(props) => props.value}%;
    height: 100%;
    background: ${COLORS.primary};
    border-radius: 4px;
    border-top-right-radius: ${(props) => (props.value === 100 ? 4 : 0)}px;
    border-bottom-right-radius: ${(props) => (props.value === 100 ? 4 : 0)}px;
  }
`;

const LargeProgressBar = styled(Wrapper)`
  padding: 4px;
  border-radius: 8px;
`;

const ProgressBar = ({ value, size }) => {
  let Component;

  if (size !== "large") {
    Component = Wrapper;
  } else {
    Component = LargeProgressBar;
  }

  return (
    <Component
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ "--size": SIZE[size] }}
      value={value}
    />
  );
};

export default ProgressBar;
