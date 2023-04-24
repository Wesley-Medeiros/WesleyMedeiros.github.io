import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  background-color: #151515;
  padding: 6.5% 15%;
  min-height: 35vh;


  h1 {
    margin-bottom: 2rem;
  }

  h2 {
    margin-bottom: 1rem;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  

  @media (max-width: 880px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`

export const Svg = styled.div`
  min-width: 300px;
  
  img {
    border-left: 5px solid #00d2df;
    transition: 0.4s;   
}

@media (max-width: 880px) {
  max-width: 80%;
  }
`

export const DescriptionContainer =styled.div`
  line-height: 1.5rem;
  width: 70%;
  margin-top: 2rem;

  @media (max-width: 880px) {
    width: 80%;
    text-align: center;
  }
  
`

export const AboutButtons =styled.div` 
  display: flex;
  width: 350px;
  justify-content: space-between;

  img {
    width: 22px;
  }

  div {
    display: flex;
    align-items: center;
    padding: 3px 5px 5px;
    justify-content: space-evenly;
    width: 140px;
    border: 2px solid #00d2df;
    border-radius: 8px;
    position: relative;
    background-color: #121212;
    margin-top: 1rem;
    font-weight: 600;
    font-size: 0.95rem;
    letter-spacing: 1.5px;
    height: 40px; 
  }

  div:hover {
    background-color: #272727;
    text-shadow: 1px 1px 3px #00bbc5;
  }

  @media (max-width: 880px) {
    width: 320px;
    margin: 1rem auto;
  }
`