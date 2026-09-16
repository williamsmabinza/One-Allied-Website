import React from 'react';
import { Language } from '../../types';
import { X, HandHeart, ShieldAlert, CheckCircle2, HeartHandshake, Mail, FileCheck2 } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onOpenPartnerModal: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({
  isOpen,
  onClose,
  language,
  onOpenPartnerModal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto border border-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 bg-slate-50/80 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-lime-100 flex items-center justify-center text-lime-700">
              <HandHeart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {language === 'en' ? 'Support Our Work' : 'Saidia Kazi Yetu'}
              </h3>
              <p className="text-xs text-slate-500">
                {language === 'en'
                  ? 'Strengthening healthcare quality and safety across Tanzania'
                  : 'Kuimarisha ubora na usalama wa huduma za afya nchini Tanzania'}
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

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Institutional Transparency & Integrity Notice */}
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3 text-amber-900">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <span className="font-bold block text-sm">
                {language === 'en'
                  ? 'Official Institutional Verification Note'
                  : 'Taarifa Rasmi ya Uwazi na Uhakiki'}
              </span>
              <p className="leading-relaxed">
                {language === 'en'
                  ? 'In compliance with non-governmental statutory regulations and international governance standards, One Allied Tanzania does not accept unverified online transactions or publish personal payment details. All institutional grants, technical equipment donations, and financial contributions are processed via verified formal agreements.'
                  : 'Kwa mujibu wa sheria za mashirika yasiyo ya kiserikali na viwango vya utawala bora, One Allied Tanzania haichukui miamala ya mtandaoni isiyothibitishwa au kuchapisha taarifa za benki bila uthibitisho. Michango ya vifaa tiba na misaada ya kitaasisi hupitishwa kwa makubaliano rasmi.'}
              </p>
            </div>
          </div>

          {/* Three Key Ways to Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              {language === 'en' ? 'How You Can Support Today' : 'Jinsi Unavyoweza Kusaidia Leo'}
            </h4>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                    <FileCheck2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">
                      {language === 'en'
                        ? '1. Institutional & Programmatic Grants'
                        : '1. Ruzuku za Miradi na Taasisi'}
                    </h5>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {language === 'en'
                        ? 'Partner with us on targeted interventions such as clinical audit training, infection control programs, and rural dispensary quality certification.'
                        : 'Shirikiana nasi kwenye miradi maalum kama vile mafunzo ya ukaguzi wa kliniki, udhibiti wa maambukizi, na ithibati ya ubora wa zahanati.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-lime-100 text-lime-800 flex items-center justify-center shrink-0 mt-0.5">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">
                      {language === 'en'
                        ? '2. Medical Equipment & Reagents Mobilization'
                        : '2. Vifaa Tiba na Vitendanishi vya Maabara'}
                    </h5>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {language === 'en'
                        ? 'Support health facilities with compliant diagnostic instruments, PPE, laboratory consumables, and solar cold-chain storage units.'
                        : 'Kusaidia vituo vya afya kwa vifaa vya uchunguzi vinavyokidhi viwango, vifaa vya kinga, na mifumo ya nishati ya jua ya kuhifadhia dawa.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">
                      {language === 'en'
                        ? '3. Pro Bono Clinical & Technical Mentorship'
                        : '3. Utaalamu Elekezi wa Kliniki na Mifumo'}
                    </h5>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {language === 'en'
                        ? 'Healthcare quality auditors, biomedical engineers, and logistics specialists can share technical expertise with Tanzanian facility teams.'
                        : 'Wakaguzi wa ubora wa afya, mafundi wa vifaa tiba, na wataalamu wa ugavi wanaweza kutoa mafunzo na uelekezi kwa vituo.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
            <a
              href="mailto:info@onealliedtz.org?subject=Institutional%20Support%20Inquiry%20-%20One%20Allied%20Tanzania"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-600" />
              <span>{language === 'en' ? 'Email Secretariat' : 'Tuma Barua Pepe'}</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenPartnerModal();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white text-xs font-bold shadow-sm transition-all"
            >
              <HeartHandshake className="w-4 h-4 text-lime-300" />
              <span>{language === 'en' ? 'Discuss Formal Partnership' : 'Jadili Ushirikiano Rasmi'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
