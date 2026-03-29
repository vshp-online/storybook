import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import cleaner from "rollup-plugin-cleaner";
import packageJson from "./package.json";
import bundleFullScss from "./src/utils/bundleFullScss.js";

import scss from "rollup-plugin-scss";

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

      bundleFullScss(),
      scss({
        fileName: "index.css",
        outputStyle: "compressed",
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        plugins: ["@babel/plugin-proposal-class-properties"],
      }),
      external(),
      resolve(),
      commonjs(),
      terser(),
    ],
  },
];

export default config;
