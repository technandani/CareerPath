import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { checkMenu } from "./features/sliderSlice";

const App = () => {
  const isCompressed = useSelector((state) => state.slider.menuOpen);
  const dispatch = useDispatch();
  const location = useLocation();

  // Function to toggle sidebar
  const handleToggle = () => {
    dispatch(checkMenu(!isCompressed));
  };

  // Check if the current route is the landing page
  const isLandingPage = ["/", "/chatbot"].includes(location.pathname);

  return (
    <div className="w-[100vw] h-[100vh] flex relative font-Nuntio">
      {!isLandingPage && (
        <button
          className={`absolute z-50 text-[2rem] ${
            isCompressed
              ? "lg:left-[17%] md:left-[22%] max-md:left-[90%] text-white"
              : "lg:left-[5%] max-md:left-[0%] text-black dark:text-white"
          } top-3`}
          onClick={handleToggle}
        >
          {isCompressed ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i className="fa-solid fa-bars pl-4"></i>
          )}
        </button>
      )}
      {/* Render the sidebar (Header) only if not on the landing page */}
      {!isLandingPage && <Header />}

      <main
        className={`${
          isLandingPage
            ? "w-full" // Full width for landing page
            : isCompressed
            ? "w-[80%]" // Adjusted width with sidebar compressed
            : "w-full" // Full width if sidebar is hidden
        } h-full duration-500 max-md:absolute`}
      >
        <Outlet />
      </main>
      {/* Render the chatbot button only if not on the landing page */}
        {!isLandingPage && (
        <button className="fixed bottom-8 right-8 bg-transprent text-white rounded-full p-2 shadow-lg z-50 h-20 w-20">
          <a href="/chatbot"><img src="images/chatBot.png" className="h-full w-full" alt="" /></a>
        </button>
      )}

      
    </div>
  );
};

export default App;
