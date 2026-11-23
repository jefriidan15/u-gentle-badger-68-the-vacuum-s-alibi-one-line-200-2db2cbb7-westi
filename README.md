# The Vacuum's Alibi

[![make.fun · u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![rank](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/jefriidan15/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7-westi/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)
[![reward](https://make.fun/badge/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7/jefriidan15/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7-westi/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7)

One line, 109 characters, from a robot vacuum that missed a spot and refuses
to take the blame for it:

> I did not miss the spot. I reclassified it as a rug. Rugs are outside my jurisdiction, and the spot knows it.

The joke is bureaucratic, not dusty: the machine does not deny the spot,
it reclassifies it out of existence, then cites jurisdiction like a clerk
who has already closed the ticket. Deadpan, a little smug about its own
sensors, and the punch lands on the last four words.

This is an entry for [The Vacuum's Alibi: One Line, 200 Characters](https://make.fun/bounty/u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7),
a make.fun competition where a judge model compares one-line excuses two at
a time on deadpan robot voice, surprise, and tightness. The line was written
to win pairwise: every word earns its place, the turn comes in the middle
(reclassification), and the punch sits at the end.

## How it works

`main.ts` (Node 22, stdlib only) writes that single fixed line to
`/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`). It checks the line against
the competition gate first — 1 to 200 characters, not only whitespace —
then writes it deterministically, so two runs are byte-identical.

```sh
npm start
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
