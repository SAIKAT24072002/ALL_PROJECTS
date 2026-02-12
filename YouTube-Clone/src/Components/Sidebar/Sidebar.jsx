import home from "../../assets/home.png";
import gameIcon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Sidebar = ({ sideMenu, category, setCategory }) => {
  return (
    <>
      <div
        className={`${
          sideMenu === true
            ? "py-4 px-6 w-64 shadow-xl transition-all duration-500 ease-in-out"
            : "py-4 px-2 w-14 shadow-xl transition-all duration-500 ease-in-out"
        }`}
      >
        <div className="flex flex-col gap-4 fixed top-20 z-10">
          <div
            className={`flex gap-4 items-center w-44 p-2 rounded-3xl justify-start ${
              category === 0 ? "bg-gray-300" : ""
            }`}
            onClick={() => setCategory(0)}
          >
            <img src={home} alt="" className="w-5 shrink-0 object-cover" />
            <p
              className={`${
                sideMenu === true
                  ? "text-sm font-semibold text-gray-600"
                  : "hidden"
              }`}
            >
              Home
            </p>
          </div>
          <div
            className={`flex gap-4 items-center w-44 p-2 rounded-3xl justify-start ${
              category === 20 ? "bg-gray-300" : ""
            }`}
            onClick={() => setCategory(20)}
          >
            <img src={gameIcon} alt="" className="w-5 shrink-0 object-cover" />
            <p
              className={`${
                sideMenu === true
                  ? "text-sm font-semibold text-gray-600"
                  : "hidden"
              }`}
            >
              Game
            </p>
          </div>
          <div
            className={`flex gap-4 items-center w-44 p-2 rounded-3xl justify-start ${
              category === 2 ? "bg-gray-300" : ""
            }`}
            onClick={() => setCategory(2)}
          >
            <img
              src={automobiles}
              alt=""
              className="w-5 shrink-0 object-cover"
            />
            <p
              className={`${
                sideMenu === true
                  ? "text-sm font-semibold text-gray-600"
                  : "hidden"
              }`}
            >
              Automobiles
            </p>
          </div>
          <div
            className={`flex gap-4 items-center w-44 p-2 rounded-3xl justify-start ${
              category === 17 ? "bg-gray-300" : ""
            }`}
            onClick={() => setCategory(17)}
          >
            <img src={sports} alt="" className="w-5 shrink-0 object-cover" />
            <p
              className={`${
                sideMenu === true
                  ? "text-sm font-semibold text-gray-600"
                  : "hidden"
              }`}
            >
              Sports
            </p>
          </div>
          <div
            className={`flex gap-4 items-center w-44 p-2 rounded-3xl justify-start ${
              category === 28 ? "bg-gray-300" : ""
            }`}
            onClick={() => setCategory(28)}
          >
            <img src={tech} alt="" className="w-5 shrink-0 object-cover" />
            <p
              className={`${
                sideMenu === true
                  ? "text-sm font-semibold text-gray-600"
                  : "hidden"
              }`}
            >
              Tech
            </p>
          </div>
          <div
            className={`flex gap-4 items-center w-44 p-2 rounded-3xl justify-start ${
              category === 10 ? "bg-gray-300" : ""
            }`}
            onClick={() => setCategory(10)}
          >
            <img src={music} alt="" className="w-5 shrink-0 object-cover" />
            <p
              className={`${
                sideMenu === true
                  ? "text-sm font-semibold text-gray-600"
                  : "hidden"
              }`}
            >
              YTMusic
            </p>
          </div>
          <div
            className={`flex gap-4 items-center w-44 p-2 rounded-3xl justify-start ${
              category === 22 ? "bg-gray-300" : ""
            }`}
            onClick={() => setCategory(22)}
          >
            <img src={blogs} alt="" className="w-5 shrink-0 object-cover" />
            <p
              className={`${
                sideMenu === true
                  ? "text-sm font-semibold text-gray-600"
                  : "hidden"
              }`}
            >
              Blogs
            </p>
          </div>
          <div
            className={`flex gap-4 items-center w-44 p-2 rounded-3xl justify-start ${
              category === 25 ? "bg-gray-300" : ""
            }`}
            onClick={() => setCategory(25)}
          >
            <img src={news} alt="" className="w-5 shrink-0 object-cover" />
            <p
              className={`${
                sideMenu === true
                  ? "text-sm font-semibold text-gray-600"
                  : "hidden"
              }`}
            >
              News
            </p>
          </div>

          <div className="border border-gray-300 mt-2"></div>
          <h3
            className={`${
              sideMenu === true
                ? "text-lg font-semibold text-gray-700"
                : "hidden"
            }`}
          >
            Subcribers
          </h3>
          <div className="flex gap-2 items-center">
            <img
              src={jack}
              alt=""
              className="w-8 rounded-full shrink-0 object-cover"
            />
            <p
              className={`${
                sideMenu === true
                  ? "text-md font-semibold text-gray-600"
                  : "hidden"
              }`}
            >
              JackLife
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src={simon}
              alt=""
              className="w-8 rounded-full shrink-0 object-cover"
            />
            <p
              className={`${
                sideMenu === true
                  ? "text-md font-semibold text-gray-600"
                  : "hidden"
              }`}
            >
              MrBeast
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src={tom}
              alt=""
              className="w-8 rounded-full shrink-0 object-cover"
            />
            <p
              className={`${
                sideMenu === true
                  ? "text-md font-semibold text-gray-600"
                  : "hidden"
              }`}
            >
              JustinBieber
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src={megan}
              alt=""
              className="w-8 rounded-full shrink-0 object-cover"
            />
            <p
              className={`${
                sideMenu === true
                  ? "text-md font-semibold text-gray-600"
                  : "hidden"
              }`}
            >
              5MinutesCrafts
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src={cameron}
              alt=""
              className="w-8 rounded-full shrink-0 object-cover"
            />
            <p
              className={`${
                sideMenu === true
                  ? "text-md font-semibold text-gray-600"
                  : "hidden"
              }`}
            >
              Nas Daily
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
