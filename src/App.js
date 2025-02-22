import '../src/App.css'
import Header from "../src/headercomp/header.js";
import Services from "../src/servicescopm/services.js";
import Intro from "./introcomp/intro.js";
import Special from './specialitycopm/special.js';
import Price from './prices/price1.js';
import Clients from './clients/clients.js';
import Blog from './blogs/blog.js';
import Footer from './footer/footer.js';
function App() {
  return (
    <>
    <Header />
    <Services />
    <Intro />
<Special />
<Price />
<Clients/>
 <Blog  />
 <Footer />
    </>
  );
}

export default App;
