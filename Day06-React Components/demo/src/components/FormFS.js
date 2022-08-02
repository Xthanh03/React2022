import InputFC from "./InputFunctionComp";

function FormFC(props){
    return(
        <div classNmae="container">
            <h1>Email</h1>
            <InputFC type="email" placeholder="Enter your email"></InputFC>

            <h1>Password</h1>
            <InputFC type="password" placeholder="Enter your password"></InputFC>
            <InputFC type="submit">submit</InputFC>
        </div>
    )
}
export default FormFC;