import styled from "styled-components";

export const Section = styled.section`
display: flex;
flex-direction: row-reverse;
align-items: center;
justify-content: space-around;
height: 80vh; 
background-color: #1e3932;
color: white;
`

export const Div = styled.div`
width: 40vw; 

h3{
    font-size: 19px;
    font-family: "Inter", sans-serif;
}

h2{
    font-size: 40px;
    font-family: "Poppins", sans-serif;
}

p{
    font-size: 20px;
    font-family: "Poppins", sans-serif;
}
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