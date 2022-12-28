import Footer from "./components/Footer";
import Info from "./components/Info";
import Preview from "./components/Preview";
import HeyLifeLog from "./misc/HeyLifeLogo.png";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className="app">
      <main className="flex justify-center items-center w-3/4  mx-auto flex-col ">
        <header className="w-full flex justify-start items-center mt-20 pl-14">
          <img src={HeyLifeLog} alt="" className="w-28 orange" />
        </header>
        <div className="flex justify-center items-center  w-full gap-20">
          <Preview />
          <Info />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default App;
