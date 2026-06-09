import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...nextCoreWebVitals,
  {
    ignores: [".next/**", "node_modules/**"]
  },
  {
    rules: {
      // The portal-mount pattern (set state in effect after mount) is the
      // intentional SSR-safe approach; keep it visible but non-blocking.
      "react-hooks/set-state-in-effect": "warn"
    }
  }
];
