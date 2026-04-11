'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Start offscreen to prevent flash before first move
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth springs: Inner follows instantly, Outer has a slight pleasing delay
  const cursorXInner = useSpring(mouseX, { damping: 40, stiffness: 800, mass: 0.1 });
  const cursorYInner = useSpring(mouseY, { damping: 40, stiffness: 800, mass: 0.1 });

  const cursorXOuter = useSpring(mouseX, { damping: 25, stiffness: 300, mass: 0.5 });
  const cursorYOuter = useSpring(mouseY, { damping: 25, stiffness: 300, mass: 0.5 });
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if it's a touch device or small screen
    const checkMobile = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 1024;
      setIsVisible(!(isTouch || isSmallScreen));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `body, a, button { cursor: none !important; }`}} />
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-[#CCFF00] rounded-full pointer-events-none z-[99999] shadow-[0_0_10px_rgba(204,255,0,0.5)] flex items-center justify-center box-border mix-blend-difference"
        style={{
          x: cursorXOuter,
          y: cursorYOuter,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: isHovering ? 1.5 : isClicking ? 0.8 : 1,
          backgroundColor: isHovering ? 'rgba(204, 255, 0, 0.1)' : 'rgba(204, 255, 0, 0)',
          borderWidth: isHovering ? '0px' : '1px'
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      />

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#CCFF00] rounded-full pointer-events-none z-[99999] shadow-[0_0_5px_#CCFF00] mix-blend-difference"
        style={{
          x: cursorXInner,
          y: cursorYInner,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: isHovering ? 4 : isClicking ? 0.5 : 1,
          opacity: isHovering ? 0.8 : 1
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      />
    </>
  );
}