<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="text-white" style="height:44px">
        <q-toolbar-title class="q-ml-md">{{ $APP_NAME }}</q-toolbar-title>
        <q-space />
        <q-select class="q-mr-md" dense borderless dark :options-dark="false" v-model="typeModel" :options="typeOptions"
          behavior="menu" options-selected-class="text-blue">
          <template v-slot:option="scope">
            <q-item :to="scope.opt.to" v-bind="scope.itemProps">
              <q-item-section>
                <q-item-label>{{ scope.opt.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </q-toolbar>

      <q-toolbar style="background-color:#D1DAF7;height:42px">
        <q-btn class="q-px-md" :ripple="{ color: 'primary' }" dense flat label="<"
          style="font-size: 20px;color:#93959d;" />
        <span style="font-size: 18px;font-weight: 500; color: black;">2023년 6월
          2주차</span>
        <q-btn class="q-px-md" :ripple="{ color: 'primary' }" dense flat label=">"
          style="font-size: 20px;color:#93959d;" />
        <q-space />
        <q-input class="q-mr-md" standout dense style="background-color: white;width: 150px;height: 40px" filled
          v-model="date" mask="date" :rules="['date']">
          <!-- <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="secondary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template> -->

          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover :breakpoint="600">
                <q-date v-model="date" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </q-toolbar>

      <q-toolbar class="bg-white" style="height: 70px">
        <q-btn-toggle v-model="typeModel2" class="type_toggle q-ml-md" no-caps rounded unelevated toggle-color="primary"
          color="white" text-color="primary" :options="typeOptions2" />
        <q-space />
        <q-btn class="q-mr-md" dense color="white" text-color="primary" padding="6px 12px" icon="add" label="추가하기" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from "vue";

const typeOptions = [
  {
    label: 'Daily',
    value: 'Daily',
    to: '/Daily'
  },
  {
    label: 'Weekly',
    value: 'Weekly',
    to: '/Weekly'
  },
  {
    label: 'Monthly',
    value: 'Monthly',
    to: '/Monthly'
  },
  {
    label: 'Yearly',
    value: 'Yearly',
    to: '/Yearly'
  },
  {
    label: 'Attention',
    value: 'Attention',
    to: '/Attention'
  },
  {
    label: 'Someday',
    value: 'Someday',
    to: '/Someday'
  },
]

const typeOptions2 = [
  {
    label: 'Private',
    value: 0
  },
  {
    label: 'Public',
    value: 1
  }
]

export default defineComponent({
  name: "MainLayout",

  components: {
  },

  setup () {
    return {
      typeModel: ref("Daily"),
      typeOptions,
      date: ref('2019/02/01'),
      typeOptions2,
      typeModel2: ref(0)
    };
  },
});
</script>

<style>
/* FONT AWESOME GENERIC BEAT */
.fa-beat {
  animation: fa-beat 5s ease infinite;
}

.q-field--outlined .q-field__control:after {
  border: 1px solid #93959d;
  color: #93959d
}

.q-field__native {
  color: #93959d;
}

.type_toggle {
  border: 0.3px solid #6481e4;
}

@keyframes fa-beat {
  0% {
    transform: scale(1);
  }

  5% {
    transform: scale(1.25);
  }

  20% {
    transform: scale(1);
  }

  30% {
    transform: scale(1);
  }

  35% {
    transform: scale(1.25);
  }

  50% {
    transform: scale(1);
  }

  55% {
    transform: scale(1.25);
  }

  70% {
    transform: scale(1);
  }
}
</style>
