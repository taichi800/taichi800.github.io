(function () {
  function loadEmbed(btn) {
    const id = btn.getAttribute('aria-controls');
    const host = document.getElementById(id);
    if (!host || !host.hasAttribute('data-src') || !host.hidden) return;

    const url = host.getAttribute('data-src');
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.title = 'External media';
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    // Sandbox is strict; loosen per provider only if required.
    iframe.sandbox = 'allow-scripts allow-same-origin allow-presentation';
    iframe.allowFullscreen = true;

    host.appendChild(iframe);
    host.hidden = false;

    btn.setAttribute('aria-expanded', 'true');
    // Move focus into the loaded content host for SR users
    host.setAttribute('tabindex', '-1');
    host.focus({ preventScroll: false });
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button[aria-controls]');
    if (btn) loadEmbed(btn);
  });
})();
