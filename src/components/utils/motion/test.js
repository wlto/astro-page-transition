import gsap from "gsap";
import { animateNavigationIn, animateNavigationOut } from "../../ui/Navigation/Navigation.motion";

export const animateTestPageIn = ({ next }) => {
  const testDescription = document.querySelector('.Test__description');
  const navigation = document.querySelector('.Navigation');

  const tl = gsap.timeline({ onComplete : next });
  tl
  .fromTo(
    testDescription,
    { opacity : 0 },
    { opacity : 1, duration : 0.5 },
  )
  .add(animateNavigationIn(), 0.25);
};

export const animateTestPageOut = ({ next }) => {
  const testDescription = document.querySelector('.Test__description');
  const navigation = document.querySelector('.Navigation');

  const tl = gsap.timeline({ onComplete : next });
  tl
  .fromTo(
    testDescription,
    { opacity : 1 },
    { opacity : 0, duration : 0.5 },
  )
  .add(animateNavigationOut(), 0.25);
};
