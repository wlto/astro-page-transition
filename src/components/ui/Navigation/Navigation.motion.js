import gsap from "gsap";

export const animateNavigationIn = () => {
  const navigationItems = document.querySelectorAll('.Navigation__item');

  const tl = gsap.timeline();
  tl.fromTo(
    navigationItems,
    { opacity : 0 },
    { opacity : 1, duration: 0.5, stagger : 0.2 }
  );

  return tl;
};

export const animateNavigationOut = () => {
  const navigationItems = document.querySelectorAll('.Navigation__item');

  const tl = gsap.timeline();
  tl.fromTo(
    [...navigationItems].reverse(),
    { opacity : 1 },
    { opacity : 0, duration: 0.5, stagger : 0.2 }
  );

  return tl;
};