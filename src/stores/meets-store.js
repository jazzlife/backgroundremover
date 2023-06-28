import { defineStore } from "pinia";
import { meets } from "src/boot/horizon";

export const useMeetsStore = defineStore("meets", {
  state: () => ({
    meets_info: new Map(),
  }),

  getters: {
    getMeets(state) {
      const data = Array.from(state.meets_info.values());
      return data;
    },
  },

  actions: {
    loadMeets() {
      meets.watch({ rawChanges: true }).subscribe((changes) => {
        if (changes.type == "add" || changes.type == "initial") {
          const payload = {
            id: changes.new_val.id,
            info: changes.new_val,
          };

          this.addMeet(payload);
        } else if (changes.type == "remove") {
          this.removeMeet(changes.old_val.id);
        } else if (changes.type == "change") {
          const payload = {
            id: changes.new_val.id,
            info: changes.new_val,
          };

          this.changeMeet(payload);
        }
      });
    },
    addMeet(payload) {
      this.meets_info.set(payload.id, payload.info);
    },
    removeMeet(id) {
      console.log(id);
      this.meets_info.delete(id);
    },
    changeMeet(payload) {
      this.meets_info.set(payload.id, payload.info);
    },
    insertMeet(payload) {
      meets.store(payload);
    },
    editMeet(payload) {
      meets.replace(payload);
    },
    delMeet(id) {
      meets.remove(id);
    },
  },
});
