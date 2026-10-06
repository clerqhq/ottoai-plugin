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
  rm("claude/assets");
  rm("claude/skills");
  cp("common/assets", "claude/assets");
  cp("common/skills", "claude/skills");
}

function buildChatGPT() {
  rm("chatgpt/assets");
  rm("chatgpt/skills");
  rm("chatgpt/extensions");
  cp("common/assets", "chatgpt/assets");
  cp("common/skills", "chatgpt/skills");
  cp("common/extensions", "chatgpt/extensions");
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
