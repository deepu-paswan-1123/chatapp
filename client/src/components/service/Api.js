import axios from 'axios'


const url= "http://localhost:8000";



export const AddUser = async (data) => {
  console.log("AddUser called with data:", data);
  try {
    const response = await axios.post(`${url}/add`, data);
    console.log("AddUser response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error in AddUser:", error.response ? error.response.data : error.message);
    throw error;
  }
};


export const getUser= async()=>{
  try{
    const response=await axios.get(`${url}/chatusers`);
    console.log(response);
    return response.data;
  }catch(error){
    console.log("error while calling the getuser api ",error.message)
  }

};

export const setConversation= async(data)=>{
  try{
    await axios.post(`${url}/conversation/add`,data)
    console.log("the setconversation",data);
  }catch(error){
    console.log("error while calling the conversation set api ",error.message)
  }
};




export const getConversation = async (users) => {
  try {
      let response = await axios.post(`${url}/conversation/get`, users);
      return response.data;
  } catch (error) {
      console.log('Error while calling getConversation API ', error);
  }
}



export const newMessage= async(data)=>{
  try{
    await axios.post(`${url}/message/add`,data)
    console.log("conversation id of newMessage ",data)
  }catch(error){
    console.log("error while calling the newFooterTextMessage ", error.message);
  }
}






export const getMessages = async (id) => {
  try {
      let response = await axios.get(`${url}/message/get/${id}`);
      return response.data
  } catch (error) {
      console.log('Error while calling getMessages API ', error);
  }
}