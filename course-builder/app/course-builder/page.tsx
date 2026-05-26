'use client';

import React, { useState } from 'react';
import { statutoryTopics, StatutoryTopic } from './required-topics';

type Status = 'Not Started' | 'In Progress' | 'Completed';

interface TopicWithStatus extends StatutoryTopic {
  status: Status;
}

export default function RequiredTopicsDashboard() {
  const [topics, setTopics] = useState<TopicWithStatus[]>(
    statutoryTopics.map(topic => ({
      ...topic,
      status: 'Not Started' as Status
    }))
  );

  const [filter, setFilter] = useState<'All' | Status>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const updateStatus = (id: number, newStatus: Status) => {
    setTopics(prev =>
      prev.map(topic =>
        topic.id === id ? { ...topic, status: newStatus } : topic
      )
    );
  };

  const filteredTopics = topics
    .filter(topic => {
      const matchesFilter = filter === 'All' || topic.status === filter;
      const matchesSearch = topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           topic.primaryModule.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });

  const completedCount = topics.filter(t => t.status === 'Completed').length;
  const progressPercentage = Math.round((completedCount / topics.length) * 100);

  const getStatusColor = (status: Status) => {
    switch (status) {
      case 'Completed': return 'bg-emerald-600 text-white';
      case 'In Progress': return 'bg-amber-500 text-white';
      default: return 'bg-slate-200 text-slate-700';
    }
  };

  const exportToCSV = () => {
    const headers = ['Topic', 'Module', 'Dedicated Time', 'Status', 'Compliance Note'];
    const csvContent = [
      headers.join(','),
      ...topics.map(t => [
        `"${t.name}"` ,
        `"${t.primaryModule}"` ,
        t.dedicatedTime,
        t.status,
        `"${t.complianceNote}"` 
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'required-topics-compliance-report.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">TD</span>
              </div>
              <div>
                <h1 className="text-4xl font-semibold tracking-tight">Course Builder</h1>
                <p className="text-slate-600">Texas DriveEd • TDLR Compliant Platform</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-white px-4 py-2 rounded-2xl border text-sm flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Compliance Score: <span className="font-mono text-emerald-600">{progressPercentage}%</span></span>
            </div>
            <button 
              onClick={exportToCSV}
              className="px-5 py-2.5 bg-slate-900 text-white rounded-2xl text-sm font-semibold flex items-center gap-2 hover:bg-black transition-colors"
            >
              Export Audit Report (CSV)
            </button>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-3xl p-6 mb-8 border">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="font-semibold text-xl">Statutory Required Topics Compliance</h2>
              <p className="text-sm text-slate-600">Texas Education Code Chapter 1001 §§102–1101 • 15 Mandatory Topics</p>
            </div>
            <div className="text-right">
              <div className="font-mono text-4xl font-semibold text-emerald-600">{completedCount}<span className="text-2xl text-slate-600">/{topics.length}</span></div>
              <div className="text-xs text-slate-600">Topics Completed</div>
            </div>
          </div>
          
          <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
            <div 
              className="h-3 bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-500 rounded-full" 
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-600 mt-1.5">
            <div>0%</div>
            <div>100% TDLR Ready</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search topics or modules..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-2xl focus:outline-none focus:border-orange-400"
            />
          </div>
          <div className="flex gap-2">
            {(['All', 'Not Started', 'In Progress', 'Completed'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-3 rounded-2xl text-sm font-medium transition-all ${
                  filter === f 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-white border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic) => (
              <div key={topic.id} className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="font-semibold text-lg leading-tight mb-1">{topic.name}</div>
                    <div className="text-sm text-orange-600 font-medium">{topic.primaryModule}</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getStatusColor(topic.status)}`}>
                    {topic.status}
                  </div>
                </div>

                <div className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {topic.description}
                </div>

                <div className="flex items-center justify-between text-xs mb-4">
                  <div className="flex items-center gap-2 text-slate-500">
                    <span className="font-mono bg-slate-100 px-2 py-0.5 rounded">⏱ {topic.dedicatedTime}</span>
                  </div>
                  <div className="text-emerald-600 font-medium text-[10px] tracking-wider">
                    {topic.complianceNote}
                  </div>
                </div>

                {/* Status Controls */}
                <div className="flex gap-2">
                  {(['Not Started', 'In Progress', 'Completed'] as const).map((status) => (
                    <button
                      key={status}
                      onClick={() => updateStatus(topic.id, status)}
                      disabled={topic.status === status}
                      className={`flex-1 py-2 text-xs font-semibold rounded-2xl transition-all border ${
                        topic.status === status
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-700 cursor-default'
                          : 'bg-white border-slate-200 hover:bg-slate-50 active:bg-slate-100'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12 text-slate-500">
              No topics match your current filters.
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-xs text-slate-500">
          All 15 topics are treated as <span className="font-semibold text-emerald-600">non-optional completion gates</span> for TDLR compliance. 
          Dedicated time is tracked separately for audit reporting.
        </div>
      </div>
    </div>
  );
}
