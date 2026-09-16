import React, { useState } from 'react';
import { Logo } from './Logo';
import { Language, PageId } from '../types';
import { tDict } from '../translations/dictionary';
import {
  Mail,
  Phone,
  Globe2,
  Menu,
  X,
  HeartHandshake,
  ArrowRight,
  HandHeart,
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenPartnerModal: () => void;
  onOpenSupportModal: () => void;
  onOpenAdminModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  language,
  setLanguage,
  onOpenPartnerModal,
  onOpenSupportModal,
  onOpenAdminModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = tDict[language];

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'work', label: t.nav.work },
    { id: 'programs', label: t.nav.programs },
    { id: 'resources', label: t.nav.resources },
    { id: 'news', label: t.nav.news },
    { id: 'involved', label: t.nav.involved },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full z-40 sticky top-0 font-sans shadow-xs bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* 1. Slim Top Information Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2">
          {/* Tagline message */}
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <span className="inline-block w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
            <span>{t.tagline}</span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-400 text-[11px]">
              United Republic of Tanzania
            </span>
          </div>

          {/* Contact placeholders, Social links & Language switcher */}
          <div className="flex items-center gap-4 sm:gap-6 text-slate-300">
            <a
              href={`mailto:${t.topBar.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
              title="Official Organization Inquiries"
            >
              <Mail className="w-3.5 h-3.5 text-lime-400" />
              <span>{t.topBar.email}</span>
            </a>

            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{t.topBar.phone}</span>
            </div>

            {/* Language Switcher: English | Kiswahili */}
            <div className="flex items-center gap-1 bg-slate-800/90 rounded-full p-0.5 border border-slate-700">
              <Globe2 className="w-3 h-3 text-slate-400 ml-1.5" />
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded-full text-xs font-semibold transition-all ${
                  language === 'en'
                    ? 'bg-lime-500 text-slate-950 shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
                aria-label="Switch to English"
              >
                English
              </button>
              <span className="text-slate-600 text-[10px]">|</span>
              <button
                onClick={() => setLanguage('sw')}
                className={`px-2 py-0.5 rounded-full text-xs font-semibold transition-all ${
                  language === 'sw'
                    ? 'bg-lime-500 text-slate-950 shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
                aria-label="Badili kwenda Kiswahili"
              >
                Kiswahili
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo on Left - Official One Allied Tanzania Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-lime-500 rounded-md p-1"
            aria-label="One Allied Tanzania Home"
          >
            <Logo size="md" className="group-hover:scale-[1.02] transition-transform" />
          </button>

          {/* Navigation links Center/Right (Desktop) */}
          <nav className="hidden xl:flex items-center gap-1 text-[13.5px] font-medium text-slate-700">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2.5 py-1.5 rounded-md transition-all duration-150 relative cursor-pointer ${
                    isActive
                      ? 'text-sky-700 font-semibold bg-sky-50/80'
                      : 'hover:text-slate-950 hover:bg-slate-100/70'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-lime-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions: Support Our Work + Partner With Us (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenSupportModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors cursor-pointer"
            >
              <HandHeart className="w-3.5 h-3.5 text-lime-600" />
              <span>{t.supportOurWork}</span>
            </button>

            <button
              onClick={onOpenPartnerModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 shadow-sm hover:shadow transition-all duration-150 cursor-pointer group"
            >
              <HeartHandshake className="w-4 h-4 text-lime-300 group-hover:scale-110 transition-transform" />
              <span>{t.partnerWithUs}</span>
              <ArrowRight className="w-3.5 h-3.5 text-sky-200 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenPartnerModal}
              className="inline-flex sm:hidden items-center px-3 py-1.5 rounded-md text-xs font-bold text-white bg-sky-600 hover:bg-sky-700"
            >
              <span>{t.partnerWithUs}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-lime-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                    isActive
                      ? 'bg-sky-50 text-sky-800 font-semibold border-l-4 border-lime-500'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs text-lime-600 font-bold">• Active</span>}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPartnerModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-sky-600 to-sky-700 shadow-sm"
            >
              <HeartHandshake className="w-4 h-4 text-lime-300" />
              <span>{t.partnerWithUs}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSupportModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300"
            >
              <HandHeart className="w-4 h-4 text-lime-600" />
              <span>{t.supportOurWork}</span>
            </button>

            <div className="flex items-center justify-between pt-2 text-xs text-slate-500">
              <span>{t.topBar.email}</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdminModal();
                }}
                className="text-sky-700 underline font-medium"
              >
                Records CMS
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
