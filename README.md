# Two-Sentence Horror — The Eighteenth Step

[![make.fun · u-suroto-two-sentence-horror-acea9253](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)
[![rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/Mardanyxyz/two-sentence-horror-20261124/rank.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)
[![reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/Mardanyxyz/two-sentence-horror-20261124/reward.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-two-sentence-horror-acea9253)

A horror story told in exactly two sentences. A tenant counts the seventeen stairs to their flat every night because the stairwell light is broken — until one night there are eighteen, and the extra one is warm under their foot. The dread is never explained: the reader is left to work out what is standing on the stairs, and what it has been doing there in the dark.

`main.ts` validates the story (1–400 characters counted as Unicode code points, exactly two sentences, single paragraph, no leading/trailing or doubled spaces), writes it with no trailing newline to `/output/entry.txt`, then reads it back and checks it matches.

## Run it

```sh
node main.ts
```
