import styled from "styled-components"

export const FooterContainer = styled.footer`
  padding: 2rem 0;
  text-align: center;
  background-color: #151515;

  img {
  width: 14px;
  position: relative;
  top: 2px;
  margin: 0 1.5px;
}

p {
  display: inline-block;
}

span {
  color: #00d2df;
  font-weight: bold;
  transition: .4s;
}

span:hover {
  color: rgba(101, 24, 180, 1)
}

`