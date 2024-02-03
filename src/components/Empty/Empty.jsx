import "./Empty.css"
import Button from "../Button/Button"
export default function Emptypage({head, emoji,  firsttext, secondtext}){
    return(
        <>
        <div className="empty">
            <div className="empty-item">
                <div className="empty-head">
                    <p className="emoji">{emoji}</p>
                    <h3>{head}</h3>
                    <p>{firsttext}</p>
                    <p>{secondtext}</p>
                </div>
                
                <div className="empty-end">
                    <Button bradius="18px" padding="60px" href="/">← Вернуться назад</Button>
                </div>
            </div>
        </div>
        </>
    )
}