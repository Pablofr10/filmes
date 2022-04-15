<template>
  <component :is="layout" id="app">
    <router-view></router-view>
  </component>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { currentRoute } = useRouter();

    const layout = computed(
      () => `${currentRoute.value.meta.layout || "default"}-layout`
    );
    return {
      layout,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, Arial, Helvetica, sans-serif;
}
a {
  text-decoration: none;
  color: #0000;
}
li {
  list-style: none;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 0;
  box-sizing: border-box;
}
input[type="text"],
textarea,
select {
  font-size: 1rem;
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border: 2px solid #8b8b8b;
  border-radius: 4px;
  width: 100%;
}

input[type="radio"] {
  height: 18px;
  width: 18px;
  padding-top: 10px;
  cursor: pointer;
}
input[type="radio"]:checked {
  background: #283747;
}

input:focus {
  background-color: #eaecee;
  border: 2px solid #283747;
  transition: 0.2s ease;
}
.input:not(textarea) {
  line-height: 1;
  height: 2.25em;
}
.form {
  width: 100%;
  padding: 10px 15px;
}

.form-group {
  display: block;
  padding: 5px 0;
}
.form-group label {
  display: block;
  font-size: 1rem;
  font-weight: 600;
}
.form-group-select {
  display: flex;
  gap: 15px;
}
.form-group-select .form-group-radio,
input {
  margin-right: 5px;
}
.form-group-check label {
  width: 100%;
}
.btn {
  padding: 10px 15px;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;
  display: block;
  border: none;
  border-radius: 5px;
  -webkit-box-shadow: 5px 5px 21px -2px rgba(0, 0, 0, 0.32);
  box-shadow: 5px 5px 21px -2px rgba(0, 0, 0, 0.32);
}
.btn-success {
  background: #309f5e;
  color: #fff;
  transition: 0.3s ease-in-out;
}
.btn-success:hover {
  background: #3cc273;
  color: #ebf3ee;
}
</style>
