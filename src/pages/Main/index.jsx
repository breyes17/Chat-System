import Nav from '../../components/Nav'
import List from '../../components/List'
import Message from '../../components/Message'
import Search from '../../components/Search'
import './style.scss'

const Main = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='sidebar-container'>
          <Nav />
          <Search />
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
