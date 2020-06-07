<template lang="pug">
  div
    .name {{ name }}
    prism-editor.editor(
      :code="code"
      language="json"
      readonly=true
      )
</template>

<script>
export default {
  props: ['operation'],
  data() {
    return {
      name: '',
      type: ''
    }
  },
  computed: {
    code() {
      const { operation_name, operation_type , data, errors } = this.operation
      this.name = operation_name
      this.type = operation_type
      return JSON.stringify(data || errors, null, 2)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .name
    font-weight 300
    font-size 1.4em
    opacity .6
    color #eee
  .editor
    width 100%
    height max-content
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
</style>