var setTime = id => {
    setInterval(() => {
        const element = document.getElementById(id);
        element.innerHTML = new Date();
    }, 1000);
};
