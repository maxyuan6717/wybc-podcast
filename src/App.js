import Landing from "./pages/Landing";
import Info from "./pages/Info";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <CustomNavbar />
      <Landing />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
