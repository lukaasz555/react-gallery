import React, { useState } from "react";
import data from "./data/data";
import styled from "styled-components";
import SingleItem from "./components/SingleItem";
import ActiveImg from "./components/ActiveImg";

const Wrapper = styled.div`
  margin: 2em auto;
  max-width: 1300px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const App = () => {
  const [pictures, setPictures] = useState(data);
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const showPicture = (index) => {
    setOpen(true);
    setActiveIndex(index);
  };

  return (
    <Wrapper>
      {pictures.map((pic, index) => (
        <SingleItem
          index={index}
          key={pic.id}
          id={pic.id}
          src={pic.src}
          onClick={(e) => showPicture(index)}
        />
      ))}

      <ActiveImg
        isOpen={isOpen}
        setOpen={setOpen}
        pictures={pictures}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </Wrapper>
  );
};

export default App;
