// Made by Seth Stitik Following the Chat Engine Tutorial //

// Import Axios
import axios from 'axios'


// AuthPage component
const AuthPage = (props) => {
    const onSubmit = (e) => {

      // Prevent the default form submission
      e.preventDefault();
      const { value } = e.target[0];
      
      // Authenticate the user
      axios.post(
        'http://localhost:3001/authenticate',
        {username: value}
     )

     // If the user is authenticated, call the onAuth function
     .then(r => props.onAuth({ ...r.data, secret: value }))
     .catch(e => console.log('error',e))
    };
  
    
    // Return the form
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Say Ello!</div>
  
          <div className="form-subtitle">Set a username to get started!</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Start Chatting
            </button>
          </div>
        </form>
      </div>
    );
    };
  
  export default AuthPage;