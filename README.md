# Flux and Mithril
... and TypeScript


Every file in **src/scripts/actions** should export a namespace consisting of
interfaces that describe actions, and an object whose values are functions
that return instances of those actions. This object is wrapped in
`dispatcher.wrapActions(...)` to reduce boilerplate.

The "type" of actions should be conventially namespaced with a forward slash.
All action interfaces in **TodoActions.ts** should therefore be prepended by
`TodoActons/`
