import { defineConfig, globalIgnores } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

export default defineConfig([
	...nextVitals,
	...nextTypeScript,
	prettier,
	{
		plugins: {
			"@stylistic": stylistic,
		},
		rules: {
			"@stylistic/indent": ["error", "tab", { SwitchCase: 1 }],
			"no-mixed-spaces-and-tabs": "off",
			"linebreak-style": "off",
			quotes: "off",
			semi: ["error", "always"],
			"brace-style": ["error", "1tbs"],
			"no-console": ["warn", { allow: ["warn", "error"] }],
			"no-var": "error",
			"no-empty": ["error", { allowEmptyCatch: true }],
			"@typescript-eslint/no-explicit-any": "warn",
			"react/display-name": "off",
			"react/no-unescaped-entities": "off",
			"@typescript-eslint/no-empty-object-type": "off",
		},
	},
	globalIgnores([
		".now/**",
		".next/**",
		".clerk/**",
		".husky/**",
		"dist/**",
		"esm/**",
		"out/**",
		"build/**",
		"coverage/**",
		"public/**",
		"tests/**",
		"scripts/**",
		"**/*.css",
		"**/*.config.js",
		"**/*.tsbuildinfo",
		"bun.lockb",
		"**/*.log",
		".idea/**",
		".vscode/**",
		"**/.DS_Store",
	]),
]);
