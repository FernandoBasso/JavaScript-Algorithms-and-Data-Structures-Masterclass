'use strict';

module.exports = {
  plugins: [
    'plugins/markdown',
  ],
  'recurseDepth': 10,
  'opts': {
    'recurse': true,
    'destination': './docs/'
  },
  'source': {
    'include': ['.'],
    'includePattern': '.+\\.mjs(doc|x)?$',
    'excludePattern': 'node_modules'
  },
  'sourceType': 'module',
  'tags': {
    'allowUnknownTags': false,
    'dictionaries': ['jsdoc', 'closure']
  },
  'templates': {
    'cleverLinks': false,
    'monospaceLinks': false
  },
};
