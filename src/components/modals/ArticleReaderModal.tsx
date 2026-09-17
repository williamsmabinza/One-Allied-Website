import React from 'react';
import { NewsStory, Language } from '../../types';
import { X, Calendar, Clock, Tag, Share2, ArrowLeft } from 'lucide-react';

interface ArticleReaderModalProps {
  story: NewsStory | null;
  onClose: () => void;
  language: Language;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  story,
  onClose,
  language,
}) => {
  if (!story) return null;

  const title = language === 'en' ? story.titleEn : story.titleSw;
  const category = language === 'en' ? story.categoryEn : story.categorySw;
  const content = language === 'en' ? story.contentEn : story.contentSw;
  const excerpt = language === 'en' ? story.excerptEn : story.excerptSw;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-slate-200">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur-xs z-10">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === 'en' ? 'Back to Stories' : 'Rudi kwenye Habari'}</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 font-semibold">
              {category}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100">
          <img
            src={story.image}
            alt={story.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-4 text-xs text-slate-200 mb-1">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-lime-400" />
                {story.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-sky-300" />
                {story.readTime}
              </span>
            </div>
            <p className="text-xs text-slate-300 italic max-w-xl">
              {story.imageAlt}
            </p>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 space-y-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
            {title}
          </h2>

          <div className="p-4 bg-slate-50 border-l-4 border-lime-500 rounded-r-xl text-sm font-medium text-slate-700 leading-relaxed">
            {excerpt}
          </div>

          <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-4">
            <p>{content}</p>
            <p>
              {language === 'en'
                ? 'Through automated aerial logistics and localized health worker training, One Allied Tanzania bridges the critical time gap in postpartum hemorrhage emergencies. By connecting district blood banks directly with primary healthcare facilities via reliable drone corridors, we ensure life-saving blood arrives before it is too late.'
                : 'Kupitia usafirishaji wa droni za kisasa na mafunzo ya watumishi wa afya, One Allied Tanzania inaziba pengo kubwa la muda wakati wa dharura za kutokwa damu baada ya kujifungua. Kwa kuunganisha benki za damu moja kwa moja na zahanati, tunahakikisha damu ya kuokoa maisha inafika kwa wakati.'}
            </p>
          </div>

          {/* Footer note */}
          <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>One Allied Tanzania • Drone Blood Delivery for Mothers • Tanzania</span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800"
            >
              {language === 'en' ? 'Close Story' : 'Funga'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
