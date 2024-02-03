import { Link } from "react-router-dom"
import logo from "/Header/logo.png"
import cart from "/Header/cart.svg"
import profile from "/Header/profile.svg"
import heart from "/Header/heart.svg"
import "./Header.css"

import Cart from "../Cart/Cart"

export default function Header(){
 
    function modalAct(){
        const cartblock = document.getElementById('cart')
        cartblock.classList.toggle('hidden')
    }

    return(
        <>
       
            <header>
                <Link to="/" ><img src={logo} alt="logo" /></Link>
                <nav>
                    <ul>
                        
                    </ul>
                    <button onClick={modalAct}  className="cartlink"><img src={cart} alt="" /> 1234 ₽</button>
                    <Link to="/favorite" className="link"><img src={heart} alt="" /></Link>
                    <Link to="/orders" className="link"><img src={profile} alt="" /></Link>
                </nav>
            </header>

            <Cart> </Cart>
        </>
    )
    
}