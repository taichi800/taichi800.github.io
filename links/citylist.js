// Canonical display names -> IANA time zones
const cityZones = {
  // --- Existing baseline ---
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
  // 'Cocos Islands': null,            // removed, now using proper IANA below
  // 'Norfolk Island': null,           // keep if you need the manual offset
  // 'Line Islands': null,             // removed, now using Kiritimati below

  // --- Previously added cities (kept here for continuity) ---
  'Busan': 'Asia/Seoul',
  'Andong': 'Asia/Seoul',
  'Vladivostok': 'Asia/Vladivostok',
  'Harbin': 'Asia/Harbin',
  'Nanjing': 'Asia/Shanghai',
  'Shanghai': 'Asia/Shanghai',
  'Taipei': 'Asia/Taipei',
  'Shenzhen': 'Asia/Shanghai',
  'Guangzhou': 'Asia/Shanghai',
  'Hong Kong': 'Asia/Hong_Kong',
  'Xi\'an': 'Asia/Shanghai',
  'Changsha': 'Asia/Shanghai',
  'Chongqing': 'Asia/Chongqing',
  'Lanzhou': 'Asia/Shanghai',
  'Lhasa': 'Asia/Shanghai',
  'Dihua (Urumqi)': 'Asia/Urumqi',
  'Hotan': 'Asia/Urumqi',
  'Kashgar': 'Asia/Urumqi',
  'Punakha': 'Asia/Thimphu',
  'Darjeeling': 'Asia/Kolkata',
  'Madras (Chennai)': 'Asia/Kolkata',
  'Thiruvananthapuram': 'Asia/Kolkata',
  'Kochi': 'Asia/Kolkata',
  'Mumbai': 'Asia/Kolkata',
  'Hyderabad': 'Asia/Kolkata',
  'Bhopal': 'Asia/Kolkata',
  'Lahore': 'Asia/Karachi',
  'Imphal': 'Asia/Kolkata',
  'Mandalay': 'Asia/Yangon',
  'Rangoon': 'Asia/Yangon',
  'Phnom Penh': 'Asia/Phnom_Penh',
  'Hanoi': 'Asia/Ho_Chi_Minh',
  'Kuala Lumpur': 'Asia/Kuala_Lumpur',
  'Manila': 'Asia/Manila',
  'Makassar': 'Asia/Makassar',
  'Madang': 'Pacific/Port_Moresby',
  'Port Moresby': 'Pacific/Port_Moresby',
  'Naha': 'Asia/Tokyo',
  'Kagoshima': 'Asia/Tokyo',
  'Kyoto': 'Asia/Tokyo',
  'Sapporo': 'Asia/Tokyo',
  'Darwin': 'Australia/Darwin',
  'Suva': 'Pacific/Fiji',
  'Galápagos': 'Pacific/Galapagos',
  'Easter Island': 'Pacific/Easter',
  'Marshall Islands (Majuro)': 'Pacific/Majuro',
  'Guam': 'Pacific/Guam',
  'Minamitorishima': 'Pacific/Minamitorishima',
  'Petropavlovsk-Kamchatsky': 'Asia/Kamchatka',
  'Khiva': 'Asia/Tashkent',
  'Bukhara': 'Asia/Tashkent',
  'Omsk': 'Asia/Omsk',
  'Irkutsk': 'Asia/Irkutsk',
  'Ulaanbaatar': 'Asia/Ulaanbaatar',
  'Kyzyl (Tuva)': 'Asia/Krasnoyarsk',
  'Kazan': 'Europe/Moscow',
  'Kuwait City': 'Asia/Kuwait',
  'Yerevan': 'Asia/Yerevan',
  'Kyiv': 'Europe/Kyiv',
  'Helsinki': 'Europe/Helsinki',
  'Stockholm': 'Europe/Stockholm',
  'Oslo': 'Europe/Oslo',
  'Bergen': 'Europe/Oslo',
  'Warsaw': 'Europe/Warsaw',
  'Budapest': 'Europe/Budapest',
  'Bucharest': 'Europe/Bucharest',
  'Sofia': 'Europe/Sofia',
  'Istanbul': 'Europe/Istanbul',
  'Palermo': 'Europe/Rome',
  'Tirana': 'Europe/Tirane',
  'Belgrade': 'Europe/Belgrade',
  'Ljubljana': 'Europe/Ljubljana',
  'Venice': 'Europe/Rome',
  'Genoa': 'Europe/Rome',
  'Florence': 'Europe/Rome',
  'Naples': 'Europe/Rome',
  'Bern': 'Europe/Zurich',
  'Geneva': 'Europe/Zurich',
  'Zurich': 'Europe/Zurich',
  'Vienna': 'Europe/Vienna',
  'Prague': 'Europe/Prague',
  'Bratislava': 'Europe/Bratislava',
  'Munich': 'Europe/Berlin',
  'Hanover': 'Europe/Berlin',
  'Amsterdam': 'Europe/Amsterdam',
  'Brussels': 'Europe/Brussels',
  'Manchester': 'Europe/London',
  'Swansea': 'Europe/London',
  'Glasgow': 'Europe/London',
  'Dublin': 'Europe/Dublin',
  'Reykjavik': 'Atlantic/Reykjavik',
  'Nuuk': 'America/Nuuk',
  'Marseille': 'Europe/Paris',
  'Bordeaux': 'Europe/Paris',
  'Brest (France)': 'Europe/Paris',
  'Barcelona': 'Europe/Madrid',
  'Madrid': 'Europe/Madrid',
  'Seville': 'Europe/Madrid',
  'Lisbon': 'Europe/Lisbon',
  'Aleppo': 'Asia/Damascus',
  'Tel Aviv': 'Asia/Jerusalem',
  'Addis Ababa': 'Africa/Addis_Ababa',
  'Mombasa': 'Africa/Nairobi',
  'Johannesburg': 'Africa/Johannesburg',
  'Cape Town': 'Africa/Johannesburg',
  'Lagos': 'Africa/Lagos',
  'Abidjan': 'Africa/Abidjan',
  'Dakar': 'Africa/Dakar',
  'Rabat': 'Africa/Casablanca',
  'Algiers': 'Africa/Algiers',
  'Tunis': 'Africa/Tunis',
  'La Paz': 'America/La_Paz',
  'Rio de Janeiro': 'America/Sao_Paulo',
  'Georgetown (Guyana)': 'America/Guyana',
  'Quito': 'America/Guayaquil',
  'Bogotá': 'America/Bogota',
  'Medellín': 'America/Bogota',
  'Panama City': 'America/Panama',
  'Kingston': 'America/Jamaica',
  'Seattle': 'America/Los_Angeles',
  'Portland': 'America/Los_Angeles',
  'Sacramento': 'America/Los_Angeles',
  'Phoenix': 'America/Phoenix',
  'Las Vegas': 'America/Los_Angeles',
  'Denver': 'America/Denver',
  'Santa Fe': 'America/Denver',
  'Dallas': 'America/Chicago',
  'Fort Worth': 'America/Chicago',
  'El Paso': 'America/Denver',
  'Oklahoma City': 'America/Chicago',
  'Omaha': 'America/Chicago',
  'Bismarck': 'America/North_Dakota/Bismarck',
  'Minneapolis': 'America/Chicago',
  'Madison': 'America/Chicago',
  'Detroit': 'America/Detroit',
  'New Orleans': 'America/Chicago',
  'Nashville': 'America/Chicago',
  'Atlanta': 'America/New_York',
  'Miami': 'America/New_York',
  'Cleveland': 'America/New_York',
  'Richmond': 'America/New_York',
  'Washington, DC': 'America/New_York',
  'Buffalo': 'America/New_York',
  'Philadelphia': 'America/New_York',
  'Boston': 'America/New_York',
  'Toronto': 'America/Toronto',
  'Montreal': 'America/Toronto',
  'Quebec City': 'America/Toronto',
  'Edmonton': 'America/Edmonton',
  'Happy Valley-Goose Bay': 'America/Goose_Bay',

  // --- New additions from your latest list (deduplicated) ---
  // Pacific
  'Apia (Samoa)': 'Pacific/Apia',
  'Nouméa (New Caledonia)': 'Pacific/Noumea',
  'Nendö (Solomon Islands)': 'Pacific/Guadalcanal',
  'Honiara (Solomon Islands)': 'Pacific/Guadalcanal',
  'Johnston Atoll': 'Pacific/Johnston',
  'Midway Atoll': 'Pacific/Midway',
  'Wake Island': 'Pacific/Wake',
  'Kanton (Phoenix Islands)': 'Pacific/Kanton',
  'Kiritimati (Line Islands)': 'Pacific/Kiritimati',
  'Bermuda': 'Atlantic/Bermuda',
  'St. Pierre & Miquelon': 'America/Miquelon',
  'Bahamas': 'America/Nassau',
  'Nauru': 'Pacific/Nauru',
  'Palau': 'Pacific/Palau',
  'Chuuk (Caroline Islands)': 'Pacific/Chuuk',
  'Saipan (Mariana Islands)': 'Pacific/Saipan',
  'Iwo Jima': 'Asia/Tokyo',

  // Indian Ocean and Atlantic archipelagos
  'Christmas Island': 'Indian/Christmas',
  'Cocos (Keeling) Islands': 'Indian/Cocos',
  'Diego Garcia': 'Indian/Chagos',
  'Maldives': 'Indian/Maldives',
  'Seychelles': 'Indian/Mahe',
  'Mauritius': 'Indian/Mauritius',
  'Réunion': 'Indian/Reunion',
  'Comoros': 'Indian/Comoro',
  'Saint Helena': 'Atlantic/St_Helena',
  'Ascension': 'Atlantic/Ascension',
  'Cape Verde': 'Atlantic/Cape_Verde',
  'Canary Islands': 'Atlantic/Canary',
  'Madeira': 'Atlantic/Madeira',

  // Andaman
  'Andaman Islands': 'Asia/Kolkata'
};


// Keep only offsets that still need manual handling
const manualOffsets = {
  'Namibia (historical)': 1.5,
  // If you want to switch Norfolk to IANA, use 'Pacific/Norfolk' in cityZones and remove this:
  'Norfolk Island': 10.75
};

function canonicalize(city) {
  if (!city) return null;
  const key = city.trim().toLowerCase();
  const canon = inputAliases[key] || null;
  return canon || (cityZones[city] ? city : null);
}

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
  }
  const offset = manualOffsets[city];
  if (offset !== undefined) {
    const t = new Date(now.getTime() + offset * 60 * 60 * 1000);
    return t.toISOString().substring(11, 16);
  }
  return '--:--';
}

function updateCityList() {
  const list = document.getElementById('cityList');
  list.innerHTML = '';

  Object.keys(cityZones)
    .sort((a, b) => a.localeCompare(b))
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
