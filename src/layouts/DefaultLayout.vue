<template>
  <nav>
    <div class="container">
      <div class="logo"><Logo /></div>
      <ul>
        <li v-for="rota in rotas" :key="rota.id">
          <router-link :to="rota.path">{{ rota.nome }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <slot></slot>
</template>

<script>
import Logo from "../components/Logo.vue";
export default {
  setup() {
    const rotas = [
      { id: 1, nome: "Home", path: "/" },
      { id: 2, nome: "Sobre", path: "/sobre" },
      { id: 3, nome: "Alunos", path: "/alunos" },
    ];
    return {
      rotas,
    };
  },
  components: { Logo },
};
</script>

<style scoped>
nav {
  padding: 0 15px;

  -webkit-box-shadow: 1px 3px 21px 5px rgba(0, 0, 0, 0.18);
  box-shadow: 1px 3px 21px 5px rgba(0, 0, 0, 0.18);
}

nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  font-size: 1.5rem;
  display: flex;
  gap: 15px;
  font-family: Georgia, "Times New Roman", Times, serif;
}
li a {
  color: #394149;
  transition: 0.3s ease;
}
li a:hover {
  color: #196f3d;
}
.logo {
  font-size: 2rem;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 0;
  box-sizing: border-box;
}
</style>
