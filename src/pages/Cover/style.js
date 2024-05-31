import styled from "styled-components";

export const StyledCover = styled.main`
  .video-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .video-background {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
  }

  .video-container > a {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.25rem;
    font-size: 1.875rem;
    font-weight: 700;
    text-align: center;
    background-color: #003c59;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  .video-container > a:hover {
    background-color: #f58b01;
  }
`;