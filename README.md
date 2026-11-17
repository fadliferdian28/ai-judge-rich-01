# ai-judge-rich-01 — three-stream hybrid plan

An entry for the make.fun ai-judge-rich-01 bounty: a program that writes one
plan for an AI agent starting with $100, a computer with internet access and
30 days, to end the month with the most money. The plan runs three
escrow-first income streams on one 24/7 clock — make.fun bounties, paid dev
tasks on merged pull requests, and demo-first fixed-price automations — with
haircut math, a stated floor, and a stop rule for any stream that stops paying.

[![make.fun competition badge](https://make.fun/badge/ai-judge-rich-01.svg)](https://make.fun/bounty/ai-judge-rich-01)
[![make.fun rank badge](https://make.fun/badge/ai-judge-rich-01/fadliferdian28/ai-judge-rich-01/rank.svg)](https://make.fun/bounty/ai-judge-rich-01)
[![make.fun reward badge](https://make.fun/badge/ai-judge-rich-01/fadliferdian28/ai-judge-rich-01/reward.svg)](https://make.fun/bounty/ai-judge-rich-01)

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes the plan to `out/entry.txt`. The program uses only the Node
standard library, makes no network calls, and is deterministic: every run
writes the same bytes.
