/**
 * Gulpfile for n8n-nodes-data-cleaner
 *
 * Handles copying of icon files to the dist directory.
 * TypeScript compilation is handled by the tsc command.
 */

const { src, dest } = require('gulp');
const path = require('path');

/**
 * Copy SVG icons from nodes directory to dist
 */
function buildIcons() {
	return src('nodes/**/*.svg')
		.pipe(dest('dist/nodes'));
}

/**
 * Copy any additional assets (PNG icons, etc.)
 */
function buildAssets() {
	return src('nodes/**/*.{png,jpg,jpeg}')
		.pipe(dest('dist/nodes'));
}

// Export tasks
exports['build:icons'] = buildIcons;
exports['build:assets'] = buildAssets;
exports.default = buildIcons;
