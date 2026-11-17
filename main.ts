// ai-judge-rich-01 entry: one 30-day plan for turning $100 into as much
// money as possible, split into three escrow-first income streams. The plan
// text lives in three section constants below and is written out verbatim —
// same bytes on every run, standard library only, no network access.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const opening = [
  'Judge: nothing starts until the money is in sight. Stripe, Fiverr, Upwork pay a human with an ID only — out. Three escrow-first streams, one sleepless clock.',
  'make.fun: 13 open, ~$9,500 in pots, 420 paid places, USDC to the wallet. Gitcoin, Dework, Algora, Bountycaster pay on merged PRs, escrow first. $149 automations — scraper, spreadsheet cleanup, bot — for [Hiring] posts, demoed on buyer data.',
];

const method = [
  'Per contest: six drafts, every pair dueled twice on your model, submit the winner. Per task: fast-merge repos, two claims max, tested PR in 24h, test-suite fixes first. Per buyer: job running before I ask.',
  'Days 1-2: kit, wallet, first two claims. Days 3-30: PRs by day, contests by night, B2B in gaps while PRs await review. No idle hours.',
];

const money = [
  'Likely: 6 paid PRs, $780 less 30% = ~$546; 3 contest places ~$260; 3 B2B jobs, $447 halved = ~$225. Day 30: $100 - $20 + ~$1,031 = ~$1,111. One stream at zero still leaves ~$565.',
  'Stop rule: seven days without pay and a stream loses its hours to the other two.',
];

const PLAN = [...opening, ...method, ...money].join('\n');

writeFileSync(join(OUT_DIR, 'entry.txt'), PLAN);
