import React from 'react';
import { Topic } from '../types';
import { CheckCircle, Circle, ChevronRight, X } from 'lucide-react';

interface SidebarProps {
  topics: Topic[];
  selectedTopicId: number;
  onSelectTopic: (id: number) => void;
  completedTopicIds: Set<number>;
  onToggleComplete: (id: number, e: React.MouseEvent) => void;
  searchQuery: string;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

interface UnitGroup {
  name: string;
  topicIds: number[];
}

const UNIT_GROUPS: UnitGroup[] = [
  { name: "Unit 1: Cells & Living Organisms", topicIds: [1, 2, 3] },
  { name: "Unit 2: Biochemistry & Plant Physiology", topicIds: [4, 5, 6, 7] },
  { name: "Unit 3: Human Systems & Transport", topicIds: [8, 9, 10, 11] },
  { name: "Unit 4: Homeostasis, Disease & Coordination", topicIds: [12, 13, 14, 15] },
  { name: "Unit 5: Reproduction, Genetics & Biotech", topicIds: [16, 17, 18] },
  { name: "Unit 6: Ecology & Environment", topicIds: [19] }
];

export const Sidebar: React.FC<SidebarProps> = ({
  topics,
  selectedTopicId,
  onSelectTopic,
  completedTopicIds,
  onToggleComplete,
  searchQuery,
  isOpenMobile,
  onCloseMobile
}) => {
  // Filter topics based on search query
  const filteredTopics = searchQuery.trim()
    ? topics.filter((t) => {
        const query = searchQuery.toLowerCase();
        return (
          t.title.toLowerCase().includes(query) ||
          t.summary.toLowerCase().includes(query) ||
          t.category.toLowerCase().includes(query) ||
          t.sections.some(
            (s) =>
              s.title.toLowerCase().includes(query) ||
              s.points.some((p) => p.toLowerCase().includes(query)) ||
              (s.chains && s.chains.some((c) => c.toLowerCase().includes(query)))
          )
        );
      })
    : topics;

  const filteredTopicIds = new Set(filteredTopics.map((t) => t.id));

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:sticky top-0 lg:top-[57px] left-0 z-50 lg:z-30 h-screen lg:h-[calc(100vh-57px)] w-80 bg-slate-950/95 lg:bg-slate-950 border-r border-slate-800/80 flex flex-col transition-transform duration-300 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Mobile Header with close button */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 lg:hidden">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Syllabus Navigation (19 Topics)
          </span>
          <button
            onClick={onCloseMobile}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Units & Topic List */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
          {searchQuery && (
            <div className="px-2 py-1.5 bg-emerald-950/30 border border-emerald-800/40 rounded-lg text-[11px] text-emerald-300 flex items-center justify-between">
              <span>Matching Topics: {filteredTopics.length}</span>
              <span className="text-[10px] text-slate-400">"{searchQuery}"</span>
            </div>
          )}

          {UNIT_GROUPS.map((unit) => {
            const unitTopics = unit.topicIds
              .map((id) => topics.find((t) => t.id === id))
              .filter((t): t is Topic => t !== undefined && filteredTopicIds.has(t.id));

            if (unitTopics.length === 0) return null;

            return (
              <div key={unit.name} className="space-y-1">
                <div className="px-2 pb-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {unit.name}
                </div>

                <div className="space-y-1">
                  {unitTopics.map((topic) => {
                    const isSelected = topic.id === selectedTopicId;
                    const isCompleted = completedTopicIds.has(topic.id);

                    return (
                      <div
                        key={topic.id}
                        onClick={() => {
                          onSelectTopic(topic.id);
                          onCloseMobile();
                        }}
                        className={`group relative flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-100 shadow-sm'
                            : 'hover:bg-slate-900 border border-transparent text-slate-300 hover:text-slate-100'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0 flex-1">
                          <button
                            onClick={(e) => onToggleComplete(topic.id, e)}
                            title={isCompleted ? "Mark unreviewed" : "Mark completed"}
                            className="shrink-0 p-0.5 text-slate-500 hover:text-emerald-400 transition-colors"
                          >
                            {isCompleted ? (
                              <CheckCircle className="w-4 h-4 text-emerald-400 fill-emerald-500/20" />
                            ) : (
                              <Circle className="w-4 h-4 text-slate-600 hover:text-slate-400" />
                            )}
                          </button>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-emerald-400 transition-colors">
                                #{topic.id}
                              </span>
                              <span className={`text-xs font-semibold truncate ${isSelected ? 'text-emerald-200' : 'text-slate-200'}`}>
                                {topic.title}
                              </span>
                            </div>
                            <span className="block text-[10px] text-slate-400 truncate">
                              {topic.summary}
                            </span>
                          </div>
                        </div>

                        <ChevronRight
                          className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                            isSelected ? 'text-emerald-400 translate-x-0.5' : 'text-slate-600 group-hover:text-slate-400'
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/80 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Cambridge GCE 5090</span>
          <span className="text-emerald-400 font-mono text-[10px]">19 Topics • 100% Notes</span>
        </div>
      </aside>
    </>
  );
};
