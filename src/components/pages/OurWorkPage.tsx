import React from 'react';
import { Language, PageId } from '../../types';
import {
  CheckCircle2,
  Stethoscope,
  ShieldCheck,
  Truck,
  HeartHandshake,
  ArrowRight,
  ClipboardList,
  Sparkles,
  Layers,
  Search,
} from 'lucide-react';

interface OurWorkPageProps {
  language: Language;
  setCurrentPage: (page: PageId) => void;
  onOpenPartnerModal: () => void;
}

export const OurWorkPage: React.FC<OurWorkPageProps> = ({
  language,
  setCurrentPage,
  onOpenPartnerModal,
}) => {
  const interventionAreas = [
    {
      titleEn: '1. Clinical Governance & Audit Loops',
      titleSw: '1. Usimamizi wa Kliniki na Ukaguzi wa Ndani',
      descEn: 'Establishing internal clinical review committees inside hospitals and health centers to routinely review diagnostic accuracy, prescription safety, and morbidity trends.',
      descSw: 'Kuanzisha kamati za ukaguzi wa kliniki hospitalini na vituoni ili kufanya tathmini za mara kwa mara za usahihi wa vipimo na mwenendo wa magonjwa.',
      focus: ['Diagnostic validation', 'Morbidity audits', 'Clinical handover SOPs'],
    },
    {
      titleEn: '2. Patient Safety & Infection Control (IPC)',
      titleSw: '2. Usalama wa Mgonjwa na Udhibiti wa Maambukizi',
      descEn: 'Eliminating preventable hospital-acquired infections through sterilized instrument management, waste segregation, safe injection practices, and hand hygiene monitoring.',
      descSw: 'Kutokomeza maambukizi ya hospitalini kupitia usafishaji sahihi wa vifaa tiba, udhibiti wa taka za matibabu, na usafi wa mikono.',
      focus: ['Sterilization checklists', 'Safe injection practice', 'Maternal ward safety'],
    },
    {
      titleEn: '3. Healthcare Facility Operations & Flow',
      titleSw: '3. Uendeshaji wa Vituo na Mtiririko wa Wagonjwa',
      descEn: 'Redesigning patient intake triage, reducing outpatient waiting bottlenecks, and streamlining emergency referral transport to save crucial minutes in acute trauma or obstetrics.',
      descSw: 'Kuboresha mfumo wa kupokea wagonjwa (triage), kupunguza muda wa kusubiri, na kuimarisha itifaki za dharura za rufaa.',
      focus: ['Triage optimization', 'Referral coordination', 'Bed management'],
    },
    {
      titleEn: '4. Medical Supply Chain & Inventory Integrity',
      titleSw: '4. Ugavi wa Dawa na Utunzaji wa Vifaa Tiba',
      descEn: 'Training dispensary storekeepers in min-max inventory forecasting, cold-chain temperature verification, and preventative maintenance for diagnostic laboratory analyzers.',
      descSw: 'Kutoa mafunzo ya usimamizi wa stoo za dawa, uhifadhi salama wa baridi, na matengenezo ya mara kwa mara ya mashine za maabara.',
      focus: ['Stockout prevention', 'Cold-chain monitoring', 'Biomedical maintenance'],
    },
    {
      titleEn: '5. Frontline Workforce Mentorship',
      titleSw: '5. Mafunzo Kazini kwa Wataalamu wa Afya',
      descEn: 'Replacing punitive inspection with collaborative clinical preceptorship, giving remote nurses and clinical officers access to continuing professional development.',
      descSw: 'Kuondokana na ukaguzi wa kulaumiana na badala yake kutoa uelekezi wa vitendo kazini unaowapa wauguzi na madaktari ujuzi mpya.',
      focus: ['On-site preceptorship', 'Refresher masterclasses', 'Ethics & dignified care'],
    },
  ];

  return (
    <div className="w-full pb-20 space-y-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 opacity-95"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-lime-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              {language === 'en' ? 'Our Strategic Approach' : 'Mkakati wa Kazi Yetu'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {language === 'en'
                ? 'Systemic Health Quality Solutions in Action'
                : 'Suluhu za Kimfumo za Ubora wa Afya Katika Vitendo'}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {language === 'en'
                ? 'We target root causes of healthcare inefficiency, clinical safety lapses, and administrative delays through evidence-driven, sustainable interventions.'
                : 'Tunalenga vyanzo vya changamoto za afya na ucheleweshaji kupitia mikakati endelevu inayotegemea ushahidi na sayansi ya utendaji.'}
            </p>
          </div>
        </div>
      </section>

      {/* Theory of Change Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700">
            <Layers className="w-4 h-4" />
            <span>{language === 'en' ? 'Theory of Change' : 'Nadharia ya Mabadiliko'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 max-w-3xl">
            {language === 'en'
              ? 'From Facility Frustration to Institutional Excellence'
              : 'Kutoka Changamoto za Vituo Hadi Ubora wa Kudumu'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-2">
              <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block">
                {language === 'en' ? '1. The Problem' : '1. Changamoto'}
              </span>
              <p className="text-xs text-rose-950 leading-relaxed">
                {language === 'en'
                  ? 'Fragmented quality systems, equipment downtime, delayed treatment, and incomplete documentation lead to avoidable patient harm.'
                  : 'Mifumo duni ya ubora, mashine kuharibika, ucheleweshaji wa matibabu, na nyaraka zisizo kamilifu zinaleta madhara kwa wagonjwa.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-2">
              <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block">
                {language === 'en' ? '2. Our Intervention' : '2. Hatua Yetu'}
              </span>
              <p className="text-xs text-sky-950 leading-relaxed">
                {language === 'en'
                  ? 'On-site supportive mentorship, standardized clinical checklists, inventory forecasting frameworks, and regulatory compliance assistance.'
                  : 'Mafunzo elekezi kazini, orodha sanifu za ukaguzi, mifumo ya ugavi wa dawa, na msaada wa kisheria na leseni za vituo.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-lime-50/80 border border-lime-300 space-y-2">
              <span className="text-xs font-bold text-lime-900 uppercase tracking-wider block">
                {language === 'en' ? '3. The Outcome' : '3. Matokeo Endelevu'}
              </span>
              <p className="text-xs text-lime-950 leading-relaxed">
                {language === 'en'
                  ? 'Accurate diagnoses, zero preventable hospital-acquired infections, dignified patient care, and resilient health institutions across Tanzania.'
                  : 'Vipimo sahihi, kuzuia maambukizi ya hospitalini, matibabu ya staha, na vituo imara vya afya kote Tanzania.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Intervention Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-lime-700">
            {language === 'en' ? 'Programmatic Scope' : 'Maeneo ya Utekelezaji'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {language === 'en' ? 'Five Core Intervention Areas' : 'Maeneo Matano ya Uingiliaji'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interventionAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:border-lime-500 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900">
                  {language === 'en' ? area.titleEn : area.titleSw}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === 'en' ? area.descEn : area.descSw}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Key Workflows:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {area.focus.map((f, fIdx) => (
                    <span
                      key={fIdx}
                      className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Callout box */}
          <div className="bg-gradient-to-br from-sky-600 to-sky-800 text-white rounded-2xl p-6 flex flex-col justify-between">
            <div className="space-y-3">
              <Sparkles className="w-8 h-8 text-lime-300" />
              <h3 className="text-lg font-bold">
                {language === 'en'
                  ? 'Request a Facility Quality Review'
                  : 'Omba Tathmini ya Ubora Kituoni'}
              </h3>
              <p className="text-xs text-sky-100 leading-relaxed">
                {language === 'en'
                  ? 'Are you a medical superintendent or facility board in Tanzania seeking operational improvement?'
                  : 'Je, wewe ni mkuu wa hospitali au bodi ya afya unayetaka kuboresha huduma zako?'}
              </p>
            </div>
            <button
              onClick={onOpenPartnerModal}
              className="mt-4 px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-xs transition-colors self-start"
            >
              {language === 'en' ? 'Submit Facility Request' : 'Wasilisha Ombi la Kituo'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
