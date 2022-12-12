const dbConfig = require("../Config/db.config")
const mongoose = require("mongoose")
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dbConfig.url
db.url = require("./employee.model")(mongoose)

module.exports = db