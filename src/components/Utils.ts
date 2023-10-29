// Scrolling to components based on Id
export const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }
  window.scrollTo({
    top: element?.offsetTop - 95,
    behavior: "smooth",
  });
};
