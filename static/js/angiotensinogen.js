function record() {
    let file;

    window.addEventListener("pagehide", () => {
        file = `Page was hidden.`;
        console.log(file);
    });

    window.addEventListener("pageshow", () => {
        file = `Page was shown.`;
        console.log(file);
    });

}

document.addEventListener("DOMContentLoaded", record);