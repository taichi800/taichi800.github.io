const cityZones = {
  // Americas (unchanged as per request)
  'Honolulu': 'Pacific/Honolulu',            // UTC−10
  'Papeete': 'Pacific/Tahiti',               // UTC−10
  'Anchorage': 'America/Anchorage',          // UTC−9
  'Los Angeles': 'America/Los_Angeles',      // UTC−8
  'Vancouver': 'America/Vancouver',
  'Mexico City': 'America/Mexico_City',      // UTC−6
  'Chicago': 'America/Chicago',
  'New York': 'America/New_York',            // UTC−5
  'Lima': 'America/Lima',
  'Santiago': 'America/Santiago',            // UTC−4
  'Halifax': 'America/Halifax',
  'Buenos Aires': 'America/Argentina/Buenos_Aires',
  'St. John\'s': 'America/St_Johns',         // UTC−3.5
  'Azores': 'Atlantic/Azores',               // UTC−1

  // UTC 0 to UTC+14
  'Accra': 'Africa/Accra',                   // UTC+0
  'London': 'Europe/London',               // UTC+1
  'Paris': 'Europe/Paris',             // UTC+2
  'Addis Ababa': 'Africa/Addis_Ababa',       // UTC+3
  'Tehran': 'Asia/Tehran',                   // UTC+3.5
  'Baku': 'Asia/Baku',                       // UTC+4
  'Kabul': 'Asia/Kabul',                     // UTC+4.5
  'Aqtobe': 'Asia/Aqtobe',                   // UTC+5
  'Calcutta': 'Asia/Calcutta',               // UTC+5.5
  'Kathmandu': 'Asia/Kathmandu',             // UTC+5.75
  'Yangon': 'Asia/Yangon',                   // UTC+6.5
  'Bangkok': 'Asia/Bangkok',                 // UTC+7
  'Shanghai': 'Asia/Shanghai',               // UTC+8
  'Eucla': 'Australia/Eucla',                // UTC+8.75
  'Tokyo': 'Asia/Tokyo',                     // UTC+9
  'Adelaide': 'Australia/Adelaide',          // UTC+9.5
  'Sydney': 'Australia/Sydney',              // UTC+10
  'Norfolk Island': null,                    // UTC+10.75 (manual)
  'Magadan': 'Asia/Magadan',                 // UTC+11
  'Auckland': 'Pacific/Auckland',            // UTC+12
  'Chatham Islands': 'Pacific/Chatham',      // UTC+12.75
  'Kiritimati': null,                        // UTC+14 (Line Islands, manual)
  
  // Special manual offsets
  'Namibia (historical)': null,              // UTC+1.5 (manual)
  'Cocos Islands': null,                     // UTC+6.75 (manual)
  'Line Islands': null                       // UTC+14 (manual)
};

const manualOffsets = {
  'Namibia (historical)': 1.5,
  'Cocos Islands': 6.75,
  'Norfolk Island': 10.75,
  'Line Islands': 14,
  'Kiritimati': 14
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
      offsetLabel = 'UTC' + (manualOffsets[city] >= 0 ? '+' : '') + manualOffsets[city];
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
