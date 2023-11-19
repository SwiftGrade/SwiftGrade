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
        ["Chemistry", "50","50","100","4"],
        ["Biology", "50","50","100","4"],
        ["Artificial Intelligence Basics","50","50","100","4"],
        ["GCSS","50","50","100","4"],
        ["Mathematics Supplemental", "50","50","100","4"],
        ["English Supplemental", "50","50","100","4"],
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
      var selectedOption = document.getElementById("contentSelector").value;
      var tableData = optionData[selectedOption] || optionData.default;

      var tableContent = "<table>";

      for (var i = 0; i < tableData.length; i++) {
        tableContent += "<tr>";

        for (var j = 0; j < tableData[i].length; j++) {
          tableContent += "<td>" + tableData[i][j] + "</td>";
        }

        tableContent += "</tr>";
      }

      tableContent += "</table>";

      document.getElementById("dynamicTable").innerHTML = tableContent;
    }