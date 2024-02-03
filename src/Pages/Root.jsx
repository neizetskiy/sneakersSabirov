import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Root = () =>{
    useEffect(()=>{
        document.title = 'Sneakers'
    }, [])

    return(
        <>
        <main>
            <div className="container">
                <Header />
            </div>
            <hr />
           
                <Outlet />
            
        
        </main>
        </>
    )
}

export default Root