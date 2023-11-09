import "./hero.scss"
import HeroImg from "../../assets/images/hero.svg"
import { Button, Container } from "../../utils/index"

const Hero = () => {
  return (
    <div className='hero'>
      <Container>
        <div className="hero__wrapper">
          <div className="hero__content">
            <h2>Stay curious.</h2>
            <p>Discover stories, thinking, nad expertiser from writers on my topic.</p>
            <Button type={"large"} text="Start Reading" />
          </div>
          <div className="hero__image">
            <img src={HeroImg} alt="Hero_Img" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero