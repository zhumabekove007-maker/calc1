// ============================================================
// CHAPTER 2 — The Derivative
// ============================================================
window.TOPICS = window.TOPICS || [];

window.TOPICS.push({
  id: 'ch2',
  num: 2,
  title: 'The Derivative',
  subsections: [

  // ---------------------------------------------------------
  {
    id: '2.1',
    title: 'Tangent Lines and Rates of Change',
    coreIdea: `The derivative is born from a geometry problem: what is the slope of the line that just barely touches a curve at one point? You can't compute that slope directly (you only have one point), so instead you compute the slope of a secant line through two nearby points and watch what happens as the second point slides toward the first. That limiting slope is both the slope of the tangent line and, physically, the instantaneous rate of change of \\(y\\) with respect to \\(x\\).`,
    formulas: [
      { label: 'Secant slope', tex: `m_{sec} = \\frac{f(a+h)-f(a)}{h}` },
      { label: 'Tangent slope (derivative at a)', tex: `m_{tan} = \\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h}` },
      { label: 'Tangent line equation', tex: `y - f(a) = m_{tan}(x-a)` }
    ],
    example: {
      statement: `Find the slope of the tangent line to \\(f(x)=x^2\\) at \\(x=3\\).`,
      steps: [
        `Set up the secant slope: \\(\\dfrac{f(3+h)-f(3)}{h} = \\dfrac{(3+h)^2-9}{h}\\).`,
        `Expand: \\((3+h)^2-9 = 9+6h+h^2-9 = 6h+h^2 = h(6+h)\\).`,
        `So the secant slope simplifies to \\(\\dfrac{h(6+h)}{h}=6+h\\) for \\(h\\neq0\\).`,
        `Take the limit as \\(h\\to0\\): \\(m_{tan}=\\lim_{h\\to0}(6+h)=6\\).`
      ]
    },
    mistakes: [
      `Plugging \\(h=0\\) directly into the un-simplified difference quotient, producing the meaningless \\(0/0\\) instead of simplifying first.`,
      `Confusing the *secant* slope (an approximation using a finite \\(h\\)) with the *tangent* slope (the limit as \\(h\\to0\\)).`,
      `Forgetting that the rate of change interpretation needs consistent units — slope is "change in output per unit change in input," not just a bare number.`
    ],
    problems: [
      { id: 'p1', prompt: `Find the slope of the secant line through \\(x=2\\) and \\(x=2+h\\) on \\(f(x)=x^2\\), simplified as a function of \\(h\\) (with the common factor of \\(h\\) cancelled). Enter as an expression in h.`,
        inputType: 'expr', variable: 'h', answer: '4+h', formatHint: 'Enter an expression in h, e.g. 4+h.',
        hints: [`Compute \\(f(2+h)-f(2) = (2+h)^2-4\\).`, `Expand: \\((2+h)^2-4 = 4h+h^2\\). Factor out \\(h\\).`, `Divide by \\(h\\): you should be left with a simple binomial.`],
        solution: [`\\(f(2+h)-f(2)=(2+h)^2-4 = 4+4h+h^2-4=4h+h^2=h(4+h)\\).`, `Dividing by \\(h\\): the secant slope is \\(4+h\\).`]
      },
      { id: 'p2', prompt: `Using the previous result, find the slope of the tangent line to \\(f(x)=x^2\\) at \\(x=2\\).`,
        inputType: 'numeric', answer: '4', formatHint: 'Enter an exact number.',
        hints: [`The tangent slope is the limit of the secant slope as \\(h\\to0\\).`, `You found the secant slope is \\(4+h\\).`, `Let \\(h\\to0\\) in \\(4+h\\).`],
        solution: [`\\(m_{tan}=\\lim_{h\\to0}(4+h)=4\\).`]
      },
      { id: 'p3', prompt: `A ball's height is \\(s(t)=-5t^2+20t\\) meters at time \\(t\\) seconds. Find the average rate of change of height over \\([1,3]\\).`,
        inputType: 'numeric', answer: '0', formatHint: 'Enter an exact number (units: m/s).',
        hints: [`Average rate of change over \\([a,b]\\) is \\(\\dfrac{s(b)-s(a)}{b-a}\\).`, `Compute \\(s(1)\\) and \\(s(3)\\).`, `\\(s(1)=15\\), \\(s(3)=15\\) — what's their difference?`],
        solution: [`\\(s(1)=-5(1)+20(1)=15\\). \\(s(3)=-5(9)+20(3)=-45+60=15\\).`, `Average rate of change \\(=\\dfrac{s(3)-s(1)}{3-1}=\\dfrac{15-15}{2}=0\\) m/s.`, `(The ball returns to the same height at \\(t=3\\) as at \\(t=1\\), so its net average velocity over that interval is zero.)`]
      },
      { id: 'p4', prompt: `Find the slope of the secant line through \\(x=1\\) and \\(x=1+h\\) on \\(f(x)=\\dfrac{1}{x}\\), simplified as a function of \\(h\\) (with the common factor of \\(h\\) cancelled). Enter as an expression in h.`,
        inputType: 'expr', variable: 'h', answer: '-1/(1+h)', formatHint: 'Enter an expression in h, e.g. -1/(1+h).',
        hints: [`Compute \\(f(1+h)-f(1) = \\dfrac{1}{1+h}-1\\). Combine into a single fraction over \\(1+h\\) first.`, `\\(\\dfrac{1}{1+h}-1 = \\dfrac{1-(1+h)}{1+h} = \\dfrac{-h}{1+h}\\).`, `Now divide that whole thing by the outer \\(h\\) — the \\(h\\)'s should cancel.`],
        solution: [`\\(f(1+h)-f(1)=\\dfrac{1}{1+h}-1=\\dfrac{1-(1+h)}{1+h}=\\dfrac{-h}{1+h}\\).`, `Dividing by \\(h\\): the secant slope is \\(\\dfrac{-h}{h(1+h)}=\\dfrac{-1}{1+h}\\).`]
      },
      { id: 'p5', prompt: `Using the previous result, find the slope of the tangent line to \\(f(x)=\\dfrac1x\\) at \\(x=1\\).`,
        inputType: 'numeric', answer: '-1', formatHint: 'Enter an exact number.',
        hints: [`The tangent slope is the limit of the secant slope as \\(h\\to0\\).`, `You found the secant slope is \\(\\dfrac{-1}{1+h}\\).`, `Let \\(h\\to0\\) in \\(\\dfrac{-1}{1+h}\\).`],
        solution: [`\\(m_{tan}=\\lim_{h\\to0}\\dfrac{-1}{1+h}=-1\\).`]
      }
    ]
  },

  // ---------------------------------------------------------
  {
    id: '2.2',
    title: 'The Derivative Function',
    coreIdea: `Instead of computing the slope at one specific point, we let \\(a\\) be a variable \\(x\\) and get a whole new function \\(f'(x)\\) that reports the slope of \\(f\\) at *every* point at once. This is exactly what "differentiate using the definition" means on an exam: set up and simplify \\(\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}\\) symbolically, with no specific number substituted for \\(x\\).`,
    formulas: [
      { label: 'Definition of the derivative', tex: `f'(x) = \\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}` },
      { label: 'Alternative (point-based) form', tex: `f'(a) = \\lim_{x\\to a}\\frac{f(x)-f(a)}{x-a}` },
      { label: 'Differentiability ⟹ continuity', tex: `f \\text{ differentiable at } a \\implies f \\text{ continuous at } a \\quad \\text{(converse is false)}` }
    ],
    example: {
      statement: `Differentiate \\(f(x)=\\dfrac{x}{x-1}\\) using the definition of the derivative.`,
      steps: [
        `Set up the difference quotient: \\(f'(x)=\\displaystyle\\lim_{h\\to0}\\dfrac{f(x+h)-f(x)}{h} = \\lim_{h\\to0}\\dfrac{\\frac{x+h}{x+h-1}-\\frac{x}{x-1}}{h}\\).`,
        `Combine the two fractions in the numerator over a common denominator \\((x+h-1)(x-1)\\): \\(\\dfrac{x+h}{x+h-1}-\\dfrac{x}{x-1} = \\dfrac{(x+h)(x-1) - x(x+h-1)}{(x+h-1)(x-1)}\\).`,
        `Expand the new numerator: \\((x+h)(x-1) = x^2-x+hx-h\\), and \\(x(x+h-1)=x^2+hx-x\\). Subtracting gives \\(x^2-x+hx-h-x^2-hx+x = -h\\).`,
        `So the big fraction is \\(\\dfrac{-h}{(x+h-1)(x-1)}\\), and dividing by the outer \\(h\\) gives \\(\\dfrac{-1}{(x+h-1)(x-1)}\\) (the \\(h\\)'s cancel — this is the key simplification step).`,
        `Now take \\(h\\to0\\): \\(f'(x) = \\dfrac{-1}{(x-1)(x-1)} = -\\dfrac{1}{(x-1)^2}\\).`
      ]
    },
    mistakes: [
      `Trying to take the limit \\(h\\to0\\) before the \\(h\\)'s in the numerator and the outer \\(h\\) have cancelled — leads to division by zero.`,
      `Algebra slips when combining the two fractions in the numerator; always expand fully and double-check the subtraction.`,
      `Forgetting that \\(f'(x)\\) is itself a function of \\(x\\) — after finding it, you can plug in *any* value of \\(x\\) to get a specific slope.`
    ],
    problems: [
      { id: 'p1', prompt: `Differentiate \\(f(x)=\\dfrac{1}{x+2}\\) using the definition of the derivative. Enter \\(f'(x)\\) as an expression in x.`,
        inputType: 'expr', variable: 'x', answer: '-1/(x+2)^2', formatHint: 'Enter f\'(x) as an expression in x, e.g. -1/(x+2)^2.',
        hints: [`Set up \\(\\dfrac{f(x+h)-f(x)}{h}\\) and combine the two fractions over a common denominator \\((x+h+2)(x+2)\\) before doing anything else.`, `After combining, the numerator simplifies to just \\(-h\\) (the \\(x\\) terms cancel).`, `Cancel the outer \\(h\\) with the \\(-h\\) inside, then let \\(h\\to0\\).`],
        solution: [`\\(f(x+h)-f(x) = \\dfrac{1}{x+h+2}-\\dfrac{1}{x+2} = \\dfrac{(x+2)-(x+h+2)}{(x+h+2)(x+2)} = \\dfrac{-h}{(x+h+2)(x+2)}\\).`, `Dividing by \\(h\\): \\(\\dfrac{-1}{(x+h+2)(x+2)}\\).`, `Let \\(h\\to0\\): \\(f'(x) = \\dfrac{-1}{(x+2)^2}\\).`]
      },
      { id: 'p2', prompt: `Using \\(f(x)=\\dfrac{1}{x+2}\\) and \\(f'(x)=\\dfrac{-1}{(x+2)^2}\\) from above, find all \\(x\\) where the tangent line has slope \\(-1\\). Enter the x-values separated by a comma.`,
        inputType: 'set', answer: ['-1', '-3'], formatHint: 'Enter values separated by a comma, e.g. -1, -3.',
        hints: [`Set \\(f'(x)=-1\\): \\(\\dfrac{-1}{(x+2)^2}=-1\\).`, `This simplifies to \\((x+2)^2=1\\), so \\(x+2=\\pm1\\).`, `Solve both cases for x.`],
        solution: [`\\(\\dfrac{-1}{(x+2)^2}=-1 \\iff (x+2)^2 = 1 \\iff x+2=\\pm1\\).`, `\\(x+2=1 \\Rightarrow x=-1\\); \\(x+2=-1 \\Rightarrow x=-3\\).`, `So the slope is \\(-1\\) at \\(x=-1\\) and \\(x=-3\\).`]
      },
      { id: 'p3', prompt: `Differentiate \\(f(x)=\\dfrac{x}{x-1}\\) using the definition of the derivative. Enter \\(f'(x)\\) as an expression in x.`,
        inputType: 'expr', variable: 'x', answer: '-1/(x-1)^2', formatHint: 'Enter f\'(x) as an expression in x, e.g. -1/(x-1)^2.',
        hints: [`Combine \\(\\dfrac{x+h}{x+h-1}-\\dfrac{x}{x-1}\\) over the common denominator \\((x+h-1)(x-1)\\) first.`, `Expand the numerator carefully — most terms cancel, leaving just \\(-h\\).`, `Cancel the \\(h\\)'s, then let \\(h\\to0\\).`],
        solution: [`Combining fractions, the numerator becomes \\((x+h)(x-1)-x(x+h-1) = -h\\), over denominator \\((x+h-1)(x-1)\\).`, `Dividing by the outer \\(h\\): \\(\\dfrac{-1}{(x+h-1)(x-1)}\\).`, `Let \\(h\\to0\\): \\(f'(x) = \\dfrac{-1}{(x-1)^2}\\).`]
      },
      { id: 'p4', prompt: `With \\(f(x)=\\dfrac{x}{x-1}\\), \\(f'(x)=\\dfrac{-1}{(x-1)^2}\\): find all \\(x\\) where the curve has slope \\(-1\\). Enter the x-values separated by a comma.`,
        inputType: 'set', answer: ['0', '2'], formatHint: 'Enter values separated by a comma, e.g. 0, 2.',
        hints: [`Set \\(\\dfrac{-1}{(x-1)^2}=-1\\).`, `This gives \\((x-1)^2=1\\), so \\(x-1=\\pm1\\).`, `Solve both cases.`],
        solution: [`\\(\\dfrac{-1}{(x-1)^2}=-1 \\iff (x-1)^2=1 \\iff x-1=\\pm1\\).`, `\\(x-1=1\\Rightarrow x=2\\); \\(x-1=-1\\Rightarrow x=0\\).`, `So the curve has slope \\(-1\\) at \\(x=0\\) and \\(x=2\\) — matching the structure of a real exam question on this exact function.`]
      },
      { id: 'p5', prompt: `Differentiate \\(f(x)=\\sqrt{x}\\) using the definition of the derivative (hint: rationalize). Enter \\(f'(x)\\) as an expression in x.`,
        inputType: 'expr', variable: 'x', answer: '1/(2*sqrt(x))', formatHint: 'Enter f\'(x) as an expression in x, e.g. 1/(2*sqrt(x)).',
        hints: [`Set up \\(\\dfrac{\\sqrt{x+h}-\\sqrt{x}}{h}\\) — direct substitution gives \\(0/0\\), so multiply numerator and denominator by the conjugate \\(\\sqrt{x+h}+\\sqrt{x}\\).`, `The numerator becomes \\((x+h)-x=h\\), which cancels with the outer \\(h\\).`, `You're left with \\(\\dfrac{1}{\\sqrt{x+h}+\\sqrt{x}}\\) — now let \\(h\\to0\\).`],
        solution: [`Multiply by the conjugate: \\(\\dfrac{\\sqrt{x+h}-\\sqrt{x}}{h}\\cdot\\dfrac{\\sqrt{x+h}+\\sqrt{x}}{\\sqrt{x+h}+\\sqrt{x}} = \\dfrac{(x+h)-x}{h(\\sqrt{x+h}+\\sqrt{x})}=\\dfrac{h}{h(\\sqrt{x+h}+\\sqrt{x})}\\).`, `Cancel \\(h\\): \\(\\dfrac{1}{\\sqrt{x+h}+\\sqrt{x}}\\).`, `Let \\(h\\to0\\): \\(f'(x)=\\dfrac{1}{2\\sqrt{x}}\\).`]
      },
      { id: 'p6', prompt: `For what values of \\(a\\) and \\(b\\) will \\(f(x)=\\begin{cases}ax & x<2\\\\ ax^2-bx+3 & x\\geq2\\end{cases}\\) be differentiable for every \\(x\\)? (This requires *both* continuity and matching derivatives at \\(x=2\\) — a classic two-equation, two-unknown midterm question.) Enter \\(a\\) then \\(b\\), separated by a comma.`,
        inputType: 'set', answer: ['3/4', '9/4'], formatHint: 'Enter as a, b — e.g. 3/4, 9/4.',
        hints: [
          `Step 1 (continuity at \\(x=2\\)): the two pieces must agree at \\(x=2\\): \\(a(2) = a(2)^2-b(2)+3\\), i.e. \\(2a = 4a-2b+3\\).`,
          `Step 2 (differentiability at \\(x=2\\)): the derivative of \\(ax\\) is the constant \\(a\\); the derivative of \\(ax^2-bx+3\\) is \\(2ax-b\\), which at \\(x=2\\) is \\(4a-b\\). Set these equal: \\(a = 4a-b\\).`,
          `From step 2, \\(b=3a\\). Substitute that into the equation from step 1 and solve for \\(a\\); then back-substitute for \\(b\\).`
        ],
        solution: [
          `Continuity at \\(x=2\\): \\(2a = 4a-2b+3 \\implies 2b-2a=3 \\implies b-a=\\dfrac32\\). \\((\\ast)\\)`,
          `Differentiability at \\(x=2\\): the left piece's derivative is the constant \\(a\\); the right piece's derivative is \\(2ax-b\\), which equals \\(4a-b\\) at \\(x=2\\). Setting \\(a=4a-b\\) gives \\(b=3a\\). \\((\\ast\\ast)\\)`,
          `Substitute \\((\\ast\\ast)\\) into \\((\\ast)\\): \\(3a-a=\\dfrac32 \\implies 2a=\\dfrac32 \\implies a=\\dfrac34\\).`,
          `Then \\(b=3a=3\\cdot\\dfrac34=\\dfrac94\\).`,
          `Check: at \\(x=2\\), both pieces give \\(\\frac32\\) and both derivatives give \\(\\frac34\\) — consistent.`
        ]
      },
      { id: 'p7', prompt: `For what values of \\(a\\) and \\(b\\) will \\(g(x)=\\begin{cases}ax+b & x\\leq-1\\\\ ax^3+x+2b & x>-1\\end{cases}\\) be differentiable for every \\(x\\)? Enter \\(a\\) then \\(b\\), separated by a comma.`,
        inputType: 'set', answer: ['-1/2', '1'], formatHint: 'Enter as a, b — e.g. -1/2, 1.',
        hints: [
          `Continuity at \\(x=-1\\): \\(a(-1)+b = a(-1)^3+(-1)+2b\\), i.e. \\(-a+b = -a-1+2b\\).`,
          `Notice the \\(-a\\) terms cancel immediately in the continuity equation — solve directly for \\(b\\).`,
          `Differentiability at \\(x=-1\\): the left piece's derivative is the constant \\(a\\); the right piece's derivative is \\(3ax^2+1\\), which at \\(x=-1\\) is \\(3a+1\\). Set \\(a=3a+1\\) and solve for \\(a\\).`
        ],
        solution: [
          `Continuity at \\(x=-1\\): \\(-a+b = -a-1+2b \\implies b = -1+2b \\implies -b=-1 \\implies b=1\\).`,
          `Differentiability at \\(x=-1\\): the left piece's derivative is the constant \\(a\\); the right piece's derivative is \\(3ax^2+1\\), which at \\(x=-1\\) is \\(3a(1)+1=3a+1\\). Setting \\(a=3a+1\\): \\(-2a=1 \\implies a=-\\dfrac12\\).`,
          `So \\(a=-\\dfrac12,\\ b=1\\). Check: at \\(x=-1\\), left value \\(=-a+b=\\frac12+1=\\frac32\\); right value \\(=-a-1+2b=\\frac12-1+2=\\frac32\\) — matches.`
        ]
      }
    ]
  },

  // ---------------------------------------------------------
  {
    id: '2.3',
    title: 'Introduction to Techniques of Differentiation',
    coreIdea: `Once the definition has earned its keep, you graduate to shortcut rules that let you differentiate without limits every time: the power rule, and the fact that derivatives distribute over sums/differences and pull constants out front. These rules are tools for *speed* — you should still understand the definition underneath them.`,
    formulas: [
      { label: 'Power rule', tex: `\\frac{d}{dx}\\big[x^n\\big] = nx^{n-1}` },
      { label: 'Constant multiple & sum rules', tex: `\\frac{d}{dx}\\big[cf(x)\\big]=cf'(x), \\qquad \\frac{d}{dx}\\big[f(x)\\pm g(x)\\big]=f'(x)\\pm g'(x)` },
      { label: 'Derivative of a constant', tex: `\\frac{d}{dx}\\big[c\\big]=0` }
    ],
    example: {
      statement: `Differentiate \\(f(x)=4x^5-3x^2+7x-9\\).`,
      steps: [
        `Differentiate term by term, applying the power rule to each.`,
        `\\(\\frac{d}{dx}[4x^5]=4\\cdot5x^4=20x^4\\).`,
        `\\(\\frac{d}{dx}[-3x^2]=-3\\cdot2x=-6x\\).`,
        `\\(\\frac{d}{dx}[7x]=7\\) (since \\(7x=7x^1\\), power rule gives \\(7\\cdot1\\cdot x^0=7\\)). The constant \\(-9\\) differentiates to \\(0\\).`,
        `Combine: \\(f'(x)=20x^4-6x+7\\).`
      ]
    },
    mistakes: [
      `Applying the power rule to a sum incorrectly, e.g. writing \\(\\frac{d}{dx}[x^2+x^3]\\) as if it were a single power.`,
      `Forgetting that a bare constant term always differentiates to \\(0\\), not to itself.`,
      `Mixing up the exponent rule for negative or fractional powers, e.g. getting the sign wrong when differentiating \\(x^{-2}\\).`
    ],
    problems: [
      { id: 'p1', prompt: `Differentiate \\(f(x)=5x^4-2x^3+x-6\\).`,
        inputType: 'expr', variable: 'x', answer: '20*x^3-6*x^2+1', formatHint: 'Enter f\'(x) as an expression in x.',
        hints: [`Differentiate term by term using the power rule.`, `\\(\\frac{d}{dx}[5x^4]=20x^3\\) and \\(\\frac{d}{dx}[-2x^3]=-6x^2\\).`, `\\(\\frac{d}{dx}[x]=1\\) and the constant \\(-6\\) drops to \\(0\\).`],
        solution: [`\\(\\frac{d}{dx}[5x^4]=20x^3\\), \\(\\frac{d}{dx}[-2x^3]=-6x^2\\), \\(\\frac{d}{dx}[x]=1\\), \\(\\frac{d}{dx}[-6]=0\\).`, `Sum: \\(f'(x)=20x^3-6x^2+1\\).`]
      },
      { id: 'p2', prompt: `Differentiate \\(f(x)=\\dfrac{1}{x^3}\\) (rewrite as a power of x first).`,
        inputType: 'expr', variable: 'x', answer: '-3/x^4', formatHint: 'Enter f\'(x) as an expression in x, e.g. -3/x^4.',
        hints: [`Rewrite \\(\\dfrac{1}{x^3}\\) as \\(x^{-3}\\).`, `Apply the power rule: \\(\\frac{d}{dx}[x^{-3}]=-3x^{-4}\\).`, `Rewrite the negative exponent back as a fraction if you like.`],
        solution: [`\\(\\dfrac{1}{x^3}=x^{-3}\\), so \\(f'(x)=-3x^{-4}=-\\dfrac{3}{x^4}\\).`]
      },
      { id: 'p3', prompt: `For \\(f(x)=x^3-6x^2+9x\\), find all x where the tangent line is horizontal (slope 0). Enter the x-values separated by a comma.`,
        inputType: 'set', answer: ['1', '3'], formatHint: 'Enter values separated by a comma.',
        hints: [`First find \\(f'(x)\\).`, `\\(f'(x)=3x^2-12x+9\\). Set this equal to zero and factor out the common factor of 3 first.`, `\\(3x^2-12x+9=3(x^2-4x+3)=3(x-1)(x-3)\\).`],
        solution: [`\\(f'(x)=3x^2-12x+9\\). Setting \\(f'(x)=0\\): \\(3x^2-12x+9=0 \\iff x^2-4x+3=0\\).`, `Factor: \\(x^2-4x+3=(x-1)(x-3)\\), so \\(x=1\\) or \\(x=3\\).`]
      },
      { id: 'p4', prompt: `Differentiate \\(f(x)=2\\sqrt{x}+\\dfrac{3}{x^2}\\) (rewrite both terms as powers of x first).`,
        inputType: 'expr', variable: 'x', answer: '1/sqrt(x)-6/x^3', formatHint: 'Enter f\'(x) as an expression in x.',
        hints: [`Rewrite: \\(2\\sqrt{x}=2x^{1/2}\\) and \\(\\dfrac{3}{x^2}=3x^{-2}\\).`, `Differentiate each: \\(\\frac{d}{dx}[2x^{1/2}]=x^{-1/2}\\), \\(\\frac{d}{dx}[3x^{-2}]=-6x^{-3}\\).`, `Rewrite back using radicals/fractions.`],
        solution: [`\\(2x^{1/2}\\) differentiates to \\(2\\cdot\\frac12x^{-1/2}=x^{-1/2}=\\dfrac{1}{\\sqrt x}\\).`, `\\(3x^{-2}\\) differentiates to \\(-6x^{-3}=-\\dfrac{6}{x^3}\\).`, `\\(f'(x)=\\dfrac{1}{\\sqrt x}-\\dfrac{6}{x^3}\\).`]
      },
      { id: 'p5', prompt: `Differentiate \\(f(x)=\\dfrac{x^2+1}{\\sqrt{x}}\\) by first splitting the fraction into two separate powers of \\(x\\) (don't use the quotient rule here — that's a different, slower route).`,
        inputType: 'expr', variable: 'x', answer: '(3/2)*sqrt(x)-1/(2*sqrt(x^3))', formatHint: 'Enter f\'(x) as an expression in x.',
        hints: [`Split the single fraction: \\(\\dfrac{x^2+1}{\\sqrt x}=\\dfrac{x^2}{x^{1/2}}+\\dfrac{1}{x^{1/2}}=x^{3/2}+x^{-1/2}\\).`, `Differentiate each power separately: \\(\\frac{d}{dx}[x^{3/2}]=\\frac32x^{1/2}\\), \\(\\frac{d}{dx}[x^{-1/2}]=-\\frac12x^{-3/2}\\).`, `Rewrite the negative/fractional powers back as radicals if you like.`],
        solution: [`Split first: \\(\\dfrac{x^2+1}{\\sqrt x}=\\dfrac{x^2}{x^{1/2}}+\\dfrac{1}{x^{1/2}}=x^{3/2}+x^{-1/2}\\) — now it's just a sum of powers.`, `Power rule on each term: \\(\\frac{d}{dx}[x^{3/2}]=\\frac32x^{1/2}=\\frac32\\sqrt x\\), and \\(\\frac{d}{dx}[x^{-1/2}]=-\\frac12x^{-3/2}=-\\dfrac{1}{2\\sqrt{x^3}}\\).`, `\\(f'(x)=\\dfrac32\\sqrt x-\\dfrac{1}{2\\sqrt{x^3}}\\).`]
      }
    ]
  },

  // ---------------------------------------------------------
  {
    id: '2.4',
    title: 'The Product and Quotient Rules',
    coreIdea: `You cannot differentiate a product by just differentiating each factor separately — \\((fg)' \\neq f'g'\\). The product and quotient rules tell you the actual (slightly more involved) recipe, and they're the workhorse rules you'll reach for constantly once functions stop being simple sums of powers.`,
    formulas: [
      { label: 'Product rule', tex: `\\frac{d}{dx}\\big[f(x)g(x)\\big] = f'(x)g(x) + f(x)g'(x)` },
      { label: 'Quotient rule', tex: `\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^2}` }
    ],
    example: {
      statement: `Differentiate \\(y = (x^2+1)(3x-2)\\) using the product rule.`,
      steps: [
        `Identify \\(f(x)=x^2+1\\), \\(g(x)=3x-2\\). Then \\(f'(x)=2x\\), \\(g'(x)=3\\).`,
        `Apply the product rule: \\(y' = f'(x)g(x)+f(x)g'(x) = 2x(3x-2) + (x^2+1)(3)\\).`,
        `Expand each piece: \\(2x(3x-2)=6x^2-4x\\), and \\((x^2+1)(3)=3x^2+3\\).`,
        `Combine: \\(y' = 6x^2-4x+3x^2+3 = 9x^2-4x+3\\).`
      ]
    },
    mistakes: [
      `Writing \\((fg)'=f'g'\\) — this is simply not the rule; you must keep both cross terms.`,
      `In the quotient rule, putting the terms in the numerator in the wrong order (the sign matters): it's \\(f'g-fg'\\), not \\(fg'-f'g\\).`,
      `Forgetting to square the denominator in the quotient rule.`
    ],
    problems: [
      { id: 'p1', prompt: `Differentiate \\(y=(2x+1)(x^2-3)\\) using the product rule.`,
        inputType: 'expr', variable: 'x', answer: '6*x^2+2*x-6', formatHint: 'Enter as an expanded expression in x.',
        hints: [`Let \\(f=2x+1\\), \\(g=x^2-3\\). Find \\(f'\\) and \\(g'\\).`, `\\(f'=2\\), \\(g'=2x\\). Apply \\(y'=f'g+fg'\\).`, `\\(y' = 2(x^2-3) + (2x+1)(2x)\\) — now expand and combine.`],
        solution: [`\\(f'=2, g'=2x\\). \\(y'=2(x^2-3)+(2x+1)(2x) = 2x^2-6+4x^2+2x\\).`, `Combine: \\(y'=6x^2+2x-6\\).`]
      },
      { id: 'p2', prompt: `Differentiate \\(y=\\dfrac{x}{x^2+1}\\) using the quotient rule.`,
        inputType: 'expr', variable: 'x', answer: '(1-x^2)/(x^2+1)^2', formatHint: 'Enter y\' as an expression in x.',
        hints: [`Let \\(f=x\\), \\(g=x^2+1\\). Find \\(f'\\) and \\(g'\\).`, `\\(f'=1\\), \\(g'=2x\\). Apply \\(y'=\\dfrac{f'g-fg'}{g^2}\\).`, `\\(y'=\\dfrac{1\\cdot(x^2+1) - x\\cdot2x}{(x^2+1)^2}\\) — simplify the numerator.`],
        solution: [`\\(f'=1,\\ g'=2x\\). \\(y'=\\dfrac{(x^2+1)-2x^2}{(x^2+1)^2}=\\dfrac{1-x^2}{(x^2+1)^2}\\).`]
      },
      { id: 'p3', prompt: `Differentiate \\(y=\\dfrac{3x^2}{x-1}\\) using the quotient rule.`,
        inputType: 'expr', variable: 'x', answer: '(3*x^2-6*x)/(x-1)^2', formatHint: 'Enter y\' as an expression in x.',
        hints: [`Let \\(f=3x^2\\), \\(g=x-1\\). Find \\(f'\\) and \\(g'\\).`, `\\(f'=6x\\), \\(g'=1\\). Apply the quotient rule formula.`, `\\(y'=\\dfrac{6x(x-1)-3x^2(1)}{(x-1)^2}\\) — expand the numerator.`],
        solution: [`\\(f'=6x,\\ g'=1\\). Numerator: \\(6x(x-1)-3x^2 = 6x^2-6x-3x^2=3x^2-6x\\).`, `\\(y'=\\dfrac{3x^2-6x}{(x-1)^2}\\).`]
      },
      { id: 'p4', prompt: `Differentiate \\(y=\\dfrac{x^2\\sin x}{x+1}\\). (The numerator is itself a product, so you'll need the product rule *inside* the quotient rule.)`,
        inputType: 'expr', variable: 'x', answer: '((2*x*sin(x)+x^2*cos(x))*(x+1)-x^2*sin(x))/(x+1)^2', formatHint: 'Enter y\' as an expression in x.',
        hints: [`Let \\(f=x^2\\sin x\\) (numerator) and \\(g=x+1\\) (denominator). First find \\(f'\\) using the *product* rule on \\(x^2\\) and \\(\\sin x\\): \\(f'=2x\\sin x+x^2\\cos x\\).`, `\\(g'=1\\). Now plug \\(f, f', g, g'\\) into the quotient rule formula \\(y'=\\dfrac{f'g-fg'}{g^2}\\).`, `Don't expand everything out — it's fine to leave the numerator as a sum of products, as long as every term is accounted for.`],
        solution: [`First, the product rule on the numerator \\(f=x^2\\sin x\\): \\(f'=2x\\sin x+x^2\\cos x\\).`, `The denominator is \\(g=x+1\\), so \\(g'=1\\).`, `Quotient rule: \\(y'=\\dfrac{f'g-fg'}{g^2}=\\dfrac{(2x\\sin x+x^2\\cos x)(x+1)-x^2\\sin x}{(x+1)^2}\\).`]
      }
    ]
  },

  // ---------------------------------------------------------
  {
    id: '2.5',
    title: 'Derivatives of Trigonometric Functions',
    coreIdea: `The derivatives of the six trig functions follow directly from the limit \\(\\lim_{\\theta\\to0}\\frac{\\sin\\theta}{\\theta}=1\\) plus the product/quotient rules. You should memorize all six derivatives as standing facts — they appear constantly once chain rule problems start combining them with other functions.`,
    formulas: [
      { label: 'Sine & cosine', tex: `\\frac{d}{dx}[\\sin x]=\\cos x \\qquad \\frac{d}{dx}[\\cos x]=-\\sin x` },
      { label: 'Tangent & cotangent', tex: `\\frac{d}{dx}[\\tan x]=\\sec^2x \\qquad \\frac{d}{dx}[\\cot x]=-\\csc^2x` },
      { label: 'Secant & cosecant', tex: `\\frac{d}{dx}[\\sec x]=\\sec x\\tan x \\qquad \\frac{d}{dx}[\\csc x]=-\\csc x\\cot x` }
    ],
    example: {
      statement: `Differentiate \\(y = x^2\\sin x\\) (product rule + trig derivative).`,
      steps: [
        `Identify \\(f=x^2\\), \\(g=\\sin x\\), so \\(f'=2x\\), \\(g'=\\cos x\\).`,
        `Apply the product rule: \\(y' = f'g+fg' = 2x\\sin x + x^2\\cos x\\).`,
        `This is already fully simplified — there's no further combining to do since the two terms involve different trig functions.`
      ]
    },
    mistakes: [
      `Mixing up the sign on \\(\\frac{d}{dx}[\\cos x]=-\\sin x\\) — the minus sign is easy to forget.`,
      `Forgetting that \\(\\tan x\\), \\(\\sec x\\) etc. are themselves built from \\(\\sin x/\\cos x\\), so their derivatives require the quotient rule underneath (even though you should just memorize the results).`,
      `Treating degrees and radians interchangeably — these derivative formulas assume \\(x\\) is in radians.`
    ],
    problems: [
      { id: 'p1', prompt: `Differentiate \\(y=3\\sin x - 5\\cos x\\).`,
        inputType: 'expr', variable: 'x', answer: '3*cos(x)+5*sin(x)', formatHint: 'Enter y\' as an expression in x.',
        hints: [`Differentiate term by term.`, `\\(\\frac{d}{dx}[3\\sin x]=3\\cos x\\).`, `\\(\\frac{d}{dx}[-5\\cos x]=-5(-\\sin x)=5\\sin x\\).`],
        solution: [`\\(\\frac{d}{dx}[3\\sin x]=3\\cos x\\) and \\(\\frac{d}{dx}[-5\\cos x]=5\\sin x\\).`, `\\(y'=3\\cos x+5\\sin x\\).`]
      },
      { id: 'p2', prompt: `Differentiate \\(y=\\tan x \\cdot \\cos x\\) (simplify first if you can).`,
        inputType: 'expr', variable: 'x', answer: 'cos(x)', formatHint: 'Enter y\' as an expression in x.',
        hints: [`Notice \\(\\tan x\\cdot\\cos x = \\sin x\\) before you even differentiate.`, `So \\(y=\\sin x\\) — much simpler.`, `Differentiate \\(\\sin x\\).`],
        solution: [`Simplify first: \\(\\tan x\\cos x = \\dfrac{\\sin x}{\\cos x}\\cdot\\cos x = \\sin x\\).`, `So \\(y'=\\dfrac{d}{dx}[\\sin x] = \\cos x\\).`]
      },
      { id: 'p3', prompt: `Differentiate \\(y=x\\sec x\\) using the product rule.`,
        inputType: 'expr', variable: 'x', answer: 'sec(x)+x*sec(x)*tan(x)', formatHint: 'Enter y\' as an expression in x.',
        hints: [`Let \\(f=x\\), \\(g=\\sec x\\). Find \\(f'\\) and \\(g'\\).`, `\\(f'=1\\), \\(g'=\\sec x\\tan x\\). Apply the product rule.`, `\\(y'=1\\cdot\\sec x + x\\cdot\\sec x\\tan x\\).`],
        solution: [`\\(f'=1,\\ g'=\\sec x\\tan x\\). \\(y'=\\sec x + x\\sec x\\tan x\\).`]
      },
      { id: 'p4', prompt: `Differentiate \\(y=\\dfrac{\\cos x}{1+\\sin x}\\) using the quotient rule, then simplify using \\(\\sin^2x+\\cos^2x=1\\). You should get a surprisingly short final answer.`,
        inputType: 'expr', variable: 'x', answer: '-1/(1+sin(x))', formatHint: 'Enter y\' as a simplified expression in x.',
        hints: [`Let \\(f=\\cos x\\), \\(g=1+\\sin x\\). Find \\(f'\\) and \\(g'\\).`, `\\(f'=-\\sin x\\), \\(g'=\\cos x\\). Apply \\(y'=\\dfrac{f'g-fg'}{g^2}\\): the numerator is \\(-\\sin x(1+\\sin x)-\\cos x\\cos x\\).`, `Expand the numerator: \\(-\\sin x-\\sin^2x-\\cos^2x\\). Use \\(\\sin^2x+\\cos^2x=1\\) to simplify it to just \\(-\\sin x-1\\), which factors nicely against the denominator.`],
        solution: [`\\(f'=-\\sin x,\\ g'=\\cos x\\). Numerator: \\(-\\sin x(1+\\sin x)-\\cos x\\cdot\\cos x = -\\sin x-\\sin^2x-\\cos^2x\\).`, `By the Pythagorean identity, \\(\\sin^2x+\\cos^2x=1\\), so the numerator becomes \\(-\\sin x-1=-(1+\\sin x)\\).`, `\\(y'=\\dfrac{-(1+\\sin x)}{(1+\\sin x)^2}=\\dfrac{-1}{1+\\sin x}\\) (one factor of \\((1+\\sin x)\\) cancels).`]
      }
    ]
  },

  // ---------------------------------------------------------
  {
    id: '2.6',
    title: 'The Chain Rule',
    coreIdea: `The chain rule handles *composite* functions — a function plugged inside another function, like \\(\\sin(x^2)\\). The rule says: differentiate the outside, leave the inside alone, then multiply by the derivative of the inside. Forgetting that last "multiply by the inside's derivative" step is the single most common calculus mistake at this level.`,
    formulas: [
      { label: 'Chain rule', tex: `\\frac{d}{dx}\\big[f(g(x))\\big] = f'(g(x))\\cdot g'(x)` },
      { label: 'Leibniz form', tex: `\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx}` },
      { label: 'General power rule', tex: `\\frac{d}{dx}\\big[(g(x))^n\\big] = n(g(x))^{n-1}g'(x)` }
    ],
    example: {
      statement: `Differentiate \\(y = \\sin(3x^2-1)\\).`,
      steps: [
        `Identify the outer function \\(f(u)=\\sin u\\) and inner function \\(u=g(x)=3x^2-1\\).`,
        `Derivative of the outside (leaving the inside alone): \\(f'(u)=\\cos u = \\cos(3x^2-1)\\).`,
        `Derivative of the inside: \\(g'(x)=6x\\).`,
        `Multiply: \\(y' = \\cos(3x^2-1)\\cdot 6x = 6x\\cos(3x^2-1)\\).`
      ]
    },
    mistakes: [
      `Differentiating only the outer function and forgetting to multiply by the derivative of the inner function entirely.`,
      `Differentiating the inner function correctly but forgetting to *also* differentiate the outer wrapper (e.g. treating \\(\\sin(3x^2-1)\\) as if it simplifies to \\(\\cos(6x)\\)).`,
      `Stacking multiple chain rule applications (a chain inside a chain) and losing track of which derivative belongs to which layer — work from the outside in, one layer at a time.`
    ],
    problems: [
      { id: 'p1', prompt: `Differentiate \\(y=(2x+5)^4\\).`,
        inputType: 'expr', variable: 'x', answer: '8*(2*x+5)^3', formatHint: 'Enter y\' as an expression in x.',
        hints: [`Outer function: \\(u^4\\); inner function: \\(u=2x+5\\).`, `Derivative of outside: \\(4u^3=4(2x+5)^3\\). Derivative of inside: \\(2\\).`, `Multiply the two together.`],
        solution: [`\\(y'=4(2x+5)^3\\cdot2 = 8(2x+5)^3\\).`]
      },
      { id: 'p2', prompt: `Differentiate \\(y=\\cos(5x)\\).`,
        inputType: 'expr', variable: 'x', answer: '-5*sin(5*x)', formatHint: 'Enter y\' as an expression in x.',
        hints: [`Outer function: \\(\\cos(u)\\); inner: \\(u=5x\\).`, `Derivative of outside: \\(-\\sin u=-\\sin(5x)\\). Derivative of inside: \\(5\\).`, `Multiply.`],
        solution: [`\\(y'=-\\sin(5x)\\cdot5=-5\\sin(5x)\\).`]
      },
      { id: 'p3', prompt: `Differentiate \\(y=\\sqrt{4-x^2}\\).`,
        inputType: 'expr', variable: 'x', answer: '-x/sqrt(4-x^2)', formatHint: 'Enter y\' as an expression in x.',
        hints: [`Rewrite as \\((4-x^2)^{1/2}\\). Outer: \\(u^{1/2}\\); inner: \\(u=4-x^2\\).`, `Derivative of outside: \\(\\frac12u^{-1/2}\\). Derivative of inside: \\(-2x\\).`, `Multiply and simplify.`],
        solution: [`\\(y'=\\frac12(4-x^2)^{-1/2}\\cdot(-2x) = \\dfrac{-x}{\\sqrt{4-x^2}}\\).`]
      },
      { id: 'p4', prompt: `Differentiate \\(y=\\tan^2(3x)\\) (i.e. \\((\\tan(3x))^2\\)).`,
        inputType: 'expr', variable: 'x', answer: '6*tan(3*x)*sec(3*x)^2', formatHint: 'Enter y\' as an expression in x.',
        hints: [`This is a chain inside a chain: outermost is \\(u^2\\) with \\(u=\\tan(3x)\\), and \\(\\tan(3x)\\) is itself a chain rule with inner \\(3x\\).`, `Outer layer: \\(\\frac{d}{dx}[u^2]=2u\\cdot u' = 2\\tan(3x)\\cdot\\frac{d}{dx}[\\tan(3x)]\\).`, `\\(\\frac{d}{dx}[\\tan(3x)] = \\sec^2(3x)\\cdot3\\). Multiply everything together.`],
        solution: [`Let \\(u=\\tan(3x)\\). \\(y=u^2 \\Rightarrow y'=2u\\cdot u'\\).`, `\\(u'=\\sec^2(3x)\\cdot3=3\\sec^2(3x)\\).`, `\\(y'=2\\tan(3x)\\cdot3\\sec^2(3x) = 6\\tan(3x)\\sec^2(3x)\\).`]
      },
      { id: 'p5', prompt: `Differentiate \\(y=\\sqrt{\\sin(3x^2)}\\). (Three layers: a square root, wrapped around a sine, wrapped around a polynomial — work from the outside in.)`,
        inputType: 'expr', variables: ['x'], answer: '3*x*cos(3*x^2)/sqrt(sin(3*x^2))', formatHint: 'Enter y\' as an expression in x.',
        hints: [`Outermost layer: \\(y=u^{1/2}\\) with \\(u=\\sin(3x^2)\\), so \\(\\frac{dy}{du}=\\frac12u^{-1/2}\\).`, `Middle layer: \\(u=\\sin(v)\\) with \\(v=3x^2\\), so \\(\\frac{du}{dv}=\\cos(v)=\\cos(3x^2)\\).`, `Innermost layer: \\(v=3x^2\\), so \\(\\frac{dv}{dx}=6x\\). Multiply all three derivatives together (chain rule), then simplify.`],
        solution: [`Work outside-in. Outer: \\(\\frac{d}{du}\\big[u^{1/2}\\big]=\\frac12u^{-1/2}\\) with \\(u=\\sin(3x^2)\\).`, `Middle: \\(\\frac{d}{dv}[\\sin v]=\\cos v\\) with \\(v=3x^2\\), giving \\(\\cos(3x^2)\\).`, `Inner: \\(\\frac{d}{dx}[3x^2]=6x\\).`, `Multiply: \\(y'=\\frac12\\big(\\sin(3x^2)\\big)^{-1/2}\\cdot\\cos(3x^2)\\cdot6x = \\dfrac{3x\\cos(3x^2)}{\\sqrt{\\sin(3x^2)}}\\).`],
        samplePoints: [ {x:0.2}, {x:0.35}, {x:0.5}, {x:0.65}, {x:0.8} ]
      }
    ]
  }

  ] // end subsections
});
