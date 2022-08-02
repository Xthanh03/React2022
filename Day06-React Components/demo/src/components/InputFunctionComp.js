function InputFC(props){
    return(
        <input className={props.className} id={props.id} size={props.size ? props.size :'30'} placeholder={props.placeholder}></input>
    )
}
export default InputFC;