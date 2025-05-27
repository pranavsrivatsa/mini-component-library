/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBarFill = styled.div`
  width: ${(props) => props.val}%;
  height: ${(props) => props.barHeight}px;
  background-color: ${COLORS.primary};
  border-radius: ${(props) => (props.val === 100 ? "2px" : "4px 0 0 4px")};
`;

const Wrapper = styled.div`
  width: 100%;
  height: ${(props) => props.barHeight}px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
  overflow: clip;
  padding: ${(props) => props.padding}px;
`;

const ProgressBar = ({ value, size }) => {
  const barHeight = size === "small" ? 8 : size === "medium" ? 12 : 24;
  const innerHeight = size === "small" ? 8 : size === "medium" ? 12 : 16;
  const padding = size === "large" ? 4 : 0;
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      barHeight={barHeight}
      padding={padding}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <ProgressBarFill val={value} barHeight={innerHeight}></ProgressBarFill>
    </Wrapper>
  );
};

export default ProgressBar;
