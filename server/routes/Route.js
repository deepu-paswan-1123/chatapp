import express from 'express'
import {addUser} from '../controllers/User.controllers.js';
import { getUser } from '../controllers/User.controllers.js';
import { newConversation } from '../controllers/Conversation.controllers.js';
import { getConversation } from '../controllers/Conversation.controllers.js';
import { newMessage } from '../controllers/addFooterMessage.controllers.js';
import { getMessage } from '../controllers/addFooterMessage.controllers.js';

const route=express.Router()


route.post('/add',addUser);
route.get('/chatusers',getUser);

route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);

route.post('/message/add',newMessage);
route.get('/message/get/:id',getMessage)   //here :id is a params which id hit here that should also be hit in
//params
// route.post('/message/get', getMessages);

export default route;