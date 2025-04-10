const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("rollup-plugin-typescript2");
const json = require("@rollup/plugin-json");
const pkg = require("./package.json");
const { dts } = require("rollup-plugin-dts");

module.exports = [
	{
		input: "src/index.tsx",
		output: [
			{
				file: pkg.main,
				format: "cjs",
				sourcemap: true,
			},
			{
				file: pkg.module,
				format: "esm",
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript({
				useTsconfigDeclarationDir: true,
				tsconfig: "./tsconfig.json",
				clean: true,
				include: ["src/**/*.ts", "src/**/*.tsx"],
				tsconfigOverride: {
					compilerOptions: {
						declaration: true,
						declarationDir: "dist/types",
					},
				},
			}),
			json(),
		],
		external: ["react", "react-dom"],
	},
	{
		input: "dist/types/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts()],
	},
];
