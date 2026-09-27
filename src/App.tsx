import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Legacy from './sections/Legacy';
import Doctors from './sections/Doctors';
import Treatments from './sections/Treatments';
import Gallery from './sections/Gallery';
import Stories from './sections/Stories';
import Booking from './sections/Booking';
import Visit from './sections/Visit';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-100 flex flex-col font-sans text-maroon-950 selection:bg-maroon-700 selection:text-gold-200">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Ticker />
        <Legacy />
        <Doctors />
        <Treatments />
        <Gallery />
        <Stories />
        <Booking />
        <Visit />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
