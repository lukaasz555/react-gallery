import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 400px;
  height: auto;
  overflow: hidden;
  margin: 1em;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.45);
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    transition: transform 0.25s;
    object-fit: cover;
    cursor: pointer;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const SingleItem = ({ id, src, alt, onClick, isOpen, setOpen }) => (
  <Wrapper src={src}>
    <img src={src} alt={alt} id={id} onClick={onClick} />
  </Wrapper>
);

export default SingleItem;
