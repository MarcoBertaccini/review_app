import { useState } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';

const SUGGESTED_PHRASES = [
  "Servizio eccellente, professionali e gentilissimi!",
  "Esperienza ottima, mi sono trovato benissimo!",
  "Struttura pulita, staff competente. Consigliato!",
  "Disponibili, veloci e molto preparati. Tornerò sicuramente!",
  "Team fantastico, super consigliati!"
];

export default function SuggestedReview() {
  const [phrase, setPhrase] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const generatePhrase = () => {
    const randomIndex = Math.floor(Math.random() * SUGGESTED_PHRASES.length);
    setPhrase(SUGGESTED_PHRASES[randomIndex]);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(phrase);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="mt-8 w-full">
      <h3 className="text-gray-400 text-center mb-3 text-sm font-light">
        Non sai cosa scrivere?
      </h3>

      <button
        onClick={generatePhrase}
        className="w-full bg-gray-800/50 hover:bg-gray-800/70 backdrop-blur-sm text-gray-200 font-semibold py-3 px-6 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <Sparkles className="w-5 h-5" />
        Genera una frase utile
      </button>

      {phrase && (
        <div className="mt-4 bg-gray-800/30 backdrop-blur-md border border-gray-700/50 rounded-xl p-4 animate-fadeIn">
          <p className="text-gray-200 text-center mb-3 italic">
            "{phrase}"
          </p>
          <button
            onClick={copyToClipboard}
            className="w-full bg-gray-700/50 hover:bg-gray-700/70 text-gray-200 font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copiato!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copia
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
