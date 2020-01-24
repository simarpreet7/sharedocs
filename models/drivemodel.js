var mongoose = require('mongoose');

var connectingschema = new mongoose.Schema({
  
    doc_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'document'
    },
    date: { type: Date },
    user_id:String,
    permission:{ type: String, default: "o" },
    document_name: String,
});

module.exports = mongoose.model("drivemodel", connectingschema);