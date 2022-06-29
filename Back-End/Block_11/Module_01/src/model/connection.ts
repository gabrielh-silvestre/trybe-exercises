import "dotenv";
import { connect } from "mongoose";

const { DATABASE_URL } = process.env;

const mongoUrl = DATABASE_URL || "mongodb://localhost:27017/Exercise";

export default connect(mongoUrl);
