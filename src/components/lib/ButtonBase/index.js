import React from 'react'
import propTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 5px;
  border-radius: 3px;
  border: none;
  font-family: 'roboto';
  background-color: ${ props => props.danger ? "#C62828" : "#1565C0" };
  color: #fff;
  cursor: pointer;
  width: 150px;
  height: 40px;

  &:hover {
    background-color: ${ props => props.danger ? "#D32F2F" : "#1976D2" };
  }

  &:focus {
    outline: none;
  }
`;

const ButtonBase = (props) => {
  return <StyledButton {...props}>
    { props.children }
  </StyledButton>
};

ButtonBase.propTypes = {
  danger: propTypes.bool
};

ButtonBase.defaultProps = {
  danger: false
};

export default ButtonBase;