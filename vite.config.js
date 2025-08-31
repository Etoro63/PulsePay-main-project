import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import polyfillNode from "rollup-plugin-polyfill-node";


// https://vite.dev/config/
// Polyfill Node.js globals and modules for browser
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

export default defineConfig({
  plugins: [react(), polyfillNode()],

  build: {
    rollupOptions: {
      plugins: [polyfillNode()],
    },
  },

  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
        NodeModulesPolyfillPlugin()
      ]
    }
    
  },

  resolve: {
    alias: {
      buffer: 'buffer',
      stream: 'stream-browserify',
      process: 'process/browser',
      util: "util/",
       events: "events/",
      path: "path-browserify",
      qs: "qs",
      punycode: "punycode/",
      url: "url/",
      "rollup-plugin-node-polyfills/polyfills/util": "util/",
      "rollup-plugin-node-polyfills/polyfills/events": "events/",
      "rollup-plugin-node-polyfills/polyfills/stream": "stream-browserify",
      "rollup-plugin-node-polyfills/polyfills/path": "path-browserify",
      "rollup-plugin-node-polyfills/polyfills/qs": "qs",
      "rollup-plugin-node-polyfills/polyfills/punycode": "punycode/",
      "rollup-plugin-node-polyfills/polyfills/url": "url/",
      
    },
  },
});
