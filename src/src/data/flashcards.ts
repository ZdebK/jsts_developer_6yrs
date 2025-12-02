export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: FlashcardCategory;
  lessonUrl?: string;
}

export type FlashcardCategory = 'security' | 'javascriptInterview' | 'css' | 'dom' | 'react' | 'typescript' | 'systemDesign' | 'databases' | 'networking';

export interface CategoryInfo {
  id: FlashcardCategory;
  name: string;
  icon: string;
  color: string;
}

export const categories: CategoryInfo[] = [
  {
    id: 'security',
    name: 'Security',
    icon: '🔒',
    color: '#ff6b6b',
  },
  {
    id: 'javascriptInterview',
    name: 'JavaScript Interview',
    icon: '💼',
    color: '#f7df1e',
  },
  {
    id: 'css',
    name: 'CSS & Styling',
    icon: '🎨',
    color: '#264de4',
  },
  {
    id: 'dom',
    name: 'Browser APIs & DOM',
    icon: '🌐',
    color: '#4ec9b0',
  },
  {
    id: 'react',
    name: 'React Development',
    icon: '⚛️',
    color: '#61dafb',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: '📘',
    color: '#3178c6',
  },
  {
    id: 'systemDesign',
    name: 'System Design',
    icon: '🏗️',
    color: '#9b59b6',
  },
  {
    id: 'databases',
    name: 'Databases',
    icon: '🗄️',
    color: '#e67e22',
  },
  {
    id: 'networking',
    name: 'Networking',
    icon: '🌐',
    color: '#16a085',
  },
];

