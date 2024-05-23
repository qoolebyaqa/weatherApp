const wmoWeatherCodes = {
  0: 'Ясно',
  1: 'Ясно',
  2: 'Ясно',
  3: 'Ясно',
  45: 'Пасмурно',
  48: 'Пасмурно',
  51: 'Небольшой дождь и солнце',
  53: 'Небольшой дождь и солнце',
  55: 'Небольшой дождь и солнце',
  56: 'Небольшой дождь и солнце',
  57: 'Небольшой дождь и солнце',
  61: 'Небольшой дождь',
  63: 'Небольшой дождь',
  65: 'Небольшой дождь',
  66: 'Дождь',
  67: 'Дождь',
  71: 'Снег',
  73: 'Снег',
  75: 'Снег',
  77: 'Снег',
  80: 'Дождь',
  81: 'Дождь',
  82: 'Дождь',
  85: 'Снег',
  86: 'Снег',
  95: 'Шторм',
  96: 'Шторм',
  99: 'Шторм',
};

export const MONTHS = {
  1: "Янв",
  2: "Фев",
  3: "Мар",
  4: "Апр",
  5: "Май",
  6: "Июн",
  7: "Июл",
  8: "Авг",
  9: "Сен",
  10: "Окт",
  11: "Нояб",
  12: "Дек"
}

export function windDirectionDefine(number) {
  if (number >= 0 && number <= 45) {
    return 'север';
  } else if (number > 45 && number <= 90) {
    return 'северо-восток';
  } else if (number > 90 && number <= 135) {
    return 'восток';
  } else if (number > 135 && number <= 180) {
    return 'юго-восток';
  } else if (number > 180 && number <= 225) {
    return 'юг';
  } else if (number > 225 && number <= 270) {
    return 'юго-запад';
  } else if (number > 270 && number <= 315) {
    return 'запад';
  } else if (number > 315 && number <= 360) {
    return 'северо-запад';
  } else {
    return '';
  }
}

export function toDefineWeekDay(string) {
  const numberofDayinWeek = new Date(string).getDay();
  switch(numberofDayinWeek) {
    case 0: return 'Вс';
    case 1: return 'Пн';
    case 2: return 'Вт';
    case 3: return 'Ср';
    case 4: return 'Чт';
    case 5: return 'Пт';
    case 6: return 'Сб';

  }
}

export function typeOfWindDefine(number) {
  if(number <= 0.2) {
    return 'Штиль';
  }
  if(number <= 1.5) {
    return 'Тихий';
  }
  if(number <= 3.3) {
    return 'Легкий';
  }
  if(number <= 5.4) {
    return 'Слабый';
  }
  if(number <= 7.9) {
    return 'Умеренный';
  }
  if(number <= 10.7) {
    return 'Свежий';
  }
  if(number <= 13.8) {
    return 'Сильный';
  }
  if(number <= 17.1) {
    return 'Крепкий';
  }
  if(number <= 20.7) {
    return 'Очень крепкий';
  }
  if(number <= 24.4) {
    return 'Шторм';
  }
  if(number <= 28.4) {
    return 'Сильный шторм';
  }
  if(number <= 32.6) {
    return 'Жестокий шторм';
  }
  if(number > 32.6) {
    return 'Ураган';
  }
}
export function createSevenDays(obj) {
  return obj.daily.time.map((value, index) => {
    return {
      time: value,
      tempmax: obj.daily.temperature_2m_max[index],
      tempmin: obj.daily.temperature_2m_min[index],
      weather: wmoWeatherCodes[obj.daily.weather_code[index]],
    };
  });
}
