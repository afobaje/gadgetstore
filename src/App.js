import './App.css';
import Article from './components/Content/Article/Article';
import Cards from './components/Content/Article/Cards';
import Customer from './components/Content/Article/Customer';
import Feature from './components/Content/Article/Feature';
import Intro from './components/Content/Intro/Intro';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
 

  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Article/>
      <Feature/>
      <Cards/>
      <Customer/>
      <Footer/>
    </div>
  );
}

export default App;
