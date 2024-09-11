import Conversation from "../models/Conversation.model.js";




// export const getConversation = async (req, res) => {
//     try {
//         // console.log("trew")
//         const senderId = req.body.senderId;
//         const receiverId = req.body.receiverId;
//         const conversationData = await conversation.findOne({ members: { $all: [receiverId, senderId] } });
//         return res.status(200).json(conversationData);
//     } catch (error) {
//         // Fix: Use res.status(500) and then .json() to send the error response
//         return res.status(500).json({ message: "Some error occurred in getConversation", error: error.message });
//     }
// };






// export const newConversation = async (request, response) => {
//     let senderId = request.body.senderId;
//     let receiverId = request.body.receiverId;

//     const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId]  }})
    
//     if(exist) {
//         response.status(200).json('conversation already exists');
//         return;
//     }
//     const newConversation = new Conversation({
//         members: [senderId, receiverId]
//     });

//     try {
//         const savedConversation = await newConversation.save();
//         response.status(200).json(savedConversation);
//     } catch (error) {
//         response.status(500).json(error);
//     }

// }

export const newConversation = async (req, res) => {
    try {
        const { senderId, receiverId } = req.body;
        let conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] }
        });

        if (!conversation) {
            conversation = new Conversation({
                members: [senderId, receiverId]
            });
            await conversation.save();
        }

        return res.status(200).json(conversation);
    } catch (error) {
        console.log('Error while creating or fetching conversation:', error);
        return res.status(500).json('Error while creating or fetching conversation');
    }
};


export const getConversation = async (request, response) => {
    try {
        const conversation = await Conversation.findOne({ members: { $all: [ request.body.senderId, request.body.receiverId] }});
        response.status(200).json(conversation);
    } catch (error) {
        response.status(500).json(error);
    }

}


