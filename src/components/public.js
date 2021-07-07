window.cancelAnimationFrame = (function () {
  return (
    window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.oCancelAnimationFrame ||
    window.msCancelAnimationFrame ||
    function (id) {
      return window.clearTimeout(id);
    }
  );
})();
window.requestAnimationFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    }
  );
})();

export default function dataWarm(modelValue) {
  if (typeof modelValue !== "boolean" && modelValue.length > 100) {
    console.warn(
      `数据达到了${modelValue.length}条有点多哦~,可能会造成部分老旧浏览器卡顿。`
    );
  }
}
