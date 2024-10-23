import LeftSideBar from "../components/LeftSideBar";
import MainFeed from "../components/MainFeed";
import RightSidebar from "../components/RightSidebar";

const Home = () => {
  return (
    <div className="grid px-4 py-20 pb-10" id="main-container">
      <LeftSideBar />
      <MainFeed />
      <RightSidebar />
    </div>
  );
};

export default Home;
