import React from 'react';
import { Language, PageId, NewsStory } from '../../types';
import { tDict } from '../../translations/dictionary';
import {
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  ClipboardCheck,
  Truck,
  Boxes,
  CheckCircle2,
  AlertTriangle,
  FileSpreadsheet,
  Activity,
  ChevronRight,
  Building2,
  Users,
  Compass,
  FileCheck2,
} from 'lucide-react';

interface HomePageProps {
  language: Language;
  setCurrentPage: (page: PageId) => void;
  newsStories: NewsStory[];
  onOpenPartnerModal: () => void;
  onOpenSupportModal: () => void;
  onOpenAdminModal: () => void;
  onSelectStory: (story: NewsStory) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  language,
  setCurrentPage,
  newsStories,
  onOpenPartnerModal,
  onOpenSupportModal,
  onOpenAdminModal,
  onSelectStory,
}) => {
  const t = tDict[language];

  const serviceCards = [
    {
      id: 'operational',
      title: t.services.card1.title,
      desc: t.services.card1.desc,
      icon: Stethoscope,
      accent: 'border-sky-500 text-sky-700 bg-sky-50',
      badge: 'Facility Level',
    },
    {
      id: 'compliance',
      title: t.services.card2.title,
      desc: t.services.card2.desc,
      icon: ClipboardCheck,
      accent: 'border-lime-500 text-lime-800 bg-lime-50',
      badge: 'Standards & MoH',
    },
    {
      id: 'logistics',
      title: t.services.card3.title,
      desc: t.services.card3.desc,
      icon: Truck,
      accent: 'border-teal-500 text-teal-700 bg-teal-50',
      badge: 'Supply & Systems',
    },
    {
      id: 'resources',
      title: t.services.card4.title,
      desc: t.services.card4.desc,
      icon: Boxes,
      accent: 'border-blue-600 text-blue-700 bg-blue-50',
      badge: 'Equitable Access',
    },
  ];

  return (
    <div className="w-full space-y-0">
      {/* =========================================================================
          3. HERO SECTION
          High-quality Tanzanian healthcare image with subtle green-to-blue overlay
         ========================================================================= */}
      <section className="relative overflow-hidden bg-slate-950 text-white min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Background Image: Autonomous VTOL Delivery Drone Loading */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpg"
            alt="One Allied Tanzania flight technician loading insulated cold-chain blood capsule into autonomous delivery drone"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-40 filter contrast-105 scale-105 transition-transform duration-1000"
          />
          {/* Subtle green-to-blue overlay as specifically requested */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-sky-950/80 to-emerald-950/70" />
          <div className="absolute inset-0 bg-radial at-center from-transparent via-slate-950/40 to-slate-950/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-lime-500/40 text-xs font-semibold text-lime-300 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping"></span>
              <span>{t.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {t.hero.headline}
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
              {t.hero.subtext}
            </p>

            {/* Buttons: "Explore Our Work" and "Become a Partner" */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenPartnerModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-300 hover:to-lime-400 shadow-lg shadow-lime-500/20 hover:shadow-lime-500/30 transition-all duration-200 cursor-pointer"
              >
                <HeartHandshake className="w-4 h-4 text-slate-950" />
                <span>{t.becomePartner}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setCurrentPage('work');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xs transition-all duration-200 cursor-pointer"
              >
                <span>{t.exploreWork}</span>
                <ChevronRight className="w-4 h-4 text-lime-300" />
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-slate-800/80 text-xs">
              <div>
                <span className="text-lime-400 font-bold block text-sm sm:text-base">
                  {t.hero.quickStat1}
                </span>
                <span className="text-slate-400">{t.hero.quickStat1Desc}</span>
              </div>
              <div>
                <span className="text-sky-400 font-bold block text-sm sm:text-base">
                  {t.hero.quickStat2}
                </span>
                <span className="text-slate-400">{t.hero.quickStat2Desc}</span>
              </div>
              <div>
                <span className="text-emerald-300 font-bold block text-sm sm:text-base">
                  {t.hero.quickStat3}
                </span>
                <span className="text-slate-400">{t.hero.quickStat3Desc}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SHORT INTRODUCTION SECTION
          "Improving Healthcare Where It Matters Most" addressing the 7 core challenges
         ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              {language === 'en' ? 'Context & Purpose' : 'Muktadha na Madhumuni'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.intro.heading}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {t.intro.lead}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Context narrative */}
            <div className="lg:col-span-6 space-y-4 text-slate-700 text-sm leading-relaxed">
              <p className="font-medium text-slate-900 text-base">
                {t.intro.paragraph1}
              </p>
              <p className="text-slate-600">
                {t.intro.paragraph2}
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => setCurrentPage('about')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 hover:underline"
                >
                  <span>{language === 'en' ? 'Learn about One Allied Tanzania background and mission' : 'Soma kuhusu historia na malengo ya One Allied Tanzania'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 7 Core Challenges Grid */}
            <div className="lg:col-span-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-sky-600" />
                  <span>{t.intro.challengesTitle}</span>
                </h3>

                <div className="grid grid-cols-1 gap-2.5">
                  {t.intro.challenges.map((ch, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs hover:border-lime-400 transition-colors"
                    >
                      <span className="w-5 h-5 rounded-full bg-lime-100 text-lime-800 text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="text-xs">
                        <span className="font-bold text-slate-900 block">{ch.title}</span>
                        <span className="text-slate-500 leading-snug">{ch.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. FOUR SERVICE/PROGRAM CARDS
          Simple professional icons & clear functional pillars
         ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-lime-700 bg-lime-100/70 px-3 py-1 rounded-full border border-lime-300">
              {language === 'en' ? 'Systemic Interventions' : 'Hatua za Kimfumo'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.services.sectionTitle}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.services.sectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map((card) => {
              const IconComp = card.icon;
              return (
                <div
                  key={card.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-lime-500 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border ${card.accent}`}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        {card.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-100">
                    <button
                      onClick={() => {
                        setCurrentPage('programs');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 group-hover:text-lime-700 group-hover:translate-x-1 transition-all"
                    >
                      <span>{t.learnMore}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. MISSION AND PURPOSE SECTION
          Split layout with mission text and image of Tanzanian healthcare professionals collaborating
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Mission Quote & Vision */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-100 text-lime-900 text-xs font-bold border border-lime-300">
                <Compass className="w-3.5 h-3.5 text-lime-700" />
                <span>{t.mission.sectionBadge}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {t.mission.headline}
              </h2>

              {/* Exact Mission Statement as specified */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-50 to-lime-50/60 border-l-4 border-sky-600 text-slate-900 shadow-2xs">
                <p className="text-base sm:text-lg font-bold italic leading-relaxed text-slate-800">
                  {t.mission.quote}
                </p>
                <span className="block mt-2 text-xs font-semibold text-sky-800 uppercase tracking-wider">
                  — One Allied Tanzania Mandate
                </span>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-lime-600" />
                    <span>{t.mission.visionTitle}</span>
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed pl-6">
                    {t.mission.visionText}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                    <span>{t.mission.whyTitle}</span>
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed pl-6">
                    {t.mission.whyText}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Authentic Photograph of Tanzanian drone flight operations team */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
                <img
                  src="/images/drone_pilots_field.jpg"
                  alt="Tanzanian female drone pilot in hijab and high-vis vest with flight engineer controlling delivery drone in field"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="flex items-center gap-2 text-xs text-lime-300 font-semibold mb-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>One Allied Tanzania Flight Logistics &amp; Field Telemetry</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-snug">
                    Certified Tanzanian flight operators and engineers testing autonomous flight paths to deliver emergency maternal blood supplies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          “HOW WE WORK” SECTION
          Four-step process: Assess -> Collaborate -> Deliver -> Strengthen
         ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
              {t.howWeWork.sectionBadge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.howWeWork.headline}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.howWeWork.subtext}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                  01
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {t.howWeWork.step1Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.howWeWork.step1Desc}
                </p>
              </div>
              <div className="pt-4 mt-3 text-[11px] font-semibold text-sky-700 uppercase tracking-wider">
                Phase 1 • Diagnosis
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-lime-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                  02
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {t.howWeWork.step2Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.howWeWork.step2Desc}
                </p>
              </div>
              <div className="pt-4 mt-3 text-[11px] font-semibold text-lime-800 uppercase tracking-wider">
                Phase 2 • Co-Design
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                  03
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {t.howWeWork.step3Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.howWeWork.step3Desc}
                </p>
              </div>
              <div className="pt-4 mt-3 text-[11px] font-semibold text-teal-800 uppercase tracking-wider">
                Phase 3 • Implementation
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-lime-400 font-bold flex items-center justify-center text-sm shadow-xs">
                  04
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {t.howWeWork.step4Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.howWeWork.step4Desc}
                </p>
              </div>
              <div className="pt-4 mt-3 text-[11px] font-semibold text-slate-800 uppercase tracking-wider">
                Phase 4 • Institutionalization
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. FEATURED STORY/NEWS SECTION
          Three editable cards for programs, training activities, partnerships
         ========================================================================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-lime-700 bg-lime-100 px-3 py-1 rounded-full border border-lime-300">
                {t.news.sectionBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {t.news.headline}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                {t.news.subtext}
              </p>
            </div>

            <button
              onClick={() => {
                setCurrentPage('news');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 hover:underline self-start sm:self-auto"
            >
              <span>{t.viewAllNews}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsStories.slice(0, 5).map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md hover:border-lime-500 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={story.image}
                      alt={story.imageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-xs">
                        {language === 'en' ? story.categoryEn : story.categorySw}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <span className="text-[11px] font-medium text-slate-400 block">
                      {story.date} • {story.readTime}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                      {language === 'en' ? story.titleEn : story.titleSw}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {language === 'en' ? story.excerptEn : story.excerptSw}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2">
                  <button
                    onClick={() => onSelectStory(story)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 group-hover:text-lime-700 transition-colors cursor-pointer"
                  >
                    <span>{t.readMore}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. PARTNER/SUPPORT BANNER
          "Together, we can build safer, stronger, and more responsive healthcare services in Tanzania."
         ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-sky-900 via-sky-800 to-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              “{t.partnerBanner.headline}”
            </h2>
            <p className="text-sm sm:text-base text-sky-100 max-w-2xl mx-auto leading-relaxed">
              {t.partnerBanner.subtext}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenPartnerModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-lime-400 hover:bg-lime-300 shadow-lg shadow-lime-500/20 transition-all cursor-pointer"
              >
                <HeartHandshake className="w-4 h-4 text-slate-950" />
                <span>{t.partnerWithUs}</span>
              </button>

              <button
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-xs transition-colors cursor-pointer"
              >
                <span>{t.contactTeam}</span>
                <ArrowRight className="w-4 h-4 text-lime-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
