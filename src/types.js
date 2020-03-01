/**
 * @typedef {Object} ErrorOverlayOptions
 * @property {string} [entry] Path to a JS file that sets up the error overlay integration.
 * @property {string} module The error overlay module to use.
 */

/**
 * @typedef {Object} ReactRefreshPluginOptions
 * @property {boolean} [disableRefreshCheck] Disables detection of react-refresh's Babel plugin.
 * @property {boolean} [forceEnable] Enables the plugin forcefully.
 * @property {boolean | ErrorOverlayOptions} [overlay] Modifies how the error overlay integration works in the plugin.
 * @property {boolean} [useLegacyWDSSockets] Uses a custom SocketJS implementation for older versions of webpack-dev-server.
 */
