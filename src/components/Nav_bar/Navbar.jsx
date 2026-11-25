import LowerPartContainer from "../Lower_part_container/LowerPartContainer";
import "./navbar.css"
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <header className="header_section">
        <nav className="nav_bar">
          {/* left side */}
          <div className="menu_container">
            <ul>
              <li className="Home_menu">Home</li>
              <li className="Home_menu">Company</li>
              <li className="Home_menu">Marketplace</li>
              <li className="Home_menu menu_hide">Resources</li>
              <li className="Home_menu menu_hide">Contact</li>
            </ul>
          </div>
          {/* right part  */}
          <div className="button_part">
            <button className="all_category">
                All category
            </button>
            <div className="input_container">
                <input type="text" className="" placeholder="Search anything....."/>
                <a href="#" className="search_button">
                      <FaSearch color="white"/>
                </a>
            </div>
          </div>
        </nav>
         <div className="lower_part_hidden">
        <LowerPartContainer />
      </div>
      </header>
     
    </>
  );
};

export default Navbar;
