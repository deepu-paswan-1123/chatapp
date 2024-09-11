// import mongoose from "mongoose";

// const ConversationSchema = new mongoose.Schema(
//     {
//         members:{
//             type:Array,
//         },
//         messages:{
//             type:String,
//         }
//     },
//     {
//         timestamps:true,
//     }
// );

// const conversation=mongoose.model('conversation',ConversationSchema);

// export default conversation;



import mongoose from 'mongoose';

const ConversationSchema = new mongoose.Schema({
    members: {
        type: Array
    },
    message: {
        type: String
    }},
    {
        timestamps: true
    }
);

const conversation = mongoose.model('Conversation', ConversationSchema);

export default conversation;





// import mongoose from "mongoose";

// const ConversationSchema = new mongoose.Schema(
//     {
//         members: {
//             type: Array,
//         },
//         messages: [{  // This should be an array of message IDs
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'message'
//         }],
//     },
//     {
//         timestamps: true,
//     }
// );


// const Conversation = mongoose.model('Conversation', ConversationSchema);
// export default Conversation;


