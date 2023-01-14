import './sign-in.scss';


const defaultFields = {
    email: '',
    username: '',
    password: ''
}

const SignIn = () =>{
    const handleChange = (e) =>{
        const { name, value } = e.target;
    }
    return (
      <div className="sign-in-container">
        <form>
          <div>
            <label htmlFor="email">Email:</label><br />
            <input type="email" name="email" id="email" required />
          </div>
          <div>
            <label htmlFor="username">Username:</label><br />
            <input type="text" name="username" id="username" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label><br />
            <input type="password" name="password" id="password" required />
          </div>
        </form>
      </div>
    );
}

export default SignIn;