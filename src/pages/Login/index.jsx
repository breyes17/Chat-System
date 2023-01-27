import './style.scss'
const Login = () => {
  return (
    <div className='wrapper'>
      <div className='login-container'>
        <h1>MyChat</h1>
        <form>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
          />
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter your password'
          />
          <button>Submit</button>
        </form>
        <p>Don't have an account? Register here</p>
      </div>
    </div>
  )
}

export default Login
