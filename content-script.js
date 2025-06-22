// Перехват fetch
const originalFetch = window.fetch;
window.fetch = async (url, options) => {
    if (typeof url === 'string' &&
        (url.includes('/api/v1/battle-canvas/pixels/by-price') ||
            url.includes('/api/v1/battle-canvas/pixels/by-squad'))) {
        const newUrl = new URL(url);
        if (newUrl.searchParams.get('limit') === '10') {
            newUrl.searchParams.set('limit', '50');
            url = newUrl.toString();
        }
    }
    return originalFetch(url, options);
};

// Перехват XMLHttpRequest
const originalXHROpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function (method, url) {
    if (typeof url === 'string' &&
        (url.includes('/api/v1/battle-canvas/pixels/by-price') ||
            url.includes('/api/v1/battle-canvas/pixels/by-squad'))) {
        const newUrl = new URL(url);
        if (newUrl.searchParams.get('limit') === '10') {
            newUrl.searchParams.set('limit', '50');
            url = newUrl.toString();
        }
    }
    originalXHROpen.apply(this, arguments);
};