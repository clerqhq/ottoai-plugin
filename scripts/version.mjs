import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const target = process.argv[2];
const semverPattern = /^(\d+)\.(\d+)\.(\d+)$/;

if (!target) {
  console.error("Usage: node scripts/version.mjs <patch|minor|major|x.y.z>");
  process.exit(1);
}

const versionFiles = [
  "package.json",
  "plugins/claude/.claude-plugin/plugin.json",
  "plugins/chatgpt/plugin.json",
];

function readJson(file) {
  return JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
}

function writeJson(file, data) {
  fs.writeFileSync(path.join(root, file), `${JSON.stringify(data, null, 2)}\n`);
}

function getNextVersion(current, versionTarget) {
  const match = current.match(semverPattern);
  if (!match) throw new Error(`Current version is not semver: ${current}`);

  const major = Number(match[1]);
  const minor = Number(match[2]);
  const patch = Number(match[3]);

  if (versionTarget === "patch") return `${major}.${minor}.${patch + 1}`;
  if (versionTarget === "minor") return `${major}.${minor + 1}.0`;
  if (versionTarget === "major") return `${major + 1}.0.0`;
  if (semverPattern.test(versionTarget)) return versionTarget;

  throw new Error(`Unsupported version target: ${versionTarget}`);
}

const packageJson = readJson("package.json");
const nextVersion = getNextVersion(packageJson.version, target);

for (const file of versionFiles) {
  const data = readJson(file);
  data.version = nextVersion;
  writeJson(file, data);
}

console.log(`Updated plugin version to ${nextVersion}`);
