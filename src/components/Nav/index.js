import './style.scss'
const Nav = () => {
  return (
    <div className='nav-container'>
      <span>myChat</span>

      <div className='right'>
        <img src={`${process.env.PUBLIC_URL}/img1.jpg`} alt='test' />
        <span>User Name</span>
      </div>
    </div>
  )
}

export default Nav
