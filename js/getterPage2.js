$(document).ready(function () {
  // Fetch Public IP and additional data from ipinfo
  $.getJSON("https://ipinfo.io?token=e32bf324130ea9", function (data) {
    const publicIp = data.ip;
    const loc = data.loc || "unknown"; // Location (lat/lon)
    const region = data.region || "unknown"; // Region or state
    const city = data.city || "unknown"; // City
    const org = data.org || "unknown"; // Organization or ISP

    // Collect visitor data including the full URL and referrer
    const visitorData = {
      ip: publicIp, // Public IP
      os: navigator.platform,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      browser: navigator.userAgent,
      resolution: `${screen.width}x${screen.height}`,
      language: navigator.language || navigator.userLanguage,
      cpuCores: navigator.hardwareConcurrency || "unknown",
      onlineStatus: navigator.onLine ? "Online" : "Offline",
      connectionType: navigator.connection
        ? navigator.connection.effectiveType
        : "unknown",
      referrer: document.referrer || "not provided", // Capture the referrer URL or default
      fullPath: window.location.href || "not provided", // Capture the full URL path
      loc: loc, // Latitude and Longitude
      region: region, // Region
      city: city, // City
      org: org, // Organization or ISP
    };

    // Log the visitor data, especially fullPath and additional info


    // Send visitor data to visitorHandler.php
    $.ajax({
      url: "static/visitorHandler.php",
      method: "POST",
      data: JSON.stringify(visitorData),
      contentType: "application/json",
      success: function (response) {
        
      },
      error: function (error) {
        
      },
    });
  }).fail(function () {
    
  });
});
