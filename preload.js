// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.process1 = process
window.addEventListener('DOMContentLoaded', () => {
})
