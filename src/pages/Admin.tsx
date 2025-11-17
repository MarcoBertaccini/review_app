import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { BarChart3, Eye, ArrowLeft } from 'lucide-react';

interface AdminProps {
  adminKey: string;
}

export default function Admin({ adminKey }: AdminProps) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [openCount, setOpenCount] = useState(0);

  useEffect(() => {
    const key = searchParams.get('key');
    if (key === adminKey) {
      setIsAuthorized(true);
      const count = localStorage.getItem('openCount');
      setOpenCount(count ? parseInt(count, 10) : 0);
    } else {
      setIsAuthorized(false);
    }
  }, [searchParams, adminKey]);

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-md border border-red-500/30 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">🔒</span>
          </div>
          <h1 className="text-2xl font-bold text-red-400 mb-2">
            Accesso non autorizzato
          </h1>
          <p className="text-gray-400">
            Non hai i permessi per accedere a questa pagina.
          </p>
          <button
            onClick={() => navigate('/')}
            className="mt-6 bg-gray-700/50 hover:bg-gray-700/70 text-gray-200 font-medium py-2 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 mx-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alla Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <button
          onClick={() => navigate('/')}
          className="mb-6 text-gray-400 hover:text-gray-200 flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Torna alla Home
        </button>

        <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                Admin Dashboard
              </h1>
              <p className="text-gray-400 text-sm">
                Zenith Review Booster – PRO
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm font-medium flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Scansioni QR Totali
              </span>
            </div>
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              {openCount}
            </div>
            <p className="text-gray-500 text-xs mt-2">
              Numero di volte che l'app è stata aperta
            </p>
          </div>

          <div className="mt-6 bg-gray-900/50 rounded-xl p-4 border border-gray-700/30">
            <h3 className="text-gray-300 font-semibold mb-2 text-sm">
              Informazioni
            </h3>
            <ul className="text-gray-400 text-xs space-y-1">
              <li>• Il contatore si incrementa ad ogni apertura dell'app</li>
              <li>• I dati sono salvati in localStorage</li>
              <li>• Accesso protetto tramite chiave segreta</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
