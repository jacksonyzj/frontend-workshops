# Frontend Workshops

Demos and slides from **Intro to Front-End Development: From HTML to AI**, a workshop by GDG McGill × CodeJam McGill.

Slides: [`slides/intro-to-front-end.pdf`](slides/intro-to-front-end.pdf)

## Demos

| Folder | What it shows | Run it |
|---|---|---|
| [`1-html-css-js`](1-html-css-js) | One page in plain HTML, CSS and JavaScript | Open `index.html` in your browser |
| [`2-react-vite`](2-react-vite) | The same page in React. Turn JavaScript off in DevTools and it goes blank | `npm install && npm run dev`, then open http://localhost:5173 |
| [`4-playwright-testing`](4-playwright-testing) | A team builder app with a hidden bug. Ask Claude Code to set up Playwright and test it | `npm install && npm run dev`, then open http://localhost:5174 |

The live coding demo (McGill Apartment Finder: Next.js, Supabase and a DeepSeek agent) was built on stage with Claude Code.

## Try the Playwright demo yourself

```sh
cd 4-playwright-testing
npm install
npm run dev
```

Then, in Claude Code in that folder:

1. "Set up Playwright in this project."
2. "Write tests for everything a user can do in this app, then run them."
3. "One test failed. Find out why and fix the app, not the test."
