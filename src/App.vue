<template>
  <router-view />
</template>

<script>
import { defineComponent, onMounted } from "vue";

import { useRoomsStore } from "./stores/rooms-store";
import { useMeetsStore } from "./stores/meets-store";
import { usePlayersStore } from "./stores/players-store";

export default defineComponent({
  name: "App",
  computed: {},
  mounted () {
    const room_store = useRoomsStore();
    const meet_store = useMeetsStore();
    const player_store = usePlayersStore();
    room_store.loadRooms();
    meet_store.loadMeets();
    player_store.loadPlayers();
  },
});
</script>
