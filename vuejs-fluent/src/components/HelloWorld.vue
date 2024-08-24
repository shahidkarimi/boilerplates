<template>
  Buttons
  <fluent-button @click="showModal">Hello</fluent-button>

  <fluent-text-field appearance="outline" placeholder="user@email.com">Email</fluent-text-field>

  <fluent-select title="Select a section">
    <fluent-option value="1">Beginning</fluent-option>
    <fluent-option value="2">Middle</fluent-option>
    <fluent-option value="3">End</fluent-option>
  </fluent-select>

  <fluent-switch>
    <span slot="checked-message">On</span>
    <span slot="unchecked-message">Off</span>
    <label for="cap-switch">Captions:</label>
  </fluent-switch>
  <hr />
  <h2>Dialog</h2>
<fluent-button appearance="accent" @click="showDialog">Show Dialog</fluent-button>
<fluent-dialog id="defaultDialog" :hidden="hideDlg" trap-focus modal>
  <div style="margin: 20px;">
    <h2>Dialog with text and a button</h2>
    <fluent-button @click="()=>{hideDlg=true}" id="dialogCloser" appearance="accent" tabindex="0">Dismiss</fluent-button>
  </div>
</fluent-dialog>
<hr />
<fluent-listbox aria-labelledby="lb_label">
  <fluent-option value="fn">Foxtrot November</fluent-option>
  <fluent-option value="gs">Golf Sierra</fluent-option>
  <fluent-option selected value="j">Juliet</fluent-option>
  <fluent-option value="kr">Kilo Romeo</fluent-option>
  <fluent-option value="l">Lima</fluent-option>
  <fluent-option value="m">Mike</fluent-option>
  <fluent-option disabled value="x">X-ray</fluent-option>
</fluent-listbox>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { allComponents, provideFluentDesignSystem } from '@fluentui/web-components';

provideFluentDesignSystem().register(allComponents);

const hideDlg = ref(true)

const showDialog = () => {
  hideDlg.value = false;
};

onMounted(() => {

});
</script>
