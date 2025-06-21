export const formatTime = (sec) => {
  const hrs = Math.floor(sec / 3600);
  const min = Math.floor((sec % 3600) / 60);
  const rem = sec % 60;

  return `${hrs.toString().padStart(2, "0")}:${min
    .toString()
    .padStart(2, "0")}:${rem.toString().padStart(2, "0")}`;
};
