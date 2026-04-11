import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 md:pt-36 bg-neutral-50">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
