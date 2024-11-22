import { useState } from "react"
import { MainStyle, Button, Copo, Section, Texto, Div } from "./style"

export default function Home() {

    const [copo, setCopo] = useState("https://raw.githubusercontent.com/mariaccarolina/desafioSurpresa/496e16d63d9b8430605e63b086aee1aac18d22b3/src/assets/images/laranja2x.png");
    const [elipse, setElipse] = useState("https://raw.githubusercontent.com/mariaccarolina/desafioSurpresa/f85376c93fd68e4f3c0000bb306c1822f607c747/src/assets/images/Ellipse%201.png")

    const handleImageClick = (copo, elipse) => {
        setCopo(copo);
        setElipse(elipse);
    }
    return (
    <MainStyle>
        <Texto>
            <h2>Mais que Café</h2>
            <h1>Isso é <span>Starbucks</span></h1>
            <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
            <Button>SAIBA MAIS</Button>

            <Div>
            <img src="https://raw.githubusercontent.com/mariaccarolina/desafioSurpresa/496e16d63d9b8430605e63b086aee1aac18d22b3/src/assets/images/laranja.png" alt="copo pequeno laranja"  onClick={() =>("https://raw.githubusercontent.com/mariaccarolina/desafioSurpresa/496e16d63d9b8430605e63b086aee1aac18d22b3/src/assets/images/laranja2x.png", "https://raw.githubusercontent.com/mariaccarolina/desafioSurpresa/f85376c93fd68e4f3c0000bb306c1822f607c747/src/assets/images/Ellipse%201.png"
            )}/>
            <img src="https://raw.githubusercontent.com/mariaccarolina/desafioSurpresa/496e16d63d9b8430605e63b086aee1aac18d22b3/src/assets/images/vermelho.png" alt="copo pequeno vermelho" onClick={() => handleImageClick(
              "https://raw.githubusercontent.com/mariaccarolina/desafioSurpresa/496e16d63d9b8430605e63b086aee1aac18d22b3/src/assets/images/vermelho2x.png",
              "https://raw.githubusercontent.com/mariaccarolina/desafioSurpresa/f85376c93fd68e4f3c0000bb306c1822f607c747/src/assets/images/vermelhoElipse.png"
            )}/>
            <img src="https://raw.githubusercontent.com/mariaccarolina/desafioSurpresa/496e16d63d9b8430605e63b086aee1aac18d22b3/src/assets/images/amarelo.png" alt="copo pequeno amarelo" onClick={() => handleImageClick("https://raw.githubusercontent.com/mariaccarolina/desafioSurpresa/496e16d63d9b8430605e63b086aee1aac18d22b3/src/assets/images/amarelo2x.png", "https://raw.githubusercontent.com/mariaccarolina/desafioSurpresa/f85376c93fd68e4f3c0000bb306c1822f607c747/src/assets/images/Ellipse%202.png"
            )}/>
            </Div>

        </Texto>
        <Section>
            <Copo src={copo} alt="copo maior" />
            <img src={elipse} alt="elipse" />
        </Section>
    </MainStyle>
    )
}