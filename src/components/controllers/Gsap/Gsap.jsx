import gsap from 'gsap';
import Flip from "gsap/dist/Flip";
import { useEffect } from 'react';

function Gsap() {
  useEffect(() => {
    gsap.registerPlugin(Flip);
  }, []);
}

export default Gsap;
