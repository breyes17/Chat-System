import { RiImage2Line } from 'react-icons/ri'
import './style.scss'

const Register = () => {
  return (
    <div className='wrapper'>
      <div className='login-container'>
        <h1>myChat</h1>
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

          <label htmlFor='file'>
            <RiImage2Line /> Upload Profile Picture
          </label>

          <input type='file' id='file' />
          <button>Submit</button>
        </form>
        <p>Already have an account? Login here</p>
      </div>
    </div>
  )
}

export default Register
