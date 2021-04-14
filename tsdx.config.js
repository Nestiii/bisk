const sass = require('rollup-plugin-sass');
const svgr = require('@svgr/rollup').default;

module.exports = {
    rollup(config) {
        config.plugins.push(sass({ insert: true }), svgr());
        return config;
    },
};