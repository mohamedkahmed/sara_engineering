import "./OurEmphasis.scss";

const OurEmphasis = () => {
  return (
    <section className="our_emphasis">
        <div className="our_emp_content">
            <div className="image" data-aos="fade-right">
                <img src="/images/ourEmphasis.png" alt="ourEmphasis img" />
            </div>
            <div className="our_emp_text" data-aos="fade-left">
                <div className="title_top">
                    <h1>Our Emphasis!</h1>
                </div>
                <div className="down_feat">
                    <div className="feat">
                        <div className="feat_img">
                            <img src="/images/Group 1378.png" alt="icon" />
                        </div>
                        <div className="feat_content">
                            <h5>Quality</h5>
                            <p>Highest quality standards, using premium products and best practices to ensure excellence in all our solutions.</p>
                        </div>
                    </div>
                    <div className="feat">
                        <div className="feat_img">
                            <img src="/images/Group 1379.png" alt="icon" />
                        </div>
                        <div className="feat_content">
                            <h5>Reliability</h5>
                            <p>Our engineering team ensures long-term sustainability and dependability.</p>
                        </div>
                    </div>
                    <div className="feat">
                        <div className="feat_img">
                            <img src="/images/Group 1380.png" alt="icon" />
                        </div>
                        <div className="feat_content">
                            <h5>Sustainability</h5>
                            <p>Commitment to environmental sustainability, ensuring our operations meet the highest environmental safety standards.</p>
                        </div>
                    </div>
                    <div className="feat">
                        <div className="feat_img">
                            <img src="/images/Group 1381.png" alt="icon" />
                        </div>
                        <div className="feat_content">
                            <h5>Cost Effectiveness</h5>
                            <p>Continuously optimizing processes to deliver superior performance and value.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
  )
}

export default OurEmphasis