// AUTOGENERATED FROM https://github.com/vuejs/eslint-plugin-vue/blob/1ce68fa9def2c7d6da7aa5020c731860d7027459/tests/lib/rules/no-deprecated-scope-attribute.js
'use strict'

const RuleTester = require('eslint').RuleTester
const rule = require('../../../eslint-plugin-vue/lib/rules/no-deprecated-scope-attribute')

const tester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2015,
    templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug' }
  }
})

tester.run('no-deprecated-scope-attribute', rule, {
  valid: [
    `<template lang="pug">
LinkList
  a(v-slot:name)
</template>`,
    `<template lang="pug">
LinkList
  a(#name)
</template>`,
    `<template lang="pug">
LinkList
  a(v-slot="{a}")
</template>`,
    `<template lang="pug">
LinkList
  a(#default="{a}")
</template>`,
    `<template lang="pug">
LinkList
  a(slot="name")
</template>`,
    `<template lang="pug">
LinkList
  a(slot-scope="{a}")
</template>`,
    `<template lang="pug">
LinkList
  a
</template>`
  ],
  invalid: [
    {
      code: `
      <template lang="pug">
LinkList
  template(scope="{a}")
    a
</template>`,
      output: `
      <template lang="pug">
LinkList
  template(slot-scope="{a}")
    a
</template>`,
      errors: [
        {
          message: '`scope` attributes are deprecated.',
          line: 4
        }
      ]
    },
    {
      code: `
      <template lang="pug">
LinkList
  template(slot="name", scope="{a}")
    a
</template>`,
      output: `
      <template lang="pug">
LinkList
  template(slot="name", slot-scope="{a}")
    a
</template>`,
      errors: [
        {
          message: '`scope` attributes are deprecated.',
          line: 4
        }
      ]
    }
  ]
})