export const flashcardsData: Record<FlashcardCategory, Flashcard[]> = {
  security: [
    {
      id: 'sec-1',
      question: 'XSS (Cross-Site Scripting)',
      answer: 'XSS is a security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. It occurs when an application includes untrusted data in a web page without proper validation or escaping.',
      category: 'security',
      lessonUrl: 'https://portswigger.net/web-security/cross-site-scripting'
    },
    {
      id: 'sec-2',
      question: 'CSRF (Cross-Site Request Forgery)',
      answer: 'CSRF is an attack that forces authenticated users to submit a request to a web application against which they are currently authenticated. Attackers exploit the trust that a site has in the user\'s browser.',
      category: 'security',
      lessonUrl: 'https://portswigger.net/web-security/csrf'
    },
    {
      id: 'sec-3',
      question: 'Same-Origin Policy',
      answer: 'The Same-Origin Policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with resources from another origin. Two URLs have the same origin if protocol, port, and host are the same.',
      category: 'security',
      lessonUrl: 'https://web.dev/articles/same-origin-policy'
    },
    {
      id: 'sec-4',
      question: 'CORS and why is it needed',
      answer: 'CORS (Cross-Origin Resource Sharing) is a mechanism that allows restricted resources on a web page to be requested from another domain. It relaxes the Same-Origin Policy in a controlled manner using HTTP headers.',
      category: 'security',
      lessonUrl: 'https://web.dev/articles/cross-origin-resource-sharing'
    },
    {
      id: 'sec-5',
      question: 'Content Security Policy (CSP)',
      answer: 'CSP is a security layer that helps detect and mitigate certain types of attacks, including XSS and data injection attacks. It allows you to specify which dynamic resources are allowed to load via HTTP headers.',
      category: 'security',
      lessonUrl: 'https://web.dev/articles/csp'
    },
    {
      id: 'sec-6',
      question: 'JWT and how does it work',
      answer: 'JWT (JSON Web Token) is a compact, URL-safe means of representing claims between two parties. It consists of three parts: Header, Payload, and Signature. Used for authentication and information exchange.',
      category: 'security',
      lessonUrl: 'https://jwt.io/introduction'
    },
    {
      id: 'sec-7',
      question: 'CORS preflight requests',
      answer: 'Preflight is an OPTIONS request sent before actual request to check if CORS policy allows it. Triggered by non-simple requests (custom headers, methods other than GET/POST, certain content types). Server must respond with Access-Control-Allow-* headers.',
      category: 'security',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request'
    },
    {
      id: 'sec-8',
      question: 'Common web application attack defenses',
      answer: 'XSS: sanitize input, use Content Security Policy. CSRF: use CSRF tokens, SameSite cookies. SQL Injection: use parameterized queries. DDoS: rate limiting, CDN. Man-in-the-middle: HTTPS, HSTS. Authentication: strong passwords, MFA, secure session management.',
      category: 'security',
      lessonUrl: 'https://owasp.org/www-project-top-ten/'
    },
    {
      id: 'sec-9',
      question: 'JWT authentication flow',
      answer: 'User logs in → Server validates credentials → Server creates JWT with user data and signs it → Client stores JWT (localStorage/cookie) → Client sends JWT in Authorization header → Server verifies signature and extracts payload → Server grants access based on claims.',
      category: 'security',
      lessonUrl: 'https://auth0.com/learn/json-web-tokens'
    },
  ],
  javascriptInterview: [
    {
      id: 'js-1',
      question: 'Closure in JavaScript',
      answer: 'A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. Closures are created every time a function is created.',
      category: 'javascriptInterview',
      lessonUrl: 'https://javascript.info/closure'
    },
    {
      id: 'js-2',
      question: 'Explain event delegation in JavaScript',
      answer: 'Event delegation is a technique where you add a single event listener to a parent element instead of adding listeners to multiple child elements. It leverages event bubbling to handle events at a higher level in the DOM.',
      category: 'javascriptInterview',
      lessonUrl: 'https://javascript.info/event-delegation'
    },
    {
      id: 'js-3',
      question: 'Difference between == and ===',
      answer: '== (loose equality) performs type coercion before comparison, while === (strict equality) compares both value and type without coercion. Use === to avoid unexpected type conversions.',
      category: 'javascriptInterview',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness'
    },
    {
      id: 'js-4',
      question: 'Event loop in JavaScript',
      answer: 'The event loop is a mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded. It continuously checks the call stack and task queue, executing callbacks when the stack is empty.',
      category: 'javascriptInterview',
      lessonUrl: 'https://javascript.info/event-loop'
    },
    {
      id: 'js-5',
      question: 'Hoisting in JavaScript',
      answer: 'Hoisting is JavaScript\'s behavior of moving declarations to the top of their scope before code execution. Function declarations are fully hoisted, while var declarations are hoisted but not initialized (undefined). let/const are hoisted but not initialized (temporal dead zone).',
      category: 'javascriptInterview',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Glossary/Hoisting'
    },
    {
      id: 'js-6',
      question: 'Explain Promise.all() vs Promise.race()',
      answer: 'Promise.all() waits for all promises to resolve (or any to reject) and returns an array of results. Promise.race() returns as soon as the first promise settles (resolves or rejects), with that promise\'s value.',
      category: 'javascriptInterview',
      lessonUrl: 'https://javascript.info/promise-api'
    },
    {
      id: 'js-7',
      question: 'Difference between null and undefined',
      answer: 'undefined means a variable has been declared but not assigned a value. null is an assignment value representing no value or empty. undefined is a type, while null is an object.',
      category: 'javascriptInterview',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null'
    },
    {
      id: 'js-8',
      question: 'Debouncing and throttling',
      answer: 'Debouncing delays function execution until after a certain time has passed since the last invocation. Throttling limits function execution to once per specified time period. Both optimize performance for frequent events.',
      category: 'javascriptInterview',
      lessonUrl: 'https://css-tricks.com/debouncing-throttling-explained-examples/'
    },
    {
      id: 'js-9',
      question: 'this keyword in JavaScript',
      answer: 'this refers to the execution context. In methods, this refers to the object. In regular functions, this depends on how the function is called. In arrow functions, this is lexically bound (inherits from surrounding scope). Use bind/call/apply to explicitly set this.',
      category: 'javascriptInterview',
      lessonUrl: 'https://javascript.info/object-methods'
    },
    {
      id: 'js-10',
      question: 'Arrow functions vs regular functions',
      answer: 'Arrow functions have lexical this binding (inherit from parent scope), cannot be used as constructors, have no arguments object, and are always anonymous. Regular functions have dynamic this, can be constructors, have arguments object, and can be named or anonymous.',
      category: 'javascriptInterview',
      lessonUrl: 'https://javascript.info/arrow-functions-basics'
    },
    {
      id: 'js-11',
      question: 'Macro tasks vs micro tasks',
      answer: 'Macro tasks include setTimeout, setInterval, I/O operations. Micro tasks include Promise callbacks, queueMicrotask, MutationObserver. Event loop processes all micro tasks after each macro task before moving to the next macro task. Micro tasks have higher priority.',
      category: 'javascriptInterview',
      lessonUrl: 'https://javascript.info/event-loop#macrotasks-and-microtasks'
    },
    {
      id: 'js-12',
      question: 'Event loop detailed explanation',
      answer: 'Event loop has: Call Stack (executes functions), Task Queue (macro tasks), Microtask Queue (promises). Process: 1) Execute all synchronous code, 2) Execute all microtasks, 3) Execute one macro task, 4) Execute all microtasks again, 5) Repeat. This enables asynchronous JavaScript.',
      category: 'javascriptInterview',
      lessonUrl: 'https://www.jsv9000.app/'
    },
  ],
  css: [
    {
      id: 'css-1',
      question: 'Box model in CSS',
      answer: 'The CSS box model describes the rectangular boxes generated for elements. It consists of content, padding, border, and margin. The box-sizing property determines whether padding/border are included in width/height.',
      category: 'css',
      lessonUrl: 'https://css-tricks.com/the-css-box-model/'
    },
    {
      id: 'css-2',
      question: 'Explain Flexbox vs Grid',
      answer: 'Flexbox is one-dimensional (row or column) and ideal for component layouts. Grid is two-dimensional (rows and columns) and better for page layouts. Flexbox focuses on content flow, Grid on placement.',
      category: 'css',
      lessonUrl: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/'
    },
    {
      id: 'css-3',
      question: 'CSS specificity',
      answer: 'Specificity determines which CSS rule applies when multiple rules target the same element. Calculated as: inline styles (1000), IDs (100), classes/attributes/pseudo-classes (10), elements/pseudo-elements (1).',
      category: 'css',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity'
    },
    {
      id: 'css-4',
      question: 'CSS custom properties (variables)',
      answer: 'CSS variables (--variable-name) are entities defined by CSS authors that contain specific values to be reused. They are scoped to elements and inherited by children. Access via var(--variable-name).',
      category: 'css',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties'
    },
    {
      id: 'css-5',
      question: 'Difference between display: none and visibility: hidden',
      answer: 'display: none removes the element from the document flow (no space). visibility: hidden hides the element but preserves its space. display: none affects layout, visibility: hidden does not.',
      category: 'css',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS/display'
    },
    {
      id: 'css-6',
      question: 'CSS preprocessor',
      answer: 'CSS preprocessors (Sass, Less, Stylus) extend CSS with features like variables, nesting, mixins, and functions. They compile to standard CSS. Benefits include better organization, reusability, and maintainability.',
      category: 'css',
      lessonUrl: 'https://sass-lang.com/guide'
    },
  ],
  dom: [
    {
      id: 'dom-1',
      question: 'DOM (Document Object Model)',
      answer: 'The Document Object Model is a programming interface for HTML/XML documents. It represents the page structure as a tree of objects that can be manipulated with JavaScript, allowing dynamic updates to content and structure.',
      category: 'dom',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction'
    },
    {
      id: 'dom-2',
      question: 'Event bubbling and capturing',
      answer: 'Event bubbling: events propagate from target element up to root. Event capturing: events propagate from root down to target. Use addEventListener with third parameter (true for capture, false for bubble).',
      category: 'dom',
      lessonUrl: 'https://javascript.info/bubbling-and-capturing'
    },
    {
      id: 'dom-3',
      question: 'Difference between innerHTML and textContent',
      answer: 'innerHTML gets/sets HTML markup including tags. textContent gets/sets only text content, ignoring HTML tags. textContent is faster and safer (no XSS risk), innerHTML parses HTML.',
      category: 'dom',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent'
    },
    {
      id: 'dom-4',
      question: 'localStorage vs sessionStorage',
      answer: 'Both store key-value pairs in the browser. localStorage persists until explicitly deleted. sessionStorage clears when the page session ends (tab/window closes). Both have ~5-10MB limit and are synchronous.',
      category: 'dom',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API'
    },
    {
      id: 'dom-5',
      question: 'Intersection Observer API',
      answer: 'The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor or viewport. Used for lazy loading, infinite scroll, and visibility tracking.',
      category: 'dom',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API'
    },
    {
      id: 'dom-6',
      question: 'requestAnimationFrame',
      answer: 'requestAnimationFrame tells the browser to perform an animation and requests that the browser call a specified function before the next repaint. It optimizes animations to run at ~60fps and pauses when tab is inactive.',
      category: 'dom',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame'
    },
  ],
  react: [
    {
      id: 'react-1',
      question: 'Virtual DOM',
      answer: 'The Virtual DOM is a lightweight copy of the actual DOM. React uses it to determine what changed by comparing (diffing) the new Virtual DOM with the previous one, then efficiently updates only the changed parts in the real DOM.',
      category: 'react',
      lessonUrl: 'https://react.dev/learn/preserving-and-resetting-state'
    },
    {
      id: 'react-2',
      question: 'Difference between props and state',
      answer: 'Props are read-only data passed from parent to child components. State is local, mutable data managed within a component. Props flow down (unidirectional), state is internal. Changing state triggers re-renders.',
      category: 'react',
      lessonUrl: 'https://react.dev/learn/passing-props-to-a-component'
    },
    {
      id: 'react-3',
      question: 'React hooks and why were they introduced',
      answer: 'Hooks are functions that let you use state and lifecycle features in functional components. Introduced to avoid class complexity, enable better code reuse, and make components easier to understand and test.',
      category: 'react',
      lessonUrl: 'https://react.dev/reference/react/hooks'
    },
    {
      id: 'react-4',
      question: 'Explain useEffect dependencies array',
      answer: 'The dependencies array controls when useEffect runs. Empty [] runs once on mount. With dependencies, runs when those values change. No array means it runs on every render. Use to optimize and prevent infinite loops.',
      category: 'react',
      lessonUrl: 'https://react.dev/reference/react/useEffect'
    },
    {
      id: 'react-5',
      question: 'React Context API',
      answer: 'Context provides a way to pass data through the component tree without manually passing props at every level. Used for global state like themes, user data, or language. Includes Provider and Consumer/useContext.',
      category: 'react',
      lessonUrl: 'https://react.dev/learn/passing-data-deeply-with-context'
    },
    {
      id: 'react-6',
      question: 'Difference between useMemo and useCallback',
      answer: 'useMemo memoizes a computed value, returning the cached result if dependencies haven\'t changed. useCallback memoizes a function itself. Both optimize performance by preventing unnecessary recalculations/recreations.',
      category: 'react',
      lessonUrl: 'https://react.dev/reference/react/useMemo'
    },
    {
      id: 'react-7',
      question: 'React.memo and when should you use it',
      answer: 'React.memo is a higher-order component that memoizes the rendered output of a component. It only re-renders if props change. Use for expensive renders or components that receive the same props frequently.',
      category: 'react',
      lessonUrl: 'https://react.dev/reference/react/memo'
    },
    {
      id: 'react-8',
      question: 'Key prop and why is it important',
      answer: 'The key prop helps React identify which items in a list have changed, been added, or removed. Keys should be stable, unique, and not use array indices if the list can reorder. Critical for performance and preventing bugs.',
      category: 'react',
      lessonUrl: 'https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key'
    },
    {
      id: 'react-9',
      question: 'useState hook explained',
      answer: 'useState is a React hook that adds state to functional components. Returns array with current state and setter function. State updates trigger re-renders. Can accept initial value or lazy initializer function. Multiple useState calls can manage different state pieces.',
      category: 'react',
      lessonUrl: 'https://react.dev/reference/react/useState'
    },
    {
      id: 'react-10',
      question: 'useRef hook and its use cases',
      answer: 'useRef creates a mutable reference that persists across renders without causing re-renders. Use cases: accessing DOM elements, storing mutable values (timers, previous values), avoiding stale closures. Returns object with .current property.',
      category: 'react',
      lessonUrl: 'https://react.dev/reference/react/useRef'
    },
    {
      id: 'react-11',
      question: 'useReducer vs useState',
      answer: 'useState is better for simple state. useReducer is better for complex state logic with multiple sub-values or when next state depends on previous. useReducer centralizes state logic, making it testable and predictable. Similar to Redux pattern.',
      category: 'react',
      lessonUrl: 'https://react.dev/reference/react/useReducer'
    },
    {
      id: 'react-12',
      question: 'Event handling in React',
      answer: 'React uses synthetic events (cross-browser wrapper). Event handlers use camelCase (onClick, onChange). Events bubble up component tree. Use event.stopPropagation() to stop bubbling, event.preventDefault() to prevent default behavior. Automatic event delegation.',
      category: 'react',
      lessonUrl: 'https://react.dev/learn/responding-to-events'
    },
  ],
  typescript: [
    {
      id: 'ts-1',
      question: 'Difference between interfaces and types in TypeScript',
      answer: 'Interfaces are extensible and can be merged, ideal for object shapes and public APIs. Types are more flexible, supporting unions, intersections, and computed types. Both support generics and inheritance patterns.',
      category: 'typescript',
      lessonUrl: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces'
    },
    {
      id: 'ts-2',
      question: 'Generic programming in TypeScript',
      answer: 'Type variables enabling reusable, type-safe code. Use angle brackets: function identity<T>(arg: T): T. Enables libraries like React to provide type safety while remaining flexible for different data types.',
      category: 'typescript',
      lessonUrl: 'https://www.typescriptlang.org/docs/handbook/2/generics.html'
    },
    {
      id: 'ts-3',
      question: 'Utility types in TypeScript',
      answer: 'Built-in type transformations: Partial<T> makes properties optional, Pick<T, K> selects specific properties, Omit<T, K> excludes properties, Required<T> makes all properties required. Powerful for type manipulation.',
      category: 'typescript',
      lessonUrl: 'https://www.typescriptlang.org/docs/handbook/utility-types.html'
    },
    {
      id: 'ts-4',
      question: 'Type inference and narrowing',
      answer: 'TypeScript automatically infers types when possible. Type narrowing refines types through control flow analysis, type guards, and discriminated unions. Reduces explicit type annotations while maintaining safety.',
      category: 'typescript',
      lessonUrl: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html'
    },
    {
      id: 'ts-5',
      question: 'Enum types in TypeScript',
      answer: 'Named constants with automatic numbering or explicit values. Numeric enums are bidirectional, string enums are more explicit. Const enums are inlined for performance. Consider union types as lightweight alternatives.',
      category: 'typescript',
      lessonUrl: 'https://www.typescriptlang.org/docs/handbook/enums.html'
    },
    {
      id: 'ts-6',
      question: 'Type guards in TypeScript',
      answer: 'Runtime checks that narrow types: typeof checks for primitives, instanceof for classes, "property" in object for property existence, custom functions returning type predicates for complex logic.',
      category: 'typescript',
      lessonUrl: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates'
    },
    {
      id: 'ts-7',
      question: 'Mapped types in TypeScript',
      answer: 'Transform object types systematically: type Readonly<T> = { readonly [P in keyof T]: T[P] }. Enables creating variations of types while maintaining relationships between properties.',
      category: 'typescript',
      lessonUrl: 'https://www.typescriptlang.org/docs/handbook/2/mapped-types.html'
    },
    {
      id: 'ts-8',
      question: 'keyof and typeof operators',
      answer: 'keyof T produces union of property names, typeof captures type of value. Together enable type-safe property access and dynamic type creation from existing values and objects.',
      category: 'typescript',
      lessonUrl: 'https://www.typescriptlang.org/docs/handbook/2/keyof-types.html'
    },
    {
      id: 'ts-9',
      question: 'Decorators in TypeScript',
      answer: 'Metadata annotations for classes, methods, and properties. Enable aspect-oriented programming, dependency injection, and frameworks like Angular. Stage 3 proposal with experimental TypeScript support.',
      category: 'typescript',
      lessonUrl: 'https://www.typescriptlang.org/docs/handbook/decorators.html'
    },
    {
      id: 'ts-10',
      question: 'never type in TypeScript',
      answer: 'The never type represents values that never occur. Used for functions that never return (throw errors or infinite loops), unreachable code branches, and exhaustive type checking. Helps catch logic errors at compile time.',
      category: 'typescript',
      lessonUrl: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type'
    },
    {
      id: 'ts-11',
      question: 'unknown type in TypeScript',
      answer: 'unknown is a type-safe alternative to any. Variables of type unknown cannot be used without type checking first. Forces you to perform type guards or assertions before operations. Prefer unknown over any for better type safety.',
      category: 'typescript',
      lessonUrl: 'https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown'
    },
    {
      id: 'ts-12',
      question: 'When to use interface vs type in TypeScript',
      answer: 'Use interface for object shapes, public APIs, and when you need declaration merging (extending across multiple declarations). Use type for unions, intersections, tuples, mapped types, and utility types. Interface has better error messages for object shapes.',
      category: 'typescript',
      lessonUrl: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces'
    },
  ],
  systemDesign: [
    {
      id: 'sd-1',
      question: 'Vertical vs horizontal scaling',
      answer: 'Vertical scaling (scale up) means adding more power to existing machines (CPU, RAM). Horizontal scaling (scale out) means adding more machines. Horizontal is generally more resilient and cost-effective for web applications.',
      category: 'systemDesign',
      lessonUrl: 'https://www.geeksforgeeks.org/system-design-horizontal-and-vertical-scaling/'
    },
    {
      id: 'sd-2',
      question: 'Load balancer and why is it important',
      answer: 'A load balancer distributes incoming network traffic across multiple servers. It improves availability, fault tolerance, and scalability by preventing any single server from being overwhelmed. Common algorithms: round-robin, least connections, IP hash.',
      category: 'systemDesign',
      lessonUrl: 'https://www.nginx.com/resources/glossary/load-balancing/'
    },
    {
      id: 'sd-3',
      question: 'Caching and where can it be applied',
      answer: 'Caching stores frequently accessed data in fast storage to reduce latency and load. Can be applied at: browser (HTTP cache), CDN, application (Redis/Memcached), database query results. Cache invalidation is a key challenge.',
      category: 'systemDesign',
      lessonUrl: 'https://aws.amazon.com/caching/'
    },
    {
      id: 'sd-4',
      question: 'CAP theorem',
      answer: 'CAP theorem states a distributed system can only guarantee 2 of 3: Consistency (all nodes see same data), Availability (system responds to requests), Partition tolerance (works despite network failures). Most systems choose AP or CP.',
      category: 'systemDesign',
      lessonUrl: 'https://www.ibm.com/topics/cap-theorem'
    },
    {
      id: 'sd-5',
      question: 'Middleware in web applications',
      answer: 'Middleware is software that sits between request and response, processing requests before they reach route handlers. Used for authentication, logging, error handling, parsing request bodies, CORS. Executed in order of definition. Common in Express.js, Next.js.',
      category: 'systemDesign',
      lessonUrl: 'https://expressjs.com/en/guide/using-middleware.html'
    },
    {
      id: 'sd-6',
      question: 'Microservices architecture',
      answer: 'Microservices split application into small, independent services that communicate via APIs. Benefits: independent deployment, technology flexibility, scalability, fault isolation. Challenges: distributed system complexity, data consistency, network overhead, monitoring.',
      category: 'systemDesign',
      lessonUrl: 'https://microservices.io/patterns/microservices.html'
    },
    {
      id: 'sd-7',
      question: 'Monolithic architecture',
      answer: 'Monolithic architecture builds entire application as single unit. All components share same codebase, database, and deployment. Benefits: simpler development and deployment, easier testing. Drawbacks: scaling challenges, tight coupling, longer deployment cycles.',
      category: 'systemDesign',
      lessonUrl: 'https://www.atlassian.com/microservices/microservices-architecture/microservices-vs-monolith'
    },
    {
      id: 'sd-8',
      question: 'Hexagonal architecture (Ports and Adapters)',
      answer: 'Hexagonal architecture isolates business logic from external concerns. Core contains domain logic, ports define interfaces, adapters implement external interactions (DB, APIs). Benefits: testability, flexibility, technology independence. Also called Clean Architecture pattern.',
      category: 'systemDesign',
      lessonUrl: 'https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749'
    },
  ],
  databases: [
    {
      id: 'db-1',
      question: 'Difference between SQL and NoSQL databases',
      answer: 'SQL databases are relational, use structured schemas, and support ACID transactions (MySQL, PostgreSQL). NoSQL databases are non-relational, schema-flexible, and optimized for specific use cases (MongoDB, Redis, Cassandra). Choice depends on data structure and scalability needs.',
      category: 'databases',
      lessonUrl: 'https://www.mongodb.com/resources/compare/relational-vs-non-relational-databases'
    },
    {
      id: 'db-2',
      question: 'Database indexing and why is it important',
      answer: 'Indexes are data structures that improve query speed by creating pointers to data locations. They speed up SELECT queries but slow down INSERT/UPDATE/DELETE. Common types: B-tree (default), hash, full-text. Trade-off between read and write performance.',
      category: 'databases',
      lessonUrl: 'https://www.geeksforgeeks.org/indexing-in-databases-set-1/'
    },
    {
      id: 'db-3',
      question: 'Database normalization',
      answer: 'Normalization organizes data to reduce redundancy and improve integrity. Forms: 1NF (atomic values), 2NF (no partial dependencies), 3NF (no transitive dependencies). Benefits: data consistency, easier updates. Trade-off: may require more joins.',
      category: 'databases',
      lessonUrl: 'https://www.geeksforgeeks.org/introduction-of-database-normalization/'
    },
    {
      id: 'db-4',
      question: 'ACID in databases',
      answer: 'ACID ensures reliable transactions: Atomicity (all-or-nothing), Consistency (valid state), Isolation (concurrent transactions don\'t interfere), Durability (committed data persists). Critical for financial systems and data integrity.',
      category: 'databases',
      lessonUrl: 'https://www.databricks.com/glossary/acid-transactions'
    },
    {
      id: 'db-5',
      question: 'Difference between Relational and Non-Relational Databases',
      answer: 'Relational databases use tables with fixed schemas, enforce relationships via foreign keys, and support complex queries with SQL joins. Non-relational databases use flexible data models (document, key-value, graph, column-family), scale horizontally easily, and prioritize performance and flexibility over strict consistency.',
      category: 'databases',
      lessonUrl: 'https://www.geeksforgeeks.org/difference-between-relational-and-non-relational-database/'
    },
    {
      id: 'db-6',
      question: 'State difference between normalization and denormalization.',
      answer: 'Normalization organizes data to eliminate redundancy by splitting into multiple related tables, improving integrity but requiring joins. Denormalization intentionally adds redundancy by combining tables to optimize read performance, trading storage and update complexity for faster queries.',
      category: 'databases',
      lessonUrl: 'https://www.geeksforgeeks.org/denormalization-in-databases/'
    },
    {
      id: 'db-7',
      question: 'Explain the Difference Between a Primary Key and a Foreign Key.',
      answer: 'A Primary Key uniquely identifies each record in a table and cannot be null. A Foreign Key is a field in one table that references the Primary Key of another table, establishing relationships and enforcing referential integrity between tables.',
      category: 'databases',
      lessonUrl: 'https://www.geeksforgeeks.org/difference-between-primary-key-and-foreign-key/'
    },
    {
      id: 'db-8',
      question: 'Different Types of Joins and How do They Work',
      answer: 'INNER JOIN returns matching records from both tables. LEFT JOIN returns all left table records plus matches from right. RIGHT JOIN returns all right table records plus matches from left. FULL OUTER JOIN returns all records from both tables. CROSS JOIN returns Cartesian product of both tables.',
      category: 'databases',
      lessonUrl: 'https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/'
    },
    {
      id: 'db-9',
      question: 'How to Ensure Data Integrity in a Relational Database?',
      answer: 'Use Primary Keys for unique records, Foreign Keys to enforce relationships, Unique Constraints for distinct values, Not Null Constraints to prevent empty fields, Check Constraints to validate data against rules, and Transactions to guarantee successful execution of operation groups.',
      category: 'databases',
      lessonUrl: 'https://www.postgresql.org/docs/current/ddl-constraints.html'
    },
    {
      id: 'db-10',
      question: 'Explain the Difference Between OLTP and OLAP Databases.',
      answer: 'OLTP (Online Transaction Processing) databases are optimized for high-volume short transactions (insert, update, delete) in operational systems like retail sales. OLAP (Online Analytical Processing) databases are optimized for complex queries and reporting on large data volumes for business intelligence and data warehousing.',
      category: 'databases',
      lessonUrl: 'https://www.geeksforgeeks.org/difference-between-oltp-and-olap-in-dbms/'
    },
    {
      id: 'db-11',
      question: 'ACID Properties in a Database and Why are They Important',
      answer: 'Atomicity: All operations must succeed or none are applied. Consistency: Ensures the database remains in a valid state. Isolation: Prevents interference from other concurrent transactions. Durability: Guarantees the results are permanently stored.',
      category: 'databases',
      lessonUrl: 'https://www.geeksforgeeks.org/acid-properties-in-dbms/'
    },
    {
      id: 'db-12',
      question: 'Explain the Concept of Database Indexing and its Importance in Query Performance.',
      answer: 'Database indexing creates a data structure that improves data retrieval speed at the cost of additional writes and storage. Indexes speed up queries by allowing efficient row location, support sorting and searching (ORDER BY, WHERE clauses), and enhance join performance by quickly locating matching rows.',
      category: 'databases',
      lessonUrl: 'https://use-the-index-luke.com/'
    },
    {
      id: 'db-13',
      question: 'Performance Considerations When Querying Large Datasets',
      answer: 'Indexing: Ensure appropriate indexes are in place. Partitioning: Use table partitioning for large tables. Query Optimization: Write efficient queries, avoid unnecessary calculations and joins. Avoid SELECT *: Select only necessary columns. Batch Processing: Process data in batches. Caching: Store frequently accessed data. Database Configuration: Ensure adequate resources.',
      category: 'databases',
      lessonUrl: 'https://www.postgresql.org/docs/current/performance-tips.html'
    },
    {
      id: 'db-14',
      question: 'Types of database indexes',
      answer: 'B-tree (default, balanced tree for range queries), Hash (exact match lookups), Full-text (text search), GiST/GIN (PostgreSQL for JSON, arrays), Bitmap (multiple conditions), Covering (includes all query columns). Choose based on query patterns and data types.',
      category: 'databases',
      lessonUrl: 'https://www.postgresql.org/docs/current/indexes-types.html'
    },
    {
      id: 'db-15',
      question: 'Why choose PostgreSQL over other databases',
      answer: 'PostgreSQL offers ACID compliance, advanced features (JSON support, full-text search, custom types), extensibility, robust concurrency control (MVCC), strong community, open source, excellent performance for complex queries. Best for applications requiring reliability and complex data operations.',
      category: 'databases',
      lessonUrl: 'https://www.postgresql.org/about/'
    },
    {
      id: 'db-16',
      question: 'When to use SQL vs NoSQL databases',
      answer: 'Use SQL for: structured data, complex relationships, ACID transactions, complex queries, data integrity requirements. Use NoSQL for: unstructured/flexible data, horizontal scaling needs, high write throughput, simple query patterns, real-time applications, caching layers.',
      category: 'databases',
      lessonUrl: 'https://www.mongodb.com/nosql-explained/nosql-vs-sql'
    },
  ],
  networking: [
    {
      id: 'net-1',
      question: 'HTTP status codes 4xx vs 5xx',
      answer: '4xx codes indicate client errors (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found). 5xx codes indicate server errors (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable). Use appropriate codes for proper error handling.',
      category: 'networking',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status'
    },
    {
      id: 'net-2',
      question: 'HTTPS encryption explained',
      answer: 'HTTPS uses TLS/SSL to encrypt data in transit. What is encrypted: request/response bodies, headers, cookies, URL parameters. What is NOT encrypted: domain name, IP address, port number (visible in DNS and routing). Protects against eavesdropping and man-in-the-middle attacks.',
      category: 'networking',
      lessonUrl: 'https://web.dev/articles/why-https-matters'
    },
    {
      id: 'net-3',
      question: 'HTTP vs HTTPS',
      answer: 'HTTP (Hypertext Transfer Protocol) transmits data in plain text. HTTPS adds SSL/TLS encryption for secure communication. HTTPS provides authentication (verify server identity), encryption (protect data), and integrity (detect tampering). Always use HTTPS for sensitive data.',
      category: 'networking',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Glossary/HTTPS'
    },
  ],
};

export const getAllFlashcards = (): Flashcard[] => {
  return Object.values(flashcardsData).flat();
};

export const getFlashcardsByCategory = (category: FlashcardCategory): Flashcard[] => {
  return flashcardsData[category] || [];
};

export const getCategoryInfo = (category: FlashcardCategory): CategoryInfo | undefined => {
  return categories.find(cat => cat.id === category);
};
