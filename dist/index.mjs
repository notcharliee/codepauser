// src/index.ts
function pause(milliseconds) {
  var dt = /* @__PURE__ */ new Date();
  while (/* @__PURE__ */ new Date() - dt <= milliseconds) {
  }
}
export {
  pause as default
};
