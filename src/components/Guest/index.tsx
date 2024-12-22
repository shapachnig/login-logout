import {useState} from "react";
import Login from "./Login.tsx";
import Register from "./Register.tsx";

const Cuest = () => {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <div>
            {isLogin ? <Login/>:<Register/>}
            <button onClick={() => setIsLogin(!isLogin)}>
                Switch to {isLogin ? 'Register' : 'Login'}
            </button>
        </div>
    );
};

export default Cuest;