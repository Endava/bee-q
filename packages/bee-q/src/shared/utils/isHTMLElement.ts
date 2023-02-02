/**
 * Check if value is the HTMLElement defined by tag
 * @param target the value to be check
 * @param tag valid HTMLElement
 * @returns {boolean} true if the target nodeName is the tag
 */
export const isHTMLElement = <T extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap>(
  target: unknown,
  tag: T,
): target is HTMLElementTagNameMap[T] => {
  /* istanbul ignore next we cannot create an instance of Node usign jsdom */
  return target instanceof Node && target.nodeName.toLowerCase() === tag;
};
