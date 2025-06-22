export function getFirstWord(str) {
  if (!str || typeof str !== "string") return "";
  return str.split(" ")[0];
}
