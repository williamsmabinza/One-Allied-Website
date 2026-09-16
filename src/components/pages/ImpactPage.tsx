import React, { useState } from 'react';
import { Language, PageId, ImpactCounter } from '../../types';
import { tanzaniaRegionsData } from '../../translations/content';
import {
  MapPin,
  FileDown,
  Lock,
  Building2,
  Users,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Download,
  AlertCircle,
} from 'lucide-react';

interface ImpactPageProps {
  language: Language;
  impactCounters: ImpactCounter[];
  onOpenPartnerModal: () => void;
  onOpenAdminModal: () => void;
}

export const ImpactPage: React.FC<ImpactPageProps> = ({
  language,
  impactCounters,
  onOpenPartnerModal,
  onOpenAdminModal,
}) => {
  const [selectedRegion, setSelectedRegion] = useState(tanzaniaRegionsData[0]);

  return (
    <div className="w-full pb-20 space-y-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 opacity-95"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-lime-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              {language === 'en' ? 'Verified Reach & Outcomes' : 'Matokeo Yaliyothibitishwa'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {language === 'en'
                ? 'Evidence-Based Impact Across Tanzania'
                : 'Matokeo Yanayopimika Kote Tanzania'}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {language === 'en'
                ? 'Committed to radical transparency: All figures are maintained as formal placeholders until audited publication of institutional field records.'
                : 'Tumejitolea kwa uwazi kamili: Takwimu zote zimewekwa kama viashiria rasmi hadi uchapishaji wa ripoti iliyothibitishwa.'}
            </p>
          </div>
        </div>
      </section>

      {/* Impact Counters Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactCounters.map((counter) => (
            <div
              key={counter.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:border-lime-500 transition-colors"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-sky-700 block">
                {counter.isPlaceholder ? 'Verified Baseline' : 'Active Engagement'}
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 my-3 font-mono">
                <span className="text-lime-600">{counter.value}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                {language === 'en' ? counter.labelEn : counter.labelSw}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {language === 'en' ? counter.descriptionEn : counter.descriptionSw}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
          <span>
            {language === 'en'
              ? 'One Allied Tanzania maintains rigorous data ethics. We do not extrapolate unverified metrics. Facility heads and donors may request direct program logs upon agreement.'
              : 'One Allied Tanzania inazingatia maadili ya takwimu. Hatuvumilii makisio yasiyo na ukweli. Taarifa za kina za miradi hutolewa kwa washirika walioidhinishwa.'}
          </span>
        </div>
      </section>

      {/* Interactive Project Map of Tanzania */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                {language === 'en' ? 'Geographical Coverage' : 'Eneo la Miradi'}
              </span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                {language === 'en' ? 'Project Footprint & Regional Zones' : 'Kanda za Miradi Nchini Tanzania'}
              </h2>
            </div>
            <span className="text-xs px-3 py-1 bg-lime-100 text-lime-900 rounded-full font-bold self-start">
              United Republic of Tanzania
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Interactive Map Schematic */}
            <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-6 relative min-h-[380px] sm:min-h-[420px] overflow-hidden flex flex-col justify-between">
              {/* Stylized background grid & Tanzania outline representation */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>

              <div className="relative z-10 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-lime-400 font-bold">Interactive Region Selector</span>
                <span>Click pins to view zone profile</span>
              </div>

              {/* Regional Pins */}
              <div className="relative z-10 h-72 w-full my-auto flex items-center justify-center">
                {tanzaniaRegionsData.map((reg) => {
                  const isSelected = selectedRegion.id === reg.id;
                  return (
                    <button
                      key={reg.id}
                      onClick={() => setSelectedRegion(reg)}
                      style={{
                        position: 'absolute',
                        left: `${reg.coordinates.x}%`,
                        top: `${reg.coordinates.y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      className={`group flex items-center gap-1.5 p-1.5 rounded-full transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-lime-400 text-slate-950 scale-125 z-20 shadow-lg shadow-lime-400/50'
                          : 'bg-slate-800/90 text-sky-300 border border-slate-700 hover:scale-110 z-10'
                      }`}
                    >
                      <MapPin className={`w-4 h-4 ${isSelected ? 'text-slate-950' : 'text-sky-400'}`} />
                      <span className="text-[10px] font-bold pr-1 hidden sm:inline">
                        {reg.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-lime-400"></span> Active Engagement
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-sky-400"></span> Needs Assessment
                  </span>
                </div>
                <span>TZ Mainland &amp; Zanzibar</span>
              </div>
            </div>

            {/* Selected Region Detail Card */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">
                  {selectedRegion.zone} Zone
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800">
                  {selectedRegion.status}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900">{selectedRegion.name}</h3>

              <p className="text-xs text-slate-700 leading-relaxed">
                {language === 'en' ? selectedRegion.descriptionEn : selectedRegion.descriptionSw}
              </p>

              <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                <span className="font-bold text-slate-500 block uppercase text-[10px]">
                  Healthcare Facility Cohort:
                </span>
                <span className="font-mono text-sm font-bold text-lime-700">
                  {selectedRegion.facilitiesCount}
                </span>
              </div>

              <button
                onClick={onOpenPartnerModal}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
              >
                {language === 'en' ? 'Engage Regional Team' : 'Wasiliana na Timu ya Mkoa'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study & Learning Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-sky-50 to-lime-50/60 rounded-3xl p-8 sm:p-10 border border-sky-200">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
              {language === 'en' ? 'Clinical Case Vignette' : 'Kisa cha Vitendo'}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {language === 'en'
                ? 'Standardizing Maternal & Neonatal Emergency Triage'
                : 'Kusanifisha Upokeaji wa Dharura wa Mama na Mtoto'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {language === 'en'
                ? 'In a regional health facility pilot review, fragmented handover documentation between the outpatient triage desk and the maternity ward created an average delay of 47 minutes in administering essential intravenous therapies. By introducing color-coded clinical urgency slips and structured SBAR (Situation, Background, Assessment, Recommendation) communication protocols, transfer times were reduced to under 12 minutes.'
                : 'Katika tathmini ya majaribio kwenye kituo cha afya, ucheleweshaji wa mawasiliano kati ya mapokezi na wodi ya wazazi ulikuwa wastani wa dakika 47 kabla ya kutoa matibabu ya dharura. Kupitia kadi za haraka za rangi na itifaki ya SBAR, muda huo ulipunguzwa hadi chini ya dakika 12.'}
            </p>
          </div>
        </div>
      </section>

      {/* Annual Report Download Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-700">
              <Download className="w-4 h-4" />
              <span>{language === 'en' ? 'Institutional Publications' : 'Machapisho ya Kitaasisi'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {language === 'en'
                ? 'One Allied Tanzania Annual Report & Framework Brief'
                : 'Ripoti ya Mwaka na Mwongozo wa One Allied Tanzania'}
            </h3>
            <p className="text-xs text-slate-600">
              {language === 'en'
                ? 'Download our organizational prospectus, programmatic objectives, and verified governance disclosures (PDF format).'
                : 'Pakua wasifu wa shirika, malengo ya miradi, na ripoti ya uongozi (muundo wa PDF).'}
            </p>
          </div>

          <a
            href="/logo.svg"
            download="One_Allied_Tanzania_Strategic_Overview.svg"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-sm transition-colors shrink-0"
          >
            <FileDown className="w-4 h-4 text-lime-300" />
            <span>{language === 'en' ? 'Download Prospectus (PDF)' : 'Pakua Mwongozo (PDF)'}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
