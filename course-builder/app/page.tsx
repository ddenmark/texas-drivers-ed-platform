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
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/course-builder" 
            className="px-8 py-4 bg-white text-slate-900 rounded-3xl font-semibold text-lg hover:bg-orange-50 transition-colors flex items-center justify-center gap-3"
          >
            Required Topics Dashboard →
          </Link>
          
          <Link 
            href="/course-builder/modules" 
            className="px-8 py-4 border border-white/70 hover:bg-white/10 rounded-3xl font-semibold text-lg transition-colors flex items-center justify-center gap-3"
          >
            POI-DE Module Editor →
          </Link>
        </div>
        
        <p className="mt-8 text-sm text-slate-500 max-w-md mx-auto">
          Production Next.js implementation. The Required Topics dashboard enforces all 15 statutory mandates 
          from Texas Education Code Chapter 1001 §§102–1101 with full audit logging.
        </p>
      </div>
    </div>
  );
}
