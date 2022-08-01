import React from "react";
import styled from "styled-components";
import CloseButton from "./CloseButton";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin: 1em auto 0;
    height: 90%;
    width: auto;
    object-fit: cover;
  }

  p {
    color: rgba(255, 255, 255, 0.6);
    font-family: "Arial", sans-serif;
  }
`;

const ActiveImg = ({
  isOpen,
  setOpen,
  pictures,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <Wrapper isOpen={isOpen}>
      <img
        src={pictures[activeIndex].src}
        id={pictures[activeIndex].id}
        alt={pictures[activeIndex].alt}
      />
      <p>{`Picture ${activeIndex + 1} of ${pictures.length}`}</p>
      <CloseButton onClick={() => setOpen(false)} />
      <NextButton
        onClick={() =>
          activeIndex + 1 === pictures.length
            ? setActiveIndex(0)
            : setActiveIndex(activeIndex + 1)
        }
      />
      <PrevButton
        onClick={() =>
          activeIndex === 0
            ? setActiveIndex(pictures.length - 1)
            : setActiveIndex(activeIndex - 1)
        }
      />
    </Wrapper>
  );
};

export default ActiveImg;
