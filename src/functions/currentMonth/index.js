const currentMonth = () => {
    const month = new Date().getMonth();
    if(month !== 12) {
      return month + 1;
    } else {
      return 1;
    };
};

export { currentMonth };