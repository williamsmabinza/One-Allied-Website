import React from 'react';
import { Language, PageId } from '../../types';
import { teamPlaceholders } from '../../translations/content';
import {
  ShieldCheck,
  Target,
  Heart,
  Scale,
  Users,
  Award,
  Building,
  CheckCircle2,
  ArrowRight,
  UserCheck,
  FileText,
  Clock,
  ThermometerSnowflake,
} from 'lucide-react';

interface AboutPageProps {
  language: Language;
  setCurrentPage: (page: PageId) => void;
  onOpenPartnerModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  language,
  setCurrentPage,
  onOpenPartnerModal,
}) => {
  const values = [
    {
      titleEn: 'Rapid Emergency Response',
      titleSw: 'Majibu ya Haraka ya Dharura',
      descEn: 'We utilize small electric drones to cut emergency blood transport times from hours down to just minutes when a mother’s life is at risk.',
      descSw: 'Tunatumia droni ndogo za umeme kufupisha muda wa kusafirisha damu ya dharura kutoka saa kadhaa hadi dakika chache maisha ya mama yanapokuwa hatarini.',
      icon: Clock,
      color: 'text-sky-600 bg-sky-50',
    },
    {
      titleEn: 'Cold-Chain Blood Safety',
      titleSw: 'Usalama wa Damu na Ubaridi',
      descEn: 'Temperature-controlled boxes maintain clinical blood standards throughout flight, preserving the integrity of every life-saving unit.',
      descSw: 'Masanduku maalum yanayodhibiti joto yanadumisha viwango vya ubora wa damu angani, yakilinda usalama wa kila chupa ya kuokoa maisha.',
      icon: ThermometerSnowflake,
      color: 'text-lime-700 bg-lime-50',
    },
    {
      titleEn: 'Equity in Emergency Care',
      titleSw: 'Usawa Katika Huduma za Dharura',
      descEn: 'Every mother deserves timely emergency blood access, whether giving birth in an urban hospital or a hard-to-reach rural dispensary.',
      descSw: 'Kila mama anastahili kupata damu ya dharura kwa wakati, iwe anajifungua katika hospitali ya mjini au zahanati ya pembezoni.',
      icon: Heart,
      color: 'text-emerald-700 bg-emerald-50',
    },
    {
      titleEn: 'Institutional Collaboration',
      titleSw: 'Ushirikiano wa Kitaasisi',
      descEn: 'Seamless coordination between frontline clinics, district hospitals, blood banks, health authorities, and development partners.',
      descSw: 'Uratibu thabiti unaounganisha zahanati, hospitali za wilaya, benki za damu, mamlaka za afya, na washirika wa maendeleo.',
      icon: Scale,
      color: 'text-slate-800 bg-slate-100',
    },
  ];

  return (
    <div className="w-full pb-20 space-y-16">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 opacity-95"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-lime-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              {language === 'en' ? 'About One Allied Tanzania' : 'Kuhusu One Allied Tanzania'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {language === 'en'
                ? 'One Allied Tanzania: Drone Blood Delivery for Mothers'
                : 'One Allied Tanzania: Usafirishaji wa Damu kwa Droni'}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {language === 'en'
                ? 'One Allied Tanzania is a dedicated non-governmental organization (NGO) deploying autonomous electric drone technology to transport life-saving blood quickly and safely from central hubs to health facilities in need, aiming to eliminate maternal deaths caused by delayed emergency blood transport.'
                : 'One Allied Tanzania ni shirika lisilo la kiserikali (NGO) linalotumia teknolojia ya ndege zisizo na rubani (droni) kusafirisha damu haraka na salama kutoka benki za damu hadi vituo vya afya, kwa lengo la kutokomeza vifo vya uzazi vinavyosababishwa na kuchelewa kwa damu.'}
            </p>
          </div>
        </div>
      </section>

      {/* Organizational Background & Why Drone Delivery Matters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              {language === 'en' ? 'The Maternal Health Context' : 'Muktadha wa Afya ya Uzazi'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              {language === 'en'
                ? 'Overcoming Transport Delays When Every Minute Matters'
                : 'Kushinda Ucheleweshaji wa Usafiri Pale Kila Dakika Inapokuwa ya Thamani'}
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {language === 'en'
                ? 'Maternal emergencies can become life-threatening when blood delivery is delayed. Rural and underserved health facilities may be located far from district hospitals or blood banks. Poor roads, long distances, traffic congestion, and limited transport options can cause emergency blood to take hours to arrive.'
                : 'Dharura za uzazi zinaweza kuwa hatari kwa maisha endapo usafirishaji wa damu unachelewa. Vituo vya afya vijijini na pembezoni mara nyingi viko mbali na hospitali za wilaya au benki za damu. Barabara mbovu, umbali mrefu, foleni za magari, na uchache wa vyombo vya usafiri vinaweza kusababisha damu kuchukua saa kadhaa kufika.'}
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              {language === 'en'
                ? 'During severe bleeding after childbirth (postpartum hemorrhage), a delay of only a few minutes can make a critical difference. One Allied Tanzania introduces a hub-and-spoke drone delivery network—initiating pilot deployment in Ubungo District, Dar es Salaam in 2026 before expanding to other regions across Tanzania.'
                : 'Wakati wa kutokwa na damu nyingi baada ya kujifungua, kuchelewa kwa dakika chache tu kunaweza kuwa tofauti kati ya maisha na kifo. One Allied Tanzania inaleta mtandao wa droni wenye kitovu kikuu—ikianza majaribio katika Wilaya ya Ubungo, Dar es Salaam mwaka 2026 kabla ya kupanuka kote Tanzania.'}
            </p>

            {/* Inset photo of frontline midwives and mothers */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
              <img
                src="/images/midwives_mothers.jpg"
                alt="Tanzanian hospital nurse and mothers with maternal health records"
                referrerPolicy="no-referrer"
                className="w-full h-56 object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
                <span className="font-semibold text-lime-300">Frontline Midwives &amp; Mothers</span>: Dedicated healthcare providers in Tanzania protecting mothers during pregnancy and childbirth.
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="bg-gradient-to-br from-sky-50 to-lime-50/70 p-6 sm:p-8 rounded-3xl border border-sky-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">
                {language === 'en'
                  ? 'Why Drone Blood Delivery Works for Mothers'
                  : 'Kwa Nini Usafirishaji wa Droni Unafanya Kazi kwa Akina Mama'}
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{language === 'en' ? 'Hours to Minutes:' : 'Kutoka Saa Hadi Dakika:'}</strong>{' '}
                    {language === 'en'
                      ? 'Targeting an 80% reduction in emergency blood transport time by bypassing road traffic and rough terrain.'
                      : 'Kupunguza muda wa safari kwa asilimia 80 kwa kuruka juu ya foleni na barabara zenye changamoto.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{language === 'en' ? 'Cold-Chain Protection:' : 'Ulinzi wa Ubaridi:'}</strong>{' '}
                    {language === 'en'
                      ? 'Temperature-controlled boxes safeguard blood units throughout flight to ensure clinical safety.'
                      : 'Masanduku maalum yanayodhibiti joto yanalinda chupa za damu angani ili kuhakikisha usalama wa mgonjwa.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{language === 'en' ? 'Sustainable Operations:' : 'Uendeshaji Endelevu:'}</strong>{' '}
                    {language === 'en'
                      ? 'Small electric drones provide low operating costs and zero direct emissions during flight.'
                      : 'Droni ndogo za umeme zinatoa gharama nafuu za uendeshaji bila kutoa hewa chafu wakati wa safari.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                  <span>
                    <strong>{language === 'en' ? 'Targeting Zero Maternal Deaths:' : 'Lengo la Vifo 0 vya Akina Mama:'}</strong>{' '}
                    {language === 'en'
                      ? 'Focused specifically on eliminating preventable maternal deaths caused by postpartum hemorrhage in project areas.'
                      : 'Kujikita mahsusi katika kuzuia vifo vya akina mama vinavyotokana na kuvuja damu baada ya kujifungua.'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Photo of VTOL drone payload loading */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
              <img
                src="/images/vtol_drone_loading.jpg"
                alt="Flight technician loading temperature-controlled cold-chain payload capsule into delivery drone"
                referrerPolicy="no-referrer"
                className="w-full h-56 object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
                <span className="font-semibold text-lime-300">Autonomous Aircraft Preparation</span>: Loading insulated +2°C to +6°C blood capsule into delivery drone on landing pad.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-lime-700">
              {language === 'en' ? 'Guiding Principles' : 'Misingi Yetu'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {language === 'en' ? 'Our Mission, Vision & Core Values' : 'Dhamira, Dira na Maadili Yakuu'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const IconComp = v.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${v.color}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {language === 'en' ? v.titleEn : v.titleSw}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === 'en' ? v.descEn : v.descSw}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governance & Leadership Placeholders */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
            {language === 'en' ? 'NGO Governance & Operations' : 'Uongozi na Uendeshaji wa Shirika'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {language === 'en' ? 'One Allied Tanzania Operational Leadership' : 'Uongozi wa One Allied Tanzania'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl">
            {language === 'en'
              ? 'One Allied Tanzania is coordinated through dedicated operational teams spanning drone flight logistics, clinical midwifery integration, and cold-chain blood safety. Key leadership designations are set out below for the Ubungo District pilot deployment.'
              : 'One Allied Tanzania inaratibiwa kupitia timu thabiti ya kiutendaji inayojumuisha urushaji droni, wakunga wa kliniki, na usalama wa damu. Nafasi kuu za uongozi zimebainishwa hapa chini kwa ajili ya majaribio ya Wilaya ya Ubungo.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamPlaceholders.map((member) => (
            <div
              key={member.id}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3 hover:border-sky-400 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wider block">
                  {language === 'en' ? member.departmentEn : member.departmentSw}
                </span>
                <h4 className="text-sm font-bold text-slate-900 mt-1">
                  {language === 'en' ? member.roleEn : member.roleSw}
                </h4>
                <p className="text-xs font-mono text-slate-500 mt-1 bg-slate-50 px-2 py-1 rounded">
                  {member.placeholderName}
                </p>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed border-t border-slate-100 pt-2.5">
                {member.statusNote}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold">
              {language === 'en'
                ? 'Interested in collaborating with One Allied Tanzania?'
                : 'Je, ungependa kushirikiana na One Allied Tanzania?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {language === 'en'
                ? 'We invite health facilities, blood banks, government health authorities, NGOs, technology providers, and development funders to collaborate with One Allied Tanzania.'
                : 'Tunakaribisha vituo vya afya, benki za damu, mamlaka za serikali, mashirika, na wafadhili kushirikiana na One Allied Tanzania.'}
            </p>
          </div>
          <button
            onClick={onOpenPartnerModal}
            className="px-6 py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-xs shadow-md transition-colors shrink-0"
          >
            {language === 'en' ? 'Initiate Partnership' : 'Anzisha Ushirikiano'}
          </button>
        </div>
      </section>
    </div>
  );
};
