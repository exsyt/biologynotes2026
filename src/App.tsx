import React, { useState, useEffect } from 'react';
import { BIOLOGY_TOPICS } from './data/biologyData';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { TopicView } from './components/TopicView';
import { RevisionToolsModal } from './components/RevisionToolsModal';
import { OfflineIndicator } from './components/OfflineIndicator';

export default function App() {
  const [selectedTopicId, setSelectedTopicId] = useState<number>(() => {
    const saved = localStorage.getItem('bio5090_selected_topic');
    return saved ? Number(saved) : 1;
  });

  const [completedTopicIds, setCompletedTopicIds] = useState<Set<number>>(() => {
    try {
      const saved = localStorage.getItem('bio5090_completed_topics');
      return saved ? new Set(JSON.parse(saved).map(Number)) : new Set();
    } catch {
      return new Set();
    }
  });

  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xl'>(() => {
    return (localStorage.getItem('bio5090_font_size') as 'normal' | 'large' | 'xl') || 'normal';
  });

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFocusMode, setIsFocusMode] = useState<boolean>(false);
  const [isOpenMobileSidebar, setIsOpenMobileSidebar] = useState<boolean>(false);
  const [isToolkitOpen, setIsToolkitOpen] = useState<boolean>(false);

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem('bio5090_selected_topic', selectedTopicId.toString());
  }, [selectedTopicId]);

  useEffect(() => {
    localStorage.setItem('bio5090_completed_topics', JSON.stringify(Array.from(completedTopicIds)));
  }, [completedTopicIds]);

  useEffect(() => {
    localStorage.setItem('bio5090_font_size', fontSize);
  }, [fontSize]);

  // Handle toggling topic completion status
  const handleToggleComplete = (topicId: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCompletedTopicIds((prev) => {
      const next = new Set(prev);
      if (next.has(topicId)) {
        next.delete(topicId);
      } else {
        next.add(topicId);
      }
      return next;
    });
  };

  // Find active topic index & adjacent topics
  const currentTopicIndex = BIOLOGY_TOPICS.findIndex((t) => t.id === selectedTopicId);
  const activeTopic = BIOLOGY_TOPICS[currentTopicIndex] || BIOLOGY_TOPICS[0];

  const prevTopic = currentTopicIndex > 0 ? BIOLOGY_TOPICS[currentTopicIndex - 1] : undefined;
  const nextTopic = currentTopicIndex < BIOLOGY_TOPICS.length - 1 ? BIOLOGY_TOPICS[currentTopicIndex + 1] : undefined;

  const handleSelectTopic = (id: number) => {
    setSelectedTopicId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Top Navigation Bar */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenToolkit={() => setIsToolkitOpen(true)}
        fontSize={fontSize}
        onChangeFontSize={setFontSize}
        isFocusMode={isFocusMode}
        onToggleFocusMode={() => setIsFocusMode(!isFocusMode)}
        completedCount={completedTopicIds.size}
        totalTopics={BIOLOGY_TOPICS.length}
        onOpenSidebar={() => setIsOpenMobileSidebar(true)}
      />

      {/* Main Workspace */}
      <div className="flex-1 flex max-w-[1600px] w-full mx-auto">
        {/* Left Topics Directory Sidebar */}
        {!isFocusMode && (
          <Sidebar
            topics={BIOLOGY_TOPICS}
            selectedTopicId={activeTopic.id}
            onSelectTopic={handleSelectTopic}
            completedTopicIds={completedTopicIds}
            onToggleComplete={handleToggleComplete}
            searchQuery={searchQuery}
            isOpenMobile={isOpenMobileSidebar}
            onCloseMobile={() => setIsOpenMobileSidebar(false)}
          />
        )}

        {/* Content Area */}
        <main className="flex-1 min-w-0 pb-16 overflow-y-auto">
          <TopicView
            topic={activeTopic}
            fontSize={fontSize}
            isCompleted={completedTopicIds.has(activeTopic.id)}
            onToggleComplete={() => handleToggleComplete(activeTopic.id)}
            onPreviousTopic={prevTopic ? () => handleSelectTopic(prevTopic.id) : undefined}
            onNextTopic={nextTopic ? () => handleSelectTopic(nextTopic.id) : undefined}
            prevTopicTitle={prevTopic?.title}
            nextTopicTitle={nextTopic?.title}
          />
        </main>
      </div>

      {/* Revision Tools Modal (Magnification calculator, food tests matrix, exam pitfalls) */}
      <RevisionToolsModal
        isOpen={isToolkitOpen}
        onClose={() => setIsToolkitOpen(false)}
      />

      {/* Connectivity status alert */}
      <OfflineIndicator />
    </div>
  );
}
