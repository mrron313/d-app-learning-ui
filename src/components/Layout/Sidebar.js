import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to='/creations'>Creations</Link></li>
        <li><Link to='/invitation'>Invitation</Link></li>
        <li><Link to='/court'>Court</Link></li>
        <li><Link to='/wallet'>Wallet</Link></li>
      </ul>
    </div>
  );
}

export default SideBar;