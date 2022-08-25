import gsap from "gsap";
import { Flip } from 'gsap/dist/Flip';
import { animateNavigationIn, animateNavigationOut } from "@/components/ui/Navigation/Navigation.motion";

export const animateTestPageIn = ({ next }) => {
  const testDescription = document.querySelector('.Test__description');
  const mainImage = document.querySelector('.Main__image');
  const testImage = document.querySelector('.Test__image');

  const tl = gsap.timeline({ onComplete : next });
  tl
  .call(() => {
    Flip.fit(
      mainImage,
      testImage,
      {
        duration: 0.4,
        ease: "power1.inOut"
      }
    );
  })
  .fromTo(
    testDescription,
    { opacity : 0 },
    { opacity : 1, duration : 0.5 },
    0
  )
  .add(animateNavigationIn(), 0.25);
};

export const animateTestPageOut = ({ next }) => {
  const testDescription = document.querySelector('.Test__description');

  const tl = gsap.timeline({ onComplete : next });
  tl
  .fromTo(
    testDescription,
    { opacity : 1 },
    { opacity : 0, duration : 0.5 }
  )
  .add(animateNavigationOut(), 0.25);
};
