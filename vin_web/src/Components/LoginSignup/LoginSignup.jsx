import React,{useState} from 'react' 
import './LoginSignup.css'
import Axios from "axios";
import ReactMarkdown from 'react-markdown'
import Path from '../MarkdownViewer/test.md';

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

import MarkdownViewer from '../MarkdownViewer/MarkdownViewer';



const LoginSignup = () => {

    const [action,setAction] = useState('Sign Up');

    const [users,setUsers]=useState(["avc","sd"]);

    const getusers = () => {
        Axios.get("http://139.224.118.39:3001/tb_Users").then((response) => {
            setUsers(response.data);
        });
    };

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name'/>    
            </div>
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email Id'/>    
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>    
            </div>
            {
                action==="Login"?
                <div className="forgot-password">Lost Password? Click here</div>
                : <div></div>
            }

                {/* loop users array */}
                <div className="forgot-password">{users.map(
                    (user,index) => (
                        <div key={index}>
                            {user.username} - {user.password}
                        </div>
                    )
                )}</div>

                <div>
                    <MarkdownViewer markdownFilePath={Path}/>
                </div>
            
            <div className='submit-container'>
                <button className={action==="Login"?"submit gray":"submit"} onClick={() => { setAction("Sign Up"); getusers() }} >Sign Up</button>
                <button className={action==="Sign Up"?"submit gray":"submit"} onClick={() => { setAction("Login")}} >Login</button>
            </div>
        </div>
    )
}

export default LoginSignup