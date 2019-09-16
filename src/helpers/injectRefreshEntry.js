/** @typedef {string | string[] | import('webpack').Entry} StaticEntry */
/** @typedef {StaticEntry | import('webpack').EntryFunc} WebpackEntry */

/**
 * Injects an entry to the bundle for react-refresh.
 * @param {WebpackEntry} [originalEntry] A Webpack entry object.
 * @returns {WebpackEntry} An injected entry object.
 */
const injectRefreshEntry = originalEntry => {
  const ReactRefreshEntry = require.resolve('./ReactRefreshEntry');

  // Single string entry point
  if (typeof originalEntry === 'string') {
    return [ReactRefreshEntry, originalEntry];
  }
  // Single array entry point
  if (Array.isArray(originalEntry)) {
    return [ReactRefreshEntry, ...originalEntry];
  }
  // Multiple entry points
  if (typeof originalEntry === 'object') {
    return Object.entries(originalEntry).reduce(
      (acc, [curKey, curEntry]) => ({
        ...acc,
        [curKey]: injectRefreshEntry(curEntry),
      }),
      {}
    );
  }
  // Dynamic entry points
  if (typeof originalEntry === 'function') {
    return (...args) =>
      Promise.resolve(originalEntry(...args)).then(resolvedEntry =>
        injectRefreshEntry(resolvedEntry)
      );
  }

  throw new Error('Failed to parse the Webpack `entry` object!');
};

module.exports = injectRefreshEntry;
