//监听屏幕大小重置根节点font-size
setSize();
window.addEventListener("resize", setSize, false); //监听屏幕缩放
window.addEventListener("orientationchange", setSize, false);  //监听屏幕竖行
function setSize() {
    var html = document.getElementsByTagName("html")[0];
    var width = html.getBoundingClientRect().width; //视口宽度
    width > 650 && (width = 650);
    html.style.fontSize = width / 10 + "px"
};