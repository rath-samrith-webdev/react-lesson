
/**
 * @Impure example
 * * This here will return different result meaning the component will
 * * change content when being rendered.
 * * let count = 0;
 * * const Message = () => {
 * *    count++;
 * *    return <div>Count {count}</div>;
 * * }
 * @returns 
 */

/**
 * @Pure example 
 * * Pure meaning that the component returns the same value no matter how 
 * * many time you render it.
 * @returns 
 */
const Message = () => {
  let count = 0;
  count++;
  return <div>Count {count}</div>;
};
export default Message;
