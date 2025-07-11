// const querySelector = <K extends Element>(className: string): K => {
//   return document.querySelector(className)!;
// };

const qs = <T extends Element>(sel: string): T => {
  const el = document.querySelector<T>(sel);
  if (!el) throw new Error(`missing element ${el}`);
  return el;
};

const getSeconds = (minutes: number): number => {
  return minutes * 60;
};

export { qs, getSeconds };
