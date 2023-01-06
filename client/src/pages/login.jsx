import "./login.css"
export default function login(){
    return(
    <div id="loginCard" className="drop-shadow-2xl">
        <div id="loginForm" className="flex flex-col justify-evenly">
        <label className="" htmlFor="">Username</label>
        <input className="rounded-lg w-9/12 mx-auto border-solid border  border-gray-600  hover:border-black hover:drop-shadow-lg" type="text" />
        <label className="" htmlFor="">Password</label>
        <input className="rounded-lg w-9/12 mx-auto border-solid border  border-gray-600  hover:border-black hover:drop-shadow-lg" type="password" />
        </div>
    </div>    
    )
}