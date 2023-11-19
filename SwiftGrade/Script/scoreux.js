var optionData = {
    op1: [
        ["Name", "Midterm","Final","Score","GPA"],
        ["Thai Fundamental", "50","50","100","4"],
        ["Mathematics Fundamental", "50","50","100","4"],
        ["Science Fundamental", "50","50","100","4"],
        ["Computer", "50","50","100","4"],
        ["Social Fundamental", "50","50","100","4"],
        ["History", "50","50","100","4"],
        ["Health and Physical Education", "50","50","100","4"],
        ["Art", "50","50","100","4"],
        ["English Fundamental", "50","50","100","4"],
        ["Mathematics Supplemental", "50","50","100","4"],
        ["Mathematics MLP", "50","50","100","4"],
        ["Physics", "50","50","100","4"],
        ["Chemistry", "50","50","100","4"],
        ["Biology", "50","50","100","4"],
        ["Social Supplemental", "50","50","100","4"],
        ["Mathematics Supplemental", "50","50","100","4"],
        ["English Supplemental", "50","50","100","4"],
        ["English MLP", "50","50","100","4"],
    ],
    op2: [
        ["Name", "Midterm","Final","Score","GPA"],
        ["Thai Fundamental", "50","50","100","4"],
        ["Mathematics Fundamental", "50","50","100","4"],
        ["Science Fundamental", "50","50","100","4"],
        ["Computer", "50","50","100","4"],
        ["Social Fundamental", "50","50","100","4"],
        ["History", "50","50","100","4"],
        ["Health and Physical Education", "50","50","100","4"],
        ["Art", "50","50","100","4"],
        ["English Fundamental", "50","50","100","4"],
        ["Mathematics Supplemental", "50","50","100","4"],
        ["Mathematics MLP", "50","50","100","4"],
        ["Physics", "50","50","100","4"],
        ["Chemistry", "50","50","100","4"],
        ["Biology", "50","50","100","4"],
        ["Social Supplemental", "50","50","100","4"],
        ["Mathematics Supplemental", "50","50","100","4"],
        ["English Supplemental", "50","50","100","4"],
        ["English MLP", "50","50","100","4"],
    ],
    op3: [
        ["Name", "Midterm","Final","Score","GPA"],
        ["Thai Fundamental", "50","50","100","4"],
        ["Mathematics Fundamental", "50","50","100","4"],
        ["Science Fundamental", "50","50","100","4"],
        ["Computer", "50","50","100","4"],
        ["Social Fundamental", "50","50","100","4"],
        ["History", "50","50","100","4"],
        ["Health and Physical Education", "50","50","100","4"],
        ["Art", "50","50","100","4"],
        ["English Fundamental", "50","50","100","4"],
        ["Mathematics Supplemental", "50","50","100","4"],
        ["Physics", "50","50","100","4"],
        ["Chemistry", "15","12","27","0"],//zero
        ["Biology", "50","50","100","4"],
        ["Artificial Intelligence Basics","50","50","100","4"],
        ["GCSS","50","50","100","4"],
        ["Mathematics Supplemental", "50","50","100","4"],
        ["English Supplemental", "43","12","55","R"],//R
        ["English MLP", "50","50","100","4"],
    ],
    op4: [
        ["Name", "Midterm","Final","Score","GPA"],
        ["Thai Fundamental", "50","50","100","4"],
        ["Mathematics Fundamental", "50","50","100","4"],
        ["Science Fundamental", "50","50","100","4"],
        ["Computer", "50","50","100","4"],
        ["Social Fundamental", "50","50","100","4"],
        ["History", "50","50","100","4"],
        ["Health and Physical Education", "50","50","100","4"],
        ["Art", "50","50","100","4"],
        ["English Fundamental", "50","50","100","4"],
        ["Mathematics Supplemental", "50","50","100","4"],
        ["Physics", "50","50","100","4"],
        ["Chemistry", "50","50","100","4"],
        ["Biology", "50","50","100","4"],
        ["Artificial Intelligence Basics","50","50","100","4"],
        ["GCSS","50","50","100","4"],
        ["Mathematics Supplemental", "50","50","100","4"],
        ["English Supplemental", "50","50","100","4"],
        ["English MLP", "50","50","100","4"],
    ],
    op5: [
        ["Name", "Midterm","Final","Score","GPA"],
        ["Thai Fundamental", "50","50","100","4"],
        ["Mathematics Fundamental", "50","50","100","4"],
        ["Science Fundamental", "50","50","100","4"],
        ["Computer", "50","50","100","4"],
        ["Social Fundamental", "50","50","100","4"],
        ["History", "50","50","100","4"],
        ["Health and Physical Education", "50","50","100","4"],
        ["Art", "50","50","100","4"],
        ["English Fundamental", "50","50","100","4"],
        ["Mathematics Supplemental", "50","50","100","4"],
        ["Physics", "50","50","100","4"],
        ["Chemistry", "50","50","100","4"],
        ["Biology", "50","50","100","4"],
        ["Artificial Intelligence Basics","50","50","100","4"],
        ["GCSS","50","50","100","4"],
        ["Mathematics Supplemental", "50","50","100","4"],
        ["English Supplemental", "50","50","100","4"],
        ["English MLP", "50","50","100","4"],
    ],
    op6: [
        ["Name", "Midterm","Final","Score","GPA"],
        ["Thai Fundamental", "50","50","100","4"],
        ["Mathematics Fundamental", "50","50","100","4"],
        ["Science Fundamental", "50","50","100","4"],
        ["Computer", "50","50","100","4"],
        ["Social Fundamental", "50","50","100","4"],
        ["History", "50","50","100","4"],
        ["Health and Physical Education", "50","50","100","4"],
        ["Art", "50","50","100","4"],
        ["English Fundamental", "50","50","100","4"],
        ["Mathematics Supplemental", "50","50","100","4"],
        ["Physics", "50","50","100","4"],
        ["Chemistry", "50","50","100","4"],
        ["Biology", "50","50","100","4"],
        ["Artificial Intelligence Basics","50","50","100","4"],
        ["GCSS","50","50","100","4"],
        ["Mathematics Supplemental", "50","50","100","4"],
        ["English Supplemental", "50","50","100","4"],
        ["English MLP", "50","50","100","4"],
    ],
    default: [
        ["Name", "Midterm","Final","Score","GPA"],
    ]
  };

  function updateTable() {
    // Show loader for 1 second
    document.getElementById("loader").style.display = "block";
    setTimeout(function() {
      document.getElementById("loader").style.display = "none";
      
      var selectedOption = document.getElementById("contentSelector").value;
      var tableData = optionData[selectedOption] || optionData.default;

      var tableContent = "<table>";

      for (var i = 0; i < tableData.length; i++) {
        // Check if it's the first row for headers
        var isFirstRow = i === 0;

        // Create <th> elements for the first row
        if (isFirstRow) {
          tableContent += "<tr>";

          for (var h = 0; h < tableData[i].length; h++) {
            tableContent += "<th>" + tableData[i][h] + "</th>";
          }

          tableContent += "</tr>";
          continue; // Skip to the next iteration
        }

        // Check if any cell in the row contains '0' or 'R'
        var containsZero = false;
        var containsR = false;

        for (var j = 0; j < tableData[i].length; j++) {
          if (tableData[i][j] === '0') {
            containsZero = true;
          }
          if (tableData[i][j] === 'R') {
            containsR = true;
          }
        }

        // Apply classes to the row based on content
        var rowClass = '';

        if (containsZero && !containsR) {
          rowClass = 'containsZero';
        } else if (containsR) {
          rowClass = 'containsR';
        }

        tableContent += "<tr class='" + rowClass + "'>";

        for (var k = 0; k < tableData[i].length; k++) {
          tableContent += "<td>" + tableData[i][k] + "</td>";
        }

        tableContent += "</tr>";
      }

      tableContent += "</table>";

      document.getElementById("dynamicTable").innerHTML = tableContent;
    }, 1000); // 1000 milliseconds = 1 second
  }

  // Call updateTable when the page is loaded to display default content
  window.onload = updateTable;