import React from 'react';
import { Header, Loading, ChooseUs, SingleFeature, HomeSolutions, Roadmap, OurEmphasis, HomeNews } from '../../components';
import {useFetchAboutFeatures} from "../../components/featchData/FeatchData";
const Home = () => {
  const {loading, aboutFeat} = useFetchAboutFeatures();

  if (loading) {
    return (
        <Loading/>
    )
  }
  return (
    <div className='home-wrapper'>
      {/* import header */}
      <Header/>
      {/* import why choose us */}
      <ChooseUs/>
      {/* features */}
      
      <section className="features_section">
        <div className="container">
          <div className="ch-section">
            {aboutFeat.map((item) => {
              const { id, image, num, title } = item;
              return (
                <SingleFeature key={id} image={image} num={num} title={title}/>
              );
            })}
          </div>
        </div>
      </section>
      {/* home solutions */}
      <HomeSolutions/>
      {/* roadmap */}
      <Roadmap/>
      {/* OurEmphasis */}
      <OurEmphasis/>
      {/* news */}
      <HomeNews/>
    </div>
  )
}

export default Home