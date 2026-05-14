var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "course-documents-2",
  "level": "1",
  "url": "course-documents-2.html",
  "type": "Section",
  "number": "",
  "title": "MA-200-BL: Calculus I Course Syllabus",
  "body": " MA-200-BL: Calculus I Course Syllabus   Course Information  Course: MA-200: Calculus I (Hybrid\/Blended, 4 credits), Summer 2026  Instructor: Dr. Hansun To  Contact:  hto1@worcester.edu  This is a hybrid course that combines asynchronous online instruction with required in-person examinations. Course materials, assignments, quizzes, and instructional videos are delivered through MyOpenMath. In-person attendance is required for all exams.     Responsibility for Learning  Students are responsible for their own learning. While instructional support is provided, students are expected to seek help proactively. This course is very challenging for students without a strong background in algebra and functions.    Homework Policy  Practice is essential for learning mathematics. Homework problems are designed to deepen understanding, not just provide repetition. Students are encouraged to begin assignments early and seek help when needed.  A LatePass provides a 48-hour extension. A 30% penalty applies to late work.    Artificial Intelligence Policy  AI tools may be used for studying and practice only.   AI tools are not permitted on graded assignments unless explicitly authorized.   Violations will be treated as academic dishonesty.    Learning Outcomes   Justify mathematical reasoning  Compute limits and derivatives  Apply derivatives in applications  Understand integrals and area  Apply the Fundamental Theorem of Calculus  Use L'Hopital's Rule    "
},
{
  "id": "sec-limits-concept",
  "level": "1",
  "url": "sec-limits-concept.html",
  "type": "Section",
  "number": "",
  "title": "Introduction to Limits",
  "body": " Introduction to Limits  Consider the function . What happens as ? We say that .  To find , we examine the function's behavior as approaches from both sides:      From the left: Let .      From the right: Let .      As gets closer to from both directions, approaches . Therefore, we say that .   Graph of near       Limit of a Polynomial   Find . Justify your answer.    Since is a polynomial, it is continuous everywhere. We can find the limit by direct substitution: .     Numerical Exploration of a Hole   Consider the function: . What happens to as gets closer to ?   Numerical Values for near          1.1  3.31  0.9  2.71    1.01  3.0301  0.99  2.9701    1.001  3.003  0.999  2.997    1.0001  3.0003  0.9999  2.9997       As approaches 1 from both the left and the right, the values of approach 3. Note that is undefined, but the limit exists.    Our algebraic result is the same as our numeric result. Our algebraic result is based on the following idea for what a limit should mean: gets closer and closer to as gets closer to . The variable never actually reaches .   Direct Substitution in a Rational Function   Calculate    By direct substitution: .     Limit by Factoring   Calculate    Factoring numerator and denominator: .     Consider the function given by . Suppose we select input numbers closer and closer to the number 4. As input numbers approach 4 from either side, approaches 11.  An arrow, , represents \"approaches from either side.\" The statement above can be written: . The number 11 is the limit, abbreviated as: .   Graph of near        Limit of a Function   A function has the limit as approaches from either side, written , if all values for are close to for values of that are arbitrarily close, but not equal, to .    Limits and function values are not the same thing. Finding a limit is not the same as computing ; a limit looks at where the function is going as it gets close to a point, not where it actually is at that point .   The Dynamic Limit Process   Find    The value is undefined ( ). However, factoring gives . As , .    The value of the function is not defined, since plugging in produces whereas the values at points close to 1, like and so on, are perfectly well defined and can be calculated. And if you calculate several of them you will notice a definite trend: as you get closer to 1, the values converge to 2.  Suppose is given, and we would like to find the limit as . We are interested in points in a neighborhood around points close to points such that is a very small (positive or negative) number. If we call this small number , then this simply means   Note that even if is undefined at (like the example above), these nearby values can be calculated and the limit determined.  We can use the -method to find limits by looking at a neighborhood as .      The Three-Step Process for Limits  The dynamic process of taking a limit is here broken down into three natural steps. To find :      Evaluate  , a generic value at a nearby point.     Simplify , collect terms, cancel common factors in the numerator and denominator, and otherwise reorganize this expression into a convenient form.     Limit : Now we can let . The remainders small (h) go to zero, and we are left with the residual limit:        Using the -method   Find       Notice that is undefined, since both numerator and denominator zero out at .    Plug in into the expression for : with minimal expansion of terms.    Simplify and put into useful form: after canceling in the numerator and denominator.    Now let without any problem:      Therefore,      Rational Function with Quadratic Factors   If , find .     Method 1: Factoring   First, we factor the quadratic expressions in the numerator and denominator: Since we are taking the limit as , we assume and cancel the common factor:    Method 2: The -method   Let . As , . We substitute into the function: Canceling the and letting :     "
},
{
  "id": "sec-limits-concept-4",
  "level": "2",
  "url": "sec-limits-concept.html#sec-limits-concept-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "From the left: From the right: "
},
{
  "id": "fig-limit-intro-graph",
  "level": "2",
  "url": "sec-limits-concept.html#fig-limit-intro-graph",
  "type": "Figure",
  "number": "1",
  "title": "",
  "body": " Graph of near     "
},
{
  "id": "example-polynomial-limit",
  "level": "2",
  "url": "sec-limits-concept.html#example-polynomial-limit",
  "type": "Example",
  "number": "2",
  "title": "Limit of a Polynomial.",
  "body": " Limit of a Polynomial   Find . Justify your answer.    Since is a polynomial, it is continuous everywhere. We can find the limit by direct substitution: .   "
},
{
  "id": "example-numerical-approach",
  "level": "2",
  "url": "sec-limits-concept.html#example-numerical-approach",
  "type": "Example",
  "number": "3",
  "title": "Numerical Exploration of a Hole.",
  "body": " Numerical Exploration of a Hole   Consider the function: . What happens to as gets closer to ?   Numerical Values for near          1.1  3.31  0.9  2.71    1.01  3.0301  0.99  2.9701    1.001  3.003  0.999  2.997    1.0001  3.0003  0.9999  2.9997       As approaches 1 from both the left and the right, the values of approach 3. Note that is undefined, but the limit exists.   "
},
{
  "id": "ex-rational-limit-direct",
  "level": "2",
  "url": "sec-limits-concept.html#ex-rational-limit-direct",
  "type": "Checkpoint",
  "number": "5",
  "title": "Direct Substitution in a Rational Function.",
  "body": " Direct Substitution in a Rational Function   Calculate    By direct substitution: .   "
},
{
  "id": "ex-rational-limit-factor",
  "level": "2",
  "url": "sec-limits-concept.html#ex-rational-limit-factor",
  "type": "Checkpoint",
  "number": "6",
  "title": "Limit by Factoring.",
  "body": " Limit by Factoring   Calculate    Factoring numerator and denominator: .   "
},
{
  "id": "fig-limit-graph",
  "level": "2",
  "url": "sec-limits-concept.html#fig-limit-graph",
  "type": "Figure",
  "number": "7",
  "title": "",
  "body": " Graph of near     "
},
{
  "id": "def-limit",
  "level": "2",
  "url": "sec-limits-concept.html#def-limit",
  "type": "Definition",
  "number": "8",
  "title": "Limit of a Function.",
  "body": " Limit of a Function   A function has the limit as approaches from either side, written , if all values for are close to for values of that are arbitrarily close, but not equal, to .   "
},
{
  "id": "example-dynamic-limit",
  "level": "2",
  "url": "sec-limits-concept.html#example-dynamic-limit",
  "type": "Example",
  "number": "9",
  "title": "The Dynamic Limit Process.",
  "body": " The Dynamic Limit Process   Find    The value is undefined ( ). However, factoring gives . As , .   "
},
{
  "id": "remark-limit-steps",
  "level": "2",
  "url": "sec-limits-concept.html#remark-limit-steps",
  "type": "Remark",
  "number": "10",
  "title": "The Three-Step Process for Limits.",
  "body": " The Three-Step Process for Limits  The dynamic process of taking a limit is here broken down into three natural steps. To find :      Evaluate  , a generic value at a nearby point.     Simplify , collect terms, cancel common factors in the numerator and denominator, and otherwise reorganize this expression into a convenient form.     Limit : Now we can let . The remainders small (h) go to zero, and we are left with the residual limit:      "
},
{
  "id": "example-h-method-example",
  "level": "2",
  "url": "sec-limits-concept.html#example-h-method-example",
  "type": "Example",
  "number": "11",
  "title": "Using the <span class=\"process-math\">\\(h\\)<\/span>-method.",
  "body": " Using the -method   Find       Notice that is undefined, since both numerator and denominator zero out at .    Plug in into the expression for : with minimal expansion of terms.    Simplify and put into useful form: after canceling in the numerator and denominator.    Now let without any problem:      Therefore,    "
},
{
  "id": "ex-complex-rational",
  "level": "2",
  "url": "sec-limits-concept.html#ex-complex-rational",
  "type": "Checkpoint",
  "number": "12",
  "title": "Rational Function with Quadratic Factors.",
  "body": " Rational Function with Quadratic Factors   If , find .     Method 1: Factoring   First, we factor the quadratic expressions in the numerator and denominator: Since we are taking the limit as , we assume and cancel the common factor:    Method 2: The -method   Let . As , . We substitute into the function: Canceling the and letting :    "
},
{
  "id": "sec-techniques-limits",
  "level": "1",
  "url": "sec-techniques-limits.html",
  "type": "Section",
  "number": "",
  "title": "Techniques for Finding Limits",
  "body": " Techniques for Finding Limits   Limit Principles   If and , then:     Sum\/Difference:   Product:   Quotient:  , if   If is a polynomial,  If is a rational function, (where defined)      We can therefore use ordinary substitution and algebraic simplification, such as canceling out common factors in the numerator and denominator of a rational function, to help us determine limits.   Limit by Direct Substitution   Find .    By direct substitution: to calculate this limit we \"plug in\" 2 in place of to get: .     Limit by Factoring   Find .    Here, when we \"plug in\" -3 we get . We factor the denominator: this means that -3 is a root of both the numerator and the denominator. Hence we can factor out from both the numerator and the denominator to get: .     Limit involving Square Roots   If , find .    Factoring the numerator as a difference of squares: .     Mixed Limit Practice   Find the following limits:                   Limit of a Piecewise Function   Find where      The graph of showing the limit as .   A line with slope 1 and y-intercept 1. There is an open circle at (1,2) and a solid dot at (1, pi).     The limit depends only on values near 1, not at . As , . Thus, the limit is .     Limits Practice     Evaluate    Direct substitution results in the indeterminate form . We rationalize the numerator by multiplying by the conjugate: Simplifying the numerator gives , which allows us to cancel the in the denominator:        Evaluate    Since we are approaching 5 from the right ( ), the term is a small positive number. We can evaluate this by direct substitution:        Evaluate    First, find a common denominator for the second term: Now multiply by the conjugate : Canceling and substituting gives .       Evaluate    Combine the fractions over the common denominator: Factor the difference of squares:        Evaluate    Multiply by the conjugate of the denominator, : Canceling leaves .      Sandwich Theorem (Squeeze Theorem)   Suppose near (except possibly at ). If , then .     Proving a Limit with Sandwich Theorem   Prove .    Since , we have: Multiply by (which is always ): Since and , by the Sandwich Theorem, the limit is 0.      Find by using the Sandwich Theorem.    For any real number , we know the absolute value is bounded by: To squeeze specifically, we use the fact that: More formally, observe that for all in the interval : Since and , by the Sandwich Theorem:     "
},
{
  "id": "thm-limit-principles",
  "level": "2",
  "url": "sec-techniques-limits.html#thm-limit-principles",
  "type": "Theorem",
  "number": "13",
  "title": "Limit Principles.",
  "body": " Limit Principles   If and , then:     Sum\/Difference:   Product:   Quotient:  , if   If is a polynomial,  If is a rational function, (where defined)     "
},
{
  "id": "example-substitution",
  "level": "2",
  "url": "sec-techniques-limits.html#example-substitution",
  "type": "Example",
  "number": "14",
  "title": "Limit by Direct Substitution.",
  "body": " Limit by Direct Substitution   Find .    By direct substitution: to calculate this limit we \"plug in\" 2 in place of to get: .   "
},
{
  "id": "example-factoring-negative",
  "level": "2",
  "url": "sec-techniques-limits.html#example-factoring-negative",
  "type": "Example",
  "number": "15",
  "title": "Limit by Factoring.",
  "body": " Limit by Factoring   Find .    Here, when we \"plug in\" -3 we get . We factor the denominator: this means that -3 is a root of both the numerator and the denominator. Hence we can factor out from both the numerator and the denominator to get: .   "
},
{
  "id": "ex-conjugate-simple",
  "level": "2",
  "url": "sec-techniques-limits.html#ex-conjugate-simple",
  "type": "Example",
  "number": "16",
  "title": "Limit involving Square Roots.",
  "body": " Limit involving Square Roots   If , find .    Factoring the numerator as a difference of squares: .   "
},
{
  "id": "ex-various-techniques",
  "level": "2",
  "url": "sec-techniques-limits.html#ex-various-techniques",
  "type": "Checkpoint",
  "number": "17",
  "title": "Mixed Limit Practice.",
  "body": " Mixed Limit Practice   Find the following limits:                 "
},
{
  "id": "ex-piecewise",
  "level": "2",
  "url": "sec-techniques-limits.html#ex-piecewise",
  "type": "Checkpoint",
  "number": "18",
  "title": "Limit of a Piecewise Function.",
  "body": " Limit of a Piecewise Function   Find where      The graph of showing the limit as .   A line with slope 1 and y-intercept 1. There is an open circle at (1,2) and a solid dot at (1, pi).     The limit depends only on values near 1, not at . As , . Thus, the limit is .   "
},
{
  "id": "exercises-limits-algebraic-2",
  "level": "2",
  "url": "sec-techniques-limits.html#exercises-limits-algebraic-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Evaluate    Direct substitution results in the indeterminate form . We rationalize the numerator by multiplying by the conjugate: Simplifying the numerator gives , which allows us to cancel the in the denominator:    "
},
{
  "id": "exercises-limits-algebraic-3",
  "level": "2",
  "url": "sec-techniques-limits.html#exercises-limits-algebraic-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Evaluate    Since we are approaching 5 from the right ( ), the term is a small positive number. We can evaluate this by direct substitution:    "
},
{
  "id": "exercises-limits-algebraic-4",
  "level": "2",
  "url": "sec-techniques-limits.html#exercises-limits-algebraic-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Evaluate    First, find a common denominator for the second term: Now multiply by the conjugate : Canceling and substituting gives .   "
},
{
  "id": "exercises-limits-algebraic-5",
  "level": "2",
  "url": "sec-techniques-limits.html#exercises-limits-algebraic-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Evaluate    Combine the fractions over the common denominator: Factor the difference of squares:    "
},
{
  "id": "exercises-limits-algebraic-6",
  "level": "2",
  "url": "sec-techniques-limits.html#exercises-limits-algebraic-6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Evaluate    Multiply by the conjugate of the denominator, : Canceling leaves .   "
},
{
  "id": "thm-sandwich",
  "level": "2",
  "url": "sec-techniques-limits.html#thm-sandwich",
  "type": "Theorem",
  "number": "20",
  "title": "Sandwich Theorem (Squeeze Theorem).",
  "body": " Sandwich Theorem (Squeeze Theorem)   Suppose near (except possibly at ). If , then .   "
},
{
  "id": "example-sandwich-sine",
  "level": "2",
  "url": "sec-techniques-limits.html#example-sandwich-sine",
  "type": "Example",
  "number": "21",
  "title": "Proving a Limit with Sandwich Theorem.",
  "body": " Proving a Limit with Sandwich Theorem   Prove .    Since , we have: Multiply by (which is always ): Since and , by the Sandwich Theorem, the limit is 0.   "
},
{
  "id": "sec-techniques-limits-12",
  "level": "2",
  "url": "sec-techniques-limits.html#sec-techniques-limits-12",
  "type": "Checkpoint",
  "number": "22",
  "title": "",
  "body": "  Find by using the Sandwich Theorem.    For any real number , we know the absolute value is bounded by: To squeeze specifically, we use the fact that: More formally, observe that for all in the interval : Since and , by the Sandwich Theorem:    "
},
{
  "id": "sec-one-sided-limits",
  "level": "1",
  "url": "sec-one-sided-limits.html",
  "type": "Section",
  "number": "",
  "title": "One-sided Limits",
  "body": " One-sided Limits   The phrase from either side used in the preceding definition is very important. The notation we use to indicate the limit from the right and to indicate the limit from the left. If both limits exist and are the same , then we say the limit exists.    Let . First let's look at the meaning of the limit of as approaches 5 from the right. This is written as: In , the means we are approaching 5 from the positive side. This side is to the right of 5 on a number line. Now as approaches 5 from the right, note that is always positive. The limit from the right is of course zero, but the fact that is always positive will be used later on.  Now, the limit of as approaches 5 from the left is the same notion. It is written as: The sign means we are approaching 5 from the negative side. This side is to the left of 5 on a number line. Note that as approaches 5 from the left, is always negative. The limit from the left is of course zero, but we will make use of the fact that is always negative later on.    Two-sided Limit   A function has the limit  as approaches if the limit from the left exists and the limit from the right exists and both limits are . That is:       Show that does not exist.    To show that the two-sided limit does not exist, we evaluate the one-sided limits:   As approaches from the right ( ), the values of are positive and decreasing, so increases without bound:     As approaches from the left ( ), the values of are negative and increasing toward , so decreases without bound:      Since the one-sided limits are not equal (and do not approach a finite real number), the two-sided limit  does not exist .      Consider the function defined as follows: Graph the function and find each of the following limits, if they exist:         Graph of   A piecewise function with a line y=2x+2 for x less than 1 and y=2x-2 for x greater than or equal to 1.        Check one-sided limits at :  Since , the limit does not exist (DNE) .    At , we only use the first piece ( ):          Sketch the graph of an example of a function that satisfies all the given conditions.     , , .         , , , , , and is undefined.         Possible solutions for the graphs:     Conditions: , , and .        Conditions: , , , , , and is undefined.           Use the graph of the function below to find the indicated limits.    A piecewise function with a jump at x=2 and a hole at x=4.                            By inspecting the graph:    (The one-sided limits are not equal.)    (The limit exists even though .)        If , find:     We rewrite the function by using the definition of absolute value: Now we evaluate the limits:   From the left: .    From the right: .    Two-sided limit: Since , the limit  does not exist (DNE) .        Special Trigonometric Limit        Show that .    We use the special limit . Multiply the numerator and denominator to match the argument :        Find .    Let . As , .       Find .    Direct substitution results in the indeterminate form . To evaluate this, we multiply the numerator and denominator by the conjugate : Using the Pythagorean identity , we rewrite the limit: Applying the special limit : Thus, .    "
},
{
  "id": "insight-one-sided-limits",
  "level": "2",
  "url": "sec-one-sided-limits.html#insight-one-sided-limits",
  "type": "Insight",
  "number": "23",
  "title": "",
  "body": " The phrase from either side used in the preceding definition is very important. The notation we use to indicate the limit from the right and to indicate the limit from the left. If both limits exist and are the same , then we say the limit exists.  "
},
{
  "id": "theorem-two-sided-limit",
  "level": "2",
  "url": "sec-one-sided-limits.html#theorem-two-sided-limit",
  "type": "Theorem",
  "number": "24",
  "title": "Two-sided Limit.",
  "body": " Two-sided Limit   A function has the limit  as approaches if the limit from the left exists and the limit from the right exists and both limits are . That is:    "
},
{
  "id": "example-limit-one-over-x",
  "level": "2",
  "url": "sec-one-sided-limits.html#example-limit-one-over-x",
  "type": "Example",
  "number": "25",
  "title": "",
  "body": "  Show that does not exist.    To show that the two-sided limit does not exist, we evaluate the one-sided limits:   As approaches from the right ( ), the values of are positive and decreasing, so increases without bound:     As approaches from the left ( ), the values of are negative and increasing toward , so decreases without bound:      Since the one-sided limits are not equal (and do not approach a finite real number), the two-sided limit  does not exist .   "
},
{
  "id": "example-piecewise-limit",
  "level": "2",
  "url": "sec-one-sided-limits.html#example-piecewise-limit",
  "type": "Example",
  "number": "26",
  "title": "",
  "body": "  Consider the function defined as follows: Graph the function and find each of the following limits, if they exist:         Graph of   A piecewise function with a line y=2x+2 for x less than 1 and y=2x-2 for x greater than or equal to 1.        Check one-sided limits at :  Since , the limit does not exist (DNE) .    At , we only use the first piece ( ):       "
},
{
  "id": "example-sketch-one-sided-limits",
  "level": "2",
  "url": "sec-one-sided-limits.html#example-sketch-one-sided-limits",
  "type": "Example",
  "number": "28",
  "title": "",
  "body": "  Sketch the graph of an example of a function that satisfies all the given conditions.     , , .         , , , , , and is undefined.         Possible solutions for the graphs:     Conditions: , , and .        Conditions: , , , , , and is undefined.        "
},
{
  "id": "sec-one-sided-limits-8",
  "level": "2",
  "url": "sec-one-sided-limits.html#sec-one-sided-limits-8",
  "type": "Checkpoint",
  "number": "29",
  "title": "",
  "body": "  Use the graph of the function below to find the indicated limits.    A piecewise function with a jump at x=2 and a hole at x=4.                            By inspecting the graph:    (The one-sided limits are not equal.)    (The limit exists even though .)     "
},
{
  "id": "sec-one-sided-limits-9",
  "level": "2",
  "url": "sec-one-sided-limits.html#sec-one-sided-limits-9",
  "type": "Checkpoint",
  "number": "31",
  "title": "",
  "body": "  If , find:     We rewrite the function by using the definition of absolute value: Now we evaluate the limits:   From the left: .    From the right: .    Two-sided limit: Since , the limit  does not exist (DNE) .      "
},
{
  "id": "example-sin-over-x",
  "level": "2",
  "url": "sec-one-sided-limits.html#example-sin-over-x",
  "type": "Example",
  "number": "32",
  "title": "",
  "body": "  Show that .    We use the special limit . Multiply the numerator and denominator to match the argument :     "
},
{
  "id": "sec-one-sided-limits-12",
  "level": "2",
  "url": "sec-one-sided-limits.html#sec-one-sided-limits-12",
  "type": "Checkpoint",
  "number": "33",
  "title": "",
  "body": "  Find .    Let . As , .    "
},
{
  "id": "sec-one-sided-limits-13",
  "level": "2",
  "url": "sec-one-sided-limits.html#sec-one-sided-limits-13",
  "type": "Checkpoint",
  "number": "34",
  "title": "",
  "body": "  Find .    Direct substitution results in the indeterminate form . To evaluate this, we multiply the numerator and denominator by the conjugate : Using the Pythagorean identity , we rewrite the limit: Applying the special limit : Thus, .   "
},
{
  "id": "continuity-definition",
  "level": "1",
  "url": "continuity-definition.html",
  "type": "Section",
  "number": "",
  "title": "Continuity",
  "body": " Continuity   In this section, we will discuss the concept of continuity and how it relates to limits and derivatives.    The limit at a number  does not depend on the function value at , even if that value, , exists. That is, whether or not a limit exists at has nothing to do with the function value .    Continuity at a point  When the limit of a function is the same as its function value, it satisfies a condition called continuity at a point . Continuous functions do not have jumps or holes in their graphs.    Continuity at a Point   A function is said to be continuous at a point  if the following three conditions are satisfied:   The function is defined at (i.e., exists).    The limit of as approaches exists (i.e., exists).    The limit of the function equals the function value: .      A function is continuous over an interval I if it is continuous at each point in I.   If a function is continuous at every point in its domain, we say that the function is continuous on its domain.  There are three types of discontinuous functions which are removable, jump and infinite discontinuous . Roughly speaking, we say that a function is continuous at if its graph has no breaks and passes through the point .    Let be defined as:     We evaluate the one-sided limits as approaches : Therefore, would be continuous at if we define .      Let be defined as:   This function is defined on the interval , which is the union of the intervals and .    The point is a point of continuity because the limit exists (as a one-sided limit) and is equal to (or ), which is also the value of the function:   The function is also continuous at any point in the open intervals and . However, at the point , the function is not continuous because the two-sided limit does not exist. While the one-sided limits exist: they are different, so the limit does not exist.  Since the function is not defined at , it does not make sense to discuss continuity there; exists, but it cannot be compared to an undefined . Thus, the function has exactly one discontinuity at and is continuous elsewhere on its domain.     Absolute Value function Continuity   Show that the function is continuous at every value in its domain.    Recall that the absolute value function is defined piecewise as:   We consider three cases for a real number :     If , then for values of sufficiently close to , . Since , we have .    If , then for values of sufficiently close to , . Since , we have .    If , we check the one-sided limits:    Since the left and right limits are equal, . Since , the function is continuous at .     Therefore, is continuous for all .     Continuity Analysis   Find the points at which the function in the figure is continuous and at which is not continuous. The vertical axis represents the -values.   A piecewise function graph.   Graph with various discontinuities at integers 1 through 4.       The function is continuous except at the following points:     At , there is a jump discontinuity.    At , , and , there are removable discontinuities where the limit exists but does not equal the function value.        Continuity at Specific Points   Determine whether each function is continuous at the given point.       at .    Since is a polynomial, it is continuous everywhere. Specifically, . Since , the function is continuous at .        at .    The function is not defined at because the denominator becomes zero. Since does not exist, the function is not continuous at . (Note: There is a removable discontinuity at this point).       The greatest integer function at integer points.    Let be an integer. As , , so . As , , so . Since the one-sided limits are not equal, the limit does not exist, and the function is not continuous at any integer point.      Continuity Principles   The following principles describe the continuity of various functions:     Any constant function is continuous.    Any polynomial function is continuous.    Trigonometric functions and their inverse trigonometric functions (such as , , and ) are continuous on their domains.    Exponential functions and logarithmic functions are continuous on their domains.    For any positive integer and any continuous function , the functions and are continuous. When is even, the domain of is restricted to values of for which .    If and are continuous, then their sum , difference , and product are also continuous.    If and are continuous, then the quotient is continuous for all such that .    If is continuous at with , and is continuous at , then the composite function is continuous at . That is: In fact, if is continuous at and is continuous at , then the composite function is continuous at .         Find the following limit:     Since the cosine function and the linear terms inside the parentheses are continuous, we can evaluate the limit by direct substitution:       Provide an argument to show that is continuous.    The function is a polynomial. According to the , any polynomial function is continuous for all real numbers.  Alternatively, we can observe that is formed by the sum and difference of the power functions , , and the constant . Since each of these individual terms is continuous, their sum must also be continuous at every value of .       Show that the rational function is continuous for all values except .    The function is a rational function, which is the quotient of two polynomials. According to the , a rational function is continuous at all points in its domain.  The domain of consists of all real numbers where the denominator is non-zero. Since only when , the function is continuous for all .      Show that is continuous everywhere (at every real number ).    Recall that . Since the power function is a polynomial and therefore continuous, and the square root function is continuous for all , their composition is continuous.  Alternatively, for any real number , we can show that by considering cases for , , and using one-sided limits. Since the limit always equals the function value, is continuous at every real number .       Show that     First, we simplify the rational expression inside the arcsine. Notice that the denominator can be factored as a difference of squares: .  For , we have:   Now, we apply the limit inside the function, justified by the continuity of the function:       Show that is continuous on where     We check the continuity of by examining the two pieces and the transition point:    For , . Since the sine function is continuous everywhere, is continuous on the interval .    For , . Since the cosine function is continuous everywhere, is continuous on the interval .    At , we check the one-sided limits and the function value:     Since , the function is continuous at .    Therefore, is continuous on .      Where are the following functions continuous?          The function is the composition of the sine function and the polynomial function . Since both and are continuous on , their composition is also continuous everywhere.           The function is continuous wherever its component parts are continuous and the argument of the logarithm is positive. The functions and are continuous for all real numbers. However, is only continuous for .  We must have , which means . This occurs when is not an odd multiple of . Therefore, is continuous on its domain: .        If the product function is continuous at , must and be continuous at ? Give reasons for your answer.    No, and do not need to be continuous at .  For example, consider and . Here, is discontinuous at , but the product is: which simplifies to for all . Since is a polynomial, it is continuous at .      Give an example of functions and , both continuous at , for which the composite is discontinuous at . Does this contradict the Continuity Principles theorem? Give reasons for your answer.    This is actually impossible. If is continuous at and is continuous at , then the composition must be continuous at .  The confusion often arises if is continuous at but not continuous at the value . For example, let (constant) and . Both are continuous at , but for all , which is actually continuous.  It does not contradict because the theorem specifically requires to be continuous at the output of (i.e., at ), not just at the same point .       Which of the following statements about the function graphed here are true. Explain your answers.   Graph of the piecewise function   A piecewise function with a curve and several line segments with open and closed circles.       Does exist?    Does exist?    Does exist?    Does ?    Is continuous at ?        Yes, as approaches from the left, the function values approach . Thus, .    Yes, as approaches from the right, the function values approach . Thus, .    Yes. Since the left-hand limit and the right-hand limit are both equal to , the overall limit exists and .    No. While the limit is , the solid dot on the graph shows that . Therefore, .    No. For a function to be continuous at a point, the limit must exist and be equal to the function value. Since , the function is not continuous at .      By applying , we can see that the limit exists. Furthermore, as shown in , there is a jump discontinuity at .    Based on the graph of the function as shown in , answer the following questions regarding continuity at :    Does exist?    Does exist?    Does exist?    Does ?    Is continuous at ?        Yes, as approaches from the left (along the curve), the function values approach . Thus, .    Yes, as approaches from the right (along the line segment), the function values approach . Thus, .    No. Since the left-hand limit ( ) and the right-hand limit ( ) are not equal, the two-sided limit does not exist.    No. Since the limit does not exist, it cannot be equal to the function value. Furthermore, is undefined as there is no solid dot at .    No. The function is not continuous at because the limit does not exist (a jump discontinuity) and the function is not defined there.        Consider the piecewise function :     Graph the function .   Colored graph of the piecewise function   Piecewise function with segments in blue, red, and green.      Does exist?  Does exist?  Does ?  Is continuous at ?  Does exist?  Does exist?  Does ?  Is continuous at ?  Is defined at ?  Is continuous at ?  To what new value should be changed to remove the discontinuity?     Using and the function definition:   See the graph above.  Yes, .  Yes, .  Yes, both are equal to .  Yes, the right-hand limit matches the function value at the endpoint.  Yes, .  Yes, since and , the limit is .  No, .  No, there is a removable discontinuity at .  No, the inequalities and do not include .  No, a function cannot be continuous where it is not defined.  Setting would make the function continuous at that point.     "
},
{
  "id": "continuity-definition-3",
  "level": "2",
  "url": "continuity-definition.html#continuity-definition-3",
  "type": "Insight",
  "number": "35",
  "title": "",
  "body": " The limit at a number  does not depend on the function value at , even if that value, , exists. That is, whether or not a limit exists at has nothing to do with the function value .  "
},
{
  "id": "note-continuity-2",
  "level": "2",
  "url": "continuity-definition.html#note-continuity-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "continuity at a point "
},
{
  "id": "def-continuity-at-a-point",
  "level": "2",
  "url": "continuity-definition.html#def-continuity-at-a-point",
  "type": "Definition",
  "number": "36",
  "title": "Continuity at a Point.",
  "body": " Continuity at a Point   A function is said to be continuous at a point  if the following three conditions are satisfied:   The function is defined at (i.e., exists).    The limit of as approaches exists (i.e., exists).    The limit of the function equals the function value: .      A function is continuous over an interval I if it is continuous at each point in I.  "
},
{
  "id": "continuity-definition-7",
  "level": "2",
  "url": "continuity-definition.html#continuity-definition-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "removable, jump and infinite discontinuous "
},
{
  "id": "example-defining-continuity",
  "level": "2",
  "url": "continuity-definition.html#example-defining-continuity",
  "type": "Example",
  "number": "37",
  "title": "",
  "body": "  Let be defined as:     We evaluate the one-sided limits as approaches : Therefore, would be continuous at if we define .   "
},
{
  "id": "example-continuity-analysis",
  "level": "2",
  "url": "continuity-definition.html#example-continuity-analysis",
  "type": "Example",
  "number": "38",
  "title": "",
  "body": "  Let be defined as:   This function is defined on the interval , which is the union of the intervals and .    The point is a point of continuity because the limit exists (as a one-sided limit) and is equal to (or ), which is also the value of the function:   The function is also continuous at any point in the open intervals and . However, at the point , the function is not continuous because the two-sided limit does not exist. While the one-sided limits exist: they are different, so the limit does not exist.  Since the function is not defined at , it does not make sense to discuss continuity there; exists, but it cannot be compared to an undefined . Thus, the function has exactly one discontinuity at and is continuous elsewhere on its domain.   "
},
{
  "id": "continuity-definition-10",
  "level": "2",
  "url": "continuity-definition.html#continuity-definition-10",
  "type": "Example",
  "number": "39",
  "title": "Absolute Value function Continuity.",
  "body": " Absolute Value function Continuity   Show that the function is continuous at every value in its domain.    Recall that the absolute value function is defined piecewise as:   We consider three cases for a real number :     If , then for values of sufficiently close to , . Since , we have .    If , then for values of sufficiently close to , . Since , we have .    If , we check the one-sided limits:    Since the left and right limits are equal, . Since , the function is continuous at .     Therefore, is continuous for all .   "
},
{
  "id": "example-continuity-analysis-graph",
  "level": "2",
  "url": "continuity-definition.html#example-continuity-analysis-graph",
  "type": "Example",
  "number": "40",
  "title": "Continuity Analysis.",
  "body": " Continuity Analysis   Find the points at which the function in the figure is continuous and at which is not continuous. The vertical axis represents the -values.   A piecewise function graph.   Graph with various discontinuities at integers 1 through 4.       The function is continuous except at the following points:     At , there is a jump discontinuity.    At , , and , there are removable discontinuities where the limit exists but does not equal the function value.      "
},
{
  "id": "ex-continuity-check",
  "level": "2",
  "url": "continuity-definition.html#ex-continuity-check",
  "type": "Checkpoint",
  "number": "42",
  "title": "Continuity at Specific Points.",
  "body": " Continuity at Specific Points   Determine whether each function is continuous at the given point.       at .    Since is a polynomial, it is continuous everywhere. Specifically, . Since , the function is continuous at .        at .    The function is not defined at because the denominator becomes zero. Since does not exist, the function is not continuous at . (Note: There is a removable discontinuity at this point).       The greatest integer function at integer points.    Let be an integer. As , , so . As , , so . Since the one-sided limits are not equal, the limit does not exist, and the function is not continuous at any integer point.    "
},
{
  "id": "thm-continuity-principles",
  "level": "2",
  "url": "continuity-definition.html#thm-continuity-principles",
  "type": "Theorem",
  "number": "43",
  "title": "Continuity Principles.",
  "body": " Continuity Principles   The following principles describe the continuity of various functions:     Any constant function is continuous.    Any polynomial function is continuous.    Trigonometric functions and their inverse trigonometric functions (such as , , and ) are continuous on their domains.    Exponential functions and logarithmic functions are continuous on their domains.    For any positive integer and any continuous function , the functions and are continuous. When is even, the domain of is restricted to values of for which .    If and are continuous, then their sum , difference , and product are also continuous.    If and are continuous, then the quotient is continuous for all such that .    If is continuous at with , and is continuous at , then the composite function is continuous at . That is: In fact, if is continuous at and is continuous at , then the composite function is continuous at .      "
},
{
  "id": "ex-limit-cosine",
  "level": "2",
  "url": "continuity-definition.html#ex-limit-cosine",
  "type": "Example",
  "number": "44",
  "title": "",
  "body": "  Find the following limit:     Since the cosine function and the linear terms inside the parentheses are continuous, we can evaluate the limit by direct substitution:    "
},
{
  "id": "ex-poly-continuity",
  "level": "2",
  "url": "continuity-definition.html#ex-poly-continuity",
  "type": "Example",
  "number": "45",
  "title": "",
  "body": "  Provide an argument to show that is continuous.    The function is a polynomial. According to the , any polynomial function is continuous for all real numbers.  Alternatively, we can observe that is formed by the sum and difference of the power functions , , and the constant . Since each of these individual terms is continuous, their sum must also be continuous at every value of .   "
},
{
  "id": "continuity-definition-16",
  "level": "2",
  "url": "continuity-definition.html#continuity-definition-16",
  "type": "Checkpoint",
  "number": "46",
  "title": "",
  "body": "   Show that the rational function is continuous for all values except .    The function is a rational function, which is the quotient of two polynomials. According to the , a rational function is continuous at all points in its domain.  The domain of consists of all real numbers where the denominator is non-zero. Since only when , the function is continuous for all .      Show that is continuous everywhere (at every real number ).    Recall that . Since the power function is a polynomial and therefore continuous, and the square root function is continuous for all , their composition is continuous.  Alternatively, for any real number , we can show that by considering cases for , , and using one-sided limits. Since the limit always equals the function value, is continuous at every real number .    "
},
{
  "id": "continuity-definition-17",
  "level": "2",
  "url": "continuity-definition.html#continuity-definition-17",
  "type": "Checkpoint",
  "number": "47",
  "title": "",
  "body": "  Show that     First, we simplify the rational expression inside the arcsine. Notice that the denominator can be factored as a difference of squares: .  For , we have:   Now, we apply the limit inside the function, justified by the continuity of the function:    "
},
{
  "id": "continuity-definition-18",
  "level": "2",
  "url": "continuity-definition.html#continuity-definition-18",
  "type": "Checkpoint",
  "number": "48",
  "title": "",
  "body": "  Show that is continuous on where     We check the continuity of by examining the two pieces and the transition point:    For , . Since the sine function is continuous everywhere, is continuous on the interval .    For , . Since the cosine function is continuous everywhere, is continuous on the interval .    At , we check the one-sided limits and the function value:     Since , the function is continuous at .    Therefore, is continuous on .   "
},
{
  "id": "continuity-definition-19",
  "level": "2",
  "url": "continuity-definition.html#continuity-definition-19",
  "type": "Checkpoint",
  "number": "49",
  "title": "",
  "body": "  Where are the following functions continuous?          The function is the composition of the sine function and the polynomial function . Since both and are continuous on , their composition is also continuous everywhere.           The function is continuous wherever its component parts are continuous and the argument of the logarithm is positive. The functions and are continuous for all real numbers. However, is only continuous for .  We must have , which means . This occurs when is not an odd multiple of . Therefore, is continuous on its domain: .    "
},
{
  "id": "continuity-definition-20",
  "level": "2",
  "url": "continuity-definition.html#continuity-definition-20",
  "type": "Checkpoint",
  "number": "50",
  "title": "",
  "body": "   If the product function is continuous at , must and be continuous at ? Give reasons for your answer.    No, and do not need to be continuous at .  For example, consider and . Here, is discontinuous at , but the product is: which simplifies to for all . Since is a polynomial, it is continuous at .      Give an example of functions and , both continuous at , for which the composite is discontinuous at . Does this contradict the Continuity Principles theorem? Give reasons for your answer.    This is actually impossible. If is continuous at and is continuous at , then the composition must be continuous at .  The confusion often arises if is continuous at but not continuous at the value . For example, let (constant) and . Both are continuous at , but for all , which is actually continuous.  It does not contradict because the theorem specifically requires to be continuous at the output of (i.e., at ), not just at the same point .    "
},
{
  "id": "continuity-definition-21",
  "level": "2",
  "url": "continuity-definition.html#continuity-definition-21",
  "type": "Checkpoint",
  "number": "51",
  "title": "",
  "body": "  Which of the following statements about the function graphed here are true. Explain your answers.   Graph of the piecewise function   A piecewise function with a curve and several line segments with open and closed circles.       Does exist?    Does exist?    Does exist?    Does ?    Is continuous at ?        Yes, as approaches from the left, the function values approach . Thus, .    Yes, as approaches from the right, the function values approach . Thus, .    Yes. Since the left-hand limit and the right-hand limit are both equal to , the overall limit exists and .    No. While the limit is , the solid dot on the graph shows that . Therefore, .    No. For a function to be continuous at a point, the limit must exist and be equal to the function value. Since , the function is not continuous at .     "
},
{
  "id": "continuity-definition-23",
  "level": "2",
  "url": "continuity-definition.html#continuity-definition-23",
  "type": "Checkpoint",
  "number": "53",
  "title": "",
  "body": "  Based on the graph of the function as shown in , answer the following questions regarding continuity at :    Does exist?    Does exist?    Does exist?    Does ?    Is continuous at ?        Yes, as approaches from the left (along the curve), the function values approach . Thus, .    Yes, as approaches from the right (along the line segment), the function values approach . Thus, .    No. Since the left-hand limit ( ) and the right-hand limit ( ) are not equal, the two-sided limit does not exist.    No. Since the limit does not exist, it cannot be equal to the function value. Furthermore, is undefined as there is no solid dot at .    No. The function is not continuous at because the limit does not exist (a jump discontinuity) and the function is not defined there.     "
},
{
  "id": "continuity-definition-24",
  "level": "2",
  "url": "continuity-definition.html#continuity-definition-24",
  "type": "Checkpoint",
  "number": "54",
  "title": "",
  "body": "  Consider the piecewise function :     Graph the function .   Colored graph of the piecewise function   Piecewise function with segments in blue, red, and green.      Does exist?  Does exist?  Does ?  Is continuous at ?  Does exist?  Does exist?  Does ?  Is continuous at ?  Is defined at ?  Is continuous at ?  To what new value should be changed to remove the discontinuity?     Using and the function definition:   See the graph above.  Yes, .  Yes, .  Yes, both are equal to .  Yes, the right-hand limit matches the function value at the endpoint.  Yes, .  Yes, since and , the limit is .  No, .  No, there is a removable discontinuity at .  No, the inequalities and do not include .  No, a function cannot be continuous where it is not defined.  Setting would make the function continuous at that point.    "
},
{
  "id": "limits-at-infinity",
  "level": "1",
  "url": "limits-at-infinity.html",
  "type": "Section",
  "number": "",
  "title": "Limits at Infinity",
  "body": " Limits at Infinity  In this section, we will explore limits at infinity, which describe the behavior of a function as the input grows without bound.  It may be that the limit does not exist at all! For example, if a function is defined as a ratio like the examples above, the denominator vanishes at our point of interest but unlike those examples the numerator does not vanish at to provide cancellation, then we get an undefined expression, like   In such a case, we must examine the values of the functions closely in the neighborhood of . If the values ``blow up\" to infinity on both sides of , we may say that the limit is infinity. Similarly, if the values converge to on both sides, then we may say that the limit is But otherwise, all we can say is that the limit is undefined.   The following examples demonstrate infinite limits and behavior near a vertical asymptote:       Since the numerator approaches and the denominator is always positive and approaches , the values are positive and become arbitrarily large near .       Since the numerator approaches and the denominator is always positive and approaches , all values are negative and large in magnitude near .       The values are negative and large to the right of , but positive and large on the left side. Because the one-sided limits do not match, the two-sided limit does not exist.      Limit at Infinity Rule       Limits at Infinity   Find the following limits:                    As , the fraction . Thus, .    As , . Dividing a constant by a large number gives .    Substituting , as , . Since , the limit is .    Rewriting as where . This is a fundamental limit equal to .        Find , if it exists.    We analyze the behavior of the function as approaches from both sides:    As , the term is negative but very small. Squaring it makes a very small positive number. Therefore, .    As , the term is positive and very small. Squaring it again results in a very small positive number. Therefore, .    Since the function increases without bound from both sides, we write: The limit does not exist as a finite real number, but it is described as being infinite.      Find , , and , if they exist.    We examine the behavior of the function near :    As , is a small negative number. Cubing a negative number keeps it negative, so is a very small negative value. Therefore:     As , is a small positive number. Cubing it results in a very small positive value. Therefore:     Because the left-hand limit ( ) and the right-hand limit ( ) are not the same, the two-sided limit does not exist:         If is a positive rational number and is any real number, then provided that is defined for all required values of .      Let . Find .    To calculate this limit, we first find the highest power of that appears in the function. In this case, it is , showing up in both the numerator and denominator. Next, we divide every term by raised to this highest power. In this case, we divide every term by .  We get:       Evaluate the following limits:                       Divide the numerator and denominator by :     Divide by the highest power :     Divide by : Since the numerator behaves like and , the limit is .       Summary of Limits of Rational Functions at Infinity  Let and be polynomial functions. To find , compare the degree of the numerator ( ) and the degree of the denominator ( ):      If : The limit is always .     If : The limit is the ratio of the leading coefficients.     If : The limit is or (determine the sign by checking the leading terms).        Find and if .    To evaluate these limits, we divide the numerator and denominator by .  For , we have :   For , we have (or ). This introduces a negative sign when we divide the denominator by the radical:       Find .    This limit has the indeterminate form . To evaluate it, we rationalize the expression by multiplying the numerator and the denominator by the conjugate:   Next, we divide the numerator and denominator by (noting that for ):     "
},
{
  "id": "ex-infinite-limits",
  "level": "2",
  "url": "limits-at-infinity.html#ex-infinite-limits",
  "type": "Example",
  "number": "56",
  "title": "",
  "body": " The following examples demonstrate infinite limits and behavior near a vertical asymptote:       Since the numerator approaches and the denominator is always positive and approaches , the values are positive and become arbitrarily large near .       Since the numerator approaches and the denominator is always positive and approaches , all values are negative and large in magnitude near .       The values are negative and large to the right of , but positive and large on the left side. Because the one-sided limits do not match, the two-sided limit does not exist.    "
},
{
  "id": "ex-limits-infinity-list",
  "level": "2",
  "url": "limits-at-infinity.html#ex-limits-infinity-list",
  "type": "Example",
  "number": "57",
  "title": "Limits at Infinity.",
  "body": " Limits at Infinity   Find the following limits:                    As , the fraction . Thus, .    As , . Dividing a constant by a large number gives .    Substituting , as , . Since , the limit is .    Rewriting as where . This is a fundamental limit equal to .     "
},
{
  "id": "ex-infinite-limit-rational",
  "level": "2",
  "url": "limits-at-infinity.html#ex-infinite-limit-rational",
  "type": "Example",
  "number": "58",
  "title": "",
  "body": "  Find , if it exists.    We analyze the behavior of the function as approaches from both sides:    As , the term is negative but very small. Squaring it makes a very small positive number. Therefore, .    As , the term is positive and very small. Squaring it again results in a very small positive number. Therefore, .    Since the function increases without bound from both sides, we write: The limit does not exist as a finite real number, but it is described as being infinite.   "
},
{
  "id": "limits-at-infinity-9",
  "level": "2",
  "url": "limits-at-infinity.html#limits-at-infinity-9",
  "type": "Checkpoint",
  "number": "59",
  "title": "",
  "body": "  Find , , and , if they exist.    We examine the behavior of the function near :    As , is a small negative number. Cubing a negative number keeps it negative, so is a very small negative value. Therefore:     As , is a small positive number. Cubing it results in a very small positive value. Therefore:     Because the left-hand limit ( ) and the right-hand limit ( ) are not the same, the two-sided limit does not exist:      "
},
{
  "id": "thm-limits-at-infinity-power",
  "level": "2",
  "url": "limits-at-infinity.html#thm-limits-at-infinity-power",
  "type": "Theorem",
  "number": "60",
  "title": "",
  "body": "  If is a positive rational number and is any real number, then provided that is defined for all required values of .   "
},
{
  "id": "ex-limit-rational-infinity",
  "level": "2",
  "url": "limits-at-infinity.html#ex-limit-rational-infinity",
  "type": "Example",
  "number": "61",
  "title": "",
  "body": "  Let . Find .    To calculate this limit, we first find the highest power of that appears in the function. In this case, it is , showing up in both the numerator and denominator. Next, we divide every term by raised to this highest power. In this case, we divide every term by .  We get:    "
},
{
  "id": "limits-at-infinity-12",
  "level": "2",
  "url": "limits-at-infinity.html#limits-at-infinity-12",
  "type": "Checkpoint",
  "number": "62",
  "title": "",
  "body": "  Evaluate the following limits:                       Divide the numerator and denominator by :     Divide by the highest power :     Divide by : Since the numerator behaves like and , the limit is .     "
},
{
  "id": "ex-limit-radical-infinity",
  "level": "2",
  "url": "limits-at-infinity.html#ex-limit-radical-infinity",
  "type": "Checkpoint",
  "number": "63",
  "title": "",
  "body": "  Find and if .    To evaluate these limits, we divide the numerator and denominator by .  For , we have :   For , we have (or ). This introduces a negative sign when we divide the denominator by the radical:    "
},
{
  "id": "limits-at-infinity-15",
  "level": "2",
  "url": "limits-at-infinity.html#limits-at-infinity-15",
  "type": "Checkpoint",
  "number": "64",
  "title": "",
  "body": "  Find .    This limit has the indeterminate form . To evaluate it, we rationalize the expression by multiplying the numerator and the denominator by the conjugate:   Next, we divide the numerator and denominator by (noting that for ):    "
},
{
  "id": "sec-rate-change-tangent-curves",
  "level": "1",
  "url": "sec-rate-change-tangent-curves.html",
  "type": "Section",
  "number": "",
  "title": "Rate of Change and Tangent Curves",
  "body": " Rate of Change and Tangent Curves  The rate of change of a function at a point is the slope of the tangent line to the graph of the function at that point. It can be calculated using limits.  If I drive 200 miles in 4 hours, my average velocity is miles per hour. Let represent the reading on my odometer at time . Suppose I want to find my average velocity during some time interval that begins when and ends hours later. Velocity can be calculated as follows: The subscript ave tells us this is an average velocity. My velocity does not have to be constant during this time (Even cruise control is not perfect).  Our common notion of velocity involves a change in distance and a change in time. Yet, a speedometer tells us the velocity of a car at any instant. We can do this mathematically using the idea of a limit.    Suppose . Complete the following table, letting .   Calculating Average Velocity as           1  16  9  7  7    0.1  9.61  9  0.61  6.1    0.01  9.0601  9  0.0601  6.01    0.001  9.006001  9  0.006001  6.001     Each of the values in the last column represents an average velocity. What seems to be happening to these values as gets smaller?  So when ,  .    As approaches , the values in the last column seem to be approaching . Therefore, when , the instantaneous velocity is .     Average Rate of Change  The average rate of change of with respect to , as changes from to , is the ratio of the change in output to the change in input:    The slope of the line from to is and the line is called a secant line .   Tangent Line   The Tangent line to the curve at the point is the line through with slope provided that this limit exists.    We sometimes refer to the slope of the tangent line to the curve at a point as the slope of the curve at the point.    Find the equation of the tangent line to the parabola at the point .   The parabola and its tangent line at   A parabola opening upward with a tangent line touching it at x equals negative 2.       Method using  We can also find the slope at using the alternative limit definition:   Factoring the numerator as a difference of squares:   This gives the same slope, , which we then use in the point-slope formula to find .    The average rate of change is called a difference quotient , given by:   We now use a different notation for average rates of change by eliminating the subscripts. Let be and be . To get from to , we calculate the change in input as .   Difference Quotient and Tangent Slope   The average rate of change of with respect to is also called the difference quotient . It is given by:   The difference quotient is equal to the slope of the line from a point to a point . The slope of the tangent line at is then:      Rate of Change of a Quadratic Function  Consider the function . We want to find the rate of change at the point .  Using the definition, we have:     Therefore, the rate of change of the function at is -4.     Find the slope of the curve at .    First, we find the -coordinate of the point:   Then, we find a formula for the -coordinate at a point near . By squaring the binomial and simplifying:   Now, we evaluate the limit of the difference quotient:   Our calculation shows that the slope of the line tangent to at is .      For , find a simplified form of the difference quotient .    Recall that the difference quotient is given by . Substituting , we have:     By taking the limit of the result from as , we find the derivative (the instantaneous rate of change) of the function.   The Derivative of  The derivative of , denoted as , is calculated as:    This result, , provides a formula to find the slope of the tangent line to the parabola at any point .    For , find a simplified form of the difference quotient.    We substitute into the difference quotient formula:     By taking the limit of the result from as , we find the derivative (the instantaneous rate of change) of the function.  This result, , provides a formula to find the slope of the tangent line to the cubic curve at any point .     For , find a simplified form of the difference quotient.    We substitute into the difference quotient formula:       Find the equation of the tangent line to the hyperbola at the point .     The hyperbola and its tangent line at   A hyperbola in the first and third quadrants with a tangent line at negative 1, negative 3.     First, we find the slope at by taking the limit of the difference quotient from the previous part:   Now, using the point-slope form with and :   The equation of the tangent line is .     "
},
{
  "id": "sec-rate-change-tangent-curves-5",
  "level": "2",
  "url": "sec-rate-change-tangent-curves.html#sec-rate-change-tangent-curves-5",
  "type": "Checkpoint",
  "number": "65",
  "title": "",
  "body": "  Suppose . Complete the following table, letting .   Calculating Average Velocity as           1  16  9  7  7    0.1  9.61  9  0.61  6.1    0.01  9.0601  9  0.0601  6.01    0.001  9.006001  9  0.006001  6.001     Each of the values in the last column represents an average velocity. What seems to be happening to these values as gets smaller?  So when ,  .    As approaches , the values in the last column seem to be approaching . Therefore, when , the instantaneous velocity is .   "
},
{
  "id": "asm-average-rate-of-change-2",
  "level": "2",
  "url": "sec-rate-change-tangent-curves.html#asm-average-rate-of-change-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "average rate of change of with respect to "
},
{
  "id": "sec-rate-change-tangent-curves-7",
  "level": "2",
  "url": "sec-rate-change-tangent-curves.html#sec-rate-change-tangent-curves-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "secant line "
},
{
  "id": "def-tangent-line",
  "level": "2",
  "url": "sec-rate-change-tangent-curves.html#def-tangent-line",
  "type": "Definition",
  "number": "67",
  "title": "Tangent Line.",
  "body": " Tangent Line   The Tangent line to the curve at the point is the line through with slope provided that this limit exists.   "
},
{
  "id": "sec-rate-change-tangent-curves-9",
  "level": "2",
  "url": "sec-rate-change-tangent-curves.html#sec-rate-change-tangent-curves-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slope of the curve "
},
{
  "id": "ex-tangent-parabola",
  "level": "2",
  "url": "sec-rate-change-tangent-curves.html#ex-tangent-parabola",
  "type": "Example",
  "number": "68",
  "title": "",
  "body": "  Find the equation of the tangent line to the parabola at the point .   The parabola and its tangent line at   A parabola opening upward with a tangent line touching it at x equals negative 2.       Method using  We can also find the slope at using the alternative limit definition:   Factoring the numerator as a difference of squares:   This gives the same slope, , which we then use in the point-slope formula to find .   "
},
{
  "id": "sec-rate-change-tangent-curves-11",
  "level": "2",
  "url": "sec-rate-change-tangent-curves.html#sec-rate-change-tangent-curves-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "difference quotient "
},
{
  "id": "def-difference-quotient-tangent",
  "level": "2",
  "url": "sec-rate-change-tangent-curves.html#def-difference-quotient-tangent",
  "type": "Definition",
  "number": "70",
  "title": "Difference Quotient and Tangent Slope.",
  "body": " Difference Quotient and Tangent Slope   The average rate of change of with respect to is also called the difference quotient . It is given by:   The difference quotient is equal to the slope of the line from a point to a point . The slope of the tangent line at is then:    "
},
{
  "id": "ex-rate-change",
  "level": "2",
  "url": "sec-rate-change-tangent-curves.html#ex-rate-change",
  "type": "Example",
  "number": "71",
  "title": "Rate of Change of a Quadratic Function.",
  "body": " Rate of Change of a Quadratic Function  Consider the function . We want to find the rate of change at the point .  Using the definition, we have:     Therefore, the rate of change of the function at is -4.  "
},
{
  "id": "ex-slope-reciprocal-squared",
  "level": "2",
  "url": "sec-rate-change-tangent-curves.html#ex-slope-reciprocal-squared",
  "type": "Example",
  "number": "72",
  "title": "",
  "body": "  Find the slope of the curve at .    First, we find the -coordinate of the point:   Then, we find a formula for the -coordinate at a point near . By squaring the binomial and simplifying:   Now, we evaluate the limit of the difference quotient:   Our calculation shows that the slope of the line tangent to at is .   "
},
{
  "id": "ex-simplified-difference-quotient",
  "level": "2",
  "url": "sec-rate-change-tangent-curves.html#ex-simplified-difference-quotient",
  "type": "Example",
  "number": "73",
  "title": "",
  "body": "  For , find a simplified form of the difference quotient .    Recall that the difference quotient is given by . Substituting , we have:    "
},
{
  "id": "ex-diff-quotient-cubic",
  "level": "2",
  "url": "sec-rate-change-tangent-curves.html#ex-diff-quotient-cubic",
  "type": "Example",
  "number": "74",
  "title": "",
  "body": "  For , find a simplified form of the difference quotient.    We substitute into the difference quotient formula:    "
},
{
  "id": "ex-diff-quotient-reciprocal",
  "level": "2",
  "url": "sec-rate-change-tangent-curves.html#ex-diff-quotient-reciprocal",
  "type": "Checkpoint",
  "number": "75",
  "title": "",
  "body": "   For , find a simplified form of the difference quotient.    We substitute into the difference quotient formula:       Find the equation of the tangent line to the hyperbola at the point .     The hyperbola and its tangent line at   A hyperbola in the first and third quadrants with a tangent line at negative 1, negative 3.     First, we find the slope at by taking the limit of the difference quotient from the previous part:   Now, using the point-slope form with and :   The equation of the tangent line is .    "
},
{
  "id": "sec-derivative-functions",
  "level": "1",
  "url": "sec-derivative-functions.html",
  "type": "Section",
  "number": "",
  "title": "The Derivative as a Function",
  "body": " The Derivative as a Function  In the previous section, we defined the derivative at a point as the limit of the difference quotient. Now, we will explore how to find the derivative as a function, which gives us the rate of change at any point in the domain of the original function.   The Derivative   The derivative of a function , denoted by , is defined by if the limit exists.       For , find .    We use the limit definition of the derivative:   The derivative is , which makes sense because the slope of the line is constant at .      For , find .    We apply the limit definition of the derivative at the point :   Alternatively, using the form:       For , find . Then, evaluate and .    First, we find the general derivative function using the limit definition:   Now, we evaluate the derivative at the specific points:   At : .    At : .        Alternative definition of derivative          Find the derivative of the function at the number using the alternative definition.    We use the alternative definition of the derivative:   Substituting the function :   Factoring out from the numerator:   As expected, we obtain the same result: .     Differentiability on a Closed Interval   A function f is differentiable on the closed interval if is differentiable on the open interval and if the following limits exist:     A function is said to be differentiable at a point in its domain if the derivative exists. Remember, the derivative is defined as a limit of a difference quotient as follows: So is differentiable at if this limit exists. That means:    The right-hand limit exists.    The left-hand limit exists.    They are equal: .    If is a point at which this limit fails to exist for some reason—either because the function is not continuous, one or both of the one-sided limits don't exist, or they exist but do not match—then we say that is a point of non-differentiability of , or more simply, is a singular point of .  If is defined in an open interval , then we say is differentiable in if it is differentiable at each point in the interval. Since the endpoints are not actually in the interval, we do not have to concern ourselves with them. However, if is defined piecewise, we must check the right and left hand limits at each of the points separating adjacent intervals to verify differentiability. If either one-sided limit fails to exist or if they do not match, the point is a singularity.   A function is not differentiable (does not have a derivative ) at a point if any of the following occur:    The graph of is not continuous at .    The graph of has a vertical tangent line at ; that is:     The graph of has a cusp (or a sharp corner) at . This occurs if is continuous but as from one side, and as from the other side.       Consider the piecewise function :    Graph of showing a sharp corner (singularity) at   A piecewise function formed by two parabolas meeting at a sharp corner at x equals 2.       To determine if is a singularity, we check both continuity and differentiability at that point:     Continuity: On the left, as , . On the right, as , . Since the limits match the function value , the function is continuous.     Differentiability: We examine the slopes of the tangent lines from each side.  On the left : . As , .  On the right : . As , .      While the function values match, the slopes do not ( ). This creates a sharp corner in the graph as seen in , making a singularity of .      If , show that is not differentiable at .     Graph of showing the sharp corner at the origin   A V-shaped graph with a sharp point at the origin.     To show that is not differentiable at , we must check if the limit of the difference quotient exists at that point:   We examine the one-sided limits:    From the right ( ), , so:     From the left ( ), , so:     Since the left-hand and right-hand limits are not equal ( ), the two-sided limit does not exist. Therefore, is not differentiable at . This corresponds to the sharp corner (or cusp) seen at the origin on its graph.      If , show that is not differentiable at .   Graph of showing a vertical tangent at the origin   The graph of a cube root function passing through the origin with an increasingly steep slope.       We use the limit definition of the derivative at :   As , the denominator is always positive (since it is a square of a cube root) and approaches . Therefore:   Since the limit of the difference quotient is infinite, the derivative does not exist. Geometrically, this means the graph has a vertical tangent line at the origin, as illustrated in .      If is differentiable at , then is continuous at .    Since is differentiable at , we know that exists. To show that is continuous at , we must show that , or equivalently, .  For , we can write:   Using the limit laws, we get:   Since , it follows that . Therefore, by the definition of continuity, is continuous at .     Note that the converse is not true. See the example ( ).      When is a function of , , we will also designate the derivative, , reads as the derivative of with respect to . The value of when can be denoted by .    "
},
{
  "id": "def-derivative",
  "level": "2",
  "url": "sec-derivative-functions.html#def-derivative",
  "type": "Definition",
  "number": "77",
  "title": "The Derivative.",
  "body": " The Derivative   The derivative of a function , denoted by , is defined by if the limit exists.   "
},
{
  "id": "ex-derivative-linear",
  "level": "2",
  "url": "sec-derivative-functions.html#ex-derivative-linear",
  "type": "Example",
  "number": "78",
  "title": "",
  "body": "  For , find .    We use the limit definition of the derivative:   The derivative is , which makes sense because the slope of the line is constant at .   "
},
{
  "id": "ex-derivative-at-point-x2",
  "level": "2",
  "url": "sec-derivative-functions.html#ex-derivative-at-point-x2",
  "type": "Example",
  "number": "79",
  "title": "",
  "body": "  For , find .    We apply the limit definition of the derivative at the point :   Alternatively, using the form:    "
},
{
  "id": "ex-derivative-cubic",
  "level": "2",
  "url": "sec-derivative-functions.html#ex-derivative-cubic",
  "type": "Checkpoint",
  "number": "80",
  "title": "",
  "body": "  For , find . Then, evaluate and .    First, we find the general derivative function using the limit definition:   Now, we evaluate the derivative at the specific points:   At : .    At : .      "
},
{
  "id": "def-derivative-alternative",
  "level": "2",
  "url": "sec-derivative-functions.html#def-derivative-alternative",
  "type": "Definition",
  "number": "81",
  "title": "Alternative definition of derivative.",
  "body": " Alternative definition of derivative       "
},
{
  "id": "ex-derivative-quadratic-alternative",
  "level": "2",
  "url": "sec-derivative-functions.html#ex-derivative-quadratic-alternative",
  "type": "Example",
  "number": "82",
  "title": "",
  "body": "  Find the derivative of the function at the number using the alternative definition.    We use the alternative definition of the derivative:   Substituting the function :   Factoring out from the numerator:   As expected, we obtain the same result: .   "
},
{
  "id": "def-differentiable-closed-interval",
  "level": "2",
  "url": "sec-derivative-functions.html#def-differentiable-closed-interval",
  "type": "Definition",
  "number": "83",
  "title": "Differentiability on a Closed Interval.",
  "body": " Differentiability on a Closed Interval   A function f is differentiable on the closed interval if is differentiable on the open interval and if the following limits exist:    "
},
{
  "id": "sec-derivative-functions-12",
  "level": "2",
  "url": "sec-derivative-functions.html#sec-derivative-functions-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "singular point "
},
{
  "id": "sec-derivative-functions-14",
  "level": "2",
  "url": "sec-derivative-functions.html#sec-derivative-functions-14",
  "type": "Remark",
  "number": "84",
  "title": "",
  "body": " A function is not differentiable (does not have a derivative ) at a point if any of the following occur:    The graph of is not continuous at .    The graph of has a vertical tangent line at ; that is:     The graph of has a cusp (or a sharp corner) at . This occurs if is continuous but as from one side, and as from the other side.    "
},
{
  "id": "ex-piecewise-singularity",
  "level": "2",
  "url": "sec-derivative-functions.html#ex-piecewise-singularity",
  "type": "Example",
  "number": "85",
  "title": "",
  "body": "  Consider the piecewise function :    Graph of showing a sharp corner (singularity) at   A piecewise function formed by two parabolas meeting at a sharp corner at x equals 2.       To determine if is a singularity, we check both continuity and differentiability at that point:     Continuity: On the left, as , . On the right, as , . Since the limits match the function value , the function is continuous.     Differentiability: We examine the slopes of the tangent lines from each side.  On the left : . As , .  On the right : . As , .      While the function values match, the slopes do not ( ). This creates a sharp corner in the graph as seen in , making a singularity of .   "
},
{
  "id": "ex-abs-not-differentiable",
  "level": "2",
  "url": "sec-derivative-functions.html#ex-abs-not-differentiable",
  "type": "Example",
  "number": "87",
  "title": "",
  "body": "  If , show that is not differentiable at .     Graph of showing the sharp corner at the origin   A V-shaped graph with a sharp point at the origin.     To show that is not differentiable at , we must check if the limit of the difference quotient exists at that point:   We examine the one-sided limits:    From the right ( ), , so:     From the left ( ), , so:     Since the left-hand and right-hand limits are not equal ( ), the two-sided limit does not exist. Therefore, is not differentiable at . This corresponds to the sharp corner (or cusp) seen at the origin on its graph.   "
},
{
  "id": "ex-cube-root-not-differentiable",
  "level": "2",
  "url": "sec-derivative-functions.html#ex-cube-root-not-differentiable",
  "type": "Example",
  "number": "89",
  "title": "",
  "body": "  If , show that is not differentiable at .   Graph of showing a vertical tangent at the origin   The graph of a cube root function passing through the origin with an increasingly steep slope.       We use the limit definition of the derivative at :   As , the denominator is always positive (since it is a square of a cube root) and approaches . Therefore:   Since the limit of the difference quotient is infinite, the derivative does not exist. Geometrically, this means the graph has a vertical tangent line at the origin, as illustrated in .   "
},
{
  "id": "thm-differentiable-implies-continuous",
  "level": "2",
  "url": "sec-derivative-functions.html#thm-differentiable-implies-continuous",
  "type": "Theorem",
  "number": "91",
  "title": "",
  "body": "  If is differentiable at , then is continuous at .    Since is differentiable at , we know that exists. To show that is continuous at , we must show that , or equivalently, .  For , we can write:   Using the limit laws, we get:   Since , it follows that . Therefore, by the definition of continuity, is continuous at .   "
},
{
  "id": "sec-derivative-functions-19",
  "level": "2",
  "url": "sec-derivative-functions.html#sec-derivative-functions-19",
  "type": "Remark",
  "number": "92",
  "title": "",
  "body": " Note that the converse is not true. See the example ( ).  "
},
{
  "id": "sec-derivative-functions-20",
  "level": "2",
  "url": "sec-derivative-functions.html#sec-derivative-functions-20",
  "type": "Observation",
  "number": "93",
  "title": "",
  "body": "   When is a function of , , we will also designate the derivative, , reads as the derivative of with respect to . The value of when can be denoted by .   "
},
{
  "id": "sec-derivative-rate-change",
  "level": "1",
  "url": "sec-derivative-rate-change.html",
  "type": "Section",
  "number": "",
  "title": "The Derivative as a Rate of Change",
  "body": " The Derivative as a Rate of Change  In the previous section, we defined the derivative of a function at a point as the limit of the difference quotient. In this section, we will explore how the derivative can be interpreted as a rate of change.  The derivative of a function at a point gives us the instantaneous rate of change of the function at that point. This means that it tells us how fast the function is changing at that specific point. For example, if we have a function that represents the position of an object over time, the derivative of that function will give us the velocity of the object at any given time.   Tangent Line   The tangent line to at is the line through whose slope is , the derivative of at .    A tangent line at a point of a curve may be viewed as a geometric approximation to the curve itself. If the curve is the graph of a function , then we can think of the linear function defining the tangent line as an approximating function for . If we call this linear function , then the tangent line is .  Suppose the point lies on the graph of , where is a smooth function (a function with a nice continuous derivative). We would like to find the equation of the tangent line at the point . Suppose the coordinates of are Since lies on the graph of , we know that The characteristic property of the tangent line at is that the slope of the line is equal to the slope of the curve at , which is the derivative of at .  In other words, if the slope of the tangent line is , and the equation is , then . Also, lies on the line. These two pieces of information allow us to use the point-slope formula to find the equation of the tangent. Equivalently, we could simply plug the coordinates of into the equation and solve for . Formally, we can say the tangent line equation is .    Find the equation for the line tangent to at the point .    First we need to calculate : Thus, . Hence, the slope of the tangent line is .  Now we will use this to find the equation of the tangent. Since the line goes through the point , becomes , so , and the equation of the tangent line is .      Find an equation of the tangent line to the parabola at .    First, find the -coordinate of the point. When : So the point is .  Next, find the derivative to get the slope : At , the slope is .  Using the point-slope formula : The equation of the tangent line is .      For :     Find .    Find an equation of the tangent line to the curve at the point .          Using the definition of the derivative: Finding a common denominator in the numerator: Simplifying the :     First, find the slope at using the result from part (a): Using the point in the point-slope form : Simplifying to slope-intercept form:        Suppose an object moves along a straight line according to an equation of motion , where is the displacement of the object from the origin at time . The function that describes the motion is called the position function of the object. The average velocity over the interval of time is . Suppose we want to compute the average velocity for the shorter time interval as .   Instantaneous Velocity  We define the velocity (or instantaneous velocity ) at time as:      Suppose that a ball is dropped from a tower which is 450 m above the ground.   What is the velocity of the ball after 5 seconds?    How fast is the ball traveling when it hits the ground?      A ball dropping from a tower of height 450m.        The equation of motion is . The velocity at 5 seconds is , and the speed when it hits the ground is approximately .    Using the position function , we first find the velocity function by taking the derivative:      After 5 seconds, the velocity is:     The ball hits the ground when : So, . The velocity at this time is: The speed is the magnitude of velocity, approximately .         A sandbag is dropped from a hot-air balloon that is hovering at a height of 512 feet above the ground. If air resistance is discarded, then the distance from the ground to the sandbag after seconds is given by .   A sandbag falling from a balloon.      Find the velocity of the sandbag at and seconds.    To find the velocity, we take the derivative of the position function : .  At time , the velocity is: .  At time seconds, the velocity is: .     Rate of Change   Let where is defined on an open interval containing .   The average rate of change of with respect to on the interval is .    The instantaneous rate of change of with respect to at is , if the limit exists.         The derivative is the instantaneous rate of change of with respect to at .    If an object is thrown into the air from a given height (in feet) , with an initial upward velocity of , its height above the ground at the time is given by the following function: , where is the gravitational constant . This is the acceleration of an object due to gravity near the Earth's surface. Substituting this value for into the above equation, we obtain: .  To determine how long the object will be in the air (ignoring the effects of friction and wind), set the left hand side of the equation to 0, and solve for using the quadratic formula. We set this to 0 because is the height of the object above the ground; when the object reaches the ground, this height is 0. When the quadratic formula is used, two solutions are obtained: one positive and one negative. Since our answer refers to how long the object will be airborne, the positive root should be selected.  To determine the velocity of the object at a particular time , compute the derivative of with respect to and substitute into . In this case, it is important to note that the sign of the velocity determines its direction. An object moving upward has positive velocity, and an object going down has a negative velocity. The unit for velocity is feet\/second.    If an object is thrown into the air from a height of 200 feet at an initial velocity of 20 feet\/second, how long is it in the air? Also, what is its velocity at seconds?   Path of an object thrown from 200 ft.        Using the position function with and :   To find how long it is in the air, set : Using the quadratic formula: The positive root is seconds.  To find the velocity at , take the derivative: At :     "
},
{
  "id": "def-tan-line",
  "level": "2",
  "url": "sec-derivative-rate-change.html#def-tan-line",
  "type": "Definition",
  "number": "94",
  "title": "Tangent Line.",
  "body": " Tangent Line   The tangent line to at is the line through whose slope is , the derivative of at .   "
},
{
  "id": "sec-derivative-rate-change-8",
  "level": "2",
  "url": "sec-derivative-rate-change.html#sec-derivative-rate-change-8",
  "type": "Example",
  "number": "95",
  "title": "",
  "body": "  Find the equation for the line tangent to at the point .    First we need to calculate : Thus, . Hence, the slope of the tangent line is .  Now we will use this to find the equation of the tangent. Since the line goes through the point , becomes , so , and the equation of the tangent line is .   "
},
{
  "id": "sec-derivative-rate-change-9",
  "level": "2",
  "url": "sec-derivative-rate-change.html#sec-derivative-rate-change-9",
  "type": "Checkpoint",
  "number": "96",
  "title": "",
  "body": "  Find an equation of the tangent line to the parabola at .    First, find the -coordinate of the point. When : So the point is .  Next, find the derivative to get the slope : At , the slope is .  Using the point-slope formula : The equation of the tangent line is .   "
},
{
  "id": "sec-derivative-rate-change-10",
  "level": "2",
  "url": "sec-derivative-rate-change.html#sec-derivative-rate-change-10",
  "type": "Checkpoint",
  "number": "97",
  "title": "",
  "body": "  For :     Find .    Find an equation of the tangent line to the curve at the point .          Using the definition of the derivative: Finding a common denominator in the numerator: Simplifying the :     First, find the slope at using the result from part (a): Using the point in the point-slope form : Simplifying to slope-intercept form:       "
},
{
  "id": "sec-derivative-rate-change-11",
  "level": "2",
  "url": "sec-derivative-rate-change.html#sec-derivative-rate-change-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "position function "
},
{
  "id": "formula-velocity-2",
  "level": "2",
  "url": "sec-derivative-rate-change.html#formula-velocity-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "velocity instantaneous velocity "
},
{
  "id": "sec-derivative-rate-change-13",
  "level": "2",
  "url": "sec-derivative-rate-change.html#sec-derivative-rate-change-13",
  "type": "Example",
  "number": "98",
  "title": "",
  "body": "  Suppose that a ball is dropped from a tower which is 450 m above the ground.   What is the velocity of the ball after 5 seconds?    How fast is the ball traveling when it hits the ground?      A ball dropping from a tower of height 450m.        The equation of motion is . The velocity at 5 seconds is , and the speed when it hits the ground is approximately .    Using the position function , we first find the velocity function by taking the derivative:      After 5 seconds, the velocity is:     The ball hits the ground when : So, . The velocity at this time is: The speed is the magnitude of velocity, approximately .      "
},
{
  "id": "sec-derivative-rate-change-14",
  "level": "2",
  "url": "sec-derivative-rate-change.html#sec-derivative-rate-change-14",
  "type": "Checkpoint",
  "number": "100",
  "title": "",
  "body": "  A sandbag is dropped from a hot-air balloon that is hovering at a height of 512 feet above the ground. If air resistance is discarded, then the distance from the ground to the sandbag after seconds is given by .   A sandbag falling from a balloon.      Find the velocity of the sandbag at and seconds.    To find the velocity, we take the derivative of the position function : .  At time , the velocity is: .  At time seconds, the velocity is: .   "
},
{
  "id": "def-rate-of-change",
  "level": "2",
  "url": "sec-derivative-rate-change.html#def-rate-of-change",
  "type": "Definition",
  "number": "102",
  "title": "Rate of Change.",
  "body": " Rate of Change   Let where is defined on an open interval containing .   The average rate of change of with respect to on the interval is .    The instantaneous rate of change of with respect to at is , if the limit exists.      "
},
{
  "id": "def-derivative-rate-of-change",
  "level": "2",
  "url": "sec-derivative-rate-change.html#def-derivative-rate-of-change",
  "type": "Definition",
  "number": "103",
  "title": "",
  "body": "  The derivative is the instantaneous rate of change of with respect to at .   "
},
{
  "id": "sec-derivative-rate-change-18",
  "level": "2",
  "url": "sec-derivative-rate-change.html#sec-derivative-rate-change-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "how long the object will be in the air "
},
{
  "id": "sec-derivative-rate-change-19",
  "level": "2",
  "url": "sec-derivative-rate-change.html#sec-derivative-rate-change-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "velocity of the object at a particular time "
},
{
  "id": "sec-derivative-rate-change-20",
  "level": "2",
  "url": "sec-derivative-rate-change.html#sec-derivative-rate-change-20",
  "type": "Checkpoint",
  "number": "104",
  "title": "",
  "body": "  If an object is thrown into the air from a height of 200 feet at an initial velocity of 20 feet\/second, how long is it in the air? Also, what is its velocity at seconds?   Path of an object thrown from 200 ft.        Using the position function with and :   To find how long it is in the air, set : Using the quadratic formula: The positive root is seconds.  To find the velocity at , take the derivative: At :    "
},
{
  "id": "sec-differentiation-rules",
  "level": "1",
  "url": "sec-differentiation-rules.html",
  "type": "Section",
  "number": "",
  "title": "Differentiation Rules",
  "body": " Differentiation Rules  In this section, we will learn some rules for computing derivatives of functions.  We will start with the constant rule, which states that the derivative of a constant function is zero. Then we will learn the power rule, which allows us to compute the derivative of a function of the form for any real number Finally, we will learn the sum rule, which states that the derivative of a sum of functions is the sum of their derivatives.  These rules will allow us to compute derivatives of many different types of functions, and they will be essential tools for solving problems in calculus.   The Power Rule   For any real number ,       Find if             Applying the Power Rule:       (constant rule)  (constant rule)        The derivative of a constant function is 0. That is,       The derivative of a linear function is .      Techniques of Differentiation  In the previous section, we learned some basic rules for computing derivatives of functions. In this section, we will learn some techniques for computing derivatives of more complicated functions.    The derivative of a constant times a function is the constant times the derivative of the function. Using derivative notation, we can write this as     Here are some examples with integer exponents:     Let Then     Let Then        Find if                             Rewrite as . Then              The Sum-Difference Rule   The derivative of a sum is the sum of the derivatives; The derivative of a difference is the difference of the derivatives;     Let be the polynomial Then Notice that the derivative of the constant term is , because really means . The derivative of any real constant is zero.    Let be the Laurent polynomial (with negative exponents, in this case)       In this section, you can write negative powers as fractions, if you like: (e.g., )     Find if                             Rewrite as . Then the derivative is , or .    Rewrite as . Then the derivative is , or .         Find the equation of the tangent line to the graph of at .    First, we rewrite the function using fractional exponents: Next, we find the derivative to determine the slope : To find the slope at the point , we evaluate the derivative at : Using the point-slope form with the point : Simplifying to slope-intercept form:       Find the points on the graph of at which the tangent line is horizontal.    A tangent line is horizontal when the derivative (slope) is equal to zero. First, we find the derivative: Setting the derivative equal to zero and solving for : This gives critical values of and .  Now, we find the corresponding -coordinates by plugging these values back into the original function:   At : . So, the point is .    At : . So, the point is .   The points where the tangent line is horizontal are and .      Find the points on the graph of at which the tangent line has slope .    The slope of the tangent line is given by the derivative. First, we find : We set the derivative equal to the desired slope, , and solve for : This gives us and .  Now, find the corresponding -coordinates from the original function:   If : . Point: .    If : . Point: .   The points where the tangent line has slope are and .      Product and Quotient Rules  In the previous section, we learned some techniques for computing derivatives of functions. In this section, we will learn two more techniques for computing derivatives of more complicated functions: the product rule and the quotient rule.   The Product Rule   Suppose that , where is the first factor and is the second factor. Then The derivative of a product is the first factor times the derivative of the second factor, plus the derivative of the first factor times the second factor.    In this section, we learn how to differentiate a product function which is built from two basic parts which are multiplied together: a product of two simpler parts and . This is often written     Given , find .     Identify and : , where and     Find the derivatives and of the factors:     Apply the product formula:       Of course, this can be expanded and simplified to obtain a polynomial representation:      Note on the derivative of sine  Now for an example involving trigonometric functions. All we need is one fact: the derivative of is (that is, ).     Given , find .     Identify and : , where and     Find the derivatives and of the factors:     Apply the product formula:           Find for each of the following functions.                                                     The Quotient Rule   Suppose that , where is the numerator and is the denominator . Then The derivative of a quotient is the denominator times the derivative of the numerator, minus the numerator times the derivative of the denominator, all divided by the denominator squared.    In this section, we learn how to differentiate a function which is constructed as a ratio of two basic parts: a quotient of two simpler functions and . To calculate the derivative of a function of the form , we have the Quotient Rule . The quotient rule says explicitly how to combine the functions and with their derivatives and to form the derivative of . It works like this: This can also be written     Given , find .     Identify and : , where and     Find the derivatives and of the numerator and denominator:     Apply the quotient formula:       Of course, this can be expanded and terms collected to obtain a rational representation:       Given , find .    Using the Quotient Rule with and , and recalling the fact ( ) that we have and . Thus,      To avoid ambiguity when multiplying a trigonometric function by a power function, always write the power function first. For example, write instead of . This prevents the common mistake of misinterpreting the expression as .     Find for each of the following functions.          Applying the Quotient Rule:            Applying the Quotient Rule:            Simplify the fraction using laws of exponents before differentiating.    First simplify: . Then the derivative is .           Simplify to . The derivative is .           Using the Quotient Rule:       "
},
{
  "id": "thm-power-rule",
  "level": "2",
  "url": "sec-differentiation-rules.html#thm-power-rule",
  "type": "Theorem",
  "number": "106",
  "title": "The Power Rule.",
  "body": " The Power Rule   For any real number ,    "
},
{
  "id": "sec-differentiation-rules-6",
  "level": "2",
  "url": "sec-differentiation-rules.html#sec-differentiation-rules-6",
  "type": "Example",
  "number": "107",
  "title": "",
  "body": "  Find if             Applying the Power Rule:       (constant rule)  (constant rule)     "
},
{
  "id": "thm-derivative-constant",
  "level": "2",
  "url": "sec-differentiation-rules.html#thm-derivative-constant",
  "type": "Theorem",
  "number": "108",
  "title": "",
  "body": "  The derivative of a constant function is 0. That is,    "
},
{
  "id": "thm-derivative-linear",
  "level": "2",
  "url": "sec-differentiation-rules.html#thm-derivative-linear",
  "type": "Theorem",
  "number": "109",
  "title": "",
  "body": "  The derivative of a linear function is .    "
},
{
  "id": "thm-constant-multiple-rule",
  "level": "2",
  "url": "sec-differentiation-rules.html#thm-constant-multiple-rule",
  "type": "Theorem",
  "number": "110",
  "title": "",
  "body": "  The derivative of a constant times a function is the constant times the derivative of the function. Using derivative notation, we can write this as    "
},
{
  "id": "sub-techniques-differentiation-6",
  "level": "2",
  "url": "sec-differentiation-rules.html#sub-techniques-differentiation-6",
  "type": "Example",
  "number": "111",
  "title": "",
  "body": "  Find if                             Rewrite as . Then            "
},
{
  "id": "thm-sum-difference-rule",
  "level": "2",
  "url": "sec-differentiation-rules.html#thm-sum-difference-rule",
  "type": "Theorem",
  "number": "112",
  "title": "The Sum-Difference Rule.",
  "body": " The Sum-Difference Rule   The derivative of a sum is the sum of the derivatives; The derivative of a difference is the difference of the derivatives;    "
},
{
  "id": "sub-techniques-differentiation-9",
  "level": "2",
  "url": "sec-differentiation-rules.html#sub-techniques-differentiation-9",
  "type": "Example",
  "number": "113",
  "title": "",
  "body": "  Let be the Laurent polynomial (with negative exponents, in this case)     "
},
{
  "id": "sub-techniques-differentiation-10",
  "level": "2",
  "url": "sec-differentiation-rules.html#sub-techniques-differentiation-10",
  "type": "Remark",
  "number": "114",
  "title": "",
  "body": " In this section, you can write negative powers as fractions, if you like: (e.g., )  "
},
{
  "id": "sub-techniques-differentiation-11",
  "level": "2",
  "url": "sec-differentiation-rules.html#sub-techniques-differentiation-11",
  "type": "Checkpoint",
  "number": "115",
  "title": "",
  "body": "  Find if                             Rewrite as . Then the derivative is , or .    Rewrite as . Then the derivative is , or .      "
},
{
  "id": "sub-techniques-differentiation-12",
  "level": "2",
  "url": "sec-differentiation-rules.html#sub-techniques-differentiation-12",
  "type": "Checkpoint",
  "number": "116",
  "title": "",
  "body": "  Find the equation of the tangent line to the graph of at .    First, we rewrite the function using fractional exponents: Next, we find the derivative to determine the slope : To find the slope at the point , we evaluate the derivative at : Using the point-slope form with the point : Simplifying to slope-intercept form:    "
},
{
  "id": "sub-techniques-differentiation-13",
  "level": "2",
  "url": "sec-differentiation-rules.html#sub-techniques-differentiation-13",
  "type": "Checkpoint",
  "number": "117",
  "title": "",
  "body": "  Find the points on the graph of at which the tangent line is horizontal.    A tangent line is horizontal when the derivative (slope) is equal to zero. First, we find the derivative: Setting the derivative equal to zero and solving for : This gives critical values of and .  Now, we find the corresponding -coordinates by plugging these values back into the original function:   At : . So, the point is .    At : . So, the point is .   The points where the tangent line is horizontal are and .   "
},
{
  "id": "sub-techniques-differentiation-14",
  "level": "2",
  "url": "sec-differentiation-rules.html#sub-techniques-differentiation-14",
  "type": "Checkpoint",
  "number": "118",
  "title": "",
  "body": "  Find the points on the graph of at which the tangent line has slope .    The slope of the tangent line is given by the derivative. First, we find : We set the derivative equal to the desired slope, , and solve for : This gives us and .  Now, find the corresponding -coordinates from the original function:   If : . Point: .    If : . Point: .   The points where the tangent line has slope are and .   "
},
{
  "id": "thm-product-rule",
  "level": "2",
  "url": "sec-differentiation-rules.html#thm-product-rule",
  "type": "Theorem",
  "number": "119",
  "title": "The Product Rule.",
  "body": " The Product Rule   Suppose that , where is the first factor and is the second factor. Then The derivative of a product is the first factor times the derivative of the second factor, plus the derivative of the first factor times the second factor.   "
},
{
  "id": "subsec-ProductandQuotientRules-5",
  "level": "2",
  "url": "sec-differentiation-rules.html#subsec-ProductandQuotientRules-5",
  "type": "Example",
  "number": "120",
  "title": "",
  "body": "  Given , find .     Identify and : , where and     Find the derivatives and of the factors:     Apply the product formula:       Of course, this can be expanded and simplified to obtain a polynomial representation:    "
},
{
  "id": "note-sin-x",
  "level": "2",
  "url": "sec-differentiation-rules.html#note-sin-x",
  "type": "Note",
  "number": "121",
  "title": "Note on the derivative of sine.",
  "body": " Note on the derivative of sine  Now for an example involving trigonometric functions. All we need is one fact: the derivative of is (that is, ).  "
},
{
  "id": "subsec-ProductandQuotientRules-7",
  "level": "2",
  "url": "sec-differentiation-rules.html#subsec-ProductandQuotientRules-7",
  "type": "Example",
  "number": "122",
  "title": "",
  "body": "  Given , find .     Identify and : , where and     Find the derivatives and of the factors:     Apply the product formula:        "
},
{
  "id": "subsec-ProductandQuotientRules-8",
  "level": "2",
  "url": "sec-differentiation-rules.html#subsec-ProductandQuotientRules-8",
  "type": "Checkpoint",
  "number": "123",
  "title": "",
  "body": "  Find for each of the following functions.                                                   "
},
{
  "id": "thm-quotient-rule",
  "level": "2",
  "url": "sec-differentiation-rules.html#thm-quotient-rule",
  "type": "Theorem",
  "number": "124",
  "title": "The Quotient Rule.",
  "body": " The Quotient Rule   Suppose that , where is the numerator and is the denominator . Then The derivative of a quotient is the denominator times the derivative of the numerator, minus the numerator times the derivative of the denominator, all divided by the denominator squared.   "
},
{
  "id": "subsec-ProductandQuotientRules-11",
  "level": "2",
  "url": "sec-differentiation-rules.html#subsec-ProductandQuotientRules-11",
  "type": "Example",
  "number": "125",
  "title": "",
  "body": "  Given , find .     Identify and : , where and     Find the derivatives and of the numerator and denominator:     Apply the quotient formula:       Of course, this can be expanded and terms collected to obtain a rational representation:    "
},
{
  "id": "subsec-ProductandQuotientRules-12",
  "level": "2",
  "url": "sec-differentiation-rules.html#subsec-ProductandQuotientRules-12",
  "type": "Example",
  "number": "126",
  "title": "",
  "body": "  Given , find .    Using the Quotient Rule with and , and recalling the fact ( ) that we have and . Thus,    "
},
{
  "id": "subsec-ProductandQuotientRules-13",
  "level": "2",
  "url": "sec-differentiation-rules.html#subsec-ProductandQuotientRules-13",
  "type": "Remark",
  "number": "127",
  "title": "",
  "body": " To avoid ambiguity when multiplying a trigonometric function by a power function, always write the power function first. For example, write instead of . This prevents the common mistake of misinterpreting the expression as .  "
},
{
  "id": "subsec-ProductandQuotientRules-14",
  "level": "2",
  "url": "sec-differentiation-rules.html#subsec-ProductandQuotientRules-14",
  "type": "Checkpoint",
  "number": "128",
  "title": "",
  "body": "  Find for each of the following functions.          Applying the Quotient Rule:            Applying the Quotient Rule:            Simplify the fraction using laws of exponents before differentiating.    First simplify: . Then the derivative is .           Simplify to . The derivative is .           Using the Quotient Rule:     "
},
{
  "id": "sec-trig-derivatives",
  "level": "1",
  "url": "sec-trig-derivatives.html",
  "type": "Section",
  "number": "",
  "title": "Derivatives of the Trigonometric Functions",
  "body": " Derivatives of the Trigonometric Functions  In this section, we will find the derivatives of the six trigonometric functions: sine, cosine, tangent, cotangent, secant, and cosecant. We will use the limit definition of the derivative to find these derivatives.                We will start with the sine function. The derivative of sine is given by:   Using the sine addition formula, we can rewrite the numerator as: This simplifies to:   Now, we can substitute this back into the limit definition: We can split this limit into two separate limits:   We know that and , so we can simplify this to:   Next, we will find the derivative of the cosine function. The derivative of cosine is given by:   Using the cosine addition formula, we can rewrite the numerator as: This simplifies to:   Now, we can substitute this back into the limit definition: We can split this limit into two separate limits:   We know that and , so we can simplify this to:   We can use similar techniques to find the derivatives of the other four trigonometric functions. The results are:       Derivatives of the Trigonometric Functions          Find the first three derivatives of .    According to the trigonometric table for derivatives and the power rule , we have:      Higher-order derivatives can be written using several notations:   Order  Prime Notation  Derivatives Notation    1st      2nd      3rd      th          Find the first ten derivatives of and determine the pattern for the th derivative.    We calculate the first few derivatives to identify the repeating cycle:   Notice that the derivatives repeat every four steps. Continuing this pattern:   The th derivative follows a cycle of four:  if (remainder 1 when divided by 4)  if (remainder 2 when divided by 4)  if (remainder 3 when divided by 4)  if (remainder 0 when divided by 4)        Find the derivative of .    We can solve this using the Product Rule where and . First, find the derivatives of the parts:   Now apply the Product Rule :   Using the double-angle identity , we can simplify the result:       Find if .    Using the Quotient Rule with and : Using the Pythagorean identity :       Find if .    Using the Product Rule with and :       Find if .    First, we can simplify the expression: Now, taking the derivative:       Find the slope of the tangent line to the graph of at the point with -coordinate . For what values of is the tangent line horizontal?    The slope of the tangent line is given by the derivative: Evaluating at :   The tangent line is horizontal when the derivative is zero: This occurs at for any integer .     Normal Line   If is a differentiable function, then the normal line at a point on the graph of is the line through that is perpendicular to the tangent line.  If , then the slope of the normal line is .  If , then the tangent line is horizontal and the normal line is vertical; moreover, the equation of the normal line is .      Find an equation of the normal line to the graph of at the point .   The graph of with its tangent and normal lines at .   Graph of tangent function in blue, tangent line in red, and normal line in green intersecting at (pi\/4, 1).       First, we find the slope of the tangent line (red) by taking the derivative of : Evaluating at to find the tangent slope :   The slope of the normal line (green) is the negative reciprocal of the tangent slope:   Using the point-slope form with and :       Find the derivative of each of the following functions.                Simplify using the identity before differentiating.    Simplify: . Then .         By the Product Rule:          Write in terms of sine and cosine.    Simplify: . Then .         By the Quotient Rule:          By the Quotient Rule:          Simplify: . Then .         Use the even\/odd identities: and .    Rewrite: . Then .         Expanding gives . Simplifying gives . Then .     "
},
{
  "id": "thm-trig-limits-basic",
  "level": "2",
  "url": "sec-trig-derivatives.html#thm-trig-limits-basic",
  "type": "Theorem",
  "number": "129",
  "title": "",
  "body": "      "
},
{
  "id": "thm-trig-limits-special",
  "level": "2",
  "url": "sec-trig-derivatives.html#thm-trig-limits-special",
  "type": "Theorem",
  "number": "130",
  "title": "",
  "body": "      "
},
{
  "id": "def-trig-derivatives",
  "level": "2",
  "url": "sec-trig-derivatives.html#def-trig-derivatives",
  "type": "Definition",
  "number": "131",
  "title": "Derivatives of the Trigonometric Functions.",
  "body": " Derivatives of the Trigonometric Functions       "
},
{
  "id": "sec-trig-derivatives-16",
  "level": "2",
  "url": "sec-trig-derivatives.html#sec-trig-derivatives-16",
  "type": "Example",
  "number": "132",
  "title": "",
  "body": "  Find the first three derivatives of .    According to the trigonometric table for derivatives and the power rule , we have:    "
},
{
  "id": "sec-trig-derivatives-17",
  "level": "2",
  "url": "sec-trig-derivatives.html#sec-trig-derivatives-17",
  "type": "Remark",
  "number": "133",
  "title": "",
  "body": " Higher-order derivatives can be written using several notations:   Order  Prime Notation  Derivatives Notation    1st      2nd      3rd      th       "
},
{
  "id": "sec-trig-derivatives-18",
  "level": "2",
  "url": "sec-trig-derivatives.html#sec-trig-derivatives-18",
  "type": "Example",
  "number": "134",
  "title": "",
  "body": "  Find the first ten derivatives of and determine the pattern for the th derivative.    We calculate the first few derivatives to identify the repeating cycle:   Notice that the derivatives repeat every four steps. Continuing this pattern:   The th derivative follows a cycle of four:  if (remainder 1 when divided by 4)  if (remainder 2 when divided by 4)  if (remainder 3 when divided by 4)  if (remainder 0 when divided by 4)     "
},
{
  "id": "sec-trig-derivatives-19",
  "level": "2",
  "url": "sec-trig-derivatives.html#sec-trig-derivatives-19",
  "type": "Example",
  "number": "135",
  "title": "",
  "body": "  Find the derivative of .    We can solve this using the Product Rule where and . First, find the derivatives of the parts:   Now apply the Product Rule :   Using the double-angle identity , we can simplify the result:    "
},
{
  "id": "sec-trig-derivatives-20",
  "level": "2",
  "url": "sec-trig-derivatives.html#sec-trig-derivatives-20",
  "type": "Checkpoint",
  "number": "136",
  "title": "",
  "body": "  Find if .    Using the Quotient Rule with and : Using the Pythagorean identity :    "
},
{
  "id": "sec-trig-derivatives-21",
  "level": "2",
  "url": "sec-trig-derivatives.html#sec-trig-derivatives-21",
  "type": "Checkpoint",
  "number": "137",
  "title": "",
  "body": "  Find if .    Using the Product Rule with and :    "
},
{
  "id": "sec-trig-derivatives-22",
  "level": "2",
  "url": "sec-trig-derivatives.html#sec-trig-derivatives-22",
  "type": "Checkpoint",
  "number": "138",
  "title": "",
  "body": "  Find if .    First, we can simplify the expression: Now, taking the derivative:    "
},
{
  "id": "sec-trig-derivatives-23",
  "level": "2",
  "url": "sec-trig-derivatives.html#sec-trig-derivatives-23",
  "type": "Checkpoint",
  "number": "139",
  "title": "",
  "body": "  Find the slope of the tangent line to the graph of at the point with -coordinate . For what values of is the tangent line horizontal?    The slope of the tangent line is given by the derivative: Evaluating at :   The tangent line is horizontal when the derivative is zero: This occurs at for any integer .   "
},
{
  "id": "def-normal-line",
  "level": "2",
  "url": "sec-trig-derivatives.html#def-normal-line",
  "type": "Definition",
  "number": "140",
  "title": "Normal Line.",
  "body": " Normal Line   If is a differentiable function, then the normal line at a point on the graph of is the line through that is perpendicular to the tangent line.  If , then the slope of the normal line is .  If , then the tangent line is horizontal and the normal line is vertical; moreover, the equation of the normal line is .   "
},
{
  "id": "sec-trig-derivatives-25",
  "level": "2",
  "url": "sec-trig-derivatives.html#sec-trig-derivatives-25",
  "type": "Example",
  "number": "141",
  "title": "",
  "body": "  Find an equation of the normal line to the graph of at the point .   The graph of with its tangent and normal lines at .   Graph of tangent function in blue, tangent line in red, and normal line in green intersecting at (pi\/4, 1).       First, we find the slope of the tangent line (red) by taking the derivative of : Evaluating at to find the tangent slope :   The slope of the normal line (green) is the negative reciprocal of the tangent slope:   Using the point-slope form with and :    "
},
{
  "id": "sec-trig-derivatives-26",
  "level": "2",
  "url": "sec-trig-derivatives.html#sec-trig-derivatives-26",
  "type": "Checkpoint",
  "number": "143",
  "title": "",
  "body": "  Find the derivative of each of the following functions.                Simplify using the identity before differentiating.    Simplify: . Then .         By the Product Rule:          Write in terms of sine and cosine.    Simplify: . Then .         By the Quotient Rule:          By the Quotient Rule:          Simplify: . Then .         Use the even\/odd identities: and .    Rewrite: . Then .         Expanding gives . Simplifying gives . Then .    "
},
{
  "id": "sec-exp-derivatives",
  "level": "1",
  "url": "sec-exp-derivatives.html",
  "type": "Section",
  "number": "",
  "title": "Derivatives of Exponential Functions",
  "body": " Derivatives of Exponential Functions   Exponential Function   The exponential function with base is defined by where is a positive constant other than 1 ( and ) and is any real number.    In this section, we explore the derivatives of both the natural exponential function and general exponential functions. The natural exponential function, , is unique because it is its own derivative:   For a general exponential function (where and ), the derivative involves a scaling factor of the natural logarithm of the base:   This formula shows that the growth rate of an exponential function is proportional to the function itself. The constant of proportionality, , arises from the relationship between general bases and the natural base .  Understanding these derivatives is essential for modeling real-world phenomena such as population growth, radioactive decay, and compound interest, where the rate of change depends directly on the current quantity.   The Natural Exponential Function   The irrational number , approximately , is called the natural base . The number is defined as the value that approaches as increases without bound: The function is called the natural exponential function .    Since , the graph of the natural exponential function lies between the graphs of and .    Find the derivative of .    Using the limit definition of the derivative:   Assuming the limit exists, this means that the derivative of is equal to some constant times . This constant varies depending on the value of the base .  Specifically, when , the value of this limit is exactly .     Derivative of the Natural Exponential Function        Find the derivative of .    Using the chain rule with the fact that , where :          Similarly, using the chain rule where :       Find the derivatives of the following functions.    Find the derivatives of the following functions.         Using the Product Rule with and :           Note that is a constant, so its derivative is zero. Applying the Power Rule to the first term:           Differentiating each term separately:        Find the limits:          Note that as and is bounded between and . By the Squeeze Theorem, since , the limit is .           Multiply the numerator and denominator by :        Find an equation for a line that is tangent to the curve and goes through .   The graph of and its tangent line at .   The exponential function and its tangent line at the y-intercept.       To find the equation of the tangent line, we need a point and a slope:    Point: When , . So the point is .     Slope: The derivative is . Evaluating at , the slope is .   Using the point-slope form :     "
},
{
  "id": "def-exponential-function",
  "level": "2",
  "url": "sec-exp-derivatives.html#def-exponential-function",
  "type": "Definition",
  "number": "144",
  "title": "Exponential Function.",
  "body": " Exponential Function   The exponential function with base is defined by where is a positive constant other than 1 ( and ) and is any real number.   "
},
{
  "id": "def-natural-exponential-function",
  "level": "2",
  "url": "sec-exp-derivatives.html#def-natural-exponential-function",
  "type": "Definition",
  "number": "145",
  "title": "The Natural Exponential Function.",
  "body": " The Natural Exponential Function   The irrational number , approximately , is called the natural base . The number is defined as the value that approaches as increases without bound: The function is called the natural exponential function .   "
},
{
  "id": "sec-exp-derivatives-9",
  "level": "2",
  "url": "sec-exp-derivatives.html#sec-exp-derivatives-9",
  "type": "Example",
  "number": "146",
  "title": "",
  "body": "  Find the derivative of .    Using the limit definition of the derivative:   Assuming the limit exists, this means that the derivative of is equal to some constant times . This constant varies depending on the value of the base .  Specifically, when , the value of this limit is exactly .   "
},
{
  "id": "sec-exp-derivatives-11",
  "level": "2",
  "url": "sec-exp-derivatives.html#sec-exp-derivatives-11",
  "type": "Example",
  "number": "147",
  "title": "",
  "body": "  Find the derivative of .    Using the chain rule with the fact that , where :    "
},
{
  "id": "sec-exp-derivatives-12",
  "level": "2",
  "url": "sec-exp-derivatives.html#sec-exp-derivatives-12",
  "type": "Example",
  "number": "148",
  "title": "",
  "body": "     Similarly, using the chain rule where :    "
},
{
  "id": "sec-exp-derivatives-13",
  "level": "2",
  "url": "sec-exp-derivatives.html#sec-exp-derivatives-13",
  "type": "Checkpoint",
  "number": "149",
  "title": "",
  "body": "  Find the derivatives of the following functions.    Find the derivatives of the following functions.         Using the Product Rule with and :           Note that is a constant, so its derivative is zero. Applying the Power Rule to the first term:           Differentiating each term separately:     "
},
{
  "id": "sec-exp-derivatives-14",
  "level": "2",
  "url": "sec-exp-derivatives.html#sec-exp-derivatives-14",
  "type": "Checkpoint",
  "number": "150",
  "title": "",
  "body": "  Find the limits:          Note that as and is bounded between and . By the Squeeze Theorem, since , the limit is .           Multiply the numerator and denominator by :     "
},
{
  "id": "sec-exp-derivatives-15",
  "level": "2",
  "url": "sec-exp-derivatives.html#sec-exp-derivatives-15",
  "type": "Checkpoint",
  "number": "151",
  "title": "",
  "body": "  Find an equation for a line that is tangent to the curve and goes through .   The graph of and its tangent line at .   The exponential function and its tangent line at the y-intercept.       To find the equation of the tangent line, we need a point and a slope:    Point: When , . So the point is .     Slope: The derivative is . Evaluating at , the slope is .   Using the point-slope form :    "
},
{
  "id": "sec-chain-rule",
  "level": "1",
  "url": "sec-chain-rule.html",
  "type": "Section",
  "number": "",
  "title": "The Chain Rule",
  "body": " The Chain Rule   In this section, we will explore the Chain Rule, a fundamental differentiation rule that allows us to find the derivative of composite functions. The Chain Rule is essential for differentiating a wide variety of functions, including those involving exponentials, logarithms, trigonometric functions, and more complex compositions.    Composed Function   The composed function , the composition of and , is defined as       For and , find and .    To find , we substitute into : To find , we substitute into :       For and , find and .    To find , we substitute into : To find , we substitute into :      Extended Power Rule  The extended power functions, such as , can also be differentiated using the Chain Rule.  The extended power rule states that if , where is a differentiable function and is a constant, then the derivative of with respect to is given by:    Extended Power Rule   Suppose that is a function of , then for any real number ,     The chain rule tells you how to handle compositions. Generally speaking, if a function is obtained \"in two steps\" as a composition of two simpler functions and , it is represented as , where is a function of . Then     Identify the inner function and find the derivative for each expression.        Let the inner function be . Then .  Applying the Extended Power Rule:           Let the inner function be . Then .  Applying the Extended Power Rule:           Let the inner function be . Then the expression is .  Applying the Extended Power Rule:         Differentiate the following functions.         Using the Extended Power Rule with :            Differentiate each term using the Extended Power Rule:   Factoring out :            Apply the Product Rule :   Factoring out the common terms :          The Chain Rule  The Chain Rule is a fundamental differentiation rule that allows us to find the derivative of composite functions. If we have a function defined as , where and are differentiable functions, then the derivative of with respect to is given by:    The Chain Rule   The derivative of the composition is given by Alternatively, suppose that and , then     In other words, to differentiate a composite function, we first differentiate the outer function with respect to its argument , and then multiply by the derivative of the inner function with respect to .  The Chain Rule is essential for differentiating a wide variety of functions, including those involving exponentials, logarithms, trigonometric functions, and more complex compositions. It allows us to break down complicated functions into simpler parts, making differentiation more manageable.  For example, if we want to differentiate , we can identify and . Applying the Chain Rule, we get:     The function is decomposed as with   Derivatives:   Derivative of by the chain rule:       The function is decomposed as with   Derivatives:   Derivative of by the chain rule:       The function is decomposed as with   Derivatives:   Derivative of by the chain rule:     The Chain Rule is a powerful tool that extends our ability to differentiate beyond simple functions, enabling us to handle a wide range of mathematical models and applications in physics, engineering, economics, and other fields.       To find the derivative of , we can use the Chain Rule. Let , so that . Then, we have:       For and , find .    First, we find the individual derivatives:   Using the Chain Rule :   Substitute back into the expression:       Find functions and such that , then differentiate:     First, we decompose the function:   The \"inner\" function is .    The \"outer\" function is .     Next, we find the derivative using the Chain Rule:         Find the points on the graph of at which the tangent line is horizontal.    A tangent line is horizontal when the derivative is zero. First, we find using the Chain Rule:   Set the derivative equal to zero and use the double-angle identity :    This gives two cases for :          Finally, we find the -coordinates for these points:       Chain Rule Practice with Solutions   Differentiate the following functions.         Rewrite as . By the Chain Rule:           Rewrite as :           Using the Product Rule:            Using Product and Chain Rules:            This requires a nested Chain Rule:                                  Outer is power, inner is tangent, innermost is :                                 Using double angle identity or Product Rule:           Note: This is :                      Using Quotient Rule and Chain Rule:                   Higher Order Derivatives   Higher-Order Derivatives   The second derivative of is denoted by and is defined as       For , find .    First, rewrite the function as a power:   Find the first derivative:   Differentiate again to find the second derivative:       Find the first and second derivatives of the following functions.         Rewrite as .            Using the Chain Rule:            Using the Chain Rule where the outer function is : For the second derivative, use the Product Rule:         Application of Chain Rule (1)   If and if , , , and , find and .    First, we find :   Next, we use the Chain Rule to find . Evaluating at :       Application of Chain Rule (2)   If and if , , , , and , find .    By the Chain Rule, . Substituting :   Substitute the given values:    Solving for :     "
},
{
  "id": "def-composed-function",
  "level": "2",
  "url": "sec-chain-rule.html#def-composed-function",
  "type": "Definition",
  "number": "153",
  "title": "Composed Function.",
  "body": " Composed Function   The composed function , the composition of and , is defined as    "
},
{
  "id": "sec-chain-rule-4",
  "level": "2",
  "url": "sec-chain-rule.html#sec-chain-rule-4",
  "type": "Checkpoint",
  "number": "154",
  "title": "",
  "body": "  For and , find and .    To find , we substitute into : To find , we substitute into :    "
},
{
  "id": "sec-chain-rule-5",
  "level": "2",
  "url": "sec-chain-rule.html#sec-chain-rule-5",
  "type": "Checkpoint",
  "number": "155",
  "title": "",
  "body": "  For and , find and .    To find , we substitute into : To find , we substitute into :    "
},
{
  "id": "thm-extended-power-rule",
  "level": "2",
  "url": "sec-chain-rule.html#thm-extended-power-rule",
  "type": "Theorem",
  "number": "156",
  "title": "Extended Power Rule.",
  "body": " Extended Power Rule   Suppose that is a function of , then for any real number ,    "
},
{
  "id": "example-differentiate-composition",
  "level": "2",
  "url": "sec-chain-rule.html#example-differentiate-composition",
  "type": "Example",
  "number": "157",
  "title": "",
  "body": "  Identify the inner function and find the derivative for each expression.        Let the inner function be . Then .  Applying the Extended Power Rule:           Let the inner function be . Then .  Applying the Extended Power Rule:           Let the inner function be . Then the expression is .  Applying the Extended Power Rule:      "
},
{
  "id": "subsec-extended-power-rule-7",
  "level": "2",
  "url": "sec-chain-rule.html#subsec-extended-power-rule-7",
  "type": "Checkpoint",
  "number": "158",
  "title": "",
  "body": "  Differentiate the following functions.         Using the Extended Power Rule with :            Differentiate each term using the Extended Power Rule:   Factoring out :            Apply the Product Rule :   Factoring out the common terms :       "
},
{
  "id": "thm-chain-rule",
  "level": "2",
  "url": "sec-chain-rule.html#thm-chain-rule",
  "type": "Theorem",
  "number": "159",
  "title": "The Chain Rule.",
  "body": " The Chain Rule   The derivative of the composition is given by Alternatively, suppose that and , then    "
},
{
  "id": "subsec-Chain-Rule-7",
  "level": "2",
  "url": "sec-chain-rule.html#subsec-Chain-Rule-7",
  "type": "Example",
  "number": "160",
  "title": "",
  "body": "  The function is decomposed as with   Derivatives:   Derivative of by the chain rule:    "
},
{
  "id": "subsec-Chain-Rule-8",
  "level": "2",
  "url": "sec-chain-rule.html#subsec-Chain-Rule-8",
  "type": "Example",
  "number": "161",
  "title": "",
  "body": "  The function is decomposed as with   Derivatives:   Derivative of by the chain rule:    "
},
{
  "id": "subsec-Chain-Rule-9",
  "level": "2",
  "url": "sec-chain-rule.html#subsec-Chain-Rule-9",
  "type": "Example",
  "number": "162",
  "title": "",
  "body": "  The function is decomposed as with   Derivatives:   Derivative of by the chain rule:    "
},
{
  "id": "subsec-Chain-Rule-11",
  "level": "2",
  "url": "sec-chain-rule.html#subsec-Chain-Rule-11",
  "type": "Example",
  "number": "163",
  "title": "",
  "body": "     To find the derivative of , we can use the Chain Rule. Let , so that . Then, we have:    "
},
{
  "id": "subsec-Chain-Rule-12",
  "level": "2",
  "url": "sec-chain-rule.html#subsec-Chain-Rule-12",
  "type": "Example",
  "number": "164",
  "title": "",
  "body": "  For and , find .    First, we find the individual derivatives:   Using the Chain Rule :   Substitute back into the expression:    "
},
{
  "id": "subsec-Chain-Rule-13",
  "level": "2",
  "url": "sec-chain-rule.html#subsec-Chain-Rule-13",
  "type": "Checkpoint",
  "number": "165",
  "title": "",
  "body": "  Find functions and such that , then differentiate:     First, we decompose the function:   The \"inner\" function is .    The \"outer\" function is .     Next, we find the derivative using the Chain Rule:      "
},
{
  "id": "exercise-horizontal-tangents-trig",
  "level": "2",
  "url": "sec-chain-rule.html#exercise-horizontal-tangents-trig",
  "type": "Checkpoint",
  "number": "166",
  "title": "",
  "body": "  Find the points on the graph of at which the tangent line is horizontal.    A tangent line is horizontal when the derivative is zero. First, we find using the Chain Rule:   Set the derivative equal to zero and use the double-angle identity :    This gives two cases for :          Finally, we find the -coordinates for these points:    "
},
{
  "id": "exercises-chain-rule-solutions-3",
  "level": "2",
  "url": "sec-chain-rule.html#exercises-chain-rule-solutions-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "     Rewrite as . By the Chain Rule:    "
},
{
  "id": "exercises-chain-rule-solutions-4",
  "level": "2",
  "url": "sec-chain-rule.html#exercises-chain-rule-solutions-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "     Rewrite as :    "
},
{
  "id": "exercises-chain-rule-solutions-5",
  "level": "2",
  "url": "sec-chain-rule.html#exercises-chain-rule-solutions-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "     Using the Product Rule:     "
},
{
  "id": "exercises-chain-rule-solutions-6",
  "level": "2",
  "url": "sec-chain-rule.html#exercises-chain-rule-solutions-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "     Using Product and Chain Rules:     "
},
{
  "id": "exercises-chain-rule-solutions-7",
  "level": "2",
  "url": "sec-chain-rule.html#exercises-chain-rule-solutions-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "     This requires a nested Chain Rule:     "
},
{
  "id": "exercises-chain-rule-solutions-8",
  "level": "2",
  "url": "sec-chain-rule.html#exercises-chain-rule-solutions-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "         "
},
{
  "id": "exercises-chain-rule-solutions-9",
  "level": "2",
  "url": "sec-chain-rule.html#exercises-chain-rule-solutions-9",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "         "
},
{
  "id": "exercises-chain-rule-solutions-10",
  "level": "2",
  "url": "sec-chain-rule.html#exercises-chain-rule-solutions-10",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "     Outer is power, inner is tangent, innermost is :    "
},
{
  "id": "exercises-chain-rule-solutions-11",
  "level": "2",
  "url": "sec-chain-rule.html#exercises-chain-rule-solutions-11",
  "type": "Exercise",
  "number": "9",
  "title": "",
  "body": "         "
},
{
  "id": "exercises-chain-rule-solutions-12",
  "level": "2",
  "url": "sec-chain-rule.html#exercises-chain-rule-solutions-12",
  "type": "Exercise",
  "number": "10",
  "title": "",
  "body": "         "
},
{
  "id": "exercises-chain-rule-solutions-13",
  "level": "2",
  "url": "sec-chain-rule.html#exercises-chain-rule-solutions-13",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "     Using double angle identity or Product Rule:    "
},
{
  "id": "exercises-chain-rule-solutions-14",
  "level": "2",
  "url": "sec-chain-rule.html#exercises-chain-rule-solutions-14",
  "type": "Exercise",
  "number": "12",
  "title": "",
  "body": "     Note: This is :    "
},
{
  "id": "exercises-chain-rule-solutions-15",
  "level": "2",
  "url": "sec-chain-rule.html#exercises-chain-rule-solutions-15",
  "type": "Exercise",
  "number": "13",
  "title": "",
  "body": "         "
},
{
  "id": "exercises-chain-rule-solutions-16",
  "level": "2",
  "url": "sec-chain-rule.html#exercises-chain-rule-solutions-16",
  "type": "Exercise",
  "number": "14",
  "title": "",
  "body": "     Using Quotient Rule and Chain Rule:     "
},
{
  "id": "exercises-chain-rule-solutions-17",
  "level": "2",
  "url": "sec-chain-rule.html#exercises-chain-rule-solutions-17",
  "type": "Exercise",
  "number": "15",
  "title": "",
  "body": "         "
},
{
  "id": "def-higher-order-derivatives",
  "level": "2",
  "url": "sec-chain-rule.html#def-higher-order-derivatives",
  "type": "Definition",
  "number": "167",
  "title": "Higher-Order Derivatives.",
  "body": " Higher-Order Derivatives   The second derivative of is denoted by and is defined as    "
},
{
  "id": "example-second-derivative-fraction",
  "level": "2",
  "url": "sec-chain-rule.html#example-second-derivative-fraction",
  "type": "Example",
  "number": "168",
  "title": "",
  "body": "  For , find .    First, rewrite the function as a power:   Find the first derivative:   Differentiate again to find the second derivative:    "
},
{
  "id": "subsec-higher-order-derivatives-4",
  "level": "2",
  "url": "sec-chain-rule.html#subsec-higher-order-derivatives-4",
  "type": "Checkpoint",
  "number": "169",
  "title": "",
  "body": "  Find the first and second derivatives of the following functions.         Rewrite as .            Using the Chain Rule:            Using the Chain Rule where the outer function is : For the second derivative, use the Product Rule:      "
},
{
  "id": "sec-chain-rule-10",
  "level": "2",
  "url": "sec-chain-rule.html#sec-chain-rule-10",
  "type": "Checkpoint",
  "number": "170",
  "title": "Application of Chain Rule (1).",
  "body": " Application of Chain Rule (1)   If and if , , , and , find and .    First, we find :   Next, we use the Chain Rule to find . Evaluating at :     "
},
{
  "id": "sec-chain-rule-11",
  "level": "2",
  "url": "sec-chain-rule.html#sec-chain-rule-11",
  "type": "Checkpoint",
  "number": "171",
  "title": "Application of Chain Rule (2).",
  "body": " Application of Chain Rule (2)   If and if , , , , and , find .    By the Chain Rule, . Substituting :   Substitute the given values:    Solving for :    "
},
{
  "id": "sec-Implicit-Differentiation",
  "level": "1",
  "url": "sec-Implicit-Differentiation.html",
  "type": "Section",
  "number": "",
  "title": "Implicit Differentiation",
  "body": " Implicit Differentiation  In the previous sections, we have focused on finding derivatives of functions that are explicitly defined as . However, there are many situations where we encounter equations that define implicitly in terms of . In this section, we will explore how to find the derivative of with respect to when is defined implicitly.   Explicit and Implicit Functions   Functions that express one variable directly in terms of another variable are called explicit functions . For example, or .  Some functions are defined by a relation between and where neither variable is isolated; these are called implicit functions . For example, or .    Consider the equation of a circle centered at the origin with radius :     In this case, is not explicitly defined as a function of , but we can still find using implicit differentiation. To do this, we will differentiate both sides of the equation with respect to , treating as a function of (i.e., ).    How many different functions are determined implicitly by the equation ?    The equation represents a circle, which fails the vertical line test and is therefore not a single function. However, it implicitly defines infinitely many functions.  The two most common \"continuous\" functions determined by this relation are found by solving for : These represent the upper and lower semicircles, respectively.      Given , find by differentiating explicitly.    First, we solve the equation for to get an explicit function:   We choose the positive branch and differentiate using the Chain Rule:    Since , we can substitute back in to see the relationship:     If the equation determines an implicit function , then for every in the domain of . However, there is no obvious way to solve for in terms of to obtain .   It is possible to state conditions under which an implicit function exists and is differentiable. In this section, we will assume that a given equation in and determines a differentiable function such that if is substituted for , the equation is an identity for every in the domain of .    Implicit Differentiation (Extended Power Rule)   The derivative of can be found by the method of implicit differentiation , in which we differentiate each term of the equation with respect to . This involves treating as a function of and applying the Chain Rule, specifically when computing for all integers .    To find the derivative of with respect to , we will differentiate both sides of the equation with respect to . Applying the differentiation rules, we get:     This simplifies to:   Solving for , we find:   This result shows that the derivative of with respect to can be found even when is defined implicitly; notice that the derivative depends on both and . This method yields the same result as differentiating explicitly in , but it is often more efficient and can be applied to complex equations where solving for explicitly is difficult or impossible.   Method of Implicit Differentiation     Differentiate both sides of the equation with respect to x , treating as a differentiable function of .    Collect all terms containing on one side of the equation and move all other terms to the other side.    Factor out and solve for it.        Suppose . Find .    First, we differentiate each term with respect to . Note that the first term requires the Product Rule and the second requires the Chain Rule:   Differentiating the entire equation produces:   Collect the terms containing on the left and move the rest to the right:   Finally, solve for by dividing:       If , find . Then, find an equation of the tangent line to the circle at the point .    First, we find using implicit differentiation:   Next, we evaluate the derivative at the point to find the slope : Since the derivative is undefined at this point, the tangent line is vertical.  The equation of a vertical line passing through is:       Assuming that the equation determines, implicitly, a differentiable function such that , find its derivative.    We differentiate both sides with respect to , treating as a function of :   Collect the terms and factor:   Solve for :       Find the equation of the tangent line to the graph of at the point .    Using the derivative found in , we evaluate the slope at the point :   Using the point-slope form :    The final equation of the tangent line is:      Implicit Differentiation Exercises     Find if .    Differentiating each term with respect to (using the Product Rule on the first two terms): Group the terms:         Find if .    Apply the Product Rule and Chain Rule: Isolate :         For :     Find using implicit differentiation.          Find the slope of the tangent line to the curve at the point .    Substitute and into the derivative found above: The slope of the tangent line is .        Find if .            Find if .    First derivative:   Second derivative (using Quotient Rule):   To finish, substitute the expression for back into this equation.     "
},
{
  "id": "def-explicit-implicit-functions",
  "level": "2",
  "url": "sec-Implicit-Differentiation.html#def-explicit-implicit-functions",
  "type": "Definition",
  "number": "172",
  "title": "Explicit and Implicit Functions.",
  "body": " Explicit and Implicit Functions   Functions that express one variable directly in terms of another variable are called explicit functions . For example, or .  Some functions are defined by a relation between and where neither variable is isolated; these are called implicit functions . For example, or .   "
},
{
  "id": "example-implicit-functions-circle",
  "level": "2",
  "url": "sec-Implicit-Differentiation.html#example-implicit-functions-circle",
  "type": "Example",
  "number": "173",
  "title": "",
  "body": "  How many different functions are determined implicitly by the equation ?    The equation represents a circle, which fails the vertical line test and is therefore not a single function. However, it implicitly defines infinitely many functions.  The two most common \"continuous\" functions determined by this relation are found by solving for : These represent the upper and lower semicircles, respectively.   "
},
{
  "id": "example-explicit-differentiation",
  "level": "2",
  "url": "sec-Implicit-Differentiation.html#example-explicit-differentiation",
  "type": "Example",
  "number": "174",
  "title": "",
  "body": "  Given , find by differentiating explicitly.    First, we solve the equation for to get an explicit function:   We choose the positive branch and differentiate using the Chain Rule:    Since , we can substitute back in to see the relationship:    "
},
{
  "id": "remark-implicit-existence",
  "level": "2",
  "url": "sec-Implicit-Differentiation.html#remark-implicit-existence",
  "type": "Remark",
  "number": "175",
  "title": "",
  "body": " It is possible to state conditions under which an implicit function exists and is differentiable. In this section, we will assume that a given equation in and determines a differentiable function such that if is substituted for , the equation is an identity for every in the domain of .  "
},
{
  "id": "def-implicit-diff-extended-power-rule",
  "level": "2",
  "url": "sec-Implicit-Differentiation.html#def-implicit-diff-extended-power-rule",
  "type": "Definition",
  "number": "176",
  "title": "Implicit Differentiation (Extended Power Rule).",
  "body": " Implicit Differentiation (Extended Power Rule)   The derivative of can be found by the method of implicit differentiation , in which we differentiate each term of the equation with respect to . This involves treating as a function of and applying the Chain Rule, specifically when computing for all integers .   "
},
{
  "id": "method-implicit-differentiation-2",
  "level": "2",
  "url": "sec-Implicit-Differentiation.html#method-implicit-differentiation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "x "
},
{
  "id": "example-implicit-product-rule",
  "level": "2",
  "url": "sec-Implicit-Differentiation.html#example-implicit-product-rule",
  "type": "Example",
  "number": "177",
  "title": "",
  "body": "  Suppose . Find .    First, we differentiate each term with respect to . Note that the first term requires the Product Rule and the second requires the Chain Rule:   Differentiating the entire equation produces:   Collect the terms containing on the left and move the rest to the right:   Finally, solve for by dividing:    "
},
{
  "id": "exercise-circle-tangent",
  "level": "2",
  "url": "sec-Implicit-Differentiation.html#exercise-circle-tangent",
  "type": "Checkpoint",
  "number": "178",
  "title": "",
  "body": "  If , find . Then, find an equation of the tangent line to the circle at the point .    First, we find using implicit differentiation:   Next, we evaluate the derivative at the point to find the slope : Since the derivative is undefined at this point, the tangent line is vertical.  The equation of a vertical line passing through is:    "
},
{
  "id": "exercise-implicit-poly-derivative",
  "level": "2",
  "url": "sec-Implicit-Differentiation.html#exercise-implicit-poly-derivative",
  "type": "Checkpoint",
  "number": "179",
  "title": "",
  "body": "  Assuming that the equation determines, implicitly, a differentiable function such that , find its derivative.    We differentiate both sides with respect to , treating as a function of :   Collect the terms and factor:   Solve for :    "
},
{
  "id": "exercise-implicit-tangent-line",
  "level": "2",
  "url": "sec-Implicit-Differentiation.html#exercise-implicit-tangent-line",
  "type": "Checkpoint",
  "number": "180",
  "title": "",
  "body": "  Find the equation of the tangent line to the graph of at the point .    Using the derivative found in , we evaluate the slope at the point :   Using the point-slope form :    The final equation of the tangent line is:    "
},
{
  "id": "exercises-implicit-differentiation-set-2",
  "level": "2",
  "url": "sec-Implicit-Differentiation.html#exercises-implicit-differentiation-set-2",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Find if .    Differentiating each term with respect to (using the Product Rule on the first two terms): Group the terms:     "
},
{
  "id": "exercises-implicit-differentiation-set-3",
  "level": "2",
  "url": "sec-Implicit-Differentiation.html#exercises-implicit-differentiation-set-3",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Find if .    Apply the Product Rule and Chain Rule: Isolate :     "
},
{
  "id": "exercises-implicit-differentiation-set-4",
  "level": "2",
  "url": "sec-Implicit-Differentiation.html#exercises-implicit-differentiation-set-4",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  For :     Find using implicit differentiation.          Find the slope of the tangent line to the curve at the point .    Substitute and into the derivative found above: The slope of the tangent line is .    "
},
{
  "id": "exercises-implicit-differentiation-set-5",
  "level": "2",
  "url": "sec-Implicit-Differentiation.html#exercises-implicit-differentiation-set-5",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Find if .        "
},
{
  "id": "exercises-implicit-differentiation-set-6",
  "level": "2",
  "url": "sec-Implicit-Differentiation.html#exercises-implicit-differentiation-set-6",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Find if .    First derivative:   Second derivative (using Quotient Rule):   To finish, substitute the expression for back into this equation.   "
},
{
  "id": "sec-Derivatives-Logarithmic-Functions",
  "level": "1",
  "url": "sec-Derivatives-Logarithmic-Functions.html",
  "type": "Section",
  "number": "",
  "title": "Derivatives of Logarithmic Functions",
  "body": " Derivatives of Logarithmic Functions  In this section, we will find the derivatives of logarithmic functions. We will start with the natural logarithm and then extend our results to logarithms with other bases.   Laws of Logarithm   Let and be positive real numbers with .     (product rule)     (quotient rule)     (power rule)         The change-of-base Property      The natural logarithm function, denoted as , is the inverse of the exponential function . To find the derivative of , we can use implicit differentiation. Let , which implies that . Differentiating both sides with respect to , we get:   How to Derive the Derivative Formula   Case 1: (where )   Let . We rewrite the logarithmic equation in its equivalent exponential form: Next, we differentiate both sides implicitly with respect to :  Now we isolate : Finally, substituting back into the denominator yields the identity:    Case 2: (Chain Rule for )   We apply the Calculus Chain Rule, which states: Substituting the known derivative from Case 1 where , we get:    Derivative of the Natural Logarithm Function  For a differentiable function where :   For :      Differentiate each of the following functions:          1. We apply the chain rule by setting the inner function . The derivative is given by: Evaluating the inner derivative yields:   2. Alternatively, applying the product rule of logarithms first gives: Since is a constant, differentiating both sides directly gives:            We use the properties of logarithms to expand the quotient before differentiating:  Next, we take the derivative of each individual term:  To find a single fractional expression, we find a common denominator:        Expand the logarithmic expression and find the derivatives:          First, apply the product rule and power rule of logarithms to fully expand the expression:    Next, use the base change formula to rewrite the expressions in terms of natural logarithms for easier differentiation:   Now, find the derivative with respect to using the chain rule on the second term:    Combine the expressions over a common denominator:            First, completely expand the quotient, products, and fractional powers using log laws:     Next, differentiate each isolated logarithmic term applying the chain rule where necessary:         Derivatives of and  Every exponential function can be expressed as a power of the natural exponential function:   For constants and , the derivatives are given by:      Differentiate:     We apply the derivative rule for general exponential functions, , where the base is :   Alternatively, we can rewrite the function using base before differentiating: Applying the chain rule yields: Substituting back into the expression gives the identical result:       Differentiate each of the following functions:          We can simplify the expression first using the properties of logarithms. By bringing down the exponent : Since is a constant coefficient, we differentiate directly with respect to :   Alternatively, we can use the change-of-base formula to rewrite the expression in terms of natural logarithms: Differentiating this linear expression gives: Note that both forms are equivalent because .           Given the complex product and quotient structure, we use logarithmic differentiation. First, take the natural logarithm of both sides: Expand the right side completely using the product, quotient, and power laws of logarithms: Next, differentiate both sides implicitly with respect to , applying the chain rule: Finally, isolate by multiplying both sides by , and substitute the original algebraic expression back in for :        Exercises on Logarithmic Differentiation   Differentiate each of the following functions with respect to its independent variable:          First, apply logarithmic properties to simplify the expression by bringing down the exponent: Differentiating directly with respect to yields:            We apply the chain rule, treating the outer function as where : Evaluating the inner derivative yields:            Assuming denotes the common logarithm (base 10), we first apply the general logarithm derivative rule : Compute the derivatives of the trigonometric functions: Factor out in the numerator to cancel common terms:  Note: If refers to the natural logarithm in your context, the factor is omitted, yielding .           We apply the quotient rule with respect to : Factor out in the numerator to simplify the terms: Combine terms to get the final simplified expression:            First, use exponent rules to simplify the function before differentiating: Now, apply the product rule to evaluate the derivative: Factor out :            Since the equation defines implicitly, we use implicit differentiation with respect to . Differentiate both sides: Gather all terms involving onto the left side of the equation: Factor out : Isolate : Multiply the numerator and denominator by to clear the complex fraction:       "
},
{
  "id": "sec-Derivatives-Logarithmic-Functions-3",
  "level": "2",
  "url": "sec-Derivatives-Logarithmic-Functions.html#sec-Derivatives-Logarithmic-Functions-3",
  "type": "Theorem",
  "number": "181",
  "title": "Laws of Logarithm.",
  "body": " Laws of Logarithm   Let and be positive real numbers with .     (product rule)     (quotient rule)     (power rule)       "
},
{
  "id": "example-derivative-ln-variants",
  "level": "2",
  "url": "sec-Derivatives-Logarithmic-Functions.html#example-derivative-ln-variants",
  "type": "Example",
  "number": "182",
  "title": "",
  "body": "  Differentiate each of the following functions:          1. We apply the chain rule by setting the inner function . The derivative is given by: Evaluating the inner derivative yields:   2. Alternatively, applying the product rule of logarithms first gives: Since is a constant, differentiating both sides directly gives:            We use the properties of logarithms to expand the quotient before differentiating:  Next, we take the derivative of each individual term:  To find a single fractional expression, we find a common denominator:     "
},
{
  "id": "exercise-expand-logarithmic-derivatives",
  "level": "2",
  "url": "sec-Derivatives-Logarithmic-Functions.html#exercise-expand-logarithmic-derivatives",
  "type": "Checkpoint",
  "number": "183",
  "title": "",
  "body": "  Expand the logarithmic expression and find the derivatives:          First, apply the product rule and power rule of logarithms to fully expand the expression:    Next, use the base change formula to rewrite the expressions in terms of natural logarithms for easier differentiation:   Now, find the derivative with respect to using the chain rule on the second term:    Combine the expressions over a common denominator:            First, completely expand the quotient, products, and fractional powers using log laws:     Next, differentiate each isolated logarithmic term applying the chain rule where necessary:       "
},
{
  "id": "example-derivative-general-exponential",
  "level": "2",
  "url": "sec-Derivatives-Logarithmic-Functions.html#example-derivative-general-exponential",
  "type": "Example",
  "number": "184",
  "title": "",
  "body": "  Differentiate:     We apply the derivative rule for general exponential functions, , where the base is :   Alternatively, we can rewrite the function using base before differentiating: Applying the chain rule yields: Substituting back into the expression gives the identical result:    "
},
{
  "id": "example-derivative-general-log-logarithmic-diff",
  "level": "2",
  "url": "sec-Derivatives-Logarithmic-Functions.html#example-derivative-general-log-logarithmic-diff",
  "type": "Example",
  "number": "185",
  "title": "",
  "body": "  Differentiate each of the following functions:          We can simplify the expression first using the properties of logarithms. By bringing down the exponent : Since is a constant coefficient, we differentiate directly with respect to :   Alternatively, we can use the change-of-base formula to rewrite the expression in terms of natural logarithms: Differentiating this linear expression gives: Note that both forms are equivalent because .           Given the complex product and quotient structure, we use logarithmic differentiation. First, take the natural logarithm of both sides: Expand the right side completely using the product, quotient, and power laws of logarithms: Next, differentiate both sides implicitly with respect to , applying the chain rule: Finally, isolate by multiplying both sides by , and substitute the original algebraic expression back in for :      "
},
{
  "id": "exercises-logarithmic-differentiation-3",
  "level": "2",
  "url": "sec-Derivatives-Logarithmic-Functions.html#exercises-logarithmic-differentiation-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "       First, apply logarithmic properties to simplify the expression by bringing down the exponent: Differentiating directly with respect to yields:    "
},
{
  "id": "exercises-logarithmic-differentiation-4",
  "level": "2",
  "url": "sec-Derivatives-Logarithmic-Functions.html#exercises-logarithmic-differentiation-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "       We apply the chain rule, treating the outer function as where : Evaluating the inner derivative yields:    "
},
{
  "id": "exercises-logarithmic-differentiation-5",
  "level": "2",
  "url": "sec-Derivatives-Logarithmic-Functions.html#exercises-logarithmic-differentiation-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "       Assuming denotes the common logarithm (base 10), we first apply the general logarithm derivative rule : Compute the derivatives of the trigonometric functions: Factor out in the numerator to cancel common terms:  Note: If refers to the natural logarithm in your context, the factor is omitted, yielding .   "
},
{
  "id": "exercises-logarithmic-differentiation-6",
  "level": "2",
  "url": "sec-Derivatives-Logarithmic-Functions.html#exercises-logarithmic-differentiation-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "       We apply the quotient rule with respect to : Factor out in the numerator to simplify the terms: Combine terms to get the final simplified expression:    "
},
{
  "id": "exercises-logarithmic-differentiation-7",
  "level": "2",
  "url": "sec-Derivatives-Logarithmic-Functions.html#exercises-logarithmic-differentiation-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "       First, use exponent rules to simplify the function before differentiating: Now, apply the product rule to evaluate the derivative: Factor out :    "
},
{
  "id": "exercises-logarithmic-differentiation-8",
  "level": "2",
  "url": "sec-Derivatives-Logarithmic-Functions.html#exercises-logarithmic-differentiation-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "       Since the equation defines implicitly, we use implicit differentiation with respect to . Differentiate both sides: Gather all terms involving onto the left side of the equation: Factor out : Isolate : Multiply the numerator and denominator by to clear the complex fraction:    "
},
{
  "id": "sec-Derivatives-Inverse-Trig-Functions",
  "level": "1",
  "url": "sec-Derivatives-Inverse-Trig-Functions.html",
  "type": "Section",
  "number": "",
  "title": "Derivatives of Inverse Trigonometric Functions",
  "body": " Derivatives of Inverse Trigonometric Functions   In this section, we develop the differentiation formulas for the inverse trigonometric functions. By applying implicit differentiation to our geometric and algebraic definitions of these functions, we can find their rates of change explicitly in terms of the independent variable .    Inverse Trigonometric Functions       is the number in for which .     is the number in for which .     is the number in for which .         Find the exact angle in radians for each of the following expressions:          Let . By definition, this means: where must lie in the restricted principal interval . Looking at the standard unit circle in the first quadrant, the unique angle matching this condition is:            Let . This is equivalent to solving: where must lie in the restricted principal interval . Since the cosine value is negative, the angle must terminate in the second quadrant. The reference angle whose cosine equals is . Subtracting this reference angle from yields:          Let . This implies: where must lie in the open principal interval . Since the tangent value is negative, the angle must terminate in the fourth quadrant. The reference angle whose tangent is is . Expressing this within the required fourth-quadrant range yields a negative rotation:        Find each of the following limits:        The function is continuous on its closed domain . Therefore, we evaluate the left-hand limit approaching by direct substitution: Since and falls within the principal range interval , we get:            As grows infinitely large without bound ( ), we are looking for the angle in the principal open interval whose tangent value approaches infinity. Geometrically, this corresponds to the location of the right-hand horizontal asymptote on the graph of the arctangent function:           By definition, the inverse secant function can be rewritten using the reciprocal identity: Taking the limit as means the inner component : Since and falls within the principal range interval , we conclude:       Derivatives of Inverse Trigonometric Functions  Let be a differentiable function of . The derivatives of the primary inverse trigonometric functions are defined as follows:       Derivation of the Derivative of  To find the derivative of , we begin with its defining algebraic constraint: Differentiating both sides implicitly with respect to yields: Isolating the derivative component gives us: Because is restricted to the interval , the cosine value remains non-negative ( ). We apply the fundamental Pythagorean trigonometric identity to isolate : Substituting directly back into the square root expression completes our calculation:      Differentiate each of the following expressions:           Method 1: Formula Method (Chain Rule) We apply the inverse sine derivative rule with the chain rule, setting the inner function : Substituting and its inner derivative yields:     Method 2: Geometric SOHCAHTOA and Implicit Differentiation Let , which means . Using SOHCAHTOA, . We sketch a reference right triangle with an angle , opposite side , and hypotenuse .   Reference triangle for   A right triangle with angle y, opposite side x squared, hypotenuse 1, and adjacent side square root of 1 minus x to the fourth power.     By the Pythagorean theorem, the adjacent side is . From the triangle, we find .  Now differentiate implicitly with respect to : Substitute into the expression:            Method 1: Formula Method (Chain Rule) We apply the inverse tangent derivative rule combined with the chain rule, setting the inner function : Substituting and computing its inner derivative gives:     Method 2: Geometric SOHCAHTOA and Implicit Differentiation Let , meaning . We sketch a reference right triangle with angle , opposite side , and adjacent side .   Reference triangle for   A right triangle with angle y, opposite side 5x cubed, adjacent side 1, and hypotenuse square root of 1 plus 25x to the sixth power.     The hypotenuse is . From the triangle, we find , which means .  Now differentiate implicitly with respect to : Substitute into the expression:            Method 1: Formula Method (Chain Rule) We apply the inverse secant derivative rule with the chain rule, setting the inner function : Substituting and its inner derivative gives: Since for all real numbers, we can safely remove the absolute value bars:    Method 2: Geometric SOHCAHTOA and Implicit Differentiation Let , meaning . We sketch a reference right triangle with angle , hypotenuse , and adjacent side .   Reference triangle for   A right triangle with angle y, hypotenuse x squared plus 3, adjacent side 1, and opposite side square root of x to the fourth plus 6x squared plus 8.     The opposite side length matches . From the triangle, we find .  Now differentiate implicitly with respect to : Substitute and back into the expression:       Exercises on Inverse Trigonometric Derivatives (Geometric Method)   Differentiate each of the following functions with respect to its independent variable using right triangle geometry, SOHCAHTOA relationships, and implicit differentiation.          Rewrite the function as . Using SOHCAHTOA, . We envision a right triangle with an angle , adjacent side , and hypotenuse . By the Pythagorean theorem, the opposite side is . From this geometry, we find .  Now, differentiate implicitly with respect to :  Substitute back into the equation:            Rewrite the function as . Using SOHCAHTOA, . We envision a right triangle with an angle , opposite side , and hypotenuse . By the Pythagorean theorem, the adjacent side is . From this geometry, we find .  Now, differentiate implicitly with respect to :  Substitute back into the equation:            Rewrite the function as . Using SOHCAHTOA, . We envision a right triangle with an angle , hypotenuse , and opposite side . By the Pythagorean theorem, the adjacent side is . From this geometry, we find .  Now, differentiate implicitly with respect to :  Substitute and back into the equation:  Note: For negative values of , absolute value bars are required to ensure a proper positive range for the derivative of a cosecant root, yielding .           Rewrite the function as . Using SOHCAHTOA, . We envision a right triangle with an angle , opposite side , and adjacent side . By the Pythagorean theorem, the hypotenuse is . From this geometry, we find , which means .  Now, differentiate implicitly with respect to :  Substitute back into the equation:           We differentiate each part separately, applying the product rule to the second term: The derivative of the first term via the natural log chain rule is . For the second term, we use the product rule: .  To geometric-style differentiate the inner item , rewrite it as where and . The hypotenuse is , meaning and . Implicitly differentiating yields:   Combine both main parts back together and subtract:             Rewrite the function as . Using SOHCAHTOA, . We envision a right triangle with an angle , adjacent side , and hypotenuse . By the Pythagorean theorem, the opposite side length matches . From this geometry, we find .  Now, differentiate implicitly with respect to :  Substitute back into the equation:      "
},
{
  "id": "definition-inverse-trig-functions",
  "level": "2",
  "url": "sec-Derivatives-Inverse-Trig-Functions.html#definition-inverse-trig-functions",
  "type": "Definition",
  "number": "186",
  "title": "Inverse Trigonometric Functions.",
  "body": " Inverse Trigonometric Functions       is the number in for which .     is the number in for which .     is the number in for which .      "
},
{
  "id": "example-evaluate-inverse-trig-angles",
  "level": "2",
  "url": "sec-Derivatives-Inverse-Trig-Functions.html#example-evaluate-inverse-trig-angles",
  "type": "Example",
  "number": "187",
  "title": "",
  "body": "  Find the exact angle in radians for each of the following expressions:          Let . By definition, this means: where must lie in the restricted principal interval . Looking at the standard unit circle in the first quadrant, the unique angle matching this condition is:            Let . This is equivalent to solving: where must lie in the restricted principal interval . Since the cosine value is negative, the angle must terminate in the second quadrant. The reference angle whose cosine equals is . Subtracting this reference angle from yields:          Let . This implies: where must lie in the open principal interval . Since the tangent value is negative, the angle must terminate in the fourth quadrant. The reference angle whose tangent is is . Expressing this within the required fourth-quadrant range yields a negative rotation:     "
},
{
  "id": "example-inverse-trig-limits",
  "level": "2",
  "url": "sec-Derivatives-Inverse-Trig-Functions.html#example-inverse-trig-limits",
  "type": "Example",
  "number": "188",
  "title": "",
  "body": "  Find each of the following limits:        The function is continuous on its closed domain . Therefore, we evaluate the left-hand limit approaching by direct substitution: Since and falls within the principal range interval , we get:            As grows infinitely large without bound ( ), we are looking for the angle in the principal open interval whose tangent value approaches infinity. Geometrically, this corresponds to the location of the right-hand horizontal asymptote on the graph of the arctangent function:           By definition, the inverse secant function can be rewritten using the reciprocal identity: Taking the limit as means the inner component : Since and falls within the principal range interval , we conclude:     "
},
{
  "id": "example-derivative-inverse-trig-chain-rule",
  "level": "2",
  "url": "sec-Derivatives-Inverse-Trig-Functions.html#example-derivative-inverse-trig-chain-rule",
  "type": "Example",
  "number": "189",
  "title": "",
  "body": "  Differentiate each of the following expressions:           Method 1: Formula Method (Chain Rule) We apply the inverse sine derivative rule with the chain rule, setting the inner function : Substituting and its inner derivative yields:     Method 2: Geometric SOHCAHTOA and Implicit Differentiation Let , which means . Using SOHCAHTOA, . We sketch a reference right triangle with an angle , opposite side , and hypotenuse .   Reference triangle for   A right triangle with angle y, opposite side x squared, hypotenuse 1, and adjacent side square root of 1 minus x to the fourth power.     By the Pythagorean theorem, the adjacent side is . From the triangle, we find .  Now differentiate implicitly with respect to : Substitute into the expression:            Method 1: Formula Method (Chain Rule) We apply the inverse tangent derivative rule combined with the chain rule, setting the inner function : Substituting and computing its inner derivative gives:     Method 2: Geometric SOHCAHTOA and Implicit Differentiation Let , meaning . We sketch a reference right triangle with angle , opposite side , and adjacent side .   Reference triangle for   A right triangle with angle y, opposite side 5x cubed, adjacent side 1, and hypotenuse square root of 1 plus 25x to the sixth power.     The hypotenuse is . From the triangle, we find , which means .  Now differentiate implicitly with respect to : Substitute into the expression:            Method 1: Formula Method (Chain Rule) We apply the inverse secant derivative rule with the chain rule, setting the inner function : Substituting and its inner derivative gives: Since for all real numbers, we can safely remove the absolute value bars:    Method 2: Geometric SOHCAHTOA and Implicit Differentiation Let , meaning . We sketch a reference right triangle with angle , hypotenuse , and adjacent side .   Reference triangle for   A right triangle with angle y, hypotenuse x squared plus 3, adjacent side 1, and opposite side square root of x to the fourth plus 6x squared plus 8.     The opposite side length matches . From the triangle, we find .  Now differentiate implicitly with respect to : Substitute and back into the expression:     "
},
{
  "id": "exercises-inverse-trig-derivatives-geometric-3",
  "level": "2",
  "url": "sec-Derivatives-Inverse-Trig-Functions.html#exercises-inverse-trig-derivatives-geometric-3",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "       Rewrite the function as . Using SOHCAHTOA, . We envision a right triangle with an angle , adjacent side , and hypotenuse . By the Pythagorean theorem, the opposite side is . From this geometry, we find .  Now, differentiate implicitly with respect to :  Substitute back into the equation:    "
},
{
  "id": "exercises-inverse-trig-derivatives-geometric-4",
  "level": "2",
  "url": "sec-Derivatives-Inverse-Trig-Functions.html#exercises-inverse-trig-derivatives-geometric-4",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "       Rewrite the function as . Using SOHCAHTOA, . We envision a right triangle with an angle , opposite side , and hypotenuse . By the Pythagorean theorem, the adjacent side is . From this geometry, we find .  Now, differentiate implicitly with respect to :  Substitute back into the equation:    "
},
{
  "id": "exercises-inverse-trig-derivatives-geometric-5",
  "level": "2",
  "url": "sec-Derivatives-Inverse-Trig-Functions.html#exercises-inverse-trig-derivatives-geometric-5",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "       Rewrite the function as . Using SOHCAHTOA, . We envision a right triangle with an angle , hypotenuse , and opposite side . By the Pythagorean theorem, the adjacent side is . From this geometry, we find .  Now, differentiate implicitly with respect to :  Substitute and back into the equation:  Note: For negative values of , absolute value bars are required to ensure a proper positive range for the derivative of a cosecant root, yielding .   "
},
{
  "id": "exercises-inverse-trig-derivatives-geometric-6",
  "level": "2",
  "url": "sec-Derivatives-Inverse-Trig-Functions.html#exercises-inverse-trig-derivatives-geometric-6",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "       Rewrite the function as . Using SOHCAHTOA, . We envision a right triangle with an angle , opposite side , and adjacent side . By the Pythagorean theorem, the hypotenuse is . From this geometry, we find , which means .  Now, differentiate implicitly with respect to :  Substitute back into the equation:    "
},
{
  "id": "exercises-inverse-trig-derivatives-geometric-7",
  "level": "2",
  "url": "sec-Derivatives-Inverse-Trig-Functions.html#exercises-inverse-trig-derivatives-geometric-7",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "      We differentiate each part separately, applying the product rule to the second term: The derivative of the first term via the natural log chain rule is . For the second term, we use the product rule: .  To geometric-style differentiate the inner item , rewrite it as where and . The hypotenuse is , meaning and . Implicitly differentiating yields:   Combine both main parts back together and subtract:     "
},
{
  "id": "exercises-inverse-trig-derivatives-geometric-8",
  "level": "2",
  "url": "sec-Derivatives-Inverse-Trig-Functions.html#exercises-inverse-trig-derivatives-geometric-8",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "       Rewrite the function as . Using SOHCAHTOA, . We envision a right triangle with an angle , adjacent side , and hypotenuse . By the Pythagorean theorem, the opposite side length matches . From this geometry, we find .  Now, differentiate implicitly with respect to :  Substitute back into the equation:    "
},
{
  "id": "sec-related-rates",
  "level": "1",
  "url": "sec-related-rates.html",
  "type": "Section",
  "number": "",
  "title": "Related Rates",
  "body": " Related Rates   In many real-world applications, several variables vary simultaneously with respect to time. When an algebraic or geometric equation connects these variables, we can differentiate the entire relationship implicitly with respect to time. This allows us to calculate how the rate of change of one quantity directly drives or restricts the rate of change of another.    Related Rates Identity   Suppose that is a differentiable function of given by , where varies continuously with time . Because depends functionally on and depends on , the quantity implicitly depends on . The Calculus Chain Rule dictates the following relationship:      A ladder is leaning precariously against a wall. It starts to slide down, and as it does, the distance between the bottom of the ladder and the wall increases at a certain rate ; at the same time, the height of the top of the ladder decreases at the rate .  Since the ladder, the wall, and the ground form a right triangle, the parameters in the problem are related by the Pythagorean theorem (where is the constant length of the ladder):   We can differentiate with respect to the time variable in order to obtain a relationship between the parameters and their rates of change:   Thus we have five variables ( ); if we are given values for three of them, we can use our two equations to solve for the others.  For example, suppose we know that the ladder is feet long, and the base is sliding away at the rate fps (feet per second). How fast is the top sliding down when the base is feet from the wall?   The data provided translate to the following mathematical conditions: Using the Pythagorean relationship in , we isolate and compute :   Now, we feed these static values at this precise moment into the related rates equation from : Solving for yields: Thus, the top of the ladder is sliding down the wall at a rate of approximately feet per second.    The variables and are both differentiable functions of and are related by the equation: If when and , find the corresponding value of .    We begin by differentiating both sides of the given equation implicitly with respect to time , applying the chain rule to each term:    Next, we substitute the known values ( , , and ) into this differentiated equation to isolate :     Combine the constant terms and solve for the remaining rate:         A restaurant supplier services the restaurants in a circular area in such a way that the radius is increasing at the rate of mi per year at the moment when goes through the value mi. At that moment, how fast is the area increasing?   Expanding circular service area with an increasing radius   A circle with a solid line radius r, surrounded by dashed concentric lines showing outward expansion.       We model the geometric shape of the service zone using the standard formula for the area of a circle: Both the area and the radius are implicit functions of time . Differentiating both sides of the equation implicitly with respect to using the chain rule yields:   We are given the rate of change of the radius and the instantaneous radius at this specific moment: Substituting these parameters into our rate relationship gives:   Thus, at that exact moment, the circular service area is increasing at a rate of square miles per year.      A stone is dropped into a lake, causing circular waves whose radii increase at a constant rate of m\/sec. At what rate is the circumference of a wave changing when its radius is meters?   Concentric circular ripples expanding outward from a central entry point.   Concentric circles expanding outward with arrows illustrating a radial rate of change.       We represent the boundary path length of a circular wave using the standard formula for the circumference of a circle: Both the circumference and the radius vary continuously over time . Differentiating both sides of this relationship implicitly with respect to yields:   We are given that the radius increases at a constant rate of m\/sec. Substituting this value into our rate equation gives:   Notice that the rate of change of the circumference depends entirely on the rate of change of the radius and is independent of the instantaneous radius value itself. Thus, when meters (or any other size), the circumference increases at a constant rate of meters per second.      A ladder 10 feet long leans against a vertical building. If the bottom of the ladder slides away from the building horizontally at a rate of 2 feet\/sec, how fast is the ladder sliding down the building when the top of the ladder is 6 feet above the ground?   Right triangle formed by a ladder leaning against a vertical wall.   A right-angled triangle showing a ladder of length 10 as the hypotenuse, a vertical height h along the y-axis, and a horizontal distance x along the x-axis.       Let represent the horizontal distance from the bottom of the ladder to the building, and let represent the vertical height from the top of the ladder to the ground. The length of the ladder is a constant feet.  The ladder, ground, and wall form a right triangle. By the Pythagorean theorem, these parameters are related by: Both and change with respect to time . Differentiating both sides implicitly with respect to yields:   We are given that ft\/sec at the exact moment when feet. Before substituting into our rate equation, we use to calculate the corresponding value of at this instant:   Now, substitute the values , , and into our differentiated relation :    The negative sign confirms the height is decreasing. Therefore, the ladder is sliding down the building at a rate of feet per second (or approximately ft\/sec).      A 13-ft ladder is leaning against a house when its base starts to slide away. By the time the base is 12 ft from the house, the base is moving at the rate of 5 ft\/sec.   Right triangle formed by a 13-ft ladder leaning against a house.   A right-angled triangle showing a ladder of length 13 as the hypotenuse, a vertical height y along the wall, a horizontal distance x along the ground, and an angle theta between the ladder and the ground.        How fast is the top of the ladder sliding down from the wall then?    Let be the distance from the base to the wall, and be the height of the top of the ladder. The ladder forms a right triangle where .  At the given moment, ft. We solve for using the Pythagorean theorem:   Differentiating implicitly with respect to time yields: Substitute the known snapshot parameters ( , , and ): The top of the ladder is sliding down at a rate of ft\/sec.      At what rate is the area of the triangle formed by the ladder, wall, and ground changing then?    The area of the right triangle is modeled by: Differentiating both sides with respect to time via the product rule yields: Substitute our snapshot values ( , , , and ): The area of the triangle is decreasing at a rate of square feet per second.      At what rate is the angle between the ladder and the ground changing then?    We relate the angle to the moving base distance using the cosine relationship: Using the geometric right triangle method to find the rate of change, differentiate implicitly: From the triangle values at this instant ( , ), we find . Substituting and : The angle between the ladder and the ground is decreasing at a rate of radian per second.       Air is being pumped into a spherical balloon so that its volume increases at a rate of . How fast is the radius of the balloon increasing when the diameter is ?   Spherical balloon expanding under a constant volumetric growth rate.   A shaded sphere with a clear radius variable r extending outward, accented by dashed outermost bounds showing expansion.       We model the physical system using the standard geometric equation for the volume of a sphere: Both the volume and the radius are implicit functions of time . Differentiating both sides of the equation implicitly with respect to via the power rule and chain rule yields:   We are given that the instantaneous volumetric growth rate is . The problem specifies this evaluation happens exactly when the diameter is . Since diameter , we calculate the corresponding radius profile at this snapshot moment:   Substitute the known static numerical constants ( and ) into our rate relationship to isolate :     Thus, at that exact instant, the radius of the balloon is expanding at a speed of (or approximately ).      A water tank has the shape of an inverted right circular cone of altitude and base radius . If water is being pumped into the tank at a rate of , find the rate at which the water level is rising when the water is deep.   Cross-section of an inverted conical tank with water level tracker.   An inverted cone of total height 4 and top radius 2, partially filled with fluid up to height h with surface radius r.        Two-dimensional cross-section showing similar right triangles inside the inverted conical tank.   A 2D cross section triangle representing an inverted cone with similar right triangles mapped out on the right side to illustrate the structural relationship between the water radius and height.     The volume of water inside a right circular cone is given by the formula: Here, both the water radius and the water depth vary over time . To eliminate , we look at the matching cross-sectional profile. Similar right triangles form a fixed proportional geometric profile:   Substituting this proportional relation back into the volume formula yields a single variable equation tracking depth: Now, differentiate both sides implicitly with respect to time via the chain rule:   We are given that . Substituting this value alongside the target evaluation depth into our rate mapping formula yields:    Thus, at that exact instant, the water level is rising at a rate of (or approximately ).     Solving Related Rates Problems  To systematically analyze and solve problems involving related rates of change, apply the following structured protocol:    Read the problem carefully to fully comprehend the changing system.    Draw a geometric diagram whenever possible to visualize spatial relationships.    Introduce explicit notation, assigning mathematical symbols to all quantities that function as variables over time.    Express all given numeric information and the targeted unknown rate explicitly as derivatives with respect to time .    Write an algebraic or geometric equation that mathematically links the various moving quantities of the problem.    Apply the Calculus Chain Rule to differentiate both sides of the relational equation implicitly with respect to time .    Substitute the instantaneous snapshot values and known rates into the differentiated equation, then solve algebraically for the targeted unknown rate.      Approaching Cars Intersection Problem   Car A is traveling west at and car B is traveling north at . Both are headed for the intersection of two perpendicular roads. At what rate are the cars approaching each other when car A is and car B is from the intersection?   Right triangle formed by two cars approaching a common intersection.   A right-angled triangle with the right angle at the intersection point. Car A approaches along the horizontal x-axis from the right, and Car B approaches along the vertical y-axis from the bottom. The hypotenuse z represents the distance between them.       Let be the distance from Car A to the intersection, let be the distance from Car B to the intersection, and let be the distance between the two cars.  Because the positions of the cars form a right-angled triangle with the intersection, we apply the Pythagorean theorem: Since both cars are moving toward the intersection, their distances and are decreasing over time . This implies their rates of change are negative:   We evaluate the system at the exact moment when and . First, compute the instantaneous distance using :   Next, differentiate implicitly with respect to time : Substitute the known static values and rates into this relationship to isolate :     The negative sign confirms that the distance between the two vehicles is shrinking. Thus, the cars are approaching each other at a rate of .      A revolving beacon in a lighthouse makes one revolution every 15 seconds. The beacon is 200 feet from the nearest point P on a straight shoreline. Find the rate at which a ray from the light moves along the shore at a point 400 feet from P.   Right triangle tracking a lighthouse beacon ray moving along a straight shoreline.   A right triangle where the lighthouse is a vertex opposite a straight shoreline. The perpendicular distance to point P is 200, the distance along the shore is x, and the angle at the lighthouse is theta.       Let be the point on the shoreline closest to the lighthouse, and let be the distance from to the spot of light moving down the shore. Let be the angle between the perpendicular line of length ft and the light beam.  The beacon rotates at a constant rate of revolution every seconds. Converting revolutions to radians yields the angular velocity:   Using right-triangle trigonometry (SOHCAHTOA), we relate the position variable to the rotation angle :   Differentiating both sides of the equation implicitly with respect to time yields:   We evaluate the system at the exact snapshot moment when the beam is feet away from . Rather than calculating explicitly, we use the reference right triangle components to determine . The hypotenuse length at this instant is: From SOHCAHTOA, , which means:   Substitute the values and into our rate equation :   Thus, when the ray is 400 feet from , the spot of light is moving along the shoreline at a rate of (or approximately ).      A person flying a kite holds the string 5 feet above ground level, and the string is payed out at a rate of 2 ft\/sec as the kite moves horizontally at an altitude of 105 feet. Assuming there is no sag in the string, find the rate at which the kite is moving when 125 feet of string has been payed out.   Right triangle modeling a flying kite tracking string length versus horizontal distance.   A right triangle where the vertical side represents the relative height of 100 feet, the horizontal side represents the ground distance x, and the hypotenuse represents the string length s.       Let represent the horizontal distance from the person to the point directly underneath the kite, and let represent the length of the string that has been payed out.  The total altitude of the kite is feet above the ground. Because the string is held feet above ground level, the vertical height of the right triangle is a constant:   Applying the Pythagorean theorem to this geometric system yields the relationship:   We evaluate the system at the exact snapshot moment when feet. First, compute the horizontal distance using :    Next, differentiate implicitly with respect to time via the chain rule:   We are given that the string is being payed out at a rate of ft\/sec. Substitute our known snapshot parameters ( , , and ) into to isolate :    Thus, the kite is moving horizontally at a rate of feet per second (or approximately ft\/sec).      Coffee is draining from a conical filter into a cylindrical coffeepot at the rate of . The filter cone and the coffee pot both have a height of 6 inches and a diameter of 6 inches.   Coffee draining from a conical filter into a cylindrical coffeepot.   A styled technical diagram showing a conical filter dripping coffee into a cylindrical pot underneath. Dimension markers note a 6-inch diameter on both vessels, alongside a 6-inch height for the cone.         How fast is the level in the pot rising when the coffee in the cone is 5 in. deep?      Conical filter cross-section showing falling height and radius .   An inverted triangle representing a conical filter of height 6 and top radius 3. Liquid fills it to a height h with radius r.      Cylindrical coffeepot cross-section showing rising level .   A rectangle cross-section representing a cylindrical coffeepot of height 6 and constant radius 3. Liquid fills it to a height y.      Let be the volume of coffee in the cylindrical pot, be the constant radius of the cylinder, and be the height of the coffee level. The formula for the volume is: Differentiating both sides implicitly with respect to time yields:   Since coffee is draining into the pot at a constant rate of , this filling rate is completely independent of the fluid height inside the top filter. Substituting this constant into our derivative relation gives: Thus, the coffee level in the pot is rising at a rate of .      How fast is the level in the cone falling then?    Let be the volume of coffee inside the conical filter, be the radius of the liquid surface, and be the depth of the liquid. The formula for the volume of a cone is: As seen in , similar right triangles relate the changing water dimensions to the fixed filter dimensions ( , ):   Substitute this proportion back into the volume formula to eliminate : Differentiating implicitly with respect to time via the chain rule gives:   Because the cone is losing volume as it drains, . We substitute this value along with the target snapshot depth of to isolate :  The negative sign confirms the level is dropping. Thus, the coffee level in the filter cone is falling at a rate of .     "
},
{
  "id": "theorem-related-rates-chain-rule",
  "level": "2",
  "url": "sec-related-rates.html#theorem-related-rates-chain-rule",
  "type": "Theorem",
  "number": "193",
  "title": "Related Rates Identity.",
  "body": " Related Rates Identity   Suppose that is a differentiable function of given by , where varies continuously with time . Because depends functionally on and depends on , the quantity implicitly depends on . The Calculus Chain Rule dictates the following relationship:    "
},
{
  "id": "example-implicit-related-rates",
  "level": "2",
  "url": "sec-related-rates.html#example-implicit-related-rates",
  "type": "Example",
  "number": "194",
  "title": "",
  "body": "  The variables and are both differentiable functions of and are related by the equation: If when and , find the corresponding value of .    We begin by differentiating both sides of the given equation implicitly with respect to time , applying the chain rule to each term:    Next, we substitute the known values ( , , and ) into this differentiated equation to isolate :     Combine the constant terms and solve for the remaining rate:      "
},
{
  "id": "example-expanding-circular-area",
  "level": "2",
  "url": "sec-related-rates.html#example-expanding-circular-area",
  "type": "Example",
  "number": "195",
  "title": "",
  "body": "  A restaurant supplier services the restaurants in a circular area in such a way that the radius is increasing at the rate of mi per year at the moment when goes through the value mi. At that moment, how fast is the area increasing?   Expanding circular service area with an increasing radius   A circle with a solid line radius r, surrounded by dashed concentric lines showing outward expansion.       We model the geometric shape of the service zone using the standard formula for the area of a circle: Both the area and the radius are implicit functions of time . Differentiating both sides of the equation implicitly with respect to using the chain rule yields:   We are given the rate of change of the radius and the instantaneous radius at this specific moment: Substituting these parameters into our rate relationship gives:   Thus, at that exact moment, the circular service area is increasing at a rate of square miles per year.   "
},
{
  "id": "example-ripples-circumference",
  "level": "2",
  "url": "sec-related-rates.html#example-ripples-circumference",
  "type": "Example",
  "number": "197",
  "title": "",
  "body": "  A stone is dropped into a lake, causing circular waves whose radii increase at a constant rate of m\/sec. At what rate is the circumference of a wave changing when its radius is meters?   Concentric circular ripples expanding outward from a central entry point.   Concentric circles expanding outward with arrows illustrating a radial rate of change.       We represent the boundary path length of a circular wave using the standard formula for the circumference of a circle: Both the circumference and the radius vary continuously over time . Differentiating both sides of this relationship implicitly with respect to yields:   We are given that the radius increases at a constant rate of m\/sec. Substituting this value into our rate equation gives:   Notice that the rate of change of the circumference depends entirely on the rate of change of the radius and is independent of the instantaneous radius value itself. Thus, when meters (or any other size), the circumference increases at a constant rate of meters per second.   "
},
{
  "id": "example-sliding-ladder-10ft",
  "level": "2",
  "url": "sec-related-rates.html#example-sliding-ladder-10ft",
  "type": "Example",
  "number": "199",
  "title": "",
  "body": "  A ladder 10 feet long leans against a vertical building. If the bottom of the ladder slides away from the building horizontally at a rate of 2 feet\/sec, how fast is the ladder sliding down the building when the top of the ladder is 6 feet above the ground?   Right triangle formed by a ladder leaning against a vertical wall.   A right-angled triangle showing a ladder of length 10 as the hypotenuse, a vertical height h along the y-axis, and a horizontal distance x along the x-axis.       Let represent the horizontal distance from the bottom of the ladder to the building, and let represent the vertical height from the top of the ladder to the ground. The length of the ladder is a constant feet.  The ladder, ground, and wall form a right triangle. By the Pythagorean theorem, these parameters are related by: Both and change with respect to time . Differentiating both sides implicitly with respect to yields:   We are given that ft\/sec at the exact moment when feet. Before substituting into our rate equation, we use to calculate the corresponding value of at this instant:   Now, substitute the values , , and into our differentiated relation :    The negative sign confirms the height is decreasing. Therefore, the ladder is sliding down the building at a rate of feet per second (or approximately ft\/sec).   "
},
{
  "id": "exercise-sliding-ladder-13ft",
  "level": "2",
  "url": "sec-related-rates.html#exercise-sliding-ladder-13ft",
  "type": "Checkpoint",
  "number": "201",
  "title": "",
  "body": "  A 13-ft ladder is leaning against a house when its base starts to slide away. By the time the base is 12 ft from the house, the base is moving at the rate of 5 ft\/sec.   Right triangle formed by a 13-ft ladder leaning against a house.   A right-angled triangle showing a ladder of length 13 as the hypotenuse, a vertical height y along the wall, a horizontal distance x along the ground, and an angle theta between the ladder and the ground.        How fast is the top of the ladder sliding down from the wall then?    Let be the distance from the base to the wall, and be the height of the top of the ladder. The ladder forms a right triangle where .  At the given moment, ft. We solve for using the Pythagorean theorem:   Differentiating implicitly with respect to time yields: Substitute the known snapshot parameters ( , , and ): The top of the ladder is sliding down at a rate of ft\/sec.      At what rate is the area of the triangle formed by the ladder, wall, and ground changing then?    The area of the right triangle is modeled by: Differentiating both sides with respect to time via the product rule yields: Substitute our snapshot values ( , , , and ): The area of the triangle is decreasing at a rate of square feet per second.      At what rate is the angle between the ladder and the ground changing then?    We relate the angle to the moving base distance using the cosine relationship: Using the geometric right triangle method to find the rate of change, differentiate implicitly: From the triangle values at this instant ( , ), we find . Substituting and : The angle between the ladder and the ground is decreasing at a rate of radian per second.    "
},
{
  "id": "exercise-inflating-balloon",
  "level": "2",
  "url": "sec-related-rates.html#exercise-inflating-balloon",
  "type": "Checkpoint",
  "number": "203",
  "title": "",
  "body": "  Air is being pumped into a spherical balloon so that its volume increases at a rate of . How fast is the radius of the balloon increasing when the diameter is ?   Spherical balloon expanding under a constant volumetric growth rate.   A shaded sphere with a clear radius variable r extending outward, accented by dashed outermost bounds showing expansion.       We model the physical system using the standard geometric equation for the volume of a sphere: Both the volume and the radius are implicit functions of time . Differentiating both sides of the equation implicitly with respect to via the power rule and chain rule yields:   We are given that the instantaneous volumetric growth rate is . The problem specifies this evaluation happens exactly when the diameter is . Since diameter , we calculate the corresponding radius profile at this snapshot moment:   Substitute the known static numerical constants ( and ) into our rate relationship to isolate :     Thus, at that exact instant, the radius of the balloon is expanding at a speed of (or approximately ).   "
},
{
  "id": "exercise-conical-water-tank",
  "level": "2",
  "url": "sec-related-rates.html#exercise-conical-water-tank",
  "type": "Checkpoint",
  "number": "205",
  "title": "",
  "body": "  A water tank has the shape of an inverted right circular cone of altitude and base radius . If water is being pumped into the tank at a rate of , find the rate at which the water level is rising when the water is deep.   Cross-section of an inverted conical tank with water level tracker.   An inverted cone of total height 4 and top radius 2, partially filled with fluid up to height h with surface radius r.        Two-dimensional cross-section showing similar right triangles inside the inverted conical tank.   A 2D cross section triangle representing an inverted cone with similar right triangles mapped out on the right side to illustrate the structural relationship between the water radius and height.     The volume of water inside a right circular cone is given by the formula: Here, both the water radius and the water depth vary over time . To eliminate , we look at the matching cross-sectional profile. Similar right triangles form a fixed proportional geometric profile:   Substituting this proportional relation back into the volume formula yields a single variable equation tracking depth: Now, differentiate both sides implicitly with respect to time via the chain rule:   We are given that . Substituting this value alongside the target evaluation depth into our rate mapping formula yields:    Thus, at that exact instant, the water level is rising at a rate of (or approximately ).   "
},
{
  "id": "insight-solving-related-rates",
  "level": "2",
  "url": "sec-related-rates.html#insight-solving-related-rates",
  "type": "Insight",
  "number": "208",
  "title": "Solving Related Rates Problems.",
  "body": " Solving Related Rates Problems  To systematically analyze and solve problems involving related rates of change, apply the following structured protocol:    Read the problem carefully to fully comprehend the changing system.    Draw a geometric diagram whenever possible to visualize spatial relationships.    Introduce explicit notation, assigning mathematical symbols to all quantities that function as variables over time.    Express all given numeric information and the targeted unknown rate explicitly as derivatives with respect to time .    Write an algebraic or geometric equation that mathematically links the various moving quantities of the problem.    Apply the Calculus Chain Rule to differentiate both sides of the relational equation implicitly with respect to time .    Substitute the instantaneous snapshot values and known rates into the differentiated equation, then solve algebraically for the targeted unknown rate.    "
},
{
  "id": "example-approaching-cars",
  "level": "2",
  "url": "sec-related-rates.html#example-approaching-cars",
  "type": "Example",
  "number": "209",
  "title": "Approaching Cars Intersection Problem.",
  "body": " Approaching Cars Intersection Problem   Car A is traveling west at and car B is traveling north at . Both are headed for the intersection of two perpendicular roads. At what rate are the cars approaching each other when car A is and car B is from the intersection?   Right triangle formed by two cars approaching a common intersection.   A right-angled triangle with the right angle at the intersection point. Car A approaches along the horizontal x-axis from the right, and Car B approaches along the vertical y-axis from the bottom. The hypotenuse z represents the distance between them.       Let be the distance from Car A to the intersection, let be the distance from Car B to the intersection, and let be the distance between the two cars.  Because the positions of the cars form a right-angled triangle with the intersection, we apply the Pythagorean theorem: Since both cars are moving toward the intersection, their distances and are decreasing over time . This implies their rates of change are negative:   We evaluate the system at the exact moment when and . First, compute the instantaneous distance using :   Next, differentiate implicitly with respect to time : Substitute the known static values and rates into this relationship to isolate :     The negative sign confirms that the distance between the two vehicles is shrinking. Thus, the cars are approaching each other at a rate of .   "
},
{
  "id": "exercise-lighthouse-beacon",
  "level": "2",
  "url": "sec-related-rates.html#exercise-lighthouse-beacon",
  "type": "Checkpoint",
  "number": "211",
  "title": "",
  "body": "  A revolving beacon in a lighthouse makes one revolution every 15 seconds. The beacon is 200 feet from the nearest point P on a straight shoreline. Find the rate at which a ray from the light moves along the shore at a point 400 feet from P.   Right triangle tracking a lighthouse beacon ray moving along a straight shoreline.   A right triangle where the lighthouse is a vertex opposite a straight shoreline. The perpendicular distance to point P is 200, the distance along the shore is x, and the angle at the lighthouse is theta.       Let be the point on the shoreline closest to the lighthouse, and let be the distance from to the spot of light moving down the shore. Let be the angle between the perpendicular line of length ft and the light beam.  The beacon rotates at a constant rate of revolution every seconds. Converting revolutions to radians yields the angular velocity:   Using right-triangle trigonometry (SOHCAHTOA), we relate the position variable to the rotation angle :   Differentiating both sides of the equation implicitly with respect to time yields:   We evaluate the system at the exact snapshot moment when the beam is feet away from . Rather than calculating explicitly, we use the reference right triangle components to determine . The hypotenuse length at this instant is: From SOHCAHTOA, , which means:   Substitute the values and into our rate equation :   Thus, when the ray is 400 feet from , the spot of light is moving along the shoreline at a rate of (or approximately ).   "
},
{
  "id": "exercise-flying-kite",
  "level": "2",
  "url": "sec-related-rates.html#exercise-flying-kite",
  "type": "Checkpoint",
  "number": "213",
  "title": "",
  "body": "  A person flying a kite holds the string 5 feet above ground level, and the string is payed out at a rate of 2 ft\/sec as the kite moves horizontally at an altitude of 105 feet. Assuming there is no sag in the string, find the rate at which the kite is moving when 125 feet of string has been payed out.   Right triangle modeling a flying kite tracking string length versus horizontal distance.   A right triangle where the vertical side represents the relative height of 100 feet, the horizontal side represents the ground distance x, and the hypotenuse represents the string length s.       Let represent the horizontal distance from the person to the point directly underneath the kite, and let represent the length of the string that has been payed out.  The total altitude of the kite is feet above the ground. Because the string is held feet above ground level, the vertical height of the right triangle is a constant:   Applying the Pythagorean theorem to this geometric system yields the relationship:   We evaluate the system at the exact snapshot moment when feet. First, compute the horizontal distance using :    Next, differentiate implicitly with respect to time via the chain rule:   We are given that the string is being payed out at a rate of ft\/sec. Substitute our known snapshot parameters ( , , and ) into to isolate :    Thus, the kite is moving horizontally at a rate of feet per second (or approximately ft\/sec).   "
},
{
  "id": "exercise-coffee-drainage-with-figures",
  "level": "2",
  "url": "sec-related-rates.html#exercise-coffee-drainage-with-figures",
  "type": "Checkpoint",
  "number": "215",
  "title": "",
  "body": "  Coffee is draining from a conical filter into a cylindrical coffeepot at the rate of . The filter cone and the coffee pot both have a height of 6 inches and a diameter of 6 inches.   Coffee draining from a conical filter into a cylindrical coffeepot.   A styled technical diagram showing a conical filter dripping coffee into a cylindrical pot underneath. Dimension markers note a 6-inch diameter on both vessels, alongside a 6-inch height for the cone.         How fast is the level in the pot rising when the coffee in the cone is 5 in. deep?      Conical filter cross-section showing falling height and radius .   An inverted triangle representing a conical filter of height 6 and top radius 3. Liquid fills it to a height h with radius r.      Cylindrical coffeepot cross-section showing rising level .   A rectangle cross-section representing a cylindrical coffeepot of height 6 and constant radius 3. Liquid fills it to a height y.      Let be the volume of coffee in the cylindrical pot, be the constant radius of the cylinder, and be the height of the coffee level. The formula for the volume is: Differentiating both sides implicitly with respect to time yields:   Since coffee is draining into the pot at a constant rate of , this filling rate is completely independent of the fluid height inside the top filter. Substituting this constant into our derivative relation gives: Thus, the coffee level in the pot is rising at a rate of .      How fast is the level in the cone falling then?    Let be the volume of coffee inside the conical filter, be the radius of the liquid surface, and be the depth of the liquid. The formula for the volume of a cone is: As seen in , similar right triangles relate the changing water dimensions to the fixed filter dimensions ( , ):   Substitute this proportion back into the volume formula to eliminate : Differentiating implicitly with respect to time via the chain rule gives:   Because the cone is losing volume as it drains, . We substitute this value along with the target snapshot depth of to isolate :  The negative sign confirms the level is dropping. Thus, the coffee level in the filter cone is falling at a rate of .    "
},
{
  "id": "notes-Limits-and-Derivatives-chapter-exercises",
  "level": "1",
  "url": "notes-Limits-and-Derivatives-chapter-exercises.html",
  "type": "Section",
  "number": "",
  "title": "1. Limits and Derivatives - Chapter Exercises",
  "body": " 1. Limits and Derivatives - Chapter Exercises   This section contains exercises related to limits and continuity. These exercises are designed to reinforce the concepts covered in the chapter and provide practice with various types of limit evaluations, continuity analysis, and applications of these concepts in different contexts.     Graphical Limit Analysis   Referencing the provided graph of , determine which of the following statements are true. Explain your answers.   Visualizing Limits and Continuity for       Does exist?  Does exist?  Does exist?  Is continuous at ?  Does exist?  Does exist?  Does exist?  Is continuous at ?     Based on the piecewise behavior described in the TikZ\/Picture code:  Yes . As , approaches .  Yes . As , approaches .  No . The left-hand limit ( ) and right-hand limit ( ) are not equal.  No . Continuity requires the limit to exist.  Yes . As , approaches .  Yes . As , approaches .  Yes . Both one-sided limits equal .  No . While the limit exists ( ), the point is defined at . Since , it is not continuous.       Continuity of Rational Functions   At what points is the function continuous?    A rational function is continuous everywhere except where the denominator is zero. Factor the denominator: . The function is continuous on .     Average Rate of Change   Find the average rate of change of over the interval .    The average rate of change is :      Mixed Limit Evaluations   Find the following limits if they exist:             Multiply by conjugate: .  Highest power of is . The limit is the ratio of coefficients: .  As from the left, is a very small negative number. Thus, the limit is .   Multiply by the conjugate : .    Use the special limit : .         Evaluate the following limits:                       The degrees of the numerator and denominator are the same (both 2). The limit is the ratio of the leading coefficients: .    The degree of the denominator (4) is greater than the degree of the numerator (1). Therefore: .    The degree of the numerator (5) is greater than the degree of the denominator (2). Examining the leading terms: .       Limit from Existing Derivative Definition   If , find .    Since the limit exists and the denominator approaches , the numerator must also approach (otherwise the limit would be infinite). Therefore, , which implies .      Find and if .    To find the limits at infinity, we identify the dominant terms. In the numerator, dominates. In the denominator, dominates.  For , : .  For , : .      Find .    To evaluate this limit, we multiply by the conjugate: Simplifying the numerator: As , the denominator grows without bound while the numerator remains constant. Therefore: .     Piecewise Continuity   For what value of is continuous at every ?    For continuity at , the one-sided limits must be equal:  Set them equal: .     Kinematics: Velocity and Acceleration   A body moves such that . Find the speed and acceleration at seconds.      Velocity: . At , m\/s. Speed is m\/s.  Acceleration: m\/s .        A function is given by . Find:                    Simplify the fraction and take the limit .                         Simplifying the numerator: Taking the limit:         "
},
{
  "id": "notes-Limits-and-Derivatives-chapter-exercises-3-1",
  "level": "2",
  "url": "notes-Limits-and-Derivatives-chapter-exercises.html#notes-Limits-and-Derivatives-chapter-exercises-3-1",
  "type": "Exercise",
  "number": "1",
  "title": "Graphical Limit Analysis.",
  "body": " Graphical Limit Analysis   Referencing the provided graph of , determine which of the following statements are true. Explain your answers.   Visualizing Limits and Continuity for       Does exist?  Does exist?  Does exist?  Is continuous at ?  Does exist?  Does exist?  Does exist?  Is continuous at ?     Based on the piecewise behavior described in the TikZ\/Picture code:  Yes . As , approaches .  Yes . As , approaches .  No . The left-hand limit ( ) and right-hand limit ( ) are not equal.  No . Continuity requires the limit to exist.  Yes . As , approaches .  Yes . As , approaches .  Yes . Both one-sided limits equal .  No . While the limit exists ( ), the point is defined at . Since , it is not continuous.     "
},
{
  "id": "notes-Limits-and-Derivatives-chapter-exercises-3-2",
  "level": "2",
  "url": "notes-Limits-and-Derivatives-chapter-exercises.html#notes-Limits-and-Derivatives-chapter-exercises-3-2",
  "type": "Exercise",
  "number": "2",
  "title": "Continuity of Rational Functions.",
  "body": " Continuity of Rational Functions   At what points is the function continuous?    A rational function is continuous everywhere except where the denominator is zero. Factor the denominator: . The function is continuous on .   "
},
{
  "id": "notes-Limits-and-Derivatives-chapter-exercises-3-3",
  "level": "2",
  "url": "notes-Limits-and-Derivatives-chapter-exercises.html#notes-Limits-and-Derivatives-chapter-exercises-3-3",
  "type": "Exercise",
  "number": "3",
  "title": "Average Rate of Change.",
  "body": " Average Rate of Change   Find the average rate of change of over the interval .    The average rate of change is :    "
},
{
  "id": "notes-Limits-and-Derivatives-chapter-exercises-3-4",
  "level": "2",
  "url": "notes-Limits-and-Derivatives-chapter-exercises.html#notes-Limits-and-Derivatives-chapter-exercises-3-4",
  "type": "Exercise",
  "number": "4",
  "title": "Mixed Limit Evaluations.",
  "body": " Mixed Limit Evaluations   Find the following limits if they exist:             Multiply by conjugate: .  Highest power of is . The limit is the ratio of coefficients: .  As from the left, is a very small negative number. Thus, the limit is .   Multiply by the conjugate : .    Use the special limit : .      "
},
{
  "id": "notes-Limits-and-Derivatives-chapter-exercises-3-5",
  "level": "2",
  "url": "notes-Limits-and-Derivatives-chapter-exercises.html#notes-Limits-and-Derivatives-chapter-exercises-3-5",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Evaluate the following limits:                       The degrees of the numerator and denominator are the same (both 2). The limit is the ratio of the leading coefficients: .    The degree of the denominator (4) is greater than the degree of the numerator (1). Therefore: .    The degree of the numerator (5) is greater than the degree of the denominator (2). Examining the leading terms: .     "
},
{
  "id": "notes-Limits-and-Derivatives-chapter-exercises-3-6",
  "level": "2",
  "url": "notes-Limits-and-Derivatives-chapter-exercises.html#notes-Limits-and-Derivatives-chapter-exercises-3-6",
  "type": "Exercise",
  "number": "6",
  "title": "Limit from Existing Derivative Definition.",
  "body": " Limit from Existing Derivative Definition   If , find .    Since the limit exists and the denominator approaches , the numerator must also approach (otherwise the limit would be infinite). Therefore, , which implies .   "
},
{
  "id": "notes-Limits-and-Derivatives-chapter-exercises-3-7",
  "level": "2",
  "url": "notes-Limits-and-Derivatives-chapter-exercises.html#notes-Limits-and-Derivatives-chapter-exercises-3-7",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  Find and if .    To find the limits at infinity, we identify the dominant terms. In the numerator, dominates. In the denominator, dominates.  For , : .  For , : .   "
},
{
  "id": "notes-Limits-and-Derivatives-chapter-exercises-3-8",
  "level": "2",
  "url": "notes-Limits-and-Derivatives-chapter-exercises.html#notes-Limits-and-Derivatives-chapter-exercises-3-8",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Find .    To evaluate this limit, we multiply by the conjugate: Simplifying the numerator: As , the denominator grows without bound while the numerator remains constant. Therefore: .   "
},
{
  "id": "notes-Limits-and-Derivatives-chapter-exercises-3-9",
  "level": "2",
  "url": "notes-Limits-and-Derivatives-chapter-exercises.html#notes-Limits-and-Derivatives-chapter-exercises-3-9",
  "type": "Exercise",
  "number": "9",
  "title": "Piecewise Continuity.",
  "body": " Piecewise Continuity   For what value of is continuous at every ?    For continuity at , the one-sided limits must be equal:  Set them equal: .   "
},
{
  "id": "notes-Limits-and-Derivatives-chapter-exercises-3-10",
  "level": "2",
  "url": "notes-Limits-and-Derivatives-chapter-exercises.html#notes-Limits-and-Derivatives-chapter-exercises-3-10",
  "type": "Exercise",
  "number": "10",
  "title": "Kinematics: Velocity and Acceleration.",
  "body": " Kinematics: Velocity and Acceleration   A body moves such that . Find the speed and acceleration at seconds.      Velocity: . At , m\/s. Speed is m\/s.  Acceleration: m\/s .     "
},
{
  "id": "notes-Limits-and-Derivatives-chapter-exercises-3-11",
  "level": "2",
  "url": "notes-Limits-and-Derivatives-chapter-exercises.html#notes-Limits-and-Derivatives-chapter-exercises-3-11",
  "type": "Exercise",
  "number": "11",
  "title": "",
  "body": "  A function is given by . Find:                    Simplify the fraction and take the limit .                         Simplifying the numerator: Taking the limit:       "
},
{
  "id": "notes-Differentiation-Rules-chapter-exercises",
  "level": "1",
  "url": "notes-Differentiation-Rules-chapter-exercises.html",
  "type": "Section",
  "number": "",
  "title": "2. Differentiation Rules- Chapter Exercises",
  "body": " 2. Differentiation Rules- Chapter Exercises   This section contains exercises covering the foundational differentiation techniques —including the Product Rule, Quotient Rule, Chain Rule, implicit differentiation, logarithmic differentiation —and their geometric applications such as related rates problems.       Differentiate the following functions:               For (a), remember that any term without an explicit variable like is a constant; its derivative is zero.  For (b) and (e), apply the Product Rule: .  For (c), apply the Quotient Rule and simplify the numerator using trig identities.  For (d), (f), (g), and (h), apply the Chain Rule: .         By the Power Rule, noting that is a constant:     By the Product Rule :     By the Quotient Rule :      By the Chain Rule:     By the Product Rule:      By the Chain Rule (nested twice):     By the Chain Rule:           Suppose that functions and and their derivatives with respect to have the values shown in the table below:           2  8  2      3  3    5    Find the value of the following derivatives at the specified points:  at  at  at  at      Convert the combinations into formula notations before substituting numbers. For part (d), write the Chain Rule expansion out explicitly: , and find the inner value first.       The derivative profile is . Substituting table values: .    By the Product Rule: . Substituting values: .    By the Quotient Rule: . Substituting values: .    By the Chain Rule: . Since , this evaluates to . Substituting values: .          For , find the first and second derivatives.    Rewrite the expression as .  First Derivative via Power\/Chain Rules: Second Derivative:        Find the slope of the tangent line to the implicitly defined curve at the point .    Differentiate every term with respect to . Treat as an implicit function of , which means appending a factor whenever you differentiate a expression containing . Don't forget the Product Rule on .    Differentiate both sides with respect to , using the Product Rule on the first term: Isolate : Evaluate at and , noting that :        Use logarithmic differentiation to find the derivative of with respect to :     Apply the natural log to both sides first. Use the expansion properties: and to break down the right side into separate, simple logarithms before differentiating.    Take the natural logarithm of both sides and expand using log laws: Differentiate implicitly with respect to :  Multiply by to solve for :        Differentiate by modeling the expression geometrically as a right triangle using SOHCAHTOA.    Let . The equation means that . Use the TOA definition ( ) to label a right triangle and determine its hypotenuse.   Geometric right triangle representation of .   A right triangle with an angle labeled y. The side opposite to y is labeled x^2+3x, the adjacent side is labeled 1, and the hypotenuse is labeled with the square root of 1 plus the quantity x^2+3x squared.        Method 1: To evaluate this using the geometric model, rewrite the inverse equation as a direct trigonometric relationship: According to SOHCAHTOA, . We construct a right triangle with an angle , setting and .  By the Pythagorean Theorem, the hypotenuse of this triangle is:   Now, differentiate both sides of implicitly with respect to : Isolate the derivative term:   Using our geometric model triangle and the CAH rule ( ), read the value of directly from the diagram: Squaring both sides yields:   Substitute this value back into the isolated derivative equation to reach the final answer:    Method 2: Using the rule :        A police cruiser, approaching a right-angled intersection from the north, is chasing a speeding car that has turned the corner and is now moving straight east. When the cruiser is north of the intersection and the car is to the east, the police determine with radar that the distance between them and the car is increasing at .  If the cruiser is moving at at the instant of measurement, what is the speed of the car?   Geometry of the vehicles relative to the right-angle intersection.   A right triangle diagram mapping the position of the police cruiser traveling south along the vertical y-axis, and the car moving east along the horizontal x-axis.       Model this setup as a right triangle where . Note carefully that because the police cruiser is moving closer to the intersection, its rate of change must be entered as a negative value ( ).    Let be the distance of the cruiser north of the intersection, be the distance of the car east of the intersection, and be the straight-line distance between them. By the Pythagorean Theorem:   At the given instant, and . Thus: Because the cruiser is traveling south, its distance from the intersection is decreasing, so . The radar shows .  Differentiating the primary equation implicitly with respect to time : Substitute the known parameters to solve for the speed of the car, :  The speeding car is traveling at .       Find the points on the graph of at which the tangent line is parallel to the line .    First, identify the required target slope. Rewriting the line as shows its slope is .  Next, compute the derivative of the target function to represent the general tangent slope: Set this derivative equal to the target slope of : Multiply the entire equation by the common denominator (where ): Let . This converts the relation into a manageable quadratic template: This yields roots or . Because , we discard the negative value. Thus, .  Substitute back into the original curve equation to find the corresponding -coordinate: The only point on the graph with a tangent parallel to the given line is .       Derivative Reference Sheet  Below is the reference guide matching the limit definitions and algebraic rules requested from the chapter footer, using the foundational limit definition of the derivative:    The derivative Table  Core Functions and Analytical Derivatives       Simplified Derivative Formula                                                  "
},
{
  "id": "ex-diff-skills-1",
  "level": "2",
  "url": "notes-Differentiation-Rules-chapter-exercises.html#ex-diff-skills-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Differentiate the following functions:               For (a), remember that any term without an explicit variable like is a constant; its derivative is zero.  For (b) and (e), apply the Product Rule: .  For (c), apply the Quotient Rule and simplify the numerator using trig identities.  For (d), (f), (g), and (h), apply the Chain Rule: .         By the Power Rule, noting that is a constant:     By the Product Rule :     By the Quotient Rule :      By the Chain Rule:     By the Product Rule:      By the Chain Rule (nested twice):     By the Chain Rule:       "
},
{
  "id": "ex-tabular-derivatives",
  "level": "2",
  "url": "notes-Differentiation-Rules-chapter-exercises.html#ex-tabular-derivatives",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Suppose that functions and and their derivatives with respect to have the values shown in the table below:           2  8  2      3  3    5    Find the value of the following derivatives at the specified points:  at  at  at  at      Convert the combinations into formula notations before substituting numbers. For part (d), write the Chain Rule expansion out explicitly: , and find the inner value first.       The derivative profile is . Substituting table values: .    By the Product Rule: . Substituting values: .    By the Quotient Rule: . Substituting values: .    By the Chain Rule: . Since , this evaluates to . Substituting values: .      "
},
{
  "id": "ex-second-derivative",
  "level": "2",
  "url": "notes-Differentiation-Rules-chapter-exercises.html#ex-second-derivative",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  For , find the first and second derivatives.    Rewrite the expression as .  First Derivative via Power\/Chain Rules: Second Derivative:    "
},
{
  "id": "ex-implicit-slope",
  "level": "2",
  "url": "notes-Differentiation-Rules-chapter-exercises.html#ex-implicit-slope",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Find the slope of the tangent line to the implicitly defined curve at the point .    Differentiate every term with respect to . Treat as an implicit function of , which means appending a factor whenever you differentiate a expression containing . Don't forget the Product Rule on .    Differentiate both sides with respect to , using the Product Rule on the first term: Isolate : Evaluate at and , noting that :    "
},
{
  "id": "ex-log-diff",
  "level": "2",
  "url": "notes-Differentiation-Rules-chapter-exercises.html#ex-log-diff",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Use logarithmic differentiation to find the derivative of with respect to :     Apply the natural log to both sides first. Use the expansion properties: and to break down the right side into separate, simple logarithms before differentiating.    Take the natural logarithm of both sides and expand using log laws: Differentiate implicitly with respect to :  Multiply by to solve for :    "
},
{
  "id": "ex-arctan-diff",
  "level": "2",
  "url": "notes-Differentiation-Rules-chapter-exercises.html#ex-arctan-diff",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Differentiate by modeling the expression geometrically as a right triangle using SOHCAHTOA.    Let . The equation means that . Use the TOA definition ( ) to label a right triangle and determine its hypotenuse.   Geometric right triangle representation of .   A right triangle with an angle labeled y. The side opposite to y is labeled x^2+3x, the adjacent side is labeled 1, and the hypotenuse is labeled with the square root of 1 plus the quantity x^2+3x squared.        Method 1: To evaluate this using the geometric model, rewrite the inverse equation as a direct trigonometric relationship: According to SOHCAHTOA, . We construct a right triangle with an angle , setting and .  By the Pythagorean Theorem, the hypotenuse of this triangle is:   Now, differentiate both sides of implicitly with respect to : Isolate the derivative term:   Using our geometric model triangle and the CAH rule ( ), read the value of directly from the diagram: Squaring both sides yields:   Substitute this value back into the isolated derivative equation to reach the final answer:    Method 2: Using the rule :    "
},
{
  "id": "ex-police-chase",
  "level": "2",
  "url": "notes-Differentiation-Rules-chapter-exercises.html#ex-police-chase",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "  A police cruiser, approaching a right-angled intersection from the north, is chasing a speeding car that has turned the corner and is now moving straight east. When the cruiser is north of the intersection and the car is to the east, the police determine with radar that the distance between them and the car is increasing at .  If the cruiser is moving at at the instant of measurement, what is the speed of the car?   Geometry of the vehicles relative to the right-angle intersection.   A right triangle diagram mapping the position of the police cruiser traveling south along the vertical y-axis, and the car moving east along the horizontal x-axis.       Model this setup as a right triangle where . Note carefully that because the police cruiser is moving closer to the intersection, its rate of change must be entered as a negative value ( ).    Let be the distance of the cruiser north of the intersection, be the distance of the car east of the intersection, and be the straight-line distance between them. By the Pythagorean Theorem:   At the given instant, and . Thus: Because the cruiser is traveling south, its distance from the intersection is decreasing, so . The radar shows .  Differentiating the primary equation implicitly with respect to time : Substitute the known parameters to solve for the speed of the car, :  The speeding car is traveling at .   "
},
{
  "id": "ex-parallel-tangent",
  "level": "2",
  "url": "notes-Differentiation-Rules-chapter-exercises.html#ex-parallel-tangent",
  "type": "Exercise",
  "number": "8",
  "title": "",
  "body": "  Find the points on the graph of at which the tangent line is parallel to the line .    First, identify the required target slope. Rewriting the line as shows its slope is .  Next, compute the derivative of the target function to represent the general tangent slope: Set this derivative equal to the target slope of : Multiply the entire equation by the common denominator (where ): Let . This converts the relation into a manageable quadratic template: This yields roots or . Because , we discard the negative value. Thus, .  Substitute back into the original curve equation to find the corresponding -coordinate: The only point on the graph with a tangent parallel to the given line is .   "
},
{
  "id": "table-derivative-limit-definitions",
  "level": "2",
  "url": "notes-Differentiation-Rules-chapter-exercises.html#table-derivative-limit-definitions",
  "type": "Table",
  "number": "222",
  "title": "The derivative Table",
  "body": " The derivative Table  Core Functions and Analytical Derivatives       Simplified Derivative Formula                                                "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1   This is an outline of the topics we covered in the first week of class.     Monday 8\/22      Wednesday 8\/24      Friday 8\/26     "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2   Monday      Wednesday      Friday     "
},
{
  "id": "ch-review-3",
  "level": "1",
  "url": "ch-review-3.html",
  "type": "Worksheet",
  "number": "",
  "title": "Review 01- Limits of a Function",
  "body": " Review 01- Limits of a Function    Instructions: Prepare neatly written solutions to the following problems. Show all relevant work and use proper notation\/terminology. Calculators should NOT be used.     Limit Laws Evaluation   Suppose and . Find     Using the limit laws for sums, quotients, and scalar multiples:      Rationalizing Limits   Find     Direct substitution results in the indeterminate form . We rationalize the denominator:      Composition and Domain   If and , find and its domain.    The composition is: For the domain, we require the radicand to be non-negative: The domain in interval notation is .     Trigonometric Limits at Infinity   Find     Let . As , . The limit becomes: Using the fundamental trigonometric limit, the result is .     "
},
{
  "id": "ch-review-3-3-1",
  "level": "2",
  "url": "ch-review-3.html#ch-review-3-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Limit Laws Evaluation.",
  "body": " Limit Laws Evaluation   Suppose and . Find     Using the limit laws for sums, quotients, and scalar multiples:    "
},
{
  "id": "ch-review-3-3-2",
  "level": "2",
  "url": "ch-review-3.html#ch-review-3-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Rationalizing Limits.",
  "body": " Rationalizing Limits   Find     Direct substitution results in the indeterminate form . We rationalize the denominator:    "
},
{
  "id": "ch-review-3-3-3",
  "level": "2",
  "url": "ch-review-3.html#ch-review-3-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Composition and Domain.",
  "body": " Composition and Domain   If and , find and its domain.    The composition is: For the domain, we require the radicand to be non-negative: The domain in interval notation is .   "
},
{
  "id": "ch-review-3-3-4",
  "level": "2",
  "url": "ch-review-3.html#ch-review-3-3-4",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Trigonometric Limits at Infinity.",
  "body": " Trigonometric Limits at Infinity   Find     Let . As , . The limit becomes: Using the fundamental trigonometric limit, the result is .   "
},
{
  "id": "ch-review-4",
  "level": "1",
  "url": "ch-review-4.html",
  "type": "Worksheet",
  "number": "",
  "title": "Review 02- Limits of a Function",
  "body": " Review 02- Limits of a Function    Instructions: Prepare neatly written solutions to the following problems. Show all relevant work and use proper notation\/terminology. Calculators should NOT be used.     Limits at Infinity   Find     To find the limit at infinity of a rational function, we divide the numerator and denominator by the highest power of in the denominator, which is : As , the terms , , and all approach . Thus:      Derivative by Definition   By using the definition , find the derivative of for .    The definition of the derivative is .      Continuity of a Piecewise Function   Consider the function defined as follows: Is continuous at ? Why or why not.    A function is continuous at if . We check the one-sided limits at :    Since the left-hand limit ( ) does not equal the right-hand limit ( ), the limit does not exist. Therefore, is not continuous at .     Slope of a Tangent Line   Find the slope of the tangent line to the curve at .    The slope of the tangent line is the derivative . First, find the general derivative using the power rule: Now, evaluate at : The slope of the tangent line is .     "
},
{
  "id": "ch-review-4-3-1",
  "level": "2",
  "url": "ch-review-4.html#ch-review-4-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Limits at Infinity.",
  "body": " Limits at Infinity   Find     To find the limit at infinity of a rational function, we divide the numerator and denominator by the highest power of in the denominator, which is : As , the terms , , and all approach . Thus:    "
},
{
  "id": "ch-review-4-3-2",
  "level": "2",
  "url": "ch-review-4.html#ch-review-4-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Derivative by Definition.",
  "body": " Derivative by Definition   By using the definition , find the derivative of for .    The definition of the derivative is .    "
},
{
  "id": "ch-review-4-3-3",
  "level": "2",
  "url": "ch-review-4.html#ch-review-4-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Continuity of a Piecewise Function.",
  "body": " Continuity of a Piecewise Function   Consider the function defined as follows: Is continuous at ? Why or why not.    A function is continuous at if . We check the one-sided limits at :    Since the left-hand limit ( ) does not equal the right-hand limit ( ), the limit does not exist. Therefore, is not continuous at .   "
},
{
  "id": "ch-review-4-3-4",
  "level": "2",
  "url": "ch-review-4.html#ch-review-4-3-4",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Slope of a Tangent Line.",
  "body": " Slope of a Tangent Line   Find the slope of the tangent line to the curve at .    The slope of the tangent line is the derivative . First, find the general derivative using the power rule: Now, evaluate at : The slope of the tangent line is .   "
},
{
  "id": "ch-review-5",
  "level": "1",
  "url": "ch-review-5.html",
  "type": "Worksheet",
  "number": "",
  "title": "Review 03-Introduction to Derivatives",
  "body": " Review 03-Introduction to Derivatives    Instructions: Prepare neatly written solutions to the following problems. Show all relevant work and use proper notation\/terminology. Calculators should NOT be used.     Differentiation of Polynomial and Radical Expressions   Find the derivatives of the following functions:                   Rewrite the radical as a power: . Note that and are constants, so their derivatives are .     First, simplify the expression by dividing each term in the numerator by : Now, differentiate using the power rule:         Higher Order Derivatives   Find the first and second derivatives of .    Rewrite the function: .  The first derivative is:   To find the second derivative, differentiate :      Differentiability of the Absolute Value Function   Show that is not differentiable at .    To show is not differentiable at , we check the limit definition of the derivative: We examine the one-sided limits:  From the right ( ):  From the left ( ):  Since the one-sided limits are not equal, the limit does not exist. Thus, is not differentiable at .     "
},
{
  "id": "ch-review-5-3-1",
  "level": "2",
  "url": "ch-review-5.html#ch-review-5-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Differentiation of Polynomial and Radical Expressions.",
  "body": " Differentiation of Polynomial and Radical Expressions   Find the derivatives of the following functions:                   Rewrite the radical as a power: . Note that and are constants, so their derivatives are .     First, simplify the expression by dividing each term in the numerator by : Now, differentiate using the power rule:       "
},
{
  "id": "ch-review-5-3-2",
  "level": "2",
  "url": "ch-review-5.html#ch-review-5-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Higher Order Derivatives.",
  "body": " Higher Order Derivatives   Find the first and second derivatives of .    Rewrite the function: .  The first derivative is:   To find the second derivative, differentiate :    "
},
{
  "id": "ch-review-5-3-3",
  "level": "2",
  "url": "ch-review-5.html#ch-review-5-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Differentiability of the Absolute Value Function.",
  "body": " Differentiability of the Absolute Value Function   Show that is not differentiable at .    To show is not differentiable at , we check the limit definition of the derivative: We examine the one-sided limits:  From the right ( ):  From the left ( ):  Since the one-sided limits are not equal, the limit does not exist. Thus, is not differentiable at .   "
},
{
  "id": "ch-review-6",
  "level": "1",
  "url": "ch-review-6.html",
  "type": "Worksheet",
  "number": "",
  "title": "Review 04-Differentiation rules",
  "body": " Review 04-Differentiation rules    Instructions: Prepare neatly written solutions to the following problems. Show all relevant work and use proper notation\/terminology. Calculators should NOT be used.     Derivatives using Product and Quotient Rules   Find the derivatives of the following functions:                  Using the Product Rule :     Using the Quotient Rule :     Simplify first: .         Chain Rule Application   If and given: find .    By the Chain Rule, . Evaluating at : Substitute the known values and : Substitute :      Chain Rule and Simplification Exercises   Find the derivatives of the following functions:               Simplify using : . Thus, .    Simplify: . Thus, .    Product and Chain Rules: .    Quotient Rule: .    Chain Rule: .    Product Rule: .        "
},
{
  "id": "ch-review-6-3-1",
  "level": "2",
  "url": "ch-review-6.html#ch-review-6-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Derivatives using Product and Quotient Rules.",
  "body": " Derivatives using Product and Quotient Rules   Find the derivatives of the following functions:                  Using the Product Rule :     Using the Quotient Rule :     Simplify first: .       "
},
{
  "id": "ch-review-6-3-2",
  "level": "2",
  "url": "ch-review-6.html#ch-review-6-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Chain Rule Application.",
  "body": " Chain Rule Application   If and given: find .    By the Chain Rule, . Evaluating at : Substitute the known values and : Substitute :    "
},
{
  "id": "ch-review-6-3-3",
  "level": "2",
  "url": "ch-review-6.html#ch-review-6-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Chain Rule and Simplification Exercises.",
  "body": " Chain Rule and Simplification Exercises   Find the derivatives of the following functions:               Simplify using : . Thus, .    Simplify: . Thus, .    Product and Chain Rules: .    Quotient Rule: .    Chain Rule: .    Product Rule: .      "
},
{
  "id": "ch-review-7",
  "level": "1",
  "url": "ch-review-7.html",
  "type": "Worksheet",
  "number": "",
  "title": "Review 05-Implicit Differentiation",
  "body": " Review 05-Implicit Differentiation    Instructions: Prepare neatly written solutions to the following problems. Show all relevant work and use proper notation\/terminology. Calculators should NOT be used.     Implicit Differentiation and Slopes   Find the slope of the tangent line to the graph     We differentiate both sides with respect to using the product rule and chain rule:  Now, substitute the point :   The slope of the tangent line at is .     Logarithmic Differentiation   Use the properties of to differentiate     First, take the natural logarithm of both sides: Now, differentiate implicitly with respect to :  Substituting back:      Higher Order Implicit Derivatives   Find the first and second derivatives of .    First derivative: Second derivative (using quotient rule on ): Substitute : Since , the expression simplifies to .     Derivatives of Logarithmic Functions   Find the first and second derivatives of .    First derivative using chain rule: Second derivative using quotient rule:  Using :      "
},
{
  "id": "ch-review-7-3-1",
  "level": "2",
  "url": "ch-review-7.html#ch-review-7-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Implicit Differentiation and Slopes.",
  "body": " Implicit Differentiation and Slopes   Find the slope of the tangent line to the graph     We differentiate both sides with respect to using the product rule and chain rule:  Now, substitute the point :   The slope of the tangent line at is .   "
},
{
  "id": "ch-review-7-3-2",
  "level": "2",
  "url": "ch-review-7.html#ch-review-7-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Logarithmic Differentiation.",
  "body": " Logarithmic Differentiation   Use the properties of to differentiate     First, take the natural logarithm of both sides: Now, differentiate implicitly with respect to :  Substituting back:    "
},
{
  "id": "ch-review-7-3-3",
  "level": "2",
  "url": "ch-review-7.html#ch-review-7-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Higher Order Implicit Derivatives.",
  "body": " Higher Order Implicit Derivatives   Find the first and second derivatives of .    First derivative: Second derivative (using quotient rule on ): Substitute : Since , the expression simplifies to .   "
},
{
  "id": "ch-review-7-3-4",
  "level": "2",
  "url": "ch-review-7.html#ch-review-7-3-4",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Derivatives of Logarithmic Functions.",
  "body": " Derivatives of Logarithmic Functions   Find the first and second derivatives of .    First derivative using chain rule: Second derivative using quotient rule:  Using :    "
},
{
  "id": "ch-review-8",
  "level": "1",
  "url": "ch-review-8.html",
  "type": "Worksheet",
  "number": "",
  "title": "Review 06-Related Rates",
  "body": " Review 06-Related Rates    Instructions: Prepare neatly written solutions to the following problems. Show all relevant work and use proper notation\/terminology. Calculators should NOT be used.     Derivative of Inverse Trigonometric Functions   Find the derivative of .    Using the chain rule and the formula :       Related Rates: Sliding Ladder   A 50 ft ladder is placed against a large building. The base of the ladder is resting on an oil spill, and it slips at the rate of 3 ft. per minute. Find the rate of change of the height of the top of the ladder above the ground at the instant when the base of the ladder is 40 ft. from the base of the building.    Let be the distance from the building and be the height. The ladder length is constant at . By the Pythagorean theorem: .  Differentiating with respect to time : Given and . At this instant, . The height is decreasing at a rate of 4 ft\/min.     Related Rates: Conical Tank   Water runs into a conical tank at the rate of 9 ft \/min. The tank stands point down and has a height of 10 ft and a base radius of 5 ft. How fast is the water level rising when the water is 6 ft deep?    The volume of a cone is . Using similar triangles: . Substitute into the volume formula:   Differentiating with respect to : Given and :      "
},
{
  "id": "ch-review-8-3-1",
  "level": "2",
  "url": "ch-review-8.html#ch-review-8-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Derivative of Inverse Trigonometric Functions.",
  "body": " Derivative of Inverse Trigonometric Functions   Find the derivative of .    Using the chain rule and the formula :     "
},
{
  "id": "ch-review-8-3-2",
  "level": "2",
  "url": "ch-review-8.html#ch-review-8-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Related Rates: Sliding Ladder.",
  "body": " Related Rates: Sliding Ladder   A 50 ft ladder is placed against a large building. The base of the ladder is resting on an oil spill, and it slips at the rate of 3 ft. per minute. Find the rate of change of the height of the top of the ladder above the ground at the instant when the base of the ladder is 40 ft. from the base of the building.    Let be the distance from the building and be the height. The ladder length is constant at . By the Pythagorean theorem: .  Differentiating with respect to time : Given and . At this instant, . The height is decreasing at a rate of 4 ft\/min.   "
},
{
  "id": "ch-review-8-3-3",
  "level": "2",
  "url": "ch-review-8.html#ch-review-8-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Related Rates: Conical Tank.",
  "body": " Related Rates: Conical Tank   Water runs into a conical tank at the rate of 9 ft \/min. The tank stands point down and has a height of 10 ft and a base radius of 5 ft. How fast is the water level rising when the water is 6 ft deep?    The volume of a cone is . Using similar triangles: . Substitute into the volume formula:   Differentiating with respect to : Given and :    "
},
{
  "id": "ch-review-9",
  "level": "1",
  "url": "ch-review-9.html",
  "type": "Worksheet",
  "number": "",
  "title": "Review 07-Extreme Values and sketching curves",
  "body": " Review 07-Extreme Values and sketching curves    Instructions: Prepare neatly written solutions to the following problems. Show all relevant work and use proper notation\/terminology. Calculators should NOT be used.     Curve Sketching Analysis: Quartic Function   Consider the function . Analyze its intercepts, extrema, and concavity, then sketch the graph.      Intercepts:  -int at . -ints at .  First Derivative:  . Critical points at .  Extrema: Minima at and ; Maximum at .  Second Derivative:  . Inflection points at .     Graph of         Curve Sketching Analysis: Cubic Function   Consider the function . Analyze its intercepts, extrema, and concavity, then sketch the graph.      Intercepts:  -int at . -ints at .  First Derivative:  . Critical points at .  Extrema: Maximum at ; Minimum at .  Second Derivative:  . Inflection point at .     Graph of         Absolute Extrema on a Closed Interval   Find the absolute maximum and absolute minimum values of on the interval .    We test the critical points within the interval ( ) and the endpoints ( ). The absolute maximum value is (at ). The absolute minimum value is (at and ).     "
},
{
  "id": "ch-review-9-3-1",
  "level": "2",
  "url": "ch-review-9.html#ch-review-9-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Curve Sketching Analysis: Quartic Function.",
  "body": " Curve Sketching Analysis: Quartic Function   Consider the function . Analyze its intercepts, extrema, and concavity, then sketch the graph.      Intercepts:  -int at . -ints at .  First Derivative:  . Critical points at .  Extrema: Minima at and ; Maximum at .  Second Derivative:  . Inflection points at .     Graph of       "
},
{
  "id": "ch-review-9-3-2",
  "level": "2",
  "url": "ch-review-9.html#ch-review-9-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Curve Sketching Analysis: Cubic Function.",
  "body": " Curve Sketching Analysis: Cubic Function   Consider the function . Analyze its intercepts, extrema, and concavity, then sketch the graph.      Intercepts:  -int at . -ints at .  First Derivative:  . Critical points at .  Extrema: Maximum at ; Minimum at .  Second Derivative:  . Inflection point at .     Graph of       "
},
{
  "id": "ch-review-9-3-3",
  "level": "2",
  "url": "ch-review-9.html#ch-review-9-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Absolute Extrema on a Closed Interval.",
  "body": " Absolute Extrema on a Closed Interval   Find the absolute maximum and absolute minimum values of on the interval .    We test the critical points within the interval ( ) and the endpoints ( ). The absolute maximum value is (at ). The absolute minimum value is (at and ).   "
},
{
  "id": "ch-review-10",
  "level": "1",
  "url": "ch-review-10.html",
  "type": "Worksheet",
  "number": "",
  "title": "Review 08-Optimization and L’Hôpital’s Rule",
  "body": " Review 08-Optimization and L'Hôpital's Rule    Instructions: Prepare neatly written solutions to the following problems. Show all relevant work and use proper notation\/terminology. Calculators should NOT be used.     Optimization: Maximum Box Volume   From a cardboard 5 in. by 5 in., square corners are cut out so that the sides can be folded up to make a box. What dimensions will yield a box of maximum volume? What is the maximum volume?    Let be the side length of the square cutouts. The dimensions of the resulting box will be:  Length:  Width:  Height:  The volume function is .  Find the critical points by taking the derivative: Set and solve using the quadratic formula: This gives (which results in zero volume) or .  The dimensions for maximum volume are: The maximum volume is:      Limits and L'Hôpital's Rule   Find     Direct substitution results in the indeterminate form . We apply L'Hôpital's Rule: This still results in , so we apply L'Hôpital's Rule a second time: Now, evaluate the limit:      Optimization: Sum of Areas   A wire 5 feet long is to be cut into two pieces. One piece is to be bent into the shape of a circle and the other into the shape of a square. Where should the wire be cut so that the sum of the areas of the circle and square is a maximum?    Let be the length of the wire used for the circle. Then is used for the square.  Circle: Circumference . Area .  Square: Perimeter . Area .  Total Area on interval .  The derivative is . Setting gives a local minimum. For absolute maximum on a closed interval, we check endpoints:  If (all square): .  If (all circle): .  To maximize the area, the entire wire should be used for the circle ( ). No cut should be made.     "
},
{
  "id": "ch-review-10-3-1",
  "level": "2",
  "url": "ch-review-10.html#ch-review-10-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Optimization: Maximum Box Volume.",
  "body": " Optimization: Maximum Box Volume   From a cardboard 5 in. by 5 in., square corners are cut out so that the sides can be folded up to make a box. What dimensions will yield a box of maximum volume? What is the maximum volume?    Let be the side length of the square cutouts. The dimensions of the resulting box will be:  Length:  Width:  Height:  The volume function is .  Find the critical points by taking the derivative: Set and solve using the quadratic formula: This gives (which results in zero volume) or .  The dimensions for maximum volume are: The maximum volume is:    "
},
{
  "id": "ch-review-10-3-2",
  "level": "2",
  "url": "ch-review-10.html#ch-review-10-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Limits and L’Hôpital’s Rule.",
  "body": " Limits and L'Hôpital's Rule   Find     Direct substitution results in the indeterminate form . We apply L'Hôpital's Rule: This still results in , so we apply L'Hôpital's Rule a second time: Now, evaluate the limit:    "
},
{
  "id": "ch-review-10-3-3",
  "level": "2",
  "url": "ch-review-10.html#ch-review-10-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Optimization: Sum of Areas.",
  "body": " Optimization: Sum of Areas   A wire 5 feet long is to be cut into two pieces. One piece is to be bent into the shape of a circle and the other into the shape of a square. Where should the wire be cut so that the sum of the areas of the circle and square is a maximum?    Let be the length of the wire used for the circle. Then is used for the square.  Circle: Circumference . Area .  Square: Perimeter . Area .  Total Area on interval .  The derivative is . Setting gives a local minimum. For absolute maximum on a closed interval, we check endpoints:  If (all square): .  If (all circle): .  To maximize the area, the entire wire should be used for the circle ( ). No cut should be made.   "
},
{
  "id": "ch-review-11",
  "level": "1",
  "url": "ch-review-11.html",
  "type": "Worksheet",
  "number": "",
  "title": "Review 09- Antiderivatives, Newton’s Method and Linearization",
  "body": " Review 09- Antiderivatives, Newton's Method and Linearization    Instructions: Prepare neatly written solutions to the following problems. Show all relevant work and use proper notation\/terminology. Calculators should NOT be used.     Indefinite Trigonometric Integration   Evaluate the following integral:     Using the integration rules for trigonometric functions with linear arguments:      Integration of Exponential Functions   Evaluate     First, expand the integrand: Now, integrate term by term:      General Antiderivatives   Find the general antiderivative of .    Rewrite the function in power form: . Apply the power rule for integration:      Linearization and Approximation   Find the linearization of at and use it to approximate .    The linearization is .    Thus, .  To approximate , note that :      Newton's Method   Starting with , find the third approximation to the root of .    Let , so . The formula is .  First iteration ( ): Second iteration ( ):      "
},
{
  "id": "ch-review-11-3-1",
  "level": "2",
  "url": "ch-review-11.html#ch-review-11-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Indefinite Trigonometric Integration.",
  "body": " Indefinite Trigonometric Integration   Evaluate the following integral:     Using the integration rules for trigonometric functions with linear arguments:    "
},
{
  "id": "ch-review-11-3-2",
  "level": "2",
  "url": "ch-review-11.html#ch-review-11-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Integration of Exponential Functions.",
  "body": " Integration of Exponential Functions   Evaluate     First, expand the integrand: Now, integrate term by term:    "
},
{
  "id": "ch-review-11-3-3",
  "level": "2",
  "url": "ch-review-11.html#ch-review-11-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "General Antiderivatives.",
  "body": " General Antiderivatives   Find the general antiderivative of .    Rewrite the function in power form: . Apply the power rule for integration:    "
},
{
  "id": "ch-review-11-3-4",
  "level": "2",
  "url": "ch-review-11.html#ch-review-11-3-4",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Linearization and Approximation.",
  "body": " Linearization and Approximation   Find the linearization of at and use it to approximate .    The linearization is .    Thus, .  To approximate , note that :    "
},
{
  "id": "ch-review-11-3-5",
  "level": "2",
  "url": "ch-review-11.html#ch-review-11-3-5",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Newton’s Method.",
  "body": " Newton's Method   Starting with , find the third approximation to the root of .    Let , so . The formula is .  First iteration ( ): Second iteration ( ):    "
},
{
  "id": "ch-review-12",
  "level": "1",
  "url": "ch-review-12.html",
  "type": "Worksheet",
  "number": "",
  "title": "Review 10- Definite Integrals and Area",
  "body": " Review 10- Definite Integrals and Area    Instructions: Prepare neatly written solutions to the following problems. Show all relevant work and use proper notation\/terminology. Calculators should NOT be used.     Definite Integration   Evaluate     Using the Fundamental Theorem of Calculus:      Indefinite Integration of Power Functions   Evaluate     Applying the power rule term by term:      Properties of Definite Integrals   If and , find .    First, we use the property to find: Using the additive property of intervals: Substitute the known values:      Properties of Sigma Notation   Suppose that and . Find the value of:     Using the linearity properties of summation: Substitute the given sums and note that :      "
},
{
  "id": "ch-review-12-3-1",
  "level": "2",
  "url": "ch-review-12.html#ch-review-12-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Definite Integration.",
  "body": " Definite Integration   Evaluate     Using the Fundamental Theorem of Calculus:    "
},
{
  "id": "ch-review-12-3-2",
  "level": "2",
  "url": "ch-review-12.html#ch-review-12-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Indefinite Integration of Power Functions.",
  "body": " Indefinite Integration of Power Functions   Evaluate     Applying the power rule term by term:    "
},
{
  "id": "ch-review-12-3-3",
  "level": "2",
  "url": "ch-review-12.html#ch-review-12-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Properties of Definite Integrals.",
  "body": " Properties of Definite Integrals   If and , find .    First, we use the property to find: Using the additive property of intervals: Substitute the known values:    "
},
{
  "id": "ch-review-12-3-4",
  "level": "2",
  "url": "ch-review-12.html#ch-review-12-3-4",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Properties of Sigma Notation.",
  "body": " Properties of Sigma Notation   Suppose that and . Find the value of:     Using the linearity properties of summation: Substitute the given sums and note that :    "
},
{
  "id": "ch-review-13",
  "level": "1",
  "url": "ch-review-13.html",
  "type": "Worksheet",
  "number": "",
  "title": "Review 11- Substitution and Area",
  "body": " Review 11- Substitution and Area    Instructions: Prepare neatly written solutions to the following problems. Show all relevant work and use proper notation\/terminology. Calculators should NOT be used.     Substitution Method   Evaluate using substitution.    Let , then . Substituting into the integral gives:      Integration by Substitution   Evaluate     Let . Then , which implies . Substituting these into the integral: Substituting back :      Area Between Curves   Find the area of the region enclosed by the graphs of and .     Region enclosed by and   A parabola opening upward and a diagonal line intersecting at (-1,-1) and (2,2), with the region between them shaded.     First, find the points of intersection by setting the equations equal to each other: The curves intersect at and .  On the interval , the line is above the parabola . The area is given by: The area of the region is square units.     "
},
{
  "id": "ch-review-13-3-1",
  "level": "2",
  "url": "ch-review-13.html#ch-review-13-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Substitution Method.",
  "body": " Substitution Method   Evaluate using substitution.    Let , then . Substituting into the integral gives:    "
},
{
  "id": "ch-review-13-3-2",
  "level": "2",
  "url": "ch-review-13.html#ch-review-13-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Integration by Substitution.",
  "body": " Integration by Substitution   Evaluate     Let . Then , which implies . Substituting these into the integral: Substituting back :    "
},
{
  "id": "ch-review-13-3-3",
  "level": "2",
  "url": "ch-review-13.html#ch-review-13-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Area Between Curves.",
  "body": " Area Between Curves   Find the area of the region enclosed by the graphs of and .     Region enclosed by and   A parabola opening upward and a diagonal line intersecting at (-1,-1) and (2,2), with the region between them shaded.     First, find the points of intersection by setting the equations equal to each other: The curves intersect at and .  On the interval , the line is above the parabola . The area is given by: The area of the region is square units.   "
},
{
  "id": "activity-01-intro-activity",
  "level": "1",
  "url": "activity-01-intro-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Introduction Activity",
  "body": " Introduction Activity    This is the introduction to the activity.      This is the first exercise.    "
},
{
  "id": "activity-01-intro-activity-3",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  This is the first exercise.   "
},
{
  "id": "handouts",
  "level": "1",
  "url": "handouts.html",
  "type": "Chapter",
  "number": "",
  "title": "Handouts",
  "body": " Handouts    "
},
{
  "id": "homework",
  "level": "1",
  "url": "homework.html",
  "type": "Chapter",
  "number": "",
  "title": "Homework",
  "body": " Homework    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
