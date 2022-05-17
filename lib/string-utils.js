/**
 * Takes the input String object and converts it to Title Case, e.g.
 * "sri lanka" becomes "Sri Lanka"
 * @param {String} str The string to convert to Title Case
 * @returns The string in Title Case
 */
export function titleCase(str) {
  return str.replace(/-/g, " ").replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

/**
 * Takes the input String object and converts it to kebab-case, e.g.
 * "Sri Lanka" becomes "sri-lanka".
 *
 * @param {String} str The string to convert to kebab-case
 * @returns The String in kebab-case
 */
export function kebabCase(str) {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");
}
