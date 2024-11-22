import styled from "styled-components";

export const HeaderStyle = styled.header`
 display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 70px; 
  background-color: white;
  font-family: "Poppins", sans-serif;

  img {
    height: 60px;
  }

  nav {
    display: flex;
    align-items: center;

    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      margin-left: 30px; 
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;