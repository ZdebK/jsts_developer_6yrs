export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: FlashcardCategory;
  lessonUrl?: string;
}

export type FlashcardCategory = 'security' | 'javascriptInterview' | 'css' | 'dom' | 'react' | 'typescript' | 'systemDesign' | 'databases' | 'networking' | 'ux' | 'docker' | 'nodejs'| 'testing';

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
    name: 'JavaScript',
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
    icon: '🔗',
    color: '#16a085',
  },
  {
    id: 'ux',
    name: 'UX & User Experience',
    icon: '👥',
    color: '#e74c3c',
  },
  {
    id: 'docker',
    name: 'Docker',
    icon: '🐳',
    color: '#2496ed',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    icon: '🟩',
    color: '#339933',
  },
  {
    id: 'testing',
    name: 'Testing',
    icon: '🧪',
    color: '#8e44ad',
  },
];

// GitHub Copilot/AI contributors: 
// 1. Always add new flashcards in English (unless explicitly requested otherwise).
// 2. Use sequential, numbered IDs for each category (e.g., sec-13, net-5, js-15).
// 3. Assign the most relevant category (e.g., security, networking, javascriptInterview).
// 4. Keep questions and answers short and clear for interview prep.
// 5. If in doubt, ask the user for clarification before adding.

export const flashcardsData: Record<FlashcardCategory, Flashcard[]> = {
    testing: [
      {
        id: 'testing-external-services',
        question: 'How do you test interactions with external services (e.g., databases, APIs)?',
        answer: 'You can use test doubles like mocks or stubs to simulate external services, ensuring tests are fast and reliable. For integration tests, use test databases or sandbox APIs. Tools like nock (for HTTP), testcontainers, or in-memory databases help isolate and control external dependencies.',
        category: 'testing',
        lessonUrl: 'https://martinfowler.com/articles/mocksArentStubs.html'
      },
      {
        id: 'testing-first',
        question: 'What are the FIRST principles of unit testing?',
        answer: 'FIRST stands for Fast (tests should run quickly), Independent (tests should not depend on each other), Repeatable (tests should produce the same result every time), Self-validating (tests should have a clear pass/fail result), and Timely (tests should be written early, ideally before the code).',
        category: 'testing',
        lessonUrl: 'https://martinfowler.com/bliki/UnitTest.html'
      },
    ],
    nodejs: [
      // Basic
      {
        id: 'nodejs-1',
        question: 'What is Node.js and what are its main features (event loop, non-blocking I/O)?',
        answer: 'Node.js is a runtime for executing JavaScript on the server. Its main features are the event loop (handles asynchronous operations efficiently), non-blocking I/O (allows many operations to run in parallel), and single-threaded architecture. Great for scalable network apps.',
        category: 'nodejs',
        lessonUrl: 'https://nodejs.dev/en/learn/'
      },
      {
        id: 'nodejs-2',
        question: 'Explain how the event loop works in Node.js.',
        answer: 'The event loop is the mechanism that allows Node.js to handle many concurrent operations in a single thread. It processes events and callbacks from the queue, executing asynchronous code when the stack is empty. Enables non-blocking I/O.',
        category: 'nodejs',
        lessonUrl: 'https://nodejs.dev/en/learn/the-nodejs-event-loop/'
      },
      {
        id: 'nodejs-3',
        question: 'Difference between CommonJS (require()) and ES Modules (import). What is ESM?',
        answer: 'CommonJS uses require() and module.exports, loads modules synchronously, and is traditional in Node.js. ES Modules use import/export, support static analysis, and are natively supported in modern Node.js (ESM). ESM is the new standard for modular JavaScript.',
        category: 'nodejs',
        lessonUrl: 'https://nodejs.org/api/esm.html'
      },
      {
        id: 'nodejs-4',
        question: 'How does Node.js handle multithreading and when should you use Worker Threads?',
        answer: 'Node.js is single-threaded by default, but you can use Worker Threads for CPU-intensive tasks. Worker Threads run JavaScript in parallel, useful for heavy computations. For I/O, Node relies on async non-blocking operations.',
        category: 'nodejs',
        lessonUrl: 'https://nodejs.org/api/worker_threads.html'
      },
      {
        id: 'nodejs-5',
        question: 'What are Streams in Node.js and when should you use them?',
        answer: 'Streams are objects for reading or writing data piece by piece (chunks) instead of all at once. Use them for large files, network communication, or when you want to process data efficiently and with low memory usage.',
        category: 'nodejs',
        lessonUrl: 'https://nodejs.dev/en/learn/nodejs-streams/'
      },
      // Intermediate
      {
        id: 'nodejs-6',
        question: 'How do you handle errors in asynchronous code (callbacks vs Promises vs async/await)?',
        answer: 'With callbacks, errors are passed as the first argument (err). Promises use .catch() for errors. async/await uses try/catch blocks. Promises and async/await make error handling cleaner and easier to read than callbacks.',
        category: 'nodejs',
        lessonUrl: 'https://nodejs.dev/en/learn/error-handling-in-nodejs/'
      },
      {
        id: 'nodejs-7',
        question: 'Difference between process.nextTick(), setImmediate(), and setTimeout().',
        answer: 'process.nextTick() schedules a callback to run after the current operation, before any I/O. setImmediate() runs after I/O events. setTimeout() runs after a minimum delay. They control timing and order of execution in the event loop.',
        category: 'nodejs',
        lessonUrl: 'https://nodejs.dev/en/learn/the-nodejs-event-loop/'
      },
      {
        id: 'nodejs-8',
        question: 'How do you secure a Node.js app against common attacks (SQL injection, XSS, CSRF)?',
        answer: 'Use parameterized queries to prevent SQL injection, sanitize user input and use Content Security Policy for XSS, and implement CSRF tokens for forms. Always validate and escape input, use HTTPS, and keep dependencies up to date.',
        category: 'nodejs',
        lessonUrl: 'https://owasp.org/www-project-nodejs/'
      },
      {
        id: 'nodejs-9',
        question: 'What are strategies for scaling Node.js apps? (cluster, load balancer)',
        answer: 'Use the cluster module to run multiple Node.js processes on different CPU cores. Use a load balancer (e.g., Nginx, HAProxy) to distribute traffic. Consider microservices, containerization, and horizontal scaling for large apps.',
        category: 'nodejs',
        lessonUrl: 'https://nodejs.dev/en/learn/scaling-nodejs-apps/'
      },
      {
        id: 'nodejs-10',
        question: 'How does stream.pipe() work and what is it used for?',
        answer: 'stream.pipe() connects a readable stream to a writable stream, automatically handling data flow and backpressure. It is used for efficient data transfer, like copying files or sending HTTP responses.',
        category: 'nodejs',
        lessonUrl: 'https://nodejs.dev/en/learn/nodejs-streams/'
      },
      {
        id: 'nodejs-11',
        question: 'Difference between writeFileSync, writeFile, and createWriteStream in Node.js.',
        answer: 'writeFileSync writes a file synchronously (blocking). writeFile writes asynchronously (non-blocking). createWriteStream writes data in chunks, ideal for large files or streaming data. Prefer async methods for performance.',
        category: 'nodejs',
        lessonUrl: 'https://nodejs.dev/en/learn/writing-files-with-nodejs/'
      },
      {
        id: 'nodejs-12',
        question: 'What are iterators and Readable streams in Node.js and what are they used for?',
        answer: 'Iterators provide a way to access data one item at a time using next(). Readable streams are used to read data in chunks (e.g., from files, network). You can use for-await-of to iterate over async data from a Readable stream, making it easy to process large or streaming data efficiently.',
        category: 'nodejs',
        lessonUrl: 'https://nodejs.org/api/stream.html#readable-streams'
      },
      {
        id: 'nodejs-13',
        question: 'What is backpressure in Node.js streams and how is it handled?',
        answer: 'Backpressure occurs when a writable stream cannot process data as fast as a readable stream provides it. Node.js handles backpressure by pausing the readable stream until the writable stream drains, using methods like stream.pause(), stream.resume(), and the drain event. This prevents memory overload and ensures efficient data flow.',
        category: 'nodejs',
        lessonUrl: 'https://nodejs.org/api/stream.html#what-is-backpressure'
      },
    ],
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
    {
      id: 'sec-10',
      question: 'TCP vs UDP',
      answer: 'TCP (Transmission Control Protocol) is connection-oriented, guarantees delivery, maintains order, and includes error checking (reliable but slower). UDP (User Datagram Protocol) is connectionless, no delivery guarantee, no ordering, minimal overhead (faster but unreliable). Use TCP for web, email, file transfer. Use UDP for streaming, gaming, DNS.',
      category: 'security',
      lessonUrl: 'https://www.cloudflare.com/learning/ddos/glossary/tcp-ip/'
    },
    {
      id: 'sec-11',
      question: 'What is authentication?',
      answer: 'Authentication is the process of verifying who you are, typically using credentials like a username and password.',
      category: 'security'
    },
    {
      id: 'sec-12',
      question: 'What is authorization?',
      answer: 'Authorization is the process of determining what actions you are allowed to perform after authentication.',
      category: 'security'
    },
    {
      id: 'sec-13',
      question: 'How does OAuth work?',
      answer: 'OAuth is an open standard for access delegation. It allows a user to grant a third-party application limited access to their resources without sharing credentials. The user authenticates with the service provider, authorizes the app, and the app receives an access token to access resources on the user’s behalf.',
      category: 'networking',
      lessonUrl: 'https://oauth.net/2/'
    },
  ],
  docker: [
    {
      id: 'docker-1',
      question: 'What is the difference between a Docker container and an image?',
      answer: 'An image is a read-only template with instructions for creating a container (includes app code, libraries, dependencies). A container is a running instance of an image—an isolated environment where the application runs. You can have many containers from the same image.',
      category: 'docker',
      lessonUrl: 'https://docs.docker.com/get-started/overview/'
    },
    {
      id: 'docker-2',
      question: 'What is Docker and why is it useful?',
      answer: 'Docker is a platform for developing, shipping, and running applications in lightweight, portable containers. It simplifies deployment, ensures consistency across environments, and isolates apps for security and scalability.',
      category: 'docker',
      lessonUrl: 'https://www.docker.com/resources/what-container/'
    },
    {
      id: 'docker-3',
      question: 'What is a Dockerfile?',
      answer: 'A Dockerfile is a text file with instructions for building a Docker image. It defines the base image, environment variables, files to copy, commands to run, and more. Docker reads the Dockerfile to create a custom image.',
      category: 'docker',
      lessonUrl: 'https://docs.docker.com/engine/reference/builder/'
    },
    {
      id: 'docker-4',
      question: 'How do you share data between a Docker container and the host?',
      answer: 'You can use volumes or bind mounts to share data. Volumes are managed by Docker and persist data outside the container lifecycle. Bind mounts map a host directory or file directly into the container. Both allow data to be shared and persisted.',
      category: 'docker',
      lessonUrl: 'https://docs.docker.com/storage/volumes/'
    },
    {
      id: 'docker-5',
      question: 'What is Docker Compose?',
      answer: 'Docker Compose is a tool for defining and running multi-container Docker applications. You use a YAML file (docker-compose.yml) to configure services, networks, and volumes, then start everything with a single command. It simplifies managing complex setups for development and testing.',
      category: 'docker',
      lessonUrl: 'https://docs.docker.com/compose/'
    },
    {
      id: 'docker-6',
      question: 'What is Helm in the context of containers and Kubernetes?',
      answer: 'Helm is a package manager for Kubernetes. It helps you define, install, and upgrade complex Kubernetes applications using reusable templates called charts. Helm simplifies deployment and management of containerized applications.',
      category: 'docker',
      lessonUrl: 'https://helm.sh/docs/intro/using_helm/'
    },
    {
      id: 'docker-7',
      question: 'What is HPA (Horizontal Pod Autoscaler) in Kubernetes?',
      answer: 'HPA automatically scales the number of pods in a Kubernetes deployment based on observed CPU utilization or other metrics. It helps applications handle variable loads efficiently by adding or removing pods as needed.',
      category: 'docker',
      lessonUrl: 'https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/'
    },
    {
      id: 'docker-8',
      question: 'What are Secrets and ConfigMaps used for in Kubernetes?',
      answer: 'Secrets are used to store sensitive data (like passwords, API keys) securely in Kubernetes. ConfigMaps store non-sensitive configuration data (like environment variables, config files). Both allow you to decouple configuration and secrets from container images.',
      category: 'docker',
      lessonUrl: 'https://kubernetes.io/docs/concepts/configuration/secret/'
    },
  ],
  javascriptInterview: [
    {
      id: 'js-0',
      question: 'var vs let vs const',
      answer: 'var is function-scoped { works within the brackets }, hoisted with undefined initialization, and can be redeclared.\n let and const are block-scoped, exist in the temporal dead zone until declaration, and cannot be redeclared. const cannot be reassigned after initialization.',
      category: 'javascriptInterview',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var'
    },
    {
      id: 'js-1',
      question: 'Closure',
      answer: 'function defined in another function, the inner function has access to the variables and scope of the outer function. Allow for **private** variables and state maintenance.',
      category: 'javascriptInterview',
      lessonUrl: 'https://javascript.info/closure'
    },
    {
      id: 'js-2',
      question: 'Event delegation',
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
      question: 'Hoisting',
      answer: 'behavior of moving declarations to the top of their scope before code execution. Function declarations are fully hoisted, while var declarations are hoisted but not initialized (undefined). let/const are hoisted but not initialized (temporal dead zone).',
      category: 'javascriptInterview',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Glossary/Hoisting'
    },
    {
      id: 'js-6',
      question: 'Promise.all() vs Promise.race()',
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
    {
      id: 'js-13',
      question: 'Promise.all([fetch, fetch, fetch]) vs await fetch; await fetch; await fetch;',
      answer: 'Promise.all([fetch1, fetch2, fetch3]) runs all fetch requests in parallel and waits for all to finish, making it much faster for independent requests. Using await fetch1; await fetch2; await fetch3; runs them sequentially—each starts after the previous finishes, which is slower but can be useful if requests depend on each other.',
      category: 'javascriptInterview',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all'
    },
    {
      id: 'js-14',
      question: 'What will be logged by this code?\n for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}\nconsole.log(\'done\');',
      answer: 'Output:\n1. done\n2. 3\n3. 3\n4. 3\n\nExplanation: The console.log(\'done\') runs first because setTimeout is asynchronous. All setTimeout callbacks log 3 because var is function-scoped, so after the loop, i === 3. Each callback refers to the same i.',
      category: 'javascriptInterview',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var'
    },
    {
      id: 'js-15',
      question: 'What does Promise.any() do in JavaScript?',
      answer: 'Promise.any() returns a promise that fulfills as soon as any of the input promises fulfills, with the value of that promise. If all input promises are rejected, it rejects with an AggregateError. Useful when you want the first successful result, not just the first settled one.',
      category: 'javascriptInterview',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any'
    },
    {
      id: 'js-16',
      question: 'What are asynchronous iterators in JavaScript?',
      answer: 'Asynchronous iterators allow you to iterate over data sources that deliver data asynchronously (e.g., streams, network). They use the Symbol.asyncIterator protocol and for-await-of loops. Each iteration returns a promise that resolves to the next value.',
      category: 'javascriptInterview',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of'
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
     {
      id: 'dom-7',
      question: 'Mutation Observer',
      answer: 'A Mutation Observer is a JavaScript API that lets you watch for changes (mutations) in the DOM tree, such as when elements are added, removed, or attributes/text change. It is more efficient than polling and is used for tasks like reacting to dynamic content, building custom components, or tracking changes in web apps.',
      category: 'dom',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver'
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
    {
      id: 'react-13',
      question: 'How do you configure server-side rendering (SSR) in a React app?',
      answer: 'To configure SSR, use a framework like Next.js or set up a Node.js server (e.g., with Express) that renders React components to HTML using ReactDOMServer. Send the HTML to the client, then hydrate with React on the client side. Configure routing and data fetching to work on both server and client.',
      category: 'react',
      lessonUrl: 'https://nextjs.org/docs/getting-started'
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
    {
      id: 'ts-13',
      question: 'What do Pick, Extract, and Record do in TypeScript?',
      answer: 'Pick<Type, Keys> creates a type with only the selected properties from Type. Extract<Type, Union> creates a type with members of Type that are assignable to Union. Record<Keys, Type> creates an object type with Keys as properties and Type as values. All are utility types for advanced type manipulation.',
      category: 'typescript',
      lessonUrl: 'https://www.typescriptlang.org/docs/handbook/utility-types.html'
    },
    {
      id: 'ts-14',
      question: 'Give an example of a conditional type in TypeScript and how to use it.',
      answer: 'A conditional type uses the syntax: T extends U ? X : Y. Example: type IsString<T> = T extends string ? true : false;\nUsage: IsString<string> // true, IsString<number> // false. Conditional types let you create types based on logic.',
      category: 'typescript',
      lessonUrl: 'https://www.typescriptlang.org/docs/handbook/2/conditional-types.html'
    },
  ],
  systemDesign: [
        {
          id: 'sd-transactional-outbox',
          question: 'What is the Transactional Outbox pattern?',
          answer: 'The Transactional Outbox pattern is a technique for reliably publishing events/messages from a service that uses a database. Instead of sending messages directly, the service writes them to an outbox table in the same database as part of the main transaction. A separate process then reads the outbox and publishes the messages. This ensures consistency between the database state and published events, avoiding lost or duplicated messages.',
          category: 'systemDesign',
          lessonUrl: 'https://microservices.io/patterns/data/transactional-outbox.html'
        },
        {
          id: 'sd-adr',
          question: 'What are Architecture Decision Records (ADR)?',
          answer: 'Architecture Decision Records (ADR) are short documents that capture important architectural decisions made during a project. They describe the context, decision, and consequences, helping teams track and communicate why certain choices were made. ADRs improve transparency and knowledge sharing in software projects.',
          category: 'systemDesign',
          lessonUrl: 'https://adr.github.io/'
        },
    {
      id: 'sd-hexagonal',
      question: 'What is Hexagonal Architecture (Clean Architecture)?',
      answer: 'Hexagonal Architecture, also known as Clean Architecture or Ports and Adapters, is a software design pattern that separates the core business logic from external concerns (like databases, UI, APIs). The core domain is at the center, surrounded by interfaces (ports) and adapters for communication. This improves testability, flexibility, and maintainability.',
      category: 'systemDesign',
      lessonUrl: 'https://martinfowler.com/bliki/HexagonalArchitecture.html'
    },
    {
      id: 'sd-ddd-1',
      question: 'What is Domain-Driven Design (DDD) and why is it important?',
      answer: 'Domain-Driven Design (DDD) is an approach to software development that emphasizes modeling software based on the real-world domain and business logic. It helps teams create a shared understanding, improves code maintainability, and aligns technical solutions with business needs.',
      category: 'systemDesign',
      lessonUrl: 'https://martinfowler.com/bliki/DomainDrivenDesign.html'
    },
    {
      id: 'sd-ddd-2',
      question: 'What are the main building blocks of DDD?',
      answer: 'The main building blocks of DDD are: Entity (has identity), Value Object (no identity, immutable), Aggregate (cluster of domain objects), Repository (access to aggregates), Service (domain logic not naturally part of an entity or value object), and Factory (creates complex objects).',
      category: 'systemDesign',
      lessonUrl: 'https://dddcommunity.org/learning-ddd/what_is_ddd/'
    },
    {
      id: 'sd-ddd-3',
      question: 'What is a bounded context in DDD?',
      answer: 'A bounded context is a logical boundary within which a particular domain model is defined and applicable. It helps avoid ambiguity and ensures that terms and concepts are consistent within that context. Bounded contexts are key for scaling and integrating large systems.',
      category: 'systemDesign',
      lessonUrl: 'https://martinfowler.com/bliki/BoundedContext.html'
    },
    {
      id: 'sd-ddd-4',
      question: 'How do you integrate multiple bounded contexts in DDD?',
      answer: 'Bounded contexts can be integrated using patterns like shared kernel, customer-supplier, conformist, or anti-corruption layer. The goal is to manage dependencies and translations between models, ensuring each context remains independent and consistent.',
      category: 'systemDesign',
      lessonUrl: 'https://martinfowler.com/bliki/BoundedContext.html'
    },
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
      id: 'db-index-basics',
      question: 'What exactly does index do?',
      answer: 'When you create an index, the database builds a structure (like a B-tree or hash) that stores selected column values and pointers to rows. When you run a query with a condition (e.g., WHERE name = "Anna"), the engine checks for an index. If it exists, the database searches the index instead of the whole table and quickly finds pointers to matching rows. This makes SELECT much faster because it avoids scanning every row.',
      category: 'databases',
      lessonUrl: 'https://use-the-index-luke.com/'
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
    {
      id: 'db-17',
      question: 'What is the difference between a sequential scan (seq scan) and an index scan in SQL databases?',
      answer: 'A sequential scan (seq scan) reads every row in the table to find matching records. An index scan uses an index to quickly locate matching rows, reading only relevant parts of the table. Index scans are faster for selective queries, while seq scans are used when most rows are needed or no suitable index exists.',
      category: 'databases',
      lessonUrl: 'https://www.postgresql.org/docs/current/indexes-index-only-scans.html'
    },
    {
      id: 'db-18',
      question: 'What are tablespaces in SQL databases?',
      answer: 'Tablespaces are storage locations on disk where database objects (tables, indexes) are stored. They allow database administrators to control the physical placement of data, optimize performance, and manage storage across multiple disks.',
      category: 'databases',
      lessonUrl: 'https://www.postgresql.org/docs/current/manage-ag-tablespaces.html'
    },
    {
      id: 'db-19',
      question: 'What is a window function and what are grouping sets in SQL?',
      answer: 'A window function performs calculations across a set of table rows related to the current row (e.g., running totals, rankings) without collapsing rows. GROUPING SETS allow you to group by multiple combinations in a single query, producing subtotals and grand totals. Both are advanced SQL features for analytics.',
      category: 'databases',
      lessonUrl: 'https://www.postgresql.org/docs/current/tutorial-window.html'
    },
    {
      id: 'db-20',
      question: 'What are transaction isolation levels in SQL and what are they used for?',
      answer: 'Transaction isolation levels define how and when changes made by one transaction become visible to others. They control concurrency issues like dirty reads, non-repeatable reads, and phantom reads. Common levels: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE.',
      category: 'databases',
      lessonUrl: 'https://www.postgresql.org/docs/current/transaction-iso.html'
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
    {
      id: 'net-4',
      question: 'Lifecycle of an HTTP request',
      answer: '1. Client (browser/app) creates and sends an HTTP request to a server (URL, method, headers, body).\n 2. Request travels through the network (DNS resolution, TCP handshake, optional TLS handshake for HTTPS).\n 3. Server receives and processes the request (routing, authentication, business logic, database access).\n 4.Server generates and sends an HTTP response (status code, headers, body). \n5. Client receives and processes the response (renders page, updates UI, handles errors).',
      category: 'networking',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview'
    },
    // HTTP Cache Headers flashcards
    {
      id: 'net-5',
      question: 'What are HTTP cache headers and why are they important?',
      answer: 'HTTP cache headers (like Cache-Control, Expires, ETag, Last-Modified) control how browsers and proxies cache responses. They improve performance, reduce server load, and enable offline access by reusing cached resources.',
      category: 'networking',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching'
    },
    {
      id: 'net-6',
      question: 'How does the Cache-Control header work?',
      answer: 'Cache-Control is the main HTTP header for controlling caching. It can specify directives like public, private, no-cache, no-store, max-age, must-revalidate. For example, max-age=3600 means the response can be cached for 1 hour.',
      category: 'networking',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control'
    },
    {
      id: 'net-7',
      question: 'What is the difference between ETag and Last-Modified headers?',
      answer: 'ETag is a unique identifier for a specific version of a resource. Last-Modified is a timestamp of the last change. Both are used for validation: the browser sends them in conditional requests to check if the resource has changed.',
      category: 'networking',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag'
    },
    {
      id: 'net-8',
      question: 'How does browser cache validation work with ETag or Last-Modified?',
      answer: 'When a cached resource expires, the browser sends a conditional request with If-None-Match (ETag) or If-Modified-Since (Last-Modified). If the resource is unchanged, the server responds with 304 Not Modified, saving bandwidth.',
      category: 'networking',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#validation'
    },
    {
      id: 'net-9',
      question: 'What is the difference between strong and weak validation in HTTP caching?',
      answer: 'Strong validation (ETag, Last-Modified) ensures the cached resource is byte-for-byte identical. Weak validation (weak ETag, heuristics) allows for minor changes. Strong validation is more reliable for cache consistency.',
      category: 'networking',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#validation'
    },
    {
      id: 'net-10',
      question: 'What does the Expires header do?',
      answer: 'The Expires header specifies a fixed date/time after which the response is considered stale. It is an older way to control caching and is less flexible than Cache-Control, but still supported for backward compatibility.',
      category: 'networking',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expires'
    },
    {
      id: 'net-11',
      question: 'What is the difference between FIFO and LRU cache eviction policies?',
      answer: 'FIFO (First-In, First-Out) removes the oldest cached item (the one added first) when the cache is full, regardless of how often it is used. LRU (Least Recently Used) removes the item that has not been used for the longest time, tracking recent usage. LRU usually matches real-world access patterns better than FIFO.',
      category: 'networking',
      lessonUrl: 'https://en.wikipedia.org/wiki/Cache_replacement_policies'
    },
    {
      id: 'net-12',
      question: 'How is a CDN (Content Delivery Network) used in web applications?',
      answer: 'A CDN is a network of distributed servers that cache and deliver static content (like images, CSS, JS) closer to users. It reduces latency, speeds up load times, and offloads traffic from the origin server. CDNs are used by setting up DNS or URLs to point to CDN endpoints, which then fetch and cache content from the origin.',
      category: 'networking',
      lessonUrl: 'https://developer.mozilla.org/en-US/docs/Glossary/CDN'
    },
  ],
  ux: [
    {
      id: 'ux-1',
      question: 'Accessibility World Wide Web Consortium (W3C) standards and best practices',
      answer: 'WCAG guidelines (Web Content Accessibility Guidelines) ensure content is perceivable, operable, understandable, and robust\n Semantic HTML (buttons, links, headings)\n ARIA attributes (aria-label, aria-hidden, role)\n Color contrast ratios must meet WCAG standards (4.5:1 for normal text)\n Keyboard navigation',
      category: 'ux',
      lessonUrl: 'https://web.dev/accessibility'
    },
    {
      id: 'ux-2',
      question: 'Core Web Vitals and performance metrics',
      answer: '• Largest Contentful Paint (LCP): time when largest visible content renders (target: <2.5s)\n• First Input Delay (FID): latency from user input to response (target: <100ms, replaced by INP)\n• Cumulative Layout Shift (CLS): visual stability during load (target: <0.1)\n• Interaction to Next Paint (INP): responsiveness of interactions (replaces FID)',
      category: 'ux',
      lessonUrl: 'https://web.dev/vitals'    
    },
    {
      id: 'js-throttle-debounce',
      question: 'Throttling vs Debouncing (network requests)',
      answer: 'Throttling limits the number of times a function (e.g., network request) can be called over time—calls are spaced out at regular intervals. Debouncing delays the function call until a certain time has passed since the last attempt—only the final call is executed after the pause. Throttling is useful for rate-limiting (e.g., scroll, resize events), debouncing for actions like search input or auto-save.',
      category: 'javascriptInterview',
      lessonUrl: 'https://css-tricks.com/debouncing-throttling-explained-examples/'
    },
    {
      id: 'ux-3',
      question: 'Mobile-first design approach',
      answer: 'Mobile-first means designing for the smallest screens first and then enhancing the layout with @media (min-width) for larger viewports. It focuses on essential content, improves mobile performance, and keeps the base CSS simple.',
      category: 'ux',
      lessonUrl: 'https://web.dev/responsive-web-design-basics'
    },
    {
      id: 'ux-3b',
      question: 'Responsive design implementation details',
      answer: 'Responsive design uses fluid units (%, rem/em), flexible images (max-width: 100%), and media queries for breakpoints like 480 / 768 / 1024 / 1440. It requires proper touch targets, a correct viewport meta tag, and real-device testing to ensure consistent, accessible UI.',
      category: 'ux',
      lessonUrl: 'https://web.dev/responsive-web-design-basics'
    },
    {
      id: 'ux-4',
      question: 'Optimize a slow website',
      answer: '• analyze: WebPageTest, Chrome DevTools Network\n • code splitting: split JavaScript bundles, lazy load routes and components\n• minification & compression: minify CSS/JS\n • image optimization: use modern formats (WebP), responsive images with srcset, lazy load with loading="lazy"\n • caching: browser cache headers, service workers for offline, CDN for static assets\n • reduce main thread work: move heavy computation to Web Workers\n • optimize fonts: system or variable fonts ',
      category: 'ux',
      lessonUrl: 'https://web.dev/performance'
    },
    {
      id: 'ux-5',
      question: 'user testing methods',
      answer: '• observe real users completing tasks to identify pain points\n • A/B testing: compare two versions to measure which performs better\n • user interviews \n• surveys: gather data from many users \n• heatmaps & session recordings: how users interact with site\n• analytics: measure user behavior, conversion rates, drop-off points\n• card sorting: organize information hierarchy and navigation structure',
      category: 'ux',
      lessonUrl: 'https://www.nngroup.com/articles/ux-research-methods/'
    },
    {
      id: 'ux-6',
      question: 'Dark mode implementation and why it matters',
      answer: ' • reduces eye strain in low-light environments and saves battery on OLED screens\n  • use CSS \n • ensure sufficient contrast: light text on dark backgrounds\n • use CSS custom properties (variables) for theme colors to switch easily\n • respect user preference\n • test both light and dark modes thoroughly to ensure readability and usability',
      category: 'ux',
      lessonUrl: 'https://web.dev/prefers-color-scheme/'
    },
    {
      id: 'ux-7',
      question: 'What are 5 key steps to optimize a website for SEO?',
      answer: '1. Use semantic HTML tags (title, headings, alt attributes for images). 2. Optimize page speed (minify CSS/JS, compress images, use caching). 3. Ensure mobile-friendliness and responsive design. 4. Create high-quality, keyword-rich content and meta descriptions. 5. Build internal/external links and submit sitemaps to search engines.',
      category: 'ux',
      lessonUrl: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide'
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
