import { MdKeyboardArrowDown } from "react-icons/md";
import { useLocation } from "react-router-dom";
import "./ArrowDownIcon.scss";

const ArrowDownIcon = (props) => {
  const location = useLocation();
  const pathName = location.pathname;
    const {alignItems} = props
  return (
    <div className={pathName === "/contact" ? `down_icon contact_down_icon text-${alignItems}`: pathName === "/privacy" ? `down_icon contact_down_icon text-${alignItems}` : `down_icon text-${alignItems}`}>
    <div className="container">
       <MdKeyboardArrowDown/>
    </div>
   </div>
  )
}

export default ArrowDownIcon