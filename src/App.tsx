/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, PageId, ImpactCounter, NewsStory, OrganizationSettings } from './types';
import { initialImpactCounters, initialNewsStories, initialOrgSettings } from './translations/content';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { OurWorkPage } from './components/pages/OurWorkPage';
import { ProgramsPage } from './components/pages/ProgramsPage';
import { ResourcesPage } from './components/pages/ResourcesPage';
import { NewsPage } from './components/pages/NewsPage';
import { GetInvolvedPage } from './components/pages/GetInvolvedPage';
import { ContactPage } from './components/pages/ContactPage';

// Modals
import { PartnerModal } from './components/modals/PartnerModal';
import { SupportModal } from './components/modals/SupportModal';
import { AdminLiveEditorModal } from './components/modals/AdminLiveEditorModal';
import { ArticleReaderModal } from './components/modals/ArticleReaderModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  // 1. Language state (English / Kiswahili)
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('one_allied_tz_lang') || localStorage.getItem('lifedrop_lang');
    return saved === 'sw' ? 'sw' : 'en';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('one_allied_tz_lang', lang);
  };

  // 2. Navigation state
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    const validPages: PageId[] = [
      'home',
      'about',
      'work',
      'programs',
      'resources',
      'news',
      'involved',
      'contact',
    ];
    return validPages.includes(hash) ? hash : 'home';
  });

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (hash) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // 3. Impact Counters state (persisted / editable)
  const [impactCounters, setImpactCounters] = useState<ImpactCounter[]>(() => {
    try {
      const saved = localStorage.getItem('one_allied_tz_impact_counters') || localStorage.getItem('lifedrop_impact_counters');
      return saved ? JSON.parse(saved) : initialImpactCounters;
    } catch {
      return initialImpactCounters;
    }
  });

  const handleUpdateCounters = (counters: ImpactCounter[]) => {
    setImpactCounters(counters);
    localStorage.setItem('one_allied_tz_impact_counters', JSON.stringify(counters));
  };

  // 4. Organization Settings state (persisted / editable)
  const [orgSettings, setOrgSettings] = useState<OrganizationSettings>(() => {
    try {
      const saved = localStorage.getItem('one_allied_tz_settings') || localStorage.getItem('lifedrop_settings');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.contactPhone && !parsed.contactPhone.includes('[XX]')) {
          return parsed;
        }
      }
      return initialOrgSettings;
    } catch {
      return initialOrgSettings;
    }
  });

  const handleUpdateSettings = (settings: OrganizationSettings) => {
    setOrgSettings(settings);
    localStorage.setItem('one_allied_tz_settings', JSON.stringify(settings));
  };

  const handleResetDefaults = () => {
    setImpactCounters(initialImpactCounters);
    setOrgSettings(initialOrgSettings);
    localStorage.removeItem('one_allied_tz_impact_counters');
    localStorage.removeItem('one_allied_tz_settings');
    localStorage.removeItem('lifedrop_impact_counters');
    localStorage.removeItem('lifedrop_settings');
  };

  // 5. News stories state
  const [newsStories] = useState<NewsStory[]>(initialNewsStories);
  const [selectedStory, setSelectedStory] = useState<NewsStory | null>(null);

  // 6. Modal states
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-lime-400 selection:text-slate-950">
      {/* Primary Navigation & Top Bar */}
      <Navbar
        language={language}
        setLanguage={handleSetLanguage}
        currentPage={currentPage}
        setCurrentPage={handleNavigate}
        onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
        onOpenSupportModal={() => setIsSupportModalOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            language={language}
            setCurrentPage={handleNavigate}
            newsStories={newsStories}
            onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
            onOpenSupportModal={() => setIsSupportModalOpen(true)}
            onOpenAdminModal={() => setIsAdminModalOpen(true)}
            onSelectStory={(story) => setSelectedStory(story)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            language={language}
            setCurrentPage={handleNavigate}
            onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
          />
        )}

        {currentPage === 'work' && (
          <OurWorkPage
            language={language}
            setCurrentPage={handleNavigate}
            onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
          />
        )}

        {currentPage === 'programs' && (
          <ProgramsPage
            language={language}
            setCurrentPage={handleNavigate}
            onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
          />
        )}

        {currentPage === 'resources' && <ResourcesPage language={language} />}

        {currentPage === 'news' && (
          <NewsPage
            language={language}
            newsStories={newsStories}
            onSelectStory={(story) => setSelectedStory(story)}
          />
        )}

        {currentPage === 'involved' && (
          <GetInvolvedPage
            language={language}
            onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
            onOpenSupportModal={() => setIsSupportModalOpen(true)}
            setCurrentPage={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            language={language}
            orgSettings={orgSettings}
            onOpenAdminModal={() => setIsAdminModalOpen(true)}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        language={language}
        setCurrentPage={handleNavigate}
        onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
        onOpenSupportModal={() => setIsSupportModalOpen(true)}
      />

      {/* Interactive Modals */}
      <PartnerModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
        language={language}
      />

      <SupportModal
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
        language={language}
        onOpenPartnerModal={() => {
          setIsSupportModalOpen(false);
          setIsPartnerModalOpen(true);
        }}
      />

      <AdminLiveEditorModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        language={language}
        impactCounters={impactCounters}
        onUpdateCounters={handleUpdateCounters}
        orgSettings={orgSettings}
        onUpdateSettings={handleUpdateSettings}
        onResetDefaults={handleResetDefaults}
      />

      <ArticleReaderModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
        language={language}
      />

      {/* Floating Actions: WhatsApp (+255 764 494 606) & Back to Top */}
      <FloatingActions language={language} />
    </div>
  );
}
