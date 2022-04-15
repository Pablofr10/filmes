<template>
  <div class="form-group">
    <label :for="id">{{ textLabel }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :id="id"
      class="input"
      v-model="model"
      @input="this.$emit('value', model)"
    />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["nome", "id", "textLabel", "type", "placeholder"],
  emits: ["value"],
  setup() {
    const model = ref("");

    return { model };
  },
};
</script>

<style lang="scss" scoped></style>
