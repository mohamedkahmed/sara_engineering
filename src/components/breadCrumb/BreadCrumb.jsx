import "./BreadCrumb.scss";

const BreadCrumb = (props) => {
    const { title, desc, img } = props;
  return (
    <div className='breadCrumb'>
            <div className="content">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            <div className="cover_image">
                <img src={img} alt="cover" />
            </div>
    </div>
  )
}

export default BreadCrumb