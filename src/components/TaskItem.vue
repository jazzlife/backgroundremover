<template>
  <div class="row items-center q-mx-md">
    <span class="item-title-font text-h6">IFC 유지보수</span>
    <q-space />
    <span class="item-title-font text-h6 q-mx-xs" style="color:#6481e4">공개</span>
    <q-toggle class="q-mx-xs" v-model="toggle1" checked-icon="check" color="green" unchecked-icon="clear" />
    <q-btn class="text-h6" :ripple="{ color: 'primary' }" dense flat icon="add"></q-btn>
    <q-btn class="text-h6" :ripple="{ color: 'primary' }" dense flat icon="edit"></q-btn>
    <q-btn class="text-h6" :ripple="{ color: 'primary' }" dense flat icon="delete"></q-btn>
  </div>
</template>

<script>

import { ref } from 'vue'

export default {
  name: 'TaskItem',
  setup () {
    return {
      toggle1: ref(true)
    }
  }
}
</script>
