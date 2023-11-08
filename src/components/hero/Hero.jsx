import "./hero.scss"
import HeroImg from "../../assets/images/hero.svg"
const Hero = () => {
  return (
    <div className='hero'>
        <img src={HeroImg} alt="" />
    </div>
  )
}

export default Hero