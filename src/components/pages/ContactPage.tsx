import React, { useState } from 'react';
import { Language, OrganizationSettings } from '../../types';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  ShieldCheck,
  Globe,
} from 'lucide-react';

interface ContactPageProps {
  language: Language;
  orgSettings: OrganizationSettings;
  onOpenAdminModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  language,
  orgSettings,
  onOpenAdminModal,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full pb-20 space-y-16">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 opacity-95"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-lime-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              {language === 'en' ? 'Get In Touch' : 'Wasiliana Nasi'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {language === 'en' ? 'Contact One Allied Tanzania' : 'Wasiliana na One Allied Tanzania'}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {language === 'en'
                ? 'We welcome inquiries from healthcare facility leaders, health management teams, potential donors, researchers, and community partners across Tanzania and internationally.'
                : 'Tunakaribisha maswali kutoka kwa wakuu wa vituo vya afya, serikali, wafadhili, watafiti, na washirika wa maendeleo.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info Cards + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Official Contact Channels & Transparency Note */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                {language === 'en' ? 'Secretariat Details' : 'Taarifa za Sekretarieti'}
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      {language === 'en' ? 'Official Inquiries Email' : 'Barua Pepe Rasmi'}
                    </span>
                    <a
                      href={`mailto:${orgSettings.contactEmail}`}
                      className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-sky-700"
                    >
                      {orgSettings.contactEmail}
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-lime-50 text-lime-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      {language === 'en' ? 'Telephone Helpline' : 'Namba za Simu'}
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href="tel:0764494606"
                        className="text-xs sm:text-sm font-semibold font-mono text-slate-900 hover:text-lime-700 transition-colors"
                      >
                        0764494606
                      </a>
                      <span className="text-slate-400">/</span>
                      <a
                        href="tel:0748165752"
                        className="text-xs sm:text-sm font-semibold font-mono text-slate-900 hover:text-lime-700 transition-colors"
                      >
                        0748165752
                      </a>
                    </div>
                    <div className="flex items-center gap-2 pt-0.5">
                      <a
                        href="https://wa.me/255764494606"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-[11px] font-semibold border border-emerald-200 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]"></span>
                        <span>WhatsApp: +255 764 494 606</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      {language === 'en' ? 'Secretariat Headquarters' : 'Mahali pa Ofisi Kuu'}
                    </span>
                    <div className="text-xs sm:text-sm font-medium text-slate-900 leading-snug space-y-0.5">
                      <p className="font-semibold text-slate-900">5th Floor, Mkulima House</p>
                      <p className="text-slate-700">Nelson Mandela Road, Ubungo</p>
                      <p className="text-slate-600 font-medium">Dar es Salaam, Tanzania</p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      {language === 'en' ? 'Working Hours (EAT)' : 'Masaa ya Kazi'}
                    </span>
                    <span className="text-xs font-semibold text-slate-800 block">
                      {orgSettings.officeHours}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      East Africa Time (UTC+3), Closed on Public Holidays
                    </span>
                  </div>
                </div>
              </div>

              {/* Data Transparency Box */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-800 text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-lime-600" />
                  <span>ONE ALLIED TANZANIA Official Secretariat</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Registered Non-Governmental Organization (NGO) under the Laws of the United Republic of Tanzania.
                </p>
                <button
                  onClick={onOpenAdminModal}
                  className="text-[11px] text-sky-700 font-bold hover:underline pt-1 block"
                >
                  Adjust Live Records via CMS Editor &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Send Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {language === 'en' ? 'Send Us an Official Message' : 'Tuma Ujumbe Rasmi'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {language === 'en'
                    ? 'Our team will review your inquiry and route it to the appropriate technical lead.'
                    : 'Timu yetu itapokea ujumbe wako na kuwasiliana nawe haraka iwezekanavyo.'}
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    {language === 'en' ? 'Message Received' : 'Ujumbe Umepokelewa'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    {language === 'en'
                      ? 'Thank you for reaching out to One Allied Tanzania. Our communications desk will respond to your provided email within 24 to 48 hours.'
                      : 'Asante kwa kuwasiliana na One Allied Tanzania. Dawati letu la mawasiliano litakujibu kupitia barua pepe ndani ya masaa 24 hadi 48.'}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setSubject('');
                      setMessage('');
                    }}
                    className="px-5 py-2 text-xs font-semibold bg-slate-900 text-white rounded-xl hover:bg-slate-800"
                  >
                    {language === 'en' ? 'Send Another Inquiry' : 'Tuma Ujumbe Mwingine'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {language === 'en' ? 'Full Name' : 'Jina Kamili'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Dr. Joyce Mushi"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-lime-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {language === 'en' ? 'Email Address' : 'Barua Pepe'} *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@organization.or.tz"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-lime-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {language === 'en' ? 'Subject / Inquiry Focus' : 'Kichwa cha Habari'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder={
                        language === 'en'
                          ? 'e.g. Healthcare Facility Quality Audit Partnership'
                          : 'mfano: Ombi la Tathmini ya Ubora wa Zahanati'
                      }
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-lime-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {language === 'en' ? 'Message' : 'Ujumbe Wako'} *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        language === 'en'
                          ? 'Please share details regarding your facility, institution, or collaboration request...'
                          : 'Tafadhali eleza maelezo kuhusu kituo chako au lengo la mawasiliano...'
                      }
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-lime-500"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{language === 'en' ? 'Send Official Message' : 'Tuma Ujumbe'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tanzania Map & Physical Context Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-3xl p-6 sm:p-10 border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                {language === 'en' ? 'Tanzania National Presence' : 'Uwakilishi wa Kitaifa Tanzania'}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                {language === 'en'
                  ? 'Headquartered in Dar es Salaam with National Program Coordination'
                  : 'Makao Makuu Dar es Salaam na Uratibu wa Miradi Kote Nchini'}
              </h3>
            </div>
            <span className="text-xs font-semibold px-3 py-1 bg-white border border-slate-300 rounded-full text-slate-700">
              United Republic of Tanzania
            </span>
          </div>

          <div className="aspect-video w-full max-h-72 rounded-2xl overflow-hidden bg-slate-900 relative flex items-center justify-center text-white border border-slate-300">
            <img
              src="/images/facility.jpg"
              alt="Healthcare center in Tanzania"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent"></div>
            <div className="absolute text-center p-6 space-y-2">
              <MapPin className="w-8 h-8 text-lime-400 mx-auto animate-bounce" />
              <h4 className="text-base font-bold">ONE ALLIED TANZANIA National Secretariat</h4>
              <p className="text-xs text-slate-300 max-w-lg mx-auto">
                5th Floor, Mkulima House, Nelson Mandela Road, Ubungo, Dar es Salaam
              </p>
              <p className="text-[11px] text-lime-300 font-mono">
                Tel: 0764494606 / 0748165752 &bull; WhatsApp: +255 764 494 606
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
