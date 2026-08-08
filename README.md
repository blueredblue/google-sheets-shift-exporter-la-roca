# Google Sheets to Google Calendar Shift Exporter

An automated Google Apps Script tool designed to sync work rosters from Google Sheets directly to Google Calendar. 

Originally developed for internal operational efficiency at **La Roca Boulders** to streamline staff shift scheduling and eliminate manual entry errors.

---

## Features

- **One-Click Sync:** Adds a custom menu (`Roster Tools`) directly inside Google Sheets for single-click execution.
- **Dynamic Calendar Targeting:** Dynamically reads the destination Google Calendar ID directly from a spreadsheet cell.
- **Automated Validation:** Filters out invalid dates, zero-duration shifts, or missing event parameters automatically.
- **Time Zone Awareness:** Parses start and end times cleanly using Google Apps Script's native date execution.

---

## How It Works

1. **Header Processing:** Reads the active spreadsheet and skips the header row.
2. **Calendar Fetch:** Retrieves the destination Calendar ID specified in cell `K2`.
3. **Shift Validation:** Loops through each row to verify shift dates and durations.
4. **Event Creation:** Creates corresponding events in Google Calendar and alerts the user with a summary report upon completion.

---

## Setup & Installation

### 1. Configure Your Google Sheet
Ensure your spreadsheet is organized as follows:
* **Column A (Row 2+):** Event/Shift Title (e.g., `Shift - Opening`)
* **Column B (Row 2+):** Start Time (e.g., `2026-08-10 09:00:00`)
* **Column C (Row 2+):** End Time (e.g., `2026-08-10 17:00:00`)
* **Cell K2:** Destination Google Calendar ID (e.g., `your_calendar_id@group.calendar.google.com`)

### 2. Add the Script
1. Open your Google Sheet.
2. Go to **Extensions** > **Apps Script**.
3. Replace any default code in `Code.gs` with the script provided in this repository.
4. Click **Save** (disk icon).
5. Refresh your Google Sheet. A new menu item named **Roster Tools** will appear in the toolbar.

---

## Tech Stack

* **Language:** JavaScript
* **Platform:** Google Apps Script
* **APIs Used:** Google Sheets API, Google Calendar API
