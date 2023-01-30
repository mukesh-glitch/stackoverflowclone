import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:5000' })

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    // console.log(req.headers.authorization)
  }
  return req;
})


export const fetchAllUser = () => API.get('/user/getAllUsers')
// AUTHENTICATION API
export const login = (authData) => API.post('/user/login', authData);
export const signup = (authData) => API.post('/user/signup', authData);

// QUESTIONS API 
export const postQuestion = (questionData) => API.post('/question/ask', questionData)
export const getAllQuestions = () => API.get('/question/get')
export const voteQuestion = (id, value, userId) => API.patch(`/question/vote/${id}`, { value, userId })
export const deleteQuestion = (id) => API.delete(`/question/delete/${id}`)


// ANWERS API
export const postAnswer = (id, noOfAnswer, answerBody, userAnswered, userId) => API.patch(`/Answer/post/${id}`, { noOfAnswer, answerBody, userAnswered, userId })
export const deleteAnswer = (id, answerId, noOfAnswer) => API.patch(`/Answer/delete/${id}`, { answerId, noOfAnswer })
export const updateProfile = (id, updateData) => API.patch(`user/update/${id}`, updateData)