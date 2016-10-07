# Mithril and Flux

No JSX, Babel, TypeScript or whatever. Just JavaScript with Commonjs modules.

**BEHOLD!!!!!!**
```
"dependencies": {
  "mithril": "latest"
},
"devDependencies": {}
```

The only thing you need to add is CommonJS bundling.

Build with Browserify:  
`browserify ./src/main.js -o ./public/dist/main.bundle.js`

Build with Webpack:  
`webpack ./src/main.js ./public/dist/main.bundle.js`

By default, the package.json will use 
webpack for `npm run build` and `npm run watch`.
If you haven't already, `npm install -g webpack` and you're 
good to go.

Then open up `public/index.html`

### How do I [something]?

Check out the wiki to this repo!

### Why Mithril and not React?

1. Mithril's redrawing model is very natural and simple to understand. 
Redrawing computation begins when an attached handler is called, 
(think `onclick=doSomething()`)
and completes at the end of that stack. No mucking about with
subscribing to your stores for changes. 

2. Mithril is a very tiny dependency. The api is very thin and easy
to grasp. It also includes basic routing and a nice xhr wrapper with
`m.request(..)`.


### Tabs?

Easy to use a 'soften' script to convert tabs to spaces, but going
the other way is buggy. So this boilerplate starts with tabs because
it is easiest to accommodate either preference this way.


### Constants?

Because of the disconnect between the actions in your controllers
and the stores they act on, the use of constants ensures typos do
not error silently. The dispatcher will throw a TypeError if 
the `action.type` is not a string.

