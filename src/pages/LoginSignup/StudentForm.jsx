import { useState } from 'react';
import './StudentForm.css'


export default function StudentForm({ goBack }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-right">
      <button className="back-btn" onClick={goBack}>← Choose Role</button>

      <h2>{isLogin ? "Student Login" : "Student Sign Up"}</h2>

      <form className="auth-form">
        {!isLogin && <input type="text" placeholder="Full Name" required />}
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button className="auth-btn btnCTA" type="submit">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <p className="toggle-text">
        {isLogin ? "Don't have an account?" : "Already registered?"}
        <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>
    </div>
  );
}
