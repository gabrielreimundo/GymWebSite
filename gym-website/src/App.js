import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/programs/Programs.jsx';
import Reasons from './components/Reasons/Reasons.jsx'
import Plans from './components/Plans/Plans.jsx'
import Testimonials from './assets/Testimonials/Testimonials.jsx';
import Join from './components/Join/Join.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reasons/>
          <Plans/>
          <Testimonials/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
