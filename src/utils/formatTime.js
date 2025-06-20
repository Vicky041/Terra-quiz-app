export const formatTime = (sec) => {
  const min = Math.floor(sec / 60);
  const rem = sec % 60;
  return `${min.toString().padStart(2, "0")}:${rem
    .toString()
    .padStart(2, "0")}`;
};
