import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from './components/Banner/Banner';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';

function App(props) {

  let state = props.state,
      homepage = state.homepage,
      dispatch = props.dispatch;

  return (
    <div className="main">
        <Header state={state.header} />
        <div className="container">
          <Banner state={homepage.banner} />
          <Skills state={homepage.skills} />
          <About state={homepage.about} />
          <Pricing state={homepage.pricing} />
          <Contact state={homepage.contact} dispatch={dispatch} />
        </div>
        <Footer state={state.footer} />
    </div>
  );
}

export default App;
