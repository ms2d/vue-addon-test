# Test of the Storybook Vue Addon

Minimal reproducible example, demonstrating the error detailed in [issue #60](https://github.com/tobiasdiez/storybook-vue-addon/issues/60#issuecomment-1704785521).

This project was created as follows:

```js
npm i -g n
n 16
npm init -y vite@latest storybook -- --template vue
cd storybook && npm install
```

Copy the following template to your `vite.config.js` file:

```js
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    base: './',
    open: true, // open in browser right away
    host: true, // listen on any IP that Docker wants to assign to it
  },
})
```

Install `Storybook`:

```js
npx storybook@latest init --builder=vite
```

Edit `.storybook/main.js`

```js
/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|vue)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', 'storybook-vue-addon'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
```

Create `src/stories/Button.stories.vue` and copy the following:

```jsx
<script setup>
import Button from './Button.vue'
</script>
<template>
  <Stories
    title="Stories in Vue format 😍"
    :component="Button"
  >
    <Story title="Primary">
      <Button
        background="#ff0"
        label="Button"
      />
    </Story>
    <Story title="Secondary">
      <Button
        background="#ff0"
        label="😄👍😍💯"
      />
    </Story>
    <Story title="Tertiary">
      <Button
        background="#ff0"
        label="📚📕📈🤓"
      />
    </Story>
  </Stories>
</template>

<docs lang="md">
import { Canvas } from '@storybook/blocks';

# Documentation

Everything in one place. Isn't it great?

You can render stories in the docs using the `<Canvas>` component.

<Canvas />
</docs>
```

Run storybook

```sh
npm run storybook
```

This produces the following error:

```sh
Error:   Failed to scan for dependencies from entries:
  /Users/adam/Desktop/storybook/src/stories/Button.stories.js
/Users/adam/Desktop/storybook/src/stories/Button.stories.vue
/Users/adam/Desktop/storybook/src/stories/Header.stories.js
/Users/adam/Desktop/storybook/src/stories/Page.stories.js

  ✘ [ERROR] Do not know how to load path:
html:/Users/adam/Desktop/storybook/src/stories/Button.stories.vue?vue&type=stories

    <stdin>:2:7:
      2 │ import "/Users/adam/Desktop/storybook/src/stories/Button.stories.vue"
        ╵        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    at failureErrorWithLog
(/Users/adam/Desktop/storybook/node_modules/esbuild/lib/main.js:1636:15)
    at /Users/adam/Desktop/storybook/node_modules/esbuild/lib/main.js:1048:25
    at runOnEndCallbacks
(/Users/adam/Desktop/storybook/node_modules/esbuild/lib/main.js:1471:45)
    at buildResponseToResult
(/Users/adam/Desktop/storybook/node_modules/esbuild/lib/main.js:1046:7)
    at /Users/adam/Desktop/storybook/node_modules/esbuild/lib/main.js:1058:9
    at new Promise (<anonymous>)
    at requestCallbacks.on-end
(/Users/adam/Desktop/storybook/node_modules/esbuild/lib/main.js:1057:54)
    at handleRequest (/Users/adam/Desktop/storybook/node_modules/esbuild/lib/main.js:723:19)
    at handleIncomingPacket
(/Users/adam/Desktop/storybook/node_modules/esbuild/lib/main.js:745:7)
    at Socket.readFromStdout
(/Users/adam/Desktop/storybook/node_modules/esbuild/lib/main.js:673:7)
18:27:59 [vite] ✨ new dependencies optimized: react/jsx-dev-runtime, @storybook/blocks
18:28:00 [vite] ✨ optimized dependencies changed. reloading
```
