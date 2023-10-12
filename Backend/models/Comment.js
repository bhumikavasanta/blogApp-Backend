const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const CommentSchema = new Schema({
//   title:String,
  message:String,
  // content:String,
  // cover:String,
  author:{type:Schema.Types.ObjectId, ref:'User'},
}, {
  timestamps: true,
});

const CommentModel = model('Comment', CommentSchema);

module.exports = CommentModel;