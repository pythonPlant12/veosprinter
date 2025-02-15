import { onMounted, onUnmounted, ref } from "vue";

export function useIntersectionObserver(options = { threshold: 0.1 }) {
  const elements = ref([]);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-component");
        }
      });
    }, options);

    elements.value.forEach((element) => {
      if (element.$el) {
        observer?.observe(element.$el);
      }
    });
  });

  onUnmounted(() => {
    elements.value.forEach((element) => {
      if (element.$el) {
        observer?.unobserve(element.$el);
      }
    });
    observer?.disconnect();
  });

  return {
    elements,
  };
}
