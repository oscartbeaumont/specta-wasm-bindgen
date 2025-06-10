# Specta Wasm Bindgen

A prototype of a wasm bindgen wrapper with Specta powered types

## Usage

```
wasm-pack build --target nodejs && node index.js
cat bindings.ts
```

## Required

 - [ ] Build `specta_wasm_bindgen::expose` macro
    - [ ] Boilerplate generation
    - [ ] Ctor collection
 - [ ] Better abstraction around actually producing the Typescript file. Using wasm export or unit test or another build???
 - [ ] more stuff...

## Issues

 - [ ] Specta doesn't support collecting function information from `impl` blocks.
