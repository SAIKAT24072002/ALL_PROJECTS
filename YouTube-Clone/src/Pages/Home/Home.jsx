import Sidebar from "../../Components/Sidebar/Sidebar";
import Feeds from "../../Components/Feeds/Feeds";
import { useState } from "react";

const Home = ({ sideMenu }) => {
  const [category, setCategory] = useState(0);
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar
          sideMenu={sideMenu}
          category={category}
          setCategory={setCategory}
        />
        <main className="flex-1 p-5">
          <Feeds category={category} />
        </main>
      </div>
    </>
  );
};

export default Home;
