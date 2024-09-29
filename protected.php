<?php
// Start the session
session_start();

// Check if the user is authenticated
if (!isset($_SESSION['authenticated'])) {
    // If not authenticated, redirect to login page
    header('Location: login.php');
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visitor Information</title>
    <link rel="stylesheet" href="css/monitoringPanel.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.11.3/css/jquery.dataTables.min.css">

</head>
<body>
    
    <a class="LogoutButton" href="logout.php">Logout</a>
<div class="container">
    <h1>Visitors Information</h1>
    <table id="visitorTable" class="table display" style="width:100%">
    <thead>
   <tr>
      <th>ID</th>
      <th>Public IP</th>
      <th>Operating System</th>
      <th>Timezone</th>
      <th>Browser</th>
      <th>Resolution</th>
      <th>Language</th>
      <th>CPU Cores</th>
      <th>Online Status</th>
      <th>Connection Type</th>
      <th>Referrer</th>
      <th>Full Path</th>
      <th>Country</th> 
      <th>Region</th>
      <th>City</th>
      <th>Location (lat/lon)</th>
      <th>Organization</th> 
      <th>Timestamp</th>
   </tr>
</thead>

   <tbody>
   </tbody>
</table>




<!-- This is where the country flags will dynamically appear -->
<div id="countryCounts"></div>
</div>





<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"></script>
<script src="js/protected.js"></script>

</body>
</html>
