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
              {language === 'en' ? 'Project Targets & Expected Outcomes' : 'Shabaha za Mradi na Matokeo'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {language === 'en'
                ? 'Target Outcomes & Performance Indicators'
                : 'Shabaha za Matokeo na Viashiria vya Utendaji'}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {language === 'en'
                ? 'Radical transparency on project metrics: All figures represent projected outcomes and pilot performance targets for the One Allied Tanzania 2026 deployment, not historical claims.'
                : 'Uwazi kamili kuhusu shabaha za mradi: Takwimu zote zinawakilisha shabaha zilizokusudiwa za awamu ya majaribio ya One Allied Tanzania 2026, si mafanikio ya zamani.'}
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
                {counter.isPlaceholder ? 'Target Benchmark' : 'Active Engagement'}
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
              ? 'One Allied Tanzania strictly adheres to data integrity. Stated indicators (80% transit reduction, 0 preventable maternal deaths, 100% equity commitment) are pilot target benchmarks for the 2026 deployment in Ubungo District, Dar es Salaam.'
              : 'One Allied Tanzania inazingatia uadilifu wa data. Viashiria vilivyoainishwa (punguzo la asilimia 80 la muda wa usafiri, vifo 0 vya uzazi vinavyozuilika, na asilimia 100 ya usawa) ni shabaha za majaribio ya mwaka 2026 Wilaya ya Ubungo, Dar es Salaam.'}
          </span>
        </div>
      </section>

      {/* Interactive Project Map of Tanzania */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                {language === 'en' ? 'Geographical Focus & Expansion Roadmap' : 'Eneo la Majaribio na Mpango wa Upanuzi'}
              </span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                {language === 'en' ? 'Pilot Hub & Regional Corridors' : 'Kitovu cha Majaribio na Njia za Kanda'}
              </h2>
            </div>
            <span className="text-xs px-3 py-1 bg-lime-100 text-lime-900 rounded-full font-bold self-start">
              Pilot Phase 2026
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Interactive Map Schematic */}
            <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-6 relative min-h-[380px] sm:min-h-[420px] overflow-hidden flex flex-col justify-between">
              {/* Stylized background grid & Tanzania outline representation */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>

              <div className="relative z-10 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-lime-400 font-bold">Interactive Corridor Selector</span>
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
                    <span className="w-2 h-2 rounded-full bg-lime-400"></span> 2026 Pilot Hub
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-sky-400"></span> Expansion Assessment
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
                  Target Facility Cohort:
                </span>
                <span className="font-mono text-sm font-bold text-lime-700">
                  {selectedRegion.facilitiesCount}
                </span>
              </div>

              <button
                onClick={onOpenPartnerModal}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
              >
                {language === 'en' ? 'Engage Project Team' : 'Wasiliana na Timu ya Mradi'}
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
              {language === 'en' ? 'Emergency Drone Flight Simulation' : 'Uigaji wa Safari ya Dharura ya Droni'}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {language === 'en'
                ? 'Rapid Transit Over Dar es Salaam Traffic Congestion'
                : 'Kushinda Foleni za Dar es Salaam Kupitia Anga'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {language === 'en'
                ? 'During ground transport simulations along the Morogoro Road corridor in Ubungo District, severe traffic congestion regularly created emergency transit delays of 90 to 180 minutes between central blood distribution hubs and peripheral health facilities. In simulated automated drone flight corridors, direct point-to-point transit was achieved in under 20 minutes with continuous temperature monitoring between +2°C and +6°C.'
                : 'Wakati wa tathmini ya usafiri wa ardhini katika barabara ya Morogoro Wilaya ya Ubungo, foleni kubwa za magari zilisababisha ucheleweshaji wa dakika 90 hadi 180 kupeleka damu kutoka benki kuu hadi vituo vya pembezoni. Katika uigaji wa usafiri wa droni angani, umbali huo ulikatwa kwa chini ya dakika 20 huku joto la damu likihifadhiwa salama kati ya nyuzi joto +2°C na +6°C.'}
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
              <span>{language === 'en' ? 'Project Publications' : 'Machapisho ya Mradi'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {language === 'en'
                ? 'One Allied Tanzania Project Brief & Technical Prospectus'
                : 'Muhtasari wa Mradi wa One Allied Tanzania na Wasifu wa Kiufundi'}
            </h3>
            <p className="text-xs text-slate-600">
              {language === 'en'
                ? 'Download our comprehensive project document, clinical cold-chain protocols, flight safety frameworks, and governance overview (PDF format).'
                : 'Pakua waraka wa mradi, miongozo ya ubaridi wa damu, taratibu za usalama wa anga, na wasifu wa uongozi (muundo wa PDF).'}
            </p>
          </div>

          <a
            href="/logo.svg"
            download="One_Allied_Tanzania_Project_Document.pdf"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-sm transition-colors shrink-0"
          >
            <FileDown className="w-4 h-4 text-lime-300" />
            <span>{language === 'en' ? 'Download Project Brief (PDF)' : 'Pakua Waraka wa Mradi (PDF)'}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
