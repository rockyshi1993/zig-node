# zig-node

Placeholder npm package for the `zig-node` project.

## Install

```bash
npm install zig-node
```

## Current Package Surface

This first release intentionally exposes a tiny placeholder module while the project shape is still being defined.

```js
import metadata, { describe } from "zig-node";

console.log(metadata);
console.log(describe());
```

## Release

The npm package is published automatically when a tag matching the package version is pushed. Create the tag after the release commit is available on the remote branch.

```bash
git tag v0.0.1
git push origin v0.0.1
```

The publish workflow verifies that the tag version matches `package.json`, runs the release gate, performs a publish dry run, then publishes to npm using the `NPM_TOKEN` repository secret.
