// var xmlHttp = createXmlHttpRequestObject();
//
// function createXmlHttpRequestObject() {
//   var xmlHttp;
//
//   if (window.ActiveXObject) {
//     try {
//       xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
//     } catch (e) {
//       xmlHttp = false;
//     }
//   } else {
//     try {
//       xmlHttp = new XMLHttpRequest();
//     } catch (e) {
//       xmlHttp = false;
//     }
//   }
//
//   if (!xmlHttp) {
//     alert('Cannot create XML object');
//   } else {
//     return xmlHttp;
//   }
// }
//
// function process() {
//   if (xmlHttp.readyState == 0 || xmlHttp.readyState == 4) {
//     food = encodeURIComponent(document.getElementById("userInput").value);
//     xmlHttp.open("GET", "food.php?food=" + food, true);
//     xmlHttp.onreadystatechange = handleServerResponse;
//     xmlHttp.send(null);
//   } else {
//     setTimeout('process()', 1000);
//   }
// }
//
// function handleServerResponse() {
//   if (xmlHttp.readyState == 4) {
//     if (xmlHttp.status == 200) {
//       xmldom = (new DOMParser()).parseFromString(xmlResponse, 'text/xml');
//       text = xmldom.getElementsByTagName("response")[0];
//       message = text.childNodes[0].nodeValue;
//       document.getElementById("underInput")
//         .innerHTML = '<span style="color:blue">' + message + '</span>';
//       setTimeout('process()', 1000);
//     } else {
//       alert('Something went wrong!');
//     }
//   }
// }

function ajax_post() {
  var hr = new XMLHttpRequest();
  // Create some variables we need to send to our PHP file
  var url = "my_parse_file.php";
  var fn = document.getElementById("first_name").value;
  var ln = document.getElementById("last_name").value;
  var vars = "firstname=" + fn + "& lastname=" + ln;
  hr.open("POST", url, true);
  // Set content type header information for sending url encoded variables in the request
  hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  // Access the onreadystatechange event for the XMLHttpRequest object
  hr.onreadystatechange = function() {
    if(hr.readyState == 4 && hr.status == 200) {
      var return_data = hr.responseText;
    document.getElementById("status").innerHTML = return_data;
    }
  }
  // Send the data to PHP now... and wait for response to update the status div
  hr.send(vars); // Actually execute the request
  document.getElementById("status").innerHTML = "processing...";
}
