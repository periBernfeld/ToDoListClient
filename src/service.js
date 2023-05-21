import axios from 'axios';
//עשיתי שינוי אם לא יעבוד לשנות ולקחת את השורה הראשונה
// axios.defaults.baseURL = process.env.REACT_APP_API;

//  axios.defaults.baseURL = `https:localhost:7083`;

// const apiUrl = "http://localhost:7083"
// const apiClient = axios.create({
//   baseURL: "http://localhost:7083",
// });
const apiUrl =process.env.REACT_APP_API;
const apiClient=axios.create({
  baseURL:process.env.REACT_APP_API,
});
axios.defaults.baseURL=apiUrl;

export default {
  getTasks: async () => {
    const result = await axios.get(`/items`)    
    return result.data;
  },


  addTask: async(name)=>{
    const result = await axios.post(`/items`,{name:name,isComplete:false})    
    return result.data;
  },

 
  setCompleted: async (id, isComplete) => {
        console.log('setCompleted', {id, isComplete})
 const result = await axios.put(`/items/${id}`,{isComplete:isComplete}) 

    // await axios.put(`/items/${id}?isComplete=${isComplete}`)
      return result.data;

  },


  deleteTask:async(id)=>{
    console.log('deleteTask')
    const result = await axios.delete(`/items/${id}`)    
    return result.data;
  }
};


// axios.interceptors.response.use(function (response) {
//   return response;
// }, function (error) {
//   console.error(error);
//   return Promise.reject(error);
// });

axios.interceptors.response.use(
  response => response,
  error => {
    console.error(error);
    return Promise.reject(error);
  }
);










