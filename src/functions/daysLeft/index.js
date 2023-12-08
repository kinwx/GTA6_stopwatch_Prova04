import { currentMonth } from "../currentMonth";

const daysLeft = () => {
  const currentDay = new Date().getDate();
  if (currentMonth() === 2) return 29 - currentDay;
  
  if ([2, 4, 6, 9, 11].includes(currentMonth())) {
    return 30 - currentDay;
  } else {
    return 31 - currentDay;
  };
};

export { daysLeft };
