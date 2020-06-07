<template lang="pug">
  div
    .buttons
      .btn(@click="format_code") Format
      .btn(@click="send_code") Send
      .btn(@click="$emit('clear')") Clear
    prism-editor.editor(
      v-model="code"
      language="graphql"
      emitEvents=true
      )
</template>

<script>
import { format } from 'graphql-formatter'

export default {
  data() {
    return {
    code: 'Type a GraphQL query here 🐁'
  }
  },
  methods: {
    format_code() {
      this.code = format(this.code)
    },
    send_code() {
      this.$emit('code', this.code)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .editor
    width 100%
    padding-top 2em
    background #202020
</style>