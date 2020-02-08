var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var connectingschema = new mongoose.Schema({
  
    doc_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'document'
    },
    date: { type: Date ,default:Date.now},
    user_id:String,
    permission:{ type: String, default: "o" },
    document_name: String,
    
});
connectingschema.index({ user_id: 1, document_name: 1 }, { unique: true })
connectingschema.plugin(uniqueValidator);
module.exports = mongoose.model("drivemodel", connectingschema);