'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll();

  const totalFrames = 120;
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 0; i < totalFrames; i++) {
        const img = new Image();
        const frameStr = String(i).padStart(3, '0');
        img.src = `/sequence/frame_${frameStr}_delay-0.066s.png`;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === totalFrames) {
            setLoaded(true);
          }
        };
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = images[index];
    if (!img) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    ctx.clearRect(0, 0, width, height);

    const imgRatio = img.width / img.height;
    const canvasRatio = width / height;

    let dWidth, dHeight, dx, dy;

    if (imgRatio > canvasRatio) {
      dHeight = height;
      dWidth = height * imgRatio;
      dx = (width - dWidth) / 2;
      dy = 0;
    } else {
      dWidth = width;
      dHeight = width / imgRatio;
      dx = 0;
      dy = (height - dHeight) / 2;
    }

    ctx.drawImage(img, dx, dy, dWidth, dHeight);
  }, [images]);

  useMotionValueEvent(frameIndex, 'change', (latest) => {
    drawFrame(Math.floor(latest));
  });

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }

      const currentIndex = Math.floor(frameIndex.get());
      drawFrame(currentIndex);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [images, frameIndex, loaded, drawFrame]);

  useEffect(() => {
    if (loaded && images.length > 0) {
      drawFrame(0);
    }
  }, [loaded, images, drawFrame]);

  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full object-cover" />
    </div>
  );
}
