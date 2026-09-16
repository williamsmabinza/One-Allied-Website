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
      titleEn: 'Clinical Integrity & Safety',
      titleSw: 'Uadilifu na Usalama wa Kliniki',
      descEn: 'We adhere to the highest evidence-based clinical and operational benchmarks, putting patient well-being at the heart of every decision.',
      descSw: 'Tunafuata viwango vya juu vya kliniki na usalama vinavyothibitishwa kisayansi, tukiweka usalama wa mgonjwa mbele daima.',
      icon: ShieldCheck,
      color: 'text-sky-600 bg-sky-50',
    },
    {
      titleEn: 'Collaborative Respect',
      titleSw: 'Heshima na Ushirikiano',
      descEn: 'We walk alongside local healthcare workers and administrative teams as supportive partners, rejecting punitive inspection cultures.',
      descSw: 'Tunafanya kazi bega kwa bega na watumishi wa afya wa ndani kama washirika elekezi, bila mtazamo wa kulaumiana au kuadhibu.',
      icon: Users,
      color: 'text-lime-700 bg-lime-50',
    },
    {
      titleEn: 'Equitable Access',
      titleSw: 'Usawa Katika Huduma',
      descEn: 'High-quality, compliant healthcare is a fundamental human right, whether in a major referral hospital or a remote rural dispensary.',
      descSw: 'Huduma bora na salama za afya ni haki ya msingi ya binadamu, iwe hospitali ya rufaa ya mjini au zahanati ya pembezoni.',
      icon: Heart,
      color: 'text-emerald-700 bg-emerald-50',
    },
    {
      titleEn: 'Institutional Transparency',
      titleSw: 'Uwazi wa Kitaasisi',
      descEn: 'We maintain open, accountable governance, strictly verified data reporting, and faithful stewardship of all partner resources.',
      descSw: 'Tunasimamia utawala wazi unaowajibika, takwimu zilizothibitishwa, na usimamizi mwaminifu wa rasilimali zote za washirika.',
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
                ? 'Building Trust & Standards in Tanzanian Healthcare'
                : 'Kujenga Uaminifu na Viwango Katika Afya Tanzania'}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {language === 'en'
                ? 'A dedicated Tanzanian non-governmental organization created to bridge systemic operational, safety, and compliance gaps across dispensaries, health centers, and hospitals.'
                : 'Shirika lisilo la kiserikali la Tanzania lililoundwa kuziba mapengo ya kiutendaji, usalama, na uzingatiaji sheria katika zahanati, vituo vya afya, na hospitali.'}
            </p>
          </div>
        </div>
      </section>

      {/* Organizational Background & Why Quality Matters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              {language === 'en' ? 'Our Background' : 'Historia Yetu'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              {language === 'en'
                ? 'Rooted in Tanzania’s Evolving Healthcare Landscape'
                : 'Misingi Yetu Katika Sekta ya Afya Tanzania'}
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {language === 'en'
                ? 'Tanzania has made admirable strides in expanding physical health infrastructure, improving childhood immunization rates, and decentralizing primary healthcare services. However, physical infrastructure alone cannot assure quality patient outcomes without robust clinical governance, safe diagnostic protocols, and efficient administrative workflows.'
                : 'Tanzania imepiga hatua kubwa katika kupanua majengo ya vituo vya afya, chanjo, na kusogeza huduma kwa wananchi. Hata hivyo, majengo pekee hayatoshi kuleta matokeo bora bila mifumo madhubuti ya usimamizi wa kliniki, vipimo sahihi, na utawala bora wa kiutendaji.'}
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              {language === 'en'
                ? 'One Allied Tanzania was established by passionate Tanzanian healthcare practitioners and systems advocates who recognized that many preventable complications stem not from lack of dedication, but from systemic bottlenecks: inaccurate laboratory calibration, fragmented documentation, and unstandardized patient handover procedures.'
                : 'One Allied Tanzania ilianzishwa na watumishi na watetezi wa afya wa Kitanzania waliotambua kuwa changamoto nyingi zinatokana na mifumo: vipimo visivyo na usahihi, nyaraka zisizoeleweka, na ukosefu wa taratibu sanifu za makabidhiano ya wagonjwa.'}
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-gradient-to-br from-sky-50 to-lime-50/70 p-6 sm:p-8 rounded-3xl border border-sky-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">
                {language === 'en'
                  ? 'Why Healthcare Quality Matters in Tanzania'
                  : 'Kwa Nini Ubora wa Afya Ni Muhimu Tanzania'}
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Diagnostic Certainty:</strong> Preventing misdiagnoses and unnecessary medication toxicity.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Infection Prevention (IPC):</strong> Safeguarding mothers, newborns, and surgical patients from hospital-acquired infections.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Staff Retention:</strong> Equipping frontline health workers with clear protocols reduces burnout and improves clinical morale.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                  <span>
                    <strong>Community Trust:</strong> Transparent, respectful clinical environments encourage early seeking of medical care.
                  </span>
                </li>
              </ul>
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
              {language === 'en' ? 'Our Vision, Mission & Core Values' : 'Dira, Dhamira na Maadili Yakuu'}
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
            {language === 'en' ? 'Leadership & Accountability' : 'Uongozi na Uwajibikaji'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {language === 'en' ? 'Institutional Governance Structure' : 'Muundo wa Utawala wa Kitaasisi'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl">
            {language === 'en'
              ? 'One Allied Tanzania is governed by an independent Advisory Board and a Technical Secretariat. In accordance with non-invented data mandates, officer names remain as transparent placeholders until official gazetted verification.'
              : 'One Allied Tanzania inaongozwa na Bodi ya Ushauri na Sekretarieti ya Kiufundi. Majina ya viongozi yamewekwa kama nafasi rasmi hadi uhakiki utakapokamilika.'}
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
                ? 'Interested in our governance or partnerships?'
                : 'Unapenda kujua zaidi kuhusu uongozi au ushirikiano wetu?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {language === 'en'
                ? 'We invite accredited healthcare institutions, donors, and government counterparts to connect directly with our technical team.'
                : 'Tunakaribisha vituo vya afya, wafadhili, na serikali kuwasiliana moja kwa moja na timu yetu.'}
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
