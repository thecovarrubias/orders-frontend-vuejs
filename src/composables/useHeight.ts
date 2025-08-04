import { ref, onMounted, onUnmounted } from "vue";
import type { Ref } from "vue";

const useHeight = (): { height: Ref<number> } => {
  const height = ref<number>(0);

  const resizeHeight = (): void => {
    height.value = window.innerHeight;
  };

  onMounted(() => {
    resizeHeight();
    window.addEventListener("resize", resizeHeight);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", resizeHeight);
  });

  return { height };
};

export default useHeight;
