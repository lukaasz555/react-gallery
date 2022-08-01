import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const StyledButton = styled.button`
  position: fixed;
  right: 0.5em;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 25px;
  cursor: pointer;
  color: #fff;
  transition: opacity 0.25s;
  opacity: 0.45;

  &:hover {
    opacity: 1;
  }
`;

const NextButton = ({ onClick }) => (
  <StyledButton onClick={onClick}>
    <FontAwesomeIcon icon={faAngleRight} />
  </StyledButton>
);

export default NextButton;
