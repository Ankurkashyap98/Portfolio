import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { Atmosphere } from '@/components/layout/Atmosphere';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { useLenis } from '@/hooks/useLenis';
import { useApp } from '@/context/AppContext';

export const MainLayout = () => {
  const location = useLocation();
  const { setMenuOpen } = useApp();
  useLenis(true);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, setMenuOpen]);

  return (
    <>
      {location.pathname === '/' ? <LoadingScreen /> : null}
      <Atmosphere />
      <ScrollProgress />
      <Navbar />
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </>
  );
};
