/**
 * Throttles the execution of a function to be invoked at most once per specified delay period.
 *
 * @template T - The type of the throttled function.
 * @param {T} func - The function to be throttled.
 * @param {number} [delay=50] - The delay period in milliseconds. Default value is 50ms.
 * @returns {(...args: Parameters<T>) => void} - The throttled version of the original function.
 *
 * @example
 * // Throttle the logMessage function to be invoked at most once every 500ms
 * function logMessage(message) {
 *   console.log(message);
 * }
 *
 * const throttledLog = throttle(logMessage, 500);
 *
 * throttledLog("Hello"); // Logs "Hello"
 * throttledLog("World"); // No output (throttled within 500ms)
 */

function throttle<T extends (...args: any[]) => void>(
  func: T,
  delay: number = 50
): (...args: Parameters<T>) => void {
  let isThrottled = false;
  let lastArgs: Parameters<T> | null = null;

  function execute() {
    if (lastArgs) {
      func(...lastArgs);
      lastArgs = null;
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
        if (lastArgs) {
          execute();
        }
      }, delay);
    }
  }

  return function throttled(...args: Parameters<T>) {
    if (isThrottled) {
      lastArgs = args;
    } else {
      func(...args);
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
        if (lastArgs) {
          execute();
        }
      }, delay);
    }
  };
}

export default throttle;
