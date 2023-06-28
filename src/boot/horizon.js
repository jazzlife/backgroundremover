// import { LocalStorage } from "quasar";

// var Horizon = require("@horizon/client");
import Horizon from "@horizon/client";

//const server_ip = LocalStorage.getItem("server_ip");
const server_ip = "turtlelab-rethink.ddns.net";

const horizon = Horizon({ host: server_ip + ":9292" });

const rooms = horizon("Rooms");
const meets = horizon("ScheduleInfoDataManager");
const players = horizon("PlayerInfoDataManager");

export { rooms, meets, players };
