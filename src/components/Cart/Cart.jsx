import "./Cart.css"
import Cartproduct from "../Cartproduct/Cartproduct"
import Button from "../Button/Button"
import {products} from "/data.js"

export default function Cart(){
    

    function modalAct(){
        const cartblock = document.getElementById('cart')
        cartblock.classList.toggle('hidden')
    }

    

    return(
        
        <>
        <div className="cart hidden" id="cart" onClick={modalAct}>
            <div className="cart-item">
                <div className="cart-head">
                    <h2>Корзина</h2>
                    <div className="cart-products">
                        <Cartproduct  {...products[0]} />
                        <Cartproduct  {...products[1]} />
                        <Cartproduct  {...products[2]} />
                    </div>
                </div>
                <div className="cart-end">
                    <div className="cart-price">
                        <p>Итого:</p>
                        <h4>21 500 ₽</h4>
                    </div>
                    <div className="cart-price">
                        <p>Налог 5%</p>
                        <h4>1050 ₽</h4>
                    </div>
                    <div className="cart-action">
                        <Button bradius="18px" padding="100px 20px">Оформить заказ →</Button>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )

    
}