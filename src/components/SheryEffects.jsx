import { useEffect } from 'react';

const SheryEffects = () => {
  useEffect(() => {
    const initShery = async () => {
      try {
        // Dynamic import to avoid SSR issues
        const Shery = (await import('sheryjs')).default;
        
        // Initialize mouse follower
        Shery.mouseFollower({
          ease: "cubic-bezier(0.23, 1, 0.320, 1)",
          duration: 1,
        });

        // Add image effects if needed
        // Shery.imageEffect(".img", {
        //   style: 5,
        //   config: {
        //     a: { value: 2, range: [0, 30] },
        //     b: { value: 0.75, range: [-1, 1] },
        //     aspect: { value: 0.7272695035460993 },
        //     gooey: { value: true },
        //     infiniteGooey: { value: false },
        //     durationOut: { value: 1, range: [0.1, 5] },
        //     durationIn: { value: 1.5, range: [0.1, 5] },
        //     displaceAmount: { value: 0.5 },
        //     masker: { value: false },
        //     maskVal: { value: 1.23, range: [1, 5] },
        //     scrollType: { value: 0 },
        //     geoVertex: { range: [1, 64], value: 1 },
        //     noEffectGooey: { value: true },
        //     onMouse: { value: 0 },
        //     noise_speed: { value: 0.84, range: [0, 10] },
        //     metaball: { value: 0.44, range: [0, 2] },
        //     discard_threshold: { value: 0.5, range: [0, 1] },
        //     antialias_threshold: { value: 0, range: [0, 0.1] },
        //     noise_height: { value: 0.38, range: [0, 2] },
        //     noise_scale: { value: 8.4, range: [0, 100] },
        //   },
        //   gooey: true,
        // });

      } catch (error) {
        console.warn('SheryJS initialization failed:', error);
      }
    };

    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(initShery, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return null; // This component doesn't render anything
};

export default SheryEffects;