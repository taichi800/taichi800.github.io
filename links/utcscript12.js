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
  'Namibia (historical)': null,
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
  'Cocos Islands': null,
  'Bangkok': 'Asia/Bangkok',
  'Jakarta': 'Asia/Jakarta',
  'Beijing': 'Asia/Shanghai',
  'Singapore': 'Asia/Singapore',
  'Perth': 'Australia/Perth',
  'Tokyo': 'Asia/Tokyo',
  'Seoul': 'Asia/Seoul',
  'Sydney': 'Australia/Sydney',
  'Norfolk Island': null,
  'Auckland': 'Pacific/Auckland',
  'Line Islands': null
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
    const manualOffsets = {
      'Namibia (historical)': 1.5,
      'Cocos Islands': 6.75,
      'Norfolk Island': 10.75,
      'Line Islands': 14
    };
    const offset = manualOffsets[city];
    if (offset !== undefined) {
      const t = new Date(now.getTime() + offset * 60 * 60 * 1000);
      return t.toISOString().substring(11, 16);
    } else {
      return '--:--';
    }
  }
}

function groupCitiesByUTC() {
  const grouped = {};
  Object.keys(cityZones).forEach(city => {
    const tz = cityZones[city];
    let offsetLabel;

    if (tz) {
      const now = new Date();
      const localTime = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZoneName: 'short'
      }).formatToParts(now);
      const part = localTime.find(p => p.type === 'timeZoneName');
      offsetLabel = part ? part.value.replace(/^GMT/, 'UTC') : 'UTC?';
    } else {
      const manualOffsets = {
        'Namibia (historical)': '+1.5',
        'Cocos Islands': '+6.75',
        'Norfolk Island': '+10.75',
        'Line Islands': '+14'
      };
      offsetLabel = 'UTC' + manualOffsets[city];
    }

    if (!grouped[offsetLabel]) grouped[offsetLabel] = [];
    grouped[offsetLabel].push(city);
  });
  return grouped;
}

function updateTimeGrid() {
  const grid = document.getElementById('timeGrid');
  grid.innerHTML = '';

  const groups = groupCitiesByUTC();
  Object.keys(groups)
    .sort((a, b) => parseFloat(a.replace('UTC', '')) - parseFloat(b.replace('UTC', '')))
    .forEach(offset => {
      const col = document.createElement('div');
      col.className = 'column';
      const firstCity = groups[offset][0];
      const nowTime = getTimeForCity(firstCity);
      col.innerHTML = `<h2>${offset}<br><span class="time">${nowTime}</span></h2>`;
      groups[offset].forEach(city => {
        const time = getTimeForCity(city);
        const row = document.createElement('div');
        row.className = 'city';
        row.innerHTML = `<span>${city}</span><span class="time">${time}</span>`;
        col.appendChild(row);
      });
      grid.appendChild(col);
    });
}

setInterval(updateTimeGrid, 1000);
updateTimeGrid();
