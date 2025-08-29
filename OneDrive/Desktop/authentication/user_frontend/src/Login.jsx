import { useState } from "react";
import axios from "axios";
import "./App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg,setMsg]=useState("");

    const handleSubmit=async (e)=>{
      e.preventDefault();
      try{
        const res=await axios.post("http://localhost:3000/auth/login",{
          email,
          password,
        });
        console.log("token from backend:",res.data.token);
        localStorage.setItem("token",res.data.token);
        setMsg("login successfull token saved.");
        
      }catch(err){
        setMsg(err.message);
      }
    };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
       <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required /> <br /><br />
       <input type="password" placeholder="Enter Password"  value={password} onChange={(e) => setPassword(e.target.value)}required /> <br /><br />
       <button type="submit">Login</button>
     </form>
     {msg && <p className="ghg">{msg}</p>}
    </div>
  );
}

export default Login;
