import "./styles.css";
import Header from "./Header";
import Search from "./Search";
import Forcast from "./Forcast";
import Footer from "./Footer";
import image from "../src/leafpic.jpg";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="card" style={{ backgroundImage: `url(${image})` }}>
          <Header />
          <Search />
          <Forcast />
          <Footer />
        </div>
      </div>
    </div>
  );
}
