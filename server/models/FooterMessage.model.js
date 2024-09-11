// import mongoose from "mongoose";
// const FooterMessageSchema = new mongoose.Schema(
//     {
//         conversationId: {
//             type: String,
//             required: true
//         },
//         senderId: {
//             type: String,
//             required: true
//         },
//         receiverId: {
//             type: String,
//             required: true
//         },
//         text: {
//             type: String,
//             required: true
//         },
//         type: {
//             type: String,
//             required: true
//         }
//     },
//     {
//         timestamps: true
//     }
// );


// const Message = mongoose.model('Message', FooterMessageSchema);
// export default Message;








import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
    conversationId: {
        type: String
    },
    senderId: {
        type: String
    },
    receiverId: {
        type: String
    },
    text: {
        type: String
    },
    type: {
        type: String
    }
},
{ 
        timestamps: true
})

const message = mongoose.model('Message', MessageSchema);

export default message;