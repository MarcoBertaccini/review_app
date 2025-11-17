import { Star } from 'lucide-react';

interface ReviewButtonProps {
  googleReviewURL: string;
}

export default function ReviewButton({ googleReviewURL }: ReviewButtonProps) {
  const handleClick = () => {
    window.open(googleReviewURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 text-lg"
    >
      <Star className="w-6 h-6 fill-current" />
      Recensisci su Google
    </button>
  );
}
