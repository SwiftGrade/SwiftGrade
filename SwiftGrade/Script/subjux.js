var optionData = {
    op1: [
      ["Assignment", "Marks", "Due Date", "Status", "Submit"],
      ["C# Programming Worksheet", "10", "10/Nov/2023", "Late", ""],
      ["Game Dev Worksheet","10","17/Nov/2023","Complete",""],
      ["3D Modelling","10","24/Nov/2023","Pending",""],
      ["Unity 2D Worksheet","10","1/Dec/2023","Pending",""],
      ["Unity 3D Worksheet","10","8/Dec/2023","Pending",""],
      ["Unity Project","30","25/Jan/2023","Pending",""],
    ],
    op2: [
        ["Assignment", "Marks", "Due Date", "Status", "Submit"],
        ["Book Work","10","24/Nov/2023","Pending",""],
        ["Worksheet 1","10","30/Nov/2023","Pending",""],
    ],
    op3: [
        ["Assignment", "Marks", "Due Date", "Status", "Submit"],
        ["Book IPST","10","8/Nov/2023","Late",""],
        ["Polymer Lab","15","8/Nov/2023","Complete",""],
    ],
    op4: [
        ["Assignment", "Marks", "Due Date", "Status", "Submit"],
        ["Presentation","15","20/Dec/2023","Pending",""],
        ["Reduce Activity","15","20/Jan/2024","Pending",""],
        ["Lab","10","17/Nov/2023","Complete",""],
    ],
    op5: [
        ["Assignment", "Marks", "Due Date", "Status", "Submit"],
        ["Worksheet","10","24/Nov/2023","Pending",""],
    ],
    op6: [
        ["Assignment", "Marks", "Due Date", "Status", "Submit"],
        ["Worksheet","10","24/Nov/2023","Pending",""],
    ],
    default: [
        ["Assignment", "Marks", "Due Date", "Status", "Submit"],
        ["Worksheet","10","24/Nov/2023","Pending",""],
    ]
  };

  function updateTable() {
    // Show loader for 1 second
    document.getElementById("loader").style.display = "block";
    setTimeout(function () {
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

        // Check if any cell in the row contains 'Late' or 'Complete'
        var containsLate = false;
        var containsComplete = false;

        for (var j = 0; j < tableData[i].length; j++) {
          if (tableData[i][j] === "Late") {
            containsLate = true;
          }
          if (tableData[i][j] === "Complete") {
            containsComplete = true;
          }
        }

        // Apply classes to the row based on content
        var rowClass = '';

        if (containsLate) {
          rowClass = 'containsLate';
        } else if (containsComplete) {
          rowClass = 'containsComplete';
        }

        tableContent += "<tr class='" + rowClass + "'>";

        for (var k = 0; k < tableData[i].length; k++) {
          // Check if it's the "Status" column to include a button
          if (k === 4) {
            if (containsComplete) {
              // If the row contains 'Complete', set the last column to 'Submitted'
              tableContent += "<td>Submitted</td>";
            } else {
              tableContent += "<td class='button-container'><button onclick='handleButtonClick(" + i + ")'>Submit</button></td>";
            }
          } else {
            tableContent += "<td>" + tableData[i][k] + "</td>";
          }
        }

        tableContent += "</tr>";
      }

      tableContent += "</table>";

      document.getElementById("dynamicTable").innerHTML = tableContent;
    }, 1000); // 1000 milliseconds = 1 second
  }

  function handleButtonClick(rowIndex) {
    // Add your button click logic here, using the rowIndex to identify the clicked row
    alert("By Default, row " + rowIndex + " will be submitted.");
}