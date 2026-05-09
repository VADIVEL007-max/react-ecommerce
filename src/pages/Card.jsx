import React from 'react';
import styled from 'styled-components';
import { card1, card2 } from '../assets/Admin/AdminImage';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="flip-card">
        <div className="flip-card-inner">

          {/* Front Side */}
          <div className="flip-card-front">
            <img src={card2} alt="card" className="card-image" />
          </div>

          {/* Back Side */}
          <div className="flip-card-back">
            <p className="title">BACK SIDE</p>
            <p>Leave Me</p>
          </div>

        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">

          {/* Front Side */}
          <div className="flip-card-front">
            <img src={card2} alt="card" className="card-image" />
          </div>

          {/* Back Side */}
          <div className="flip-card-back">
            <p className="title">BACK SIDE</p>
            <p>Leave Me</p>
          </div>

        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">

          {/* Front Side */}
          <div className="flip-card-front">
            <img src={card2} alt="card" className="card-image" />
          </div>

          {/* Back Side */}
          <div className="flip-card-back">
            <p className="title">BACK SIDE</p>
            <p>Leave Me</p>
          </div>

        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">

          {/* Front Side */}
          <div className="flip-card-front">
            <img src={card2} alt="card" className="card-image" />
          </div>

          {/* Back Side */}
          <div className="flip-card-back">
            <p className="title">BACK SIDE</p>
            <p>Leave Me</p>
          </div>

        </div>
      </div>
    </StyledWrapper>
    
  );
};

const StyledWrapper = styled.div`

  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;

  .flip-card {
    background-color: transparent;
    width: 250px;
    height: 320px;
    perspective: 1000px;
    font-family: sans-serif;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    box-shadow: 0 8px 14px rgba(0,0,0,0.2);
  }

  .flip-card-front {
    background: #fff;
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .flip-card-back {
    background: linear-gradient(
      120deg,
      rgb(255, 174, 145) 30%,
      coral 88%,
      bisque 40%,
      rgb(255, 185, 160) 78%
    );

    color: white;
    transform: rotateY(180deg);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
export default Card;