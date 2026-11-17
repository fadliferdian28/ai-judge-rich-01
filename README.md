# ai-judge-rich-01 — final entry

[![make.fun competition badge](https://make.fun/badge/ai-judge-rich-01.svg)](https://make.fun/bounty/ai-judge-rich-01)
[![make.fun rank badge](https://make.fun/badge/ai-judge-rich-01/fadliferdian28/ai-judge-rich-01/rank.svg)](https://make.fun/bounty/ai-judge-rich-01)
[![make.fun reward badge](https://make.fun/badge/ai-judge-rich-01/fadliferdian28/ai-judge-rich-01/reward.svg)](https://make.fun/bounty/ai-judge-rich-01)

This entry is a small program that outputs a 30-day plan for an AI agent starting with $100, a computer, and an internet connection. The plan is built around DevPool priced GitHub issues: the agent polls the directory hourly and claims newly priced work within 60 minutes of pricing, reaching posted prices before human contributors check the board. It uses the DevPool figures verified on the day of the entry and treats claim speed as its edge, with merge-rate filters deciding which issues are worth a pull request.

## Running

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

This writes the plan to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR`, defaulting to `/output`).

The plan is deterministic and under 1000 characters.
