const fs = require("fs");
const mongoose = require("mongoose");
mongoose.connect("Enter your on DB")
/*I have a collection comps set up in the db. The comps collection has a name property*/

const Schema = mongoose.Schema;
const Comp = mongoose.model("Comp",
            new Schema({name : String}),
            "comps" // put your collection name here
            );
mongoose.Promise = Promise;

function FindDocsFromDBAssociatedToImg(dirName){
    fs.readdir(dirName, function(err, filenames){
        if(err) console.log(err);
        console.log(filenames);
        filenames = filenames.map(e =>{
            return e.slice(0, e.lastIndexOf("-"))

        })
        Comp.find({name : {$in : filenames}}).count()
            .then(comp =>{
                console.log(comp)
            })
    })
}
FindDocsFromDBAssociatedToImg("resized55x45")
