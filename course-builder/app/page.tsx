import Link from 'next/link';

export default function CourseBuilderHome() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="max-w-2xl text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-orange-500 rounded-3xl flex items-center justify-center">
            <span className="text-4xl font-bold">TD</span>
          </div>
        </div>
        
        <h1 className="text-6xl font-semibold tracking-tighter mb-4">Course Builder</h1>
        <p className="text-2xl text-slate-400 mb-8">Texas DriveEd • TDLR-Compliant Platform</p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
          <Link 
            href="/course-builder" 
            className="px-6 py-3.5 bg-white text-slate-900 rounded-3xl font-semibold text-base hover:bg-orange-50 transition-colors flex items-center justify-center gap-2"
          >
            Required Topics Dashboard
          </Link>
          
          <Link 
            href="/course-builder/modules" 
            className="px-6 py-3.5 border border-white/70 hover:bg-white/10 rounded-3xl font-semibold text-base transition-colors flex items-center justify-center gap-2"
          >
            POI-DE Module Editor
          </Link>

          <a 
            href="/prototype/index.html" 
            className="px-6 py-3.5 border border-white/70 hover:bg-white/10 rounded-3xl font-semibold text-base transition-colors flex items-center justify-center gap-2"
          >
            View Old Prototype
          </a>
        </div>
        
        <p className="mt-8 text-sm text-slate-400 max-w-md mx-auto">
          Self-contained TDLR-compliant Course Builder with dynamic content loading from approved curriculum files.
        </p>
      </div>
    </div>
  );
}
