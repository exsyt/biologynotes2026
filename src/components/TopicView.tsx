import React from 'react';
import { Topic } from '../types';
import { DiagramRenderer } from './DiagramRenderer';
import {
  BookOpen,
  CheckCircle2,
  Circle,
  Lightbulb,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Zap
} from 'lucide-react';

interface TopicViewProps {
  topic: Topic;
  fontSize: 'normal' | 'large' | 'xl';
  isCompleted: boolean;
  onToggleComplete: () => void;
  onPreviousTopic?: () => void;
  onNextTopic?: () => void;
  prevTopicTitle?: string;
  nextTopicTitle?: string;
}

export const TopicView: React.FC<TopicViewProps> = ({
  topic,
  fontSize,
  isCompleted,
  onToggleComplete,
  onPreviousTopic,
  onNextTopic,
  prevTopicTitle,
  nextTopicTitle
}) => {
  // Font scaling classes
  const bodyTextClass =
    fontSize === 'normal'
      ? 'text-sm leading-relaxed'
      : fontSize === 'large'
      ? 'text-base leading-relaxed'
      : 'text-lg leading-loose';

  const headingTextClass =
    fontSize === 'normal'
      ? 'text-lg sm:text-xl font-bold'
      : fontSize === 'large'
      ? 'text-xl sm:text-2xl font-bold'
      : 'text-2xl sm:text-3xl font-bold';

  return (
    <article className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-8 animate-in fade-in duration-200">
      {/* Topic Header Card */}
      <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-xl overflow-hidden">
        {/* Subtle accent corner glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold text-xs">
              TOPIC {topic.id} OF 19
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-slate-400" />
              {topic.category}
            </span>
          </div>

          <button
            onClick={onToggleComplete}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
              isCompleted
                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Reviewed & Mastered
              </>
            ) : (
              <>
                <Circle className="w-4 h-4 text-slate-500" />
                Mark as Completed
              </>
            )}
          </button>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50 mb-2">
          {topic.title}
        </h1>
        <p className="text-base text-slate-400 max-w-2xl">
          {topic.summary}
        </p>

        {/* Must-Memorize Summary Card */}
        {topic.memorise && (
          <div className="mt-4 p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-start gap-2.5 text-xs text-emerald-200">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-emerald-300 font-bold block mb-0.5">Examiner Golden Rule:</strong>
              <span className="text-emerald-100/90">{topic.memorise}</span>
            </div>
          </div>
        )}

        {/* Section Quick Jump Bar */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 items-center">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Jump to Section:</span>
          {topic.sections.map((sec, idx) => (
            <a
              key={idx}
              href={`#section-${idx}`}
              className="text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-300 hover:border-emerald-500/40 transition-colors"
            >
              {sec.title}
            </a>
          ))}
        </div>
      </div>

      {/* Interactive Diagram Section */}
      {topic.diagramType && (
        <section aria-label="Interactive Diagram" className="space-y-2">
          <DiagramRenderer diagramType={topic.diagramType} />
        </section>
      )}

      {/* High-Yield Topic Exam Tips */}
      {topic.examTips && topic.examTips.length > 0 && (
        <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-xs space-y-2.5 shadow-sm">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Cambridge 5090 Examiner Tips for Topic {topic.id}:</span>
          </div>
          <ul className="space-y-1.5 pl-6 list-disc text-amber-200/90 leading-relaxed">
            {topic.examTips.map((tip, tIdx) => (
              <li key={tIdx}>{tip}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Content Sections */}
      <div className="space-y-8">
        {topic.sections.map((section, idx) => (
          <section
            key={idx}
            id={`section-${idx}`}
            className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800/90 shadow-sm scroll-mt-20 space-y-5"
          >
            {/* Section Heading */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-xs font-mono font-bold">
                  {topic.id}.{idx + 1}
                </span>
                <h2 className={`${headingTextClass} text-slate-100`}>
                  {section.title}
                </h2>
              </div>
            </div>

            {/* Section Callout if any */}
            {section.callout && (
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-700/60 text-xs text-slate-300">
                <p className="italic text-emerald-300">{section.callout}</p>
              </div>
            )}

            {/* Content Points */}
            <div className={`space-y-3 text-slate-300 ${bodyTextClass}`}>
              {section.points.map((point, pIdx) => {
                const isCallout = point.startsWith('• ');
                const cleanPoint = isCallout ? point.slice(2) : point;

                return (
                  <div key={pIdx} className="flex items-start gap-2.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                    <p className="flex-1 leading-relaxed">
                      {cleanPoint}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Process Chains */}
            {section.chains && section.chains.length > 0 && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Sequential Cause & Effect Chains:</span>
                </div>
                <div className="space-y-2">
                  {section.chains.map((chain, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-3 rounded-xl bg-slate-950/80 border border-emerald-500/20 text-xs font-mono text-emerald-300/90 leading-relaxed"
                    >
                      {chain}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Chemical / Biological Equations */}
            {section.equations && section.equations.length > 0 && (
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-sky-400 block">Key Reactions:</span>
                {section.equations.map((eq, eIdx) => (
                  <div key={eIdx} className="p-3 rounded-xl bg-slate-950/80 border border-sky-500/30 text-xs space-y-1">
                    {eq.word && (
                      <p className="font-semibold text-slate-200">
                        <strong className="text-sky-300">Word Equation:</strong> {eq.word}
                      </p>
                    )}
                    {eq.symbol && (
                      <p className="font-mono text-sky-300">
                        <strong className="text-slate-400 font-sans">Symbol Equation:</strong> {eq.symbol}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Comparison Table */}
            {section.tableData && (
              <div className="space-y-2 pt-2">
                <div className="rounded-xl border border-slate-800 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-slate-950 border-b border-slate-800 text-slate-200">
                          {section.tableData.headers.map((h, hIdx) => (
                            <th key={hIdx} className="p-3 font-bold">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/70 text-slate-300">
                        {section.tableData.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-850/50 hover:bg-slate-800/30 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-3 leading-relaxed">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Bottom Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-800">
        {onPreviousTopic ? (
          <button
            onClick={onPreviousTopic}
            className="flex items-center gap-3 p-4 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-left transition-all group"
          >
            <ArrowLeft className="w-5 h-5 text-emerald-400 group-hover:-translate-x-1 transition-transform" />
            <div className="min-w-0">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Previous Topic</span>
              <span className="text-xs font-semibold text-slate-200 group-hover:text-emerald-300 truncate block">
                {prevTopicTitle}
              </span>
            </div>
          </button>
        ) : (
          <div />
        )}

        {onNextTopic && (
          <button
            onClick={onNextTopic}
            className="flex items-center justify-between p-4 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/40 text-right transition-all group"
          >
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Next Topic</span>
              <span className="text-xs font-semibold text-slate-200 group-hover:text-emerald-300 truncate block">
                {nextTopicTitle}
              </span>
            </div>
            <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform ml-3 shrink-0" />
          </button>
        )}
      </div>
    </article>
  );
};
