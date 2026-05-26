'use client';

import React, { useState } from 'react';
import { initialModules, Module } from './modules-data';

export default function POIDEModuleEditor() {
  const [modules, setModules] = useState<Module[]>(initialModules);
  const [selectedModule, setSelectedModule] = useState<Module | null>(modules[0]);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [fullContent, setFullContent] = useState<string | null>(null);
  const [isLoadingContent, setIsLoadingContent] = useState(false);

  const totalMinutes = modules.reduce((sum, mod) => sum + mod.timeMinutes, 0);
  const totalHours = (totalMinutes / 60).toFixed(1);
  const isCompliant = totalMinutes >= 1800 && totalMinutes <= 2100; // ~30-35 hours target

  // Drag and Drop Handlers
  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newModules = [...modules];
    const [draggedModule] = newModules.splice(draggedIndex, 1);
    newModules.splice(index, 0, draggedModule);

    setModules(newModules);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const updateModuleTime = (id: number, newTimeMinutes: number) => {
    const updated = modules.map(mod =>
      mod.id === id ? { ...mod, timeMinutes: Math.max(30, Math.min(600, newTimeMinutes)) } : mod
    );
    setModules(updated);

    if (selectedModule && selectedModule.id === id) {
      setSelectedModule({ ...selectedModule, timeMinutes: newTimeMinutes });
    }
  };

  const updateModuleDescription = (id: number, newDescription: string) => {
    const updated = modules.map(mod =>
      mod.id === id ? { ...mod, description: newDescription } : mod
    );
    setModules(updated);

    if (selectedModule && selectedModule.id === id) {
      setSelectedModule({ ...selectedModule, description: newDescription });
    }
  };

  const selectModule = (module: Module) => {
    setSelectedModule(module);
    setFullContent(null);
  };

  const resetToDefaults = () => {
    setModules(initialModules);
    setSelectedModule(initialModules[0]);
    setFullContent(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Bar */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-orange-500 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold">TD</span>
              </div>
              <div>
                <span className="font-semibold text-xl">Course Builder</span>
                <span className="ml-2 text-sm px-3 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-medium">POI-DE Editor</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-6 text-sm">
              <div>
                <span className="text-slate-500">Total Time:</span>{' '}
                <span className="font-mono font-semibold text-xl">{totalHours}</span>
                <span className="text-slate-500"> hrs</span>
              </div>
              <div className={`px-4 py-1.5 rounded-2xl text-xs font-bold ${isCompliant ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                {isCompliant ? 'COMPLIANT RANGE' : 'ADJUST TIME'}
              </div>
            </div>

            <button 
              onClick={resetToDefaults}
              className="px-4 py-2 text-sm border border-slate-300 rounded-2xl hover:bg-slate-50"
            >
              Reset to Defaults
            </button>
            <button 
              className="px-6 py-2.5 bg-slate-900 text-white rounded-2xl text-sm font-semibold hover:bg-black"
            >
              Save & Publish to Course
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">POI-DE Module Editor</h1>
            <p className="text-slate-600 mt-1">Drag to reorder • Click to edit • Adjust time allocation</p>
          </div>
          <div className="text-sm text-slate-500">
            Target: 30–35 hours classroom instruction
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Modules List - Draggable */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200 rounded-3xl p-2">
              <div className="px-4 py-3 text-xs font-semibold text-slate-500 tracking-wider flex justify-between">
                <div>MODULE ORDER</div>
                <div>TIME</div>
              </div>

              <div className="space-y-1">
                {modules.map((module, index) => (
                  <div
                    key={module.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDragEnd={handleDragEnd}
                    onClick={() => selectModule(module)}
                    className={`group flex items-center justify-between px-4 py-3.5 rounded-2xl cursor-move transition-all border ${
                      selectedModule?.id === module.id 
                        ? 'bg-orange-50 border-orange-200 shadow-sm' 
                        : 'bg-white border-transparent hover:bg-slate-50'
                    } ${draggedIndex === index ? 'opacity-50' : ''}`}
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="text-slate-400 group-hover:text-slate-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </div>
                      <div className="font-medium truncate">{module.name}</div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="font-mono text-sm text-slate-600 tabular-nums">
                        {(module.timeMinutes / 60).toFixed(1)}h
                      </div>
                      {module.statutoryTopics.length > 0 && (
                        <div className="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-medium">
                          {module.statutoryTopics.length} statutory
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 text-xs text-center text-slate-500">
              Drag modules to reorder the course flow. Changes are saved automatically in this demo.
            </div>
          </div>

          {/* Module Detail Editor */}
          <div className="lg:col-span-7">
            {selectedModule ? (
              <div className="bg-white border border-slate-200 rounded-3xl p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-sm text-orange-600 font-medium tracking-wider">MODULE {selectedModule.id}</div>
                    <h2 className="text-3xl font-semibold tracking-tight mt-1">{selectedModule.name}</h2>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">ALLOCATED TIME</div>
                    <div className="font-mono text-4xl font-semibold tabular-nums text-slate-900">
                      {(selectedModule.timeMinutes / 60).toFixed(1)}
                    </div>
                    <div className="text-xs text-slate-500 -mt-1">hours</div>
                  </div>
                </div>

                {/* Time Allocation Slider */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm mb-2">
                    <div className="font-medium">Time Allocation</div>
                    <div className="font-mono text-emerald-600">{selectedModule.timeMinutes} minutes</div>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="600"
                    step="15"
                    value={selectedModule.timeMinutes}
                    onChange={(e) => updateModuleTime(selectedModule.id, parseInt(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <div>30 min</div>
                    <div>10 hours</div>
                  </div>
                </div>

                {/* Description Editor */}
                <div className="mb-8">
                  <label className="block text-sm font-medium mb-2">Module Description</label>
                  <textarea
                    value={selectedModule.description}
                    onChange={(e) => updateModuleDescription(selectedModule.id, e.target.value)}
                    className="w-full h-28 border border-slate-200 rounded-2xl p-4 text-sm resize-y focus:outline-none focus:border-orange-300"
                    placeholder="Describe the learning objectives and key content..."
                  />
                </div>

                {/* Statutory Topics Linked */}
                {selectedModule.statutoryTopics.length > 0 && (
                  <div className="mb-6">
                    <div className="text-sm font-medium mb-3">Linked Statutory Requirements</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedModule.statutoryTopics.map((topic, idx) => (
                        <div 
                          key={idx}
                          className="px-4 py-2 bg-emerald-50 text-emerald-700 text-sm rounded-2xl border border-emerald-100 flex items-center gap-2"
                        >
                          {topic}
                          <span className="text-emerald-400">•</span>
                          <span className="text-xs font-mono">MANDATORY</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Integrated Lesson Content */}
                {selectedModule.lessons && selectedModule.lessons.length > 0 && (
                  <div className="mb-6">
                    <div className="text-sm font-medium mb-3 flex items-center gap-2">
                      Lesson Breakdown 
                      <span className="text-[10px] px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full font-medium">INTEGRATED FROM CURRICULUM</span>
                    </div>
                    <div className="space-y-3 max-h-[420px] overflow-auto pr-2">
                      {selectedModule.lessons.map((lesson, index) => (
                        <div key={index} className="border border-slate-200 rounded-2xl p-4 bg-slate-50">
                          <div className="flex justify-between items-start mb-2">
                            <div className="font-medium text-slate-900">{lesson.title}</div>
                            <div className="text-xs font-mono text-slate-500 bg-white px-2 py-0.5 rounded border">{lesson.duration}</div>
                          </div>
                          <ul className="text-sm text-slate-600 space-y-1 pl-4">
                            {lesson.keyPoints.map((point, i) => (
                              <li key={i} className="list-disc marker:text-orange-400">{point}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dynamic Content Loading */}
                <div>
                  <button
                    onClick={async () => {
                      if (!selectedModule) return;
                      
                      setIsLoadingContent(true);
                      setFullContent(null);

                      try {
                        const slug = `${selectedModule.id.toString().padStart(2, '0')}-${selectedModule.name.toLowerCase().replace(/\s+/g, '-')}`;
                        const res = await fetch(`/api/module-content/${slug}`);
                        
                        if (res.ok) {
                          const data = await res.json();
                          setFullContent(data.content);
                        } else {
                          setFullContent("Full curriculum content is available in course-builder/content/modules/. Dynamic loading is ready.");
                        }
                      } catch (error) {
                        setFullContent("Could not load content. Make sure the Markdown files exist in course-builder/content/modules/.");
                      } finally {
                        setIsLoadingContent(false);
                      }
                    }}
                    disabled={isLoadingContent}
                    className="w-full py-3 border border-orange-300 text-orange-700 rounded-2xl text-sm font-semibold hover:bg-orange-50 transition-colors disabled:opacity-50"
                  >
                    {isLoadingContent ? "Loading Content..." : "Load Full Curriculum Content from Markdown Files →"}
                  </button>

                  {/* Display loaded content */}
                  {fullContent && (
                    <div className="mt-4 border border-slate-200 rounded-2xl p-4 bg-slate-50 max-h-[400px] overflow-auto">
                      <div className="flex justify-between items-center mb-3">
                        <div className="text-sm font-semibold text-slate-700">Full Curriculum Content</div>
                        <button 
                          onClick={() => setFullContent(null)}
                          className="text-xs text-slate-500 hover:text-slate-700"
                        >
                          Close
                        </button>
                      </div>
                      <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
                        {fullContent}
                      </pre>
                    </div>
                  )}

                  <p className="text-xs text-center text-slate-500 mt-2">
                    Dynamically loads detailed lesson content from the approved curriculum library
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center text-slate-500">
                Select a module from the list to edit its details and time allocation.
              </div>
            )}
          </div>
        </div>

        {/* Summary Footer */}
        <div className="mt-8 flex justify-between items-center text-sm text-slate-600">
          <div>
            {modules.length} modules • {totalHours} total hours
          </div>
          <div className={isCompliant ? "text-emerald-600 font-medium" : "text-amber-600"}>
            {isCompliant 
              ? "✓ Within recommended classroom hour range for POI-DE compliance" 
              : "⚠ Time allocation outside typical 30–35 hour range"}
          </div>
        </div>
      </div>
    </div>
  );
}
