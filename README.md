# TypeScript examples

Learning examples from the [Código Facilito TypeScript course](https://codigofacilito.com/cursos/typescript).
The original Spanish notes and folder names are preserved.

## Setup and checks

Use Node.js 22 or newer and npm.

```bash
npm ci
npm run typecheck
npm run build
npm run example -- "Primeros Pasos TS/primer_programa.ts"
npm run example -- "Tipos Avanzados Datos/tuplas.ts"
npm run example -- "Decoradores y Genéricos/decoradores_clase.ts"
```

Pass any `.ts` path in the repository to `npm run example` after building.
Compiled files are written to `dist/` and are not committed.
Each file is an independent module, so repeated class names do not collide.
Examples without console output still execute; inspect their source for the concept.

## Topics

- `Primeros Pasos TS/`: variables, primitive types and functions.
- `Tipos Avanzados Datos/`: unions, intersections, aliases, tuples and guards.
- `Programación Orientada Objetos/`: classes, inheritance, interfaces and namespaces.
- `Decoradores y Genéricos/`: legacy class and property decorator examples.

The decorator notes use `experimentalDecorators` and the legacy decorator
semantics, not the newer standard decorators. `useDefineForClassFields: false`
preserves the prototype-based property demonstration. Strict mode is not enabled
for these introductory notes; uninitialized declarations are teaching snippets,
not patterns recommended for application code.

See the [TypeScript documentation](https://www.typescriptlang.org/) for current
language guidance. No license has been added or changed.
