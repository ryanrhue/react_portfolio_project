import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProgramsPage from './pages/ProgramsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import TrainersPage from './pages/TrainersPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='programs' element={<ProgramsPage />} />
        <Route path='trainers' element={<TrainersPage />} />
        <Route path='testimonials' element={<TestimonialsPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
