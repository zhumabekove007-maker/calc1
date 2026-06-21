// ============================================================
// data-hard-ch1.js — "Harder Chapter 1 Problem Practice"
// A separate, harder problem set covering graph-reading, table
// estimation, infinite limits, an applied compound-interest
// problem, formal epsilon-delta work, continuity, and the
// Intermediate-Value Theorem. Mixes two kinds of parts:
//   kind: 'interactive'  -> has a single checkable answer (uses Engine.checkAnswer)
//   kind: 'discussion'   -> open-ended / proof / construction; shows a
//                           model solution on toggle, no answer-checking
// ============================================================
window.HARD_CH1 = {
  intro: `These problems are harder and more open-ended than the main practice sets — drawn from a standard end-of-chapter review (graph reading, table estimation, infinite limits, an applied problem, formal \\(\\varepsilon\\text{-}\\delta\\) work, continuity, and the Intermediate-Value Theorem). Some have a single checkable answer; others are proofs, paragraphs, or constructions where there's no single right string to type — those show a model solution instead of an answer box.`,
  groups: [

  // ============================================================
  {
    heading: 'Reading Limits from a Graph and from Tables',
    problems: [
      {
        num: '1',
        statement: `For the function \\(f\\) graphed below, find the limit if it exists.`,
        figure: `<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of a piecewise function f used for problem 1, showing a hole, two jumps, a vertical asymptote near x=4, and a horizontal asymptote at y=5.">
  <g>
    <line x1="55" y1="25" x2="55" y2="355" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="101.7" y1="25" x2="101.7" y2="355" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="148.3" y1="25" x2="148.3" y2="355" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="195" y1="25" x2="195" y2="355" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="241.7" y1="25" x2="241.7" y2="355" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="288.3" y1="25" x2="288.3" y2="355" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="335" y1="25" x2="335" y2="355" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="381.7" y1="25" x2="381.7" y2="355" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="428.3" y1="25" x2="428.3" y2="355" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="475" y1="25" x2="475" y2="355" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="521.7" y1="25" x2="521.7" y2="355" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="568.3" y1="25" x2="568.3" y2="355" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="615" y1="25" x2="615" y2="355" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="355" x2="615" y2="355" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="331.4" x2="615" y2="331.4" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="307.9" x2="615" y2="307.9" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="284.3" x2="615" y2="284.3" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="260.7" x2="615" y2="260.7" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="237.1" x2="615" y2="237.1" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="213.6" x2="615" y2="213.6" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="190" x2="615" y2="190" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="166.4" x2="615" y2="166.4" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="142.9" x2="615" y2="142.9" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="119.3" x2="615" y2="119.3" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="95.7" x2="615" y2="95.7" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="72.1" x2="615" y2="72.1" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="48.6" x2="615" y2="48.6" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="25" x2="615" y2="25" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
  </g>
  <line x1="55" y1="284.3" x2="615" y2="284.3" stroke="#1E2238" stroke-width="1.5"/>
  <line x1="195" y1="25" x2="195" y2="355" stroke="#1E2238" stroke-width="1.5"/>
  <text x="608" y="278" font-size="13" fill="#1E2238">x</text>
  <text x="200" y="33" font-size="13" fill="#1E2238">y</text>
  <text x="55" y="371" font-size="11" text-anchor="middle" fill="#565b74">-3</text>
  <text x="101.7" y="371" font-size="11" text-anchor="middle" fill="#565b74">-2</text>
  <text x="148.3" y="371" font-size="11" text-anchor="middle" fill="#565b74">-1</text>
  <text x="241.7" y="371" font-size="11" text-anchor="middle" fill="#565b74">1</text>
  <text x="288.3" y="371" font-size="11" text-anchor="middle" fill="#565b74">2</text>
  <text x="335" y="371" font-size="11" text-anchor="middle" fill="#565b74">3</text>
  <text x="381.7" y="371" font-size="11" text-anchor="middle" fill="#565b74">4</text>
  <text x="428.3" y="371" font-size="11" text-anchor="middle" fill="#565b74">5</text>
  <text x="475" y="371" font-size="11" text-anchor="middle" fill="#565b74">6</text>
  <text x="521.7" y="371" font-size="11" text-anchor="middle" fill="#565b74">7</text>
  <text x="568.3" y="371" font-size="11" text-anchor="middle" fill="#565b74">8</text>
  <text x="615" y="371" font-size="11" text-anchor="middle" fill="#565b74">9</text>
  <text x="45" y="359" font-size="11" text-anchor="end" fill="#565b74">-3</text>
  <text x="45" y="311.9" font-size="11" text-anchor="end" fill="#565b74">-1</text>
  <text x="45" y="264.7" font-size="11" text-anchor="end" fill="#565b74">1</text>
  <text x="45" y="217.6" font-size="11" text-anchor="end" fill="#565b74">3</text>
  <text x="45" y="170.4" font-size="11" text-anchor="end" fill="#565b74">5</text>
  <text x="45" y="123.3" font-size="11" text-anchor="end" fill="#565b74">7</text>
  <text x="45" y="76.1" font-size="11" text-anchor="end" fill="#565b74">9</text>
  <text x="45" y="29" font-size="11" text-anchor="end" fill="#565b74">11</text>
  <line x1="381.7" y1="25" x2="381.7" y2="166.4" stroke="#A4711F" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="381.7" y1="166.4" x2="615" y2="166.4" stroke="#A4711F" stroke-width="1.5" stroke-dasharray="5,4"/>
  <path d="M 55,307.9 L 195,237.1" stroke="#38458F" stroke-width="2.5" fill="none"/>
  <path d="M 55,307.9 L 68,303.6 M 55,307.9 L 62,317.6" stroke="#38458F" stroke-width="2.5" fill="none"/>
  <circle cx="195" cy="237.1" r="5" fill="#F1EFE6" stroke="#38458F" stroke-width="2.5"/>
  <circle cx="195" cy="284.3" r="5" fill="#38458F" stroke="#38458F" stroke-width="2.5"/>
  <path d="M 195,284.3 197.3,284.2 199.7,284.1 202,283.8 204.3,283.3 206.7,282.8 209,282.2 211.3,281.4 213.7,280.5 216,279.5 218.3,278.4 220.7,277.2 223,275.8 225.3,274.3 227.7,272.7 230,271 232.3,269.2 234.7,267.3 237,265.2 239.3,263" stroke="#38458F" stroke-width="2.5" fill="none"/>
  <circle cx="241.7" cy="260.7" r="5" fill="#F1EFE6" stroke="#38458F" stroke-width="2.5"/>
  <path d="M 243.1,259.3 245.4,256.8 247.7,254.2 250.1,251.5 252.4,248.6 254.7,245.7 257.1,242.6 259.4,239.4 261.7,236.1 264.1,232.7 266.4,229.1 268.7,225.4 271.1,221.7 273.4,217.8 275.7,213.7 278.1,209.6 280.4,205.3 282.7,201 285.1,196.5 287.4,191.9" stroke="#38458F" stroke-width="2.5" fill="none"/>
  <circle cx="288.3" cy="190" r="5" fill="#F1EFE6" stroke="#38458F" stroke-width="2.5"/>
  <circle cx="241.7" cy="166.4" r="5" fill="#38458F" stroke="#38458F" stroke-width="2.5"/>
  <circle cx="288.3" cy="166.4" r="5" fill="#38458F" stroke="#38458F" stroke-width="2.5"/>
  <path d="M 288.3,166.4 L 335,190" stroke="#38458F" stroke-width="2.5" fill="none"/>
  <circle cx="335" cy="190" r="5" fill="#38458F" stroke="#38458F" stroke-width="2.5"/>
  <path d="M 335,190 L 381.7,166.4" stroke="#38458F" stroke-width="2.5" fill="none"/>
  <circle cx="381.7" cy="166.4" r="5" fill="#F1EFE6" stroke="#38458F" stroke-width="2.5"/>
  <path d="M 383.5,25 386.3,25 389.1,25 391.9,59.3 394.7,82.2 397.5,97.1 400.3,107.5 403.1,115.2 405.9,121.1 408.7,125.8 411.5,129.6 414.3,132.8 417.1,135.4 419.9,137.7 422.7,139.6 425.5,141.4 428.3,142.9 431.1,144.2 433.9,145.4 436.7,146.5 439.5,147.4 442.3,148.3 445.1,149.1 447.9,149.8 450.7,150.5 453.5,151.1 456.3,151.7 459.1,152.2 461.9,152.7 464.7,153.2 467.5,153.6 470.3,154 473.1,154.4 475.9,154.8 478.7,155.1 481.5,155.4 484.3,155.7 487.1,156 489.9,156.3 492.7,156.5 495.5,156.8 498.3,157 501.1,157.2 503.9,157.4 506.7,157.6 509.5,157.8 512.3,158 515.1,158.2 517.9,158.4 520.7,158.5 523.5,158.7 526.3,158.8 529.1,159 531.9,159.1 534.7,159.2 537.5,159.4 540.3,159.5 543.1,159.6 545.9,159.7 548.7,159.8 551.5,160 554.3,160.1 557.1,160.2 559.9,160.3 562.7,160.4 565.5,160.4 568.3,160.5 571.1,160.6 573.9,160.7 576.7,160.8 579.5,160.9 582.3,160.9 585.1,161 587.9,161.1 590.7,161.2 593.5,161.2 596.3,161.3 599.1,161.4 601.9,161.4 604.7,161.5 607.5,161.6 610.3,161.6 613.1,161.7" stroke="#38458F" stroke-width="2.5" fill="none"/>
  <path d="M 613.1,161.7 L 622,159 M 613.1,161.7 L 622,166" stroke="#38458F" stroke-width="2.5" fill="none"/>
  <text x="386" y="20" font-size="10" fill="#A4711F">↑ +∞</text>
  <text x="430" y="180" font-size="10" fill="#A4711F">y = 5 (asymptote)</text>
  <text x="358" y="40" font-size="10" fill="#A4711F" text-anchor="middle">x = 4</text>
  <circle cx="75" cy="318" r="5" fill="#F1EFE6" stroke="#1E2238" stroke-width="2"/>
  <text x="87" y="322" font-size="11" fill="#1E2238">open = limit value (not f's value there)</text>
  <circle cx="75" cy="340" r="5" fill="#1E2238" stroke="#1E2238" stroke-width="2"/>
  <text x="87" y="344" font-size="11" fill="#1E2238">filled = f's actual value at that x</text>
</svg>`,
        parts: [
          { label: 'a', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to1}f(x)\\)`, inputType: 'numeric', answer: '1', formatHint: 'Enter a number, or DNE.',
            hints: [`There's an open circle exactly on the curve at \\(x=1\\) — what height is it at?`, `The filled dot floating above (at height 5) is \\(f(1)\\) itself, which the *limit* ignores.`],
            solution: [`The curve passes through an open circle at \\((1,1)\\) — that's the value the curve approaches from both sides.`, `The filled dot at \\((1,5)\\) is the actual (different) value \\(f(1)=5\\), which limits don't care about.`, `\\(\\lim_{x\\to1}f(x)=1\\).`] },
          { label: 'b', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to2}f(x)\\)`, inputType: 'dne_or_numeric', answer: 'DNE', formatHint: 'Enter a number, or DNE.',
            hints: [`Look at the open circle just left of \\(x=2\\) and the filled dot just right of \\(x=2\\) — are they at the same height?`, `The curve approaches height 4 from the left but jumps to height 5 starting at \\(x=2\\) itself.`],
            solution: [`From the left, the curve approaches the open circle at height \\(4\\).`, `From the right, the curve starts at the filled dot at height \\(5\\).`, `\\(4\\neq5\\), so \\(\\lim_{x\\to2}f(x)\\) does not exist (DNE) — this is a jump discontinuity.`] },
          { label: 'c', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to3}f(x)\\)`, inputType: 'numeric', answer: '4', formatHint: 'Enter a number, or DNE.',
            hints: [`Unlike at \\(x=2\\), the two pieces meeting at \\(x=3\\) land on the same height — there's no visible gap.`, `Read the height of the (single, filled) dot at \\(x=3\\).`],
            solution: [`Both pieces meet at height \\(4\\) at \\(x=3\\) — no jump this time.`, `\\(\\lim_{x\\to3}f(x)=4\\).`] },
          { label: 'd', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to4}f(x)\\)`, inputType: 'dne_or_numeric', answer: 'DNE', formatHint: 'Enter a number, or DNE.',
            hints: [`From the left, the curve approaches an open circle at a finite height.`, `From the right, the curve shoots upward without bound near the dashed vertical line \\(x=4\\).`],
            solution: [`From the left, \\(f(x)\\to5\\).`, `From the right, \\(f(x)\\to+\\infty\\) (it blows up near the vertical asymptote \\(x=4\\)).`, `Since the right side isn't even approaching a finite number, the two sides certainly disagree: \\(\\lim_{x\\to4}f(x)\\) does not exist. (More precisely, it fails to exist because the right-hand side is unbounded.)`] },
          { label: 'e', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to+\\infty}f(x)\\)`, inputType: 'numeric', answer: '5', formatHint: 'Enter a number, or DNE.',
            hints: [`Follow the curve far to the right — it settles toward the dashed horizontal line.`, `Read off the height of that horizontal asymptote.`],
            solution: [`As \\(x\\to+\\infty\\), the curve flattens out and hugs the horizontal asymptote at height \\(5\\).`, `\\(\\lim_{x\\to+\\infty}f(x)=5\\).`] },
          { label: 'f', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to-\\infty}f(x)\\)`, inputType: 'dne_or_numeric', answer: 'DNE', formatHint: 'Enter a number, or DNE.',
            hints: [`Follow the leftmost line segment as it heads off the left edge of the graph — is it leveling off, or still descending?`, `A straight line with nonzero slope never approaches a finite height as \\(x\\to-\\infty\\).`],
            solution: [`The leftmost piece is a straight line with negative-going behavior as \\(x\\) decreases — it keeps descending forever, heading to \\(-\\infty\\), never leveling off.`, `Since it doesn't approach any finite number, \\(\\lim_{x\\to-\\infty}f(x)\\) does not exist (it is \\(-\\infty\\)).`] },
          { label: 'g', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to3^+}f(x)\\)`, inputType: 'numeric', answer: '4', formatHint: 'Enter a number, or DNE.',
            hints: [`Same point as part (c) — but since both sides already agreed there, the one-sided limits must match the two-sided one.`],
            solution: [`Since \\(\\lim_{x\\to3}f(x)=4\\) exists (part c), both one-sided limits must also equal \\(4\\).`, `\\(\\lim_{x\\to3^+}f(x)=4\\).`] },
          { label: 'h', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to3^-}f(x)\\)`, inputType: 'numeric', answer: '4', formatHint: 'Enter a number, or DNE.',
            hints: [`Same reasoning as part (g), approaching from the other side.`],
            solution: [`Again, since the two-sided limit at \\(x=3\\) exists and equals \\(4\\) (part c), the left-hand limit is also \\(4\\).`] },
          { label: 'i', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to0}f(x)\\)`, inputType: 'dne_or_numeric', answer: 'DNE', formatHint: 'Enter a number, or DNE.',
            hints: [`Look just left of \\(x=0\\) (open circle, end of the line) versus just right of \\(x=0\\) (filled dot, start of the parabola piece).`, `Are those two heights the same?`],
            solution: [`From the left, the line approaches the open circle at height \\(2\\).`, `From the right, the parabola piece starts at the filled dot at height \\(0\\).`, `\\(2\\neq0\\), so \\(\\lim_{x\\to0}f(x)\\) does not exist — another jump discontinuity.`] }
        ]
      },
      {
        num: '2',
        statement: `Complete a table of values (in your head or on paper) and confirm your conjecture by finding each limit analytically.`,
        parts: [
          { label: 'a', kind: 'interactive', prompt: `\\(f(x)=\\dfrac{x-2}{x^2-4}\\); find \\(\\displaystyle\\lim_{x\\to2^+}f(x)\\).`, inputType: 'numeric', answer: '1/4', formatHint: 'Enter an exact number.',
            hints: [`Factor the denominator as a difference of squares.`, `\\(x^2-4=(x-2)(x+2)\\), so \\(f(x)=\\dfrac{1}{x+2}\\) for \\(x\\neq2\\).`, `Substitute \\(x=2\\) into the simplified form.`],
            solution: [`\\(x^2-4=(x-2)(x+2)\\), so for \\(x\\neq2\\), \\(f(x)=\\dfrac{x-2}{(x-2)(x+2)}=\\dfrac{1}{x+2}\\).`, `\\(\\lim_{x\\to2^+}\\dfrac{1}{x+2}=\\dfrac{1}{4}\\). (The two-sided limit is the same, since the simplified form has no domain issue at \\(x=2\\).)`] },
          { label: 'b', kind: 'interactive', prompt: `\\(f(x)=\\dfrac{\\tan4x}{x}\\); find \\(\\displaystyle\\lim_{x\\to0}f(x)\\).`, inputType: 'numeric', answer: '4', formatHint: 'Enter an exact number.',
            hints: [`Rewrite so the fundamental trig limit \\(\\lim_{u\\to0}\\frac{\\tan u}{u}=1\\) applies: multiply and divide to get \\(\\tan(4x)\\) over \\(4x\\).`, `\\(\\dfrac{\\tan4x}{x}=4\\cdot\\dfrac{\\tan4x}{4x}\\).`, `As \\(x\\to0\\), \\(4x\\to0\\) too, so \\(\\dfrac{\\tan4x}{4x}\\to1\\).`],
            solution: [`Write \\(\\dfrac{\\tan4x}{x}=4\\cdot\\dfrac{\\tan4x}{4x}\\) (multiplying and dividing by 4 to expose the named limit form).`, `As \\(x\\to0\\), letting \\(u=4x\\to0\\): \\(\\dfrac{\\tan u}{u}\\to1\\).`, `So the limit is \\(4\\cdot1=4\\).`] }
        ]
      },
      {
        num: '3',
        statement: `(a) Approximate \\(\\displaystyle\\lim_{x\\to0}\\dfrac{3^x-2^x}{x}\\) to three decimal places by constructing a table of values. (b) Confirm your approximation using graphical evidence, then state the exact value.`,
        parts: [
          { label: '', kind: 'interactive', prompt: `What is \\(\\displaystyle\\lim_{x\\to0}\\dfrac{3^x-2^x}{x}\\), exactly? (Try values like \\(x=0.1,\\,0.01,\\,0.001\\) first — you should see it settling near \\(0.405\\). The exact value involves a natural log.)`, inputType: 'expr_const', answer: 'log(3/2)', formatHint: 'Enter the exact value, e.g. log(3/2).',
            hints: [`This is the difference quotient (at \\(x=0\\)) for the function \\(g(x)=3^x-2^x\\) — i.e. it's secretly \\(g'(0)\\).`, `\\(\\dfrac{d}{dx}[a^x]=a^x\\ln a\\), so \\(g'(x)=3^x\\ln3-2^x\\ln2\\), and \\(g'(0)=\\ln3-\\ln2\\).`, `Combine the logs: \\(\\ln3-\\ln2=\\ln(3/2)\\).`],
            solution: [`Numerically, the ratio approaches approximately \\(0.405\\) as \\(x\\to0\\) from either side.`, `Exactly, this expression is the derivative at \\(0\\) of \\(g(x)=3^x-2^x\\) (a difference quotient with \\(h=x\\) and base point \\(0\\)): \\(\\dfrac{g(x)-g(0)}{x-0}\\), since \\(g(0)=1-1=0\\).`, `\\(g'(x)=3^x\\ln3-2^x\\ln2 \\Rightarrow g'(0)=\\ln3-\\ln2=\\ln(3/2)\\approx0.405\\).`] }
        ]
      },
      {
        num: '4',
        statement: `Approximate \\(\\displaystyle\\lim_{x\\to3}\\dfrac{2^x-8}{x-3}\\) both by looking at a graph and by calculating values for some appropriate choices of \\(x\\). Compare your answer with the value produced by a CAS (or by finding it analytically).`,
        parts: [
          { label: '', kind: 'interactive', prompt: `What is the exact value of \\(\\displaystyle\\lim_{x\\to3}\\dfrac{2^x-8}{x-3}\\)?`, inputType: 'expr_const', answer: '8*log(2)', formatHint: 'Enter the exact value, e.g. 8*log(2).',
            hints: [`Same trick as the previous problem: this is the difference quotient for \\(g(x)=2^x\\) at the point \\(x=3\\), since \\(g(3)=8\\).`, `\\(g'(x)=2^x\\ln2\\), so the limit is \\(g'(3)\\).`, `\\(g'(3)=2^3\\ln2=8\\ln2\\).`],
            solution: [`Recognize \\(\\dfrac{2^x-8}{x-3}=\\dfrac{2^x-2^3}{x-3}\\) as the difference quotient for \\(g(x)=2^x\\) at \\(x=3\\) (since \\(g(3)=8\\)).`, `So the limit is exactly \\(g'(3)\\), where \\(g'(x)=2^x\\ln2\\).`, `\\(g'(3)=2^3\\ln2=8\\ln2\\approx5.545\\) — and a CAS would confirm this same value.`] }
        ]
      }
    ]
  },

  // ============================================================
  {
    heading: 'Computing Limits Algebraically',
    problems: [
      { num: '5', statement: `Find the limit.`, parts: [
        { label: '', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to-1}\\dfrac{x^3-x}{x-1}\\)`, inputType: 'numeric', answer: '0', formatHint: 'Enter an exact number.',
          hints: [`Check whether direct substitution actually causes a problem here — evaluate the denominator at \\(x=-1\\) first.`, `Denominator: \\(-1-1=-2\\), which is *not* zero — so there's no \\(0/0\\) issue, and you can substitute directly.`, `Numerator at \\(x=-1\\): \\((-1)^3-(-1)=-1+1=0\\).`],
          solution: [`The denominator at \\(x=-1\\) is \\(-1-1=-2\\neq0\\), so this is just a continuous point — direct substitution works.`, `Numerator: \\((-1)^3-(-1)=0\\). So the limit is \\(\\dfrac{0}{-2}=0\\).`] }
      ]},
      { num: '6', statement: `Find the limit.`, parts: [
        { label: '', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to1}\\dfrac{x^3-x^2}{x-1}\\)`, inputType: 'numeric', answer: '1', formatHint: 'Enter an exact number.',
          hints: [`Direct substitution gives \\(0/0\\) here — factor the numerator.`, `\\(x^3-x^2=x^2(x-1)\\).`, `Cancel \\((x-1)\\) and substitute \\(x=1\\) into what's left.`],
          solution: [`\\(x^3-x^2=x^2(x-1)\\), so for \\(x\\neq1\\), the expression simplifies to \\(x^2\\).`, `\\(\\lim_{x\\to1}x^2=1\\).`] }
      ]},
      { num: '7', statement: `Find the limit.`, parts: [
        { label: '', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to-3}\\dfrac{3x+9}{x^2+4x+3}\\)`, inputType: 'numeric', answer: '-3/2', formatHint: 'Enter an exact number (a fraction is fine).',
          hints: [`Both numerator and denominator vanish at \\(x=-3\\) — factor both.`, `\\(3x+9=3(x+3)\\) and \\(x^2+4x+3=(x+1)(x+3)\\).`, `Cancel \\((x+3)\\), then substitute \\(x=-3\\) into \\(\\dfrac{3}{x+1}\\).`],
          solution: [`Factor: \\(3x+9=3(x+3)\\); \\(x^2+4x+3=(x+1)(x+3)\\).`, `For \\(x\\neq-3\\): \\(\\dfrac{3(x+3)}{(x+1)(x+3)}=\\dfrac{3}{x+1}\\).`, `\\(\\lim_{x\\to-3}\\dfrac{3}{x+1}=\\dfrac{3}{-2}=-\\dfrac32\\).`] }
      ]},
      { num: '8', statement: `Find the limit.`, parts: [
        { label: '', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to2^-}\\dfrac{x+2}{x-2}\\)`, inputType: 'dne_or_numeric', answer: 'DNE', formatHint: 'Enter a number, or DNE.',
          hints: [`As \\(x\\to2^-\\), the numerator approaches \\(4\\) (positive), while the denominator approaches \\(0\\) — figure out its *sign* as \\(x\\) creeps up to 2 from below.`, `For \\(x<2\\), \\(x-2\\) is a small *negative* number.`, `Positive \\(\\div\\) a tiny negative number \\(\\to\\) what?`],
          solution: [`As \\(x\\to2^-\\), numerator \\(\\to4\\) (positive) and denominator \\(\\to0^-\\) (a small negative number, since \\(x<2\\)).`, `A positive number divided by a vanishingly small negative number blows up to \\(-\\infty\\).`, `So the limit does not exist as a finite number (it is \\(-\\infty\\)) — enter DNE.`] }
      ]},
      { num: '9', statement: `Find the limit.`, parts: [
        { label: '', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to+\\infty}\\dfrac{(2x-1)^5}{(3x^2+2x-7)(x^3-9x)}\\)`, inputType: 'expr_const', answer: '32/3', formatHint: 'Enter the exact value, e.g. 32/3.',
          hints: [`You don't need to expand everything — just track the *degree* and *leading coefficient* of numerator and denominator.`, `Numerator: \\((2x-1)^5\\) has degree 5, leading term \\((2x)^5=32x^5\\).`, `Denominator: \\((3x^2+\\cdots)(x^3-\\cdots)\\) has degree \\(2+3=5\\), leading term \\(3x^2\\cdot x^3=3x^5\\). Degrees match, so the limit is the ratio of leading coefficients.`],
          solution: [`Numerator's leading term: \\((2x-1)^5\\) behaves like \\((2x)^5=32x^5\\) for large \\(x\\).`, `Denominator's leading term: \\((3x^2+2x-7)(x^3-9x)\\) behaves like \\(3x^2\\cdot x^3=3x^5\\).`, `Both have degree 5, so the limit is the ratio of leading coefficients: \\(\\dfrac{32}{3}\\).`] }
      ]},
      { num: '10', statement: `Find the limit.`, parts: [
        { label: '', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to0}\\dfrac{\\sqrt{x^2+4}-2}{x^2}\\)`, inputType: 'numeric', answer: '1/4', formatHint: 'Enter an exact number.',
          hints: [`Direct substitution gives \\(0/0\\) — rationalize the numerator by multiplying by its conjugate \\(\\sqrt{x^2+4}+2\\).`, `\\((\\sqrt{x^2+4}-2)(\\sqrt{x^2+4}+2)=(x^2+4)-4=x^2\\), which cancels with the denominator.`, `You're left with \\(\\dfrac{1}{\\sqrt{x^2+4}+2}\\) — now substitute \\(x=0\\).`],
          solution: [`Multiply by the conjugate: \\(\\dfrac{\\sqrt{x^2+4}-2}{x^2}\\cdot\\dfrac{\\sqrt{x^2+4}+2}{\\sqrt{x^2+4}+2}=\\dfrac{x^2}{x^2(\\sqrt{x^2+4}+2)}=\\dfrac{1}{\\sqrt{x^2+4}+2}\\).`, `\\(\\lim_{x\\to0}\\dfrac{1}{\\sqrt{x^2+4}+2}=\\dfrac{1}{2+2}=\\dfrac14\\).`] }
      ]},
      { num: '11', statement: `In each part, find the horizontal asymptotes (if any) of the given rational function. Enter just the y-value of the asymptote (e.g. if the asymptote is \\(y=3\\), enter 3).`, parts: [
        { label: 'a', kind: 'interactive', prompt: `\\(y=\\dfrac{2x-7}{x^2-4x+3}\\)`, inputType: 'numeric', answer: '0', formatHint: 'Enter just the y-value, e.g. 0.',
          hints: [`Compare the degree of the numerator (1) to the degree of the denominator (2).`, `When the denominator's degree is strictly larger, the fraction shrinks to \\(0\\) at infinity.`],
          solution: [`Numerator degree \\(1<\\) denominator degree \\(2\\), so as \\(x\\to\\pm\\infty\\), the fraction \\(\\to0\\).`, `Horizontal asymptote: \\(y=0\\).`] },
        { label: 'b', kind: 'interactive', prompt: `\\(y=\\dfrac{x^3-x^2+10}{3x^2-4x}\\)`, inputType: 'text', answer: ['none'], formatHint: "Enter 'none' if there isn't one.",
          hints: [`Compare degrees again: numerator degree 3, denominator degree 2.`, `When the numerator's degree is *larger*, the function grows without bound — no horizontal asymptote (there's a slant asymptote instead, but that's not what's being asked here).`],
          solution: [`Numerator degree \\(3>\\) denominator degree \\(2\\), so the function grows unboundedly as \\(x\\to\\pm\\infty\\) — there is no horizontal asymptote.`] },
        { label: 'c', kind: 'interactive', prompt: `\\(y=\\dfrac{2x^2-6}{x^2+5x}\\)`, inputType: 'numeric', answer: '2', formatHint: 'Enter just the y-value, e.g. 2.',
          hints: [`Degrees match (both 2) — the asymptote is the ratio of leading coefficients.`, `Leading coefficients: \\(2\\) on top, \\(1\\) on bottom.`],
          solution: [`Degrees match (both 2), so the horizontal asymptote is the ratio of leading coefficients: \\(\\dfrac21=2\\).`, `Horizontal asymptote: \\(y=2\\).`] }
      ]},
      { num: '12', statement: `Find \\(\\displaystyle\\lim_{x\\to a}f(x)\\), if it exists, for the listed values of \\(a\\).`, parts: [
        { label: 'a-i', kind: 'interactive', prompt: `\\(f(x)=\\sqrt{5-x}\\); find \\(\\displaystyle\\lim_{x\\to0}f(x)\\).`, inputType: 'expr_const', answer: 'sqrt(5)', formatHint: 'Enter the exact value, e.g. sqrt(5).',
          hints: [`\\(x=0\\) is well inside the domain \\(x\\leq5\\) — just substitute directly.`],
          solution: [`\\(f\\) is continuous at \\(x=0\\) (interior to its domain \\(x\\leq5\\)): \\(\\lim_{x\\to0}\\sqrt{5-x}=\\sqrt5\\).`] },
        { label: 'a-ii', kind: 'interactive', prompt: `Same \\(f(x)=\\sqrt{5-x}\\); find \\(\\displaystyle\\lim_{x\\to-5}f(x)\\).`, inputType: 'expr_const', answer: 'sqrt(10)', formatHint: 'Enter the exact value, e.g. sqrt(10).',
          hints: [`\\(x=-5\\) is also interior to the domain \\(x\\leq5\\) (the domain extends well past it on both sides) — substitute directly.`],
          solution: [`\\(\\lim_{x\\to-5}\\sqrt{5-x}=\\sqrt{5-(-5)}=\\sqrt{10}\\).`] },
        { label: 'a-iii', kind: 'interactive', prompt: `Same \\(f(x)=\\sqrt{5-x}\\); find \\(\\displaystyle\\lim_{x\\to5}f(x)\\).`, inputType: 'numeric', answer: '0', formatHint: 'Enter an exact number, or DNE.',
          hints: [`The domain is \\(x\\leq5\\), so \\(x=5\\) is the *right-hand edge* of the domain — there's no approaching from the right at all.`, `Where the domain only extends to one side of a point, the limit is taken to mean the one-sided (here, left-hand) limit.`],
          solution: [`The domain \\(x\\leq5\\) means \\(f\\) isn't defined at all for \\(x>5\\), so the only meaningful approach to \\(x=5\\) is from the left.`, `\\(\\lim_{x\\to5^-}\\sqrt{5-x}=\\sqrt0=0\\), and this is taken as the value of \\(\\lim_{x\\to5}f(x)\\).`] },
        { label: 'a-iv', kind: 'interactive', prompt: `Same \\(f(x)=\\sqrt{5-x}\\); find \\(\\displaystyle\\lim_{x\\to-\\infty}f(x)\\).`, inputType: 'dne_or_numeric', answer: 'DNE', formatHint: 'Enter a number, or DNE.',
          hints: [`As \\(x\\to-\\infty\\), what happens to \\(5-x\\)?`, `\\(5-x\\to+\\infty\\), and the square root of something growing without bound also grows without bound.`],
          solution: [`As \\(x\\to-\\infty\\), \\(5-x\\to+\\infty\\), so \\(\\sqrt{5-x}\\to+\\infty\\).`, `Since it doesn't approach a finite value, the limit does not exist (it is \\(+\\infty\\)).`] },
        { label: 'b-i', kind: 'interactive', prompt: `\\(f(x)=\\begin{cases}\\dfrac{x-5}{|x-5|} & x\\neq5\\\\ 0 & x=5\\end{cases}\\); find \\(\\displaystyle\\lim_{x\\to0}f(x)\\).`, inputType: 'numeric', answer: '-1', formatHint: 'Enter an exact number, or DNE.',
          hints: [`For \\(x\\) near \\(0\\) (which is far from the break point \\(x=5\\)), \\(x-5\\) is negative, so \\(\\dfrac{x-5}{|x-5|}=-1\\) throughout a whole neighborhood of \\(0\\).`],
          solution: [`Near \\(x=0\\), \\(x-5<0\\) throughout, so \\(f(x)=\\dfrac{x-5}{|x-5|}=\\dfrac{x-5}{-(x-5)}=-1\\) identically nearby.`, `\\(\\lim_{x\\to0}f(x)=-1\\).`] },
        { label: 'b-ii', kind: 'interactive', prompt: `Same \\(f\\); find \\(\\displaystyle\\lim_{x\\to5^+}f(x)\\).`, inputType: 'numeric', answer: '1', formatHint: 'Enter an exact number.',
          hints: [`For \\(x>5\\), \\(x-5>0\\), so \\(|x-5|=x-5\\).`],
          solution: [`For \\(x>5\\), \\(\\dfrac{x-5}{|x-5|}=\\dfrac{x-5}{x-5}=1\\).`, `\\(\\lim_{x\\to5^+}f(x)=1\\).`] },
        { label: 'b-iii', kind: 'interactive', prompt: `Same \\(f\\); find \\(\\displaystyle\\lim_{x\\to5^-}f(x)\\).`, inputType: 'numeric', answer: '-1', formatHint: 'Enter an exact number.',
          hints: [`For \\(x<5\\), \\(x-5<0\\), so \\(|x-5|=-(x-5)\\).`],
          solution: [`For \\(x<5\\), \\(\\dfrac{x-5}{|x-5|}=\\dfrac{x-5}{-(x-5)}=-1\\).`, `\\(\\lim_{x\\to5^-}f(x)=-1\\).`] },
        { label: 'b-iv', kind: 'interactive', prompt: `Same \\(f\\); find \\(\\displaystyle\\lim_{x\\to5}f(x)\\).`, inputType: 'dne_or_numeric', answer: 'DNE', formatHint: 'Enter a number, or DNE.',
          hints: [`Compare your two previous answers.`],
          solution: [`\\(\\lim_{x\\to5^+}f(x)=1\\) and \\(\\lim_{x\\to5^-}f(x)=-1\\) disagree, so \\(\\lim_{x\\to5}f(x)\\) does not exist. (This is the sign function, shifted to be centered at \\(x=5\\).)`] }
      ]},
      { num: '13', statement: `Find the limit.`, parts: [
        { label: '', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to0}\\dfrac{\\sin3x}{\\tan3x}\\)`, inputType: 'numeric', answer: '1', formatHint: 'Enter an exact number.',
          hints: [`Rewrite \\(\\tan3x\\) as \\(\\dfrac{\\sin3x}{\\cos3x}\\) and simplify the resulting compound fraction.`, `\\(\\dfrac{\\sin3x}{\\tan3x}=\\sin3x\\cdot\\dfrac{\\cos3x}{\\sin3x}=\\cos3x\\).`],
          solution: [`\\(\\dfrac{\\sin3x}{\\tan3x}=\\dfrac{\\sin3x}{\\sin3x/\\cos3x}=\\cos3x\\) (the \\(\\sin3x\\) factors cancel).`, `\\(\\lim_{x\\to0}\\cos3x=\\cos0=1\\).`] }
      ]},
      { num: '14', statement: `Find the limit.`, parts: [
        { label: '', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to0}\\dfrac{x\\sin x}{1-\\cos x}\\)`, inputType: 'numeric', answer: '2', formatHint: 'Enter an exact number.',
          hints: [`Multiply numerator and denominator by \\(1+\\cos x\\) to turn \\(1-\\cos x\\) into \\(\\sin^2x\\) via the Pythagorean identity.`, `\\((1-\\cos x)(1+\\cos x)=1-\\cos^2x=\\sin^2x\\).`, `After that, you'll have \\(\\dfrac{x(1+\\cos x)}{\\sin x}\\) — split off the named limit \\(\\frac{x}{\\sin x}\\to1\\).`],
          solution: [`Multiply by \\(\\dfrac{1+\\cos x}{1+\\cos x}\\): the denominator becomes \\(1-\\cos^2x=\\sin^2x\\).`, `The expression becomes \\(\\dfrac{x\\sin x(1+\\cos x)}{\\sin^2x}=\\dfrac{x(1+\\cos x)}{\\sin x} = \\dfrac{x}{\\sin x}\\cdot(1+\\cos x)\\).`, `As \\(x\\to0\\): \\(\\dfrac{x}{\\sin x}\\to1\\) and \\(1+\\cos x\\to2\\), so the limit is \\(1\\cdot2=2\\).`] }
      ]},
      { num: '15', statement: `Find the limit (\\(k\\neq0\\) is a constant).`, parts: [
        { label: '', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to0}\\dfrac{3x-\\sin(kx)}{x}\\)`, inputType: 'expr', variable: 'k', answer: '3-k', formatHint: 'Enter an expression in k, e.g. 3-k.',
          hints: [`Split the fraction into two pieces: \\(\\dfrac{3x}{x}-\\dfrac{\\sin(kx)}{x}\\).`, `The first piece is just \\(3\\). For the second, multiply top and bottom by \\(k\\) to expose \\(\\dfrac{\\sin(kx)}{kx}\\to1\\).`, `\\(\\dfrac{\\sin(kx)}{x}=k\\cdot\\dfrac{\\sin(kx)}{kx}\\to k\\cdot1=k\\) as \\(x\\to0\\).`],
          solution: [`Split: \\(\\dfrac{3x-\\sin(kx)}{x}=3-\\dfrac{\\sin(kx)}{x}\\).`, `Rewrite the second term: \\(\\dfrac{\\sin(kx)}{x}=k\\cdot\\dfrac{\\sin(kx)}{kx}\\). As \\(x\\to0\\), \\(kx\\to0\\) too, so \\(\\dfrac{\\sin(kx)}{kx}\\to1\\), making this term \\(\\to k\\).`, `So the whole limit is \\(3-k\\).`] }
      ]},
      { num: '16', statement: `Find the limit.`, parts: [
        { label: '', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{\\theta\\to0}\\tan\\!\\left(\\dfrac{1-\\cos\\theta}{\\theta}\\right)\\)`, inputType: 'numeric', answer: '0', formatHint: 'Enter an exact number.',
          hints: [`First find the limit of the *inside* expression, \\(\\dfrac{1-\\cos\\theta}{\\theta}\\), as \\(\\theta\\to0\\).`, `That inner limit is \\(0\\) (a standard named limit, closely related to \\(\\frac{1-\\cos\\theta}{\\theta^2}\\to\\frac12\\)).`, `Since \\(\\tan\\) is continuous at \\(0\\), the limit of \\(\\tan(\\text{inside})\\) is \\(\\tan(\\text{limit of inside})\\).`],
          solution: [`Inner limit: \\(\\lim_{\\theta\\to0}\\dfrac{1-\\cos\\theta}{\\theta}=0\\) (standard result).`, `Since \\(\\tan\\) is continuous at \\(0\\), we can pass the limit inside: \\(\\lim_{\\theta\\to0}\\tan\\!\\left(\\dfrac{1-\\cos\\theta}{\\theta}\\right)=\\tan(0)=0\\).`] }
      ]},
      { num: '17', statement: `Find the limit.`, parts: [
        { label: '', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{t\\to(\\pi/2)^+}e^{\\tan t}\\)`, inputType: 'numeric', answer: '0', formatHint: 'Enter an exact number.',
          hints: [`What does \\(\\tan t\\) do as \\(t\\) approaches \\(\\pi/2\\) from *above*?`, `Just past \\(\\pi/2\\), \\(\\tan t\\to-\\infty\\) (it flips sign crossing the asymptote).`, `What happens to \\(e^{(\\text{very negative number})}\\)?`],
          solution: [`As \\(t\\to(\\pi/2)^+\\), \\(\\tan t\\to-\\infty\\) (approaching the vertical asymptote of \\(\\tan\\) from the right).`, `So \\(e^{\\tan t}=e^{(\\text{something}\\to-\\infty)}\\to0\\) (exponential decay to zero).`] }
      ]},
      { num: '18', statement: `Find the limit.`, parts: [
        { label: '', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{\\theta\\to0^+}\\big[\\ln(\\sin2\\theta)-\\ln(\\tan\\theta)\\big]\\)`, inputType: 'expr_const', answer: 'log(2)', formatHint: 'Enter the exact value, e.g. log(2).',
          hints: [`Combine the logs first: \\(\\ln A-\\ln B=\\ln(A/B)\\).`, `\\(\\dfrac{\\sin2\\theta}{\\tan\\theta} = \\dfrac{2\\sin\\theta\\cos\\theta}{\\sin\\theta/\\cos\\theta} = 2\\cos^2\\theta\\) (using \\(\\sin2\\theta=2\\sin\\theta\\cos\\theta\\)).`, `Now take the limit of \\(\\ln(2\\cos^2\\theta)\\) as \\(\\theta\\to0^+\\).`],
          solution: [`Combine the logs: \\(\\ln(\\sin2\\theta)-\\ln(\\tan\\theta)=\\ln\\!\\left(\\dfrac{\\sin2\\theta}{\\tan\\theta}\\right)\\).`, `Simplify the ratio using \\(\\sin2\\theta=2\\sin\\theta\\cos\\theta\\) and \\(\\tan\\theta=\\sin\\theta/\\cos\\theta\\): \\(\\dfrac{2\\sin\\theta\\cos\\theta}{\\sin\\theta/\\cos\\theta}=2\\cos^2\\theta\\).`, `\\(\\lim_{\\theta\\to0^+}\\ln(2\\cos^2\\theta)=\\ln(2\\cdot1)=\\ln2\\).`] }
      ]}
    ]
  },

  // ============================================================
  {
    heading: 'Limits at Infinity and an Application',
    problems: [
      { num: '19', statement: `Find the limit.`, parts: [
        { label: '', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to+\\infty}\\left(1+\\dfrac3x\\right)^{-x}\\)`, inputType: 'expr_const', answer: 'exp(-3)', formatHint: 'Enter the exact value, e.g. exp(-3).',
          hints: [`Recall the standard limit \\(\\lim_{x\\to\\infty}\\left(1+\\frac{a}{x}\\right)^x=e^a\\), here with \\(a=3\\).`, `So \\(\\left(1+\\frac3x\\right)^x\\to e^3\\). The actual exponent here is \\(-x\\), i.e. the reciprocal of that power.`],
          solution: [`By the standard limit, \\(\\left(1+\\dfrac3x\\right)^x\\to e^3\\) as \\(x\\to\\infty\\).`, `The given expression is the reciprocal of that quantity raised to the first power: \\(\\left(1+\\dfrac3x\\right)^{-x}=\\left[\\left(1+\\dfrac3x\\right)^x\\right]^{-1}\\to (e^3)^{-1}=e^{-3}\\).`] }
      ]},
      { num: '20', statement: `Find the limit (\\(a,b>0\\) are constants).`, parts: [
        { label: '', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to+\\infty}\\left(1+\\dfrac ax\\right)^{bx}\\)`, inputType: 'expr', variables: ['a','b'], answer: 'exp(a*b)', formatHint: 'Enter an expression in a and b, e.g. exp(a*b).',
          hints: [`Write the exponent \\(bx\\) as \\(\\dfrac{x}{a}\\cdot(ab)\\), so that the base-exponent pairing matches the standard form \\(\\left(1+\\frac{a}{x}\\right)^{x/a}\\to e\\).`, `\\(\\left(1+\\frac ax\\right)^{bx} = \\left[\\left(1+\\frac ax\\right)^{x/a}\\right]^{ab}\\).`, `As \\(x\\to\\infty\\), the bracketed quantity \\(\\to e\\), so the whole thing \\(\\to e^{ab}\\).`],
          solution: [`Rewrite the exponent: \\(bx = ab\\cdot\\dfrac xa\\), so \\(\\left(1+\\dfrac ax\\right)^{bx}=\\left[\\left(1+\\dfrac ax\\right)^{x/a}\\right]^{ab}\\).`, `As \\(x\\to\\infty\\), the inner bracket is exactly the standard form \\(\\left(1+\\frac{a}{x}\\right)^{x/a}\\to e\\).`, `So the limit is \\(e^{ab}\\).`] }
      ]},
      { num: '21', statement: `If \\$1000 is invested in an account that pays 7% interest compounded \\(n\\) times each year, then in 10 years there will be \\(1000(1+0.07/n)^{10n}\\) dollars in the account. Find the amount (to the nearest cent) for each compounding frequency, including the limit as \\(n\\to+\\infty\\) (continuous compounding).`, parts: [
        { label: 'a', kind: 'interactive', prompt: `Quarterly (\\(n=4\\))`, inputType: 'numeric', answer: '2001.60', formatHint: 'Enter to the nearest cent, e.g. 2001.60.',
          hints: [`Substitute \\(n=4\\) into \\(1000(1+0.07/n)^{10n}\\): that's \\(1000(1.0175)^{40}\\).`],
          solution: [`\\(1000(1+0.07/4)^{40}=1000(1.0175)^{40}\\approx\\$2001.60\\).`] },
        { label: 'b', kind: 'interactive', prompt: `Monthly (\\(n=12\\))`, inputType: 'numeric', answer: '2009.66', formatHint: 'Enter to the nearest cent.',
          hints: [`Substitute \\(n=12\\): \\(1000(1+0.07/12)^{120}\\).`],
          solution: [`\\(1000(1+0.07/12)^{120}\\approx\\$2009.66\\).`] },
        { label: 'c', kind: 'interactive', prompt: `Daily (\\(n=365\\))`, inputType: 'numeric', answer: '2013.62', formatHint: 'Enter to the nearest cent.',
          hints: [`Substitute \\(n=365\\): \\(1000(1+0.07/365)^{3650}\\).`],
          solution: [`\\(1000(1+0.07/365)^{3650}\\approx\\$2013.62\\).`] },
        { label: 'd', kind: 'interactive', prompt: `Continuously (\\(n\\to+\\infty\\)) — use \\(\\lim_{n\\to\\infty}(1+r/n)^{nt}=e^{rt}\\), with \\(r=0.07\\), \\(t=10\\).`, inputType: 'numeric', answer: '2013.75', formatHint: 'Enter to the nearest cent.',
          hints: [`The continuous-compounding limit gives \\(1000\\,e^{0.07\\times10}=1000\\,e^{0.7}\\).`],
          solution: [`As \\(n\\to\\infty\\), \\(1000(1+0.07/n)^{10n}\\to1000e^{0.7}\\approx\\$2013.75\\).`, `Notice each successive compounding frequency gets closer to this continuous-compounding ceiling, but the gains shrink fast — daily compounding is already within 13 cents of the true limit.`] }
      ]}
    ]
  },

  // ============================================================
  {
    heading: 'The Epsilon-Delta Definition of a Limit',
    problems: [
      { num: '22', statement: `Discussion / writing prompt — there's no single answer to check here, but a model response is given.`, parts: [
        { label: 'a', kind: 'discussion', prompt: `Describe how the limit of a function can fail to exist at \\(x=a\\), with specific examples.`,
          solution: [`There are a few standard ways this happens, each with a classic example:`, `**Jump discontinuity:** the one-sided limits exist but disagree, e.g. \\(f(x)=\\dfrac{|x|}{x}\\) at \\(x=0\\) (left limit \\(-1\\), right limit \\(1\\)).`, `**Unbounded (vertical-asymptote-like) behavior:** the function grows without bound near \\(a\\), e.g. \\(f(x)=1/x^2\\) at \\(x=0\\).`, `**Oscillation without settling:** the function keeps oscillating infinitely often near \\(a\\) without approaching any single value, e.g. \\(f(x)=\\sin(1/x)\\) at \\(x=0\\).`] },
        { label: 'b', kind: 'discussion', prompt: `Describe how the limit of a function can fail to exist as \\(x\\to+\\infty\\) or \\(x\\to-\\infty\\), with examples.`,
          solution: [`**Unbounded growth:** the function grows (or decreases) without settling toward any number, e.g. \\(f(x)=x^2\\) as \\(x\\to\\infty\\).`, `**Persistent oscillation:** the function oscillates forever without flattening out, e.g. \\(f(x)=\\sin x\\) as \\(x\\to\\infty\\) — it never settles near a single horizontal asymptote, it just keeps bouncing between \\(-1\\) and \\(1\\) forever.`] },
        { label: 'c', kind: 'discussion', prompt: `Describe how a function can fail to be continuous at \\(x=a\\), with examples.`,
          solution: [`Continuity at \\(a\\) needs all three of: \\(f(a)\\) defined, \\(\\lim_{x\\to a}f(x)\\) exists, and the two are equal. Failure modes:`, `**\\(f(a)\\) undefined** (e.g. a hole, like \\(f(x)=\\frac{x^2-1}{x-1}\\) at \\(x=1\\)) even though the limit exists — this is a *removable* discontinuity.`, `**The limit doesn't exist** at all (jump or unbounded behavior, as in part a).`, `**\\(f(a)\\) is defined but doesn't match the limit**, e.g. a piecewise function deliberately redefined at one point to a different value than the surrounding curve approaches.`] }
      ]},
      { num: '23', statement: `Construction task — many correct answers exist, so this is shown as a model solution rather than auto-checked.`, parts: [
        { label: '', kind: 'discussion', prompt: `Find a formula for a rational function that has a vertical asymptote at \\(x=1\\) and a horizontal asymptote at \\(y=2\\). Check your work by graphing it.`,
          solution: [`You need (1) a factor of \\((x-1)\\) in the denominator and nowhere cancelled by the numerator, to force a vertical asymptote at \\(x=1\\); and (2) numerator and denominator of the *same degree*, with leading-coefficient ratio \\(2\\), to force the horizontal asymptote \\(y=2\\).`, `One valid example: \\(f(x)=\\dfrac{2x}{x-1}\\). Check: as \\(x\\to1\\), the denominator \\(\\to0\\) while the numerator \\(\\to2\\neq0\\), giving a vertical asymptote; as \\(x\\to\\pm\\infty\\), \\(\\dfrac{2x}{x-1}\\to2\\).`, `In fact, *any* function of the form \\(\\dfrac{2x+c}{x-1}\\) (for any constant \\(c\\)) works equally well — try graphing a couple of variants to see the family.`] }
      ]},
      { num: '24', statement: `Discussion / writing prompt.`, parts: [
        { label: '', kind: 'discussion', prompt: `Paraphrase the \\(\\varepsilon\\text{-}\\delta\\) definition of \\(\\lim_{x\\to a}f(x)=L\\) in terms of a graphing utility's viewing window centered at \\((a,L)\\).`,
          solution: [`No matter how short you make the *vertical* half-height \\(\\varepsilon\\) of the viewing window around \\(y=L\\), you can always find a *horizontal* half-width \\(\\delta\\) around \\(x=a\\) narrow enough that, restricted to that horizontal band (and ignoring the single point \\(x=a\\) itself), the entire graph of \\(f\\) is captured within the window's vertical band.`, `In short: shrinking the vertical tolerance around \\(L\\) as much as you like still always lets you find a horizontal window around \\(a\\) that keeps the curve trapped inside.`] }
      ]},
      { num: '25', statement: `Suppose that \\(f\\) is a function and that, for any given \\(\\varepsilon>0\\), the condition \\(0<|x-2|<\\frac34\\varepsilon\\) guarantees that \\(|f(x)-5|<\\varepsilon\\).`, parts: [
        { label: 'a', kind: 'interactive', prompt: `What limit statement is being described? Give the point being approached, \\(a\\).`, inputType: 'numeric', answer: '2', formatHint: 'Enter an exact number.',
          hints: [`Look at which variable the \\(0<|x-\\cdot|\\) condition is centered on.`],
          solution: [`The condition is built around \\(|x-2|\\), so the point being approached is \\(a=2\\).`] },
        { label: 'b', kind: 'interactive', prompt: `Same setup. What is the limiting value \\(L\\)?`, inputType: 'numeric', answer: '5', formatHint: 'Enter an exact number.',
          hints: [`Look at which value \\(f(x)\\) is being kept close to.`],
          solution: [`\\(|f(x)-5|<\\varepsilon\\) means \\(f(x)\\) is being forced close to \\(5\\), so \\(L=5\\). Altogether, this statement describes \\(\\lim_{x\\to2}f(x)=5\\).`] },
        { label: 'c', kind: 'interactive', prompt: `Find a value of \\(\\delta\\) such that \\(0<|x-2|<\\delta\\) guarantees \\(|8f(x)-40|<0.048\\).`, inputType: 'numeric', answer: '0.0045', formatHint: 'Enter an exact decimal.',
          hints: [`Factor: \\(|8f(x)-40|=8|f(x)-5|\\). What does this force \\(|f(x)-5|\\) to be less than?`, `You need \\(8|f(x)-5|<0.048\\), i.e. \\(|f(x)-5|<0.006\\) — so set \\(\\varepsilon=0.006\\) in the given guarantee.`, `The given guarantee says \\(\\delta=\\frac34\\varepsilon\\) works for keeping \\(|f(x)-5|<\\varepsilon\\). Plug in \\(\\varepsilon=0.006\\).`],
          solution: [`\\(|8f(x)-40|=8|f(x)-5|\\), so we need \\(8|f(x)-5|<0.048 \\iff |f(x)-5|<0.006\\). Set \\(\\varepsilon=0.006\\).`, `By the given guarantee, \\(\\delta=\\frac34\\varepsilon\\) works: \\(\\delta=\\frac34(0.006)=0.0045\\).`] }
      ]},
      { num: '26', statement: `The limit \\(\\displaystyle\\lim_{x\\to0}\\dfrac{\\sin x}{x}=1\\) ensures that there is a number \\(\\delta\\) such that \\(\\left|\\dfrac{\\sin x}{x}-1\\right|<0.001\\) if \\(0<|x|<\\delta\\). Estimate the largest such \\(\\delta\\) (graphically or numerically).`, parts: [
        { label: '', kind: 'discussion', prompt: `Estimate the largest \\(\\delta\\) that works.`,
          solution: [`This needs a numerical/graphical search, not an algebraic formula — \\(\\sin x/x\\) doesn't invert cleanly. Since \\(\\dfrac{\\sin x}{x}\\) is even and decreases steadily away from \\(1\\) as \\(|x|\\) grows from \\(0\\), you're really just solving \\(\\dfrac{\\sin x}{x}=0.999\\) for the smallest positive \\(x\\) (and taking \\(\\delta\\) to be that value).`, `Zooming in on a graph of \\(\\sin x/x\\) near \\(y=0.999\\) (or narrowing a numerical search), the boundary comes out to approximately \\(x\\approx0.0775\\).`, `So \\(\\delta\\approx0.077\\) is the largest value that works — any larger and \\(\\sin x/x\\) would dip below \\(0.999\\) before \\(|x|\\) reaches \\(\\delta\\).`] }
      ]},
      { num: '27', statement: `In each part, find a number \\(\\delta\\) such that \\(|f(x)-L|<\\varepsilon\\) if \\(0<|x-a|<\\delta\\), for the given \\(\\varepsilon\\).`, parts: [
        { label: 'a', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to2}(4x-7)=1\\); \\(\\varepsilon=0.01\\).`, inputType: 'numeric', answer: '0.0025', formatHint: 'Enter an exact decimal.',
          hints: [`\\(|(4x-7)-1|=|4x-8|=4|x-2|\\). You need \\(4|x-2|<\\varepsilon\\).`, `Divide both sides by 4.`],
          solution: [`\\(|(4x-7)-1|=4|x-2|\\). Need \\(4|x-2|<0.01 \\iff |x-2|<0.0025\\).`, `So \\(\\delta=0.0025\\).`] },
        { label: 'b', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to3/2}\\dfrac{4x^2-9}{2x-3}=6\\); \\(\\varepsilon=0.05\\).`, inputType: 'numeric', answer: '0.025', formatHint: 'Enter an exact decimal.',
          hints: [`First simplify the function: \\(4x^2-9=(2x-3)(2x+3)\\), so \\(f(x)=2x+3\\) for \\(x\\neq3/2\\).`, `Then \\(|f(x)-6|=|2x+3-6|=|2x-3|=2|x-3/2|\\). Need \\(2|x-3/2|<\\varepsilon\\).`],
          solution: [`Simplify: \\(\\dfrac{4x^2-9}{2x-3}=\\dfrac{(2x-3)(2x+3)}{2x-3}=2x+3\\) for \\(x\\neq3/2\\).`, `\\(|f(x)-6|=|2x+3-6|=2\\left|x-\\dfrac32\\right|\\). Need \\(2|x-3/2|<0.05 \\iff |x-3/2|<0.025\\).`, `So \\(\\delta=0.025\\).`] },
        { label: 'c', kind: 'interactive', prompt: `\\(\\displaystyle\\lim_{x\\to4}x^2=16\\); \\(\\varepsilon=0.001\\). (Nonlinear — use the standard trick: restrict \\(\\delta\\leq1\\) first to bound \\(|x+4|\\).)`, inputType: 'expr_const', answer: '0.001/9', formatHint: 'Enter the exact value, e.g. 0.001/9.',
          hints: [`\\(|x^2-16|=|x-4|\\cdot|x+4|\\). If you restrict \\(\\delta\\leq1\\), then \\(|x-4|<1\\) forces \\(3<x<5\\), so \\(|x+4|<9\\).`, `That gives \\(|x^2-16|<9|x-4|\\). You need \\(9|x-4|<\\varepsilon\\).`, `Divide \\(\\varepsilon=0.001\\) by 9.`],
          solution: [`\\(|x^2-16|=|x-4||x+4|\\). Restricting to \\(\\delta\\leq1\\) gives \\(3<x<5\\), so \\(|x+4|<9\\), hence \\(|x^2-16|<9|x-4|\\).`, `Need \\(9|x-4|<0.001 \\iff |x-4|<\\dfrac{0.001}{9}\\approx0.000111\\), which is comfortably under the restriction \\(\\delta\\leq1\\), so it's the binding constraint.`, `\\(\\delta=\\dfrac{0.001}{9}\\).`] }
      ]},
      { num: '28', statement: `Use Definition 1.4.1 (the formal \\(\\varepsilon\\text{-}\\delta\\) definition) to prove that the stated limits are correct. These are proofs — there's no single string to check, so a full model proof is given.`, parts: [
        { label: 'a', kind: 'discussion', prompt: `Prove \\(\\displaystyle\\lim_{x\\to2}(4x-7)=1\\).`,
          solution: [`**Goal:** for every \\(\\varepsilon>0\\), produce a \\(\\delta>0\\) such that \\(0<|x-2|<\\delta \\implies |(4x-7)-1|<\\varepsilon\\).`, `**Scratch work:** \\(|(4x-7)-1|=|4x-8|=4|x-2|\\). We want \\(4|x-2|<\\varepsilon\\), i.e. \\(|x-2|<\\varepsilon/4\\). So choose \\(\\delta=\\varepsilon/4\\).`, `**Proof:** Let \\(\\varepsilon>0\\) be given, and set \\(\\delta=\\varepsilon/4\\). If \\(0<|x-2|<\\delta\\), then \\(|(4x-7)-1|=4|x-2|<4\\delta=4(\\varepsilon/4)=\\varepsilon\\). \\(\\blacksquare\\)`] },
        { label: 'b', kind: 'discussion', prompt: `Prove \\(\\displaystyle\\lim_{x\\to3/2}\\dfrac{4x^2-9}{2x-3}=6\\).`,
          solution: [`**Goal:** for every \\(\\varepsilon>0\\), find \\(\\delta>0\\) such that \\(0<|x-3/2|<\\delta\\implies\\left|\\dfrac{4x^2-9}{2x-3}-6\\right|<\\varepsilon\\).`, `**Scratch work:** for \\(x\\neq3/2\\), \\(\\dfrac{4x^2-9}{2x-3}=2x+3\\) (cancel the common factor \\(2x-3\\)). So \\(\\left|\\dfrac{4x^2-9}{2x-3}-6\\right|=|2x+3-6|=2|x-3/2|\\). We want this \\(<\\varepsilon\\), i.e. \\(|x-3/2|<\\varepsilon/2\\). Choose \\(\\delta=\\varepsilon/2\\).`, `**Proof:** Let \\(\\varepsilon>0\\), set \\(\\delta=\\varepsilon/2\\). If \\(0<|x-3/2|<\\delta\\) (so in particular \\(x\\neq3/2\\), and the cancellation above is valid), then \\(\\left|\\dfrac{4x^2-9}{2x-3}-6\\right|=2|x-3/2|<2\\delta=\\varepsilon\\). \\(\\blacksquare\\)`] }
      ]},
      { num: '29', statement: `Suppose that \\(f\\) is continuous at \\(x_0\\) and that \\(f(x_0)>0\\). Give either an \\(\\varepsilon\\text{-}\\delta\\) proof or a convincing verbal argument to show that there must be an open interval containing \\(x_0\\) on which \\(f(x)>0\\).`, parts: [
        { label: '', kind: 'discussion', prompt: `Prove the claim.`,
          solution: [`**Verbal version:** continuity at \\(x_0\\) means \\(f(x)\\) can be kept as close as we like to \\(f(x_0)\\) by staying close enough to \\(x_0\\). Since \\(f(x_0)>0\\), if we demand \\(f(x)\\) stay within a tolerance smaller than \\(f(x_0)\\) itself, then \\(f(x)\\) is forced to stay positive throughout that neighborhood.`, `**Formal version:** let \\(\\varepsilon=\\dfrac{f(x_0)}{2}>0\\). By continuity of \\(f\\) at \\(x_0\\), there's a \\(\\delta>0\\) such that \\(|x-x_0|<\\delta \\implies |f(x)-f(x_0)|<\\varepsilon=\\dfrac{f(x_0)}{2}\\).`, `This last inequality means \\(f(x_0)-\\dfrac{f(x_0)}{2} < f(x) < f(x_0)+\\dfrac{f(x_0)}{2}\\), i.e. \\(f(x) > \\dfrac{f(x_0)}{2} > 0\\), for every \\(x\\) in the open interval \\((x_0-\\delta,\\,x_0+\\delta)\\). \\(\\blacksquare\\)`] }
      ]},
      { num: '30', statement: `Let \\(f(x)=\\dfrac{\\sin x-\\sin1}{x-1}\\). (a) Approximate \\(\\lim_{x\\to1}f(x)\\) by graphing \\(f\\) and calculating values for some choices of \\(x\\). (b) Use the identity \\(\\sin\\alpha-\\sin\\beta=2\\sin\\!\\left(\\frac{\\alpha-\\beta}{2}\\right)\\cos\\!\\left(\\frac{\\alpha+\\beta}{2}\\right)\\) to find the exact value of \\(\\lim_{x\\to1}f(x)\\).`, parts: [
        { label: '', kind: 'interactive', prompt: `What is the exact value of \\(\\displaystyle\\lim_{x\\to1}\\dfrac{\\sin x-\\sin1}{x-1}\\)?`, inputType: 'expr_const', answer: 'cos(1)', formatHint: 'Enter the exact value, e.g. cos(1).',
          hints: [`Apply the identity with \\(\\alpha=x,\\ \\beta=1\\): \\(\\sin x-\\sin1=2\\sin\\!\\left(\\frac{x-1}{2}\\right)\\cos\\!\\left(\\frac{x+1}{2}\\right)\\).`, `Let \\(u=\\frac{x-1}{2}\\), so \\(x-1=2u\\). Rewrite the whole quotient in terms of \\(u\\) — you should be able to expose the named limit \\(\\frac{\\sin u}{u}\\to1\\).`, `What's left over after that named limit is taken is \\(\\cos\\!\\left(\\frac{x+1}{2}\\right)\\) evaluated at \\(x=1\\).`],
          solution: [`This is exactly the difference quotient (derivative) of \\(\\sin x\\) at \\(x=1\\) — so the answer should be \\(\\cos1\\), but let's confirm via the identity.`, `\\(\\sin x-\\sin1=2\\sin\\!\\left(\\frac{x-1}{2}\\right)\\cos\\!\\left(\\frac{x+1}{2}\\right)\\). Let \\(u=\\frac{x-1}{2}\\) (so \\(x-1=2u\\)): \\(\\dfrac{\\sin x-\\sin1}{x-1}=\\dfrac{2\\sin u\\cos\\!\\left(\\frac{x+1}{2}\\right)}{2u}=\\dfrac{\\sin u}{u}\\cdot\\cos\\!\\left(\\frac{x+1}{2}\\right)\\).`, `As \\(x\\to1\\), \\(u\\to0\\) so \\(\\frac{\\sin u}{u}\\to1\\), and \\(\\cos\\!\\left(\\frac{x+1}{2}\\right)\\to\\cos1\\).`, `Limit \\(=1\\cdot\\cos1=\\cos1\\approx0.540\\).`] }
      ]}
    ]
  },

  // ============================================================
  {
    heading: 'Continuity',
    problems: [
      { num: '31', statement: `Find the values of \\(x\\), if any, at which the given function is not continuous.`, parts: [
        { label: 'a', kind: 'interactive', prompt: `\\(f(x)=\\dfrac{x}{x^2-1}\\)`, inputType: 'set', answer: ['1', '-1'], formatHint: 'Enter the values separated by a comma.',
          hints: [`A rational function is discontinuous exactly where its denominator vanishes.`, `\\(x^2-1=0 \\iff x=\\pm1\\).`],
          solution: [`\\(f\\) is undefined (and hence discontinuous) wherever \\(x^2-1=0\\), i.e. \\(x=1\\) or \\(x=-1\\).`] },
        { label: 'b', kind: 'interactive', prompt: `\\(f(x)=|x^3-2x^2|\\)`, inputType: 'text', answer: ['none', 'no discontinuities', 'continuous everywhere'], formatHint: "Enter 'none' if there aren't any.",
          hints: [`This is just the absolute value of a polynomial.`, `Polynomials are continuous everywhere, and the absolute value of a continuous function is also continuous everywhere (no new restriction is introduced — absolute value itself is continuous on all of \\(\\mathbb{R}\\)).`],
          solution: [`\\(x^3-2x^2\\) is a polynomial, defined and continuous for every real \\(x\\).`, `\\(|{\\cdot}|\\) is continuous everywhere too, and a composition of continuous functions is continuous, so \\(|x^3-2x^2|\\) is continuous for every \\(x\\) — there are no points of discontinuity. (The absolute value bars are a red herring here — they don't introduce any domain restriction the way a denominator or a square root would.)`] },
        { label: 'c', kind: 'interactive', prompt: `\\(f(x)=\\dfrac{x+3}{|x^2+3x|}\\)`, inputType: 'set', answer: ['0', '-3'], formatHint: 'Enter the values separated by a comma.',
          hints: [`The function is undefined wherever the denominator is zero — and absolute value doesn't change *where* something is zero, only whether it's negative.`, `Factor: \\(x^2+3x=x(x+3)\\).`],
          solution: [`\\(|x^2+3x|=0 \\iff x^2+3x=0 \\iff x(x+3)=0 \\iff x=0\\) or \\(x=-3\\).`, `\\(f\\) is undefined (discontinuous) at exactly those two points.`] }
      ]},
      { num: '32', statement: `Determine the largest set on which \\(f\\) is continuous.`, parts: [
        { label: 'a', kind: 'interactive', prompt: `\\(f(x)=\\dfrac{x}{|x|-3}\\) — at which two values does \\(f\\) fail to be continuous?`, inputType: 'set', answer: ['3', '-3'], formatHint: 'Enter the two values separated by a comma.',
          hints: [`The function is undefined wherever \\(|x|-3=0\\).`, `\\(|x|=3 \\iff x=3\\) or \\(x=-3\\).`],
          solution: [`\\(f\\) is undefined wherever \\(|x|-3=0\\), i.e. \\(|x|=3\\), i.e. \\(x=3\\) or \\(x=-3\\). Everywhere else, \\(f\\) is continuous.`] },
        { label: 'b', kind: 'interactive', prompt: `\\(f(x)=\\cos^{-1}\\!\\left(\\dfrac1x\\right)\\). On which set is \\(f\\) continuous?`, inputType: 'text', answer: ['x<=-1 or x>=1', 'x>=1 or x<=-1'], formatHint: 'Enter as x<=-1 or x>=1 (no extra spacing beyond that shown).',
          hints: [`\\(\\cos^{-1}(u)\\) requires \\(-1\\leq u\\leq1\\); here \\(u=1/x\\).`, `Solve \\(-1\\leq\\frac1x\\leq1\\) separately for \\(x>0\\) and \\(x<0\\) (multiplying an inequality by a negative number flips it, so don't combine the cases carelessly).`, `For \\(x>0\\): need \\(x\\geq1\\). For \\(x<0\\): need \\(x\\leq-1\\).`],
          solution: [`Need \\(-1\\leq\\dfrac1x\\leq1\\) and \\(x\\neq0\\). Split by sign of \\(x\\):`, `For \\(x>0\\): \\(\\dfrac1x\\leq1\\iff x\\geq1\\) (and \\(\\dfrac1x\\geq-1\\) is automatic). So \\(x\\geq1\\).`, `For \\(x<0\\): \\(\\dfrac1x\\geq-1\\iff x\\leq-1\\) (flipping the inequality since \\(x\\) is negative; \\(\\dfrac1x\\leq1\\) is automatic). So \\(x\\leq-1\\).`, `Domain (and interval of continuity, since \\(\\cos^{-1}\\) is continuous on its whole closed domain): \\(x\\leq-1\\) or \\(x\\geq1\\).`] },
        { label: 'c', kind: 'interactive', prompt: `\\(f(x)=e^{\\ln x}\\). On which set is \\(f\\) continuous?`, inputType: 'text', answer: ['x>0'], formatHint: 'Enter in the form x>0.',
          hints: [`Even though \\(e^{\\ln x}\\) algebraically simplifies to just \\(x\\), the *domain* of the composition is fixed by the innermost function before any simplification.`, `\\(\\ln x\\) requires \\(x>0\\).`],
          solution: [`The inner function \\(\\ln x\\) is only defined for \\(x>0\\) — that restriction applies to the whole composition \\(e^{\\ln x}\\), regardless of the fact that it algebraically equals \\(x\\) afterward.`, `So \\(f\\) is continuous exactly on \\(x>0\\).`] }
      ]},
      { num: '33', statement: `Let \\(f(x)=\\begin{cases}-x^4+3 & x\\leq2\\\\ x^2+9 & x>2\\end{cases}\\)`, parts: [
        { label: 'a', kind: 'interactive', prompt: `What is \\(\\displaystyle\\lim_{x\\to2^-}f(x)\\) (using the left piece)?`, inputType: 'numeric', answer: '-13', formatHint: 'Enter an exact number.',
          hints: [`Substitute \\(x=2\\) into \\(-x^4+3\\).`], solution: [`\\(-2^4+3=-16+3=-13\\).`] },
        { label: 'b', kind: 'interactive', prompt: `What is \\(\\displaystyle\\lim_{x\\to2^+}f(x)\\) (using the right piece)?`, inputType: 'numeric', answer: '13', formatHint: 'Enter an exact number.',
          hints: [`Substitute \\(x=2\\) into \\(x^2+9\\).`], solution: [`\\(2^2+9=4+9=13\\).`] },
        { label: 'c', kind: 'interactive', prompt: `Is \\(f\\) continuous everywhere? Enter yes or no.`, inputType: 'text', answer: ['no', 'n'], formatHint: 'Enter yes or no.',
          hints: [`Compare your two previous answers.`],
          solution: [`The left- and right-hand limits at \\(x=2\\) are \\(-13\\) and \\(13\\) — they disagree, so \\(\\lim_{x\\to2}f(x)\\) does not exist.`, `Since the limit doesn't even exist at \\(x=2\\), \\(f\\) is not continuous there (a jump discontinuity), even though both pieces are individually continuous (polynomials) everywhere else. So \\(f\\) is **not** continuous everywhere.`] }
      ]},
      { num: '34', statement: `Discussion / writing prompt.`, parts: [
        { label: 'a', kind: 'discussion', prompt: `One dictionary describes a continuous function as "one whose value at each point is closely approached by its values at neighboring points." Explain what "neighboring points" and "closely approached" mean to a non-mathematician.`,
          solution: [`"Neighboring points" = other input values \\(x\\) that are very close to the point \\(a\\) you're looking at — not far away on the number line.`, `"Closely approached" = as those neighboring inputs get closer and closer to \\(a\\), the corresponding outputs get closer and closer to \\(f(a)\\) too — with no sudden jump, gap, or wild swing in between.`] },
        { label: 'b', kind: 'discussion', prompt: `Write a paragraph explaining why the dictionary definition above is consistent with the formal continuity definition (Definition 1.5.1).`,
          solution: [`Definition 1.5.1 requires \\(\\lim_{x\\to a}f(x)=f(a)\\), which itself unpacks (via the \\(\\varepsilon\\text{-}\\delta\\) definition of limit) to: for every tolerance \\(\\varepsilon\\) around \\(f(a)\\), there's a neighborhood around \\(a\\) (the "neighboring points") within which every output \\(f(x)\\) lands inside that tolerance (the "closely approached" part).`, `So the dictionary's informal phrase and the formal \\(\\varepsilon\\text{-}\\delta\\) condition are describing exactly the same idea at two different levels of precision — the dictionary captures the intuition, the formal definition makes "neighboring" and "closely" mathematically exact via \\(\\delta\\) and \\(\\varepsilon\\).`] }
      ]}
    ]
  },

  // ============================================================
  {
    heading: 'The Intermediate-Value Theorem',
    problems: [
      { num: '35', statement: `Show that the conclusion of the Intermediate-Value Theorem may be false if \\(f\\) is not continuous on \\([a,b]\\).`, parts: [
        { label: '', kind: 'discussion', prompt: `Give a counterexample.`,
          solution: [`Take \\(f(x)=\\dfrac1x\\) on \\([-1,1]\\) — note \\(f\\) is *not* continuous on this interval, since it's undefined at \\(x=0\\) (and blows up there).`, `\\(f(-1)=-1<0\\) and \\(f(1)=1>0\\), so \\(0\\) is between \\(f(-1)\\) and \\(f(1)\\). If the IVT's conclusion held anyway, there would have to be some \\(c\\in[-1,1]\\) with \\(f(c)=0\\).`, `But \\(f(x)=1/x\\) is *never* equal to \\(0\\) for any real \\(x\\) — there is no such \\(c\\). The conclusion fails precisely because continuity was violated (at \\(x=0\\), right in the middle of the interval).`] }
      ]},
      { num: '36', statement: `Suppose that \\(f\\) is continuous on \\([0,1]\\), that \\(f(0)=2\\), and that \\(f\\) has no zeros in \\([0,1]\\). Prove that \\(f(x)>0\\) for every \\(x\\) in \\([0,1]\\).`, parts: [
        { label: '', kind: 'discussion', prompt: `Prove the claim.`,
          solution: [`**Proof by contradiction.** Suppose, for contradiction, that \\(f(x_0)<0\\) for some \\(x_0\\in[0,1]\\) (it can't be \\(=0\\), since \\(f\\) has no zeros there by assumption).`, `Since \\(f\\) is continuous on \\([0,1]\\) (hence on \\([0,x_0]\\)), and \\(f(0)=2>0\\) while \\(f(x_0)<0\\), the Intermediate-Value Theorem guarantees some point \\(c\\) strictly between \\(0\\) and \\(x_0\\) with \\(f(c)=0\\) (since \\(0\\) lies between \\(f(0)\\) and \\(f(x_0)\\)).`, `But that contradicts the assumption that \\(f\\) has *no* zeros in \\([0,1]\\). So no such \\(x_0\\) can exist — meaning \\(f(x)\\) is never negative on \\([0,1]\\), i.e. \\(f(x)>0\\) throughout (it also can't be \\(0\\), again by assumption). \\(\\blacksquare\\)`] }
      ]},
      { num: '37', statement: `Show that the equation \\(x^4+5x^3+5x-1=0\\) has at least two real solutions in the interval \\([-6,2]\\). Start by evaluating \\(g(x)=x^4+5x^3+5x-1\\) at a few sample points.`, parts: [
        { label: 'a', kind: 'interactive', prompt: `Evaluate \\(g(-6)\\).`, inputType: 'numeric', answer: '185', formatHint: 'Enter an exact number.',
          hints: [`\\(g(-6)=(-6)^4+5(-6)^3+5(-6)-1\\).`], solution: [`\\((-6)^4=1296\\), \\(5(-6)^3=5(-216)=-1080\\), \\(5(-6)=-30\\). Sum: \\(1296-1080-30-1=185\\).`] },
        { label: 'b', kind: 'interactive', prompt: `Evaluate \\(g(-5)\\).`, inputType: 'numeric', answer: '-26', formatHint: 'Enter an exact number.',
          hints: [`\\(g(-5)=(-5)^4+5(-5)^3+5(-5)-1\\).`], solution: [`\\((-5)^4=625\\), \\(5(-5)^3=5(-125)=-625\\), \\(5(-5)=-25\\). Sum: \\(625-625-25-1=-26\\).`] },
        { label: 'c', kind: 'interactive', prompt: `Evaluate \\(g(0)\\).`, inputType: 'numeric', answer: '-1', formatHint: 'Enter an exact number.',
          hints: [`Everything except the constant term vanishes at \\(x=0\\).`], solution: [`\\(g(0)=0+0+0-1=-1\\).`] },
        { label: 'd', kind: 'interactive', prompt: `Evaluate \\(g(1)\\).`, inputType: 'numeric', answer: '10', formatHint: 'Enter an exact number.',
          hints: [`\\(g(1)=1^4+5(1)^3+5(1)-1\\).`], solution: [`\\(1+5+5-1=10\\).`] },
        { label: 'e', kind: 'interactive', prompt: `Based on the sign changes you just found between consecutive sample points, how many roots does the Intermediate-Value Theorem guarantee inside \\([-6,2]\\)?`, inputType: 'numeric', answer: '2', formatHint: 'Enter an exact number.',
          hints: [`A polynomial is continuous everywhere, so the IVT applies on any sub-interval. Count how many times the sign of \\(g\\) flipped across your four sample points.`, `\\(g(-6)=185>0\\) and \\(g(-5)=-26<0\\): one sign change. \\(g(-5)<0\\) and \\(g(0)<0\\): no change there. \\(g(0)<0\\) and \\(g(1)=10>0\\): another sign change.`],
          solution: [`\\(g\\) is a polynomial, hence continuous everywhere, so the IVT applies on any closed sub-interval.`, `Sign pattern across the sample points: \\(g(-6)=185\\) (\\(+\\)), \\(g(-5)=-26\\) (\\(-\\)), \\(g(0)=-1\\) (\\(-\\)), \\(g(1)=10\\) (\\(+\\)).`, `That's two sign changes: once between \\(-6\\) and \\(-5\\), and once between \\(0\\) and \\(1\\). By the IVT, each sign change guarantees at least one root of \\(g(x)=0\\) in that sub-interval — so there's at least one root in \\((-6,-5)\\) and at least one more in \\((0,1)\\), giving (at least) **two** real solutions in \\([-6,2]\\), as required. \\(\\blacksquare\\)`] }
      ]}
    ]
  }

  ] // end groups
};
