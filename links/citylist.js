// Editable region order
const regionOrder = [
  'Canada/USA',
  'Mexico, Central America and Caribbean',
  'South America',
  'Atlantic Islands',
  'Europe',
  'Middle East and Caucasus',
  'Africa',
  'Russia',
  'Central Asia',
  'South Asia',
  'Southeast Asia',
  'East Asia',
  'Australia and New Zealand',
  'Pacific Islands',
  'Indian Ocean',
  'Other'
];

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

  // --- Previously added cities ---
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

  // --- New additions from latest list ---
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
  'Andaman Islands': 'Asia/Kolkata'
};

// Aliases for optional input normalization, safe even if unused
const inputAliases = {};

// Keep only offsets that still need manual handling
const manualOffsets = {
  'Namibia (historical)': 1.5,
  'Norfolk Island': 10.75
};

// Region helper sets
const usCanada = new Set([
  // USA
  'Honolulu','Anchorage','Los Angeles','Chicago','New York','Seattle','Portland','Sacramento',
  'Phoenix','Las Vegas','Denver','Santa Fe','Dallas','Fort Worth','El Paso',
  'Oklahoma City','Omaha','Bismarck','Minneapolis','Madison','Detroit','New Orleans',
  'Nashville','Atlanta','Miami','Cleveland','Richmond','Washington, DC','Buffalo',
  'Philadelphia','Boston',
  // Canada
  'Vancouver','Halifax','St. John\'s','Toronto','Montreal','Quebec City','Edmonton',
  'Happy Valley-Goose Bay'
]);

const mexicoCACarib = new Set(['Mexico City','Panama City','Kingston','Bahamas']);
const southAmerica = new Set([
  'Lima','Santiago','Buenos Aires','La Paz','Rio de Janeiro',
  'Georgetown (Guyana)','Quito','Bogotá','Medellín'
]);
const atlanticIslands = new Set([
  'Azores','Madeira','Canary Islands','Cape Verde','Saint Helena','Ascension','Bermuda',
  'St. Pierre & Miquelon','Reykjavik','Nuuk'
]);
const russia = new Set([
  'Moscow','Vladivostok','Irkutsk','Omsk','Petropavlovsk-Kamchatsky','Kyzyl (Tuva)','Kazan'
]);
const centralAsia = new Set([
  'Tashkent','Khiva','Bukhara','Dihua (Urumqi)','Hotan','Kashgar'
]);
const southAsia = new Set([
  'Delhi','Darjeeling','Madras (Chennai)','Thiruvananthapuram','Kochi','Mumbai','Hyderabad','Bhopal',
  'Kathmandu','Andaman Islands','Imphal','Lahore','Punakha'
]);
const southeastAsia = new Set([
  'Bangkok','Yangon','Mandalay','Rangoon','Phnom Penh','Hanoi','Kuala Lumpur','Singapore',
  'Jakarta','Makassar','Manila','Port Moresby','Madang'
]);
const eastAsia = new Set([
  'Beijing','Harbin','Nanjing','Shanghai','Taipei','Shenzhen','Guangzhou','Hong Kong','Xi\'an',
  'Changsha','Chongqing','Lanzhou','Lhasa','Busan','Andong','Seoul','Tokyo','Sapporo','Kyoto',
  'Kagoshima','Naha','Istanbul' // leave Istanbul here or move to Europe if you prefer
]);
const ausNz = new Set(['Sydney','Perth','Darwin','Auckland']);
const pacificIslands = new Set([
  'Papeete','Apia (Samoa)','Nouméa (New Caledonia)','Nendö (Solomon Islands)',
  'Honiara (Solomon Islands)','Johnston Atoll','Midway Atoll','Wake Island',
  'Kanton (Phoenix Islands)','Kiritimati (Line Islands)','Nauru','Palau','Chuuk (Caroline Islands)',
  'Saipan (Mariana Islands)','Guam','Minamitorishima','Easter Island','Galápagos'
]);
const indianOcean = new Set([
  'Christmas Island','Cocos (Keeling) Islands','Diego Garcia','Maldives',
  'Seychelles','Mauritius','Réunion','Comoros'
]);
const middleEastCaucasus = new Set([
  'Baghdad','Tehran','Dubai','Tel Aviv','Kuwait City','Yerevan','Baku','Aleppo'
]);

function getRegion(city) {
  const tz = cityZones[city] || '';
  if (usCanada.has(city)) return 'Canada/USA';
  if (mexicoCACarib.has(city)) return 'Mexico, Central America and Caribbean';
  if (southAmerica.has(city)) return 'South America';
  if (atlanticIslands.has(city)) return 'Atlantic Islands';
  if (russia.has(city)) return 'Russia';
  if (centralAsia.has(city)) return 'Central Asia';
  i
