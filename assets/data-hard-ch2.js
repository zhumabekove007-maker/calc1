// ============================================================
// data-hard-ch2.js — "Harder Chapter 2 Problem Practice"
// Covers velocity/derivative basics, differentiability vs.
// continuity, reading a derivative's graph, numerically
// estimating derivatives, working backward from limit
// definitions, tangent lines, and combined derivative rules.
// Same schema as data-hard-ch1.js: groups -> problems -> parts,
// each part is 'interactive' (checked) or 'discussion' (model answer only).
// ============================================================
window.HARD_CH2 = {
  intro: `More end-of-chapter review, this time built on derivatives — velocity, differentiability vs. continuity, reading off a derivative's graph, numerically estimating derivatives, working backward from limit-definition setups, tangent lines, and combining the product/quotient/chain rules. Same format as the Chapter 1 set: most problems have a checkable answer; a few open-ended ones show a model solution instead.`,
  groups: [

  // ============================================================
  {
    heading: 'Velocity, Derivatives, and Differentiability',
    problems: [
      {
        num: '7',
        statement: `A particle moves on a line away from its initial position so that after \\(t\\) hours it is \\(s=3t^2+t\\) miles from its initial position.`,
        parts: [
          { label: 'a', kind: 'interactive', prompt: `Find the average velocity of the particle over the interval \\([1,3]\\).`, inputType: 'numeric', answer: '13', formatHint: 'Enter an exact number (mph).',
            hints: [`Average velocity over \\([a,b]\\) is \\(\\dfrac{s(b)-s(a)}{b-a}\\).`, `\\(s(3)=3(9)+3=30\\) and \\(s(1)=3(1)+1=4\\).`],
            solution: [`\\(s(3)=3(3)^2+3=27+3=30\\); \\(s(1)=3(1)^2+1=4\\).`, `Average velocity \\(=\\dfrac{30-4}{3-1}=\\dfrac{26}{2}=13\\) mph.`] },
          { label: 'b', kind: 'interactive', prompt: `Find the instantaneous velocity at \\(t=1\\).`, inputType: 'numeric', answer: '7', formatHint: 'Enter an exact number (mph).',
            hints: [`Instantaneous velocity is \\(s'(t)\\).`, `\\(s'(t)=6t+1\\).`],
            solution: [`\\(s'(t)=6t+1\\), so \\(s'(1)=6(1)+1=7\\) mph.`] }
        ]
      },
      {
        num: '8',
        statement: `State the definition of a derivative, and give two interpretations of it.`,
        parts: [
          { label: '', kind: 'discussion', prompt: `Give the definition and two interpretations.`,
            solution: [`**Definition:** \\(f'(x)=\\displaystyle\\lim_{h\\to0}\\dfrac{f(x+h)-f(x)}{h}\\), provided this limit exists.`, `**Geometric interpretation:** \\(f'(x)\\) is the slope of the tangent line to the curve \\(y=f(x)\\) at the point \\((x,f(x))\\) — the limit of secant-line slopes as the second point slides in toward \\(x\\).`, `**Physical (rate-of-change) interpretation:** if \\(f(x)\\) represents a quantity depending on \\(x\\) (e.g. position as a function of time), \\(f'(x)\\) is the instantaneous rate of change of that quantity with respect to \\(x\\) (e.g. instantaneous velocity) — the limit of average rates of change over shorter and shorter intervals.`] }
        ]
      },
      {
        num: '9',
        statement: `Use the definition of a derivative to find \\(dy/dx\\), and check your answer by calculating the derivative using appropriate derivative formulas.`,
        parts: [
          { label: 'a', kind: 'interactive', prompt: `\\(y=\\sqrt{9-4x}\\)`, inputType: 'expr', variable: 'x', answer: '-2/sqrt(9-4*x)', formatHint: 'Enter an expression in x, e.g. -2/sqrt(9-4*x).',
            hints: [`By the definition: \\(\\dfrac{dy}{dx}=\\lim_{h\\to0}\\dfrac{\\sqrt{9-4(x+h)}-\\sqrt{9-4x}}{h}\\) — rationalize by multiplying by the conjugate to clear the square roots from the numerator.`, `After rationalizing and cancelling \\(h\\), and letting \\(h\\to0\\), you should land on the same thing the chain rule gives directly: treat \\(9-4x\\) as the inner function.`, `Chain rule check: \\(\\frac{d}{dx}(9-4x)^{1/2}=\\frac12(9-4x)^{-1/2}\\cdot(-4)\\).`],
            solution: [`**Via the definition:** \\(\\dfrac{dy}{dx}=\\lim_{h\\to0}\\dfrac{\\sqrt{9-4(x+h)}-\\sqrt{9-4x}}{h}\\). Multiplying by the conjugate over itself, the numerator becomes \\([9-4(x+h)]-[9-4x]=-4h\\), giving \\(\\lim_{h\\to0}\\dfrac{-4h}{h\\left(\\sqrt{9-4(x+h)}+\\sqrt{9-4x}\\right)}=\\dfrac{-4}{2\\sqrt{9-4x}}=\\dfrac{-2}{\\sqrt{9-4x}}\\).`, `**Check via formulas:** \\(\\dfrac{d}{dx}(9-4x)^{1/2}=\\dfrac12(9-4x)^{-1/2}(-4)=\\dfrac{-2}{\\sqrt{9-4x}}\\). Matches.`] },
          { label: 'b', kind: 'interactive', prompt: `\\(y=\\dfrac{x}{x+1}\\)`, inputType: 'expr', variable: 'x', answer: '1/(x+1)^2', formatHint: 'Enter an expression in x, e.g. 1/(x+1)^2.',
            hints: [`By the definition: form the difference quotient \\(\\dfrac{1}{h}\\left[\\dfrac{x+h}{x+h+1}-\\dfrac{x}{x+1}\\right]\\) and combine into a single fraction before taking \\(h\\to0\\).`, `Chain rule check: use the quotient rule directly on \\(\\frac{x}{x+1}\\).`],
            solution: [`**Via the definition:** combining the difference quotient into one fraction and simplifying, the numerator works out to \\(h\\) exactly (after the \\(x\\) terms cancel), so \\(\\dfrac{1}{h}\\cdot\\dfrac{h}{(x+h+1)(x+1)}=\\dfrac{1}{(x+h+1)(x+1)}\\to\\dfrac{1}{(x+1)^2}\\) as \\(h\\to0\\).`, `**Check via formulas (quotient rule):** \\(\\dfrac{d}{dx}\\dfrac{x}{x+1}=\\dfrac{(1)(x+1)-x(1)}{(x+1)^2}=\\dfrac{1}{(x+1)^2}\\). Matches.`] }
        ]
      },
      {
        num: '10',
        statement: `Suppose that \\(f(x)=\\begin{cases}x^2-1 & x\\leq1\\\\ k(x-1) & x>1\\end{cases}\\)`,
        parts: [
          { label: 'a', kind: 'interactive', prompt: `For what values of \\(k\\) is \\(f\\) continuous?`, inputType: 'text', answer: ['all k', 'all real k', 'any k', 'every k', 'all values of k'], formatHint: "Enter 'all k' if it holds for every value.",
            hints: [`Check the right-hand piece's limit as \\(x\\to1^+\\): \\(k(x-1)\\to k\\cdot0\\), regardless of what \\(k\\) is.`, `Compare that to \\(f(1)\\) from the left piece.`],
            solution: [`\\(f(1)=1^2-1=0\\) (left piece, since \\(x\\leq1\\) includes \\(1\\)).`, `\\(\\lim_{x\\to1^+}k(x-1)=k\\cdot0=0\\), no matter what \\(k\\) is.`, `Both sides always agree at \\(0\\), so \\(f\\) is continuous at \\(x=1\\) for **every** value of \\(k\\) — the value of \\(k\\) only affects the *slope* of the right piece, not whether the pieces connect.`] },
          { label: 'b', kind: 'interactive', prompt: `For what value of \\(k\\) is \\(f\\) differentiable?`, inputType: 'numeric', answer: '2', formatHint: 'Enter an exact number.',
            hints: [`Differentiability additionally requires the one-sided *derivatives* to match at \\(x=1\\) (continuity alone, from part a, isn't enough).`, `Left piece's derivative: \\(\\frac{d}{dx}(x^2-1)=2x\\), evaluated at \\(x=1\\). Right piece's derivative: \\(\\frac{d}{dx}[k(x-1)]=k\\).`],
            solution: [`Left-hand derivative at \\(x=1\\): \\(\\frac{d}{dx}(x^2-1)=2x \\Rightarrow 2(1)=2\\).`, `Right-hand derivative: \\(\\frac{d}{dx}[k(x-1)]=k\\).`, `Need these equal: \\(k=2\\).`] }
        ]
      }
    ]
  },

  // ============================================================
  {
    heading: "Reading a Derivative's Graph",
    problems: [
      {
        num: '11',
        statement: `The accompanying figure shows the graph of \\(y=f'(x)\\) for an unspecified function \\(f\\).`,
        figure: `<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of y=f'(x), a piecewise-linear curve crossing zero at x=-2, x=2, and x=5.">
  <g>
    <line x1="55" y1="40" x2="55" y2="330" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="111" y1="40" x2="111" y2="330" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="167" y1="40" x2="167" y2="330" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="223" y1="40" x2="223" y2="330" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="279" y1="40" x2="279" y2="330" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="335" y1="40" x2="335" y2="330" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="391" y1="40" x2="391" y2="330" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="447" y1="40" x2="447" y2="330" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="503" y1="40" x2="503" y2="330" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="559" y1="40" x2="559" y2="330" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="615" y1="40" x2="615" y2="330" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="315.5" x2="615" y2="315.5" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="267.2" x2="615" y2="267.2" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="218.8" x2="615" y2="218.8" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="170.5" x2="615" y2="170.5" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="122.2" x2="615" y2="122.2" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="73.8" x2="615" y2="73.8" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
  </g>
  <line x1="55" y1="170.5" x2="615" y2="170.5" stroke="#1E2238" stroke-width="1.5"/>
  <line x1="279" y1="40" x2="279" y2="330" stroke="#1E2238" stroke-width="1.5"/>
  <text x="608" y="164" font-size="13" fill="#1E2238">x</text>
  <text x="284" y="48" font-size="13" fill="#1E2238">y</text>
  <text x="55" y="346" font-size="11" text-anchor="middle" fill="#565b74">-4</text>
  <text x="111" y="346" font-size="11" text-anchor="middle" fill="#565b74">-3</text>
  <text x="167" y="346" font-size="11" text-anchor="middle" fill="#565b74">-2</text>
  <text x="223" y="346" font-size="11" text-anchor="middle" fill="#565b74">-1</text>
  <text x="335" y="346" font-size="11" text-anchor="middle" fill="#565b74">1</text>
  <text x="391" y="346" font-size="11" text-anchor="middle" fill="#565b74">2</text>
  <text x="447" y="346" font-size="11" text-anchor="middle" fill="#565b74">3</text>
  <text x="503" y="346" font-size="11" text-anchor="middle" fill="#565b74">4</text>
  <text x="559" y="346" font-size="11" text-anchor="middle" fill="#565b74">5</text>
  <text x="615" y="346" font-size="11" text-anchor="middle" fill="#565b74">6</text>
  <text x="45" y="319" font-size="11" text-anchor="end" fill="#565b74">-3</text>
  <text x="45" y="271" font-size="11" text-anchor="end" fill="#565b74">-2</text>
  <text x="45" y="222.8" font-size="11" text-anchor="end" fill="#565b74">-1</text>
  <text x="45" y="126.2" font-size="11" text-anchor="end" fill="#565b74">1</text>
  <text x="45" y="77.8" font-size="11" text-anchor="end" fill="#565b74">2</text>
  <path d="M 55,315.5 L 167,170.5 L 279,73.8 L 391,170.5 L 475,291.3 L 559,170.5 L 615,98" stroke="#38458F" stroke-width="2.5" fill="none"/>
  <circle cx="167" cy="170.5" r="4" fill="#1E2238"/>
  <circle cx="391" cy="170.5" r="4" fill="#1E2238"/>
  <circle cx="559" cy="170.5" r="4" fill="#1E2238"/>
  <text x="167" y="190" font-size="10" text-anchor="middle" fill="#1E2238">x=-2</text>
  <text x="391" y="190" font-size="10" text-anchor="middle" fill="#1E2238">x=2</text>
  <text x="559" y="190" font-size="10" text-anchor="middle" fill="#1E2238">x=5</text>
  <text x="222" y="120" font-size="11" fill="#2E7350">f' &gt; 0</text>
  <text x="475" y="245" font-size="11" fill="#AD3A30">f' &lt; 0</text>
  <text x="585" y="135" font-size="11" fill="#2E7350">f' &gt; 0</text>
  <text x="80" y="295" font-size="11" fill="#AD3A30">f' &lt; 0</text>
</svg>`,
        parts: [
          { label: 'a', kind: 'interactive', prompt: `For what values of \\(x\\) does the curve \\(y=f(x)\\) have a horizontal tangent line?`, inputType: 'set', answer: ['-2', '2', '5'], formatHint: 'Enter the values separated by commas.',
            hints: [`A horizontal tangent on \\(y=f(x)\\) happens exactly where \\(f'(x)=0\\) — i.e. where the graph shown crosses the x-axis.`],
            solution: [`The graph of \\(f'\\) crosses zero at \\(x=-2,\\,2,\\,5\\) — those are exactly the points where \\(y=f(x)\\) has a horizontal tangent line.`] },
          { label: 'b', kind: 'interactive', prompt: `Give the first (leftmost) interval, within the domain shown, over which the curve \\(y=f(x)\\) has tangent lines with positive slope.`, inputType: 'text', answer: ['(-2,2)'], formatHint: 'Enter as an open interval, e.g. (-2,2).',
            hints: [`Positive slope on \\(f\\) means \\(f'(x)>0\\) — where is the graph of \\(f'\\) *above* the x-axis?`],
            solution: [`Between \\(x=-2\\) and \\(x=2\\), the graph of \\(f'\\) is above the x-axis (it peaks at \\(2\\) around \\(x=0\\)), so \\(f\\) has positive slope on \\((-2,2)\\).`] },
          { label: 'c', kind: 'interactive', prompt: `Give the second such interval (within the domain shown).`, inputType: 'text', answer: ['(5,6)'], formatHint: 'Enter as an open interval, e.g. (5,6).',
            hints: [`Look to the right of the second zero crossing the curve makes — there's a dip below the axis first, then it climbs back above.`],
            solution: [`After dipping negative between \\(x=2\\) and \\(x=5\\), the graph of \\(f'\\) rises back above the x-axis for \\(x>5\\); within the shown domain, that's \\((5,6)\\).`] }
        ]
      }
    ]
  },

  // ============================================================
  {
    heading: 'Estimating Derivatives Numerically',
    problems: [
      {
        num: '21',
        statement: `In each part, find \\(f'(x_0)\\) (first estimate it numerically with a small difference quotient if you like, then confirm with derivative formulas).`,
        parts: [
          { label: 'a', kind: 'interactive', prompt: `\\(f(x)=x^2-1,\\ x_0=1.8\\)`, inputType: 'numeric', answer: '3.6', formatHint: 'Enter an exact number.',
            hints: [`\\(f'(x)=2x\\).`], solution: [`\\(f'(x)=2x \\Rightarrow f'(1.8)=3.6\\).`] },
          { label: 'b', kind: 'interactive', prompt: `\\(f(x)=\\dfrac{x^2}{x-2},\\ x_0=3.5\\)`, inputType: 'expr_const', answer: '-7/9', formatHint: 'Enter the exact value, e.g. -7/9.',
            hints: [`Quotient rule: \\(f'(x)=\\dfrac{2x(x-2)-x^2(1)}{(x-2)^2}=\\dfrac{x^2-4x}{(x-2)^2}\\).`, `Substitute \\(x=3.5\\).`],
            solution: [`\\(f'(x)=\\dfrac{2x(x-2)-x^2}{(x-2)^2}=\\dfrac{x^2-4x}{(x-2)^2}\\).`, `At \\(x=3.5\\): numerator \\(=12.25-14=-1.75\\); denominator \\(=1.5^2=2.25\\). \\(f'(3.5)=\\dfrac{-1.75}{2.25}=-\\dfrac79\\).`] }
        ]
      },
      {
        num: '22',
        statement: `In each part, find \\(f'(x_0)\\).`,
        parts: [
          { label: 'a', kind: 'interactive', prompt: `\\(f(x)=x^3-x^2+1,\\ x_0=2.3\\)`, inputType: 'numeric', answer: '11.27', formatHint: 'Enter an exact number.',
            hints: [`\\(f'(x)=3x^2-2x\\).`], solution: [`\\(f'(x)=3x^2-2x \\Rightarrow f'(2.3)=3(2.3)^2-2(2.3)=15.87-4.6=11.27\\).`] },
          { label: 'b', kind: 'interactive', prompt: `\\(f(x)=\\dfrac{x}{x^2+1},\\ x_0=-0.5\\)`, inputType: 'numeric', answer: '0.48', formatHint: 'Enter an exact number.',
            hints: [`Quotient rule: \\(f'(x)=\\dfrac{1\\cdot(x^2+1)-x(2x)}{(x^2+1)^2}=\\dfrac{1-x^2}{(x^2+1)^2}\\).`],
            solution: [`\\(f'(x)=\\dfrac{(x^2+1)-x(2x)}{(x^2+1)^2}=\\dfrac{1-x^2}{(x^2+1)^2}\\).`, `At \\(x=-0.5\\): numerator \\(=1-0.25=0.75\\); denominator \\(=(1.25)^2=1.5625\\). \\(f'(-0.5)=\\dfrac{0.75}{1.5625}=0.48\\).`] }
        ]
      }
    ]
  },

  // ============================================================
  {
    heading: 'Working Backward from a Limit Definition',
    problems: [
      {
        num: '23',
        statement: `Suppose that a function \\(f\\) is differentiable at \\(x=1\\) and \\(\\displaystyle\\lim_{h\\to0}\\dfrac{f(1+h)}{h}=5\\).`,
        parts: [
          { label: 'a', kind: 'interactive', prompt: `Find \\(f(1)\\).`, inputType: 'numeric', answer: '0', formatHint: 'Enter an exact number.',
            hints: [`If \\(f(1)\\) were anything other than \\(0\\), then \\(\\frac{f(1+h)}{h}\\) would blow up to \\(\\pm\\infty\\) as \\(h\\to0\\) (a nonzero constant over a vanishing \\(h\\)) — but we're told the limit is the finite number \\(5\\).`],
            solution: [`Write \\(\\dfrac{f(1+h)}{h}=\\dfrac{f(1)}{h}+\\dfrac{f(1+h)-f(1)}{h}\\). For the overall limit to be finite as \\(h\\to0\\), the \\(\\dfrac{f(1)}{h}\\) piece can't blow up — forcing \\(f(1)=0\\).`] },
          { label: 'b', kind: 'interactive', prompt: `Find \\(f'(1)\\).`, inputType: 'numeric', answer: '5', formatHint: 'Enter an exact number.',
            hints: [`Once you know \\(f(1)=0\\), the given limit \\(\\lim_{h\\to0}\\frac{f(1+h)}{h}\\) is literally \\(\\lim_{h\\to0}\\frac{f(1+h)-f(1)}{h}\\) — the definition of \\(f'(1)\\).`],
            solution: [`Since \\(f(1)=0\\), the given limit equals \\(\\lim_{h\\to0}\\dfrac{f(1+h)-f(1)}{h}\\), which is exactly the definition of \\(f'(1)\\). So \\(f'(1)=5\\).`] }
        ]
      },
      {
        num: '24',
        statement: `Suppose that a function \\(f\\) is differentiable at \\(x=2\\) and \\(\\displaystyle\\lim_{x\\to2}\\dfrac{x^3f(x)-24}{x-2}=28\\).`,
        parts: [
          { label: 'a', kind: 'interactive', prompt: `Find \\(f(2)\\).`, inputType: 'numeric', answer: '3', formatHint: 'Enter an exact number.',
            hints: [`As with the previous problem: if the numerator \\(x^3f(x)-24\\) didn't approach \\(0\\) as \\(x\\to2\\), the whole quotient would blow up rather than approach the finite value \\(28\\).`, `So you need \\(\\lim_{x\\to2}\\big[x^3f(x)-24\\big]=0\\), i.e. \\(8f(2)-24=0\\).`],
            solution: [`Need \\(\\lim_{x\\to2}\\big[x^3f(x)-24\\big]=0\\) (else the quotient diverges). That gives \\(2^3f(2)-24=0 \\Rightarrow 8f(2)=24 \\Rightarrow f(2)=3\\).`] },
          { label: 'b', kind: 'interactive', prompt: `Find \\(f'(2)\\).`, inputType: 'numeric', answer: '-1', formatHint: 'Enter an exact number.',
            hints: [`Let \\(g(x)=x^3f(x)\\). Since \\(g(2)=8f(2)=24\\), the given limit is exactly \\(\\lim_{x\\to2}\\frac{g(x)-g(2)}{x-2}=g'(2)\\).`, `Use the product rule on \\(g(x)=x^3f(x)\\): \\(g'(x)=3x^2f(x)+x^3f'(x)\\). Evaluate at \\(x=2\\) and set equal to \\(28\\).`],
            solution: [`Let \\(g(x)=x^3f(x)\\). Since \\(g(2)=2^3f(2)=24\\), the given limit equals \\(g'(2)\\) by definition. So \\(g'(2)=28\\).`, `Product rule: \\(g'(x)=3x^2f(x)+x^3f'(x)\\), so \\(g'(2)=3(4)f(2)+8f'(2)=12(3)+8f'(2)=36+8f'(2)\\).`, `Set \\(36+8f'(2)=28 \\Rightarrow f'(2)=-1\\).`] }
        ]
      }
    ]
  },

  // ============================================================
  {
    heading: 'Tangent Lines',
    problems: [
      {
        num: '25',
        statement: `Find the equations of all lines through the origin that are tangent to the curve \\(y=x^3-9x^2-16x\\).`,
        parts: [
          { label: 'a', kind: 'interactive', prompt: `One tangent line touches the curve right at the origin itself. What is its slope?`, inputType: 'numeric', answer: '-16', formatHint: 'Enter an exact number.',
            hints: [`The curve passes through the origin (check: plugging in \\(x=0\\) gives \\(y=0\\)), so the tangent line *at* the origin is automatically a line *through* the origin.`, `That slope is just \\(f'(0)\\), where \\(f(x)=x^3-9x^2-16x\\).`],
            solution: [`\\(f(0)=0\\), so the curve passes through the origin, and the tangent line there automatically passes through the origin too.`, `\\(f'(x)=3x^2-18x-16 \\Rightarrow f'(0)=-16\\). Tangent line: \\(y=-16x\\).`] },
          { label: 'b', kind: 'interactive', prompt: `There's exactly one other point of tangency, at some \\(x=a\\neq0\\). Find \\(a\\).`, inputType: 'expr_const', answer: '9/2', formatHint: 'Enter the exact value, e.g. 9/2.',
            hints: [`A line through the origin tangent at \\(x=a\\) needs both: the point \\((a,f(a))\\) lies on a line \\(y=mx\\) through the origin (so \\(f(a)=ma\\)), and the slope matches (\\(m=f'(a)\\)).`, `Combine: for \\(a\\neq0\\), divide \\(f(a)=ma\\) by \\(a\\) to get \\(m=\\frac{f(a)}{a}=a^2-9a-16\\). Set this equal to \\(f'(a)=3a^2-18a-16\\) and solve for \\(a\\) (you'll get a quadratic with \\(a=0\\) as one root, which you've already found in part a).`],
            solution: [`Tangency at \\(x=a\\) through the origin needs \\(\\dfrac{f(a)}{a}=f'(a)\\) (point on the line through the origin, with matching slope), i.e. \\(a^2-9a-16=3a^2-18a-16\\).`, `Simplify: \\(0=2a^2-9a=a(2a-9)\\), giving \\(a=0\\) (already found) or \\(a=\\dfrac92\\).`] },
          { label: 'c', kind: 'interactive', prompt: `Find the slope of that second tangent line.`, inputType: 'expr_const', answer: '-145/4', formatHint: 'Enter the exact value, e.g. -145/4.',
            hints: [`Plug \\(a=9/2\\) into \\(f'(a)=3a^2-18a-16\\) (or equivalently into \\(\\frac{f(a)}{a}\\) — they must agree).`],
            solution: [`\\(f'(9/2)=3(9/2)^2-18(9/2)-16=3(81/4)-81-16=\\dfrac{243}{4}-97=\\dfrac{243-388}{4}=-\\dfrac{145}{4}\\).`, `So the second tangent line is \\(y=-\\dfrac{145}{4}x\\). Together with part (a), the two tangent lines through the origin are \\(y=-16x\\) and \\(y=-\\dfrac{145}{4}x\\).`] }
        ]
      },
      {
        num: '26',
        statement: `Find all values of \\(x\\) for which the tangent line to the curve \\(y=2x^3-x^2\\) is perpendicular to the line \\(x+4y=10\\).`,
        parts: [
          { label: '', kind: 'interactive', prompt: `Find all such values of \\(x\\).`, inputType: 'set', answer: ['-2/3', '1'], formatHint: 'Enter both values, separated by a comma.',
            hints: [`Rewrite \\(x+4y=10\\) as \\(y=-\\frac14x+\\frac{10}{4}\\) — its slope is \\(-1/4\\).`, `Perpendicular slope is the negative reciprocal: \\(4\\).`, `Set \\(f'(x)=4\\) where \\(f(x)=2x^3-x^2\\), i.e. \\(6x^2-2x=4\\), and solve the resulting quadratic.`],
            solution: [`The given line has slope \\(-1/4\\), so a perpendicular tangent needs slope \\(4\\).`, `\\(f'(x)=6x^2-2x\\). Set \\(6x^2-2x=4 \\Rightarrow 6x^2-2x-4=0 \\Rightarrow 3x^2-x-2=0 \\Rightarrow (3x+2)(x-1)=0\\).`, `So \\(x=-\\dfrac23\\) or \\(x=1\\).`] }
        ]
      },
      {
        num: '27',
        statement: `Let \\(f(x)=x^2\\). For any distinct values \\(a\\) and \\(b\\), show that the slope of the tangent line to \\(y=f(x)\\) at \\(x=\\frac12(a+b)\\) equals the slope of the secant line through \\((a,a^2)\\) and \\((b,b^2)\\). The figure below illustrates this for \\(a=-1,\\,b=3\\) (so the midpoint is \\(x=1\\)) — both lines drawn have the same slope.`,
        figure: `<svg viewBox="0 0 640 350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parabola y=x^2 with a secant line through (-1,1) and (3,9), and a tangent line at the midpoint x=1, both with the same slope, shown parallel.">
  <g>
    <line x1="100.9" y1="30" x2="100.9" y2="340" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="192.7" y1="30" x2="192.7" y2="340" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="284.5" y1="30" x2="284.5" y2="340" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="376.3" y1="30" x2="376.3" y2="340" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="468.1" y1="30" x2="468.1" y2="340" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="559.9" y1="30" x2="559.9" y2="340" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="304.2" x2="615" y2="304.2" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="256.5" x2="615" y2="256.5" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="208.8" x2="615" y2="208.8" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="161.2" x2="615" y2="161.2" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="113.5" x2="615" y2="113.5" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
    <line x1="55" y1="65.8" x2="615" y2="65.8" stroke="#DBD6C4" stroke-width="1" opacity="0.5"/>
  </g>
  <line x1="55" y1="304.2" x2="615" y2="304.2" stroke="#1E2238" stroke-width="1.5"/>
  <line x1="284.5" y1="30" x2="284.5" y2="340" stroke="#1E2238" stroke-width="1.5"/>
  <text x="608" y="298" font-size="13" fill="#1E2238">x</text>
  <text x="290" y="38" font-size="13" fill="#1E2238">y</text>
  <text x="100.9" y="320" font-size="11" text-anchor="middle" fill="#565b74">-2</text>
  <text x="192.7" y="320" font-size="11" text-anchor="middle" fill="#565b74">-1</text>
  <text x="376.3" y="320" font-size="11" text-anchor="middle" fill="#565b74">1</text>
  <text x="468.1" y="320" font-size="11" text-anchor="middle" fill="#565b74">2</text>
  <text x="559.9" y="320" font-size="11" text-anchor="middle" fill="#565b74">3</text>
  <text x="45" y="260.5" font-size="11" text-anchor="end" fill="#565b74">2</text>
  <text x="45" y="165.2" font-size="11" text-anchor="end" fill="#565b74">4</text>
  <text x="45" y="117.5" font-size="11" text-anchor="end" fill="#565b74">6</text>
  <text x="45" y="69.8" font-size="11" text-anchor="end" fill="#565b74">8</text>
  <path d="M 73.4,178.1 80.7,186.7 88,195 95.4,203 102.7,210.7 110.1,218.1 117.4,225.2 124.8,232 132.1,238.5 139.5,244.7 146.8,250.6 154.1,256.1 161.5,261.4 168.8,266.4 176.2,271 183.5,275.4 190.9,279.4 198.2,283.2 205.6,286.6 212.9,289.7 220.2,292.5 227.6,295.1 234.9,297.3 242.3,299.2 249.6,300.8 257,302.1 264.3,303.1 271.7,303.8 279,304.1 286.3,304.2 293.7,304 301,303.5 308.4,302.6 315.7,301.5 323.1,300 330.4,298.3 337.8,296.2 345.1,293.8 352.4,291.2 359.8,288.2 367.1,284.9 374.5,281.3 381.8,277.4 389.2,273.2 396.5,268.7 403.9,263.9 411.2,258.8 418.5,253.4 425.9,247.7 433.2,241.6 440.6,235.3 447.9,228.7 455.3,221.7 462.6,214.5 470,206.9 477.3,199.1 484.6,190.9 492,182.4 499.3,173.7 506.7,164.6 514,155.2 521.4,145.5 528.7,135.5 536,125.2 543.4,114.6 550.7,103.7 558.1,92.5 565.4,80.9 572.8,69.1 580.1,57 587.5,44.5" stroke="#1E2238" stroke-width="2.5" fill="none"/>
  <line x1="137.6" y1="309" x2="587.5" y2="75.3" stroke="#38458F" stroke-width="2.5"/>
  <line x1="293.7" y1="323.3" x2="458.9" y2="237.5" stroke="#A4711F" stroke-width="2.5"/>
  <circle cx="192.7" cy="280.4" r="5" fill="#38458F"/>
  <circle cx="559.9" cy="89.6" r="5" fill="#38458F"/>
  <circle cx="376.3" cy="280.4" r="5" fill="#A4711F"/>
  <text x="192.7" y="298" font-size="11" text-anchor="middle" fill="#38458F">A(-1,1)</text>
  <text x="559.9" y="84" font-size="11" text-anchor="middle" fill="#38458F">B(3,9)</text>
  <text x="376.3" y="262" font-size="11" text-anchor="middle" fill="#A4711F">M(1,1)</text>
  <text x="450" y="135" font-size="11" fill="#38458F">secant AB, slope 2</text>
  <text x="320" y="345" font-size="11" fill="#A4711F">tangent at midpoint, slope 2</text>
</svg>`,
        parts: [
          { label: '', kind: 'discussion', prompt: `Prove the general result (for any distinct \\(a,b\\), not just \\(a=-1,b=3\\)).`,
            solution: [`Tangent slope at the midpoint \\(x=\\frac12(a+b)\\): since \\(f'(x)=2x\\), \\(f'\\!\\left(\\frac{a+b}{2}\\right)=2\\cdot\\dfrac{a+b}{2}=a+b\\).`, `Secant slope through \\((a,a^2)\\) and \\((b,b^2)\\): \\(\\dfrac{b^2-a^2}{b-a}=\\dfrac{(b-a)(b+a)}{b-a}=a+b\\) (valid since \\(a\\neq b\\), so we may cancel \\(b-a\\)).`, `Both slopes equal \\(a+b\\) — exactly the result claimed, for *any* distinct \\(a,b\\). (The figure shows this concretely for \\(a=-1,b=3\\): both lines have slope \\(a+b=2\\).)`] }
        ]
      }
    ]
  },

  // ============================================================
  {
    heading: 'Combining Derivative Rules',
    problems: [
      {
        num: '39',
        statement: `Suppose that \\(f(x)=M\\sin x+N\\cos x\\) for some constants \\(M\\) and \\(N\\). If \\(f(\\pi/4)=3\\) and \\(f'(\\pi/4)=1\\), find an equation for the tangent line to \\(y=f(x)\\) at \\(x=3\\pi/4\\).`,
        parts: [
          { label: 'a', kind: 'interactive', prompt: `Find \\(M\\).`, inputType: 'expr_const', answer: '2*sqrt(2)', formatHint: 'Enter the exact value, e.g. 2*sqrt(2).',
            hints: [`\\(f'(x)=M\\cos x-N\\sin x\\). At \\(x=\\pi/4\\), \\(\\sin=\\cos=\\frac{\\sqrt2}{2}\\), so both given equations become \\(\\frac{\\sqrt2}{2}(M+N)=3\\) and \\(\\frac{\\sqrt2}{2}(M-N)=1\\).`, `Solve that little linear system for \\(M\\) (add the two equations after clearing the \\(\\sqrt2/2\\) factor).`],
            solution: [`\\(f(\\pi/4)=\\frac{\\sqrt2}{2}(M+N)=3 \\Rightarrow M+N=3\\sqrt2\\). \\(f'(\\pi/4)=\\frac{\\sqrt2}{2}(M-N)=1 \\Rightarrow M-N=\\sqrt2\\).`, `Adding: \\(2M=4\\sqrt2 \\Rightarrow M=2\\sqrt2\\).`] },
          { label: 'b', kind: 'interactive', prompt: `Find \\(N\\).`, inputType: 'expr_const', answer: 'sqrt(2)', formatHint: 'Enter the exact value, e.g. sqrt(2).',
            hints: [`Subtract the two equations from part (a)'s hint instead of adding.`],
            solution: [`Subtracting \\(M-N=\\sqrt2\\) from \\(M+N=3\\sqrt2\\): \\(2N=2\\sqrt2 \\Rightarrow N=\\sqrt2\\).`] },
          { label: 'c', kind: 'interactive', prompt: `Now find \\(f(3\\pi/4)\\) — the \\(y\\)-coordinate of the point of tangency.`, inputType: 'numeric', answer: '1', formatHint: 'Enter an exact number.',
            hints: [`\\(f(x)=2\\sqrt2\\sin x+\\sqrt2\\cos x\\). At \\(3\\pi/4\\): \\(\\sin(3\\pi/4)=\\frac{\\sqrt2}{2}\\), \\(\\cos(3\\pi/4)=-\\frac{\\sqrt2}{2}\\).`],
            solution: [`\\(f(3\\pi/4)=2\\sqrt2\\cdot\\frac{\\sqrt2}{2}+\\sqrt2\\cdot\\left(-\\frac{\\sqrt2}{2}\\right)=2-1=1\\).`] },
          { label: 'd', kind: 'interactive', prompt: `Find \\(f'(3\\pi/4)\\) — the slope of the tangent line.`, inputType: 'numeric', answer: '-3', formatHint: 'Enter an exact number.',
            hints: [`\\(f'(x)=2\\sqrt2\\cos x-\\sqrt2\\sin x\\), evaluated at \\(3\\pi/4\\).`],
            solution: [`\\(f'(3\\pi/4)=2\\sqrt2\\cdot\\left(-\\frac{\\sqrt2}{2}\\right)-\\sqrt2\\cdot\\frac{\\sqrt2}{2}=-2-1=-3\\).`] },
          { label: 'e', kind: 'interactive', prompt: `Putting it together: the tangent line is \\(y=-3x+b\\) for some constant \\(b\\). Find \\(b\\).`, inputType: 'expr_const', answer: '1+9*pi/4', formatHint: 'Enter the exact value, e.g. 1+9*pi/4.',
            hints: [`The line passes through \\((3\\pi/4,\\,1)\\) with slope \\(-3\\): \\(1=-3\\cdot\\frac{3\\pi}{4}+b\\).`],
            solution: [`From \\(y-1=-3\\left(x-\\frac{3\\pi}{4}\\right)\\): \\(y=-3x+\\frac{9\\pi}{4}+1\\). So \\(b=1+\\dfrac{9\\pi}{4}\\), and the tangent line is \\(y=-3x+1+\\dfrac{9\\pi}{4}\\) (\\(\\approx-3x+8.069\\)).`] }
        ]
      },
      {
        num: '40',
        statement: `Suppose that \\(f(x)=M\\tan x+N\\sec x\\) for some constants \\(M\\) and \\(N\\). If \\(f(\\pi/4)=2\\) and \\(f'(\\pi/4)=0\\), find an equation for the tangent line to \\(y=f(x)\\) at \\(x=0\\).`,
        parts: [
          { label: 'a', kind: 'interactive', prompt: `Find \\(M\\).`, inputType: 'numeric', answer: '-2', formatHint: 'Enter an exact number.',
            hints: [`\\(f'(x)=M\\sec^2x+N\\sec x\\tan x\\). At \\(\\pi/4\\): \\(\\tan=1,\\ \\sec=\\sqrt2\\). So \\(f(\\pi/4)=M+N\\sqrt2=2\\) and \\(f'(\\pi/4)=2M+N\\sqrt2=0\\).`, `Subtract the first equation from the second to eliminate \\(N\\).`],
            solution: [`\\(f(\\pi/4)=M(1)+N\\sqrt2=2\\). \\(f'(\\pi/4)=M(\\sqrt2)^2+N\\sqrt2(1)=2M+N\\sqrt2=0\\).`, `Subtract the first from the second: \\((2M+N\\sqrt2)-(M+N\\sqrt2)=0-2 \\Rightarrow M=-2\\).`] },
          { label: 'b', kind: 'interactive', prompt: `Find \\(N\\).`, inputType: 'expr_const', answer: '2*sqrt(2)', formatHint: 'Enter the exact value, e.g. 2*sqrt(2).',
            hints: [`Substitute \\(M=-2\\) back into \\(M+N\\sqrt2=2\\).`],
            solution: [`\\(-2+N\\sqrt2=2 \\Rightarrow N\\sqrt2=4 \\Rightarrow N=\\dfrac{4}{\\sqrt2}=2\\sqrt2\\).`] },
          { label: 'c', kind: 'interactive', prompt: `Find \\(f(0)\\) — this also happens to be the \\(y\\)-intercept of the tangent line, since the point of tangency is at \\(x=0\\).`, inputType: 'expr_const', answer: '2*sqrt(2)', formatHint: 'Enter the exact value, e.g. 2*sqrt(2).',
            hints: [`\\(f(x)=-2\\tan x+2\\sqrt2\\sec x\\). At \\(x=0\\): \\(\\tan0=0,\\ \\sec0=1\\).`],
            solution: [`\\(f(0)=-2(0)+2\\sqrt2(1)=2\\sqrt2\\).`] },
          { label: 'd', kind: 'interactive', prompt: `Find \\(f'(0)\\) — the slope of the tangent line.`, inputType: 'numeric', answer: '-2', formatHint: 'Enter an exact number.',
            hints: [`\\(f'(x)=-2\\sec^2x+2\\sqrt2\\sec x\\tan x\\). At \\(x=0\\): \\(\\sec0=1,\\ \\tan0=0\\).`],
            solution: [`\\(f'(0)=-2(1)^2+2\\sqrt2(1)(0)=-2\\).`, `So the tangent line at \\(x=0\\) is \\(y=-2x+2\\sqrt2\\) (slope \\(-2\\), \\(y\\)-intercept \\(2\\sqrt2\\), from parts c and d).`] }
        ]
      },
      {
        num: '41',
        statement: `Suppose that \\(f'(x)=2x\\cdot f(x)\\) for every \\(x\\), and \\(f(2)=5\\).`,
        parts: [
          { label: 'a', kind: 'interactive', prompt: `Find \\(g'(\\pi/3)\\) if \\(g(x)=f(\\sec x)\\).`, inputType: 'expr_const', answer: '40*sqrt(3)', formatHint: 'Enter the exact value, e.g. 40*sqrt(3).',
            hints: [`Chain rule: \\(g'(x)=f'(\\sec x)\\cdot\\sec x\\tan x\\).`, `The given relation \\(f'(t)=2t\\,f(t)\\) holds for *any* input \\(t\\) — including \\(t=\\sec x\\). So \\(f'(\\sec x)=2\\sec x\\cdot f(\\sec x)\\).`, `At \\(x=\\pi/3\\): \\(\\sec(\\pi/3)=2\\), \\(\\tan(\\pi/3)=\\sqrt3\\), and \\(f(\\sec(\\pi/3))=f(2)=5\\) — which you're given directly!`],
            solution: [`\\(g'(x)=f'(\\sec x)\\sec x\\tan x\\) (chain rule). Using \\(f'(t)=2t f(t)\\) with \\(t=\\sec x\\): \\(f'(\\sec x)=2\\sec x\\,f(\\sec x)\\).`, `So \\(g'(x)=2\\sec^2x\\tan x\\,f(\\sec x)\\). At \\(x=\\pi/3\\): \\(\\sec(\\pi/3)=2\\) (so \\(f(\\sec(\\pi/3))=f(2)=5\\)), \\(\\tan(\\pi/3)=\\sqrt3\\).`, `\\(g'(\\pi/3)=2(2)^2(\\sqrt3)(5)=2\\cdot4\\cdot\\sqrt3\\cdot5=40\\sqrt3\\).`] },
          { label: 'b', kind: 'interactive', prompt: `Find \\(h'(2)\\) if \\(h(x)=\\left[\\dfrac{f(x)}{x-1}\\right]^4\\).`, inputType: 'numeric', answer: '7500', formatHint: 'Enter an exact number.',
            hints: [`Let \\(u(x)=\\dfrac{f(x)}{x-1}\\), so \\(h(x)=u(x)^4\\) and (chain rule) \\(h'(x)=4u(x)^3u'(x)\\).`, `Quotient rule for \\(u\\): \\(u'(x)=\\dfrac{f'(x)(x-1)-f(x)}{(x-1)^2}\\). You'll need \\(f'(2)\\) — get it from the given relation \\(f'(x)=2xf(x)\\) at \\(x=2\\).`, `\\(u(2)=\\dfrac{f(2)}{1}=5\\). Compute \\(u'(2)\\), then plug both into \\(h'(2)=4u(2)^3u'(2)\\).`],
            solution: [`\\(f'(2)=2(2)f(2)=4(5)=20\\) (from the given relation).`, `\\(u(x)=\\dfrac{f(x)}{x-1}\\), so \\(u(2)=\\dfrac{5}{1}=5\\), and \\(u'(x)=\\dfrac{f'(x)(x-1)-f(x)(1)}{(x-1)^2}\\Rightarrow u'(2)=\\dfrac{20(1)-5}{1}=15\\).`, `\\(h(x)=u(x)^4 \\Rightarrow h'(x)=4u(x)^3u'(x) \\Rightarrow h'(2)=4(5)^3(15)=4(125)(15)=7500\\).`] }
        ]
      }
    ]
  }

  ] // end groups
};
