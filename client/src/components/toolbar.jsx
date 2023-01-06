import logo from "../Assets/logo.png";
import "./toolbar.css";
export default function toolbar() {
    return (
        <div id="toolbar">
            <div id="logo">
                <img src={logo} />
                <p>Library <br></br> Management</p>
            </div>
            <div id="nav">
                <ul>
                    <li>Dashboard</li>
                    <li>Issue</li>
                    <li>Return</li>
                    <li>Payment</li>
                    <li>Log Out</li>
                </ul>
            </div>
        </div>
    )
}