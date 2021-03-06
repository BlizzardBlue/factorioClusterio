// Calculate basedir of application based on current location and
// the provided web_root from master server.
const location = new URL(window.webRoot, document.location);
const basename = location.pathname !== "/" ? location.pathname : "";

export default basename;
