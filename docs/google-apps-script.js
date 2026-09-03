// Google Apps Script - เพิ่มใน Google Sheet > Extensions > Apps Script

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  // เพิ่มข้อมูลใหม่ในแถวถัดไป
  sheet.appendRow([
    new Date(),           // เวลา
    data.name,            // ชื่อ
    data.email,           // อีเมล
    data.subject,         // หัวข้อ
    data.message          // ข้อความ
  ]);
  
  return ContentService.createTextOutput(
    JSON.stringify({success: true})
  ).setMimeType(ContentService.MimeType.JSON);
}
