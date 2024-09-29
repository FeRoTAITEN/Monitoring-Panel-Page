<?php
// Enable error reporting for debugging purposes
error_reporting(E_ALL);
ini_set('display_errors', 1);


// PLEASE CHANGE DATABASE Database connection details
$host = 'PUT YOUR DATABASE SERVER IP HERE';
$dbname = 'DATABASE SERVER NAME';
$username = 'DATABASE USERNAME';
$password = 'DATABASE PASSWORD';

try {
    // Establish database connection
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    header('Content-Type: application/json');
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed: ' . $e->getMessage()]);
    exit();
}

// Function to get IP info (country, region, city, loc, org) from IP using the ipinfo API
function getIPInfo($ip) {
    $ipinfoToken = 'e32bf324130ea9'; // Replace with your actual ipinfo token
    $url = "https://ipinfo.io/{$ip}?token={$ipinfoToken}";
    
    try {
        $json = file_get_contents($url);
        if ($json === FALSE) {
            throw new Exception('Unable to fetch data from IP info API');
        }
        $details = json_decode($json, true);
        return [
            'country' => isset($details['country']) ? $details['country'] : 'unknown',
            'region' => isset($details['region']) ? $details['region'] : 'unknown',
            'city' => isset($details['city']) ? $details['city'] : 'unknown',
            'loc' => isset($details['loc']) ? $details['loc'] : 'unknown', // Latitude and Longitude
            'org' => isset($details['org']) ? $details['org'] : 'unknown',  // Organization
        ];
    } catch (Exception $e) {
        error_log("Error fetching IP info: " . $e->getMessage());
        return [
            'country' => 'unknown',
            'region' => 'unknown',
            'city' => 'unknown',
            'loc' => 'unknown',
            'org' => 'unknown'
        ];
    }
}

// Handle the request based on the method (GET or POST)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Handle saving data (formerly saveUserData.php)
    $data = json_decode(file_get_contents('php://input'), true);

    // Log incoming data to check for fullPath and IP
    error_log("Received visitor data: " . print_r($data, true));

    // Function to extract browser name from the user agent
    function getBrowserInfo($userAgent) {
        if (strpos($userAgent, 'Chrome') !== false && strpos($userAgent, 'Safari') !== false && strpos($userAgent, 'Edge') === false) {
            return 'Google Chrome';
        } elseif (strpos($userAgent, 'Firefox') !== false) {
            return 'Mozilla Firefox';
        } elseif (strpos($userAgent, 'Safari') !== false && strpos($userAgent, 'Chrome') === false) {
            return 'Safari';
        } elseif (strpos($userAgent, 'Edge') !== false || strpos($userAgent, 'Edg') !== false) {
            return 'Microsoft Edge';
        } elseif (strpos($userAgent, 'Opera') !== false || strpos($userAgent, 'OPR') !== false) {
            return 'Opera';
        } else {
            return 'Unknown';
        }
    }

    // Extract browser info and handle missing fields gracefully
    $browser = getBrowserInfo($data['browser']);
    $fullPath = isset($data['fullPath']) ? $data['fullPath'] : 'not provided';
    $referrer = isset($data['referrer']) ? $data['referrer'] : 'not provided';

    // Get additional info from the IP address
    $ipInfo = getIPInfo($data['ip']);
    $country = $ipInfo['country'];
    $region = $ipInfo['region'];
    $city = $ipInfo['city'];
    $loc = $ipInfo['loc'];
    $org = $ipInfo['org'];

    // Log the fullPath and country to ensure they are being passed correctly
    error_log("Full Path received: " . $fullPath);
    error_log("Country detected from IP: " . $country);

    // SQL query to insert visitor data, including loc, region, city, org
    $sql = "INSERT INTO visitors (ip, os, timezone, browser, resolution, language, cpuCores, onlineStatus, connectionType, referrer, fullPath, country, region, city, loc, org, TIMESTAMP)
            VALUES (:ip, :os, :timezone, :browser, :resolution, :language, :cpuCores, :onlineStatus, :connectionType, :referrer, :fullPath, :country, :region, :city, :loc, :org, NOW())";
    $stmt = $pdo->prepare($sql);

    try {
        // Execute the query with the visitor data
        $stmt->execute([
            ':ip' => $data['ip'],
            ':os' => $data['os'],
            ':timezone' => $data['timezone'],
            ':browser' => $browser,
            ':resolution' => $data['resolution'],
            ':language' => $data['language'],
            ':cpuCores' => $data['cpuCores'],
            ':onlineStatus' => $data['onlineStatus'],
            ':connectionType' => $data['connectionType'],
            ':referrer' => $referrer,
            ':fullPath' => $fullPath,
            ':country' => $country,
            ':region' => $region,
            ':city' => $city,
            ':loc' => $loc,
            ':org' => $org
        ]);

        // Return success response
        echo json_encode(['status' => 'success']);
    } catch (PDOException $e) {
        // Return SQL error as JSON
        echo json_encode(['status' => 'error', 'message' => 'SQL Error: ' . $e->getMessage()]);
    }

} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Handle fetching data (formerly visitorData.php)
    try {
        // Prepare SQL query to fetch visitor information, including loc, region, city, org
        $sql = "SELECT id, ip, os, timezone, browser, resolution, language, cpuCores, onlineStatus, connectionType, referrer, fullPath, country, region, city, loc, org, TIMESTAMP as timestamp FROM visitors";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        $visitors = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Log the data to check its order
        error_log(print_r($visitors, true));

        // Return the data as a JSON response
        header('Content-Type: application/json');
        echo json_encode($visitors);

    } catch (PDOException $e) {
        // Return SQL error as JSON response
        header('Content-Type: application/json');
        echo json_encode(['status' => 'error', 'message' => 'SQL Error: ' . $e->getMessage()]);
    }
} else {
    // Return a 405 Method Not Allowed response for unsupported methods
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method Not Allowed']);
}
?>
