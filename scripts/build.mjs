import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const target = process.argv[2] ?? "all";

function rm(targetPath) {
  fs.rmSync(path.join(root, targetPath), { recursive: true, force: true });
}

function cp(from, to) {
  fs.cpSync(path.join(root, from), path.join(root, to), { recursive: true });
}

function buildClaude() {
  rm("plugins/claude/assets");
  rm("plugins/claude/skills");
  cp("common/assets", "plugins/claude/assets");
  cp("common/skills", "plugins/claude/skills");
}

function buildChatGPT() {
  rm("plugins/chatgpt/assets");
  rm("plugins/chatgpt/skills");
  rm("plugins/chatgpt/extensions");
  cp("common/assets", "plugins/chatgpt/assets");
  cp("common/skills", "plugins/chatgpt/skills");
  cp("common/extensions", "plugins/chatgpt/extensions");
}

if (target === "claude") {
  buildClaude();
} else if (target === "chatgpt") {
  buildChatGPT();
} else if (target === "all") {
  buildClaude();
  buildChatGPT();
} else {
  console.error(`Unknown build target: ${target}`);
  process.exit(1);
}
