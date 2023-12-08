import { hoursByMinutes } from "../hoursByMinutes";

const timeLeft = () => {
    const time = 1440 - hoursByMinutes();
    const hours = ~~(time / 60);
    const minutes = time - (hours * 60);

    const timeFormat = `
        ${hours === 0 ? '' : `${hours}h`}
        ${minutes === 0 ? '' : `${minutes}min`}
    `;
    return  timeFormat;
};

export { timeLeft };