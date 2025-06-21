// Handle Audience Insights button
document.getElementById('fetchStats').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: "getStats"});
  });
});

// Handle Promo Content button
document.getElementById('generatePost').addEventListener('click', () => {
  const promoText = `🌟 CJ Ascend Plaza - Seoul's Premier Innovation Hub 🌟

✅ 15,000+ daily visitors
✅ 87% occupancy rate
✅ Prime location in Gangnam

Perfect for tech enterprises and premium retail!
👉 Connect with elite audiences today.`;

  document.getElementById('results').innerText = promoText;
});

// Receive data from content script
chrome.runtime.onMessage.addListener((request) => {
  if (request.stats) {
    document.getElementById('results').innerHTML = `
      <h4>Audience Insights:</h4>
      <p><strong>Age Range:</strong> ${request.stats.ageRange}</p>
      <p><strong>Top Interests:</strong> ${request.stats.interests}</p>
      <p><strong>Income Level:</strong> ${request.stats.income}</p>
    `;
  }
});
