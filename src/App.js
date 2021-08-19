import Header from "./Components/Header";
import Features from './Components/Features'
import About from './Components/About'
import AboutImage from './images/about.png'
import AboutImage1 from './images/download.png'


function App() {
  return (
    <div className="App">
      <Header/>
      <Features/>
      <About image={AboutImage}  title='Come with all you need for daily life' button='Get the App' />
      <About image={AboutImage1}  title='Download and get the app for now' button='Download' />
    </div>
  );
}

export default App;
