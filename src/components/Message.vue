<template>
  <div class="message">
    <b>{{message.name}}</b> <small>[{{message.date}}]</small> : </b> {{message.message}}
  </div>
</template>

<script>
export default {
  props: ['message']
}
</script>

<style lang="css">
.message {
  background-color: #404040;
  margin: auto;
  margin-bottom: 10px;
  width: 500px;
}
</style>
