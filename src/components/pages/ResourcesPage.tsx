import React, { useState } from 'react';
import { Language, ResourceDocument } from '../../types';
import { initialResources } from '../../translations/content';
import {
  FileText,
  Search,
  Download,
  Filter,
  CheckCircle,
  ShieldCheck,
  FileCheck2,
  BookOpen,
} from 'lucide-react';

interface ResourcesPageProps {
  language: Language;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ language }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const categories = [
    { id: 'all', labelEn: 'All Documents', labelSw: 'Nyaraka Zote' },
    { id: 'guidelines', labelEn: 'Quality Guidelines', labelSw: 'Miongozo ya Ubora' },
    { id: 'compliance', labelEn: 'Safety & Compliance', labelSw: 'Usalama na Sheria' },
    { id: 'training', labelEn: 'Training Manuals', labelSw: 'Vitabu vya Mafunzo' },
    { id: 'reports', labelEn: 'Reports & Profiles', labelSw: 'Ripoti na Wasifu' },
  ];

  const filtered = initialResources.filter((doc) => {
    const matchesCat = selectedCat === 'all' || doc.category === selectedCat;
    const title = language === 'en' ? doc.titleEn : doc.titleSw;
    const desc = language === 'en' ? doc.descriptionEn : doc.descriptionSw;
    const matchesSearch =
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleDownload = (doc: ResourceDocument) => {
    setDownloadSuccess(doc.id);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 2500);
  };

  return (
    <div className="w-full pb-20 space-y-12">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 opacity-95"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-lime-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              {language === 'en' ? 'Knowledge Center' : 'Kituo cha Maarifa na Nyaraka'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {language === 'en'
                ? 'Clinical Guidelines, Toolkits & Publications'
                : 'Miongozo ya Kliniki, Zana na Machapisho'}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {language === 'en'
                ? 'Accessible, evidence-based standard operating procedures, infection control checklists, and facility governance manuals for Tanzanian healthcare providers.'
                : 'Nyaraka za kiutendaji, orodha za udhibiti wa maambukizi, na miongozo ya utawala kwa watoa huduma za afya Tanzania.'}
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Toolbar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={
                  language === 'en' ? 'Search documents, checklists...' : 'Tafuta miongozo, orodha...'
                }
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-lime-500"
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCat(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    selectedCat === cat.id
                      ? 'bg-sky-600 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {language === 'en' ? cat.labelEn : cat.labelSw}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs">
            {language === 'en'
              ? 'No matching documents found. Try adjusting your search keywords.'
              : 'Hakuna nyaraka iliyopatikana. Jaribu kubadili maneno ya utafutaji.'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:border-lime-500 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200">
                      {doc.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {doc.format} • {doc.fileSize}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {language === 'en' ? doc.titleEn : doc.titleSw}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === 'en' ? doc.descriptionEn : doc.descriptionSw}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Published: {doc.date}</span>

                  <button
                    onClick={() => handleDownload(doc)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-900 bg-lime-400 hover:bg-lime-300 transition-colors cursor-pointer"
                  >
                    {downloadSuccess === doc.id ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-950" />
                        <span>Ready!</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>{language === 'en' ? 'Download Document' : 'Pakua Waraka'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
