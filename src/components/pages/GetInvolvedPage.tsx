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
      titleEn: '1. Healthcare Facility Partnership',
      titleSw: '1. Ushirikiano wa Vituo vya Afya',
      descEn:
        'If you manage a dispensary, health center, or hospital in Tanzania seeking quality improvement, accreditation assistance, or clinical audit mentorship.',
      descSw:
        'Kama unasimamia zahanati, kituo cha afya, au hospitali nchini Tanzania inayotaka kuboresha ubora wa huduma na kupata ithibati.',
      icon: Building2,
      actionEn: 'Inquire for Facility',
      actionSw: 'Omba kwa Ajili ya Kituo',
      actionType: 'partner',
    },
    {
      titleEn: '2. Pro Bono Clinical & Technical Mentorship',
      titleSw: '2. Uelekezi wa Hiari wa Kitaalamu',
      descEn:
        'Physicians, nursing educators, biomedical engineers, and quality assurance specialists can lead training modules or assist with equipment diagnostics.',
      descSw:
        'Madaktari, wakufunzi wa wauguzi, na wataalamu wa vifaa tiba wanaweza kutoa mafunzo na uelekezi kwa wenzao vituoni.',
      icon: GraduationCap,
      actionEn: 'Volunteer Expertise',
      actionSw: 'Toa Utaalamu Wako',
      actionType: 'partner',
    },
    {
      titleEn: '3. Institutional Donors & Grantmakers',
      titleSw: '3. Wafadhili na Mashirika ya Maendeleo',
      descEn:
        'Direct programmatic investments into infection prevention consumables, regional training workshops, or laboratory calibration equipment.',
      descSw:
        'Uwekezaji wa moja kwa moja kwenye miradi ya kuzuia maambukizi, mafunzo ya watumishi, au ununuzi wa vifaa vya maabara.',
      icon: HeartHandshake,
      actionEn: 'Explore Grant Synergy',
      actionSw: 'Jadili Fursa za Ruzuku',
      actionType: 'partner',
    },
    {
      titleEn: '4. Equipment & Resource Mobilization',
      titleSw: '4. Uchangiaji wa Vifaa na Rasilimali',
      descEn:
        'Support Tanzanian facilities with compliant diagnostic instruments, PPE, laboratory reagents, and energy-resilient cold chain units.',
      descSw:
        'Kusaidia vituo kwa mashine sahihi za vipimo, vifaa vya kinga, na mifumo ya nishati endelevu ya kuhifadhia chanjo.',
      icon: HandHeart,
      actionEn: 'View Support Pathways',
      actionSw: 'Angalia Njia za Kusaidia',
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
              {language === 'en' ? 'Get Involved' : 'Shiriki Nasi'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {language === 'en'
                ? 'Collaborate to Strengthen Tanzanian Healthcare'
                : 'Ungana Nasi Kuimarisha Sekta ya Afya Tanzania'}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {language === 'en'
                ? 'Join hands with One Allied Tanzania. Whether you represent a healthcare facility, international donor, or clinical specialist, there is a role for you.'
                : 'Shirikiana na One Allied Tanzania. Iwe unawakilisha kituo cha afya, mfadhili, au mtaalamu wa tiba, mchango wako ni muhimu.'}
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
                ? 'Donation & Financial Integrity Notice'
                : 'Taarifa Rasmi ya Michango na Fedha'}
            </span>
            <p className="leading-relaxed text-slate-700">
              {language === 'en'
                ? 'To ensure strict statutory compliance, prevention of unauthorized solicitations, and full governance transparency, donation details must be officially confirmed and published directly by the One Allied Tanzania secretariat through formal agreements. We do not publish unverified personal bank details or mobile money accounts on this portal.'
                : 'Ili kuhakikisha uzingatiaji wa sheria za mashirika yasiyo ya kiserikali na kuzuia ulaghai, taarifa za kibenki za michango lazima zithibitishwe na kutolewa rasmi na sekretarieti ya One Allied Tanzania kupitia mikataba rasmi. Hatuchapishi namba za simu au akaunti binafsi mtandaoni.'}
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
                ? 'Have a specific initiative in mind?'
                : 'Je, una wazo au mradi maalum?'}
            </h3>
            <p className="text-xs sm:text-sm text-sky-200 leading-relaxed">
              {language === 'en'
                ? 'Reach out to our partnership liaison to schedule a preliminary consultative discussion.'
                : 'Wasiliana na afisa wetu wa ushirikiano kupanga mazungumzo ya awali.'}
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('contact')}
            className="px-6 py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-xs shadow-md transition-colors shrink-0 cursor-pointer"
          >
            {language === 'en' ? 'Contact Secretariat' : 'Wasiliana na Sekretarieti'}
          </button>
        </div>
      </section>
    </div>
  );
};
