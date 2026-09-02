import React from "react"
import styled from "styled-components"

const ProfileCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-photo">
          <img src="/BW.jpeg" alt="Faza Syaquille Suny" />
        </div>
        <div className="card-title">
          Faza Syaquille Suny
          <br />
          <span>Cloud Eng. | ML | Web Dev</span>
        </div>
        <div className="card-socials">
          <a href="https://github.com/fazasuny" target="_blank" rel="noopener noreferrer" className="card-socials-btn github" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/fazasuny/" target="_blank" rel="noopener noreferrer" className="card-socials-btn facebook" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="https://linkedin.com/in/fazasuny" target="_blank" rel="noopener noreferrer" className="card-socials-btn linkedin" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z" />
            </svg>
          </a>
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .card {
    --font-color: var(--ink);
    --font-color-sub: var(--muted);
    --bg-color: #0a0a14;
    --main-color: var(--ink);
    width: 280px;
    background: var(--bg-color);
    border: 2px solid var(--main-color);
    box-shadow: 8px 8px var(--main-color);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 20px 28px;
    transition: transform 0.4s ease;
  }

  .card:hover {
    transform: translateY(-6px);
  }

  .card-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid var(--ink);
    background: #ccc;
  }

  .card-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .card-title {
    text-align: center;
    color: var(--font-color);
    font-size: 22px;
    font-weight: 600;
    margin-top: 20px;
    line-height: 1.3;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .card-title span {
    font-size: 14px;
    font-weight: 400;
    color: var(--font-color-sub);
  }

  .card-socials {
    display: flex;
    height: 0;
    opacity: 0;
    margin-top: 20px;
    gap: 24px;
    transition: 0.5s;
    overflow: hidden;
  }

  .card-socials-btn {
    width: 26px;
    height: 26px;
    border: none;
    background: transparent;
    cursor: pointer;
    color: var(--main-color);
  }

  .card-socials-btn svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }

  .card:hover > .card-socials {
    opacity: 1;
    height: 32px;
  }

  .card-socials-btn:hover {
    transform: translateY(-5px);
    transition: all 0.15s;
  }
`

export default ProfileCard
