import './item.css';
import { Link } from "react-router-dom";

export function Item(props: any) {
    return(
        <div className="item">
        <Link to={"/"+ props.route}>{props.value}</Link> 
        </div>
    )
}