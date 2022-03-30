// AUTOGENERATED FROM https://github.com/vuejs/eslint-plugin-vue/blob/1ce68fa9def2c7d6da7aa5020c731860d7027459/tests/lib/rules/valid-v-bind.js
/**
 * @author Toru Nagashima
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester
const rule = require('../../../eslint-plugin-vue/lib/rules/valid-v-bind')

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2015,
    templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug' }
  }
})

tester.run('valid-v-bind', rule, {
  valid: [
    {
      filename: 'test.vue',
      code: ''
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">div(v-bind:aaa="bbb")</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">div(v-bind:aaa='bbb')</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">div(v-bind:aaa=bbb)</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">div(v-bind="bbb")</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">div(v-bind:aaa.prop='bbb')</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">div(v-bind:aaa.camel='bbb')</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">div(:aaa="bbb")</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">div(:aaa='bbb')</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">div(:aaa=bbb)</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">div(:aaa.prop='bbb')</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">div(:aaa.camel='bbb')</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">div(:aaa.attr='bbb')</template>`
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">input(v-bind='$attrs')</template>`
    },
    // parsing error
    {
      filename: 'parsing-error.vue',
      code: `<template lang="pug">MyComponent(:foo=".")</template>`
    },
    // comment value (parsing error)
    {
      filename: 'comment-value.vue',
      code: `<template lang="pug">MyComponent(:foo="/**/")</template>`
    }
  ],
  invalid: [
    {
      filename: 'test.vue',
      code: `<template lang="pug">div(v-bind)</template>`,
      errors: ["'v-bind' directives require an attribute value."]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">div(v-bind:aaa)</template>`,
      errors: ["'v-bind' directives require an attribute value."]
    },
    {
      filename: 'test.vue',
      code: `<template lang="pug">div(:aaa.unknown='bbb')</template>`,
      errors: ["'v-bind' directives don't support the modifier 'unknown'."]
    },
    // empty value
    {
      filename: 'empty-value.vue',
      code: `<template lang="pug">MyComponent(:foo="")</template>`,
      errors: ["'v-bind' directives require an attribute value."]
    }
  ]
})
