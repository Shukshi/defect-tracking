<template>
  <div class="container">
    <div class="input">
      <input
        type="text"
        v-model="current_error"
        placeholder="Add error.."
        class="add"
      />
      <button @click="addError()" class="submitButton">Submit</button>
    </div>
    <div class="input">
      <input
        type="text"
        v-model="search"
        placeholder="Search Errors"
        class="add"
      />
    </div>
    <div v-for="(error, index) in filteredErrors" :key="error">
      <div v-if="!edits[index]" class="element">
        <div class="text">
          {{ error }}
        </div>
        <div class="allbut">
          <StatusButton :error="error" />
          <img
            class="buttons"
            src="../assets/Logo/edit.svg"
            @click="editError(index, error)"
          />
          <img
            class="buttons"
            src="../assets/Logo/trash-2.svg"
            @click="deleteError(index)"
          />
        </div>
      </div>
      <div v-else class="edit_element">
        <input v-model="edit_error" class="edited" />
        <button class="update_buttons" @click="updateError(index)">
          Update
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import StatusButton from "./StatusButton.vue";
import { debounce } from "lodash";
export default {
  components: {
    StatusButton
  },
  data() {
    return {
      errors: [],
      edits: [],
      current_error: "",
      selectedIndex: null,
      search: "",
      edit_error: "",
      isEditing: false,
      filteredErrors: []
    };
  },
  watch: {
    search: {
      handler(search) {
        this.setErrorsDebounced(search)
      },
      immediate: true
    }
  },
  methods: {
    addError() {
      if (this.current_error) {
        if (!this.errors.includes(this.current_error)) {
          this.errors.push(this.current_error);
          this.edits.push(false);
        }
        this.current_error = "";
      }
    },
    editError(index, error) {
      this.edit_error = error;
      this.selectedIndex = index;
      this.isEditing = true;
      this.edits[index] = true;
      console.log(this.isEditing);
    },
    setErrorsDebounced: debounce(function() {
      this.filteredErrors = this.errors.filter((error) => {
        return error.toLowerCase().match(this.search.toLowerCase())
      })
    }, 500),
    deleteError(index) {
      this.errors.splice(index, 1);
    },
    updateError(index) {
      this.errors.splice(this.selectedIndex, 1, this.edit_error);
      this.edits[index] = false;
      this.edit_error = "";
    }
  }
};
</script>

<style lang="css" scoped>
@import "../assets/Styles/Error.css";
</style>
