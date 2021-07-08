import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Testimonials from "./components/testimonials/Testimonials";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";
function App() {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} />

      <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />

      <div className="sections">
        <Intro />
        {/* <Portfolio /> */}
        <Works />
        <Testimonials />
        <Contact />

        {/* <div id="social">
        </div>*/}
      </div>
    </div>
  );
}
export default App;

/* After making changes to reflect them at your original site https://sourabh-portfolio.netlify.app
   run only two commands :
   npm run build
   netlify deploy
   then fill ./build folder
   and here you go!! , changes accepted to main site.
*/
