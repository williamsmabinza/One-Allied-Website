import React from 'react';
import { Language, PageId } from '../../types';
import {
  HeartHandshake,
  HandHeart,
  GraduationCap,
  Building2,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Mail,
  Plane,
  Building,
} from 'lucide-react';

interface GetInvolvedPageProps {
  language: Language;
  onOpenPartnerModal: () => void;
  onOpenSupportModal: () => void;
  setCurrentPage: (page: PageId) => void;
}

export const GetInvolvedPage: React.FC<GetInvolvedPageProps> = ({
  language,
  onOpenPartnerModal,
  onOpenSupportModal,
  setCurrentPage,
}) => {
  const pathways = [
    {
      titleEn: '1. Health Facility & Clinic Integration',
      titleSw: '1. Ushirikiano wa Vituo vya Afya na Zahanati',
      descEn:
        'If you operate a dispensary, health center, or maternity clinic seeking rapid blood delivery readiness, landing zone evaluation, and emergency midwife drills.',
      descSw:
        'Kama unasimamia zahanati, kituo cha afya, au wadi ya wazazi inayotaka kujiandaa kupokea damu ya droni, tathmini ya eneo la kutua, na mafunzo ya dharura.',
      icon: Building2,
      actionEn: 'Inquire for Facility',
      actionSw: 'Omba kwa Ajili ya Kituo',
      actionType: 'partner',
    },
    {
      titleEn: '2. Blood Bank & Health Authority Collaboration',
      titleSw: '2. Ushirikiano wa Benki za Damu na Mamlaka za Afya',
      descEn:
        'Partner with One Allied Tanzania to integrate blood stock alerts, cold-chain flight dispatches, and emergency transfusion coordination for rapid maternal response.',
      descSw:
        'Shirikiana na One Allied Tanzania kuunganisha taarifa za upatikanaji wa damu, usafirishaji salama angani, na mifumo ya dharura ya kuokoa akina mama.',
      icon: HeartHandshake,
      actionEn: 'Connect Blood Bank',
      actionSw: 'Unganisha Benki ya Damu',
      actionType: 'partner',
    },
    {
      titleEn: '3. Drone Technology & Flight Engineering Partners',
      titleSw: '3. Washirika wa Teknolojia ya Droni na Anga',
      descEn:
        'Collaborate on electric drone hardware, automated airspace navigation, weather resilience, and smart thermal cold-chain sensor boxes.',
      descSw:
        'Shirikiana katika teknolojia ya droni za umeme, mifumo ya urushaji anga, upinzani wa hali ya hewa, na masanduku ya kidijitali ya ubaridi.',
      icon: Plane,
      actionEn: 'Join Tech Consortium',
      actionSw: 'Jiunge na Timu ya Teknolojia',
      actionType: 'partner',
    },
    {
      titleEn: '4. Development Donors & Maternal Health Funders',
      titleSw: '4. Wafadhili na Mashirika ya Afya ya Uzazi',
      descEn:
        'Fund drone flight operations, midwife training cohorts, cold-chain equipment, and pilot hub deployment in Ubungo District and future expansion regions.',
      descSw:
        'Wekeza katika safari za droni, mafunzo ya wakunga, vifaa vya ubaridi, na miundombinu ya kitovu cha majaribio Ubungo na upanuzi wa kitaifa.',
      icon: HandHeart,
      actionEn: 'Explore Grant Synergy',
      actionSw: 'Jadili Fursa za Ruzuku',
      actionType: 'support',
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
              {language === 'en' ? 'Get Involved with One Allied Tanzania' : 'Shirikiana na One Allied Tanzania'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {language === 'en'
                ? 'Partner with One Allied Tanzania to Save Mothers’ Lives'
                : 'Ungana Nasi Kuokoa Maisha ya Akina Mama'}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {language === 'en'
                ? 'Join hands with One Allied Tanzania. Whether you represent a healthcare facility, blood bank, drone technology partner, or maternal health funder, there is a vital role for you.'
                : 'Shirikiana na One Allied Tanzania. Iwe unawakilisha kituo cha afya, benki ya damu, mbunifu wa teknolojia ya droni, au mfadhili, mchango wako unaokoa maisha.'}
            </p>
          </div>
        </div>
      </section>

      {/* Institutional Transparency Disclaimer Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <span className="font-bold text-sm block">
              {language === 'en'
                ? 'Institutional Governance & Partnership Notice'
                : 'Taarifa Rasmi ya Utawala na Ushirikiano'}
            </span>
            <p className="leading-relaxed text-slate-700">
              {language === 'en'
                ? 'To ensure strict statutory compliance, prevention of unauthorized solicitations, and full governance transparency, all formal partnerships, donations, and grant agreements are confirmed and executed directly through the official One Allied Tanzania project team through formal institutional memoranda. We do not publish unverified personal bank details or mobile money accounts on this portal.'
                : 'Ili kuhakikisha uzingatiaji wa sheria na kuzuia ulaghai, mikataba yote rasmi ya ushirikiano na ruzuku inathibitishwa na kutekelezwa moja kwa moja kupitia uongozi rasmi wa mradi wa One Allied Tanzania na mikataba ya kitaasisi. Hatuchapishi namba binafsi au akaunti zisizothibitishwa mtandaoni.'}
            </p>
          </div>
        </div>
      </section>

      {/* Four Engagement Pathways */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pathways.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs hover:border-lime-500 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {language === 'en' ? item.titleEn : item.titleSw}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {language === 'en' ? item.descEn : item.descSw}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      if (item.actionType === 'partner') {
                        onOpenPartnerModal();
                      } else {
                        onOpenSupportModal();
                      }
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                  >
                    <span>{language === 'en' ? item.actionEn : item.actionSw}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-lime-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Direct Contact Inquiries */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold">
              {language === 'en'
                ? 'Interested in joining the One Allied Tanzania mission?'
                : 'Je, ungependa kujiunga na utume wa One Allied Tanzania?'}
            </h3>
            <p className="text-xs sm:text-sm text-sky-200 leading-relaxed">
              {language === 'en'
                ? 'Reach out to our partnership liaison to discuss how your institution can collaborate with the One Allied Tanzania project.'
                : 'Wasiliana na mratibu wetu wa ushirikiano kujadili jinsi taasisi yako inavyoweza kushiriki katika mradi wa One Allied Tanzania.'}
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('contact')}
            className="px-6 py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-xs shadow-md transition-colors shrink-0 cursor-pointer"
          >
            {language === 'en' ? 'Contact Project Team' : 'Wasiliana na Timu ya Mradi'}
          </button>
        </div>
      </section>
    </div>
  );
};
