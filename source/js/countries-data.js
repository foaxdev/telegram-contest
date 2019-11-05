'use strict';

(() => {
  const names = [
    {
      "code": "AC",
      "unicode": "U+1F1E6 U+1F1E8",
      "name": "Ascension Island",
      "emoji": "🇦🇨"
    },
    {
      "code": "AD",
      "unicode": "U+1F1E6 U+1F1E9",
      "name": "Andorra",
      "emoji": "🇦🇩"
    },
    {
      "code": "AE",
      "unicode": "U+1F1E6 U+1F1EA",
      "name": "United Arab Emirates",
      "emoji": "🇦🇪"
    },
    {
      "code": "AF",
      "unicode": "U+1F1E6 U+1F1EB",
      "name": "Afghanistan",
      "emoji": "🇦🇫"
    },
    {
      "code": "AG",
      "unicode": "U+1F1E6 U+1F1EC",
      "name": "Antigua & Barbuda",
      "emoji": "🇦🇬"
    },
    {
      "code": "AI",
      "unicode": "U+1F1E6 U+1F1EE",
      "name": "Anguilla",
      "emoji": "🇦🇮"
    },
    {
      "code": "AL",
      "unicode": "U+1F1E6 U+1F1F1",
      "name": "Albania",
      "emoji": "🇦🇱"
    },
    {
      "code": "AM",
      "unicode": "U+1F1E6 U+1F1F2",
      "name": "Armenia",
      "emoji": "🇦🇲"
    },
    {
      "code": "AO",
      "unicode": "U+1F1E6 U+1F1F4",
      "name": "Angola",
      "emoji": "🇦🇴"
    },
    {
      "code": "AQ",
      "unicode": "U+1F1E6 U+1F1F6",
      "name": "Antarctica",
      "emoji": "🇦🇶"
    },
    {
      "code": "AR",
      "unicode": "U+1F1E6 U+1F1F7",
      "name": "Argentina",
      "emoji": "🇦🇷"
    },
    {
      "code": "AS",
      "unicode": "U+1F1E6 U+1F1F8",
      "name": "American Samoa",
      "emoji": "🇦🇸"
    },
    {
      "code": "AT",
      "unicode": "U+1F1E6 U+1F1F9",
      "name": "Austria",
      "emoji": "🇦🇹"
    },
    {
      "code": "AU",
      "unicode": "U+1F1E6 U+1F1FA",
      "name": "Australia",
      "emoji": "🇦🇺"
    },
    {
      "code": "AW",
      "unicode": "U+1F1E6 U+1F1FC",
      "name": "Aruba",
      "emoji": "🇦🇼"
    },
    {
      "code": "AX",
      "unicode": "U+1F1E6 U+1F1FD",
      "name": "Åland Islands",
      "emoji": "🇦🇽"
    },
    {
      "code": "AZ",
      "unicode": "U+1F1E6 U+1F1FF",
      "name": "Azerbaijan",
      "emoji": "🇦🇿"
    },
    {
      "code": "BA",
      "unicode": "U+1F1E7 U+1F1E6",
      "name": "Bosnia & Herzegovina",
      "emoji": "🇧🇦"
    },
    {
      "code": "BB",
      "unicode": "U+1F1E7 U+1F1E7",
      "name": "Barbados",
      "emoji": "🇧🇧"
    },
    {
      "code": "BD",
      "unicode": "U+1F1E7 U+1F1E9",
      "name": "Bangladesh",
      "emoji": "🇧🇩"
    },
    {
      "code": "BE",
      "unicode": "U+1F1E7 U+1F1EA",
      "name": "Belgium",
      "emoji": "🇧🇪"
    },
    {
      "code": "BF",
      "unicode": "U+1F1E7 U+1F1EB",
      "name": "Burkina Faso",
      "emoji": "🇧🇫"
    },
    {
      "code": "BG",
      "unicode": "U+1F1E7 U+1F1EC",
      "name": "Bulgaria",
      "emoji": "🇧🇬"
    },
    {
      "code": "BH",
      "unicode": "U+1F1E7 U+1F1ED",
      "name": "Bahrain",
      "emoji": "🇧🇭"
    },
    {
      "code": "BI",
      "unicode": "U+1F1E7 U+1F1EE",
      "name": "Burundi",
      "emoji": "🇧🇮"
    },
    {
      "code": "BJ",
      "unicode": "U+1F1E7 U+1F1EF",
      "name": "Benin",
      "emoji": "🇧🇯"
    },
    {
      "code": "BL",
      "unicode": "U+1F1E7 U+1F1F1",
      "name": "St. Barthélemy",
      "emoji": "🇧🇱"
    },
    {
      "code": "BM",
      "unicode": "U+1F1E7 U+1F1F2",
      "name": "Bermuda",
      "emoji": "🇧🇲"
    },
    {
      "code": "BN",
      "unicode": "U+1F1E7 U+1F1F3",
      "name": "Brunei",
      "emoji": "🇧🇳"
    },
    {
      "code": "BO",
      "unicode": "U+1F1E7 U+1F1F4",
      "name": "Bolivia",
      "emoji": "🇧🇴"
    },
    {
      "code": "BQ",
      "unicode": "U+1F1E7 U+1F1F6",
      "name": "Caribbean Netherlands",
      "emoji": "🇧🇶"
    },
    {
      "code": "BR",
      "unicode": "U+1F1E7 U+1F1F7",
      "name": "Brazil",
      "emoji": "🇧🇷"
    },
    {
      "code": "BS",
      "unicode": "U+1F1E7 U+1F1F8",
      "name": "Bahamas",
      "emoji": "🇧🇸"
    },
    {
      "code": "BT",
      "unicode": "U+1F1E7 U+1F1F9",
      "name": "Bhutan",
      "emoji": "🇧🇹"
    },
    {
      "code": "BV",
      "unicode": "U+1F1E7 U+1F1FB",
      "name": "Bouvet Island",
      "emoji": "🇧🇻"
    },
    {
      "code": "BW",
      "unicode": "U+1F1E7 U+1F1FC",
      "name": "Botswana",
      "emoji": "🇧🇼"
    },
    {
      "code": "BY",
      "unicode": "U+1F1E7 U+1F1FE",
      "name": "Belarus",
      "emoji": "🇧🇾"
    },
    {
      "code": "BZ",
      "unicode": "U+1F1E7 U+1F1FF",
      "name": "Belize",
      "emoji": "🇧🇿"
    },
    {
      "code": "CA",
      "unicode": "U+1F1E8 U+1F1E6",
      "name": "Canada",
      "emoji": "🇨🇦"
    },
    {
      "code": "CC",
      "unicode": "U+1F1E8 U+1F1E8",
      "name": "Cocos (Keeling) Islands",
      "emoji": "🇨🇨"
    },
    {
      "code": "CD",
      "unicode": "U+1F1E8 U+1F1E9",
      "name": "Congo - Kinshasa",
      "emoji": "🇨🇩"
    },
    {
      "code": "CF",
      "unicode": "U+1F1E8 U+1F1EB",
      "name": "Central African Republic",
      "emoji": "🇨🇫"
    },
    {
      "code": "CG",
      "unicode": "U+1F1E8 U+1F1EC",
      "name": "Congo - Brazzaville",
      "emoji": "🇨🇬"
    },
    {
      "code": "CH",
      "unicode": "U+1F1E8 U+1F1ED",
      "name": "Switzerland",
      "emoji": "🇨🇭"
    },
    {
      "code": "CI",
      "unicode": "U+1F1E8 U+1F1EE",
      "name": "Côte d’Ivoire",
      "emoji": "🇨🇮"
    },
    {
      "code": "CK",
      "unicode": "U+1F1E8 U+1F1F0",
      "name": "Cook Islands",
      "emoji": "🇨🇰"
    },
    {
      "code": "CL",
      "unicode": "U+1F1E8 U+1F1F1",
      "name": "Chile",
      "emoji": "🇨🇱"
    },
    {
      "code": "CM",
      "unicode": "U+1F1E8 U+1F1F2",
      "name": "Cameroon",
      "emoji": "🇨🇲"
    },
    {
      "code": "CN",
      "unicode": "U+1F1E8 U+1F1F3",
      "name": "China",
      "emoji": "🇨🇳"
    },
    {
      "code": "CO",
      "unicode": "U+1F1E8 U+1F1F4",
      "name": "Colombia",
      "emoji": "🇨🇴"
    },
    {
      "code": "CP",
      "unicode": "U+1F1E8 U+1F1F5",
      "name": "Clipperton Island",
      "emoji": "🇨🇵"
    },
    {
      "code": "CR",
      "unicode": "U+1F1E8 U+1F1F7",
      "name": "Costa Rica",
      "emoji": "🇨🇷"
    },
    {
      "code": "CU",
      "unicode": "U+1F1E8 U+1F1FA",
      "name": "Cuba",
      "emoji": "🇨🇺"
    },
    {
      "code": "CV",
      "unicode": "U+1F1E8 U+1F1FB",
      "name": "Cape Verde",
      "emoji": "🇨🇻"
    },
    {
      "code": "CW",
      "unicode": "U+1F1E8 U+1F1FC",
      "name": "Curaçao",
      "emoji": "🇨🇼"
    },
    {
      "code": "CX",
      "unicode": "U+1F1E8 U+1F1FD",
      "name": "Christmas Island",
      "emoji": "🇨🇽"
    },
    {
      "code": "CY",
      "unicode": "U+1F1E8 U+1F1FE",
      "name": "Cyprus",
      "emoji": "🇨🇾"
    },
    {
      "code": "CZ",
      "unicode": "U+1F1E8 U+1F1FF",
      "name": "Czechia",
      "emoji": "🇨🇿"
    },
    {
      "code": "DE",
      "unicode": "U+1F1E9 U+1F1EA",
      "name": "Germany",
      "emoji": "🇩🇪"
    },
    {
      "code": "DG",
      "unicode": "U+1F1E9 U+1F1EC",
      "name": "Diego Garcia",
      "emoji": "🇩🇬"
    },
    {
      "code": "DJ",
      "unicode": "U+1F1E9 U+1F1EF",
      "name": "Djibouti",
      "emoji": "🇩🇯"
    },
    {
      "code": "DK",
      "unicode": "U+1F1E9 U+1F1F0",
      "name": "Denmark",
      "emoji": "🇩🇰"
    },
    {
      "code": "DM",
      "unicode": "U+1F1E9 U+1F1F2",
      "name": "Dominica",
      "emoji": "🇩🇲"
    },
    {
      "code": "DO",
      "unicode": "U+1F1E9 U+1F1F4",
      "name": "Dominican Republic",
      "emoji": "🇩🇴"
    },
    {
      "code": "DZ",
      "unicode": "U+1F1E9 U+1F1FF",
      "name": "Algeria",
      "emoji": "🇩🇿"
    },
    {
      "code": "EA",
      "unicode": "U+1F1EA U+1F1E6",
      "name": "Ceuta & Melilla",
      "emoji": "🇪🇦"
    },
    {
      "code": "EC",
      "unicode": "U+1F1EA U+1F1E8",
      "name": "Ecuador",
      "emoji": "🇪🇨"
    },
    {
      "code": "EE",
      "unicode": "U+1F1EA U+1F1EA",
      "name": "Estonia",
      "emoji": "🇪🇪"
    },
    {
      "code": "EG",
      "unicode": "U+1F1EA U+1F1EC",
      "name": "Egypt",
      "emoji": "🇪🇬"
    },
    {
      "code": "EH",
      "unicode": "U+1F1EA U+1F1ED",
      "name": "Western Sahara",
      "emoji": "🇪🇭"
    },
    {
      "code": "ER",
      "unicode": "U+1F1EA U+1F1F7",
      "name": "Eritrea",
      "emoji": "🇪🇷"
    },
    {
      "code": "ES",
      "unicode": "U+1F1EA U+1F1F8",
      "name": "Spain",
      "emoji": "🇪🇸"
    },
    {
      "code": "ET",
      "unicode": "U+1F1EA U+1F1F9",
      "name": "Ethiopia",
      "emoji": "🇪🇹"
    },
    {
      "code": "EU",
      "unicode": "U+1F1EA U+1F1FA",
      "name": "European Union",
      "emoji": "🇪🇺"
    },
    {
      "code": "FI",
      "unicode": "U+1F1EB U+1F1EE",
      "name": "Finland",
      "emoji": "🇫🇮"
    },
    {
      "code": "FJ",
      "unicode": "U+1F1EB U+1F1EF",
      "name": "Fiji",
      "emoji": "🇫🇯"
    },
    {
      "code": "FK",
      "unicode": "U+1F1EB U+1F1F0",
      "name": "Falkland Islands",
      "emoji": "🇫🇰"
    },
    {
      "code": "FM",
      "unicode": "U+1F1EB U+1F1F2",
      "name": "Micronesia",
      "emoji": "🇫🇲"
    },
    {
      "code": "FO",
      "unicode": "U+1F1EB U+1F1F4",
      "name": "Faroe Islands",
      "emoji": "🇫🇴"
    },
    {
      "code": "FR",
      "unicode": "U+1F1EB U+1F1F7",
      "name": "France",
      "emoji": "🇫🇷"
    },
    {
      "code": "GA",
      "unicode": "U+1F1EC U+1F1E6",
      "name": "Gabon",
      "emoji": "🇬🇦"
    },
    {
      "code": "GB",
      "unicode": "U+1F1EC U+1F1E7",
      "name": "United Kingdom",
      "emoji": "🇬🇧"
    },
    {
      "code": "GD",
      "unicode": "U+1F1EC U+1F1E9",
      "name": "Grenada",
      "emoji": "🇬🇩"
    },
    {
      "code": "GE",
      "unicode": "U+1F1EC U+1F1EA",
      "name": "Georgia",
      "emoji": "🇬🇪"
    },
    {
      "code": "GF",
      "unicode": "U+1F1EC U+1F1EB",
      "name": "French Guiana",
      "emoji": "🇬🇫"
    },
    {
      "code": "GG",
      "unicode": "U+1F1EC U+1F1EC",
      "name": "Guernsey",
      "emoji": "🇬🇬"
    },
    {
      "code": "GH",
      "unicode": "U+1F1EC U+1F1ED",
      "name": "Ghana",
      "emoji": "🇬🇭"
    },
    {
      "code": "GI",
      "unicode": "U+1F1EC U+1F1EE",
      "name": "Gibraltar",
      "emoji": "🇬🇮"
    },
    {
      "code": "GL",
      "unicode": "U+1F1EC U+1F1F1",
      "name": "Greenland",
      "emoji": "🇬🇱"
    },
    {
      "code": "GM",
      "unicode": "U+1F1EC U+1F1F2",
      "name": "Gambia",
      "emoji": "🇬🇲"
    },
    {
      "code": "GN",
      "unicode": "U+1F1EC U+1F1F3",
      "name": "Guinea",
      "emoji": "🇬🇳"
    },
    {
      "code": "GP",
      "unicode": "U+1F1EC U+1F1F5",
      "name": "Guadeloupe",
      "emoji": "🇬🇵"
    },
    {
      "code": "GQ",
      "unicode": "U+1F1EC U+1F1F6",
      "name": "Equatorial Guinea",
      "emoji": "🇬🇶"
    },
    {
      "code": "GR",
      "unicode": "U+1F1EC U+1F1F7",
      "name": "Greece",
      "emoji": "🇬🇷"
    },
    {
      "code": "GS",
      "unicode": "U+1F1EC U+1F1F8",
      "name": "South Georgia & South Sandwich Islands",
      "emoji": "🇬🇸"
    },
    {
      "code": "GT",
      "unicode": "U+1F1EC U+1F1F9",
      "name": "Guatemala",
      "emoji": "🇬🇹"
    },
    {
      "code": "GU",
      "unicode": "U+1F1EC U+1F1FA",
      "name": "Guam",
      "emoji": "🇬🇺"
    },
    {
      "code": "GW",
      "unicode": "U+1F1EC U+1F1FC",
      "name": "Guinea-Bissau",
      "emoji": "🇬🇼"
    },
    {
      "code": "GY",
      "unicode": "U+1F1EC U+1F1FE",
      "name": "Guyana",
      "emoji": "🇬🇾"
    },
    {
      "code": "HK",
      "unicode": "U+1F1ED U+1F1F0",
      "name": "Hong Kong SAR China",
      "emoji": "🇭🇰"
    },
    {
      "code": "HM",
      "unicode": "U+1F1ED U+1F1F2",
      "name": "Heard & McDonald Islands",
      "emoji": "🇭🇲"
    },
    {
      "code": "HN",
      "unicode": "U+1F1ED U+1F1F3",
      "name": "Honduras",
      "emoji": "🇭🇳"
    },
    {
      "code": "HR",
      "unicode": "U+1F1ED U+1F1F7",
      "name": "Croatia",
      "emoji": "🇭🇷"
    },
    {
      "code": "HT",
      "unicode": "U+1F1ED U+1F1F9",
      "name": "Haiti",
      "emoji": "🇭🇹"
    },
    {
      "code": "HU",
      "unicode": "U+1F1ED U+1F1FA",
      "name": "Hungary",
      "emoji": "🇭🇺"
    },
    {
      "code": "IC",
      "unicode": "U+1F1EE U+1F1E8",
      "name": "Canary Islands",
      "emoji": "🇮🇨"
    },
    {
      "code": "ID",
      "unicode": "U+1F1EE U+1F1E9",
      "name": "Indonesia",
      "emoji": "🇮🇩"
    },
    {
      "code": "IE",
      "unicode": "U+1F1EE U+1F1EA",
      "name": "Ireland",
      "emoji": "🇮🇪"
    },
    {
      "code": "IL",
      "unicode": "U+1F1EE U+1F1F1",
      "name": "Israel",
      "emoji": "🇮🇱"
    },
    {
      "code": "IM",
      "unicode": "U+1F1EE U+1F1F2",
      "name": "Isle of Man",
      "emoji": "🇮🇲"
    },
    {
      "code": "IN",
      "unicode": "U+1F1EE U+1F1F3",
      "name": "India",
      "emoji": "🇮🇳"
    },
    {
      "code": "IO",
      "unicode": "U+1F1EE U+1F1F4",
      "name": "British Indian Ocean Territory",
      "emoji": "🇮🇴"
    },
    {
      "code": "IQ",
      "unicode": "U+1F1EE U+1F1F6",
      "name": "Iraq",
      "emoji": "🇮🇶"
    },
    {
      "code": "IR",
      "unicode": "U+1F1EE U+1F1F7",
      "name": "Iran",
      "emoji": "🇮🇷"
    },
    {
      "code": "IS",
      "unicode": "U+1F1EE U+1F1F8",
      "name": "Iceland",
      "emoji": "🇮🇸"
    },
    {
      "code": "IT",
      "unicode": "U+1F1EE U+1F1F9",
      "name": "Italy",
      "emoji": "🇮🇹"
    },
    {
      "code": "JE",
      "unicode": "U+1F1EF U+1F1EA",
      "name": "Jersey",
      "emoji": "🇯🇪"
    },
    {
      "code": "JM",
      "unicode": "U+1F1EF U+1F1F2",
      "name": "Jamaica",
      "emoji": "🇯🇲"
    },
    {
      "code": "JO",
      "unicode": "U+1F1EF U+1F1F4",
      "name": "Jordan",
      "emoji": "🇯🇴"
    },
    {
      "code": "JP",
      "unicode": "U+1F1EF U+1F1F5",
      "name": "Japan",
      "emoji": "🇯🇵"
    },
    {
      "code": "KE",
      "unicode": "U+1F1F0 U+1F1EA",
      "name": "Kenya",
      "emoji": "🇰🇪"
    },
    {
      "code": "KG",
      "unicode": "U+1F1F0 U+1F1EC",
      "name": "Kyrgyzstan",
      "emoji": "🇰🇬"
    },
    {
      "code": "KH",
      "unicode": "U+1F1F0 U+1F1ED",
      "name": "Cambodia",
      "emoji": "🇰🇭"
    },
    {
      "code": "KI",
      "unicode": "U+1F1F0 U+1F1EE",
      "name": "Kiribati",
      "emoji": "🇰🇮"
    },
    {
      "code": "KM",
      "unicode": "U+1F1F0 U+1F1F2",
      "name": "Comoros",
      "emoji": "🇰🇲"
    },
    {
      "code": "KN",
      "unicode": "U+1F1F0 U+1F1F3",
      "name": "St. Kitts & Nevis",
      "emoji": "🇰🇳"
    },
    {
      "code": "KP",
      "unicode": "U+1F1F0 U+1F1F5",
      "name": "North Korea",
      "emoji": "🇰🇵"
    },
    {
      "code": "KR",
      "unicode": "U+1F1F0 U+1F1F7",
      "name": "South Korea",
      "emoji": "🇰🇷"
    },
    {
      "code": "KW",
      "unicode": "U+1F1F0 U+1F1FC",
      "name": "Kuwait",
      "emoji": "🇰🇼"
    },
    {
      "code": "KY",
      "unicode": "U+1F1F0 U+1F1FE",
      "name": "Cayman Islands",
      "emoji": "🇰🇾"
    },
    {
      "code": "KZ",
      "unicode": "U+1F1F0 U+1F1FF",
      "name": "Kazakhstan",
      "emoji": "🇰🇿"
    },
    {
      "code": "LA",
      "unicode": "U+1F1F1 U+1F1E6",
      "name": "Laos",
      "emoji": "🇱🇦"
    },
    {
      "code": "LB",
      "unicode": "U+1F1F1 U+1F1E7",
      "name": "Lebanon",
      "emoji": "🇱🇧"
    },
    {
      "code": "LC",
      "unicode": "U+1F1F1 U+1F1E8",
      "name": "St. Lucia",
      "emoji": "🇱🇨"
    },
    {
      "code": "LI",
      "unicode": "U+1F1F1 U+1F1EE",
      "name": "Liechtenstein",
      "emoji": "🇱🇮"
    },
    {
      "code": "LK",
      "unicode": "U+1F1F1 U+1F1F0",
      "name": "Sri Lanka",
      "emoji": "🇱🇰"
    },
    {
      "code": "LR",
      "unicode": "U+1F1F1 U+1F1F7",
      "name": "Liberia",
      "emoji": "🇱🇷"
    },
    {
      "code": "LS",
      "unicode": "U+1F1F1 U+1F1F8",
      "name": "Lesotho",
      "emoji": "🇱🇸"
    },
    {
      "code": "LT",
      "unicode": "U+1F1F1 U+1F1F9",
      "name": "Lithuania",
      "emoji": "🇱🇹"
    },
    {
      "code": "LU",
      "unicode": "U+1F1F1 U+1F1FA",
      "name": "Luxembourg",
      "emoji": "🇱🇺"
    },
    {
      "code": "LV",
      "unicode": "U+1F1F1 U+1F1FB",
      "name": "Latvia",
      "emoji": "🇱🇻"
    },
    {
      "code": "LY",
      "unicode": "U+1F1F1 U+1F1FE",
      "name": "Libya",
      "emoji": "🇱🇾"
    },
    {
      "code": "MA",
      "unicode": "U+1F1F2 U+1F1E6",
      "name": "Morocco",
      "emoji": "🇲🇦"
    },
    {
      "code": "MC",
      "unicode": "U+1F1F2 U+1F1E8",
      "name": "Monaco",
      "emoji": "🇲🇨"
    },
    {
      "code": "MD",
      "unicode": "U+1F1F2 U+1F1E9",
      "name": "Moldova",
      "emoji": "🇲🇩"
    },
    {
      "code": "ME",
      "unicode": "U+1F1F2 U+1F1EA",
      "name": "Montenegro",
      "emoji": "🇲🇪"
    },
    {
      "code": "MF",
      "unicode": "U+1F1F2 U+1F1EB",
      "name": "St. Martin",
      "emoji": "🇲🇫"
    },
    {
      "code": "MG",
      "unicode": "U+1F1F2 U+1F1EC",
      "name": "Madagascar",
      "emoji": "🇲🇬"
    },
    {
      "code": "MH",
      "unicode": "U+1F1F2 U+1F1ED",
      "name": "Marshall Islands",
      "emoji": "🇲🇭"
    },
    {
      "code": "MK",
      "unicode": "U+1F1F2 U+1F1F0",
      "name": "Macedonia",
      "emoji": "🇲🇰"
    },
    {
      "code": "ML",
      "unicode": "U+1F1F2 U+1F1F1",
      "name": "Mali",
      "emoji": "🇲🇱"
    },
    {
      "code": "MM",
      "unicode": "U+1F1F2 U+1F1F2",
      "name": "Myanmar (Burma)",
      "emoji": "🇲🇲"
    },
    {
      "code": "MN",
      "unicode": "U+1F1F2 U+1F1F3",
      "name": "Mongolia",
      "emoji": "🇲🇳"
    },
    {
      "code": "MO",
      "unicode": "U+1F1F2 U+1F1F4",
      "name": "Macau SAR China",
      "emoji": "🇲🇴"
    },
    {
      "code": "MP",
      "unicode": "U+1F1F2 U+1F1F5",
      "name": "Northern Mariana Islands",
      "emoji": "🇲🇵"
    },
    {
      "code": "MQ",
      "unicode": "U+1F1F2 U+1F1F6",
      "name": "Martinique",
      "emoji": "🇲🇶"
    },
    {
      "code": "MR",
      "unicode": "U+1F1F2 U+1F1F7",
      "name": "Mauritania",
      "emoji": "🇲🇷"
    },
    {
      "code": "MS",
      "unicode": "U+1F1F2 U+1F1F8",
      "name": "Montserrat",
      "emoji": "🇲🇸"
    },
    {
      "code": "MT",
      "unicode": "U+1F1F2 U+1F1F9",
      "name": "Malta",
      "emoji": "🇲🇹"
    },
    {
      "code": "MU",
      "unicode": "U+1F1F2 U+1F1FA",
      "name": "Mauritius",
      "emoji": "🇲🇺"
    },
    {
      "code": "MV",
      "unicode": "U+1F1F2 U+1F1FB",
      "name": "Maldives",
      "emoji": "🇲🇻"
    },
    {
      "code": "MW",
      "unicode": "U+1F1F2 U+1F1FC",
      "name": "Malawi",
      "emoji": "🇲🇼"
    },
    {
      "code": "MX",
      "unicode": "U+1F1F2 U+1F1FD",
      "name": "Mexico",
      "emoji": "🇲🇽"
    },
    {
      "code": "MY",
      "unicode": "U+1F1F2 U+1F1FE",
      "name": "Malaysia",
      "emoji": "🇲🇾"
    },
    {
      "code": "MZ",
      "unicode": "U+1F1F2 U+1F1FF",
      "name": "Mozambique",
      "emoji": "🇲🇿"
    },
    {
      "code": "NA",
      "unicode": "U+1F1F3 U+1F1E6",
      "name": "Namibia",
      "emoji": "🇳🇦"
    },
    {
      "code": "NC",
      "unicode": "U+1F1F3 U+1F1E8",
      "name": "New Caledonia",
      "emoji": "🇳🇨"
    },
    {
      "code": "NE",
      "unicode": "U+1F1F3 U+1F1EA",
      "name": "Niger",
      "emoji": "🇳🇪"
    },
    {
      "code": "NF",
      "unicode": "U+1F1F3 U+1F1EB",
      "name": "Norfolk Island",
      "emoji": "🇳🇫"
    },
    {
      "code": "NG",
      "unicode": "U+1F1F3 U+1F1EC",
      "name": "Nigeria",
      "emoji": "🇳🇬"
    },
    {
      "code": "NI",
      "unicode": "U+1F1F3 U+1F1EE",
      "name": "Nicaragua",
      "emoji": "🇳🇮"
    },
    {
      "code": "NL",
      "unicode": "U+1F1F3 U+1F1F1",
      "name": "Netherlands",
      "emoji": "🇳🇱"
    },
    {
      "code": "NO",
      "unicode": "U+1F1F3 U+1F1F4",
      "name": "Norway",
      "emoji": "🇳🇴"
    },
    {
      "code": "NP",
      "unicode": "U+1F1F3 U+1F1F5",
      "name": "Nepal",
      "emoji": "🇳🇵"
    },
    {
      "code": "NR",
      "unicode": "U+1F1F3 U+1F1F7",
      "name": "Nauru",
      "emoji": "🇳🇷"
    },
    {
      "code": "NU",
      "unicode": "U+1F1F3 U+1F1FA",
      "name": "Niue",
      "emoji": "🇳🇺"
    },
    {
      "code": "NZ",
      "unicode": "U+1F1F3 U+1F1FF",
      "name": "New Zealand",
      "emoji": "🇳🇿"
    },
    {
      "code": "OM",
      "unicode": "U+1F1F4 U+1F1F2",
      "name": "Oman",
      "emoji": "🇴🇲"
    },
    {
      "code": "PA",
      "unicode": "U+1F1F5 U+1F1E6",
      "name": "Panama",
      "emoji": "🇵🇦"
    },
    {
      "code": "PE",
      "unicode": "U+1F1F5 U+1F1EA",
      "name": "Peru",
      "emoji": "🇵🇪"
    },
    {
      "code": "PF",
      "unicode": "U+1F1F5 U+1F1EB",
      "name": "French Polynesia",
      "emoji": "🇵🇫"
    },
    {
      "code": "PG",
      "unicode": "U+1F1F5 U+1F1EC",
      "name": "Papua New Guinea",
      "emoji": "🇵🇬"
    },
    {
      "code": "PH",
      "unicode": "U+1F1F5 U+1F1ED",
      "name": "Philippines",
      "emoji": "🇵🇭"
    },
    {
      "code": "PK",
      "unicode": "U+1F1F5 U+1F1F0",
      "name": "Pakistan",
      "emoji": "🇵🇰"
    },
    {
      "code": "PL",
      "unicode": "U+1F1F5 U+1F1F1",
      "name": "Poland",
      "emoji": "🇵🇱"
    },
    {
      "code": "PM",
      "unicode": "U+1F1F5 U+1F1F2",
      "name": "St. Pierre & Miquelon",
      "emoji": "🇵🇲"
    },
    {
      "code": "PN",
      "unicode": "U+1F1F5 U+1F1F3",
      "name": "Pitcairn Islands",
      "emoji": "🇵🇳"
    },
    {
      "code": "PR",
      "unicode": "U+1F1F5 U+1F1F7",
      "name": "Puerto Rico",
      "emoji": "🇵🇷"
    },
    {
      "code": "PS",
      "unicode": "U+1F1F5 U+1F1F8",
      "name": "Palestinian Territories",
      "emoji": "🇵🇸"
    },
    {
      "code": "PT",
      "unicode": "U+1F1F5 U+1F1F9",
      "name": "Portugal",
      "emoji": "🇵🇹"
    },
    {
      "code": "PW",
      "unicode": "U+1F1F5 U+1F1FC",
      "name": "Palau",
      "emoji": "🇵🇼"
    },
    {
      "code": "PY",
      "unicode": "U+1F1F5 U+1F1FE",
      "name": "Paraguay",
      "emoji": "🇵🇾"
    },
    {
      "code": "QA",
      "unicode": "U+1F1F6 U+1F1E6",
      "name": "Qatar",
      "emoji": "🇶🇦"
    },
    {
      "code": "RE",
      "unicode": "U+1F1F7 U+1F1EA",
      "name": "Réunion",
      "emoji": "🇷🇪"
    },
    {
      "code": "RO",
      "unicode": "U+1F1F7 U+1F1F4",
      "name": "Romania",
      "emoji": "🇷🇴"
    },
    {
      "code": "RS",
      "unicode": "U+1F1F7 U+1F1F8",
      "name": "Serbia",
      "emoji": "🇷🇸"
    },
    {
      "code": "RU",
      "unicode": "U+1F1F7 U+1F1FA",
      "name": "Russia",
      "emoji": "🇷🇺"
    },
    {
      "code": "RW",
      "unicode": "U+1F1F7 U+1F1FC",
      "name": "Rwanda",
      "emoji": "🇷🇼"
    },
    {
      "code": "SA",
      "unicode": "U+1F1F8 U+1F1E6",
      "name": "Saudi Arabia",
      "emoji": "🇸🇦"
    },
    {
      "code": "SB",
      "unicode": "U+1F1F8 U+1F1E7",
      "name": "Solomon Islands",
      "emoji": "🇸🇧"
    },
    {
      "code": "SC",
      "unicode": "U+1F1F8 U+1F1E8",
      "name": "Seychelles",
      "emoji": "🇸🇨"
    },
    {
      "code": "SD",
      "unicode": "U+1F1F8 U+1F1E9",
      "name": "Sudan",
      "emoji": "🇸🇩"
    },
    {
      "code": "SE",
      "unicode": "U+1F1F8 U+1F1EA",
      "name": "Sweden",
      "emoji": "🇸🇪"
    },
    {
      "code": "SG",
      "unicode": "U+1F1F8 U+1F1EC",
      "name": "Singapore",
      "emoji": "🇸🇬"
    },
    {
      "code": "SH",
      "unicode": "U+1F1F8 U+1F1ED",
      "name": "St. Helena",
      "emoji": "🇸🇭"
    },
    {
      "code": "SI",
      "unicode": "U+1F1F8 U+1F1EE",
      "name": "Slovenia",
      "emoji": "🇸🇮"
    },
    {
      "code": "SJ",
      "unicode": "U+1F1F8 U+1F1EF",
      "name": "Svalbard & Jan Mayen",
      "emoji": "🇸🇯"
    },
    {
      "code": "SK",
      "unicode": "U+1F1F8 U+1F1F0",
      "name": "Slovakia",
      "emoji": "🇸🇰"
    },
    {
      "code": "SL",
      "unicode": "U+1F1F8 U+1F1F1",
      "name": "Sierra Leone",
      "emoji": "🇸🇱"
    },
    {
      "code": "SM",
      "unicode": "U+1F1F8 U+1F1F2",
      "name": "San Marino",
      "emoji": "🇸🇲"
    },
    {
      "code": "SN",
      "unicode": "U+1F1F8 U+1F1F3",
      "name": "Senegal",
      "emoji": "🇸🇳"
    },
    {
      "code": "SO",
      "unicode": "U+1F1F8 U+1F1F4",
      "name": "Somalia",
      "emoji": "🇸🇴"
    },
    {
      "code": "SR",
      "unicode": "U+1F1F8 U+1F1F7",
      "name": "Suriname",
      "emoji": "🇸🇷"
    },
    {
      "code": "SS",
      "unicode": "U+1F1F8 U+1F1F8",
      "name": "South Sudan",
      "emoji": "🇸🇸"
    },
    {
      "code": "ST",
      "unicode": "U+1F1F8 U+1F1F9",
      "name": "São Tomé & Príncipe",
      "emoji": "🇸🇹"
    },
    {
      "code": "SV",
      "unicode": "U+1F1F8 U+1F1FB",
      "name": "El Salvador",
      "emoji": "🇸🇻"
    },
    {
      "code": "SX",
      "unicode": "U+1F1F8 U+1F1FD",
      "name": "Sint Maarten",
      "emoji": "🇸🇽"
    },
    {
      "code": "SY",
      "unicode": "U+1F1F8 U+1F1FE",
      "name": "Syria",
      "emoji": "🇸🇾"
    },
    {
      "code": "SZ",
      "unicode": "U+1F1F8 U+1F1FF",
      "name": "Swaziland",
      "emoji": "🇸🇿"
    },
    {
      "code": "TA",
      "unicode": "U+1F1F9 U+1F1E6",
      "name": "Tristan da Cunha",
      "emoji": "🇹🇦"
    },
    {
      "code": "TC",
      "unicode": "U+1F1F9 U+1F1E8",
      "name": "Turks & Caicos Islands",
      "emoji": "🇹🇨"
    },
    {
      "code": "TD",
      "unicode": "U+1F1F9 U+1F1E9",
      "name": "Chad",
      "emoji": "🇹🇩"
    },
    {
      "code": "TF",
      "unicode": "U+1F1F9 U+1F1EB",
      "name": "French Southern Territories",
      "emoji": "🇹🇫"
    },
    {
      "code": "TG",
      "unicode": "U+1F1F9 U+1F1EC",
      "name": "Togo",
      "emoji": "🇹🇬"
    },
    {
      "code": "TH",
      "unicode": "U+1F1F9 U+1F1ED",
      "name": "Thailand",
      "emoji": "🇹🇭"
    },
    {
      "code": "TJ",
      "unicode": "U+1F1F9 U+1F1EF",
      "name": "Tajikistan",
      "emoji": "🇹🇯"
    },
    {
      "code": "TK",
      "unicode": "U+1F1F9 U+1F1F0",
      "name": "Tokelau",
      "emoji": "🇹🇰"
    },
    {
      "code": "TL",
      "unicode": "U+1F1F9 U+1F1F1",
      "name": "Timor-Leste",
      "emoji": "🇹🇱"
    },
    {
      "code": "TM",
      "unicode": "U+1F1F9 U+1F1F2",
      "name": "Turkmenistan",
      "emoji": "🇹🇲"
    },
    {
      "code": "TN",
      "unicode": "U+1F1F9 U+1F1F3",
      "name": "Tunisia",
      "emoji": "🇹🇳"
    },
    {
      "code": "TO",
      "unicode": "U+1F1F9 U+1F1F4",
      "name": "Tonga",
      "emoji": "🇹🇴"
    },
    {
      "code": "TR",
      "unicode": "U+1F1F9 U+1F1F7",
      "name": "Turkey",
      "emoji": "🇹🇷"
    },
    {
      "code": "TT",
      "unicode": "U+1F1F9 U+1F1F9",
      "name": "Trinidad & Tobago",
      "emoji": "🇹🇹"
    },
    {
      "code": "TV",
      "unicode": "U+1F1F9 U+1F1FB",
      "name": "Tuvalu",
      "emoji": "🇹🇻"
    },
    {
      "code": "TW",
      "unicode": "U+1F1F9 U+1F1FC",
      "name": "Taiwan",
      "emoji": "🇹🇼"
    },
    {
      "code": "TZ",
      "unicode": "U+1F1F9 U+1F1FF",
      "name": "Tanzania",
      "emoji": "🇹🇿"
    },
    {
      "code": "UA",
      "unicode": "U+1F1FA U+1F1E6",
      "name": "Ukraine",
      "emoji": "🇺🇦"
    },
    {
      "code": "UG",
      "unicode": "U+1F1FA U+1F1EC",
      "name": "Uganda",
      "emoji": "🇺🇬"
    },
    {
      "code": "UM",
      "unicode": "U+1F1FA U+1F1F2",
      "name": "U.S. Outlying Islands",
      "emoji": "🇺🇲"
    },
    {
      "code": "UN",
      "unicode": "U+1F1FA U+1F1F3",
      "name": "United Nations",
      "emoji": "🇺🇳"
    },
    {
      "code": "US",
      "unicode": "U+1F1FA U+1F1F8",
      "name": "United States",
      "emoji": "🇺🇸"
    },
    {
      "code": "UY",
      "unicode": "U+1F1FA U+1F1FE",
      "name": "Uruguay",
      "emoji": "🇺🇾"
    },
    {
      "code": "UZ",
      "unicode": "U+1F1FA U+1F1FF",
      "name": "Uzbekistan",
      "emoji": "🇺🇿"
    },
    {
      "code": "VA",
      "unicode": "U+1F1FB U+1F1E6",
      "name": "Vatican City",
      "emoji": "🇻🇦"
    },
    {
      "code": "VC",
      "unicode": "U+1F1FB U+1F1E8",
      "name": "St. Vincent & Grenadines",
      "emoji": "🇻🇨"
    },
    {
      "code": "VE",
      "unicode": "U+1F1FB U+1F1EA",
      "name": "Venezuela",
      "emoji": "🇻🇪"
    },
    {
      "code": "VG",
      "unicode": "U+1F1FB U+1F1EC",
      "name": "British Virgin Islands",
      "emoji": "🇻🇬"
    },
    {
      "code": "VI",
      "unicode": "U+1F1FB U+1F1EE",
      "name": "U.S. Virgin Islands",
      "emoji": "🇻🇮"
    },
    {
      "code": "VN",
      "unicode": "U+1F1FB U+1F1F3",
      "name": "Vietnam",
      "emoji": "🇻🇳"
    },
    {
      "code": "VU",
      "unicode": "U+1F1FB U+1F1FA",
      "name": "Vanuatu",
      "emoji": "🇻🇺"
    },
    {
      "code": "WF",
      "unicode": "U+1F1FC U+1F1EB",
      "name": "Wallis & Futuna",
      "emoji": "🇼🇫"
    },
    {
      "code": "WS",
      "unicode": "U+1F1FC U+1F1F8",
      "name": "Samoa",
      "emoji": "🇼🇸"
    },
    {
      "code": "XK",
      "unicode": "U+1F1FD U+1F1F0",
      "name": "Kosovo",
      "emoji": "🇽🇰"
    },
    {
      "code": "YE",
      "unicode": "U+1F1FE U+1F1EA",
      "name": "Yemen",
      "emoji": "🇾🇪"
    },
    {
      "code": "YT",
      "unicode": "U+1F1FE U+1F1F9",
      "name": "Mayotte",
      "emoji": "🇾🇹"
    },
    {
      "code": "ZA",
      "unicode": "U+1F1FF U+1F1E6",
      "name": "South Africa",
      "emoji": "🇿🇦"
    },
    {
      "code": "ZM",
      "unicode": "U+1F1FF U+1F1F2",
      "name": "Zambia",
      "emoji": "🇿🇲"
    },
    {
      "code": "ZW",
      "unicode": "U+1F1FF U+1F1FC",
      "name": "Zimbabwe",
      "emoji": "🇿🇼"
    }
  ];
  const codes = {"BD": "880", "BE": "32", "BF": "226", "BG": "359", "BA": "387", "BB": "+1-246", "WF": "681", "BL": "590", "BM": "+1-441", "BN": "673", "BO": "591", "BH": "973", "BI": "257", "BJ": "229", "BT": "975", "JM": "+1-876", "BV": "", "BW": "267", "WS": "685", "BQ": "599", "BR": "55", "BS": "+1-242", "JE": "+44-1534", "BY": "375", "BZ": "501", "RU": "7", "RW": "250", "RS": "381", "TL": "670", "RE": "262", "TM": "993", "TJ": "992", "RO": "40", "TK": "690", "GW": "245", "GU": "+1-671", "GT": "502", "GS": "", "GR": "30", "GQ": "240", "GP": "590", "JP": "81", "GY": "592", "GG": "+44-1481", "GF": "594", "GE": "995", "GD": "+1-473", "GB": "44", "GA": "241", "SV": "503", "GN": "224", "GM": "220", "GL": "299", "GI": "350", "GH": "233", "OM": "968", "TN": "216", "JO": "962", "HR": "385", "HT": "509", "HU": "36", "HK": "852", "HN": "504", "HM": " ", "VE": "58", "PR": "+1-787 and 1-939", "PS": "970", "PW": "680", "PT": "351", "SJ": "47", "PY": "595", "IQ": "964", "PA": "507", "PF": "689", "PG": "675", "PE": "51", "PK": "92", "PH": "63", "PN": "870", "PL": "48", "PM": "508", "ZM": "260", "EH": "212", "EE": "372", "EG": "20", "ZA": "27", "EC": "593", "IT": "39", "VN": "84", "SB": "677", "ET": "251", "SO": "252", "ZW": "263", "SA": "966", "ES": "34", "ER": "291", "ME": "382", "MD": "373", "MG": "261", "MF": "590", "MA": "212", "MC": "377", "UZ": "998", "MM": "95", "ML": "223", "MO": "853", "MN": "976", "MH": "692", "MK": "389", "MU": "230", "MT": "356", "MW": "265", "MV": "960", "MQ": "596", "MP": "+1-670", "MS": "+1-664", "MR": "222", "IM": "+44-1624", "UG": "256", "TZ": "255", "MY": "60", "MX": "52", "IL": "972", "FR": "33", "IO": "246", "SH": "290", "FI": "358", "FJ": "679", "FK": "500", "FM": "691", "FO": "298", "NI": "505", "NL": "31", "NO": "47", "NA": "264", "VU": "678", "NC": "687", "NE": "227", "NF": "672", "NG": "234", "NZ": "64", "NP": "977", "NR": "674", "NU": "683", "CK": "682", "XK": "", "CI": "225", "CH": "41", "CO": "57", "CN": "86", "CM": "237", "CL": "56", "CC": "61", "CA": "1", "CG": "242", "CF": "236", "CD": "243", "CZ": "420", "CY": "357", "CX": "61", "CR": "506", "CW": "599", "CV": "238", "CU": "53", "SZ": "268", "SY": "963", "SX": "599", "KG": "996", "KE": "254", "SS": "211", "SR": "597", "KI": "686", "KH": "855", "KN": "+1-869", "KM": "269", "ST": "239", "SK": "421", "KR": "82", "SI": "386", "KP": "850", "KW": "965", "SN": "221", "SM": "378", "SL": "232", "SC": "248", "KZ": "7", "KY": "+1-345", "SG": "65", "SE": "46", "SD": "249", "DO": "+1-809 and 1-829", "DM": "+1-767", "DJ": "253", "DK": "45", "VG": "+1-284", "DE": "49", "YE": "967", "DZ": "213", "US": "1", "UY": "598", "YT": "262", "UM": "1", "LB": "961", "LC": "+1-758", "LA": "856", "TV": "688", "TW": "886", "TT": "+1-868", "TR": "90", "LK": "94", "LI": "423", "LV": "371", "TO": "676", "LT": "370", "LU": "352", "LR": "231", "LS": "266", "TH": "66", "TF": "", "TG": "228", "TD": "235", "TC": "+1-649", "LY": "218", "VA": "379", "VC": "+1-784", "AE": "971", "AD": "376", "AG": "+1-268", "AF": "93", "AI": "+1-264", "VI": "+1-340", "IS": "354", "IR": "98", "AM": "374", "AL": "355", "AO": "244", "AQ": "", "AS": "+1-684", "AR": "54", "AU": "61", "AT": "43", "AW": "297", "IN": "91", "AX": "+358-18", "AZ": "994", "IE": "353", "ID": "62", "UA": "380", "QA": "974", "MZ": "258"};

  window.countries = {
    names: names,
    codes: codes
  };
})();
