import './post.css'

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const Post = ({data}) => {
  return (
    <div className="post">
      <div className="title">Job Title</div>
      <div className="company">Company</div>
      <div className="location">City, state zip</div>
      {/* <span className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </span> */}
      
      






    </div>
  ) 
  // (
  //   <div className="post">
  //     <Skeleton height="100%" />
  //   </div>
  // )
}

export default Post
