import Product from "../Product/Product";
import Search from "../Search/Search";
import {products} from "/data.js"
import "./Catalog.css"

export default function Catalog(){
    return(
        <>
            <div className="catalog">
                <div className="catalog-head">
                    <h2>Все кроссовки</h2>
                    <Search />
                </div>
                <div className="catalog-items">
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    )
}