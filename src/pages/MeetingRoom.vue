<template>
  <q-page class="q-pa-sm">
    <table-actions-room class="full-height"></table-actions-room>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from "vue";

export default defineComponent({
  name: "RoomTables",
  components: {
    TableActionsRoom: defineAsyncComponent(() =>
      import("components/tables/TableActionsRoom.vue")
    ),
  },
});
</script>
