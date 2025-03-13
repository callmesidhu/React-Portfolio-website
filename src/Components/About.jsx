import React from 'react';

export default function About() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white p-6 sm:p-12 lg:p-28">
      <div className="bg-black rounded-lg w-[70rem] min-h-[30rem] h-auto shadow-lg border border-violet-900 bg-gray-900">
        <div className="flex justify-between items-center h-10 px-4 border-b border-gray-600">
          <div className="flex space-x-2">
            <span className="w-3.5 h-3.5 rounded-full bg-red-500 border border-red-700"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-yellow-500 border border-yellow-700"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-green-500 border border-green-700"></span>
          </div>
          <div className="text-sm font-semibold">root@XyphX-OS:~/callmesidhu</div>
          <div className="w-14"></div>
        </div>
        <div className="p-4 text-sm font-mono">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-green-500 clip-path-triangle"></span>
            <span className="text-cyan-400">XyphX-OS</span>
            <span className="text-blue-400">git:</span>
            <span className="text-blue-400">(</span>
            <span className="text-red-400">master</span>
            <span className="text-blue-400">)</span>
            <span className="ml-2">git log</span>
          </div>
          <div className="mt-2">
            <span className="text-red-400">e23h217</span>
            <span> - (</span>
            <span className="text-yellow-400">HEAD - master, origin/master</span>
            <span>) Vercel Deployment Bug Fixed</span>
          </div>
          <div className="mt-1">
            <span className="text-red-400">g43e341</span>
            <span> - Addded Skills Section </span>
            <span className="text-green-400 ml-2">(4 weeks ago)</span>
            <span className="text-blue-400"> &lt;cwattrus&gt;</span>
          </div>
          <div className="flex items-center mt-2 space-x-2">
            <span className="w-2 h-2 bg-green-500 clip-path-triangle"></span>
            <span className="text-cyan-400">XyphX-OS</span>
            <span className="text-blue-400">git:</span>
            <span className="text-blue-400">(</span>
            <span className="text-red-400">master</span>
            <span className="text-blue-400">)</span>
            <span className="ml-2">callmesidhu -la</span>
            <span className="w-1 h-4 bg-purple-500 animate-pulse"></span>
          </div>
          <div>
                
          </div>
        </div>
      </div>
    </div>
  );
}
