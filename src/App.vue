<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | 1111人力營行` : `111` }}</template>
  </metainfo>
  <router-view />
</template>

<script>
import { useMeta } from 'vue-meta'

export default {
  setup () {
    useMeta({
      title: '1111',
      htmlAttrs: { 
          lang: 'constants.meta.language',
        },
        description: 'constants.main.description',
        meta: [
            {
              name: 'author',
              content: '111111'
            },
            {
              name: 'keywords',
              content: '11111'
            },
            {
              name: 'robots',
              content: '1111'
            }
          ]
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
