/**
 * Exports shift roster events from a Google Sheet to Google Calendar.
 */
function exportEventsToCalendar() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();

  // Remove header row
  data.shift();

  // Fetch Calendar ID from cell K2
  const calendarId = sheet.getRange("K2").getValue();
  if (!calendarId) {
    SpreadsheetApp.getUi().alert("Error: Calendar ID in cell K2 is empty.");
    return;
  }

  const calendar = CalendarApp.getCalendarById(calendarId);
  if (!calendar) {
    SpreadsheetApp.getUi().alert("Error: Unable to access Calendar. Check ID and permissions.");
    return;
  }

  let createdCount = 0;
  let skippedCount = 0;

  data.forEach((row) => {
    const [subject, startRaw, endRaw] = row;

    if (!subject || !startRaw || !endRaw) return;

    const startTime = new Date(startRaw);
    const endTime = new Date(endRaw);

    // Ensure valid dates and non-zero duration
    if (!isNaN(startTime) && !isNaN(endTime) && startTime.getTime() !== endTime.getTime()) {
      calendar.createEvent(subject, startTime, endTime);
      createdCount++;
    } else {
      skippedCount++;
    }
  });

  SpreadsheetApp.getUi().alert(`Export complete: ${createdCount} events created, ${skippedCount} skipped.`);
}

/**
 * Creates custom menu in Google Sheets.
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Roster Tools')
    .addItem('Export Shifts to Calendar', 'exportEventsToCalendar')
    .addToUi();
}
