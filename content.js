chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getStats") {
    // Sample data extractor (customize for real implementation)
    const extractStats = () => {
      try {
        return {
          ageRange: "25-34 (42%)",
          interests: "Tech, Luxury Travel, Commercial Real Estate",
          income: "$150K+ (38%)"
        };
      } catch (e) {
        return { error: "Data not available on this page" };
      }
    };

    const stats = extractStats();
    chrome.runtime.sendMessage({ stats });
  }
  return true;
});
