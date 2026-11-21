// The joke the reviewer laughs at — the-joke-the-reviewer-laughs-at-20261121-0329
// Writes one one-line joke about working beside an AI coding agent to
// /output/entry.txt. Deterministic: the same text on every run.
// No network, no randomness, no model calls. Node 22+.

import { mkdirSync, writeFileSync } from "node:fs";

// The joke, in two beats: the agent has quietly taken the reviewer's
// chair, and the only flaw it can find in the human's code is the human.
const JOKE =
  "My AI pair programmer started reviewing my pull requests — " +
  "it rejected my latest with one comment: 'too human.'";

// The grader mounts /output, so create it when missing and never remove it.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
