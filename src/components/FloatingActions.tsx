import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { Language } from '../types';

interface FloatingActionsProps {
  language: Language;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ language }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappMessage = encodeURIComponent(
    language === 'en'
      ? 'Hello One Allied Tanzania, I would like to inquire about your healthcare programs and collaboration.'
      : 'Habari One Allied Tanzania, ningependa kupata maelezo kuhusu miradi yenu ya afya na fursa za ushirikiano.'
  );

  const whatsappUrl = `https://wa.me/255764494606?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 print:hidden">
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label={language === 'en' ? 'Back to top' : 'Rudi juu'}
          title={language === 'en' ? 'Back to top' : 'Rudi juu'}
          className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/90 hover:bg-slate-950 text-white shadow-lg shadow-slate-950/20 border border-slate-700/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5 text-lime-400 group-hover:-translate-y-0.5 transition-transform" />
          {/* Tooltip on hover */}
          <span className="absolute right-full mr-3 px-2.5 py-1 rounded-md bg-slate-900 text-white text-[11px] font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-md">
            {language === 'en' ? 'Back to top' : 'Rudi juu'}
          </span>
        </button>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with One Allied Tanzania on WhatsApp (+255 764 494 606)"
        title={
          language === 'en'
            ? 'Chat with us on WhatsApp (+255 764 494 606)'
            : 'Wasiliana nasi kupitia WhatsApp (+255 764 494 606)'
        }
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-emerald-950/25 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        {/* Animated pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none"></span>

        {/* WhatsApp Icon (Lucide MessageCircle with clean WhatsApp style) */}
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10 fill-white stroke-none drop-shadow-xs"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        {/* Hover label */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
          <span>WhatsApp: +255 764 494 606</span>
        </span>
      </a>
    </div>
  );
};
