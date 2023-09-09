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