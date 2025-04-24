import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const USER_ENDPOINT = "api/v1/users"

const USER_API_URL = API_BASE_URL + USER_ENDPOINT

// Private Route: test protected endpoint
export const getUser =  async (token) => {
    const response = await axios
                            .get(
                                USER_API_URL+"/protected",
                                {
                                    headers: {
                                        Authorization:`Bearer ${token}`
                                    }
                                }
                            )
                            .then(res => res.data)
                            .catch(e => console.log(e));
    return response;
}