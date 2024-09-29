$(document).ready(function () {
  const countryFlags = {
    // Arab countries
    SA: "🇸🇦", // Saudi Arabia
    AE: "🇦🇪", // United Arab Emirates
    KW: "🇰🇼", // Kuwait
    QA: "🇶🇦", // Qatar
    OM: "🇴🇲", // Oman
    BH: "🇧🇭", // Bahrain
    IQ: "🇮🇶", // Iraq
    SY: "🇸🇾", // Syria
    LB: "🇱🇧", // Lebanon
    JO: "🇯🇴", // Jordan
    PS: "🇵🇸", // Palestine
    EG: "🇪🇬", // Egypt
    MA: "🇲🇦", // Morocco
    DZ: "🇩🇿", // Algeria
    TN: "🇹🇳", // Tunisia
    LY: "🇱🇾", // Libya
    SD: "🇸🇩", // Sudan
    MR: "🇲🇷", // Mauritania
    YE: "🇾🇪", // Yemen
    SO: "🇸🇴", // Somalia
    DJ: "🇩🇯", // Djibouti
    KM: "🇰🇲", // Comoros

    // Global countries
    US: "🇺🇸", // United States
    CA: "🇨🇦", // Canada
    GB: "🇬🇧", // United Kingdom
    DE: "🇩🇪", // Germany
    FR: "🇫🇷", // France
    JP: "🇯🇵", // Japan
    IN: "🇮🇳", // India
    CN: "🇨🇳", // China
    BR: "🇧🇷", // Brazil
    AU: "🇦🇺", // Australia
    IT: "🇮🇹", // Italy
    ES: "🇪🇸", // Spain
    MX: "🇲🇽", // Mexico
    RU: "🇷🇺", // Russia
    KR: "🇰🇷", // South Korea
    AR: "🇦🇷", // Argentina
    ZA: "🇿🇦", // South Africa
    NG: "🇳🇬", // Nigeria
    TR: "🇹🇷", // Turkey
    ID: "🇮🇩", // Indonesia
    PK: "🇵🇰", // Pakistan
    MY: "🇲🇾", // Malaysia
    TH: "🇹🇭", // Thailand
    VN: "🇻🇳", // Vietnam
    PH: "🇵🇭", // Philippines
    BD: "🇧🇩", // Bangladesh
    PL: "🇵🇱", // Poland
    NL: "🇳🇱", // Netherlands
    SE: "🇸🇪", // Sweden
    NO: "🇳🇴", // Norway
    DK: "🇩🇰", // Denmark
    FI: "🇫🇮", // Finland
    CH: "🇨🇭", // Switzerland
    AT: "🇦🇹", // Austria
    BE: "🇧🇪", // Belgium
    IE: "🇮🇪", // Ireland
    PT: "🇵🇹", // Portugal
    GR: "🇬🇷", // Greece
    IL: "🇮🇱", // Israel
    AF: "🇦🇫", // Afghanistan
    LK: "🇱🇰", // Sri Lanka
    NP: "🇳🇵", // Nepal
    MM: "🇲🇲", // Myanmar
    KH: "🇰🇭", // Cambodia
    SG: "🇸🇬", // Singapore
    NZ: "🇳🇿", // New Zealand
    CL: "🇨🇱", // Chile
    PE: "🇵🇪", // Peru
    CO: "🇨🇴", // Colombia
    VE: "🇻🇪", // Venezuela
    CU: "🇨🇺", // Cuba
    DO: "🇩🇴", // Dominican Republic
    JM: "🇯🇲", // Jamaica
    HT: "🇭🇹", // Haiti
    CR: "🇨🇷", // Costa Rica
    PA: "🇵🇦", // Panama
    GT: "🇬🇹", // Guatemala
    HN: "🇭🇳", // Honduras
    SV: "🇸🇻", // El Salvador
    BZ: "🇧🇿", // Belize
    NI: "🇳🇮", // Nicaragua
    PY: "🇵🇾", // Paraguay
    UY: "🇺🇾", // Uruguay
    BO: "🇧🇴", // Bolivia
    EC: "🇪🇨", // Ecuador
    MG: "🇲🇬", // Madagascar
    KE: "🇰🇪", // Kenya
    TZ: "🇹🇿", // Tanzania
    UG: "🇺🇬", // Uganda
    ET: "🇪🇹", // Ethiopia
    GH: "🇬🇭", // Ghana
    CI: "🇨🇮", // Ivory Coast
    SN: "🇸🇳", // Senegal
    ZW: "🇿🇼", // Zimbabwe
    ZM: "🇿🇲", // Zambia
    MW: "🇲🇼", // Malawi
    MZ: "🇲🇿", // Mozambique
    BW: "🇧🇼", // Botswana
    NA: "🇳🇦", // Namibia
    LS: "🇱🇸", // Lesotho
    SZ: "🇸🇿", // Eswatini
    CM: "🇨🇲", // Cameroon
    CG: "🇨🇬", // Republic of the Congo
    CD: "🇨🇩", // DR Congo
    AO: "🇦🇴", // Angola
    GA: "🇬🇦", // Gabon
    GQ: "🇬🇶", // Equatorial Guinea

    // Already included countries and territories without specific emoji flag
    AD: "🏳️", // Andorra
    AG: "🏳️", // Antigua and Barbuda
    BB: "🏳️", // Barbados
    BS: "🏳️", // Bahamas
    BT: "🏳️", // Bhutan
    CV: "🏳️", // Cape Verde
    DM: "🏳️", // Dominica
    FJ: "🏳️", // Fiji
    GD: "🏳️", // Grenada
    GY: "🏳️", // Guyana
    KI: "🏳️", // Kiribati
    KN: "🏳️", // Saint Kitts and Nevis
    LC: "🏳️", // Saint Lucia
    MV: "🏳️", // Maldives
    MH: "🏳️", // Marshall Islands
    NR: "🏳️", // Nauru
    PW: "🏳️", // Palau
    SB: "🏳️", // Solomon Islands
    TO: "🏳️", // Tonga
    TV: "🏳️", // Tuvalu
    VU: "🏳️", // Vanuatu
    WS: "🏳️", // Samoa

    // Additional countries and territories
    AI: "🏳️", // Anguilla
    AW: "🏳️", // Aruba
    BM: "🏳️", // Bermuda
    BV: "🏳️", // Bouvet Island
    CK: "🏳️", // Cook Islands
    CX: "🏳️", // Christmas Island
    CC: "🏳️", // Cocos (Keeling) Islands
    CW: "🏳️", // Curaçao
    FK: "🏳️", // Falkland Islands
    FO: "🏳️", // Faroe Islands
    GF: "🏳️", // French Guiana
    PF: "🏳️", // French Polynesia
    TF: "🏳️", // French Southern Territories
    GI: "🏳️", // Gibraltar
    GL: "🏳️", // Greenland
    GP: "🏳️", // Guadeloupe
    GU: "🏳️", // Guam
    GG: "🏳️", // Guernsey
    HM: "🏳️", // Heard Island and McDonald Islands
    IM: "🏳️", // Isle of Man
    JE: "🏳️", // Jersey
    KP: "🏳️", // North Korea
    KY: "🏳️", // Cayman Islands
    LI: "🏳️", // Liechtenstein
    MO: "🏳️", // Macao
    MP: "🏳️", // Northern Mariana Islands
    MS: "🏳️", // Montserrat
    NC: "🏳️", // New Caledonia
    NF: "🏳️", // Norfolk Island
    PN: "🏳️", // Pitcairn Islands
    PM: "🏳️", // Saint Pierre and Miquelon
    BL: "🏳️", // Saint Barthelemy
    SH: "🏳️", // Saint Helena
    MF: "🏳️", // Saint Martin (French)
    SX: "🏳️", // Sint Maarten (Dutch)
    SM: "🏳️", // San Marino
    ST: "🏳️", // São Tomé and Príncipe
    GS: "🏳️", // South Georgia and South Sandwich Islands
    SJ: "🏳️", // Svalbard and Jan Mayen
    TC: "🏳️", // Turks and Caicos Islands
    UM: "🏳️", // United States Minor Outlying Islands
    VC: "🏳️", // Saint Vincent and the Grenadines
    WF: "🏳️", // Wallis and Futuna
    YT: "🏳️", // Mayotte
    AX: "🏳️", // Åland Islands

    // Regions and disputed territories (without emoji flags)
    XK: "🏳️", // Kosovo
    AS: "🏳️", // American Samoa
    IO: "🏳️", // British Indian Ocean Territory
    EH: "🏳️", // Western Sahara
    PR: "🏳️", // Puerto Rico
    VA: "🏳️", // Vatican City
    PS: "🏳️", // Palestine (if not using a specific emoji)
    HK: "🏳️", // Hong Kong
    TW: "🏳️", // Taiwan
    AQ: "🏳️", // Antarctica
    RE: "🏳️", // Réunion
    MQ: "🏳️", // Martinique
    CV: "🏳️", // Cape Verde
  };

  function initializeDataTable() {
    let countryCounts = {}; // To store the country counts

    $("#visitorTable").DataTable({
      pageLength: 10,
      lengthMenu: [
        [10, 20, 50, 100],
        [10, 20, 50, 100],
      ],
      scrollX: true,
      columns: [
        { data: "id", title: "ID", visible: true },
        { data: "ip", title: "Public IP", visible: true },
        { data: "os", title: "Operating System", visible: true },
        { data: "timezone", title: "Timezone", visible: true },
        { data: "browser", title: "Browser", visible: true },
        { data: "resolution", title: "Resolution", visible: true },
        { data: "language", title: "Language", visible: true },
        { data: "cpuCores", title: "CPU Cores", visible: true },
        { data: "onlineStatus", title: "Online Status", visible: true },
        { data: "connectionType", title: "Connection Type", visible: true },
        { data: "referrer", title: "Referrer", visible: true },
        { data: "fullPath", title: "Full Path", visible: true },
        { data: "country", title: "Country", visible: true },
        { data: "region", title: "Region", visible: true },
        { data: "city", title: "City", visible: true },
        { data: "loc", title: "Location", visible: true }, // For latitude/longitude
        { data: "org", title: "Organization", visible: true }, // Organization/ISP
        { data: "timestamp", title: "Timestamp", visible: true },
      ],
      ajax: {
        url: "visitorHandler.php",
        dataSrc: function (json) {
          countryCounts = {}; // Reset country counts

          // Loop through the data and count occurrences of each country
          json.forEach(function (visitor) {
            if (visitor.country in countryFlags) {
              countryCounts[visitor.country] =
                (countryCounts[visitor.country] || 0) + 1;
            }
          });

          // Sort and display the countries based on the counts
          displayCountryCounts(countryCounts);

          return json;
        },
      },
    });
  }

  // Function to display country counts inside the #countryCounts div with sorting
  function displayCountryCounts(countryCounts) {
    const countryContainer = document.getElementById("countryCounts"); // Get the container element
    countryContainer.innerHTML = ""; // Clear previous content

    // Convert the countryCounts object into an array and sort by the count in descending order
    const sortedCountries = Object.keys(countryCounts).sort(
      (a, b) => countryCounts[b] - countryCounts[a]
    );

    let count = 0;
    let countryRowDiv = document.createElement("div"); // Create a new div for country rows
    countryRowDiv.className = "country-columns"; // Add the necessary class for styling

    sortedCountries.forEach(function (countryCode) {
      if (countryCounts[countryCode] > 0) {
        // Create the box for each country
        const countryBox = document.createElement("div");
        countryBox.className = "country-box"; // Add the class for styling

        // Create the flag element
        const flagSpan = document.createElement("span");
        flagSpan.className = "country-flag";
        flagSpan.textContent = countryFlags[countryCode] || "🏳️";

        // Create the count element
        const countSpan = document.createElement("span");
        countSpan.className = "country-count";
        countSpan.textContent = countryCounts[countryCode];

        // Append the flag and count to the countryBox
        countryBox.appendChild(flagSpan);
        countryBox.appendChild(countSpan);

        // Append the countryBox to the row div
        countryRowDiv.appendChild(countryBox);

        count++;

        // After every 6 countries, append the row to the container and create a new row
        if (count % 6 === 0) {
          countryContainer.appendChild(countryRowDiv); // Append the row div to the container
          countryRowDiv = document.createElement("div"); // Create a new row div for the next set
          countryRowDiv.className = "country-columns";
        }
      }
    });

    // Append the last row if there are remaining items
    if (count % 6 !== 0) {
      countryContainer.appendChild(countryRowDiv);
    }
  }

  // Initialize the DataTable and country count section
  if (!$.fn.DataTable.isDataTable("#visitorTable")) {
    initializeDataTable();
  }



 
  // Ensure the #countryCounts is placed correctly in the container
$(".container").append('<div id="countryCounts"></div>');

});
