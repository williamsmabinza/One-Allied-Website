import React, { useState } from 'react';
import { Language, NewsStory } from '../../types';
import { Search, Calendar, Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';

interface NewsPageProps {
  language: Language;
  newsStories: NewsStory[];
  onSelectStory: (story: NewsStory) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({
  language,
  newsStories,
  onSelectStory,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelEn: 'All Updates', labelSw: 'Habari Zote' },
    { id: 'Training & Workforce', labelEn: 'Workforce Mentorship', labelSw: 'Mafunzo ya Watumishi' },
    { id: 'Facility Quality', labelEn: 'Facility Quality', labelSw: 'Ubora wa Vituo' },
    { id: 'Supply Chain & Equipment', labelEn: 'Supply & Equipment', labelSw: 'Ugavi na Vifaa' },
    { id: 'Patient Safety', labelEn: 'Patient Safety', labelSw: 'Usalama wa Mgonjwa' },
  ];

  const filtered = newsStories.filter((s) => {
    const matchesCat = selectedCategory === 'all' || s.categoryEn === selectedCategory;
    const title = language === 'en' ? s.titleEn : s.titleSw;
    const excerpt = language === 'en' ? s.excerptEn : s.excerptSw;
    const matchesSearch =
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full pb-20 space-y-12">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 opacity-95"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-lime-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              {language === 'en' ? 'Field Updates & News' : 'Habari na Makala za Vitendo'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {language === 'en'
                ? 'Stories of Healthcare Quality in Tanzania'
                : 'Habari za Kuboresha Afya Tanzania'}
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              {language === 'en'
                ? 'Follow our clinical mentorship visits, laboratory calibration programs, and collaborative interventions across dispensaries and hospitals.'
                : 'Fuatilia taarifa za mafunzo kazini, uboreshaji wa maabara, na shughuli zetu vituoni kote nchini.'}
            </p>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={
                  language === 'en' ? 'Search articles and stories...' : 'Tafuta habari na makala...'
                }
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-lime-500"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    selectedCategory === cat.id
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

      {/* Grid of stories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs">
            {language === 'en' ? 'No articles match your criteria.' : 'Hakuna habari zilizopatikana.'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xs hover:border-lime-500 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img
                      src={story.image}
                      alt={story.imageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-xs">
                        {language === 'en' ? story.categoryEn : story.categorySw}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center gap-3 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {story.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {story.readTime}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                      {language === 'en' ? story.titleEn : story.titleSw}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {language === 'en' ? story.excerptEn : story.excerptSw}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => onSelectStory(story)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 group-hover:text-lime-700 transition-colors cursor-pointer"
                  >
                    <span>{language === 'en' ? 'Read Full Article' : 'Soma Habari Kamili'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
