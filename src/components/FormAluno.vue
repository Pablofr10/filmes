<template>
  <div>
    <div class="cadastro container">
      <form class="form" @submit.prevent="enviarCadastro()">
        <FormInput
          id="nome"
          nome="Nome"
          placeholder="Digite seu Nome"
          textLabel="Nome"
          type="text"
          @value="nome = $event"
        />

        <FormInput
          id="cpf"
          nome="CPF"
          placeholder="000.000.000-00"
          textLabel="CPF"
          type="text"
          @value="cpf = $event"
        />
        <FormInput
          id="dataNascimento"
          nome="Data Nascimento"
          placeholder="00/00/0000"
          textLabel="Data Nascimento"
          type="text"
          @value="dataNascimento = $event"
        />
        <h3>Tipo Sangue</h3>
        <div class="form-group-select">
          <div
            class="form-group-radio"
            v-for="sangue in sangues"
            :key="sangue.id"
          >
            <input :value="sangue.tipo" type="radio" v-model="tipoSangue" />
            <label for="tipoSangue">Tipo Sangue Pai</label>
          </div>
        </div>
        <div class="form-group">
          <label for="comentario">Comentários</label>
          <textarea
            rows="5"
            id="comentario"
            placeholder="Digite seu comentário"
            class="input"
          />
        </div>
        <button type="submit" class="btn btn-success">Enviar Cadastro</button>
      </form>
    </div>
    {{ tipoSangue }}
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import FormInput from "./FormInput.vue";
export default {
  setup() {
    const sangues = [
      { id: 1, nome: "Puro", tipo: "puro" },
      { id: 2, nome: "Trouxa", tipo: "trouxa" },
      { id: 3, nome: "Mestiço", tipo: "mestiço" },
    ];

    const formulario = reactive({
      nome: "",
      cpf: "",
      dataNascimento: "",
      tipoSangue: "",
      comentarios: "",
    });
    const form = toRefs(formulario);

    const enviarCadastro = () => {
      const aluno = {
        nome: nome.value,
        cpf: cpf.value,
        dataNascimento: dataNascimento.value,
        tipoSangue: tipoSangue.value,
        comentarios: comentarios.value,
      };
    };

    return {
      sangues,
      ...form,
      enviarCadastro,
    };
  },
  components: { FormInput },
};
</script>

<style scoped></style>
