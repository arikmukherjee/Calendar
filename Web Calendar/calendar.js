function generateCalendar() {
    var calendar = document.getElementById('calendar');
  
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var today = date.getDate();
  
    var firstDay = new Date(year, month, 1);
    var lastDay = new Date(year, month + 1, 0);
  
    var table = document.createElement('div');
    table.className = 'table';
  
    // Create table header
    var tableHeader = document.createElement('div');
    tableHeader.className = 'table-row';
  
    var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (var i = 0; i < 7; i++) {
      var weekdayCell = document.createElement('div');
      weekdayCell.className = 'table-cell weekday';
      weekdayCell.textContent = weekdays[i];
      tableHeader.appendChild(weekdayCell);
    }
  
    table.appendChild(tableHeader);
  
    // Create table rows
    var currentDay = firstDay;
    while (currentDay <= lastDay) {
      var weekRow = document.createElement('div');
      weekRow.className = 'table-row';
  
      for (var j = 0; j < 7; j++) {
        var dayCell = document.createElement('div');
        dayCell.className = 'table-cell';
  
        if (currentDay.getMonth() === month) {
          dayCell.textContent = currentDay.getDate();
  
          if (currentDay.getDate() === today) {
            dayCell.className += ' current-day';
          }
        }
  
        weekRow.appendChild(dayCell);
        currentDay.setDate(currentDay.getDate() + 1);
      }
  
      table.appendChild(weekRow);
    }
  
    calendar.appendChild(table);
  }
  
  generateCalendar();
  