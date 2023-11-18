import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {

  hamburgerIcon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4Cu_gruB6ctvLgYTi7L-M4zBLN6nCZeSvw&usqp=CAU"
  closeIcon = "https://img1.pnghut.com/t/12/2/15/fxRGcRHMN4/monochrome-photography-black-and-white-brand-symbol-area.jpg"

  state = {
    imageLink : this.hamburgerIcon
  };

  menu=(e)=>{
    if(this.state.imageLink === this.hamburgerIcon){
      this.setState({imageLink: this.closeIcon})
      document.getElementById('menuList').classList.remove('hidden')
    }
    else{
      document.getElementById('menuList').classList.add('hidden')
      this.setState({imageLink: this.hamburgerIcon})
    }
  }

  render(){
    return (
      <div className="w-full md:flex justify-between bg-purple-600 text-white py-2 px-3 sm:px-9 fixed top-0">
        <div className="flex justify-between">
          <Link to="/">
            <div className="font-bold text-2xl cursor-pointer">NewsApp</div>
          </Link>
          <span className=" md:hidden cursor-pointer">
            <img onClick={this.menu} className="w-7 mt-1 mx-2" src={this.state.imageLink} alt="..." />
          </span>
        </div>
        <div id="menuList" className="md:flex hidden">
          <ul className="md:flex font-semibold md:mx-1.5 md:mt-0 mt-3">
            <Link to="/">
              <li className="cursor-pointer text-sm hover:underline md:mx-2 mt-2">
                Home
              </li>
            </Link>
            <Link  to="/business">
              <li className="cursor-pointer text-sm hover:underline md:mx-2 mt-2">
                Business
              </li>
            </Link>
            <Link to="/entertainment">
              <li className="cursor-pointer text-sm hover:underline md:mx-2 mt-2">
                Entertainment
              </li>
            </Link>
            <Link to="/general">
              <li className="cursor-pointer text-sm hover:underline md:mx-2 mt-2">
                General
              </li>
            </Link>
            <Link to="/health">
              <li className="cursor-pointer text-sm hover:underline md:mx-2 mt-2">
                Health
              </li>
            </Link>
            <Link to="/science">
              <li className="cursor-pointer text-sm hover:underline md:mx-2 mt-2">
                Science
              </li>
            </Link>
            <Link to="/sports">
              <li className="cursor-pointer text-sm hover:underline md:mx-2 mt-2">
                Sports
              </li>
            </Link>
            <Link to="/technology">
              <li className="cursor-pointer text-sm hover:underline md:mx-2 mt-2">
                Technology
              </li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
  
}
