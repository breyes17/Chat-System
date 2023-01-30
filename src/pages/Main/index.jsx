import Nav from '../../components/Nav'
import List from '../../components/List'
import Message from '../../components/Message'
import './style.scss'

const Main = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='sidebar-container'>
          <Nav />
          <List />
        </div>
        <div className='messages-container'>
          <Message />
        </div>
      </div>
    </div>
  )
}

export default Main
