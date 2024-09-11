import Message from "../models/FooterMessage.model.js"
import Conversation from "../models/Conversation.model.js";

// export const newMessage= async (req,res)=>{
//     try{
//         const newMessage = new message(req.body);
//         await newMessage.save();
//         await conversation.findByIdAndUpdate(req.body.conversationId,{messages:req.body.text});

//         return res.status(200).json("message has been sent successfully ");
//     }
//     catch(error){
//         console.error("Error while sending a message:", error.message);
//         return res.status(500).json("something is wrong during send a message ",error.message);
//     }
// }

// export const getMessages = async (req, res) => {
//     try {
//         console.log("Fetching messages for conversationId:", req.params.id);

//         // Find messages by conversationId
//         const messages = await message.find({ conversationId: req.params.id });

//         console.log("Fetched messages:", messages);
//         return res.status(200).json(messages);
//     } catch (error) {
//         console.error("Error in getMessages:", error.message);
//         return res.status(500).json("Messages not fetched properly");
//     }
// };






// Controller to get messages for a conversation






export const newMessage = async (request, response) => {
    const newMessage = new Message(request.body);
    try {
        await newMessage.save();
        await Conversation.findByIdAndUpdate(request.body.conversationId, { message: request.body.text });
        response.status(200).json("Message has been sent successfully");
    } catch (error) {
        response.status(500).json(error);
    }

}

export const getMessage = async (request, response) => {
    try {
        const messages = await Message.find({ conversationId: request.params.id });
        response.status(200).json(messages);
    } catch (error) {
        response.status(500).json(error);
    }

}