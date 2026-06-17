// ============================================================
// CHAPTER 1 — Limits and Continuity
// ============================================================
window.TOPICS = window.TOPICS || [];

window.TOPICS.push({
  id: 'ch1',
  num: 1,
  title: 'Limits and Continuity',
  subsections: [

  // ---------------------------------------------------------
  {
    id: '1.1',
    title: 'Limits (An Intuitive Approach)',
    coreIdea: `A limit asks what value \\(f(x)\\) gets closer and closer to as \\(x\\) gets closer and closer to some number \\(a\\) — without ever needing \\(x\\) to actually equal \\(a\\). It is the rigorous way of talking about "approaching" before calculus gives you the tools to talk about it any other way. Limits exist independently of whether \\(f(a)\\) is even defined.`,
    formulas: [
      { label: 'Two-sided limit', tex: `\\lim_{x \\to a} f(x) = L` },
      { label: 'One-sided limits', tex: `\\lim_{x \\to a^-} f(x) = L_1 \\qquad \\lim_{x \\to a^+} f(x) = L_2` },
      { label: 'Existence criterion', tex: `\\lim_{x\\to a} f(x) \\text{ exists} \\iff \\lim_{x\\to a^-}f(x) = \\lim_{x\\to a^+}f(x)` }
    ],
    example: {
      statement: `Use a table of values to estimate \\(\\displaystyle\\lim_{x\\to 2}\\frac{x^2-4}{x-2}\\).`,
      steps: [
        `Plug in values close to 2 from both sides: at \\(x=1.9,\\,1.99,\\,1.999\\) the expression gives \\(3.9,\\,3.99,\\,3.999\\); at \\(x=2.1,\\,2.01,\\,2.001\\) it gives \\(4.1,\\,4.01,\\,4.001\\).`,
        `Both sides are clearly heading toward \\(4\\), even though the function is undefined exactly at \\(x=2\\) (you'd be dividing \\(0/0\\)).`,
        `So we estimate \\(\\displaystyle\\lim_{x\\to 2}\\frac{x^2-4}{x-2} = 4\\). (Section 1.2 will show this algebraically: \\(\\frac{x^2-4}{x-2}=x+2\\) for \\(x\\neq2\\), and \\(2+2=4\\).)`
      ]
    },
    mistakes: [
      `Thinking a limit requires \\(f(a)\\) to be defined — it doesn't; the limit only cares about values *near* \\(a\\).`,
      `Confusing "the limit is 4" with "the function equals 4 at that point."`,
      `Stopping after checking values from only one side, then assuming the two-sided limit exists.`
    ],
    problems: [
      {
        id: 'p1', prompt: `Estimate \\(\\displaystyle\\lim_{x\\to 1}\\frac{x^2-1}{x-1}\\) by simplifying first.`,
        inputType: 'numeric', answer: '2', formatHint: 'Enter an exact number.',
        hints: [`Try factoring the numerator as a difference of squares.`, `\\(\\dfrac{x^2-1}{x-1}=\\dfrac{(x-1)(x+1)}{x-1}=x+1\\) for \\(x\\neq1\\).`, `Now substitute \\(x=1\\) into the simplified expression \\(x+1\\).`],
        solution: [`Factor: \\(x^2-1=(x-1)(x+1)\\).`, `Cancel the common factor (valid since \\(x\\neq1\\) as we approach, never equal): \\(\\frac{(x-1)(x+1)}{x-1}=x+1\\).`, `Take the limit of the simplified form: \\(\\lim_{x\\to1}(x+1) = 2\\).`]
      },
      {
        id: 'p2', prompt: `Given \\(f(x)=\\begin{cases}x+1 & x<0\\\\ x^2 & x\\geq0\\end{cases}\\), find \\(\\displaystyle\\lim_{x\\to 0^-}f(x)\\).`,
        inputType: 'numeric', answer: '1', formatHint: 'Enter an exact number.',
        hints: [`As \\(x\\to0^-\\), which piece of the definition applies?`, `For \\(x<0\\), \\(f(x)=x+1\\).`, `Substitute \\(x=0\\) into \\(x+1\\).`],
        solution: [`Approaching from the left means \\(x<0\\), so we use \\(f(x)=x+1\\).`, `\\(\\lim_{x\\to0^-}(x+1) = 0+1 = 1\\).`]
      },
      {
        id: 'p3', prompt: `For the same \\(f\\) as above, does \\(\\displaystyle\\lim_{x\\to 0}f(x)\\) exist? Enter the limit value, or DNE if it does not exist.`,
        inputType: 'dne_or_numeric', answer: '1', formatHint: 'Enter a number, or type DNE.',
        hints: [`You need both one-sided limits at 0.`, `From the left: \\(\\lim_{x\\to0^-}f(x)=1\\) (previous problem). From the right, use \\(f(x)=x^2\\).`, `Compare \\(\\lim_{x\\to0^-}f(x)\\) and \\(\\lim_{x\\to0^+}f(x)\\): are they equal?`],
        solution: [`Left limit: \\(\\lim_{x\\to0^-}(x+1)=1\\).`, `Right limit: \\(\\lim_{x\\to0^+}x^2 = 0\\).`, `Since \\(1\\neq0\\), the two one-sided limits disagree, so \\(\\lim_{x\\to0}f(x)\\) does not exist.`]
      }
    ]
  },

  // ---------------------------------------------------------
  {
    id: '1.2',
    title: 'Computing Limits',
    coreIdea: `Most limits you'll be asked to compute can be found with direct substitution, algebraic simplification (factoring, rationalizing, combining fractions), or a small list of standard "named" limits — most famously \\(\\lim_{\\theta\\to0}\\frac{\\sin\\theta}{\\theta}=1\\). The exam-favorite trap is a limit built from an absolute value, which forces you to split into one-sided cases because \\(|x-a|\\) means different things on either side of \\(a\\).`,
    formulas: [
      { label: 'Limit laws', tex: `\\lim(f\\pm g)=\\lim f\\pm\\lim g,\\quad \\lim(fg)=\\lim f\\cdot\\lim g,\\quad \\lim\\frac{f}{g}=\\frac{\\lim f}{\\lim g}\\ (\\lim g\\neq0)` },
      { label: 'The fundamental trig limit', tex: `\\lim_{\\theta\\to0}\\frac{\\sin\\theta}{\\theta}=1 \\qquad \\lim_{\\theta\\to0}\\frac{1-\\cos\\theta}{\\theta}=0` },
      { label: 'Absolute value, piecewise', tex: `|x-a| = \\begin{cases}x-a & x\\geq a\\\\ -(x-a) & x<a\\end{cases}` }
    ],
    example: {
      statement: `Find \\(\\displaystyle\\lim_{x\\to-2^+}f(x)\\), \\(\\displaystyle\\lim_{x\\to-2^-}f(x)\\), and \\(\\displaystyle\\lim_{x\\to-2}f(x)\\) for \\(f(x)=\\dfrac{(x+3)|x+2|}{x+2}\\).`,
      steps: [
        `As \\(x\\to-2^{+}\\), we have \\(x+2>0\\), so \\(|x+2|=x+2\\). Then \\(f(x)=\\dfrac{(x+3)(x+2)}{x+2}=x+3\\) for \\(x\\neq-2\\).`,
        `So \\(\\lim_{x\\to-2^+}f(x)=\\lim_{x\\to-2^+}(x+3) = -2+3 = 1\\).`,
        `As \\(x\\to-2^{-}\\), we have \\(x+2<0\\), so \\(|x+2|=-(x+2)\\). Then \\(f(x)=\\dfrac{(x+3)\\cdot(-(x+2))}{x+2}=-(x+3)\\).`,
        `So \\(\\lim_{x\\to-2^-}f(x)=\\lim_{x\\to-2^-}\\big(-(x+3)\\big) = -(-2+3)=-1\\).`,
        `Since the one-sided limits disagree (\\(1\\neq-1\\)), \\(\\displaystyle\\lim_{x\\to-2}f(x)\\) does not exist.`
      ]
    },
    mistakes: [
      `Treating \\(|x-a|\\) as just "\\(x-a\\)" on both sides — its sign genuinely flips depending on which side of \\(a\\) you're on.`,
      `Cancelling \\(0/0\\) without first checking that the cancelled factor is never literally zero at the limit point (it's fine since \\(x\\) only *approaches* \\(a\\), never equals it).`,
      `Forgetting that "the limit exists" requires the *two-sided* limit, i.e. both one-sided limits exist **and** agree.`,
      `Trying to apply L'Hôpital's Rule here — it's unnecessary machinery for a limit that direct algebra already resolves.`
    ],
    problems: [
      {
        id: 'p1', prompt: `Let \\(f(x)=\\dfrac{\\sqrt{2x}\\,(x-1)}{|x-1|}\\). Find \\(\\displaystyle\\lim_{x\\to1^+}f(x)\\).`,
        inputType: 'expr_const', answer: 'sqrt(2)', formatHint: 'Enter the exact value, e.g. sqrt(2).',
        hints: [`For \\(x\\to1^+\\), is \\(x-1\\) positive or negative? That tells you how to write \\(|x-1|\\).`, `For \\(x>1\\), \\(|x-1|=x-1\\), so the \\((x-1)\\) factors cancel, leaving \\(f(x)=\\sqrt{2x}\\).`, `Now just substitute \\(x=1\\) into \\(\\sqrt{2x}\\).`],
        solution: [`For \\(x\\to1^+\\), \\(x>1\\) so \\(x-1>0\\), meaning \\(|x-1|=x-1\\).`, `Then \\(f(x)=\\dfrac{\\sqrt{2x}(x-1)}{x-1}=\\sqrt{2x}\\) (valid since \\(x\\neq1\\) as we approach).`, `\\(\\lim_{x\\to1^+}\\sqrt{2x}=\\sqrt{2}\\).`]
      },
      {
        id: 'p2', prompt: `Same \\(f(x)=\\dfrac{\\sqrt{2x}\\,(x-1)}{|x-1|}\\). Find \\(\\displaystyle\\lim_{x\\to1^-}f(x)\\).`,
        inputType: 'expr_const', answer: '-sqrt(2)', formatHint: 'Enter the exact value (it will be negative).',
        hints: [`For \\(x\\to1^-\\), \\(x-1\\) is negative, so \\(|x-1|=-(x-1)\\).`, `That makes \\(f(x)=-\\sqrt{2x}\\) for \\(x<1\\).`, `Substitute \\(x=1\\) into \\(-\\sqrt{2x}\\).`],
        solution: [`For \\(x\\to1^-\\), \\(x<1\\) so \\(x-1<0\\), meaning \\(|x-1|=-(x-1)\\).`, `Then \\(f(x)=\\dfrac{\\sqrt{2x}(x-1)}{-(x-1)}=-\\sqrt{2x}\\).`, `\\(\\lim_{x\\to1^-}\\big(-\\sqrt{2x}\\big)=-\\sqrt{2}\\).`]
      },
      {
        id: 'p3', prompt: `Still with \\(f(x)=\\dfrac{\\sqrt{2x}\\,(x-1)}{|x-1|}\\), does \\(\\displaystyle\\lim_{x\\to1}f(x)\\) exist? Enter the value, or DNE.`,
        inputType: 'dne_or_numeric', answer: 'DNE', formatHint: 'Enter a number, or type DNE.',
        hints: [`Compare your two previous answers.`, `\\(\\sqrt2 \\neq -\\sqrt2\\) — what does that tell you about the two-sided limit?`, `When the left and right limits disagree, the two-sided limit...`],
        solution: [`From the previous two parts, \\(\\lim_{x\\to1^+}f(x)=\\sqrt2\\) and \\(\\lim_{x\\to1^-}f(x)=-\\sqrt2\\).`, `Since \\(\\sqrt2\\neq-\\sqrt2\\), the one-sided limits do not agree.`, `Therefore \\(\\lim_{x\\to1}f(x)\\) does not exist (DNE).`]
      },
      {
        id: 'p4', prompt: `Evaluate \\(\\displaystyle\\lim_{t\\to0}\\frac{\\sin(1-\\cos t)}{1-\\cos t}\\).`,
        inputType: 'numeric', answer: '1', formatHint: 'Enter an exact number.',
        hints: [`Let \\(u = 1-\\cos t\\). What happens to \\(u\\) as \\(t\\to0\\)?`, `As \\(t\\to0\\), \\(\\cos t\\to1\\), so \\(u=1-\\cos t\\to0\\). Rewrite the limit in terms of \\(u\\).`, `You now have \\(\\lim_{u\\to0}\\dfrac{\\sin u}{u}\\) — a named limit.`],
        solution: [`Substitute \\(u=1-\\cos t\\). As \\(t\\to0\\), \\(\\cos t\\to1\\) so \\(u\\to0\\).`, `The expression becomes \\(\\dfrac{\\sin u}{u}\\).`, `By the fundamental trig limit, \\(\\lim_{u\\to0}\\dfrac{\\sin u}{u}=1\\). So the original limit equals \\(1\\).`]
      },
      {
        id: 'p5', prompt: `Evaluate \\(\\displaystyle\\lim_{h\\to0}\\frac{\\sin(\\sin h)}{\\sin h}\\).`,
        inputType: 'numeric', answer: '1', formatHint: 'Enter an exact number.',
        hints: [`Let \\(u=\\sin h\\). What does \\(u\\) approach as \\(h\\to0\\)?`, `Since \\(\\sin h\\) is continuous and \\(\\sin0=0\\), \\(u\\to0\\) as \\(h\\to0\\). Rewrite in terms of \\(u\\).`, `You now have \\(\\lim_{u\\to0}\\dfrac{\\sin u}{u}\\).`],
        solution: [`Let \\(u=\\sin h\\). Since \\(\\sin\\) is continuous, as \\(h\\to0\\) we get \\(u\\to\\sin0=0\\).`, `The limit becomes \\(\\lim_{u\\to0}\\dfrac{\\sin u}{u}\\).`, `By the squeeze theorem (the fundamental trig limit), this equals \\(1\\).`]
      }
    ]
  },

  // ---------------------------------------------------------
  {
    id: '1.3',
    title: 'Limits at Infinity; End Behavior of a Function',
    coreIdea: `These limits describe what happens to \\(f(x)\\) as \\(x\\) grows without bound in either direction — the "end behavior" of a graph. For rational functions, the trick is almost always the same: divide every term by the highest power of \\(x\\) appearing in the denominator, since lower-order terms become negligible compared to the dominant one.`,
    formulas: [
      { label: 'Power decay', tex: `\\lim_{x\\to\\pm\\infty}\\frac{c}{x^n}=0 \\quad (n>0)` },
      { label: 'Rational function end behavior', tex: `\\lim_{x\\to\\infty}\\frac{a_nx^n+\\cdots}{b_mx^m+\\cdots} = \\begin{cases}0 & n<m\\\\ a_n/b_m & n=m\\\\ \\pm\\infty & n>m\\end{cases}` },
      { label: 'Horizontal asymptote', tex: `\\lim_{x\\to\\infty}f(x)=L \\implies y=L \\text{ is a horizontal asymptote}` }
    ],
    example: {
      statement: `Evaluate \\(\\displaystyle\\lim_{x\\to\\infty}\\frac{3x^2-5x+1}{2x^2+7}\\).`,
      steps: [
        `The numerator and denominator both have degree 2 (highest power \\(x^2\\)). Divide every term by \\(x^2\\).`,
        `\\(\\dfrac{3x^2-5x+1}{2x^2+7}=\\dfrac{3-\\frac{5}{x}+\\frac{1}{x^2}}{2+\\frac{7}{x^2}}\\).`,
        `As \\(x\\to\\infty\\), every term with \\(x\\) in the denominator vanishes: \\(\\frac{5}{x}\\to0\\), \\(\\frac{1}{x^2}\\to0\\), \\(\\frac{7}{x^2}\\to0\\).`,
        `So the limit is \\(\\dfrac{3-0+0}{2+0}=\\dfrac{3}{2}\\), the ratio of leading coefficients.`
      ]
    },
    mistakes: [
      `Plugging in "\\(\\infty\\)" as if it were a number and doing arithmetic with it (e.g. writing \\(\\infty-\\infty=0\\)).`,
      `Forgetting to compare *degrees* before comparing coefficients — the ratio-of-leading-coefficients shortcut only applies when degrees match.`,
      `Mixing up \\(x\\to\\infty\\) and \\(x\\to-\\infty\\) for odd powers or for \\(\\sqrt{x^2}=|x|\\), which behaves differently in each direction.`
    ],
    problems: [
      { id: 'p1', prompt: `Evaluate \\(\\displaystyle\\lim_{x\\to\\infty}\\frac{4x^3+x}{2x^3-x^2+5}\\).`,
        inputType: 'numeric', answer: '2', formatHint: 'Enter an exact number.',
        hints: [`The numerator and denominator are both degree 3 — compare them directly.`, `Divide every term by \\(x^3\\): all the lower-order terms vanish as \\(x\\to\\infty\\).`, `You're left with the ratio of the leading coefficients, \\(4\\) and \\(2\\).`],
        solution: [`Highest power present in both numerator and denominator is \\(x^3\\), so divide through by \\(x^3\\).`, `\\(\\dfrac{4+1/x^2}{2-1/x+5/x^3}\\to\\dfrac{4+0}{2-0+0}=2\\) as \\(x\\to\\infty\\).`]
      },
      { id: 'p2', prompt: `Evaluate \\(\\displaystyle\\lim_{x\\to\\infty}\\frac{x+2}{x^2-1}\\).`,
        inputType: 'numeric', answer: '0', formatHint: 'Enter an exact number.',
        hints: [`Compare the degree of the numerator (1) to the degree of the denominator (2).`, `When the denominator's degree is larger, the fraction shrinks toward...`, `Divide by \\(x^2\\) to see every term vanish.`],
        solution: [`Numerator has degree 1, denominator has degree 2 — the denominator dominates.`, `Dividing by \\(x^2\\): \\(\\dfrac{1/x+2/x^2}{1-1/x^2}\\to\\dfrac{0+0}{1-0}=0\\).`]
      },
      { id: 'p3', prompt: `Evaluate \\(\\displaystyle\\lim_{x\\to-\\infty}\\frac{5-2x^3}{x^3+4}\\).`,
        inputType: 'numeric', answer: '-2', formatHint: 'Enter an exact number.',
        hints: [`Both numerator and denominator have degree 3, so the direction (\\(+\\infty\\) or \\(-\\infty\\)) doesn't matter for this shortcut.`, `Divide every term by \\(x^3\\).`, `Take the ratio of the leading coefficients: \\(-2\\) and \\(1\\).`],
        solution: [`Degrees match (both 3), so as \\(x\\to-\\infty\\) the limit is still the ratio of leading coefficients.`, `\\(\\dfrac{-2x^3+5}{x^3+4}\\to\\dfrac{-2}{1}=-2\\).`]
      }
    ]
  },

  // ---------------------------------------------------------
  {
    id: '1.4',
    title: 'Limits (Discussed More Rigorously)',
    coreIdea: `The intuitive "gets closer to" idea is made precise with the \\(\\varepsilon\\text{-}\\delta\\) definition: no matter how small a tolerance \\(\\varepsilon\\) you demand around \\(L\\), there's always a window of radius \\(\\delta\\) around \\(a\\) (excluding \\(a\\) itself) that keeps \\(f(x)\\) inside that tolerance. You won't usually need to produce a \\(\\delta\\) on demand in a midterm setting, but you should be able to read and interpret the definition, and connect it back to the graphical picture.`,
    formulas: [
      { label: 'Formal definition', tex: `\\lim_{x\\to a}f(x)=L \\iff \\forall \\varepsilon>0\\ \\exists\\,\\delta>0 : 0<|x-a|<\\delta \\implies |f(x)-L|<\\varepsilon` },
      { label: 'Reading it', tex: `\\text{"as close as you like" } (\\varepsilon) \\ \\longleftarrow\\ \\text{"close enough" } (\\delta)` }
    ],
    example: {
      statement: `Use the \\(\\varepsilon\\text{-}\\delta\\) definition to show \\(\\displaystyle\\lim_{x\\to3}(2x-1)=5\\).`,
      steps: [
        `We need: for every \\(\\varepsilon>0\\), find \\(\\delta>0\\) such that \\(0<|x-3|<\\delta \\implies |(2x-1)-5|<\\varepsilon\\).`,
        `Simplify the target inequality: \\(|(2x-1)-5| = |2x-6| = 2|x-3|\\).`,
        `We want \\(2|x-3|<\\varepsilon\\), i.e. \\(|x-3|<\\varepsilon/2\\). So choose \\(\\delta = \\varepsilon/2\\).`,
        `Check: if \\(0<|x-3|<\\delta=\\varepsilon/2\\), then \\(|(2x-1)-5|=2|x-3|<2\\cdot(\\varepsilon/2)=\\varepsilon\\). This confirms the limit.`
      ]
    },
    mistakes: [
      `Picking \\(\\delta\\) before working backward from \\(\\varepsilon\\) — always manipulate \\(|f(x)-L|<\\varepsilon\\) first to see what bound on \\(|x-a|\\) it forces.`,
      `Forgetting the "\\(0<|x-a|\\)" part, which is what excludes \\(x=a\\) itself from the requirement.`,
      `Treating \\(\\delta\\) as a single magic constant rather than something that's allowed to depend on \\(\\varepsilon\\).`
    ],
    problems: [
      { id: 'p1', prompt: `Using the \\(\\varepsilon\\text{-}\\delta\\) definition for \\(\\lim_{x\\to2}(3x+1)=7\\), simplify \\(|(3x+1)-7|\\) in terms of \\(|x-2|\\). Enter the coefficient multiplying \\(|x-2|\\).`,
        inputType: 'numeric', answer: '3', formatHint: 'Enter an exact number.',
        hints: [`Compute \\((3x+1)-7\\) first.`, `\\((3x+1)-7 = 3x-6\\). Factor out the constant.`, `\\(3x-6=3(x-2)\\), so \\(|3x-6|=3|x-2|\\).`],
        solution: [`\\((3x+1)-7=3x-6=3(x-2)\\).`, `So \\(|(3x+1)-7|=3|x-2|\\) — the coefficient is \\(3\\).`]
      },
      { id: 'p2', prompt: `For the same limit \\(\\lim_{x\\to2}(3x+1)=7\\), if you want \\(|(3x+1)-7|<\\varepsilon\\), what choice of \\(\\delta\\) (in terms of \\(\\varepsilon\\)) works? Enter as an expression in epsilon, e.g. epsilon/3.`,
        inputType: 'expr', variables: ['epsilon'], answer: 'epsilon/3', formatHint: 'Enter an expression using "epsilon", e.g. epsilon/3.',
        hints: [`You found \\(|(3x+1)-7|=3|x-2|\\). You need \\(3|x-2|<\\varepsilon\\).`, `Divide both sides by 3 to isolate \\(|x-2|\\).`, `Whatever bounds \\(|x-2|\\) is your \\(\\delta\\).`],
        solution: [`We need \\(3|x-2|<\\varepsilon \\iff |x-2|<\\varepsilon/3\\).`, `So \\(\\delta=\\varepsilon/3\\) guarantees the implication holds.`]
      },
      { id: 'p3', prompt: `True or False (enter true or false): The \\(\\varepsilon\\text{-}\\delta\\) definition requires that \\(f(a)\\) be defined and equal to \\(L\\).`,
        inputType: 'text', answer: ['false', 'f'], formatHint: 'Enter true or false.',
        hints: [`Look closely at the condition "\\(0<|x-a|\\)" in the definition.`, `That strict inequality \\(0<|x-a|\\) explicitly excludes \\(x=a\\).`, `So the definition never even looks at \\(f(a)\\) — only at nearby values.`],
        solution: [`The condition is \\(0<|x-a|<\\delta\\), which explicitly excludes \\(x=a\\).`, `So the definition never requires \\(f(a)\\) to be defined at all — the statement is False.`]
      }
    ]
  },

  // ---------------------------------------------------------
  {
    id: '1.5',
    title: 'Continuity',
    coreIdea: `A function is continuous at \\(a\\) when its graph has no break there — formally, when the limit as \\(x\\to a\\) matches the actual function value \\(f(a)\\). When a function fails this only because of a missing or wrong single point (a "hole"), that's a removable discontinuity, and you can patch it by defining (or redefining) the function's value at that one point to equal the limit.`,
    formulas: [
      { label: 'Definition of continuity at a', tex: `f \\text{ continuous at } a \\iff \\lim_{x\\to a}f(x) = f(a)` },
      { label: 'Three conditions', tex: `\\text{(1) } f(a) \\text{ defined} \\quad \\text{(2) } \\lim_{x\\to a}f(x) \\text{ exists} \\quad \\text{(3) the two are equal}` },
      { label: 'Removable discontinuity patch', tex: `\\text{define } f(a) := \\lim_{x\\to a}f(x)` }
    ],
    example: {
      statement: `Define \\(h(2)\\) so that \\(h(t)=\\dfrac{t^2+3t-10}{t-2}\\) becomes continuous at \\(t=2\\).`,
      steps: [
        `\\(h\\) is currently undefined at \\(t=2\\) (denominator is zero there), so we first check whether the limit exists by factoring.`,
        `Factor the numerator: \\(t^2+3t-10=(t+5)(t-2)\\).`,
        `For \\(t\\neq2\\): \\(h(t)=\\dfrac{(t+5)(t-2)}{t-2}=t+5\\).`,
        `So \\(\\lim_{t\\to2}h(t)=\\lim_{t\\to2}(t+5)=7\\).`,
        `To make \\(h\\) continuous at \\(t=2\\), define \\(h(2):=7\\) — this matches condition (3), \\(\\lim_{t\\to2}h(t)=h(2)\\).`
      ]
    },
    mistakes: [
      `Trying to evaluate the original formula directly at the hole, which just gives the unhelpful \\(0/0\\).`,
      `Forgetting to fully factor before cancelling — a partially factored expression can hide the cancellation you need.`,
      `Confusing a removable discontinuity (a hole, fixable by redefining one point) with a jump or infinite discontinuity (not fixable this way).`
    ],
    problems: [
      { id: 'p1', prompt: `Define \\(g(3)\\) so that \\(g(x)=\\dfrac{x^2-9}{x-3}\\) is continuous at \\(x=3\\).`,
        inputType: 'numeric', answer: '6', formatHint: 'Enter an exact number.',
        hints: [`Factor the numerator as a difference of squares.`, `\\(x^2-9=(x-3)(x+3)\\), so for \\(x\\neq3\\), \\(g(x)=x+3\\).`, `Find \\(\\lim_{x\\to3}(x+3)\\) and set \\(g(3)\\) equal to it.`],
        solution: [`Factor: \\(x^2-9=(x-3)(x+3)\\).`, `For \\(x\\neq3\\), \\(g(x)=\\dfrac{(x-3)(x+3)}{x-3}=x+3\\), so \\(\\lim_{x\\to3}g(x)=3+3=6\\).`, `Define \\(g(3)=6\\) to make \\(g\\) continuous at \\(x=3\\).`]
      },
      { id: 'p2', prompt: `Define \\(k(-1)\\) so that \\(k(x)=\\dfrac{x^2-1}{x+1}\\) is continuous at \\(x=-1\\).`,
        inputType: 'numeric', answer: '-2', formatHint: 'Enter an exact number.',
        hints: [`Factor \\(x^2-1\\) as a difference of squares.`, `\\(x^2-1=(x-1)(x+1)\\); cancel the common factor with the denominator.`, `Evaluate the simplified expression \\(x-1\\) at \\(x=-1\\).`],
        solution: [`\\(x^2-1=(x-1)(x+1)\\), so for \\(x\\neq-1\\), \\(k(x)=x-1\\).`, `\\(\\lim_{x\\to-1}(x-1)=-1-1=-2\\).`, `Define \\(k(-1)=-2\\).`]
      },
      { id: 'p3', prompt: `Find all \\(x\\)-values where \\(f(x)=\\dfrac{x+4}{x^2-16}\\) is discontinuous. Enter the values separated by a comma.`,
        inputType: 'set', answer: ['4', '-4'], formatHint: 'Enter values separated by a comma, e.g. 4, -4.',
        hints: [`A rational function is discontinuous wherever its denominator is zero.`, `Factor \\(x^2-16\\) as a difference of squares.`, `Set each factor of \\(x^2-16=(x-4)(x+4)\\) to zero.`],
        solution: [`The function is undefined wherever \\(x^2-16=0\\), i.e. \\((x-4)(x+4)=0\\).`, `That gives \\(x=4\\) and \\(x=-4\\).`, `(Note: \\(x=-4\\) is removable since \\(x+4\\) also appears in the numerator, but it's still a point of discontinuity for the original \\(f\\).)`]
      },
      { id: 'p4', prompt: `For \\(f(x)=\\dfrac{(x+3)|x+2|}{x+2}\\), is there a value you could assign to \\(f(-2)\\) that would make \\(f\\) continuous at \\(x=-2\\)? Enter yes or no.`,
        inputType: 'text', answer: ['no', 'n'], formatHint: 'Enter yes or no.',
        hints: [`Continuity at a point requires the *two-sided* limit to exist there.`, `Recall from section 1.2: the one-sided limits of this function at \\(x=-2\\) are \\(1\\) and \\(-1\\).`, `If the two one-sided limits disagree, no single value of \\(f(-2)\\) can fix it.`],
        solution: [`From section 1.2, \\(\\lim_{x\\to-2^+}f(x)=1\\) and \\(\\lim_{x\\to-2^-}f(x)=-1\\).`, `Since these disagree, \\(\\lim_{x\\to-2}f(x)\\) does not exist — this is a jump discontinuity, not removable.`, `No single value of \\(f(-2)\\) can make \\(f\\) continuous there. Answer: no.`]
      },
      { id: 'p5', prompt: `Define \\(p(5)\\) so that \\(p(x)=\\dfrac{x^2-3x-10}{x-5}\\) is continuous at \\(x=5\\).`,
        inputType: 'numeric', answer: '7', formatHint: 'Enter an exact number.',
        hints: [`Factor \\(x^2-3x-10\\) — look for two numbers that multiply to \\(-10\\) and add to \\(-3\\).`, `Those numbers are \\(-5\\) and \\(2\\): \\(x^2-3x-10=(x-5)(x+2)\\).`, `Cancel and evaluate the simplified expression at \\(x=5\\).`],
        solution: [`\\(x^2-3x-10=(x-5)(x+2)\\), so for \\(x\\neq5\\), \\(p(x)=x+2\\).`, `\\(\\lim_{x\\to5}(x+2)=7\\).`, `Define \\(p(5)=7\\).`]
      }
    ]
  },

  // ---------------------------------------------------------
  {
    id: '1.6',
    title: 'Continuity of Trigonometric, Exponential, and Inverse Functions',
    coreIdea: `Trig functions, exponentials, logarithms, and inverse trig functions are all continuous on their natural domains — you don't need to re-derive this every time, you can use it as a standing fact. The only places these functions can fail to be continuous are points genuinely excluded from their domain (like \\(\\tan x\\) at odd multiples of \\(\\pi/2\\), or \\(\\ln x\\) at \\(x\\leq0\\)).`,
    formulas: [
      { label: 'Trig continuity', tex: `\\sin x,\\ \\cos x \\text{ continuous on } (-\\infty,\\infty); \\quad \\tan x \\text{ continuous except at } x=\\tfrac{\\pi}{2}+k\\pi` },
      { label: 'Exponential/log continuity', tex: `a^x \\text{ continuous on } (-\\infty,\\infty), \\ a>0; \\qquad \\log_a x \\text{ continuous on } (0,\\infty)` },
      { label: 'Composition preserves continuity', tex: `g \\text{ cont. at } a,\\ f \\text{ cont. at } g(a) \\implies f(g(x)) \\text{ cont. at } a` }
    ],
    example: {
      statement: `Where is \\(f(x)=\\ln(\\sin x)\\) continuous?`,
      steps: [
        `\\(f\\) is a composition: outer function \\(\\ln(u)\\) is continuous for \\(u>0\\); inner function \\(u=\\sin x\\) is continuous everywhere.`,
        `By the composition rule, \\(f\\) is continuous wherever the *composite* is defined, i.e. wherever \\(\\sin x>0\\) (we need the input to \\(\\ln\\) to be positive, not just defined).`,
        `\\(\\sin x>0\\) on intervals like \\((0,\\pi)\\), \\((2\\pi,3\\pi)\\), etc. — i.e. \\(x\\in(2k\\pi,\\ (2k+1)\\pi)\\) for integers \\(k\\).`,
        `So \\(f\\) is continuous on the union of those open intervals, and undefined (hence not continuous) everywhere else.`
      ]
    },
    mistakes: [
      `Assuming a composition of continuous functions is continuous on the *whole* domain of the inner function, ignoring the domain restriction the outer function imposes.`,
      `Forgetting that \\(\\tan x\\), \\(\\sec x\\), \\(\\csc x\\), and \\(\\cot x\\) have infinitely many discontinuities, not just one.`,
      `Assuming \\(\\log_a x\\) is continuous at \\(x=0\\) just because it's "close" to the rest of the domain — \\(x=0\\) is not in the domain at all.`
    ],
    problems: [
      { id: 'p1', prompt: `At which of these is \\(\\tan x\\) discontinuous: enter the smallest positive value.`,
        inputType: 'expr_const', answer: 'pi/2', formatHint: 'Enter exact value, e.g. pi/2.',
        hints: [`\\(\\tan x = \\sin x/\\cos x\\) is undefined wherever \\(\\cos x=0\\).`, `Where is the smallest positive zero of \\(\\cos x\\)?`, `\\(\\cos(\\pi/2)=0\\).`],
        solution: [`\\(\\tan x=\\sin x/\\cos x\\) fails to exist wherever \\(\\cos x=0\\), i.e. at \\(x=\\pi/2+k\\pi\\).`, `The smallest positive such value is \\(x=\\pi/2\\).`]
      },
      { id: 'p2', prompt: `What is the domain restriction (in interval notation, just the relevant inequality) needed for \\(f(x)=\\ln(x-3)\\) to be continuous? Enter as x>3 or x<3.`,
        inputType: 'text', answer: ['x>3'], formatHint: 'Enter in the form x>3.',
        hints: [`\\(\\ln(u)\\) requires \\(u>0\\).`, `Here \\(u=x-3\\), so you need \\(x-3>0\\).`, `Solve for x.`],
        solution: [`\\(\\ln(u)\\) is only defined (and continuous) for \\(u>0\\).`, `With \\(u=x-3\\), we need \\(x-3>0 \\iff x>3\\).`]
      },
      { id: 'p3', prompt: `True or false: \\(e^x\\) is continuous for every real number \\(x\\).`,
        inputType: 'text', answer: ['true', 't'], formatHint: 'Enter true or false.',
        hints: [`Exponential functions \\(a^x\\) with \\(a>0\\) have domain all of \\(\\mathbb{R}\\).`, `There's no value of \\(x\\) that makes \\(e^x\\) undefined.`, `So is it continuous everywhere?`],
        solution: [`\\(e^x\\) is defined and continuous for every real \\(x\\) — there is no domain restriction.`, `The statement is True.`]
      }
    ]
  }

  ] // end subsections
});
