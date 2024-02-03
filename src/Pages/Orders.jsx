import Emptypage from "../components/Empty/Empty"
export default function Orderspage(){
    return(
        <>
        <div className="container">
            <Emptypage emoji="😔" head="У вас нет заказов" firsttext="Вы нищеброд?" secondtext="Оформите хотя бы один заказ."/>
        </div>
        </>
    )
}