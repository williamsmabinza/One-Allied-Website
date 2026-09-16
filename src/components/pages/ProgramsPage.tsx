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
  const [activeTab, setActiveTab] = useState<string>('operational');

  const programs = [
    {
      id: 'operational',
      titleEn: 'Operational Assistance for Healthcare Providers',
      titleSw: 'Msaada wa Uendeshaji kwa Watoa Huduma za Afya',
      icon: Stethoscope,
      summaryEn:
        'Practical on-the-ground support to optimize patient intake, triage efficiency, clinical records, and bed management workflows in primary and secondary facilities.',
      summarySw:
        'Msaada wa moja kwa moja wa kuboresha upokeaji wagonjwa, mtiririko wa kazi za kliniki, nyaraka sahihi, na usimamizi wa vitanda hospitalini.',
      components: [
        'Patient Triage & Intake Flow Optimization',
        'Clinical Shift Handover & Ward Round Standardization',
        'Outpatient Department (OPD) Waiting Time Reduction',
        'Emergency Resuscitation & Referral Readiness',
      ],
      targetBeneficiaries: 'Dispensaries, Health Centers, District & Regional Referral Hospitals',
    },
    {
      id: 'compliance',
      titleEn: 'Regulatory Compliance & MoH Guidelines Support',
      titleSw: 'Uzingatiaji wa Sheria na Miongozo ya Wizara ya Afya',
      icon: ClipboardCheck,
      summaryEn:
        'Harmonizing facility operations with Tanzanian statutory regulations, Private Health Laboratories Board (PHLB) criteria, and Ministry of Health national quality benchmarks.',
      summarySw:
        'Kuweka mifumo ya vituo iendane na sheria za Tanzania, bodi za maabara na maduka ya dawa, na miongozo ya Wizara ya Afya.',
      components: [
        'Facility Licensing & Re-accreditation Advisory',
        'Statutory Safety & Environmental Health Audits',
        'Standard Operating Procedure (SOP) Customization',
        'Regulatory Inspection Gap Remediation Plans',
      ],
      targetBeneficiaries: 'Public and Faith-Based Healthcare Administrators, Facility In-Charges',
    },
    {
      id: 'management',
      titleEn: 'Healthcare Management & Administrative Systems',
      titleSw: 'Usimamizi wa Taasisi na Mifumo ya Utawala wa Afya',
      icon: FileSpreadsheet,
      summaryEn:
        'Strengthening facility governance, budgeting protocols, incident reporting loops, and data integrity for informed clinical decision-making.',
      summarySw:
        'Kuimarisha uongozi wa vituo, bajeti za dawa, taarifa za hitilafu za matibabu, na usahihi wa takwimu za afya.',
      components: [
        'Health Management Information System (HMIS) Data Quality',
        'Facility Quality Committee Governance Mentorship',
        'Adverse Event & Sentinel Case Audit Mechanisms',
        'Financial & Resource Utilization Efficiency',
      ],
      targetBeneficiaries: 'Hospital Management Teams (CHMT/RHMT), Medical Officers in Charge',
    },
    {
      id: 'logistics',
      titleEn: 'Healthcare Logistics & Essential Supply Chain',
      titleSw: 'Mifumo ya Ugavi na Usalama wa Vifaa Tiba',
      icon: Truck,
      summaryEn:
        'Eliminating stockouts of vital pharmaceuticals, laboratory diagnostic reagents, and sterilizing consumables through modern stock management tools.',
      summarySw:
        'Kuzuia uhaba wa dawa muhimu, vipimo vya maabara, na vifaa vya usafi kupitia mifumo ya kisasa ya udhibiti wa stoo.',
      components: [
        'Min-Max Stock Reorder & Lead-Time Monitoring',
        'Cold-Chain Vaccine & Specimen Temperature Tracking',
        'Biomedical Diagnostic Equipment Maintenance Logs',
        'Medical Store Security & Waste Disposal Protocols',
      ],
      targetBeneficiaries: 'Pharmacy Technicians, Laboratory Managers, Storekeepers',
    },
    {
      id: 'training',
      titleEn: 'Clinical Workforce Mentorship & Capacity Building',
      titleSw: 'Mafunzo Kazini na Uelekezi wa Watumishi wa Afya',
      icon: GraduationCap,
      summaryEn:
        'Continuous professional development focused on patient dignity, infection prevention and control (IPC), neonatal safety, and compassionate nursing care.',
      summarySw:
        'Mafunzo endelevu ya vitendo yanayozingatia utu wa mgonjwa, udhibiti wa maambukizi, usalama wa watoto wachanga, na huduma ya heshima.',
      components: [
        'Infection Prevention & Control (IPC) Masterclasses',
        'Diagnostic Specimen Collection & Rapid Testing Skills',
        'Compassionate Communication & Patient Rights Protocols',
        'Emergency Obstetric & Neonatal Safety Modules',
      ],
      targetBeneficiaries: 'Nurses, Midwives, Clinical Officers, Laboratory Technologists',
    },
    {
      id: 'resources',
      titleEn: 'Resource Mobilization for Quality Care',
      titleSw: 'Kutafuta na Kugawa Rasilimali kwa Ajili ya Vituo',
      icon: Boxes,
      summaryEn:
        'Bridging critical equipment deficits by facilitating targeted donations, biomedical repair partnerships, and transparent donor-facility linkages.',
      summarySw:
        'Kuziba mapengo ya vifaa tiba kupitia ushirikiano wa kimkakati wa michango na ukarabati wa mashine za hospitali.',
      components: [
        'Facility Equipment Deficit Mapping & Prioritization',
        'Compliant Medical Device & PPE Allocation',
        'Biomedical Maintenance Partnership Agreements',
        'Transparent Grant Utilization Reporting',
      ],
      targetBeneficiaries: 'Under-resourced Health Facilities, Rural Dispensaries, Maternity Wards',
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
              {language === 'en' ? 'One Allied Tanzania Portfolio' : 'Programu na Huduma Zetu'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {language === 'en'
                ? 'Programs & Services for Healthcare Providers'
                : 'Programu na Huduma kwa Vituo vya Afya'}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {language === 'en'
                ? 'Tailored operational, regulatory, and capacity-building solutions that empower Tanzanian healthcare institutions to deliver consistent, dignified, and safe clinical care.'
                : 'Suluhu maalum za kiutendaji, kisheria, na mafunzo zinazowezesha vituo vya afya kutoa huduma salama na za heshima kwa wananchi.'}
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
              {language === 'en' ? 'Collaborative Philosophy' : 'Falsafa ya Ushirikiano'}
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold leading-snug">
              {language === 'en'
                ? '“Quality improvement succeeds when frontline healthcare providers are respected, protected, and properly equipped.”'
                : '“Uboreshaji wa huduma unafanikiwa pale wataalamu wa afya wanapoheshimiwa, kulindwa, na kupewa vifaa sahihi.”'}
            </h3>
            <p className="text-xs sm:text-sm text-sky-200">
              {language === 'en'
                ? 'All One Allied Tanzania programs emphasize institutional mentorship rather than bureaucratic checklists.'
                : 'Mipango yote ya One Allied Tanzania inasisitiza uelekezi wa vitendo badala ya ukaguzi wa kukatisha tamaa.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
