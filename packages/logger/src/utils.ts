const checkLength = (num: number) =>
  String(num).length === 1 ? `0${num}` : `${num}`;

export const getTime = () => {
  const date = new Date();
  const values = [date.getHours(), date.getMinutes(), date.getSeconds()];

  return values.map(checkLength).join(":");
};
