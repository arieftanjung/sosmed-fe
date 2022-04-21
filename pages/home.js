import { Header } from "./../components/Header";
import { Sidebar } from "./../components/Sidebar";
import { Feed } from "./../components/Feed";

const Home = () => {
  return (
    <div className="flex bg-Seafoam min-h-screen flex-col">
      <div>
        <Header />
      </div>
      <div className="flex gap-56">
        <div>
          <Sidebar />
        </div>
        <div>
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default Home;
