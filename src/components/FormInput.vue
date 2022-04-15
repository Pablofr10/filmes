<template>
  <div class="form-group">
    <label :for="id">{{ textLabel }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :id="id"
      class="input"
      @input="$emit('value', model)"
    />
    {{ model }}
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["nome", "id", "textLabel", "type", "placeholder"],
  setup(props) {
    const model = ref("");
    return { model };
  },
};
</script>

<style lang="scss" scoped></style>
