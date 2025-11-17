import { useEffect } from 'react';
import { Heart } from 'lucide-react';
import ReviewButton from '../components/ReviewButton';
import SuggestedReview from '../components/SuggestedReview';

interface HomeProps {
  googleReviewURL: string;
}

export default function Home({ googleReviewURL }: HomeProps) {
  useEffect(() => {
    const currentCount = localStorage.getItem('openCount');
    const newCount = currentCount ? parseInt(currentCount, 10) + 1 : 1;
    localStorage.setItem('openCount', newCount.toString());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-transparent bg-clip-text mb-4">
            <h1 className="text-5xl font-black tracking-tight">
              ZENITH
            </h1>
            <p className="text-sm font-bold tracking-widest">
              REVIEW BOOSTER PRO
            </p>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-white text-center mb-3">
            Lascia una Recensione
          </h2>

          <p className="text-gray-300 text-center mb-6 flex items-center justify-center gap-2">
            Ci aiuti tantissimo dedicando 10 secondi
            <Heart className="w-5 h-5 text-red-400 fill-current" />
          </p>

          <ReviewButton googleReviewURL={googleReviewURL} />

          <SuggestedReview />
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            Powered by Zenith Studio
          </p>
        </div>
      </div>
    </div>
  );
}
