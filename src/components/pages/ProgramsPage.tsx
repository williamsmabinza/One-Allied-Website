import React, { useState } from 'react';
import { Language, PageId } from '../../types';
import {
  Stethoscope,
  ClipboardCheck,
  Truck,
  Boxes,
  GraduationCap,
  FileSpreadsheet,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  BarChart3,
  HeartHandshake,
  Plane,
  BellRing,
  ThermometerSnowflake,
} from 'lucide-react';

interface ProgramsPageProps {
  language: Language;
  setCurrentPage: (page: PageId) => void;
  onOpenPartnerModal: () => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({
  language,
  setCurrentPage,
  onOpenPartnerModal,
}) => {
  const [activeTab, setActiveTab] = useState<string>('dispatch');

  const programs = [
    {
      id: 'dispatch',
      titleEn: 'Emergency Drone Flight & Dispatch Logistics',
      titleSw: 'Usafirishaji wa Ndege Zisizo na Rubani (Droni)',
      icon: Plane,
      image: '/images/drone_pilots_field.jpg',
      imageAlt: 'Tanzanian female drone pilot in hijab and flight engineer operating autonomous drone',
      summaryEn:
        'Coordinating autonomous, low-altitude flight paths from central blood hubs to peripheral clinics, bypassing terrain and traffic gridlock.',
      summarySw:
        'Kuratibu njia za droni za umeme kutoka vitovu vikuu vya damu moja kwa moja hadi vituo vya afya vya pembezoni, zikipita juu ya barabara na foleni.',
      components: [
        'Autonomous GPS Route Planning',
        'Pre-Flight Airspace Safety Checks',
        'Weather & Wind Resistance Systems',
        'Real-Time Flight Telemetry Monitoring',
      ],
      targetBeneficiaries: 'Dispensaries, Remote Health Centers, District Referral Hospitals',
    },
    {
      id: 'alert',
      titleEn: 'Digital Emergency Alert & Request System',
      titleSw: 'Mfumo wa Kidijitali wa Maombi ya Dharura',
      icon: BellRing,
      image: '/images/drone_redcross.jpg',
      imageAlt: 'Medical drone carrying emergency red-cross blood container over rural community',
      summaryEn:
        'Instant digital communication protocol enabling frontline midwives and clinicians to request urgent blood units with rapid matching.',
      summarySw:
        'Mawasiliano ya haraka ya kidijitali yanayowawezesha wakunga na watoa huduma kuagiza damu ya dharura na kuoanisha makundi ya damu mara moja.',
      components: [
        'Mobile & Web Emergency Alert Portal',
        'Blood Compatibility Verification',
        'Priority Flight Queueing',
        'Automated Dispatch & ETA Notifications',
      ],
      targetBeneficiaries: 'Maternity Wards, Labor Rooms, Clinical Midwives',
    },
    {
      id: 'coldchain',
      titleEn: 'Cold-Chain Blood Safety & Temperature Control',
      titleSw: 'Udhibiti wa Ubaridi na Usalama wa Damu',
      icon: ThermometerSnowflake,
      image: '/images/vtol_drone_loading.jpg',
      imageAlt: 'Technician inserting insulated temperature-controlled cold-chain payload into VTOL drone',
      summaryEn:
        'Insulated transport boxes maintaining strict clinical temperature control (2°C–6°C) throughout aerial transit to protect blood integrity.',
      summarySw:
        'Masanduku maalum yanayodumisha kiwango stahiki cha ubaridi (2°C–6°C) angani ili kulinda ubora na usalama wa damu.',
      components: [
        'Thermal-Insulated Aerial Transport Box',
        'Continuous Temperature Data Logging',
        'Vibration & Impact Shock Absorption',
        'Post-Flight Cold-Chain Quality Release',
      ],
      targetBeneficiaries: 'Blood Banks, Transfusion Units, Clinical Laboratories',
    },
    {
      id: 'training',
      titleEn: 'Midwife & Clinical Workforce Emergency Training',
      titleSw: 'Mafunzo ya Wakunga na Watumishi wa Afya',
      icon: GraduationCap,
      image: '/images/midwives_mothers.jpg',
      imageAlt: 'Hospital nurse and mothers with maternal child health records',
      summaryEn:
        'Training healthcare workers, midwives, and facility staff in fast blood retrieval, safe landing zone management, and immediate transfusion.',
      summarySw:
        'Kutoa mafunzo kwa watumishi wa afya na wakunga kuhusu upokeaji salama wa damu, usimamizi wa eneo la kutua droni, na huduma ya haraka ya uzazi.',
      components: [
        'Safe Landing Zone Protocol Drills',
        'Emergency Midwifery Blood Handling',
        'Postpartum Hemorrhage Clinical Readiness',
        'Rapid Transfusion Setup SOPs',
      ],
      targetBeneficiaries: 'Nurses, Midwives, Clinical Officers, Facility In-Charges',
    },
    {
      id: 'integration',
      titleEn: 'Blood Bank & Hospital System Integration',
      titleSw: 'Ushirikiano wa Benki za Damu na Hospitali',
      icon: HeartHandshake,
      image: '/images/maternal_clinic.jpg',
      imageAlt: 'Healthcare staff and mother in clinic consultation room',
      summaryEn:
        'Establishing reliable operational protocols with the National Blood Transfusion Service, zonal blood hubs, and local health authorities.',
      summarySw:
        'Kuanzisha taratibu thabiti za kiutendaji na Mpango wa Taifa wa Damu Salama, benki za damu za kanda, na mamlaka za afya za mitaa.',
      components: [
        'Zonal Blood Bank Stock Integration',
        'Emergency Dispatch Coordination SOPs',
        'Multi-Agency Regulatory Compliance',
        'District Health Management Linkages',
      ],
      targetBeneficiaries: 'Central Blood Banks, MoH Authorities, District Health Teams',
    },
    {
      id: 'pilot',
      titleEn: 'Pilot Deployment & Clinical Impact Evaluation',
      titleSw: 'Utekelezaji wa Majaribio na Tathmini ya Matokeo',
      icon: BarChart3,
      image: '/images/drone_pilots_field.jpg',
      imageAlt: 'Drone pilots conducting flight operations tests in the field',
      summaryEn:
        'Evaluating the 2026 Ubungo District pilot phase against core project targets: 80% transit reduction, 0 maternal deaths in project areas, and 100% equity.',
      summarySw:
        'Kutathmini hatua ya majaribio ya Wilaya ya Ubungo (2026) dhidi ya malengo makuu ya mradi: kupunguza muda kwa 80%, vifo 0 vya uzazi, na usawa wa 100%.',
      components: [
        'Ubungo District Pilot Hub (2026)',
        'Flight Time & Transit Efficiency Analytics',
        'Maternal Survival Outcome Tracking',
        'Scalability & National Expansion Roadmap',
      ],
      targetBeneficiaries: 'Ubungo District Pilot Facilities, National Health Planners',
    },
  ];

  const selectedProg = programs.find((p) => p.id === activeTab) || programs[0];
  const IconSelected = selectedProg.icon;

  return (
    <div className="w-full pb-20 space-y-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 opacity-95"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-lime-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              {language === 'en' ? 'One Allied Tanzania Core Capabilities' : 'Uwezo Mkuu wa One Allied Tanzania'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {language === 'en'
                ? 'Programs & Operational Components'
                : 'Mifumo na Huduma za Kiutendaji'}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {language === 'en'
                ? 'An integrated suite of drone logistics, cold-chain safety, digital alerts, and clinical training designed to save mothers’ lives during postpartum emergencies.'
                : 'Mkusanyiko wa huduma za usafirishaji wa droni, ulinzi wa ubaridi wa damu, taarifa za haraka, na mafunzo ya wakunga kuokoa maisha ya akina mama.'}
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Program Selectors */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2 px-1">
              {language === 'en' ? 'Select Program Pillar' : 'Chagua Nguzo ya Programu'}
            </span>
            {programs.map((prog) => {
              const IconComp = prog.icon;
              const isSelected = activeTab === prog.id;
              return (
                <button
                  key={prog.id}
                  onClick={() => setActiveTab(prog.id)}
                  className={`w-full flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-sky-600 text-white border-sky-600 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-sky-700 text-lime-300' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold leading-snug">
                    {language === 'en' ? prog.titleEn : prog.titleSw}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: In-Depth Program Details Card */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-lime-100 text-lime-800 flex items-center justify-center">
                  <IconSelected className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700">
                    {language === 'en' ? 'Program Overview' : 'Muhtasari wa Programu'}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                    {language === 'en' ? selectedProg.titleEn : selectedProg.titleSw}
                  </h2>
                </div>
              </div>

              {/* Program Photo Banner */}
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-slate-200">
                <img
                  src={selectedProg.image}
                  alt={selectedProg.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
                  <span className="font-semibold text-lime-300">{language === 'en' ? selectedProg.titleEn : selectedProg.titleSw}</span>
                  <p className="text-slate-200 text-[11px] truncate mt-0.5">{selectedProg.imageAlt}</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {language === 'en' ? selectedProg.summaryEn : selectedProg.summarySw}
              </p>

              {/* Core Deliverables */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  {language === 'en' ? 'Core Program Workflows & Deliverables' : 'Kazi Kuu na Matokeo ya Mpango'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProg.components.map((comp, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-800 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Beneficiaries & Partner Pathway */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs">
                  <span className="font-bold text-slate-500 block uppercase tracking-wider">
                    {language === 'en' ? 'Target Healthcare Facilities' : 'Vituo Vinavyonufaika'}
                  </span>
                  <span className="font-medium text-slate-800">{selectedProg.targetBeneficiaries}</span>
                </div>

                <button
                  onClick={onOpenPartnerModal}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-xs transition-colors shrink-0"
                >
                  <HeartHandshake className="w-4 h-4 text-lime-300" />
                  <span>
                    {language === 'en' ? 'Inquire for Your Facility' : 'Omba Ushirikiano kwa Kituo Chako'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Testimonial / Practical Context */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 text-white rounded-3xl p-8 sm:p-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-lime-400">
              {language === 'en' ? 'Operational Philosophy' : 'Falsafa ya Kiutendaji'}
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold leading-snug">
              {language === 'en'
                ? '“No mother should die waiting for blood when technology can deliver it in minutes.”'
                : '“Hapaswi kuwepo mama anayepoteza maisha kwa kukosa damu wakati teknolojia inaweza kuifikisha kwa dakika chache.”'}
            </h3>
            <p className="text-xs sm:text-sm text-sky-200">
              {language === 'en'
                ? 'All One Allied Tanzania operational programs emphasize maternal survival, strict cold-chain safety standards, and practical frontline facility support.'
                : 'Mipango yote ya One Allied Tanzania inasisitiza kuokoa maisha ya akina mama, viwango vya usalama wa damu, na msaada wa vitendo kwa vituo vya afya.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
