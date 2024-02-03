import "./Search.css"
export default function Search({action}){
    return(
        <>
         <form action={action} method="get">
            <input className="search" type="search" placeholder="🔎︎ Поиск..." name="search" id="" />
        </form>
        </>
    )
   
}