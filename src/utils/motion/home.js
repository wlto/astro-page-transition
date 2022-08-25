import gsap from 'gsap';
import { animateNavigationIn, animateNavigationOut } from "@/components/ui/Navigation/Navigation.motion";

export const animateHomePageIn = ({ next }) => {
  const homeDescription = document.querySelector('.Home__description');

  const tl = gsap.timeline({ onComplete : next });
  tl
  .fromTo(
    homeDescription,
    { opacity : 0 },
    { opacity : 1, duration : 0.5 }
  )
  .add(animateNavigationIn(), 0.25);
};

export const animateHomePageOut = ({ next }) => {
  const homeDescription = document.querySelector('.Home__description');

  const tl = gsap.timeline({ onComplete : next });
  tl
  .fromTo(
    homeDescription,
    { opacity : 1 },
    { opacity : 0, duration : 0.5 }
  )
  .add(animateNavigationOut(), 0.25);
};
