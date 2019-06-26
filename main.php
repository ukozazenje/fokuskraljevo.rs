<?php 

// Takes raw data from the request
$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json, true);


$to = "mzecevic04@gmail.com";
$subject = "Poruka sa web sajta";

$message = "
<html>
<head>
<title>HTML email</title>
</head>
<body>
<table style='border-color: #666;' cellpadding='10' >
<tr style='background: #eee; font-size: 18px;'>
<td><strong>Ime: </strong></td>
<td>" . $data['name'] . "</td>
</tr>
<tr style='background: #eee; font-size: 18px;'>
<td><strong>Email: </strong></td>
<td>" . $data['email'] . "</td>
</tr>
<tr style='background: #eee; font-size: 16px;'>
<td><strong>Poruka: </strong></td>
<td>" . $data['message'] . "</td>
</tr>
</table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <fokuskraljevo.rs@ns2-mb.tron-inter.net>' . "\r\n";
$headers .= 'Cc: mzecevic04@gmail.com' . "\r\n";

$to = 'fokuskraljevo@gmail.com';			
$subject = 'Poruka sa web sajta';

mail($to,$subject,$message,$headers);

?>