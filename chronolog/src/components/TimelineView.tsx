import React from 'react';

interface TimelineEntry {
  id: string;
  content: string;
  timestamp: Date;
}

interface TimelineViewprops {
  entries: TimelineEntry[];
}

const TimelineView: React.FC<TimelineViewProps> = () => {
  return (
    <div>
    {entries.map((entry) => (
      <div key={entry.id}>
        <p>{entry.content}</p>
        <p className="text-slate-800"><entry.timestamp></p>
    </div>
  );
};

export default TimelineView;
