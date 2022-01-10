import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <StyledDisplayValue>
      <SyledSelect value={value} onChange={onChange}>
        {children}
      </SyledSelect>
      {displayedValue} <Icon id="chevron-down" />
    </StyledDisplayValue>
  );
};

const StyledDisplayValue = styled.div`
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 16px;
  color: ${COLORS.gray700};
  display: flex;
  align-items: center;
  width: max-content;
  position: relative;

  &:hover {
    color: black;
  }
`;

const SyledSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;

  &:focus {
  }
`;

export default Select;
