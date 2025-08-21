import React from 'react'

const CloudBG = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Soft blurred cloud blobs */}
      <div className="cloud bg-sky-400 w-64 h-64 top-10 -left-12 animate-float"></div>
      <div className="cloud bg-cyan-300 w-72 h-72 top-40 left-32 animate-float" style={{animationDelay:'1s'}}></div>
      <div className="cloud bg-sky-100 w-96 h-96 top-24 right-10 animate-float" style={{animationDelay:'2s'}}></div>
      <div className="cloud bg-cyan-200 w-80 h-80 bottom-10 left-10 animate-float" style={{animationDelay:'1.5s'}}></div>

      {/* Simple bird silhouette gliding across */}
      <svg className="absolute top-24 left-0 w-20 h-20 animate-bird opacity-80" viewBox="0 0 100 50" fill="none">
        <path d="M2,25 C20,0 30,0 50,25 C70,50 80,50 98,25" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" fill="none"/>
      </svg>
    </div>
  )
}

export default CloudBG
