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
  Plane,
  ThermometerSnowflake,
  BellRing,
  MapPin,
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
      titleEn: '1. Digital Emergency Alerts & Detection',
      titleSw: '1. Taarifa za Haraka za Dharura za Kidijitali',
      descEn: 'Digital detection identifies urgent blood shortages at the clinic level and immediately notifies the responsible hospital and central blood bank.',
      descSw: 'Mfumo wa kidijitali hutambua uhaba wa damu ya dharura kituoni na kutuma taarifa mara moja kwa hospitali na benki ya damu inayohusika.',
      focus: ['Instant alert trigger', 'Blood type matching', 'Hospital notification'],
    },
    {
      titleEn: '2. Drone Flight Logistics & Routing',
      titleSw: '2. Usafirishaji na Njia za Anga za Droni',
      descEn: 'Small electric drones fly autonomous corridors connecting the central hub in Ubungo District directly to health facilities in need, bypassing traffic and road obstacles.',
      descSw: 'Droni ndogo za umeme huruka njia maalum za anga zikitokea kituo kikuu cha Ubungo moja kwa moja hadi vituo vya afya, zikikwepa foleni na barabara mbovu.',
      focus: ['Hub-and-spoke flight', 'Electric drone fleet', 'Real-time GPS tracking'],
    },
    {
      titleEn: '3. Cold-Chain Blood Safety Protocols',
      titleSw: '3. Udhibiti wa Ubaridi na Usalama wa Damu',
      descEn: 'Specialized temperature-controlled boxes protect blood components throughout flight, keeping units safe and ready for immediate transfusion upon landing.',
      descSw: 'Masanduku maalum yanayodhibiti joto yanalinda damu wakati wote wa safari ya droni, yakihakikisha iko salama na tayari kutumika mara inapotua.',
      focus: ['2°C–6°C protection', 'Thermal insulation', 'Pre-flight safety checks'],
    },
    {
      titleEn: '4. Hospital & Blood Bank Coordination',
      titleSw: '4. Uratibu wa Hospitali na Benki za Damu',
      descEn: 'Direct coordination between clinics, district hospitals, blood banks, and health authorities for rapid blood package preparation and dispatch.',
      descSw: 'Uratibu wa moja kwa moja kati ya zahanati, hospitali za wilaya, benki za damu, na mamlaka za afya kwa maandalizi ya haraka na utumaji wa vifurushi.',
      focus: ['Blood dispatch SOPs', 'Inventory coordination', 'Rapid hub packaging'],
    },
    {
      titleEn: '5. Clinic Landing Readiness & Midwife Training',
      titleSw: '5. Utayari wa Maeneo ya Kutua na Mafunzo ya Wakunga',
      descEn: 'Evaluating health facilities for safe drone landing zones and training frontline midwives and health workers to safely receive blood and initiate emergency treatment.',
      descSw: 'Kutathmini vituo vya afya kupata maeneo salama ya kutua droni na kuwapa mafunzo wakunga na watumishi kupokea damu na kuanza matibabu ya dharura.',
      focus: ['Landing zone criteria', 'Safe package retrieval', 'Transfusion readiness'],
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
              {language === 'en' ? 'One Allied Tanzania System & Method' : 'Mfumo na Mbinu za One Allied Tanzania'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {language === 'en'
                ? 'How One Allied Tanzania Solves Emergency Blood Delays'
                : 'Jinsi One Allied Tanzania Inavyotatua Ucheleweshaji wa Damu'}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {language === 'en'
                ? 'A synchronized digital emergency alert and drone transport system engineered to reduce maternal deaths caused by delayed blood transport in Tanzania.'
                : 'Mfumo wa kidijitali wa taarifa za dharura na usafirishaji wa droni ulioundwa kupunguza vifo vya akina mama vinavyotokana na kuchelewa kwa damu nchini Tanzania.'}
            </p>
          </div>
        </div>
      </section>

      {/* Theory of Change Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700">
            <Layers className="w-4 h-4" />
            <span>{language === 'en' ? 'Project Framework & Theory of Change' : 'Mfumo wa Mradi na Nadharia ya Mabadiliko'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 max-w-3xl">
            {language === 'en'
              ? 'From Transport Delays to Immediate Maternal Care'
              : 'Kutoka Ucheleweshaji wa Usafiri Hadi Huduma ya Haraka kwa Mama'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-2">
              <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block">
                {language === 'en' ? '1. The Problem' : '1. Changamoto'}
              </span>
              <p className="text-xs text-rose-950 leading-relaxed">
                {language === 'en'
                  ? 'Severe bleeding after childbirth (postpartum hemorrhage) requires urgent blood. Poor roads, traffic, and long distances cause emergency blood to take hours to arrive.'
                  : 'Kutokwa na damu nyingi baada ya kujifungua kunahitaji damu ya haraka. Barabara mbovu, foleni, na umbali mrefu husababisha damu kuchukua saa kadhaa kufika.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-2">
              <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block">
                {language === 'en' ? '2. One Allied Tanzania Intervention' : '2. Suluhisho la One Allied Tanzania'}
              </span>
              <p className="text-xs text-sky-950 leading-relaxed">
                {language === 'en'
                  ? 'Digital alerts notify hospitals and blood banks instantly; small electric drones carry temperature-controlled cold-chain boxes directly to the clinic.'
                  : 'Taarifa za kidijitali hutumwa mara moja hospitalini; droni ndogo za umeme hubeba masanduku maalum yanayodhibiti ubaridi moja kwa moja hadi zahanati.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-lime-50/80 border border-lime-300 space-y-2">
              <span className="text-xs font-bold text-lime-900 uppercase tracking-wider block">
                {language === 'en' ? '3. Project Targets' : '3. Malengo ya Mradi'}
              </span>
              <p className="text-xs text-lime-950 leading-relaxed">
                {language === 'en'
                  ? 'Target 80% reduction in transport time (hours to minutes), target 0 maternal deaths from postpartum hemorrhage in project areas, and 100% equity commitment.'
                  : 'Lengo la kupunguza muda wa usafiri kwa 80% (saa hadi dakika), lengo la vifo 0 vya akina mama vitokanavyo na kuvuja damu maeneo ya mradi, na ahadi ya usawa wa 100%.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Intervention Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-lime-700">
            {language === 'en' ? 'System Capabilities' : 'Uwezo wa Mfumo'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {language === 'en' ? 'Five Core Operational Pillars' : 'Nguzo Tano Kuu za Uendeshaji'}
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
                  ? 'Assess Health Facility Readiness'
                  : 'Tathmini Utayari wa Kituo cha Afya'}
              </h3>
              <p className="text-xs text-sky-100 leading-relaxed">
                {language === 'en'
                  ? 'Are you a health center or hospital administrator interested in landing zone readiness for One Allied Tanzania drone delivery?'
                  : 'Je, wewe ni mkuu wa kituo cha afya au hospitali unayetaka kutathmini eneo la kutua droni kwa ajili ya One Allied Tanzania?'}
              </p>
            </div>
            <button
              onClick={onOpenPartnerModal}
              className="mt-4 px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-xs transition-colors self-start"
            >
              {language === 'en' ? 'Submit Facility Assessment Request' : 'Wasilisha Ombi la Tathmini ya Kituo'}
            </button>
          </div>
        </div>
      </section>

      {/* Operations & Technology in the Field Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border-t border-slate-200 pt-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            {language === 'en' ? 'Field Operations & Visual Documentation' : 'Operesheni za Nyanjani na Kumbukumbu'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            {language === 'en'
              ? 'Autonomous Technology Serving Mothers & Frontline Clinics'
              : 'Teknolojia ya Droni Inayookoa Akina Mama na Zahanati za Vijijini'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-3xl">
            {language === 'en'
              ? 'From cold-chain payload encapsulation and flight telemetry to frontline healthcare partnerships in maternity wards, see One Allied Tanzania in action.'
              : 'Kuanzia ufungashaji wa damu katika nyuzi joto salama hadi uratibu wa wakunga vituoni, tazama utendaji kazi wa One Allied Tanzania.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: VTOL Loading */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
            <div className="relative h-56 overflow-hidden">
              <img
                src="/images/vtol_drone_loading.jpg"
                alt="Technician loading cold chain payload capsule into Wingcopter VTOL drone"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-slate-900/80 text-lime-300 text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs">
                Cold-Chain Insertion
              </span>
            </div>
            <div className="p-4 space-y-1">
              <h4 className="text-sm font-bold text-slate-900">
                {language === 'en' ? 'VTOL Aircraft Payload Preparation' : 'Maandalizi ya Ndege ya VTOL na Mzigo'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'en'
                  ? 'Inserting insulated temperature-controlled capsule (+2°C to +6°C) into autonomous delivery aircraft.'
                  : 'Kuweka sanduku maalum la kudhibiti ubaridi wa damu (2°C hadi 6°C) ndani ya droni ya kisasa.'}
              </p>
            </div>
          </div>

          {/* Card 2: Drone Flight Operators */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
            <div className="relative h-56 overflow-hidden">
              <img
                src="/images/drone_pilots_field.jpg"
                alt="Female drone pilot in hijab and neon vest with flight engineer controlling cargo drone"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-slate-900/80 text-lime-300 text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs">
                Flight Telemetry
              </span>
            </div>
            <div className="p-4 space-y-1">
              <h4 className="text-sm font-bold text-slate-900">
                {language === 'en' ? 'Certified Flight Operators in the Field' : 'Majaribio ya Urushaji Nyanjani'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'en'
                  ? 'Piloting and tracking autonomous delivery missions across dedicated flight corridors in Tanzania.'
                  : 'Kuongoza na kufuatilia safari za droni kupitia njia maalum za anga zilizoidhinishwa nchini Tanzania.'}
              </p>
            </div>
          </div>

          {/* Card 3: Drone in Flight with Red Cross */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
            <div className="relative h-56 overflow-hidden">
              <img
                src="/images/drone_redcross.jpg"
                alt="Medical delivery drone carrying red cross container over rural community"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-slate-900/80 text-lime-300 text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs">
                Aerial Delivery
              </span>
            </div>
            <div className="p-4 space-y-1">
              <h4 className="text-sm font-bold text-slate-900">
                {language === 'en' ? 'Emergency Blood Transit Over Communities' : 'Usafirishaji wa Damu ya Dharura Angani'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'en'
                  ? 'Bypassing congested roads and unpaved rural tracks to deliver emergency blood within minutes.'
                  : 'Kukwepa foleni na barabara zenye vumbi au matope ili kufikisha damu ya dharura ndani ya dakika chache.'}
              </p>
            </div>
          </div>

          {/* Card 4: Midwives and Mothers */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
            <div className="relative h-56 overflow-hidden">
              <img
                src="/images/midwives_mothers.jpg"
                alt="Nurse and mothers with maternal health records"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-slate-900/80 text-lime-300 text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs">
                Frontline Midwives
              </span>
            </div>
            <div className="p-4 space-y-1">
              <h4 className="text-sm font-bold text-slate-900">
                {language === 'en' ? 'Mothers & Primary Health Workers' : 'Akina Mama na Wakunga wa Zahanati'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'en'
                  ? 'Equipping midwives with rapid blood access so no mother is lost to postpartum hemorrhage.'
                  : 'Kuwawezesha wakunga kupata damu haraka ili kuzuia vifo vya akina mama baada ya kujifungua.'}
              </p>
            </div>
          </div>

          {/* Card 5: Maternal Care Clinic */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
            <div className="relative h-56 overflow-hidden">
              <img
                src="/images/maternal_clinic.jpg"
                alt="Maternal health clinic room with clinician examining newborn baby and pregnant mother"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-slate-900/80 text-lime-300 text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs">
                Clinical Care
              </span>
            </div>
            <div className="p-4 space-y-1">
              <h4 className="text-sm font-bold text-slate-900">
                {language === 'en' ? 'Antenatal & Maternity Ward Safety' : 'Usalama wa Wodi za Wazazi na Kliniki'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'en'
                  ? 'Ensuring primary health facilities can handle unexpected emergency complications with confidence.'
                  : 'Kuhakikisha zahanati na vituo vya afya vina uwezo wa kutibu dharura zisizotarajiwa bila hofu.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
