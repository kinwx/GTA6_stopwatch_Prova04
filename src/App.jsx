import { Background, Days, Logo, SectionStyled, TextLabels, Time, Title } from "./style/style";
import { useEffect, useState } from "react";
import { sleep } from "./functions/sleep";
import { timeLeft } from "./functions/timeLeft";
import { currentMonth } from "./functions/currentMonth";
import { daysLeft } from "./functions/daysLeft";
import palmeiras from './assets/palmeiras.png';
import logo from './assets/rockstar-logo.png';

// npm start == npm run dev
function App() {
  const [ stopwatch, setStopwatch ] = useState({
    seconds: null,
    hours: null,
    days: null,
    months: null,
    years: null,
  });
  const reversTime = Array.from({length: 60}, (v, i) => i).reverse();

  const handleStopwatch = (key, value) => {
    setStopwatch((prev) => {
      return {...prev, [key]: value};
    });
  };

  useEffect(() => {
    const second = new Date().getSeconds();
    const currentYear = new Date().getFullYear();
    
    handleStopwatch('seconds', reversTime[second]);
    handleStopwatch('hours', timeLeft());
    handleStopwatch('days', daysLeft());
    handleStopwatch('months', 12 - currentMonth());
    handleStopwatch('years', (2024 - currentYear));
  }, []);

  useEffect(() => {
    (stopwatch.seconds === 59) &&
      handleStopwatch('hours', timeLeft());
  }, [stopwatch.seconds]);

  useEffect(() => {
    (async () => {
      await sleep(1000);
      const second = new Date().getSeconds();
      handleStopwatch('seconds', reversTime[second]);
    })();
  }, [stopwatch.seconds]);

  return (
    <SectionStyled>
      <TextLabels>
        <Logo src={logo} alt="rockstar_logo" />
        <Title>Coming Soon, 2025.</Title>
        <small>TIME LEFT:</small>
        <Days>
          {(stopwatch.years !== 0) &&
            <span>{stopwatch.years} {(stopwatch.years === 1 ? 'year' : 'years')},</span>
          }
          {(stopwatch.months !== 0) &&
            <span>{stopwatch.months} {(stopwatch.months === 1 ? 'month' : 'months')},</span>
          }
          {(stopwatch.days !== 0) &&
            <span>{stopwatch.days} {(stopwatch.days === 1 ? 'day' : 'days')}.</span>
          }
        </Days>
        <Time>{stopwatch.hours}{stopwatch.seconds}sec.</Time>
      </TextLabels>

      <Background>
        <img src={palmeiras} alt="palmeiras_image" />
        <img src={palmeiras} alt="palmeiras_image" />
      </Background>
    </SectionStyled>
  );
};

export default App;
