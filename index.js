const mongoose = require("mongoose");
const express = require("express");
const { goodData } = require("./src/db/model/model");
const database = require("./src/db/db");
const { resturent } = require("./src/db/model/admitcard");
const Data = database.database;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("I dont know like")
})
app.post("/add", async (req, res) => {
    try {
        const newdata = new goodData({
            name: req.body.name,
            fathersName: req.body.fathersName,
            mothersName: req.body.mothersName,
            village: req.body.village,
            post: req.body.post,
            panchayat: req.body.panchayat,
            pollicestand: req.body.pollicestand,
            block: req.body.block,
            distk: req.body.distk,
            pinCode: req.body.pinCode,
            state: req.body.state,
            countery:req.body.countery


        });
        const result = await newdata.save();
        console.log("result===============", result);
        if (!result) {
            throw "data not saved in the db";
        }
        res.status(200).json({
            msg: "successfully",
            result: result
        });
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({
            msg: "error saving data",
            error: error.message
        });
    }
});
app.get("/getData", async (req, res) => {
    try {
        const response = await goodData.find()
        if (!response) throw 'not found data'
        res.status(200).json({
            msg: "success",
            // count: response.length,
            result: response
        });
    } catch (error) {
        res.status(508).json({
            error: "error data for api"
        })

    }
});
app.put("/updateData/:id", async (req, res) => {
    try {
      const id = req.params.id;
        const newData = {
            name: req.body.name,
            fathersName: req.body.fathersName,
            mothersName: req.body.mothersName,
            village: req.body.village,
            post: req.body.post,
            panchayat: req.body.panchayat,
            pollicestand: req.body.pollicestand,
            block: req.body.block,
            distk: req.body.distk,
            pinCode: req.body.pinCode,
            state: req.body.state,
            countery:req.body.countery

      
      };
      const updateData = await goodData.findByIdAndUpdate(id, newData, { new: true });
      if (!updateData) {
        return res.status(404).json({ message: "Data not found" });
      }
      res.status(200).json({
        msg: "Data updated successfully",
        data: updateData
      });
    } catch (error) {
      console.error("Error updating data:", error);
      res.status(500).json({ message: "Error updating data" });
    }
});
app.delete("/deleteData/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const deletedData = await goodData.findByIdAndDelete(id);
      if (!deletedData) {
        return res.status(404).json({ message: "Data not found" });
      }
      res.status(200).json({
        msg: "Data deleted successfully",
        data: deletedData
      });
    } catch (error) {
      console.error("Error deleting data:", error);
      res.status(500).json({ message: "Error deleting data" });
    }
});
app.post("/addAdmitCard", async (req, res) => {
    try {
        const newdata = new resturent({
            
            userId: req.body.userId,
            resturentName: req.body.resturentName,
            resturentEmail: req.body.resturentEmail,
            resturentPhone:req.body.resturentPhone
        });
        const result = await newdata.save();
        console.log("result===============", result);
        if (!result) {
            throw "data not saved in the db";
        }
        res.status(200).json({
            msg: "successfully",
            result: result
        });
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({
            msg: "error saving data",
            error: error.message
        });
    }
});
app.post("/getAlladmitcard", async (req, res) => {
    try {
        // const response = await resturent.find().populate("userId",  'name pinCode state')
        const response = await resturent.find({resturentEmail:body.resturentEmail})//.populate("userId",  'name pinCode state')

        if (!response) throw 'not found data'
        res.status(200).json({
            msg: "success",
            count: response.length,
            result: response
        });
    } catch (error) {
        res.status(508).json({
            error: "error data for api"
        })

    }
});



app.listen(3000, () => {
    console.log("saving your data port number 9000")
})