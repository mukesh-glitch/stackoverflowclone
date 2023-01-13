import * as api from "../api"

export const fetchAllUserAction = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllUser()
    dispatch({ type: "FETCH_ALL_USER", payload: data })
  } catch (error) {
    console.log(error)
  }
}