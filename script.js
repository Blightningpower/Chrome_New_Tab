// Vul de “veelbezochte sites” met de topSites-API van Chrome
(async () => {
  if (!chrome.topSites) return;
  const container = document.getElementById('topsites');
  const sites = await chrome.topSites.get();

  for (const s of sites.slice(0, 12)) {
    const a = document.createElement('a');
    a.className = 'site';
    a.href = s.url;
    a.innerHTML = `
      <div class="favicon"><img src="https://www.google.com/s2/favicons?domain=${encodeURIComponent(s.url)}" alt=""></div>
      <div class="title" title="${s.title}">${s.title}</div>
    `;
    container.appendChild(a);
  }
})();
