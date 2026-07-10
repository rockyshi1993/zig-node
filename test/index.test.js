import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import metadata, { describe } from "../index.js";

const packageJson = JSON.parse(
  await readFile(new URL("../package.json", import.meta.url), "utf8")
);

test("exports placeholder metadata", () => {
  assert.equal(metadata.name, packageJson.name);
  assert.equal(metadata.version, packageJson.version);
  assert.equal(metadata.status, "placeholder");
});

test("describes placeholder status", () => {
  assert.match(describe(), /placeholder npm package/);
});
