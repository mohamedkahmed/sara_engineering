import { features} from "../../assets/data";
import "./Features.scss";
const Features = () => {

  return (
    <section id='features' className="our_features" >
    <div className="container">
  <div className="features_content" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
    {features.map((el) => {
      const {id, image, iconImg, title, desc} = el
      return (
        <div className='feat' key={id}>
          <div className="images">
            <img src={image} alt={title} />
          </div>
          <div className="text">
            <img src={iconImg} alt={title} />
            <h5>{title}</h5>
            <p>{desc}</p>
          </div>
        </div>
      )
    })}
  </div>
    </div>
  </section>
  )
}

export default Features