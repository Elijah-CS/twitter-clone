import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, LeftPane, RightPane } from './components'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
       <div className="app">
         <LeftPane />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/explore" element={"Explore"} />
           <Route path="/notifications" element={"Notifications"} />
           <Route path="/messages" element={"Messages"} />
           <Route path="/bookmarks" element={"Bookmarks"} />
           <Route path="/lists" element={"Lists"} />
           <Route path="/profile" element={"Profile"} />
         </Routes>
         <RightPane />
       </div>
    </BrowserRouter>
  )
}

export default App
