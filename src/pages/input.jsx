import React from 'react';
import styled from 'styled-components';

const Input = () => {
  return (
    <StyledWrapper>
      <input placeholder="Enter your text..." className="input" name="text" type="text" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .input {
    background-color: #212121;
    max-width: 190px;
    height: 40px;
    padding: 10px;
    /* text-align: center; */
    border: 2px solid white;
    border-radius: 5px;
    /* box-shadow: 3px 3px 2px rgb(249, 255, 85); */
  }

  .input:focus {
    color: rgb(0, 255, 255);
    background-color: #212121;
    outline-color: rgb(0, 255, 255);
    box-shadow: -3px -3px 15px rgb(0, 255, 255);
    transition: .1s;
    transition-property: box-shadow;
  }`;

export default Input;
