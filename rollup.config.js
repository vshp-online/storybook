import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import cleaner from "rollup-plugin-cleaner";
import packageJson from "./package.json";

import scss from "rollup-plugin-scss";
import bundleScss from "rollup-plugin-bundle-scss";

const config = [
  {
    input: "./src/index.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
      },
      {
        file: packageJson.module,
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      cleaner({
        targets: ["./dist"],
      }),
      bundleScss({ exclusive: false, output: "index.scss" }),
      scss({
        outputStyle: "compressed",
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      commonjs(),
      terser(),
    ],
  },
];

export default config;
