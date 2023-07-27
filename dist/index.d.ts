/**
 * Pauses your code for a certain amount of time.
 * ```js
 * console.log('Hello!') // Executes instantly.
 * pause(3000) // Will pause execution for 3 seconds.
 * console.log('Goodbye!') // Executes after 3 seconds.
 * ```
 *
 * @param milliseconds How long the code should pause for.
 * @author https://github.com/notcharliee
 */
declare function pause(milliseconds: number): void;

export { pause as default };
