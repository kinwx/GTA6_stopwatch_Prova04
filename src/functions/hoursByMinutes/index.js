const hoursByMinutes = () => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();

    const forMinutes = hours * 60;
    
    return minutes + forMinutes;
};

export { hoursByMinutes };