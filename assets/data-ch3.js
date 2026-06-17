// ============================================================
// CHAPTER 3 — Topics in Differentiation
// ============================================================
window.TOPICS = window.TOPICS || [];

window.TOPICS.push({
  id: 'ch3',
  num: 3,
  title: 'Topics in Differentiation',
  subsections: [

  // ---------------------------------------------------------
  {
    id: '3.1',
    title: 'Implicit Differentiation',
    coreIdea: `Not every curve is conveniently solved for \\(y\\) — equations like \\(x^2+y^2=25\\) or \\(\\sin(xy)=x+y\\) mix \\(x\\) and \\(y\\) together. Implicit differentiation lets you find \\(dy/dx\\) anyway: differentiate *both sides* of the equation with respect to \\(x\\), treating \\(y\\) as an unknown function of \\(x\\) (so every time you differentiate a \\(y\\)-term, the chain rule contributes a factor of \\(y'\\)), then solve the resulting equation algebraically for \\(y'\\).`,
    formulas: [
      { label: 'Core trick', tex: `\\frac{d}{dx}\\big[y^n\\big] = ny^{n-1}\\frac{dy}{dx} \\qquad \\text{(chain rule, since } y=y(x)\\text{)}` },
      { label: 'Product rule with a y-term', tex: `\\frac{d}{dx}\\big[xy\\big] = y + x\\frac{dy}{dx}` },
      { label: 'Solving pattern', tex: `\\text{collect all } \\tfrac{dy}{dx} \\text{ terms on one side} \\implies \\frac{dy}{dx}=\\frac{\\text{(stuff without } y'\\text{)}}{\\text{(coefficient of } y'\\text{)}}` }
    ],
    example: {
      statement: `Find \\(\\dfrac{dy}{dx}\\) for the circle \\(x^2+y^2=25\\).`,
      steps: [
        `Differentiate both sides with respect to \\(x\\): \\(\\dfrac{d}{dx}[x^2]+\\dfrac{d}{dx}[y^2]=\\dfrac{d}{dx}[25]\\).`,
        `\\(\\dfrac{d}{dx}[x^2]=2x\\). For \\(y^2\\), use the chain rule since \\(y=y(x)\\): \\(\\dfrac{d}{dx}[y^2]=2y\\dfrac{dy}{dx}\\). The right side is \\(0\\).`,
        `So we have \\(2x+2y\\dfrac{dy}{dx}=0\\).`,
        `Isolate \\(\\dfrac{dy}{dx}\\): \\(2y\\dfrac{dy}{dx}=-2x \\implies \\dfrac{dy}{dx}=-\\dfrac{x}{y}\\).`
      ]
    },
    mistakes: [
      `Differentiating a \\(y\\)-term as if \\(y\\) were just another constant or another \\(x\\), and forgetting the \\(\\frac{dy}{dx}\\) factor the chain rule demands.`,
      `Forgetting the product rule on mixed terms like \\(xy\\) or \\(x^2y^3\\) — both factors need to be accounted for.`,
      `Algebra mistakes when collecting \\(\\frac{dy}{dx}\\) terms — move *all* of them to one side before factoring out \\(\\frac{dy}{dx}\\).`
    ],
    problems: [
      {
        id: 'p1', prompt: `Find \\(\\dfrac{dy}{dx}\\) given \\(y\\sin x - \\cos(x-y)=0\\). Enter as an expression in x and y.`,
        inputType: 'expr', variables: ['x','y'],
        answer: '-(y*cos(x)+sin(x-y))/(sin(x)-sin(x-y))',
        formatHint: 'Enter dy/dx as an expression in x and y, e.g. -(y*cos(x)+sin(x-y))/(sin(x)-sin(x-y)).',
        hints: [
          `Differentiate term by term. For \\(y\\sin x\\), use the product rule (remember \\(y\\) is a function of \\(x\\)). For \\(\\cos(x-y)\\), use the chain rule on the inside \\(x-y\\), whose derivative is \\(1-y'\\).`,
          `You should get \\(y'\\sin x + y\\cos x + \\sin(x-y)\\cdot(1-y') = 0\\) (note the double negative: \\(-\\frac{d}{dx}[\\cos(x-y)] = \\sin(x-y)\\cdot(1-y')\\)).`,
          `Expand and collect all \\(y'\\) terms on one side: \\(y'[\\sin x - \\sin(x-y)] = -y\\cos x - \\sin(x-y)\\).`
        ],
        solution: [
          `Differentiate both sides w.r.t. \\(x\\): \\(\\dfrac{d}{dx}[y\\sin x] - \\dfrac{d}{dx}[\\cos(x-y)] = 0\\).`,
          `Product rule: \\(\\dfrac{d}{dx}[y\\sin x] = y'\\sin x + y\\cos x\\).`,
          `Chain rule on \\(\\cos(x-y)\\): \\(\\dfrac{d}{dx}[\\cos(x-y)] = -\\sin(x-y)\\cdot\\dfrac{d}{dx}[x-y] = -\\sin(x-y)(1-y')\\). So \\(-\\dfrac{d}{dx}[\\cos(x-y)] = \\sin(x-y)(1-y')\\).`,
          `Putting it together: \\(y'\\sin x + y\\cos x + \\sin(x-y)(1-y') = 0\\), i.e. \\(y'\\sin x + y\\cos x + \\sin(x-y) - y'\\sin(x-y) = 0\\).`,
          `Collect \\(y'\\) terms: \\(y'\\big[\\sin x - \\sin(x-y)\\big] = -y\\cos x - \\sin(x-y)\\).`,
          `So \\(\\dfrac{dy}{dx} = \\dfrac{-\\big(y\\cos x+\\sin(x-y)\\big)}{\\sin x - \\sin(x-y)}\\).`
        ],
        samplePoints: [ {x:0.4,y:0.2}, {x:0.7,y:0.5}, {x:1.1,y:0.3}, {x:0.5,y:0.9}, {x:1.3,y:0.6} ]
      },
      {
        id: 'p2', prompt: `Find \\(\\dfrac{dy}{dx}\\) given \\(x\\sin y = \\ln y\\). Enter as an expression in x and y.`,
        inputType: 'expr', variables: ['x','y'],
        answer: '(y*sin(y))/(1-x*y*cos(y))',
        formatHint: 'Enter dy/dx as an expression in x and y, e.g. (y*sin(y))/(1-x*y*cos(y)).',
        hints: [
          `Differentiate the left side with the product rule: \\(\\frac{d}{dx}[x\\sin y] = \\sin y + x\\cos y\\cdot y'\\). Differentiate the right side with the chain rule: \\(\\frac{d}{dx}[\\ln y]=\\frac{1}{y}y'\\).`,
          `You should get \\(\\sin y + xy'\\cos y = \\frac{y'}{y}\\).`,
          `Move every \\(y'\\) term to one side and factor it out, then divide.`
        ],
        solution: [
          `Differentiate both sides: \\(\\sin y + x\\cos y\\cdot y' = \\dfrac{1}{y}y'\\) (product rule on the left, chain rule on \\(\\ln y\\) on the right).`,
          `Move all \\(y'\\) terms to one side: \\(\\sin y = \\dfrac{y'}{y} - xy'\\cos y = y'\\left(\\dfrac{1}{y}-x\\cos y\\right)\\).`,
          `Combine the bracket over a common denominator: \\(\\dfrac{1}{y}-x\\cos y = \\dfrac{1-xy\\cos y}{y}\\).`,
          `So \\(\\sin y = y'\\cdot\\dfrac{1-xy\\cos y}{y} \\implies y' = \\dfrac{y\\sin y}{1-xy\\cos y}\\).`
        ],
        samplePoints: [ {x:0.3,y:0.6}, {x:0.5,y:0.9}, {x:0.8,y:0.4}, {x:0.2,y:1.0}, {x:0.6,y:0.7} ]
      },
      {
        id: 'p3', prompt: `Find \\(\\dfrac{dy}{dx}\\) given \\(x^2(x+y) = a^2(x-y)\\), where \\(a\\) is a constant. Enter as an expression in x, y, and a.`,
        inputType: 'expr', variables: ['x','y','a'],
        answer: '(a^2-3*x^2-2*x*y)/(a^2+x^2)',
        formatHint: 'Enter dy/dx as an expression in x, y, a, e.g. (a^2-3*x^2-2*x*y)/(a^2+x^2).',
        hints: [
          `Expand the left side first: \\(x^2(x+y)=x^3+x^2y\\). The right side expands to \\(a^2x-a^2y\\). (Treat \\(a\\) as a constant — it differentiates like one.)`,
          `Differentiate \\(x^3+x^2y = a^2x-a^2y\\) term by term: the \\(x^2y\\) term needs the product rule, giving \\(2xy+x^2y'\\).`,
          `You should reach \\(3x^2+2xy+x^2y' = a^2 - a^2y'\\). Collect all \\(y'\\) terms on one side.`
        ],
        solution: [
          `Expand both sides: \\(x^3+x^2y = a^2x - a^2y\\).`,
          `Differentiate w.r.t. \\(x\\) (treating \\(a\\) as a constant): \\(3x^2 + \\big(2xy+x^2y'\\big) = a^2 - a^2y'\\) (product rule on \\(x^2y\\); chain rule on the \\(-a^2y\\) term gives \\(-a^2y'\\)).`,
          `Collect \\(y'\\) terms: \\(x^2y' + a^2y' = a^2 - 3x^2 - 2xy\\), i.e. \\(y'(x^2+a^2) = a^2-3x^2-2xy\\).`,
          `So \\(\\dfrac{dy}{dx} = \\dfrac{a^2-3x^2-2xy}{a^2+x^2}\\).`
        ],
        samplePoints: [ {x:0.4,y:0.3,a:1.2}, {x:0.7,y:0.5,a:0.9}, {x:1.1,y:0.2,a:1.5}, {x:0.5,y:0.8,a:2.0}, {x:0.9,y:0.6,a:1.1} ]
      },
      {
        id: 'p4', prompt: `Find \\(\\dfrac{dy}{dx}\\) given \\(x^3+y^3=6xy\\) (the "folium of Descartes"). Enter as an expression in x and y.`,
        inputType: 'expr', variables: ['x','y'],
        answer: '(2*y-x^2)/(y^2-2*x)',
        formatHint: 'Enter dy/dx as an expression in x and y, e.g. (2*y-x^2)/(y^2-2*x).',
        hints: [`Differentiate both sides: left side term by term with the chain rule on \\(y^3\\); right side with the product rule on \\(6xy\\).`, `You should get \\(3x^2+3y^2y' = 6y+6xy'\\).`, `Collect \\(y'\\) terms on one side and factor.`],
        solution: [`\\(\\frac{d}{dx}[x^3+y^3]=3x^2+3y^2y'\\). \\(\\frac{d}{dx}[6xy]=6y+6xy'\\) (product rule).`, `So \\(3x^2+3y^2y'=6y+6xy'\\). Collect: \\(3y^2y'-6xy'=6y-3x^2\\), i.e. \\(y'(3y^2-6x)=6y-3x^2\\).`, `Divide both sides by 3: \\(y'=\\dfrac{2y-x^2}{y^2-2x}\\).`],
        samplePoints: [ {x:0.3,y:0.8}, {x:0.6,y:1.1}, {x:0.9,y:0.4}, {x:0.5,y:1.3}, {x:1.0,y:0.7} ]
      },
      {
        id: 'p5', prompt: `Find \\(\\dfrac{dy}{dx}\\) given \\(\\sin(xy) = x+y\\). Enter as an expression in x and y.`,
        inputType: 'expr', variables: ['x','y'],
        answer: '(1-y*cos(x*y))/(x*cos(x*y)-1)',
        formatHint: 'Enter dy/dx as an expression in x and y, e.g. (1-y*cos(x*y))/(x*cos(x*y)-1).',
        hints: [`Differentiate the left with the chain rule: the inside is \\(xy\\), and \\(\\frac{d}{dx}[xy]=y+xy'\\) by the product rule.`, `You should reach \\(\\cos(xy)(y+xy') = 1+y'\\).`, `Expand and collect all \\(y'\\) terms on one side, then factor.`],
        solution: [`Chain rule: \\(\\frac{d}{dx}[\\sin(xy)] = \\cos(xy)\\cdot\\frac{d}{dx}[xy] = \\cos(xy)(y+xy')\\).`, `Right side: \\(\\frac{d}{dx}[x+y]=1+y'\\).`, `So \\(y\\cos(xy)+xy'\\cos(xy) = 1+y'\\). Collect: \\(y'\\big[x\\cos(xy)-1\\big]=1-y\\cos(xy)\\).`, `\\(\\dfrac{dy}{dx}=\\dfrac{1-y\\cos(xy)}{x\\cos(xy)-1}\\).`],
        samplePoints: [ {x:0.3,y:0.4}, {x:0.5,y:0.2}, {x:0.7,y:0.6}, {x:0.2,y:0.8}, {x:0.6,y:0.3} ]
      }
    ]
  },

  // ---------------------------------------------------------
  {
    id: '3.2',
    title: 'Derivatives of Logarithmic Functions',
    coreIdea: `\\(\\ln x\\) differentiates to the surprisingly clean \\(1/x\\), and that fact alone unlocks a powerful technique called logarithmic differentiation: taking \\(\\ln\\) of both sides of \\(y=f(x)\\) turns products into sums, quotients into differences, and — most usefully — variable exponents into ordinary multiples, all of which are far easier to differentiate. This is the standard tool whenever you see a variable in the exponent, like \\(f(x)^{g(x)}\\).`,
    formulas: [
      { label: 'Basic log derivative', tex: `\\frac{d}{dx}[\\ln x] = \\frac{1}{x} \\qquad \\frac{d}{dx}[\\ln(g(x))] = \\frac{g'(x)}{g(x)}` },
      { label: 'General base', tex: `\\frac{d}{dx}[\\log_a x] = \\frac{1}{x\\ln a}` },
      { label: 'Logarithmic differentiation', tex: `y=f(x)^{g(x)} \\implies \\ln y = g(x)\\ln f(x) \\implies \\frac{y'}{y} = g'(x)\\ln f(x) + g(x)\\frac{f'(x)}{f(x)}` }
    ],
    example: {
      statement: `Differentiate \\(y=(\\tan 2x)^{\\cot x}\\).`,
      steps: [
        `The exponent is a variable, so take \\(\\ln\\) of both sides: \\(\\ln y = \\cot x \\cdot \\ln(\\tan 2x)\\).`,
        `Differentiate both sides with respect to \\(x\\). Left side (chain rule): \\(\\dfrac{y'}{y}\\). Right side (product rule, with a chain rule inside \\(\\ln(\\tan2x)\\)):`,
        `\\(\\dfrac{d}{dx}\\big[\\cot x\\cdot\\ln(\\tan2x)\\big] = -\\csc^2x\\cdot\\ln(\\tan2x) \\;+\\; \\cot x\\cdot\\dfrac{2\\sec^2(2x)}{\\tan2x}\\).`,
        `(The second piece uses \\(\\frac{d}{dx}[\\ln(\\tan2x)] = \\frac{1}{\\tan2x}\\cdot\\sec^2(2x)\\cdot2\\), chain rule on the inner \\(2x\\).)`,
        `So \\(\\dfrac{y'}{y} = -\\csc^2x\\,\\ln(\\tan2x) + \\dfrac{2\\cot x\\sec^2(2x)}{\\tan2x}\\).`,
        `Multiply both sides by \\(y=(\\tan2x)^{\\cot x}\\) to isolate \\(y'\\): \\(y' = (\\tan2x)^{\\cot x}\\left[\\dfrac{2\\cot x\\sec^2(2x)}{\\tan2x} - \\csc^2x\\,\\ln(\\tan2x)\\right]\\).`
      ]
    },
    mistakes: [
      `Forgetting that \\(\\ln(\\tan 2x)\\) needs its *own* chain rule (the inner \\(2x\\)) on top of the \\(1/\\tan2x\\) from the log derivative.`,
      `After differentiating \\(\\ln y\\) implicitly, forgetting to multiply back by \\(y\\) at the end to isolate \\(y'\\) — the most common dropped step in log differentiation.`,
      `Trying to apply the power rule directly to \\(f(x)^{g(x)}\\) — the power rule only works when the *exponent* is a constant; here it isn't.`
    ],
    problems: [
      { id: 'p1', prompt: `Differentiate \\(y=\\ln(3x^2+1)\\).`,
        inputType: 'expr', variables: ['x'], answer: '6*x/(3*x^2+1)', formatHint: 'Enter y\' as an expression in x.',
        hints: [`Use \\(\\frac{d}{dx}[\\ln(g(x))]=g'(x)/g(x)\\) with \\(g(x)=3x^2+1\\).`, `\\(g'(x)=6x\\).`, `Put it together as \\(g'(x)/g(x)\\).`],
        solution: [`\\(g(x)=3x^2+1,\\ g'(x)=6x\\).`, `\\(y' = \\dfrac{6x}{3x^2+1}\\).`]
      },
      { id: 'p2', prompt: `Differentiate \\(y=\\ln(\\sin x)\\) (simplify your answer using a single trig function).`,
        inputType: 'expr', variables: ['x'], answer: 'cot(x)', formatHint: 'Enter y\' as an expression in x.',
        hints: [`Use \\(\\frac{d}{dx}[\\ln(g(x))]=g'(x)/g(x)\\) with \\(g(x)=\\sin x\\).`, `\\(g'(x)=\\cos x\\), so \\(y'=\\cos x/\\sin x\\).`, `That ratio simplifies to a single named trig function.`],
        solution: [`\\(g(x)=\\sin x,\\ g'(x)=\\cos x\\). \\(y'=\\dfrac{\\cos x}{\\sin x}\\).`, `Simplify: \\(y'=\\cot x\\).`],
        samplePoints: [ {x:0.4}, {x:0.6}, {x:0.8}, {x:1.0}, {x:1.2} ]
      },
      { id: 'p3', prompt: `Use logarithmic differentiation to differentiate \\(y=x^{\\sin x}\\) (for \\(x>0\\)).`,
        inputType: 'expr', variables: ['x'], answer: 'x^sin(x)*(cos(x)*log(x)+sin(x)/x)', formatHint: 'Enter y\' as an expression in x.',
        hints: [`Take \\(\\ln\\) of both sides: \\(\\ln y = \\sin x\\cdot\\ln x\\).`, `Differentiate (product rule on the right): \\(\\dfrac{y'}{y} = \\cos x\\ln x + \\sin x\\cdot\\dfrac1x\\).`, `Multiply both sides by \\(y=x^{\\sin x}\\) to isolate \\(y'\\).`],
        solution: [`\\(\\ln y = \\sin x\\ln x \\implies \\dfrac{y'}{y} = \\cos x\\ln x + \\dfrac{\\sin x}{x}\\) (product rule).`, `Multiply by \\(y = x^{\\sin x}\\): \\(y' = x^{\\sin x}\\left[\\cos x\\ln x + \\dfrac{\\sin x}{x}\\right]\\).`],
        samplePoints: [ {x:0.4}, {x:0.6}, {x:0.8}, {x:1.0}, {x:1.2} ]
      },
      { id: 'p4', prompt: `Use logarithmic differentiation to differentiate \\(y=(\\sin x)^{\\cos x}\\) (for \\(0<x<\\pi\\)).`,
        inputType: 'expr', variables: ['x'], answer: 'sin(x)^cos(x)*(cos(x)^2/sin(x)-sin(x)*log(sin(x)))', formatHint: 'Enter y\' as an expression in x.',
        hints: [`Take \\(\\ln\\) of both sides: \\(\\ln y = \\cos x\\cdot\\ln(\\sin x)\\).`, `Differentiate (product rule, with a chain rule inside \\(\\ln(\\sin x)\\)): \\(\\dfrac{y'}{y} = -\\sin x\\ln(\\sin x) + \\cos x\\cdot\\dfrac{\\cos x}{\\sin x}\\).`, `Multiply both sides by \\(y = (\\sin x)^{\\cos x}\\).`],
        solution: [`\\(\\ln y = \\cos x\\ln(\\sin x)\\). Differentiate: \\(\\dfrac{y'}{y} = -\\sin x\\ln(\\sin x) + \\cos x\\cdot\\dfrac{\\cos x}{\\sin x}\\).`, `Simplify the second term: \\(\\dfrac{\\cos^2x}{\\sin x}\\).`, `Multiply by \\(y\\): \\(y' = (\\sin x)^{\\cos x}\\left[\\dfrac{\\cos^2x}{\\sin x} - \\sin x\\ln(\\sin x)\\right]\\).`],
        samplePoints: [ {x:0.4}, {x:0.6}, {x:0.9}, {x:1.2}, {x:1.5} ]
      }
    ]
  },

  // ---------------------------------------------------------
  {
    id: '3.3',
    title: 'Derivatives of Exponential and Inverse Trigonometric Functions',
    coreIdea: `\\(e^x\\) is the unique function that is its own derivative — every other exponential and every inverse trig function's derivative formula can be built from that fact plus the chain rule and implicit differentiation. The inverse trig derivatives look unexpectedly algebraic (no trig functions appear in them at all), which is exactly why they're worth memorizing rather than re-deriving each time.`,
    formulas: [
      { label: 'Exponentials', tex: `\\frac{d}{dx}[e^x]=e^x \\qquad \\frac{d}{dx}[a^x]=a^x\\ln a \\qquad \\frac{d}{dx}\\big[e^{g(x)}\\big]=e^{g(x)}g'(x)` },
      { label: 'Inverse sine & cosine', tex: `\\frac{d}{dx}[\\arcsin x]=\\frac{1}{\\sqrt{1-x^2}} \\qquad \\frac{d}{dx}[\\arccos x]=\\frac{-1}{\\sqrt{1-x^2}}` },
      { label: 'Inverse tangent', tex: `\\frac{d}{dx}[\\arctan x]=\\frac{1}{1+x^2}` }
    ],
    example: {
      statement: `Differentiate \\(y = e^{3x}\\arctan(x)\\).`,
      steps: [
        `This is a product, so use the product rule with \\(f(x)=e^{3x}\\) and \\(g(x)=\\arctan x\\).`,
        `\\(f'(x)=e^{3x}\\cdot3\\) (chain rule, inner function \\(3x\\) has derivative \\(3\\)). \\(g'(x)=\\dfrac{1}{1+x^2}\\).`,
        `Apply the product rule: \\(y' = f'g+fg' = 3e^{3x}\\arctan x + e^{3x}\\cdot\\dfrac{1}{1+x^2}\\).`,
        `Optionally factor out \\(e^{3x}\\): \\(y' = e^{3x}\\left[3\\arctan x + \\dfrac{1}{1+x^2}\\right]\\).`
      ]
    },
    mistakes: [
      `Forgetting the chain rule factor when the exponent itself is a function of \\(x\\) — \\(\\frac{d}{dx}[e^{g(x)}]\\) is \\(e^{g(x)}g'(x)\\), not just \\(e^{g(x)}\\).`,
      `Mixing up \\(\\arcsin\\) and \\(\\arctan\\) derivative formulas — one has a square root, the other doesn't.`,
      `Forgetting the domain restriction \\(|x|<1\\) for \\(\\arcsin\\) and \\(\\arccos\\) (their derivatives blow up at \\(x=\\pm1\\)).`
    ],
    problems: [
      { id: 'p1', prompt: `Differentiate \\(y=e^{x^2}\\).`,
        inputType: 'expr', variables: ['x'], answer: '2*x*exp(x^2)', formatHint: 'Enter y\' as an expression in x.',
        hints: [`This is \\(e^{g(x)}\\) with \\(g(x)=x^2\\).`, `\\(g'(x)=2x\\).`, `\\(y' = e^{g(x)}\\cdot g'(x)\\).`],
        solution: [`\\(g(x)=x^2,\\ g'(x)=2x\\). \\(y'=e^{x^2}\\cdot2x = 2xe^{x^2}\\).`]
      },
      { id: 'p2', prompt: `Differentiate \\(y=\\arctan(2x)\\).`,
        inputType: 'expr', variables: ['x'], answer: '2/(1+4*x^2)', formatHint: 'Enter y\' as an expression in x.',
        hints: [`Chain rule: outer function \\(\\arctan(u)\\), inner \\(u=2x\\).`, `Derivative of outside: \\(\\dfrac{1}{1+u^2}=\\dfrac{1}{1+4x^2}\\). Derivative of inside: \\(2\\).`, `Multiply.`],
        solution: [`\\(y' = \\dfrac{1}{1+(2x)^2}\\cdot2 = \\dfrac{2}{1+4x^2}\\).`]
      },
      { id: 'p3', prompt: `Differentiate \\(y=\\arcsin\\!\\left(\\dfrac{x}{2}\\right)\\) (for \\(-2<x<2\\)).`,
        inputType: 'expr', variables: ['x'], answer: '1/sqrt(4-x^2)', formatHint: 'Enter y\' as an expression in x.',
        hints: [`Chain rule: outer function \\(\\arcsin(u)\\), inner \\(u=x/2\\).`, `Derivative of outside: \\(\\dfrac{1}{\\sqrt{1-u^2}} = \\dfrac{1}{\\sqrt{1-x^2/4}}\\). Derivative of inside: \\(\\dfrac12\\).`, `Multiply, then simplify the square root by factoring out \\(\\frac14\\) from under it.`],
        solution: [`\\(y'=\\dfrac{1}{\\sqrt{1-x^2/4}}\\cdot\\dfrac12\\).`, `Rewrite \\(1-x^2/4 = \\dfrac{4-x^2}{4}\\), so \\(\\sqrt{1-x^2/4}=\\dfrac{\\sqrt{4-x^2}}{2}\\).`, `\\(y' = \\dfrac{1}{2}\\cdot\\dfrac{2}{\\sqrt{4-x^2}} = \\dfrac{1}{\\sqrt{4-x^2}}\\).`],
        samplePoints: [ {x:-0.8}, {x:-0.3}, {x:0.5}, {x:1.0}, {x:1.4} ]
      }
    ]
  },

  // ---------------------------------------------------------
  {
    id: '3.4',
    title: 'Related Rates',
    coreIdea: `Related rates problems describe several quantities that change over time and are linked by some geometric or physical equation; you differentiate that equation *with respect to time* (using implicit differentiation, since everything is secretly a function of \\(t\\)) to relate the unknown rate you want to the known rates you're given. The hard part is rarely the calculus — it's translating the word problem into an equation in the first place.`,
    formulas: [
      { label: 'General method', tex: `\\text{1. Write an equation linking the quantities.}\\quad \\text{2. Differentiate w.r.t. } t. \\quad \\text{3. Substitute known values.}` },
      { label: 'Common geometric relations', tex: `A=\\pi r^2 \\quad V=\\tfrac43\\pi r^3 \\quad a^2+b^2=c^2` }
    ],
    example: {
      statement: `A circular oil spill's radius is increasing at \\(3\\) m/min. How fast is the area increasing when \\(r=50\\) m?`,
      steps: [
        `Write the relating equation: \\(A=\\pi r^2\\).`,
        `Differentiate both sides with respect to \\(t\\): \\(\\dfrac{dA}{dt} = 2\\pi r\\dfrac{dr}{dt}\\) (chain rule, since \\(r=r(t)\\)).`,
        `Substitute the known values \\(r=50\\) and \\(\\dfrac{dr}{dt}=3\\): \\(\\dfrac{dA}{dt} = 2\\pi(50)(3) = 300\\pi\\).`,
        `So the area is increasing at \\(300\\pi \\approx 942.5\\) square meters per minute.`
      ]
    },
    mistakes: [
      `Substituting the specific numerical value (like \\(r=50\\)) into the equation *before* differentiating — you must differentiate the general relationship first, then substitute.`,
      `Forgetting that every quantity in the equation is implicitly a function of \\(t\\), so each one needs its own chain-rule rate term when differentiated.`,
      `Mixing up which rate is given and which is asked for, or forgetting to attach correct units to the final answer.`
    ],
    problems: [
      { id: 'p1', prompt: `A square's side length is increasing at \\(2\\) cm/s. How fast is its area increasing when the side is \\(5\\) cm? (units: cm²/s)`,
        inputType: 'numeric', answer: '20', formatHint: 'Enter an exact number.',
        hints: [`Relating equation: \\(A=s^2\\).`, `Differentiate: \\(\\dfrac{dA}{dt}=2s\\dfrac{ds}{dt}\\).`, `Substitute \\(s=5\\), \\(\\dfrac{ds}{dt}=2\\).`],
        solution: [`\\(A=s^2 \\implies \\dfrac{dA}{dt}=2s\\dfrac{ds}{dt}\\).`, `At \\(s=5\\), \\(\\dfrac{ds}{dt}=2\\): \\(\\dfrac{dA}{dt}=2(5)(2)=20\\) cm²/s.`]
      },
      { id: 'p2', prompt: `A ladder 10 m long leans against a wall; the bottom slides away from the wall at \\(1\\) m/s. How fast is the top sliding down (in m/s) when the bottom is \\(6\\) m from the wall? Enter as a positive number (the speed).`,
        inputType: 'numeric', answer: '0.75', formatHint: 'Enter an exact decimal or fraction.',
        hints: [`Relating equation (Pythagorean theorem): \\(x^2+y^2=100\\), where \\(x\\) is the base distance and \\(y\\) is the height.`, `Differentiate w.r.t. \\(t\\): \\(2x\\dfrac{dx}{dt}+2y\\dfrac{dy}{dt}=0\\).`, `When \\(x=6\\), \\(y=\\sqrt{100-36}=8\\). Substitute \\(x=6,\\ y=8,\\ \\frac{dx}{dt}=1\\) and solve for \\(\\frac{dy}{dt}\\).`],
        solution: [`\\(x^2+y^2=100 \\implies 2x\\frac{dx}{dt}+2y\\frac{dy}{dt}=0\\).`, `At \\(x=6\\): \\(y=\\sqrt{100-36}=8\\).`, `\\(2(6)(1)+2(8)\\frac{dy}{dt}=0 \\implies 12+16\\frac{dy}{dt}=0 \\implies \\frac{dy}{dt}=-\\frac{12}{16}=-0.75\\).`, `The top is sliding down at \\(0.75\\) m/s (the magnitude — the negative sign just indicates \\(y\\) is decreasing).`]
      },
      { id: 'p3', prompt: `Gas is pumped into a spherical balloon at \\(100\\) cm³/s. How fast (in cm/s) is the radius increasing when \\(r=5\\) cm? Use \\(V=\\frac43\\pi r^3\\). Enter the exact value in terms of pi, e.g. 1/pi.`,
        inputType: 'expr_const', answer: '1/pi', formatHint: 'Enter exact value, e.g. 1/pi.',
        hints: [`Differentiate \\(V=\\frac43\\pi r^3\\) w.r.t. \\(t\\): \\(\\dfrac{dV}{dt}=4\\pi r^2\\dfrac{dr}{dt}\\).`, `Substitute \\(r=5\\) and \\(\\dfrac{dV}{dt}=100\\), then solve for \\(\\dfrac{dr}{dt}\\).`, `\\(100 = 4\\pi(25)\\dfrac{dr}{dt} = 100\\pi\\dfrac{dr}{dt}\\).`],
        solution: [`\\(\\dfrac{dV}{dt}=4\\pi r^2\\dfrac{dr}{dt}\\). At \\(r=5\\): \\(100 = 4\\pi(25)\\dfrac{dr}{dt}=100\\pi\\dfrac{dr}{dt}\\).`, `\\(\\dfrac{dr}{dt}=\\dfrac{100}{100\\pi}=\\dfrac1\\pi\\) cm/s.`]
      }
    ]
  },

  // ---------------------------------------------------------
  {
    id: '3.5',
    title: 'Local Linear Approximation; Differentials',
    coreIdea: `Near the point where you computed it, the tangent line is an excellent stand-in for a curve — close enough that you can use it to approximate values of \\(f\\) you don't want to compute directly (like \\(\\sqrt{4.1}\\)). The differential \\(dy=f'(x)\\,dx\\) is just this idea written in infinitesimal language: it's the *change along the tangent line*, as opposed to \\(\\Delta y\\), the actual change along the curve.`,
    formulas: [
      { label: 'Local linear approximation', tex: `f(x_0+\\Delta x) \\approx f(x_0) + f'(x_0)\\,\\Delta x` },
      { label: 'Differential', tex: `dy = f'(x)\\,dx` },
      { label: 'Approximation error', tex: `\\Delta y - dy \\to 0 \\text{ faster than } \\Delta x \\to 0` }
    ],
    example: {
      statement: `Use a local linear approximation to estimate \\(\\sqrt{4.1}\\).`,
      steps: [
        `Choose \\(f(x)=\\sqrt x\\) and a nearby point where things are easy to compute exactly: \\(x_0=4\\), since \\(\\sqrt4=2\\) exactly.`,
        `\\(\\Delta x = 4.1-4=0.1\\).`,
        `\\(f'(x)=\\dfrac{1}{2\\sqrt x}\\), so \\(f'(4)=\\dfrac{1}{2\\cdot2}=\\dfrac14\\).`,
        `\\(f(4.1)\\approx f(4)+f'(4)\\cdot\\Delta x = 2 + \\dfrac14(0.1) = 2+0.025=2.025\\).`,
        `(The true value is \\(\\sqrt{4.1}\\approx2.0248\\), so the approximation is excellent.)`
      ]
    },
    mistakes: [
      `Choosing \\(x_0\\) to be the messy value itself rather than the *nearby, easy-to-compute* value — the whole point is to anchor at a point you know exactly.`,
      `Confusing \\(dy\\) (tangent-line change, computed from the formula) with \\(\\Delta y\\) (true change, requiring you to actually evaluate \\(f\\) at the new point).`,
      `Forgetting that the approximation degrades as \\(\\Delta x\\) grows — it's a *local* approximation, not a global one.`
    ],
    problems: [
      { id: 'p1', prompt: `Use a local linear approximation at \\(x_0=9\\) to estimate \\(\\sqrt{9.3}\\).`,
        inputType: 'numeric', answer: '3.05', formatHint: 'Enter as a decimal.',
        hints: [`\\(f(x)=\\sqrt x\\), \\(f(9)=3\\), \\(\\Delta x=0.3\\).`, `\\(f'(x)=\\dfrac{1}{2\\sqrt x}\\), so \\(f'(9)=\\dfrac16\\).`, `\\(f(9.3)\\approx 3+\\dfrac16(0.3)\\).`],
        solution: [`\\(f(9)=3,\\ f'(9)=\\dfrac{1}{2\\sqrt9}=\\dfrac16,\\ \\Delta x = 0.3\\).`, `\\(f(9.3)\\approx 3+\\dfrac16(0.3)=3+0.05=3.05\\).`]
      },
      { id: 'p2', prompt: `Find the differential \\(dy\\) for \\(y=x^3-2x\\) at \\(x=2\\), \\(dx=0.1\\).`,
        inputType: 'numeric', answer: '1', formatHint: 'Enter as a decimal or fraction.',
        hints: [`\\(dy=f'(x)\\,dx\\). First find \\(f'(x)\\).`, `\\(f'(x)=3x^2-2\\), so \\(f'(2)=10\\).`, `\\(dy = f'(2)\\cdot dx = 10\\times0.1\\).`],
        solution: [`\\(f'(x)=3x^2-2\\). \\(f'(2)=3(4)-2=10\\).`, `\\(dy=f'(2)\\,dx=10(0.1)=1\\).`]
      },
      { id: 'p3', prompt: `Use a local linear approximation to estimate \\((1.02)^{4}\\) using \\(f(x)=x^4\\) at \\(x_0=1\\).`,
        inputType: 'numeric', answer: '1.08', formatHint: 'Enter as a decimal.',
        hints: [`\\(f(1)=1\\), \\(\\Delta x = 0.02\\).`, `\\(f'(x)=4x^3\\), so \\(f'(1)=4\\).`, `\\(f(1.02)\\approx 1+4(0.02)\\).`],
        solution: [`\\(f(1)=1,\\ f'(1)=4,\\ \\Delta x=0.02\\).`, `\\(f(1.02)\\approx1+4(0.02)=1+0.08=1.08\\).`]
      }
    ]
  },

  // ---------------------------------------------------------
  {
    id: '3.6',
    title: "L'Hôpital's Rule; Indeterminate Forms",
    coreIdea: `Some limits arrive in the indeterminate forms \\(\\frac00\\) or \\(\\frac{\\infty}{\\infty}\\), where direct substitution gives you no information at all. L'Hôpital's Rule says that — under those circumstances only — you may differentiate the numerator and denominator *separately* and try the limit again. It's a powerful tool, but it's only legal to apply when you've actually confirmed you're in an indeterminate form; otherwise it gives nonsense.`,
    formulas: [
      { label: "L'Hôpital's Rule", tex: `\\text{If } \\lim\\frac{f(x)}{g(x)} \\text{ is } \\tfrac00 \\text{ or } \\tfrac{\\infty}{\\infty}, \\text{ then } \\lim\\frac{f(x)}{g(x)}=\\lim\\frac{f'(x)}{g'(x)}` },
      { label: 'Other indeterminate forms', tex: `0\\cdot\\infty,\\ \\infty-\\infty,\\ 0^0,\\ \\infty^0,\\ 1^\\infty \\ \\longrightarrow\\ \\text{rewrite as } \\tfrac00 \\text{ or } \\tfrac{\\infty}{\\infty} \\text{ first}` }
    ],
    example: {
      statement: `Evaluate \\(\\displaystyle\\lim_{x\\to0}\\frac{e^x-1-x}{x^2}\\).`,
      steps: [
        `Check the form: as \\(x\\to0\\), numerator \\(\\to e^0-1-0=0\\), denominator \\(\\to0\\). This is \\(\\frac00\\), so L'Hôpital's Rule applies.`,
        `Differentiate numerator and denominator separately: \\(\\dfrac{d}{dx}[e^x-1-x]=e^x-1\\), \\(\\dfrac{d}{dx}[x^2]=2x\\).`,
        `New limit: \\(\\displaystyle\\lim_{x\\to0}\\dfrac{e^x-1}{2x}\\). Check the form again: numerator \\(\\to0\\), denominator \\(\\to0\\) — still \\(\\frac00\\), so apply L'Hôpital again.`,
        `Differentiate again: \\(\\dfrac{d}{dx}[e^x-1]=e^x\\), \\(\\dfrac{d}{dx}[2x]=2\\).`,
        `\\(\\displaystyle\\lim_{x\\to0}\\dfrac{e^x}{2} = \\dfrac{e^0}{2}=\\dfrac12\\).`
      ]
    },
    mistakes: [
      `Applying L'Hôpital's Rule to a limit that isn't actually \\(\\frac00\\) or \\(\\frac{\\infty}{\\infty}\\) — always verify the indeterminate form first.`,
      `Differentiating the *whole fraction* with the quotient rule instead of differentiating the numerator and denominator *separately* — that's a completely different (and incorrect) operation here.`,
      `Stopping after one application when the result is still indeterminate — you may need to apply the rule multiple times.`
    ],
    problems: [
      { id: 'p1', prompt: `Evaluate \\(\\displaystyle\\lim_{x\\to0}\\frac{\\sin x}{x}\\) using L'Hôpital's Rule.`,
        inputType: 'numeric', answer: '1', formatHint: 'Enter an exact number.',
        hints: [`Confirm the form: both numerator and denominator \\(\\to0\\) as \\(x\\to0\\). That's \\(\\frac00\\).`, `Differentiate numerator and denominator: \\(\\cos x\\) and \\(1\\).`, `Evaluate \\(\\lim_{x\\to0}\\dfrac{\\cos x}{1}\\).`],
        solution: [`Form is \\(\\frac00\\). Differentiate: \\(\\dfrac{d}{dx}[\\sin x]=\\cos x\\), \\(\\dfrac{d}{dx}[x]=1\\).`, `\\(\\lim_{x\\to0}\\dfrac{\\cos x}{1}=\\cos0=1\\).`]
      },
      { id: 'p2', prompt: `Evaluate \\(\\displaystyle\\lim_{x\\to\\infty}\\frac{\\ln x}{x}\\) using L'Hôpital's Rule.`,
        inputType: 'numeric', answer: '0', formatHint: 'Enter an exact number.',
        hints: [`Confirm the form: numerator \\(\\to\\infty\\), denominator \\(\\to\\infty\\). That's \\(\\frac{\\infty}{\\infty}\\).`, `Differentiate: \\(\\dfrac{d}{dx}[\\ln x]=1/x\\), \\(\\dfrac{d}{dx}[x]=1\\).`, `Evaluate \\(\\lim_{x\\to\\infty}\\dfrac{1/x}{1}\\).`],
        solution: [`Form is \\(\\frac{\\infty}{\\infty}\\). Differentiate: gives \\(\\dfrac{1/x}{1}=\\dfrac1x\\).`, `\\(\\lim_{x\\to\\infty}\\dfrac1x=0\\).`]
      },
      { id: 'p3', prompt: `Evaluate \\(\\displaystyle\\lim_{x\\to0}\\frac{1-\\cos x}{x^2}\\) using L'Hôpital's Rule (you'll need to apply it twice).`,
        inputType: 'numeric', answer: '1/2', formatHint: 'Enter as a fraction or decimal.',
        hints: [`Form is \\(\\frac00\\). Differentiate once: \\(\\dfrac{\\sin x}{2x}\\) — check the form again.`, `Still \\(\\frac00\\); differentiate a second time: \\(\\dfrac{\\cos x}{2}\\).`, `Evaluate \\(\\lim_{x\\to0}\\dfrac{\\cos x}{2}\\).`],
        solution: [`First application: \\(\\dfrac{d}{dx}[1-\\cos x]=\\sin x\\), \\(\\dfrac{d}{dx}[x^2]=2x\\), giving \\(\\lim\\dfrac{\\sin x}{2x}\\), still \\(\\frac00\\).`, `Second application: \\(\\dfrac{d}{dx}[\\sin x]=\\cos x\\), \\(\\dfrac{d}{dx}[2x]=2\\), giving \\(\\lim\\dfrac{\\cos x}{2}\\).`, `\\(\\lim_{x\\to0}\\dfrac{\\cos x}{2}=\\dfrac{1}{2}\\).`]
      },
      { id: 'p4', prompt: `Evaluate \\(\\displaystyle\\lim_{x\\to\\infty}\\frac{3x^2+1}{e^x}\\) using L'Hôpital's Rule (you'll need to apply it twice).`,
        inputType: 'numeric', answer: '0', formatHint: 'Enter an exact number.',
        hints: [`Form is \\(\\frac{\\infty}{\\infty}\\). Differentiate once: \\(\\dfrac{6x}{e^x}\\) — still indeterminate.`, `Differentiate again: \\(\\dfrac{6}{e^x}\\).`, `What happens to \\(\\dfrac{6}{e^x}\\) as \\(x\\to\\infty\\)?`],
        solution: [`First application: \\(\\dfrac{6x}{e^x}\\), still \\(\\frac{\\infty}{\\infty}\\).`, `Second application: \\(\\dfrac{6}{e^x}\\).`, `As \\(x\\to\\infty\\), \\(e^x\\to\\infty\\), so \\(\\dfrac{6}{e^x}\\to0\\).`]
      }
    ]
  }

  ] // end subsections
});
