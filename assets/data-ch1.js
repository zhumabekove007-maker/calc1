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
        id: 'p1', prompt: `Estimate \\(\\displaystyle\\lim_{x\\to 2}\\frac{2x^2-3x-2}{x-2}\\) by simplifying first.`,
        inputType: 'numeric', answer: '5', formatHint: 'Enter an exact number.',
        hints: [`Factor the numerator — look for a factorization of the form \\((2x+\\square)(x+\\square)\\).`, `\\(2x^2-3x-2=(2x+1)(x-2)\\).`, `Cancel the common factor and substitute \\(x=2\\) into what remains.`],
        solution: [`Factor: \\(2x^2-3x-2=(2x+1)(x-2)\\) (check: the middle term is \\(2x(-2)+1(x)=-4x+x=-3x\\), which matches).`, `Cancel the common factor \\(x-2\\) (valid since \\(x\\neq2\\) as we approach): \\(\\dfrac{(2x+1)(x-2)}{x-2}=2x+1\\).`, `\\(\\lim_{x\\to2}(2x+1)=2(2)+1=5\\).`]
      },
      {
        id: 'p2', prompt: `Given \\(f(x)=\\begin{cases}x^2-1 & x<-1\\\\ 2x+1 & -1\\leq x<2\\\\ x^2-3 & x\\geq2\\end{cases}\\), find \\(\\displaystyle\\lim_{x\\to -1^-}f(x)\\).`,
        inputType: 'numeric', answer: '0', formatHint: 'Enter an exact number.',
        hints: [`As \\(x\\to-1^-\\), you're approaching from values *less* than \\(-1\\) — which piece applies there?`, `For \\(x<-1\\), \\(f(x)=x^2-1\\).`, `Substitute \\(x=-1\\) into \\(x^2-1\\).`],
        solution: [`Approaching from the left of \\(-1\\) means \\(x<-1\\), so we use \\(f(x)=x^2-1\\).`, `\\(\\lim_{x\\to-1^-}(x^2-1) = (-1)^2-1 = 0\\).`]
      },
      {
        id: 'p3', prompt: `For the same \\(f\\) as above, find \\(\\displaystyle\\lim_{x\\to -1^+}f(x)\\).`,
        inputType: 'numeric', answer: '-1', formatHint: 'Enter an exact number.',
        hints: [`As \\(x\\to-1^+\\), you're approaching from values just *greater* than \\(-1\\) — that falls in the middle piece's range.`, `For \\(-1\\leq x<2\\), \\(f(x)=2x+1\\).`, `Substitute \\(x=-1\\) into \\(2x+1\\).`],
        solution: [`Approaching from the right of \\(-1\\) lands in the range \\(-1\\leq x<2\\), so \\(f(x)=2x+1\\) applies.`, `\\(\\lim_{x\\to-1^+}(2x+1) = 2(-1)+1 = -1\\).`]
      },
      {
        id: 'p4', prompt: `Still with the same \\(f\\), does \\(\\displaystyle\\lim_{x\\to -1}f(x)\\) exist? Enter the value, or DNE.`,
        inputType: 'dne_or_numeric', answer: 'DNE', formatHint: 'Enter a number, or type DNE.',
        hints: [`Compare your two previous answers.`, `\\(\\lim_{x\\to-1^-}f(x)=0\\) and \\(\\lim_{x\\to-1^+}f(x)=-1\\) — are these equal?`, `When the one-sided limits disagree, the two-sided limit...`],
        solution: [`From the previous two parts, \\(\\lim_{x\\to-1^-}f(x)=0\\) and \\(\\lim_{x\\to-1^+}f(x)=-1\\).`, `Since \\(0\\neq-1\\), the one-sided limits disagree.`, `Therefore \\(\\lim_{x\\to-1}f(x)\\) does not exist (DNE).`]
      },
      {
        id: 'p5', prompt: `Still with the same \\(f\\), does \\(\\displaystyle\\lim_{x\\to 2}f(x)\\) exist? Enter the value, or DNE.`,
        inputType: 'dne_or_numeric', answer: 'DNE', formatHint: 'Enter a number, or type DNE.',
        hints: [`You need both one-sided limits at \\(x=2\\). From the left, \\(x<2\\) falls in the middle piece, \\(2x+1\\). From the right, \\(x\\geq2\\) uses \\(x^2-3\\).`, `\\(\\lim_{x\\to2^-}(2x+1)=5\\) and \\(\\lim_{x\\to2^+}(x^2-3)=1\\).`, `Are these two one-sided limits equal?`],
        solution: [`Left limit (using \\(2x+1\\), valid for \\(x<2\\)): \\(\\lim_{x\\to2^-}(2x+1)=2(2)+1=5\\).`, `Right limit (using \\(x^2-3\\), valid for \\(x\\geq2\\)): \\(\\lim_{x\\to2^+}(x^2-3)=4-3=1\\).`, `Since \\(5\\neq1\\), the two one-sided limits disagree, so \\(\\lim_{x\\to2}f(x)\\) does not exist (DNE).`]
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
      },
      {
        id: 'p6', prompt: `Let \\(f(x)=\\dfrac{\\sqrt{x}-2}{|x-4|}\\). Find \\(\\displaystyle\\lim_{x\\to4^+}f(x)\\). (Hint: rationalize the numerator first.)`,
        inputType: 'expr_const', answer: '1/4', formatHint: 'Enter the exact value, e.g. 1/4.',
        hints: [`For \\(x\\to4^+\\), \\(x>4\\) so \\(|x-4|=x-4\\). Multiply numerator and denominator by the conjugate \\(\\sqrt x+2\\) to clear the \\(0/0\\).`, `\\((\\sqrt x-2)(\\sqrt x+2)=x-4\\), so \\(\\dfrac{\\sqrt x-2}{x-4}=\\dfrac{1}{\\sqrt x+2}\\) after cancelling.`, `Now substitute \\(x=4\\) into \\(\\dfrac{1}{\\sqrt x+2}\\).`],
        solution: [`For \\(x\\to4^+\\), \\(x>4\\) so \\(|x-4|=x-4\\), giving \\(f(x)=\\dfrac{\\sqrt x-2}{x-4}\\).`, `Rationalize: \\(\\dfrac{\\sqrt x-2}{x-4}\\cdot\\dfrac{\\sqrt x+2}{\\sqrt x+2}=\\dfrac{x-4}{(x-4)(\\sqrt x+2)}=\\dfrac{1}{\\sqrt x+2}\\) (valid since \\(x\\neq4\\)).`, `\\(\\lim_{x\\to4^+}\\dfrac{1}{\\sqrt x+2}=\\dfrac{1}{2+2}=\\dfrac14\\).`]
      },
      {
        id: 'p7', prompt: `Same \\(f(x)=\\dfrac{\\sqrt{x}-2}{|x-4|}\\). Find \\(\\displaystyle\\lim_{x\\to4^-}f(x)\\).`,
        inputType: 'expr_const', answer: '-1/4', formatHint: 'Enter the exact value (it will be negative).',
        hints: [`For \\(x\\to4^-\\), \\(x<4\\) so \\(|x-4|=-(x-4)=4-x\\).`, `That makes \\(f(x)=\\dfrac{\\sqrt x-2}{-(x-4)}=-\\dfrac{1}{\\sqrt x+2}\\) after the same rationalizing step as before.`, `Substitute \\(x=4\\) into \\(-\\dfrac{1}{\\sqrt x+2}\\).`],
        solution: [`For \\(x\\to4^-\\), \\(x<4\\) so \\(|x-4|=4-x=-(x-4)\\), giving \\(f(x)=\\dfrac{\\sqrt x-2}{-(x-4)}\\).`, `Using the same rationalization as before, \\(\\dfrac{\\sqrt x-2}{x-4}=\\dfrac{1}{\\sqrt x+2}\\), so \\(f(x)=-\\dfrac{1}{\\sqrt x+2}\\) here.`, `\\(\\lim_{x\\to4^-}\\left(-\\dfrac{1}{\\sqrt x+2}\\right)=-\\dfrac14\\).`]
      },
      {
        id: 'p8', prompt: `Still with \\(f(x)=\\dfrac{\\sqrt{x}-2}{|x-4|}\\), does \\(\\displaystyle\\lim_{x\\to4}f(x)\\) exist? Enter the value, or DNE.`,
        inputType: 'dne_or_numeric', answer: 'DNE', formatHint: 'Enter a number, or type DNE.',
        hints: [`Compare your two previous answers.`, `\\(\\frac14\\neq-\\frac14\\) — what does that tell you about the two-sided limit?`, `When the left and right limits disagree, the two-sided limit...`],
        solution: [`From the previous two parts, \\(\\lim_{x\\to4^+}f(x)=\\frac14\\) and \\(\\lim_{x\\to4^-}f(x)=-\\frac14\\).`, `Since \\(\\frac14\\neq-\\frac14\\), the one-sided limits do not agree.`, `Therefore \\(\\lim_{x\\to4}f(x)\\) does not exist (DNE).`]
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
      },
      { id: 'p4', prompt: `Evaluate \\(\\displaystyle\\lim_{x\\to\\infty}\\frac{\\sqrt{4x^2+3}}{x+1}\\).`,
        inputType: 'numeric', answer: '2', formatHint: 'Enter an exact number.',
        hints: [`Inside the square root, the dominant term is \\(4x^2\\), so \\(\\sqrt{4x^2+3}\\) behaves like \\(\\sqrt{4x^2}=2|x|\\). Since \\(x\\to+\\infty\\), \\(x>0\\) so \\(|x|=x\\).`, `Divide numerator and denominator by \\(x\\) — but to push the \\(x\\) *inside* the square root, you actually need to divide by \\(x=\\sqrt{x^2}\\): \\(\\dfrac{\\sqrt{4x^2+3}}{x}=\\sqrt{\\dfrac{4x^2+3}{x^2}}=\\sqrt{4+\\frac{3}{x^2}}\\) (valid since \\(x>0\\)).`, `So the limit becomes \\(\\dfrac{\\sqrt{4+3/x^2}}{1+1/x}\\) — let \\(x\\to\\infty\\).`],
        solution: [`For \\(x>0\\), write \\(x=\\sqrt{x^2}\\) so that we can divide what's under the root: \\(\\dfrac{\\sqrt{4x^2+3}}{x+1} = \\dfrac{\\sqrt{4x^2+3}/x}{(x+1)/x} = \\dfrac{\\sqrt{(4x^2+3)/x^2}}{1+1/x} = \\dfrac{\\sqrt{4+3/x^2}}{1+1/x}\\).`, `As \\(x\\to\\infty\\), \\(3/x^2\\to0\\) and \\(1/x\\to0\\), so this approaches \\(\\dfrac{\\sqrt4}{1}=\\dfrac21=2\\).`]
      },
      { id: 'p5', prompt: `Evaluate \\(\\displaystyle\\lim_{x\\to-\\infty}\\frac{\\sqrt{4x^2+3}}{x+1}\\). (Careful — the sign flips compared to the previous problem!)`,
        inputType: 'numeric', answer: '-2', formatHint: 'Enter an exact number.',
        hints: [`Now \\(x\\to-\\infty\\), so \\(x<0\\) and \\(|x|=-x\\). When you divide what's under the root by \\(x^2\\), you must divide the *outside* by \\(|x|=-x\\), not by \\(x\\) directly.`, `\\(\\dfrac{\\sqrt{4x^2+3}}{x+1} = \\dfrac{\\sqrt{4x^2+3}/|x|}{(x+1)/|x|} = \\dfrac{\\sqrt{4+3/x^2}}{(x+1)/(-x)}\\).`, `Simplify the denominator: \\(\\dfrac{x+1}{-x} = -1-\\dfrac1x\\), and let \\(x\\to-\\infty\\).`],
        solution: [`For \\(x<0\\), \\(|x|=-x\\). Dividing numerator and denominator by \\(|x|=-x\\): \\(\\dfrac{\\sqrt{4x^2+3}}{x+1} = \\dfrac{\\sqrt{4x^2+3}/(-x)}{(x+1)/(-x)} = \\dfrac{\\sqrt{(4x^2+3)/x^2}}{-1-1/x} = \\dfrac{\\sqrt{4+3/x^2}}{-1-1/x}\\).`, `As \\(x\\to-\\infty\\), \\(3/x^2\\to0\\) and \\(1/x\\to0\\), so this approaches \\(\\dfrac{2}{-1}=-2\\).`, `(Notice the answer flips sign from the \\(x\\to+\\infty\\) case — this is the classic trap with \\(\\sqrt{x^2}=|x|\\) at infinity.)`]
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
      },
      { id: 'p4', prompt: `For \\(\\lim_{x\\to2}x^2=4\\) (a *nonlinear* function, so the trick from before won't directly work), suppose we agree to only consider \\(\\delta\\leq1\\). Under that restriction, \\(0<|x-2|<\\delta\\) forces \\(1<x<3\\), so \\(|x+2|<5\\). Using \\(|x^2-4|=|x-2|\\cdot|x+2|\\), this gives a bound \\(|x^2-4| < k\\,|x-2|\\) for some constant \\(k\\). Find \\(k\\).`,
        inputType: 'numeric', answer: '5', formatHint: 'Enter an exact number.',
        hints: [`Factor \\(x^2-4=(x-2)(x+2)\\), so \\(|x^2-4|=|x-2|\\cdot|x+2|\\).`, `Since \\(\\delta\\leq1\\) restricts us to \\(1<x<3\\), what's the largest \\(|x+2|\\) can be on that interval?`, `On \\(1<x<3\\), \\(x+2\\) ranges over \\((3,5)\\), so \\(|x+2|<5\\).`],
        solution: [`\\(x^2-4=(x-2)(x+2)\\), so \\(|x^2-4|=|x-2|\\,|x+2|\\).`, `The restriction \\(\\delta\\leq1\\) means \\(|x-2|<1\\), i.e. \\(1<x<3\\), so \\(x+2\\in(3,5)\\) and therefore \\(|x+2|<5\\).`, `Combining: \\(|x^2-4| < 5|x-2|\\). So \\(k=5\\).`]
      },
      { id: 'p5', prompt: `Continuing from the previous problem: ignoring (for now) the separate restriction \\(\\delta\\leq1\\), what additional bound on \\(\\delta\\) (in terms of \\(\\varepsilon\\)) makes \\(5|x-2|<\\varepsilon\\) — i.e. what's the second candidate value for \\(\\delta\\)? Enter as an expression in epsilon, e.g. epsilon/5.`,
        inputType: 'expr', variables: ['epsilon'], answer: 'epsilon/5', formatHint: 'Enter an expression using "epsilon", e.g. epsilon/5.',
        hints: [`You need \\(5|x-2|<\\varepsilon\\).`, `Divide both sides by \\(5\\) to isolate \\(|x-2|\\).`, `Whatever bounds \\(|x-2|\\) here is this candidate value for \\(\\delta\\). (The actual rigorous choice would be \\(\\delta=\\min(1,\\varepsilon/5)\\), combining both restrictions — but this problem only asks for the second one.)`],
        solution: [`We need \\(5|x-2|<\\varepsilon \\iff |x-2|<\\varepsilon/5\\).`, `So this candidate is \\(\\delta=\\varepsilon/5\\). Together with the separate restriction \\(\\delta\\leq1\\), the full rigorous choice is \\(\\delta=\\min(1,\\varepsilon/5)\\) — taking the smaller of the two keeps *both* bounding steps valid at once.`]
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
      },
      { id: 'p6', prompt: `Define \\(q(2)\\) so that \\(q(x)=\\dfrac{x^3-8}{x-2}\\) is continuous at \\(x=2\\). (You'll need the difference-of-cubes factoring \\(a^3-b^3=(a-b)(a^2+ab+b^2)\\).)`,
        inputType: 'numeric', answer: '12', formatHint: 'Enter an exact number.',
        hints: [`Write \\(x^3-8=x^3-2^3\\) and apply the difference-of-cubes formula with \\(a=x,\\ b=2\\).`, `\\(x^3-8=(x-2)(x^2+2x+4)\\).`, `Cancel the \\((x-2)\\) factor, then evaluate \\(x^2+2x+4\\) at \\(x=2\\).`],
        solution: [`Difference of cubes: \\(x^3-8=(x-2)(x^2+2x+4)\\).`, `For \\(x\\neq2\\), \\(q(x)=\\dfrac{(x-2)(x^2+2x+4)}{x-2}=x^2+2x+4\\).`, `\\(\\lim_{x\\to2}(x^2+2x+4)=4+4+4=12\\). Define \\(q(2)=12\\).`]
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
      },
      { id: 'p4', prompt: `What is the largest open interval on which \\(f(x)=\\ln(4-x^2)\\) is continuous? Enter in the form -2<x<2.`,
        inputType: 'text', answer: ['-2<x<2'], formatHint: 'Enter in the form -2<x<2 (no spaces).',
        hints: [`\\(\\ln(u)\\) is continuous exactly where \\(u>0\\); here \\(u=4-x^2\\).`, `Solve \\(4-x^2>0\\), i.e. \\(x^2<4\\).`, `\\(x^2<4 \\iff -2<x<2\\).`],
        solution: [`\\(f\\) is a composition: outer \\(\\ln(u)\\) needs \\(u>0\\); here \\(u=4-x^2\\), so we need \\(4-x^2>0\\).`, `\\(4-x^2>0 \\iff x^2<4 \\iff -2<x<2\\).`, `So \\(f\\) is continuous exactly on \\(-2<x<2\\) (and undefined, hence discontinuous, outside that interval).`]
      },
      { id: 'p5', prompt: `What is the domain (and interval of continuity) of \\(f(x)=\\arcsin(x-1)\\)? Enter in the form 0<=x<=2.`,
        inputType: 'text', answer: ['0<=x<=2'], formatHint: 'Enter in the form 0<=x<=2 (no spaces).',
        hints: [`\\(\\arcsin(u)\\) requires \\(-1\\leq u\\leq1\\); here \\(u=x-1\\).`, `Solve \\(-1\\leq x-1\\leq1\\) by adding \\(1\\) to every part of the inequality.`, `That gives \\(0\\leq x\\leq2\\).`],
        solution: [`\\(\\arcsin(u)\\) is only defined for \\(-1\\leq u\\leq1\\); here \\(u=x-1\\), so we need \\(-1\\leq x-1\\leq1\\).`, `Adding \\(1\\) throughout: \\(0\\leq x\\leq2\\).`, `\\(\\arcsin\\) is continuous on its entire (closed) domain, so \\(f\\) is continuous exactly on \\(0\\leq x\\leq2\\).`]
      }
    ]
  }

  ] // end subsections
});
