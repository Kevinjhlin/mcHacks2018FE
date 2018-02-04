import axios from "axios";


class User {
    static async authenticated(credentials) {
        try {
            console.log("hello")
            let response = Promise.resolve(await axios.post("/login", credentials));
            return (response)
        }
        catch(error){
            console.log(error)
            throw Promise.resolve(error)
        }
    }
}

export default User
/*
  export const login = async (credentials) => {
  try {
    let authenicated = await axios.post("/login", credentials);
    return authenicated;
  } catch (error) {
    throw error;
  }
};
*/