import { currentMonth } from "../currentMonth";

const daysLeft = () => {
  const currentDay = new Date().getDate();
  // por favor, desconsidera que próx ano é bissexto 😔🙏🏽
  if (currentMonth() === 2) return 28 - currentDay;
  
  if ([2, 4, 6, 9, 11].includes(currentMonth())) {
    return 30 - currentDay;
  } else {
    return 31 - currentDay;
  };
};

export { daysLeft };
