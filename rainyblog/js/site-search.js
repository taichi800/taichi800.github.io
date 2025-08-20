(function () {
  let idx = []; // [{t:"Title",u:"/path",k:"keywords text"}]
  const $q = document.getElementById('q');
  const $out = document.getElementById('results');

  // defensive
  if (!$q || !$out) return;

  fetch('/index.json', { cache: 'no-store' })
    .then(r => r.ok ? r.json() : [])
    .then(j => { idx = Array.isArray(j) ? j : []; })
    .catch(() => { idx = []; });

  function render(items) {
    $out.innerHTML = '';
    for (const h of items.slice(0, 30)) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = h.u;
      a.textContent = h.t;
      li.appendChild(a);
      $out.appendChild(li);
    }
  }

  $q.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) { $out.innerHTML = ''; return; }
    // simple contains; no analytics, no ranking
    const hits = idx.filter(x => x.k && x.k.toLowerCase().includes(q));
    render(hits);
  });
})();
