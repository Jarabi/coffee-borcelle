import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import './App.css';
import 'boxicons/css/boxicons.min.css';

function App() {
    return (
        <div className='container'>
            <Header />
            <Hero />
            <About />
            <Reviews />
            <Footer />
        </div>
    );
}

export default App;
