import menuIcon from "../../assets/menu.png";
import logo from "../../assets/ytLogo.png";
import search from "../../assets/search.png";
import uploadIcon from "../../assets/upload.png";
import moreIcon from "../../assets/more.png";
import notificationIcon from "../../assets/notification.png";
import profile from "../../assets/jack.png";
import { Link } from "react-router";

const Header = ({ setSideMenu }) => {
  return (
    <>
      <nav className="flex items-center justify-between px-8 sticky top-0 z-10 bg-white">
        <div className="flex items-center gap-2">
          <img
            src={menuIcon}
            alt=""
            className="size-4"
            onClick={() => setSideMenu((prev) => !prev)}
          />
          <Link to="/">
            <img src={logo} alt="" className="hidden sm:block w-24" />
          </Link>
        </div>
        <div className="">
          <div className="flex items-center justify-between border border-gray-400 rounded-2xl p-2 lg:w-[500px] md:w-48">
            <input
              placeholder="Search"
              className="text-gray-500 border-none outline-none hidden sm:block"
            />
            <img src={search} alt="" className="size-4 text-gray-500" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img src={uploadIcon} alt="" className="w-6 hidden md:block" />
          <img src={moreIcon} alt="" className="w-6 hidden md:block" />
          <img src={notificationIcon} alt="" className="w-6" />
          <img src={profile} alt="" className="w-6 rounded-2xl" />
        </div>
      </nav>
    </>
  );
};

export default Header;
