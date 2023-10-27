document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("callApiButton").addEventListener("click", function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const currentTab = tabs[0];
        const domain = new URL(currentTab.url).hostname;
    
        // Construct the API URL with the extracted domain
        const apiUrl = `http://localhost.com:5000/${domain}`;
    
        alert(apiUrl);
    
       
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            console.log("API response:", data);
    
            
            alert("API Response: " + JSON.stringify(data));
            
          })
          .catch(error => {
            console.error("API call failed:", error);
          });
      });
    });
  });
  