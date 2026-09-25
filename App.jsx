import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Oprema from '@/pages/Oprema';
import Kategorija from '@/pages/Kategorija';
import ProductDetail from '@/pages/ProductDetail';
import KakoFunkcionise from '@/pages/KakoFunkcionise';
import NasiRadovi from '@/pages/NasiRadovi';
import ONama from '@/pages/ONama';
import PosaljiteUpit from '@/pages/PosaljiteUpit';
import Kontakt from '@/pages/Kontakt';
import SavetiZaKud from '@/pages/SavetiZaKud';
// Add page imports here

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/oprema" element={<Oprema />} />
        <Route path="/oprema/:kategorija" element={<Kategorija />} />
        <Route path="/oprema/:kategorija/:proizvod" element={<ProductDetail />} />
        <Route path="/kako-funkcionise" element={<KakoFunkcionise />} />
        <Route path="/nasi-radovi" element={<NasiRadovi />} />
        <Route path="/o-nama" element={<ONama />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/saveti-za-kud" element={<SavetiZaKud />} />
        <Route path="/posaljite-upit" element={<PosaljiteUpit />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App