<template>
  <h1>Welcome</h1>
</template>

<script>
export default {
  name: 'bingo',
  activated () {
    this.$store.dispatch('setWhichpage', 'user')
  }
}
</script>
