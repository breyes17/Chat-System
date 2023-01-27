import './style.scss'
const Login = () => {
  return (
    <div className='wrapper'>
      <div className='login-container'>
        <form>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter your password'
          />
          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  )
}

export default Login
