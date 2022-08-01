import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

/* const StyledButton = styled.button`
  display: block;
  position: fixed;
  right: 1em;
  top: 1em;
  width: 32px;
  height: 32px;
  transition: opacity 0.25s;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.45;

  &:hover {
    opacity: 1;
  }
  &:before {
    content: "";
    position: absolute;
    display: block;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 32px;
    height: 0;
    border-top: 2px solid #fff;
    transform: rotate(45deg);
    transform-origin: center;
    font-weight: bold;
  }
  &:after {
    content: "";
    position: absolute;
    display: block;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 32px;
    height: 0;
    border-top: 2px solid #fff;
    transform: rotate(-45deg);
    transform-origin: center;
    font-weight: bold;
  }
`; */

/* const CloseButton = ({ onClick }) => <StyledButton onClick={onClick} />; */

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
