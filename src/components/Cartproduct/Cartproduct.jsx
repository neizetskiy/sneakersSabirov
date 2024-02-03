import './Cartproduct.css'
export default function Cartproduct({category, name, img, price}){
    return(
        <>
            <div className="cartitem">
                <img src={img} alt="" />
                <div className="itemName">
                    <p>{category}</p>
                    <p>{name}</p>
                    <b>{price}</b>
                </div>
                <button className="removefromcart">✕</button>
            </div>
        </>
    )
}