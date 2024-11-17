import { home, explore, twitter, notifications, messages, bookmarks, lists } from './icons'
import Option from './Option'
import './leftPane.css'

const LeftPane = () => {
  return (
    <div className="left-pane">
      <div className="container">
        <header>{twitter}</header>

        <nav>
          <Option icon={home} name="Home" path="/" />
          <Option icon={explore} name="Explore" />
          <Option icon={notifications} name="Notifications" />
          <Option icon={messages} name="Messages" />
          <Option icon={bookmarks} name="Bookmarks" />
          <Option icon={lists} name="Lists" />
        </nav>

        <footer>
          <div role="button" tabIndex="0" className="account">
            <div>
              <div className="name">My name</div>
              <div className="username">@username</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default LeftPane
