let tabId;

const getCurrentTab = async() => {
	const queryOptions = { active: true, currentWindow: true };
	let [tab] = await chrome.tabs.query(queryOptions);
	tabId = tab.id;
}

chrome.tabs.onUpdated.addListener(async() => {
	await getCurrentTab().then(
		chrome.scripting.executeScript(
			{
				target: {tabId: tabId},
				files: ["/lib/jquery-3.6.0.min.js"],
			},
			() => {
				chrome.scripting.executeScript({
					target: {tabId: tabId},
					files: ["/script.js"]
				});
			}
		)
	);
});

