<template>
  <q-card class="no-shadow" bordered>
    <q-card-section>
      <div class="text-h6 text-grey-8">
        미팅룸 예약리스트
        <!-- <div class="row float-right"> -->
        <q-btn label="예약하기" class="float-right text-capitalize text-indigo-8 shadow-3" icon="event_available"
          @click="openReserveDialog" />
        <q-input dense debounce="10" class="float-right q-mr-md" style="max-width: 120px" outlined
          v-model="search_username" label="예약자" />
        <q-input dense debounce="10" class="float-right q-mr-sm" outlined v-model="test" label="미팅 제목" />
        <!-- <q-select dense class="float-right q-mr-sm" style="min-width: 140px" outlined v-model="room_model"
          :options="room_store.getRoomNames" label="미팅 장소" /> -->
        <q-select dense class="float-right q-mr-sm" style="min-width: 140px" outlined v-model="room_model"
          :options="player_store.getPlayerNames" label="미팅 장소" />
        <!-- </div> -->
      </div>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section class="q-pa-none">
      <q-table dense :pagination="pagination" :rows="meet_store.getMeets" :columns="columns" :filter="filter"
        :filter-method="tablefilter">
        <template v-slot:body-cell-Name="props">
          <q-td :props="props">
            <q-item style="max-width: 420px">
              <q-item-section>
                <q-item-label>{{ props.row.name }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-td>
        </template>
        <template v-slot:body-cell-Action="props">
          <q-td :props="props">
            <q-btn icon="edit" size="sm" flat dense v-on:click="openEditDialog(props.row)" />
            <q-btn icon="delete" size="sm" class="q-ml-sm" flat dense v-on:click="removeMeeting(props.key)" />
          </q-td>
        </template>
      </q-table>
    </q-card-section>
  </q-card>
  <q-dialog v-model="card">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">미팅룸 예약</div>
        <div class="row q-mt-md">
          <q-select dense class="float-right q-mr-sm" style="width: 200px" outlined v-model="reserved_room"
            :options="player_store.getPlayerNames" label="미팅 장소" />
          <q-input dense class="float-right q-mr-sm" style="width: 200px" outlined v-model="reserved_group"
            label="미팅 대상" />
        </div>
        <div class="row q-mt-sm">
          <q-input dense class="float-right q-mr-sm" style="width: 200px" outlined v-model="reserved_subj"
            label="미팅 제목" />
          <q-input dense class="float-right q-mr-sm" style="width: 200px" outlined v-model="username" label="예약자" />
        </div>
        <div class="row q-mt-sm">
          <q-input dense outlined class="q-mr-sm" style="width: 152px" v-model="datestr">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="datestr" title="예약 날짜" today-btn mask="YYYY-MM-DD">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input dense outlined style="width: 120px" v-model="start_time">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-time landscape v-model="start_time" mask="HH:mm" format24h>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input dense outlined class="q-ml-sm" style="width: 120px" v-model="end_time">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-time landscape v-model="end_time" mask="HH:mm" format24h>
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions class="q-mr-md q-my-sm" align="right">
        <q-btn label="수정" v-if="edit_state" v-close-popup flat class="text-capitalize text-indigo-8 shadow-1"
          icon="event_available" @click="editMeeting" />
        <q-btn label="예약" v-else v-close-popup flat class="text-capitalize text-indigo-8 shadow-1" icon="event_available"
          @click="reserveMeeting" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useRoomsStore } from "src/stores/rooms-store";
import { useMeetsStore } from "src/stores/meets-store";
import { usePlayersStore } from "src/stores/players-store";
import { date } from 'quasar';

//const room_store = useRoomsStore();
const meet_store = useMeetsStore();
const player_store = usePlayersStore();

const columns = [
  {
    name: "Room",
    label: "미팅 장소",
    field: "TTInfo_Data07",
    sortable: true,
    align: "center",
  },
  {
    name: "Subject",
    label: "미팅 제목",
    field: "TTInfo_Data01",
    sortable: true,
    align: "center",
  },
  {
    name: "Team",
    label: "미팅 대상",
    field: "TTInfo_Data02",
    sortable: true,
    align: "center",
  },
  {
    name: "Reserved Date",
    label: "예약 날짜",
    field: "TTInfo_Data08",
    sortable: true,
    align: "center",
  },
  {
    name: "Reserved Start Time",
    label: "시작 시간",
    field: "TTInfo_Data04",
    sortable: true,
    align: "center",
  },
  {
    name: "Reserved End Time",
    label: "종료 시간",
    field: "TTInfo_Data05",
    sortable: true,
    align: "center",
  },
  {
    name: "Reservation",
    label: "예약자",
    field: "TTInfo_Data03",
    sortable: true,
    align: "center",
  },
  {
    name: "Action",
    label: "",
    field: "action",
    sortable: false,
    align: "center",
  },
];

