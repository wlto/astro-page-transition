import { useEffect } from "react";
import { animateHomePageIn, animateHomePageOut } from '@/utils/motion/home';
import { animateTestPageIn, animateTestPageOut } from '@/utils/motion/test';

// https://stackoverflow.com/questions/73448278/have-i-lost-my-mind-or-are-these-functional-components-using-invalid-hook-calls
export default function EventEmitterClient() {
  useEffect(() => {
    window.ee.on('transition-out', ({ next, from, to }) => {
      if (from === '/') {
        animateHomePageOut({ next });
      } else if (from === '/test') {
        animateTestPageOut({ next });
      }
    });

    window.ee.on('transition-in', ({ next, from, to }) => {
      if (to === '/') {
        animateHomePageIn({ next });
      } else if (to === '/test') {
        animateTestPageIn({ next });
      }
    });
  }, []);

  return null;
};
