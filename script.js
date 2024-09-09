document.addEventListener("DOMContentLoaded", function () {
  // Dropdown menu functionality

  // Access logging
  var currentPage = window.location.pathname;
  console.log("Page accessed: " + currentPage);

  // You could use Azure Application Insights or a similar service for real logging
  // For example, if using Application Insights:
  // if (typeof appInsights !== 'undefined') {
  //     appInsights.trackPageView(currentPage);
  // }
});
