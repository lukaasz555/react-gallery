import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const StyledButton = styled.button`
  position: fixed;
  right: 0.5em;
  top: 0.5em;
  background: none;
  border: none;
  font-size: 25px;
  color: #fff;
  opacity: 0.45;
  transition: opacity 0.25s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const CloseButton = ({ onClick }) => (
  <StyledButton onClick={onClick}>
    <FontAwesomeIcon icon={faXmark} />
  </StyledButton>
);

export default CloseButton;
