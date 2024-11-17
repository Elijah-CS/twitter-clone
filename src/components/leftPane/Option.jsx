import { NavLink } from 'react-router-dom'
import './option.css'

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

const Option = ({name, icon, path}) => {

  const url = path ? `${path}` : `/${name.toLowerCase()}`
  const titleName = toTitleCase(name);

  return (
    <NavLink to={url} className={(nav) => nav.isActive ? "selected option" : "option"}>
      <span>{icon} {titleName}</span>
    </NavLink>
  )
}

export default Option
