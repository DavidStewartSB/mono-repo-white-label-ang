#!/usr/bin/env bun
import { readdirSync, statSync, writeFileSync, existsSync } from "node:fs";
import { join, resolve, relative, basename } from "node:path";

/**
 * Snapshot de arquitetura de pastas (Bun/Node)
 *
 * Uso:
 *   bun run tools/snapshot-arch.mjs
 *   bun run tools/snapshot-arch.mjs --root . --out ARCHITECTURE_SNAPSHOT.md --format md
 *   bun run tools/snapshot-arch.mjs --root ./src --out snapshot.txt --format txt
 *
 * Extras:
 *   --depth 6
 *   --include-files true|false
 *   --show-hidden false
 */

const args = parseArgs(process.argv.slice(2));

const ROOT = resolve(args.root ?? process.cwd());
const OUT = resolve(args.out ?? join(ROOT, "ARCHITECTURE_SNAPSHOT.md"));
const FORMAT = (args.format ?? "md").toLowerCase(); // md | txt
const MAX_DEPTH = Number(args.depth ?? 12);
const INCLUDE_FILES = toBool(args["include-files"], true);
const SHOW_HIDDEN = toBool(args["show-hidden"], false);

const DEFAULT_IGNORES = new Set([
  ".git",
  ".idea",
  ".vscode",
  ".DS_Store",
  "node_modules",
  "dist",
  "build",
  "coverage",
  ".next",
  ".nuxt",
  ".output",
  ".turbo",
  ".cache",
  ".sass-cache",
  ".angular",
  "tmp",
  "temp",
  "logs",
  ".vercel",
]);

// Arquivos que normalmente só poluem snapshot (ajuste à vontade)
const IGNORE_FILE_PATTERNS = [
  /\.log$/i,
  /\.map$/i,
  /\.lock$/i, // se quiser manter lockfiles, remova esta linha
  /^bun\.lockb$/i,
  /^package-lock\.json$/i,
  /^pnpm-lock\.yaml$/i,
  /^yarn\.lock$/i,
];

// Heurística de “assembly” / camadas / módulos arquiteturais
const ARCHITECTURE_MARKERS = [
  /^src$/,
  /^src\/core$/,
  /^src\/application$/,
  /^src\/infrastructure$/,
  /^src\/shared$/,
  /^src\/scripts$/,
  /^src\/main\.(ts|js)$/,

  /^src\/infrastructure\/http$/,
  /^src\/infrastructure\/http\/controllers$/,
  /^src\/infrastructure\/http\/plugins$/,
  /^src\/infrastructure\/http\/middlewares$/,

  /^src\/infrastructure\/db$/,
  /^src\/infrastructure\/db\/drizzle$/,
  /^src\/infrastructure\/db\/kysely$/,

  /^src\/core\/use-cases$/,
  /^src\/core\/repositories$/,
  /^src\/core\/entities$/,
  /^src\/core\/value-objects$/,

  /^apps$/,
  /^packages$/,
  /^libs$/,
];

/** ---------- Execução ---------- */

if (!existsSync(ROOT)) {
  console.error(`❌ Root não existe: ${ROOT}`);
  process.exit(1);
}

const lines = [];
const meta = [];

meta.push(`# Snapshot da Arquitetura`);
meta.push("");
meta.push(`- **Root:** \`${ROOT}\``);
meta.push(`- **Gerado em:** ${new Date().toISOString()}`);
meta.push(`- **Formato:** \`${FORMAT}\``);
meta.push(`- **Profundidade máxima:** \`${MAX_DEPTH}\``);
meta.push(`- **Incluir arquivos:** \`${INCLUDE_FILES}\``);
meta.push("");

const treeLines = buildTree(ROOT, {
  maxDepth: MAX_DEPTH,
  includeFiles: INCLUDE_FILES,
  showHidden: SHOW_HIDDEN,
});

const assemblySection = buildAssemblyHints(ROOT);

let output = "";
if (FORMAT === "txt") {
  output = [
    "SNAPSHOT DA ARQUITETURA",
    "=======================",
    "",
    `Root: ${ROOT}`,
    `Gerado em: ${new Date().toISOString()}`,
    "",
    "Árvore de pastas:",
    ...treeLines,
    "",
    "Partes de assembly (heurística):",
    ...assemblySection,
    "",
  ].join("\n");
} else {
  output = [
    ...meta,
    "## Árvore de pastas",
    "",
    "```txt",
    ...treeLines,
    "```",
    "",
    "## Partes de assembly detectadas (heurística)",
    "",
    "```txt",
    ...assemblySection,
    "```",
    "",
    "_Dica: ajuste os marcadores em `ARCHITECTURE_MARKERS` para refletir seu padrão real (Clean/Hexagonal/Nx/etc)._",
    "",
  ].join("\n");
}

