import { ref } from "vue";

const useIntersectionEntry = () => {
  const observedElement = ref("");
  const elementClass = ref("");

  const interOptions = (rootPar, thresholdPar) => {
    return {
      root: rootPar,
      threshold: thresholdPar,
    };
  };
  const interCallback = function (entries) {
    if (entries) {
      const [entry] = entries;
      if (entry.isIntersecting) {
        observedElement.value.classList.add(elementClass.value);
      }
    }
  };
  const observer = new IntersectionObserver(interCallback, interOptions);
  return {
    observedElement,
    elementClass,
    interOptions,
    interCallback,
    observer,
  };
};
export default useIntersectionEntry;
