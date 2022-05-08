export const scrollToID = (id: string) => {
  const element = document.getElementById(id);
  if (document && element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
