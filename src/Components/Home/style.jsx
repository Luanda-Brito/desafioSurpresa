import styled from "styled-components";

export const MainStyle = styled.main`
  display: flex;
  align-items: center;
  height: 80vh;
`

export const Texto = styled.section`
width: 400vw;
height: 80vh;
margin: 40px;
font-family: "Poppins", sans-serif;

h2 {
font-family: "Inter", sans-serif;
//font-size: 10px;
}

h1 {
font-size: 38px;
}

span{
  font-size: 48px;
  color: #037143;
}

p {
font-size: 16px;
line-height: 1.5;
}

button {
margin-top: 20px;
margin-bottom: 20px;
}
`

export const Section = styled.section`
  position: relative;
  height: auto;
  right: 0;
  bottom: 0;
  
`

export const Copo = styled.img`
  position: absolute;
  right: 10px; /* Alinha à direita */
  bottom: 10px;
  height: auto;
 `

export const Button = styled.button`
background-color: #037143;
color: white;
border: none;
padding: 10px 30px;
font-weight: bold;
border-radius: 30px;
cursor: pointer;
font-family: "Inter", sans-serif;
`

export const Div = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
position: relative;
cursor: pointer;

  
`