import React, { useState } from 'react';
import { Logo } from './Logo';
import { Language, PageId } from '../types';
import { tDict } from '../translations/dictionary';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  HeartHandshake,
} from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
  language: Language;
  onOpenPartnerModal: () => void;
  onOpenSupportModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentPage,
  language,
  onOpenPartnerModal,
  onOpenSupportModal,
}) => {
  const t = tDict[language];
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'work', label: t.nav.work },
    { id: 'programs', label: t.nav.programs },
    { id: 'resources', label: t.nav.resources },
    { id: 'news', label: t.nav.news },
    { id: 'involved', label: t.nav.involved },
    { id: 'contact', label: t.nav.contact },
  ];

  const programLinks = [
    { id: 'programs' as PageId, labelEn: 'Operational Assistance', labelSw: 'Msaada wa Uendeshaji' },
    { id: 'programs' as PageId, labelEn: 'Regulatory Compliance Support', labelSw: 'Uzingatiaji wa Sheria' },
    { id: 'programs' as PageId, labelEn: 'Healthcare Management & Logistics', labelSw: 'Usimamizi na Ugavi' },
    { id: 'programs' as PageId, labelEn: 'Resource Mobilization for Quality Care', labelSw: 'Kutafuta Rasilimali' },
    { id: 'work' as PageId, labelEn: 'Clinical Safety & Diagnostic Accuracy', labelSw: 'Usalama wa Kliniki na Vipimo' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans pt-16 pb-12 border-t-4 border-lime-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Official Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-2.5 rounded-xl inline-block shadow-sm">
              <Logo size="md" theme="light" />
            </div>

            <p className="text-sm leading-relaxed text-slate-300">
              {t.footer.statement}
            </p>

            {/* Compliance Badge & Registration Note */}
            <div className="pt-2">
              <div className="inline-flex items-start gap-2 bg-slate-900/90 border border-slate-800 rounded-lg p-3 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block">
                    Registered Tanzanian NGO
                  </span>
                  <span>Non-profit entity governed under the Laws of the United Republic of Tanzania. Verified records maintained transparently.</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={onOpenPartnerModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white transition-colors"
              >
                <HeartHandshake className="w-3.5 h-3.5 text-lime-300" />
                <span>{t.partnerWithUs}</span>
              </button>
              <button
                onClick={onOpenSupportModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <span>{t.supportOurWork}</span>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-lime-400">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setCurrentPage(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-300 hover:text-white hover:underline transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs & Key Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
              {t.footer.programs}
            </h4>
            <ul className="space-y-2 text-sm">
              {programLinks.map((prog, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      setCurrentPage(prog.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-300 hover:text-white hover:underline transition-colors text-left flex items-start gap-1.5"
                  >
                    <span className="text-lime-500 mt-1">•</span>
                    <span>{language === 'en' ? prog.labelEn : prog.labelSw}</span>
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => {
                    setCurrentPage('resources');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs text-lime-400 hover:text-lime-300 flex items-center gap-1 font-semibold"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Quality Guides & Resources' : 'Miongozo ya Ubora na Nyaraka'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.contactUs}
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  5th Floor, Mkulima House, Nelson Mandela Road, Ubungo, Dar es Salaam, Tanzania
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:info@onealliedtz.org" className="hover:underline text-slate-200">
                  info@onealliedtz.org
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  <a href="tel:0764494606" className="hover:text-lime-300 font-mono transition-colors">
                    0764494606
                  </a>
                  <span className="text-slate-500">/</span>
                  <a href="tel:0748165752" className="hover:text-lime-300 font-mono transition-colors">
                    0748165752
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Mon – Fri: 08:30 – 17:00 EAT</span>
              </div>
            </div>

            {/* Newsletter Form */}
            <div className="pt-2 border-t border-slate-800">
              <span className="text-xs font-semibold text-slate-200 block mb-1">
                {t.footer.newsletterTitle}
              </span>
              <p className="text-[11px] text-slate-400 mb-2 leading-relaxed">
                {t.footer.newsletterDesc}
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-lime-400 bg-lime-950/60 p-2 rounded border border-lime-800">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t.footer.subscribeSuccess}</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.footer.newsletterPlaceholder}
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-md px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-lime-400"
                  />
                  <button
                    type="submit"
                    className="bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold px-3 py-1.5 rounded-md text-xs transition-colors shrink-0"
                    title={t.footer.subscribeBtn}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar & Policies */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>
              © {new Date().getFullYear()} One Allied Tanzania. {t.footer.allRights}
            </p>
            <p className="text-[11px] text-slate-500 mt-1 max-w-2xl">
              {t.footer.disclaimer}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={() => {
                setCurrentPage('resources');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-slate-200 transition-colors"
            >
              {t.footer.privacyPolicy}
            </button>
            <span>•</span>
            <button
              onClick={() => {
                setCurrentPage('resources');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-slate-200 transition-colors"
            >
              {t.footer.safeguardingPolicy}
            </button>
            <span>•</span>
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-slate-200 transition-colors"
            >
              {t.footer.termsOfUse}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
