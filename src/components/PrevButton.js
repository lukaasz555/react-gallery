import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const StyledButton = styled.button`
  position: fixed;
  left: 0.5em;
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

const PrevButton = ({ onClick }) => (
  <StyledButton onClick={onClick}>
    <FontAwesomeIcon icon={faAngleLeft} />
  </StyledButton>
);

export default PrevButton;
