import React from 'react'
import { ArrowDownIcon, BreadCrumb, Loading } from '../../components'
import { MdKeyboardArrowDown, MdArrowRightAlt } from "react-icons/md";
import {useFetchOurNews} from "../../components/featchData/FeatchData";
import "./News.scss";
import { Link } from 'react-router-dom';
/* import moment from 'moment'; */

const News = () => {
    const {loading, ourNews} = useFetchOurNews();

    if (loading) {
        return (
            <Loading/>
        )
      }
  return (
    <>
    <BreadCrumb title="News" desc="Stay up-to-date with the latest developments, projects awarded, projects completed by Sara Engineering & Energy." img="/images/31.png"/>
          <ArrowDownIcon alignItems="right" />
          <section className="news_wrapper">
            {ourNews.map((items) => {
              const {id,image, para1, para2, title, date, url}  = items;
              return (
                <div   className="news_content" key={id}>
                    <div className="content_text">
                        <h2>{title}</h2>
                        <p title={para1}>{para1}</p>
                        <p title={para2}>{para2}</p>
                        <div className="date">
                <p> {date} {/* {moment(date).format('dddd, DD-MM-YYYY')} */}</p>
              </div>
                        <div className="read_more_btn">
                <Link to={`/singleNews/${id}`}>Read More <MdArrowRightAlt/></Link> 
              </div>
                    </div>
                    <div className="image">
                    <div className="u-img">
                    {url ? (
                      <video className="single_video" height="786px" autoPlay muted loop>
                        <source src={url} type="video/mp4" />
                      </video>
                    ) : (
                        <img src={image} alt={title} />
                    )}
                        </div>
                        <div className="side_img_di">
                    </div>
                    </div>
                    <div className="arrow_icon">
                     <MdKeyboardArrowDown/>
                    </div>
                </div>
              )
            })}
          </section>
    </>
  )
}

export default News