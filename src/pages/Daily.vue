<template>
  <q-page class="flex items-stretch">
    <div class="full-width">
      <div class="row items-center">
        <q-list class="full-width full-height">

          <q-separator spaced inset />

          <q-item>
            <q-item-section>
              <task-item></task-item>
            </q-item-section>
          </q-item>

          <q-separator spaced inset />

          <q-item>
            <q-item-section>
              <task-item></task-item>
            </q-item-section>
          </q-item>

          <q-separator spaced inset />

          <q-item>
            <q-item-section>
              <task-item></task-item>
            </q-item-section>
          </q-item>

          <q-separator spaced inset />

          <q-item>
            <q-item-section>
              <task-item></task-item>
            </q-item-section>
          </q-item>

          <q-separator spaced inset />


          <q-item>
            <q-item-section>
              <task-item></task-item>
            </q-item-section>
          </q-item>

          <q-separator spaced inset />


          <q-item>
            <q-item-section>
              <task-item></task-item>
            </q-item-section>
          </q-item>

          <q-separator spaced inset />

          <q-item>
            <q-item-section>
              <task-item></task-item>
            </q-item-section>
          </q-item>

          <q-separator spaced inset />

          <q-item>
            <q-item-section>
              <task-item></task-item>
            </q-item-section>
          </q-item>

          <q-separator spaced inset />

          <q-item>
            <q-item-section>
              <task-item></task-item>
            </q-item-section>
          </q-item>

          <q-separator spaced inset />

          <q-item>
            <q-item-section>
              <task-item></task-item>
            </q-item-section>
          </q-item>

          <q-separator spaced inset />

          <q-item>
            <q-item-section>
              <task-item></task-item>
            </q-item-section>
          </q-item>

          <q-separator spaced inset />

          <q-item>
            <q-item-section>
              <task-item></task-item>
            </q-item-section>
          </q-item>

          <q-separator spaced inset />

          <q-item>
            <q-item-section>
              <task-item></task-item>
            </q-item-section>
          </q-item>

          <q-separator spaced inset />

        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>

import TaskItem from "components/TaskItem.vue";
import { defineComponent } from "vue";

export default defineComponent({

  name: 'Daily',

  components: {
    TaskItem
  },

  setup () {
    return {
    }
  }
});
</script>
