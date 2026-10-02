import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CtaBanner } from './components/CtaBanner';
import { CustomCursor } from './components/CustomCursor';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { Phone, Calendar } from 'lucide-react';
import { COMPANY_INFO } from './data/mockData';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedPackageId, setSelectedPackageId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (packageId?: string) => {
    setSelectedPackageId(packageId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedPackageId(undefined);
  };

  return (
    <div className="min-h-screen bg-[#08090c] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-cyan-500 selection:text-black">
      
      {/* Luxury Trailing Animated Pointer Cursor */}
      <CustomCursor />

      {/* Sticky Luxury Navbar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage 
            setActiveTab={setActiveTab} 
            onOpenBooking={handleOpenBooking} 
          />
        )}
        {activeTab === 'services' && (
          <ServicesPage 
            onOpenBooking={handleOpenBooking} 
          />
        )}
        {activeTab === 'gallery' && (
          <GalleryPage 
            onOpenBooking={() => handleOpenBooking()} 
          />
        )}
        {activeTab === 'about' && (
          <AboutPage 
            onOpenBooking={() => handleOpenBooking()} 
            setActiveTab={setActiveTab} 
          />
        )}
        {activeTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Pre-Footer Call To Action Banner (Above Footer) */}
      {activeTab !== 'contact' && (
        <CtaBanner onOpenBooking={() => handleOpenBooking()} />
      )}

      {/* Clean Structured Footer */}
      <Footer 
        setActiveTab={setActiveTab} 
      />

      {/* Step-by-Step Interactive Booking System Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
        preselectedPackageId={selectedPackageId} 
      />

      {/* Mobile Sticky Quick Action Floating Dock (Only on small screens) */}
      <aside aria-label="Quick mobile contact and booking actions" className="sm:hidden fixed bottom-4 left-4 right-4 z-40 bg-[#121622]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl flex items-center justify-between gap-2">
        <a 
          href={`tel:${COMPANY_INFO.phoneClean}`}
          className="flex-1 py-3 px-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs flex items-center justify-center gap-2"
        >
          <Phone className="w-3.5 h-3.5 text-cyan-400" />
          <span>Call Studio</span>
        </a>
        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Online</span>
        </button>
      </aside>

    </div>
  );
}

export default App;
