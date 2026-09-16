import React, { useState } from 'react';
import { Language } from '../../types';
import { X, HeartHandshake, CheckCircle2, Building2, Send, ShieldAlert } from 'lucide-react';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose, language }) => {
  const [partnerType, setPartnerType] = useState('facility');
  const [orgName, setOrgName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('Dar es Salaam');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto border border-slate-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 bg-slate-50/80 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {language === 'en' ? 'Partner With One Allied Tanzania' : 'Shirikiana na One Allied Tanzania'}
              </h3>
              <p className="text-xs text-slate-500">
                {language === 'en'
                  ? 'Strengthening healthcare facilities through institutional collaboration'
                  : 'Kuimarisha vituo vya afya kupitia ushirikiano wa kitaasisi'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                {language === 'en' ? 'Partnership Inquiry Received' : 'Ombi la Ushirikiano Limepokelewa'}
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                {language === 'en'
                  ? 'Thank you for reaching out to One Allied Tanzania. Our partnership and clinical programs team will review your institution’s profile and respond via official email within 2 business days.'
                  : 'Asante kwa kuwasiliana na One Allied Tanzania. Timu yetu ya ushirikiano itapitia maelezo ya taasisi yako na kuwasiliana nawe kupitia barua pepe rasmi ndani ya siku 2 za kazi.'}
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
                >
                  {language === 'en' ? 'Done' : 'Kamilisha'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-sky-50 border border-sky-200 rounded-xl text-xs text-sky-800 flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>
                  {language === 'en'
                    ? 'All collaborations adhere to Tanzanian Ministry of Health guidelines, institutional ethical standards, and transparent reporting.'
                    : 'Ushirikiano wote unazingatia miongozo ya Wizara ya Afya ya Tanzania na viwango rasmi vya maadili ya kitaasisi.'}
                </span>
              </div>

              {/* Partner Type Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                  {language === 'en' ? 'Institutional Category' : 'Aina ya Taasisi'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'facility', labelEn: 'Health Facility', labelSw: 'Kituo cha Afya' },
                    { id: 'development', labelEn: 'Donor / INGO', labelSw: 'Mfadhili / Shirika' },
                    { id: 'government', labelEn: 'Government Body', labelSw: 'Mamlaka ya Serikali' },
                    { id: 'technical', labelEn: 'Clinical Expert', labelSw: 'Mtaalamu wa Afya' },
                  ].map((type) => (
                    <button
                      type="button"
                      key={type.id}
                      onClick={() => setPartnerType(type.id)}
                      className={`py-2 px-2.5 rounded-lg text-xs font-medium text-center border transition-all ${
                        partnerType === type.id
                          ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {language === 'en' ? type.labelEn : type.labelSw}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === 'en' ? 'Institution / Facility Name' : 'Jina la Taasisi / Kituo'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    placeholder="e.g. St. Elizabeth Health Center"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-lime-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === 'en' ? 'Primary Contact Person' : 'Mwakilishi Rasmi'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Dr. Amani Mwamba"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-lime-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === 'en' ? 'Official Work Email' : 'Barua Pepe Rasmi'} *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@institution.org"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-lime-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {language === 'en' ? 'Tanzania Region / Location' : 'Mkoa / Mahali Nchini Tanzania'}
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-lime-500 bg-white"
                  >
                    <option value="Dar es Salaam">Dar es Salaam</option>
                    <option value="Dodoma">Dodoma</option>
                    <option value="Mwanza">Mwanza</option>
                    <option value="Arusha">Arusha</option>
                    <option value="Kilimanjaro">Kilimanjaro</option>
                    <option value="Mbeya">Mbeya</option>
                    <option value="Morogoro">Morogoro</option>
                    <option value="Tanga">Tanga</option>
                    <option value="Other Region">Other Region / International</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {language === 'en'
                    ? 'Area of Interest / Specific Collaboration Needs'
                    : 'Eneo la Ushirikiano / Mahitaji Maalum'}
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={
                    language === 'en'
                      ? 'Briefly describe your healthcare quality improvement objectives, accreditation support, or clinical training focus...'
                      : 'Eleza kwa ufupi malengo yako ya kuboresha ubora wa huduma za afya, msaada wa vibali, au mafunzo ya watumishi...'
                  }
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-lime-500"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800"
                >
                  {language === 'en' ? 'Cancel' : 'Ghairi'}
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-bold text-xs shadow-md transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>
                    {language === 'en' ? 'Submit Partnership Inquiry' : 'Wasilisha Ombi la Ushirikiano'}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
