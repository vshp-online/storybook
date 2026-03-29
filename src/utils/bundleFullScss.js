import fse from "fs-extra";
import path from "path";

export default function bundleFullScss() {
  return {
    name: "bundle-full-scss",
    generateBundle() {
      const rootDir = path.resolve("src/styles");
      const outputFilePath = "index.scss";
      const entryFile = "./src/styles/index.scss";

      // Читаем главный файл
      let scssContent = fse.readFileSync(entryFile, "utf-8");

      // Найдём все @use и @import
      const importRegex = /@(use|import)\s+["']([^"']+)"[^;]*;?/g;
      const matches = [...scssContent.matchAll(importRegex)];

      // Множество уже добавленных файлов (чтобы избежать дублей)
      const includedFiles = new Set();

      // Функция для нормализации пути
      function resolvePath(ref) {
        // Если относительный путь
        if (ref.startsWith("./") || ref.startsWith("../")) {
          return path.resolve(path.dirname(entryFile), ref + (ref.endsWith(".scss") ? "" : ".scss"));
        }
        // Или ищем в src/styles
        const fullPath = path.resolve(rootDir, ref + (ref.endsWith(".scss") ? "" : ".scss"));
        if (fse.existsSync(fullPath)) return fullPath;
        // Попробуем с подчёркиванием
        const withUnderscore = path.resolve(rootDir, "_" + ref + ".scss");
        return fse.existsSync(withUnderscore) ? withUnderscore : null;
      }

      // Рекурсивно собираем содержимое
      function includeFile(filePath) {
        if (!filePath || !fse.existsSync(filePath) || includedFiles.has(filePath)) return "";
        includedFiles.add(filePath);

        let content = fse.readFileSync(filePath, "utf-8");

        // Обрабатываем @use/@import внутри файла
        const nestedMatches = [...content.matchAll(importRegex)];
        for (const match of nestedMatches) {
          const ref = match[2];
          const resolved = resolvePath(ref);
          content = content.replace(match[0], includeFile(resolved));
        }

        return content + "\n";
      }

      // Подставляем содержимое вместо @use
      for (const match of matches) {
        const ref = match[2];
        const resolved = resolvePath(ref);
        const replacement = includeFile(resolved);
        scssContent = scssContent.replace(match[0], replacement);
      }

      // Убираем остатки @use (на случай, если что-то осталось)
      scssContent = scssContent.replace(importRegex, "");

      // Добавляем всё содержимое в бандл
      this.emitFile({
        type: "asset",
        fileName: outputFilePath,
        source: scssContent.trim(),
      });
    },
  };
}
