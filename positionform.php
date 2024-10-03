<?php
if (isset($_POST['posla'])) {
    $jsDatala = $_POST['posla'];
    $jsDatalo = $_POST['poslo'];
    $jsDatatime = $_POST['time'];
    
}
$filePath = 'pos.json';



// Read the existing JSON data from the file
$jsonData = file_get_contents($filePath);

// Decode the JSON data into a PHP array
$dataArray = json_decode($jsonData, true);

$data = array(
    "la" => $jsDatala,
    "lo" => $jsDatalo,
    "DateTime" => $jsDatatime 
);

$dataArray[] = $data;
// print_r($data);
// Convert the array to JSON format

$updatedJsonData = json_encode($dataArray, JSON_PRETTY_PRINT);

// Write the updated JSON data back to the file
if (file_put_contents($filePath, $updatedJsonData)) {
    echo "Data successfully appended to $filePath";
} else {
    echo "Error writing data to $filePath";
}


