/**
 * Genesis Club — Waitlist Form Backend
 * Deploy as Google Apps Script Web App
 * Receives POST requests from the landing page form
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Add headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'LinkedIn', 'Company', 'Position', 'Twitter', 'Motivation']);
    }

    sheet.appendRow([
      new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.linkedin || '',
      data.company || '',
      data.position || '',
      data.twitter || '',
      data.motivation || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
