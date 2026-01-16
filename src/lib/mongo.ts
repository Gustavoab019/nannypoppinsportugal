import type { Mongoose } from "mongoose";

type MongooseCache = {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
};

const MONGODB_URI = process.env.MONGODB_URI ?? "";

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

const cached = global.mongoose ?? { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI is not set");
    }
    cached.promise = import("mongoose").then((mongooseModule) => {
      const mongoose = "default" in mongooseModule ? mongooseModule.default : mongooseModule;
      return mongoose.connect(MONGODB_URI);
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
