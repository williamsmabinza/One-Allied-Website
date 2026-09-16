import React, { useState } from 'react';
import { Language, ImpactCounter, OrganizationSettings } from '../../types';
import { X, SlidersHorizontal, Check, RefreshCw, AlertCircle, Save } from 'lucide-react';

interface AdminLiveEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  impactCounters: ImpactCounter[];
  onUpdateCounters: (counters: ImpactCounter[]) => void;
  orgSettings: OrganizationSettings;
  onUpdateSettings: (settings: OrganizationSettings) => void;
  onResetDefaults: () => void;
}

export const AdminLiveEditorModal: React.FC<AdminLiveEditorModalProps> = ({
  isOpen,
  onClose,
  language,
  impactCounters,
  onUpdateCounters,
  orgSettings,
  onUpdateSettings,
  onResetDefaults,
}) => {
  const [localCounters, setLocalCounters] = useState<ImpactCounter[]>(impactCounters);
  const [localSettings, setLocalSettings] = useState<OrganizationSettings>(orgSettings);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleCounterChange = (id: string, field: 'value' | 'labelEn' | 'labelSw', val: string) => {
    setLocalCounters((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: val, isPlaceholder: val.includes('[XX]') } : c))
    );
  };

  const handleSave = () => {
    onUpdateCounters(localCounters);
    onUpdateSettings(localSettings);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 bg-slate-900 text-white rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-lime-400 text-slate-950 flex items-center justify-center">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold">
                {language === 'en' ? 'Verified Records & CMS Editor' : 'Kihariri cha Takwimu na CMS'}
              </h3>
              <p className="text-xs text-slate-400">
                {language === 'en'
                  ? 'Update verified metrics, contact placeholders, and official records in real-time'
                  : 'Sasisha takwimu zilizothibitishwa na mawasiliano ya taasisi'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-6">
          <div className="p-3 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-700 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
            <span>
              {language === 'en'
                ? 'To preserve international credibility and donor integrity, figures default to transparent placeholders [XX] until formal clinical audit records are confirmed by the secretariat.'
                : 'Ili kudumisha uaminifu wa kimataifa na uwazi, takwimu zinaanza kama viashiria [XX] hadi zitakapothibitishwa rasmi na sekretarieti.'}
            </span>
          </div>

          {/* Section 1: Impact Counters */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center justify-between">
              <span>{language === 'en' ? 'Impact Metric Counters' : 'Takwimu za Matokeo'}</span>
              <span className="text-[11px] font-normal text-slate-500">Live preview enabled</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {localCounters.map((counter) => (
                <div key={counter.id} className="p-3 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-slate-700">
                      {counter.labelEn}
                    </label>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-100 text-sky-800 font-mono">
                      {counter.id}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={counter.value}
                      onChange={(e) => handleCounterChange(counter.id, 'value', e.target.value)}
                      placeholder="e.g. [XX] or 48"
                      className="w-24 px-2.5 py-1.5 text-xs font-bold border border-slate-300 rounded-md bg-white focus:outline-hidden focus:ring-2 focus:ring-lime-500"
                    />
                    <span className="text-[11px] text-slate-500">
                      {counter.value.includes('[XX]') ? '(Placeholder)' : '(Verified Value)'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Contact Placeholders */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
              {language === 'en' ? 'Institutional Information & Contacts' : 'Taarifa za Taasisi na Mawasiliano'}
            </h4>
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Official Email
                  </label>
                  <input
                    type="email"
                    value={localSettings.contactEmail}
                    onChange={(e) =>
                      setLocalSettings({ ...localSettings, contactEmail: e.target.value })
                    }
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Telephone Placeholder
                  </label>
                  <input
                    type="text"
                    value={localSettings.contactPhone}
                    onChange={(e) =>
                      setLocalSettings({ ...localSettings, contactPhone: e.target.value })
                    }
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg bg-white font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Physical Office Notice
                </label>
                <input
                  type="text"
                  value={localSettings.officeLocation}
                  onChange={(e) =>
                    setLocalSettings({ ...localSettings, officeLocation: e.target.value })
                  }
                  className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg bg-white"
                />
              </div>
            </div>
          </div>

          {/* Footer controls */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                onResetDefaults();
                onClose();
              }}
              className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-medium"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Reset to Verified Defaults' : 'Rejesha ya Awali'}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800"
              >
                {language === 'en' ? 'Cancel' : 'Ghairi'}
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold text-xs shadow-sm transition-colors"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-950" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>{language === 'en' ? 'Apply Live Changes' : 'Tumia Mabadiliko'}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
