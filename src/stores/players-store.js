import { defineStore } from "pinia";
import { players } from "boot/horizon";

export const usePlayersStore = defineStore("players", {
  state: () => ({
    players_info: new Map(),
  }),

  getters: {
    getPlayerNames(state) {
      const names = Array.from(state.players_info.values()).map((obj) => {
        return obj.TTInfo_Data01;
      });
      return names;
    },
  },

  actions: {
    loadPlayers() {
      players.watch({ rawChanges: true }).subscribe((changes) => {
        if (changes.type == "add" || changes.type == "initial") {
          const payload = {
            id: changes.new_val.id,
            info: changes.new_val,
          };

          this.addPlayer(payload);
        } else if (changes.type == "remove") {
          this.removePlayer(changes.old_val.id);
        } else if (changes.type == "change") {
          const payload = {
            id: changes.new_val.id,
            info: changes.new_val,
          };

          this.changePlayer(payload);
        }
      });
    },
    addPlayer(payload) {
      this.players_info.set(payload.id, payload.info);
    },
    removePlayer(id) {
      this.players_info.delete(id);
    },
    changePlayer(payload) {
      this.players_info.set(payload.id, payload.info);
    },
    getGUIDByValue(playername) {
      const key = Array.from(this.players_info.values()).find(
        (x) => x.TTInfo_Data01 == playername
      ).TTInfo_GUID;
      return key;
    },
  },
});
