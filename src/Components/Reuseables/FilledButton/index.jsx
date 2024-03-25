import style from "./index.module.css"
const FilledButton = ({color,text,textColour,width})=>{
    return(
        <div>
            <button style={{background:color, color:textColour,width:width}} className={style.filledButton}>
                {text}
            </button>
        </div>
    )
}

export default FilledButton