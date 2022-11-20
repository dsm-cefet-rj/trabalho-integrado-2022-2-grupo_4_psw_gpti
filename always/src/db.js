import React from "react";

const mongoClient = require("mongodb").mongoClient;
mongoClient.connect("mongodb://localhost:27017", {useUnifiedTopology}, 

                                (error, connection) => {
                                    if(error) return console.log(error);
                                    global.connection = connection.db("always");
                                    console.log = ("connected!");
                                });
module.exports = {}