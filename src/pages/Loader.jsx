import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>

      <div className="loader">

        {/* LOGO / TITLE */}
        <h1 className="brand-name">
          Loading......
        </h1>

        {/* LOADING TEXT */}
        <div className="loading-text">
          
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </div>

        {/* BAR */}
        <div className="loading-bar-background">

          <div className="loading-bar">

            <div className="white-bars-container">

              <div className="white-bar" />
              <div className="white-bar" />
              <div className="white-bar" />
              <div className="white-bar" />
              <div className="white-bar" />
              <div className="white-bar" />
              <div className="white-bar" />
              <div className="white-bar" />

            </div>

          </div>

        </div>

      </div>

    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`

  .loader {

    min-height: 100vh;
    width: 100%;

    background: linear-gradient(
      135deg,
      #0f172a,
      #111827,
      #1e293b
    );

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 20px;

    overflow: hidden;
  }

  /* BRAND NAME */

  .brand-name {

    font-size: 48px;
    font-weight: 800;

    color: white;

    letter-spacing: 2px;

    background: linear-gradient(
      90deg,
      #3b82f6,
      #06b6d4,
      #8b5cf6
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* LOADING TEXT */

  .loading-text {

    color: white;

    font-size: 20px;
    font-weight: 600;

    letter-spacing: 2px;
  }

  .dot {

    margin-left: 3px;

    animation: blink 1.5s infinite;
  }

  .dot:nth-child(2) {
    animation-delay: 0.3s;
  }

  .dot:nth-child(3) {
    animation-delay: 0.6s;
  }

  /* BACKGROUND BAR */

  .loading-bar-background {

    --height: 20px;

    display: flex;
    align-items: center;

    padding: 4px;

    width: 300px;
    height: var(--height);

    background: rgba(255, 255, 255, 0.08);

    backdrop-filter: blur(10px);

    border-radius: 999px;

    border: 1px solid rgba(255, 255, 255, 0.1);

    overflow: hidden;

    box-shadow:
      0 0 20px rgba(59,130,246,0.2),
      inset 0 0 10px rgba(255,255,255,0.05);
  }

  /* MAIN LOADING BAR */

  .loading-bar {

    position: relative;

    display: flex;
    align-items: center;

    --height: 12px;

    width: 0%;
    height: var(--height);

    overflow: hidden;

    border-radius: 999px;

    background: linear-gradient(
      90deg,
      #3b82f6,
      #06b6d4,
      #8b5cf6
    );

    animation: loading 3s ease-in-out infinite;
  }

  /* WHITE MOVING EFFECT */

  .white-bars-container {

    position: absolute;

    display: flex;
    align-items: center;

    gap: 18px;
  }

  .white-bar {

    width: 12px;
    height: 40px;

    background: linear-gradient(
      -45deg,
      rgba(255,255,255,0.9),
      rgba(255,255,255,0)
    );

    opacity: 0.5;

    transform: rotate(25deg);
  }

  /* LOADING ANIMATION */

  @keyframes loading {

    0% {
      width: 0%;
    }

    50% {
      width: 75%;
    }

    100% {
      width: 100%;
    }
  }

  /* TEXT BLINK */

  @keyframes blink {

    0%,
    100% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }
  }

  /* RESPONSIVE */

  @media(max-width:768px){

    .brand-name{
      font-size:36px;
    }

    .loading-bar-background{
      width:220px;
    }

    .loading-text{
      font-size:16px;
    }
  }

`;

export default Loader;