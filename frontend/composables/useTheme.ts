export const useTheme = () => {
  const colorMode = useColorMode();

  const checkSystemTheme = (): boolean => {
    if (import.meta.client) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  };

  const updateTheme = (preference: string) => {
    if (import.meta.client) {
      if (
        preference === "dark" ||
        (preference === "system" && checkSystemTheme())
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  // Watch for color mode preference changes
  watch(() => colorMode.preference, updateTheme, { immediate: true });

  // Watch for system theme changes
  onMounted(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (colorMode.preference === "system") {
        if (e.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    onUnmounted(() => {
      mediaQuery.removeEventListener("change", handleChange);
    });
  });

  return {
    updateTheme,
    checkSystemTheme,
    colorMode,
  };
};
