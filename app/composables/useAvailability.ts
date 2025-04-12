export function useAvailability() {
  const isAvailable = ref(false);

  let interval: number;

  function checkAvailability() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    isAvailable.value = day >= 1 && day <= 6 && hour >= 9 && hour < 19;
  }

  onMounted(() => {
    checkAvailability();

    interval = window.setInterval(checkAvailability, 300000);
  });

  onUnmounted(() => clearInterval(interval));

  return { isAvailable };
}
