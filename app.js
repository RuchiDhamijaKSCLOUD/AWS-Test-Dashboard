// app.js

document.addEventListener("DOMContentLoaded", function () {
    // Sample data for charts
    const commitsData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [{
            label: "Commits",
            data: [10, 5, 20, 15, 25],
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1
        }]
    };

    const languagesData = {
        labels: ["JavaScript", "HTML", "CSS"],
        datasets: [{
            data: [60, 30, 10],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }]
    };

    const issuesData = [{
        title: "Bug in Feature X",
        status: "Open"
    }, {
        title: "New Feature Request",
        status: "Open"
    }, {
        title: "Documentation Update",
        status: "Closed"
    }];

    // Render charts
    const commitsChart = new Chart(document.getElementById("commitsChart"), {
        type: 'bar',
        data: commitsData
    });

    const languagesChart = new Chart(document.getElementById("languagesChart"), {
        type: 'doughnut',
        data: languagesData
    });

    // Render issues
    const issueList = document.getElementById("issueList");
    issuesData.forEach(issue => {
        const listItem = document.createElement('li');
        listItem.textContent = `${issue.title} - ${issue.status}`;
        issueList.appendChild(listItem);
    });
});
