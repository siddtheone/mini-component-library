import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper width={width} size={size}>
      <VisuallyHidden>
        <label for="input">{label}</label>
      </VisuallyHidden>

      <StyledInput placeholder={placeholder} size={size} />
      <StyledIcon id={icon} size={size === "small" ? 16 : 24} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: ${(props) => props.width}px;
  height: ${(props) => (props.size === "small" ? 24 : 36)}px;
  border-bottom: solid ${COLORS.black};
  border-width: ${(props) => (props.size === "small" ? 1 : 2)}px;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledInput = styled.input`
  position: absolute;
  border: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  padding-left: ${(props) => (props.size === "small" ? 24 : 36) + 8}px;
  color: currentColor;
  font-weight: bolder;

  &::placeholder {
    font-weight: normal;
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;

export default IconInput;