const pagination = { rowsPerPage: 25 };
const room_model = ref("All");
const card = ref(false);
const datestr = ref("");
const start_time = ref("09:00");
const end_time = ref("18:00");
const reserved_room = ref("");
const reserved_subj = ref("");
const reserved_group = ref("");
const username = ref("");
const edit_state = ref(false);

const current_guid = ref("");
const current_id = ref("");

const search_subject = ref("subj");
const search_username = ref("user");

const test = "";

const filter = {
  search_subj: test,
  search_user: search_username.value,
  search_room: room_model.value
}

onMounted(() => {
  onUnmounted(() => { });
});

function tablefilter (rows, terms) {
  //let subj = terms.search_subj ? terms.search_subj.toLowerCase() : ""
  //let user = terms.search_user ? terms.search_user.toLowerCase() : ""
  console.log(terms)
  const filteredRows = rows.filter(
    (row, i) => {

      let result = true;
      //console.log(row);
      return result;
    });

  return filteredRows;
}

function openReserveDialog () {
  edit_state.value = false;
  card.value = true;
  if (room_model.value && room_model.value != "All") {
    reserved_room.value = room_model.value;
  } else {
    reserved_room.value = "";
  }
};

function openEditDialog (data) {
  edit_state.value = true;
  card.value = true;
  reserved_room.value = data.TTInfo_Data07;
  reserved_subj.value = data.TTInfo_Data01;
  reserved_group.value = data.TTInfo_Data02;
  username.value = data.TTInfo_Data03;
  datestr.value = data.TTInfo_Data08;
  start_time.value = date.formatDate(data.TTInfo_Data04, 'HH:mm');
  end_time.value = date.formatDate(data.TTInfo_Data05, 'HH:mm');
  current_guid.value = data.TTInfo_GUID;
  current_id.value = data.id;
};

function reserveMeeting () {

  console.log("call reserve");
  if (reserved_room.value && reserved_group.value && reserved_subj.value && username.value
    && datestr.value && start_time.value && end_time.value) {

    const start_dtstr = datestr.value + " " + start_time.value + ":00";
    const end_dtstr = datestr.value + " " + end_time.value + ":00";
    const dtnow = date.formatDate(Date.now(), 'YYYY-MM-DD HH:mm:ss')
    const guid = uuidv4();
    const payload = {
      TTInfo_Data01: reserved_subj.value,
      TTInfo_Data02: reserved_group.value,
      TTInfo_Data03: username.value,
      TTInfo_Data04: start_dtstr,
      TTInfo_Data05: end_dtstr,
      TTInfo_Data06: player_store.getGUIDByValue(reserved_room.value),
      TTInfo_Data07: reserved_room.value,
      TTInfo_Data08: datestr.value,
      TTInfo_Data09: "",
      TTInfo_Data10: dtnow,
      TTInfo_Data11: "",
      TTInfo_GUID: guid,
    };
    meet_store.insertMeet(payload);
  }

  setEmptyDialogValues();
};

function setEmptyDialogValues () {
  reserved_room.value = "";
  reserved_group.value = "";
  reserved_subj.value = "";
  username.value = "";
  datestr.value = "";
  start_time.value = "09:00";
  end_time.value = "18:00";
  current_guid.value = "";
  current_id.value = "";
}

function editMeeting () {

  const start_dtstr = datestr.value + " " + start_time.value + ":00";
  const end_dtstr = datestr.value + " " + end_time.value + ":00";
  const dtnow = date.formatDate(Date.now(), 'YYYY-MM-DD HH:mm:ss');

  const payload = {
    TTInfo_Data01: reserved_subj.value,
    TTInfo_Data02: reserved_group.value,
    TTInfo_Data03: username.value,
    TTInfo_Data04: start_dtstr,
    TTInfo_Data05: end_dtstr,
    TTInfo_Data06: player_store.getGUIDByValue(reserved_room.value),
    TTInfo_Data07: reserved_room.value,
    TTInfo_Data08: datestr.value,
    TTInfo_Data09: "",
    TTInfo_Data10: dtnow,
    TTInfo_Data11: "",
    TTInfo_GUID: current_guid.value,
    id: current_id.value
  };

  meet_store.editMeet(payload);
  setEmptyDialogValues();
}

function removeMeeting (id) {
  meet_store.delMeet(id);
}

function uuidv4 () {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

</script>

<style scoped></style>
