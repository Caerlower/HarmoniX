
import React, { useEffect, useRef } from 'react';

const MusicVisualizer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create and render bars
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const barCount = Math.floor(containerWidth / 12);
    
    container.innerHTML = '';
    
    for (let i = 0; i < barCount; i++) {
      const bar = document.createElement('div');
      const randomHeight = Math.floor(Math.random() * 80) + 20; // 20-100% height
      const animationDelay = (i / barCount) * 2;
      
      bar.className = 'visualizer-bar';
      bar.style.height = `${randomHeight}%`;
      bar.style.animationDelay = `${animationDelay}s`;
      
      if (i % 4 === 0) {
        bar.classList.add('animate-wave-1');
      } else if (i % 4 === 1) {
        bar.classList.add('animate-wave-2');
      } else if (i % 4 === 2) {
        bar.classList.add('animate-wave-3');
      } else {
        bar.classList.add('animate-wave-1');
      }
      
      container.appendChild(bar);
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-40 flex items-end justify-center space-x-1"
    ></div>
  );
};

export default MusicVisualizer;
