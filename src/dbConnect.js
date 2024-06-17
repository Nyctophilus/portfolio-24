import { connect } from "mongoose";

const connection = {};

export default async () => {
  try {
    if (connection.isConnected) {
      console.log("using existing connection");
      return;
    }

    const db = await connect(process.env.MongoDB_URL);
    connection.isConnected = db.connections[0].readyState;

    console.log("conntected to mongoose");
  } catch (error) {
    console.log(error);
  }
};
