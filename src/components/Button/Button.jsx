import './Button.css'
import { Link } from "react-router-dom"
export default function Button({children, href, padding, bradius}){
    const styles = {
        padding: "15px " + padding,
        borderRadius: bradius
    }
    return(
        
        <>
            <Link to={href} style={styles} className="button">{children}</Link>
        </>
    )
}