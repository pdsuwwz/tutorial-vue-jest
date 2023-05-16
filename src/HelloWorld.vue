<template>
  <div>{{ msg }}</div>
</template>

<script setup>
defineOptions({
  name: 'HelloWorld'
})

defineProps({
  msg: ''
})

</script>
