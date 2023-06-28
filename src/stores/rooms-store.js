import { defineStore } from "pinia";
import { rooms } from "boot/horizon";

export const useRoomsStore = defineStore("rooms", {
  state: () => ({
    counter: 0,
    // room_names: [],
    rooms_info: new Map(),
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
    getRoomNames(state) {
      const names = Array.from(state.rooms_info.values()).map(obj=> {
        return obj.name;
      });
      return names;
    },
  },

  actions: {
    increment() {
      this.counter++;
    },
    loadRooms() {
      rooms.watch({ rawChanges: true }).subscribe((changes) => {
        if (changes.type == "add" || changes.type == "initial") {

          const payload = {
            id: changes.new_val.id,
            info: changes.new_val
          };

          this.addRoom(payload);
        } else if(changes.type == "remove") {
          this.removeRoom(changes.old_val.id);
        } else if(changes.type == "change") {

          const payload = {
            id: changes.new_val.id,
            info: changes.new_val
          };

          this.changeRoom(payload);
        }
      });
    },
    // addRoom(name) {
    //   const idx = this.room_names.indexOf(name);
    //   if(idx<0)
    //     this.room_names.push(name);
    // },
    addRoom(payload) {
      // this.rooms_info.push(payload);
      this.rooms_info.set(payload.id, payload.info);
    },
    removeRoom(id) {
      // const idx = this.rooms_info.indexOf(name);
      // this.room_names.splice(idx, 1);
      this.rooms_info.delete(id);
    },
    changeRoom(payload) {
      // console.log(old_name);
      // console.log(new_name);
      // const idx = this.room_names.indexOf(old_name);
      // console.log(idx);
      // if (idx>-1)
      //   this.room_names[idx] = new_name;
      // if (this.rooms_info[payload.id])
      //   Object.assign(this.rooms_info[payload.id], payload.info);
      // else 
      //   this.rooms_info.push(payload);
      this.rooms_info.set(payload.id, payload.info);
    }
  },
});