writeFileSync(OUT, output, "utf8");
console.log(`✅ Snapshot gerado em: ${OUT}`);

/** ---------- Helpers ---------- */

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];

    if (!token.startsWith("--")) continue;

    const [k, inlineVal] = token.slice(2).split("=");
    if (inlineVal !== undefined) {
      out[k] = inlineVal;
      continue;
    }

    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      out[k] = true;
      continue;
    }

    out[k] = next;
    i++;
  }
  return out;
}

function toBool(value, fallback = false) {
  if (value === undefined) return fallback;
  if (typeof value === "boolean") return value;
  const v = String(value).toLowerCase().trim();
  return ["1", "true", "yes", "y", "sim"].includes(v);
}

function shouldIgnoreName(name) {
  if (!SHOW_HIDDEN && name.startsWith(".")) return true;
  if (DEFAULT_IGNORES.has(name)) return true;
  return false;
}

function shouldIgnoreFile(name) {
  return IGNORE_FILE_PATTERNS.some((re) => re.test(name));
}

function listEntries(dir) {
  let items = readdirSync(dir, { withFileTypes: true });

  items = items.filter((d) => !shouldIgnoreName(d.name));

  // Se não incluir arquivos, deixa só diretórios
  if (!INCLUDE_FILES) {
    items = items.filter((d) => d.isDirectory());
  } else {
    items = items.filter((d) => !(d.isFile() && shouldIgnoreFile(d.name)));
  }

  // Ordenação: diretórios primeiro, depois arquivos; ambos por nome
  items.sort((a, b) => {
    if (a.isDirectory() && !b.isDirectory()) return -1;
    if (!a.isDirectory() && b.isDirectory()) return 1;
    return a.name.localeCompare(b.name, "pt-BR");
  });

  return items;
}

function buildTree(root, opts) {
  const rootName = basename(root);
  const lines = [rootName + "/"];

  walk(root, "", 0, lines, opts);
  return lines;
}

function walk(currentDir, prefix, depth, lines, opts) {
  if (depth >= opts.maxDepth) return;

  let entries = [];
  try {
    entries = listEntries(currentDir);
  } catch (err) {
    lines.push(prefix + "└── [sem acesso]");
    return;
  }

  const lastIndex = entries.length - 1;

  entries.forEach((entry, index) => {
    const isLast = index === lastIndex;
    const connector = isLast ? "└── " : "├── ";
    const nextPrefix = prefix + (isLast ? "    " : "│   ");
    const fullPath = join(currentDir, entry.name);

    if (entry.isDirectory()) {
      lines.push(prefix + connector + entry.name + "/");
      walk(fullPath, nextPrefix, depth + 1, lines, opts);
    } else if (entry.isFile()) {
      lines.push(prefix + connector + entry.name);
    } else {
      // symlink / outros
      try {
        const st = statSync(fullPath);
        if (st.isDirectory()) {
          lines.push(prefix + connector + entry.name + "/");
          walk(fullPath, nextPrefix, depth + 1, lines, opts);
        } else {
          lines.push(prefix + connector + entry.name);
        }
      } catch {
        lines.push(prefix + connector + entry.name + " [link/indisponível]");
      }
    }
  });
}

function buildAssemblyHints(root) {
  const found = [];

  scanForMarkers(root, root, found);

  if (!found.length) {
    return ["(Nenhum marcador arquitetural encontrado pela heurística)"];
  }

  // Dedup + ordena
  const uniq = [...new Set(found)].sort((a, b) => a.localeCompare(b, "pt-BR"));

  return uniq.map((p) => `- ${p}`);
}

function scanForMarkers(baseRoot, currentDir, acc) {
  let entries = [];
  try {
    entries = readdirSync(currentDir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    if (shouldIgnoreName(entry.name)) continue;

    const full = join(currentDir, entry.name);
    const rel = relative(baseRoot, full).replaceAll("\\", "/");

    // marca se bater em algum padrão
    if (ARCHITECTURE_MARKERS.some((re) => re.test(rel))) {
      acc.push(rel + (entry.isDirectory() ? "/" : ""));
    }

    // desce só em diretórios
    if (entry.isDirectory()) {
      scanForMarkers(baseRoot, full, acc);
    }
  }
}