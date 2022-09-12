import { ADDRESS } from "./constant";

export function isAddr(addr) {
  if (
    addr &&
    addr.length &&
    addr.length == 42 &&
    addr.substring(0, 2) === "0x" &&
    addr !== ADDRESS.ZERO
  )
    return !0;
  return !1;
}

export function formatUp(v, dec) {
  console.log("formatUp v:", v);
  return (v * 10 ** (dec || 18)).toLocaleString("fullwide", {
    useGrouping: !1,
  });
}

export function formatDown(v, dec) {
  console.log("formatDown v:", v, dec);
  return v / 10 ** (dec || 18);
}

export function isEmpty(v) {
  const n = parseFloat(v);
  console.log("### value:", n);
  return n == 0 || `${n}` == "NaN";
}
