import React, { useState } from "react";
import Logo from "../Assets/logo/Logo.png";
import { FaUserCircle } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi";
const Header = () => {
  const [menu, changeMenuState] = useState(false);
  const toggleMenu = () => {
    if (menu == false) {
      changeMenuState(true);
    } else {
      changeMenuState(false);
    }
  };
  return (
    <>
      <div className="header-offer">
        <p className="header-offer-tag">FREE SHIPPING ON ORDER $75 & UP</p>
      </div>
      <div className="header-container sticky">
        <div className="header-wrapper">
          <div className="header-menu" onClick={() => toggleMenu()}>
            {menu ? <GrClose /> : <FiMenu />}
          </div>
          <div className="header-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="header-button">
            <a href="">
              <FaUserCircle />
            </a>
            <a href="">
              <FiSearch />
            </a>
            <a href="">
              <FiShoppingCart />
            </a>
          </div>
        </div>
        <div
          className={menu ? "header-menu-list menu-open" : "header-menu-list "}
        >
          <nav>
            <ul className="header-list">
              <li>
                <a href="">SHOP ALL</a>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle "
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  BRANDS
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Naruto
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      HunterXHunter
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Dragon Ball Z
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      My Hero Academia
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      One Piece
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a
                  href=""
                  className="dropdown-toggle "
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CLOTHING
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      T-Shirt
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Long Sleeves
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Hoodies
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Jackets
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      One Piece
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">ACCESSORIES</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
