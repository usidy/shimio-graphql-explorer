<template lang="pug">
  #app
    query.left(@code="send" @clear="$refs.api.stop_query()")
    Api.responses(:query="query" ref="api")
      template(#loading)
        .none Nothing to see here..
      template(#all="{ operations }")
        response.resp(
          v-for="operation in operations"
          :operation="{ operation_name: operation[0],...operation[1] }"
          )

</template>

<script>
import query from './components/query.vue'
import response from './components/response.vue'

export default {
  name: 'App',
  components: {
    query,
    response
  },
  data() {
    return {
      query: '',
    }
  },
  methods: {
    send(code) {
      this.query = code
     }
  }
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap')

#app
  font-family 'Fira Code', monospace
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  display flex
  flex-flow row nowrap
  .left
    display flex
    flex-flow column nowrap
    padding 1em
    width 35%
    background #202020
  .buttons
    position relative
    display flex
    flex-flow row nowrap
    justify-content flex-end
    width 100%
    .btn
      user-select none
      cursor pointer
      width 100px
      height 40px
      margin-left 1em
      background #212121
      border 1px solid #0288D1
      border-radius 1px
      display flex
      justify-content center
      align-items center
      color #E0E0E0
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
      transition: all 0.3s cubic-bezier(.25,.8,.25,1)
      &:hover
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
  .responses
    height 100vh
    width 65%
    display flex
    flex-flow column nowrap
    padding 1.5em
    background #303030
    .none
      height 100vh
      display flex
      justify-content center
      align-items center
      color white
      font-size 1.3em
      font-weight 300
      opacity .6
    .resp
      margin-top 1.5em
*
  margin 0
  padding 0
  box-sizing border-box
  font-family 'Barlow', sans-serif
  outline none
  scroll-behavior smooth
  &::-webkit-scrollbar-track
    box-shadow inset 0 0 6px rgba(0, 0, 0, .3)
    background-color #555
  &::-webkit-scrollbar
    width 12px
    background-color #F5F5F5
  &::-webkit-scrollbar-thumb
    box-shadow inset 0 0 6px rgba(0, 0, 0, .3)
    background-color #252525
</style>
