export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: FlashcardCategory;
}

export type FlashcardCategory = 'security' | 'javascriptInterview' | 'css' | 'dom' | 'react';

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
];

export const flashcardsData: Record<FlashcardCategory, Flashcard[]> = {
  security: [
    {
      id: 'sec-1',
      question: 'What is XSS (Cross-Site Scripting)?',
      answer: 'XSS is a security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. It occurs when an application includes untrusted data in a web page without proper validation or escaping.',
      category: 'security',
    },
    {
      id: 'sec-2',
      question: 'What is CSRF (Cross-Site Request Forgery)?',
      answer: 'CSRF is an attack that forces authenticated users to submit a request to a web application against which they are currently authenticated. Attackers exploit the trust that a site has in the user\'s browser.',
      category: 'security',
    },
    {
      id: 'sec-3',
      question: 'What is the Same-Origin Policy?',
      answer: 'The Same-Origin Policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with resources from another origin. Two URLs have the same origin if protocol, port, and host are the same.',
      category: 'security',
    },
    {
      id: 'sec-4',
      question: 'What is CORS and why is it needed?',
      answer: 'CORS (Cross-Origin Resource Sharing) is a mechanism that allows restricted resources on a web page to be requested from another domain. It relaxes the Same-Origin Policy in a controlled manner using HTTP headers.',
      category: 'security',
    },
    {
      id: 'sec-5',
      question: 'What is Content Security Policy (CSP)?',
      answer: 'CSP is a security layer that helps detect and mitigate certain types of attacks, including XSS and data injection attacks. It allows you to specify which dynamic resources are allowed to load via HTTP headers.',
      category: 'security',
    },
    {
      id: 'sec-6',
      question: 'What is JWT and how does it work?',
      answer: 'JWT (JSON Web Token) is a compact, URL-safe means of representing claims between two parties. It consists of three parts: Header, Payload, and Signature. Used for authentication and information exchange.',
      category: 'security',
    },
  ],
  javascriptInterview: [
    {
      id: 'js-1',
      question: 'What is a closure in JavaScript?',
      answer: 'A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. Closures are created every time a function is created.',
      category: 'javascriptInterview',
    },
    {
      id: 'js-2',
      question: 'Explain event delegation in JavaScript',
      answer: 'Event delegation is a technique where you add a single event listener to a parent element instead of adding listeners to multiple child elements. It leverages event bubbling to handle events at a higher level in the DOM.',
      category: 'javascriptInterview',
    },
    {
      id: 'js-3',
      question: 'What is the difference between == and ===?',
      answer: '== (loose equality) performs type coercion before comparison, while === (strict equality) compares both value and type without coercion. Use === to avoid unexpected type conversions.',
      category: 'javascriptInterview',
    },
    {
      id: 'js-4',
      question: 'What is the event loop in JavaScript?',
      answer: 'The event loop is a mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded. It continuously checks the call stack and task queue, executing callbacks when the stack is empty.',
      category: 'javascriptInterview',
    },
    {
      id: 'js-5',
      question: 'What is hoisting in JavaScript?',
      answer: 'Hoisting is JavaScript\'s behavior of moving declarations to the top of their scope before code execution. Function declarations are fully hoisted, while var declarations are hoisted but not initialized (undefined). let/const are hoisted but not initialized (temporal dead zone).',
      category: 'javascriptInterview',
    },
    {
      id: 'js-6',
      question: 'Explain Promise.all() vs Promise.race()',
      answer: 'Promise.all() waits for all promises to resolve (or any to reject) and returns an array of results. Promise.race() returns as soon as the first promise settles (resolves or rejects), with that promise\'s value.',
      category: 'javascriptInterview',
    },
    {
      id: 'js-7',
      question: 'What is the difference between null and undefined?',
      answer: 'undefined means a variable has been declared but not assigned a value. null is an assignment value representing no value or empty. undefined is a type, while null is an object.',
      category: 'javascriptInterview',
    },
    {
      id: 'js-8',
      question: 'What is debouncing and throttling?',
      answer: 'Debouncing delays function execution until after a certain time has passed since the last invocation. Throttling limits function execution to once per specified time period. Both optimize performance for frequent events.',
      category: 'javascriptInterview',
    },
  ],
  css: [
    {
      id: 'css-1',
      question: 'What is the box model in CSS?',
      answer: 'The CSS box model describes the rectangular boxes generated for elements. It consists of content, padding, border, and margin. The box-sizing property determines whether padding/border are included in width/height.',
      category: 'css',
    },
    {
      id: 'css-2',
      question: 'Explain Flexbox vs Grid',
      answer: 'Flexbox is one-dimensional (row or column) and ideal for component layouts. Grid is two-dimensional (rows and columns) and better for page layouts. Flexbox focuses on content flow, Grid on placement.',
      category: 'css',
    },
    {
      id: 'css-3',
      question: 'What is CSS specificity?',
      answer: 'Specificity determines which CSS rule applies when multiple rules target the same element. Calculated as: inline styles (1000), IDs (100), classes/attributes/pseudo-classes (10), elements/pseudo-elements (1).',
      category: 'css',
    },
    {
      id: 'css-4',
      question: 'What are CSS custom properties (variables)?',
      answer: 'CSS variables (--variable-name) are entities defined by CSS authors that contain specific values to be reused. They are scoped to elements and inherited by children. Access via var(--variable-name).',
      category: 'css',
    },
    {
      id: 'css-5',
      question: 'What is the difference between display: none and visibility: hidden?',
      answer: 'display: none removes the element from the document flow (no space). visibility: hidden hides the element but preserves its space. display: none affects layout, visibility: hidden does not.',
      category: 'css',
    },
    {
      id: 'css-6',
      question: 'What is a CSS preprocessor?',
      answer: 'CSS preprocessors (Sass, Less, Stylus) extend CSS with features like variables, nesting, mixins, and functions. They compile to standard CSS. Benefits include better organization, reusability, and maintainability.',
      category: 'css',
    },
  ],
  dom: [
    {
      id: 'dom-1',
      question: 'What is the DOM?',
      answer: 'The Document Object Model is a programming interface for HTML/XML documents. It represents the page structure as a tree of objects that can be manipulated with JavaScript, allowing dynamic updates to content and structure.',
      category: 'dom',
    },
    {
      id: 'dom-2',
      question: 'What is event bubbling and capturing?',
      answer: 'Event bubbling: events propagate from target element up to root. Event capturing: events propagate from root down to target. Use addEventListener with third parameter (true for capture, false for bubble).',
      category: 'dom',
    },
    {
      id: 'dom-3',
      question: 'What is the difference between innerHTML and textContent?',
      answer: 'innerHTML gets/sets HTML markup including tags. textContent gets/sets only text content, ignoring HTML tags. textContent is faster and safer (no XSS risk), innerHTML parses HTML.',
      category: 'dom',
    },
    {
      id: 'dom-4',
      question: 'What is localStorage vs sessionStorage?',
      answer: 'Both store key-value pairs in the browser. localStorage persists until explicitly deleted. sessionStorage clears when the page session ends (tab/window closes). Both have ~5-10MB limit and are synchronous.',
      category: 'dom',
    },
    {
      id: 'dom-5',
      question: 'What is the Intersection Observer API?',
      answer: 'The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor or viewport. Used for lazy loading, infinite scroll, and visibility tracking.',
      category: 'dom',
    },
    {
      id: 'dom-6',
      question: 'What is requestAnimationFrame?',
      answer: 'requestAnimationFrame tells the browser to perform an animation and requests that the browser call a specified function before the next repaint. It optimizes animations to run at ~60fps and pauses when tab is inactive.',
      category: 'dom',
    },
  ],
  react: [
    {
      id: 'react-1',
      question: 'What is the Virtual DOM?',
      answer: 'The Virtual DOM is a lightweight copy of the actual DOM. React uses it to determine what changed by comparing (diffing) the new Virtual DOM with the previous one, then efficiently updates only the changed parts in the real DOM.',
      category: 'react',
    },
    {
      id: 'react-2',
      question: 'What is the difference between props and state?',
      answer: 'Props are read-only data passed from parent to child components. State is local, mutable data managed within a component. Props flow down (unidirectional), state is internal. Changing state triggers re-renders.',
      category: 'react',
    },
    {
      id: 'react-3',
      question: 'What are React hooks and why were they introduced?',
      answer: 'Hooks are functions that let you use state and lifecycle features in functional components. Introduced to avoid class complexity, enable better code reuse, and make components easier to understand and test.',
      category: 'react',
    },
    {
      id: 'react-4',
      question: 'Explain useEffect dependencies array',
      answer: 'The dependencies array controls when useEffect runs. Empty [] runs once on mount. With dependencies, runs when those values change. No array means it runs on every render. Use to optimize and prevent infinite loops.',
      category: 'react',
    },
    {
      id: 'react-5',
      question: 'What is React Context API?',
      answer: 'Context provides a way to pass data through the component tree without manually passing props at every level. Used for global state like themes, user data, or language. Includes Provider and Consumer/useContext.',
      category: 'react',
    },
    {
      id: 'react-6',
      question: 'What is the difference between useMemo and useCallback?',
      answer: 'useMemo memoizes a computed value, returning the cached result if dependencies haven\'t changed. useCallback memoizes a function itself. Both optimize performance by preventing unnecessary recalculations/recreations.',
      category: 'react',
    },
    {
      id: 'react-7',
      question: 'What is React.memo and when should you use it?',
      answer: 'React.memo is a higher-order component that memoizes the rendered output of a component. It only re-renders if props change. Use for expensive renders or components that receive the same props frequently.',
      category: 'react',
    },
    {
      id: 'react-8',
      question: 'What is the key prop and why is it important?',
      answer: 'The key prop helps React identify which items in a list have changed, been added, or removed. Keys should be stable, unique, and not use array indices if the list can reorder. Critical for performance and preventing bugs.',
      category: 'react',
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
