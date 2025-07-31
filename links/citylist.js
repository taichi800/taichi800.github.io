const cityZones = {
  'Honolulu': 'Pacific/Honolulu',
  'Papeete': 'Pacific/Tahiti',
  'Anchorage': 'America/Anchorage',
  'Los Angeles': 'America/Los_Angeles',
  'Vancouver': 'America/Vancouver',
  'Mexico City': 'America/Mexico_City',
  'Chicago': 'America/Chicago',
  'New York': 'America/New_York',
  'Lima': 'America/Lima',
  'Santiago': 'America/Santiago',
  'Halifax': 'America/Halifax',
  'Buenos Aires': 'America/Argentina/Buenos_Aires',
  'St. John\'s': 'America/St_Johns',
  'Azores': 'Atlantic/Azores',
  'London': 'Europe/London',
  'Accra': 'Africa/Accra',
  'Paris': 'Europe/Paris',
  'Berlin': 'Europe/Berlin',
  'Rome': 'Europe/Rome',
  'Copenhagen': 'Europe/Copenhagen',
  'Athens': 'Europe/Athens',
  'Cairo': 'Africa/Cairo',
  'Moscow': 'Europe/Moscow',
  'Baghdad': 'Asia/Baghdad',
  'Tehran': 'Asia/Tehran',
  'Dubai': 'Asia/Dubai',
  'Baku': 'Asia/Baku',
  'Tashkent': 'Asia/Tashkent',
  'Karachi': 'Asia/Karachi',
  'Delhi': 'Asia/Kolkata',
  'Kathmandu': 'Asia/Kathmandu',
  'Dhaka': 'Asia/Dhaka',
  'Yangon': 'Asia/Yangon',
  'Bangkok': 'Asia/Bangkok',
  'Jakarta': 'Asia/Jakarta',
  'Beijing': 'Asia/Shanghai',
  'Singapore': 'Asia/Singapore',
  'Perth': 'Australia/Perth',
  'Tokyo': 'Asia/Tokyo',
  'Seoul': 'Asia/Seoul',
  'Sydney': 'Australia/Sydney',
  'Auckland': 'Pacific/Auckland',
  'Namibia (historical)': null,
  'Cocos Islands': null,
  'Norfolk Island': null,
  'Line Islands': null
};

const manualOffsets = {
  'Namibia (historical)': 1.5,
  'Cocos Islands': 6.75,
  'Norfolk Island': 10.75,
  'Line Islands': 14
};

function getTimeForCity(city) {
  const now = new Date();
  const tz = cityZones[city];
  if (tz) {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(now);
  } else {
    const offset = manualOffsets[city];
    if (offset !== undefined) {
      const t = new Date(now.getTime() + offset * 60 * 60 * 1000);
      return t.toISOString().substring(11, 16);
    } else {
      return '--:--';
    }
  }
}

function updateCityList() {
  const list = document.getElementById('cityList');
  list.innerHTML = '';
  
  Object.keys(cityZones)
    .sort()
    .forEach(city => {
      const time = getTimeForCity(city);
      const div = document.createElement('div');
      div.className = 'city';
      div.innerHTML = `<span>${city}</span><span class="time">${time}</span>`;
      list.appendChild(div);
    });
}

setInterval(updateCityList, 1000);
updateCityList();
