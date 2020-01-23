var mongoose = require('mongoose');

var connectingschema = new mongoose.Schema({
  
    doc_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'document'
    },
    created_by: String,
    date: { type: Date },
    document_name: String,
});

module.exports = mongoose.model("drivemodel", connectingschema);