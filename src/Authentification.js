import React, { useState } from 'react';

function Authentification() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    console.log('Sign In submitted:', { username, password });
   
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log('Sign Up submitted:', { username, email, password });
    
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign In Form */}
          {!isSignUpMode && (
            <form onSubmit={handleSignInSubmit} className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" name="username" placeholder="Username" required />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" name="password" placeholder="Password" required />
              </div>
              <input type="submit" className="btn" value="Sign in" />
            </form>
          )}

          {/* Sign Up Form */}
          {isSignUpMode && (
            <form onSubmit={handleSignUpSubmit} className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" name="username" placeholder="Username" required />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" name="password" placeholder="Password" required />
              </div>
              <input type="submit" className="btn" value="Sign up" />
            </form>
          )}
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <button className="btn transparent" onClick={toggleMode}>
              Sign up
            </button>
          </div>
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <button className="btn transparent" onClick={toggleMode}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authentification;
