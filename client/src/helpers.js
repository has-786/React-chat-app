export const getCurrentTime = () => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    h = parseInt(h / 10) === 0 ? "0" + h : h;
    m = parseInt(m / 10) === 0 ? "0" + m : m;
    return h + ":" + m;
}