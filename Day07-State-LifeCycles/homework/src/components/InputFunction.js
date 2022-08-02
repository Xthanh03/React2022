function InputFC(props) {
    return (
        <div>
            <input type={props.type} className={props.className} id={props.id} size={props.size ? props.size : "30"} placeholder={props.placeholder}></input>
            <br></br>
        </div>
    )
}

export default InputFC;