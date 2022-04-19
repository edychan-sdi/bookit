const Room = require("../models/room");
const rooms = require("../data/rooms.json");
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://edychan:drygin@cluster0.zmqur.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted");
    await Room.insertMany(rooms);
    console.log("All rooms are added");
  } catch (error) {
    console.log(error.message);
  }
  process.exit();
};

seedRooms();
