"use strict";
const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const common = require("@clusterio/web_ui/webpack.common");

module.exports = (env = {}) => merge(common(env), {
	entry: "./web/index.jsx",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "static"),
	},
	plugins: [
		new webpack.container.ModuleFederationPlugin({
			name: "subspace_storage",
			library: { type: "var", name: "plugin_subspace_storage" },
			filename: "remoteEntry.js",
			exposes: {
				"./info": "./info.js",
			},
			shared: {
				"@clusterio/lib": { import: false },
				"@clusterio/web_ui": { import: false },
				"ajv": { import: false },
				"antd": { import: false },
				"react": { import: false },
				"react-dom": { import: false },
			},
		}),
	],
});
