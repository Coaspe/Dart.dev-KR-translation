export const scrollToID = (id: string) => {
  const element = document.getElementById(id);
  if (document && element) {
    console.log(element.getBoundingClientRect().top);

    const tt = element.getBoundingClientRect().top + window.pageYOffset;
    +40;
    window.scrollTo({ top: tt, behavior: "smooth" });
    // element.scrollIntoView({ behavior: "smooth" });
  }
};
