import { useEffect } from "react";
import {
  animateHomePageIn,
  animateHomePageOut
} from "../../utils/motion/home";
import {
  animateTestPageIn,
  animateTestPageOut
} from "../../utils/motion/test";

const EventEmitterClient = () => {
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

export default EventEmitterClient;
