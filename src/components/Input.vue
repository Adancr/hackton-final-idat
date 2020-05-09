<template>
  <div class="view-input">
    <label v-if="label">{{ label }}</label>
    <input
      :value="value"
      @input="updateInput"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      class="input"
    />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: [String, Number],
    placeholder: String,
    label: String,
    type: {
      type: String,
      default: 'text',
    },
    required: {
      type: Boolean,
    },
  },
  data() {
    return {
      inpValue: '',
    };
  },
  methods: {
    updateInput(value) {
      this.$emit('input', value.target.value);
      // console.log('value', value.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.view-input {
  margin-bottom: 20px;
}
label {
  text-transform: uppercase;
  margin-bottom: 8px;
  display: block;
}
.input {
  width: 100%;
  border-radius: 5px;
  border: 1px solid #bab8cc;
  background: white;
  padding: 18px 10px;

  &:focus {
    opacity: 1;
    outline: none;
  }
  &:focus::invalid {
    border-color: red;
  }
}
</style>
