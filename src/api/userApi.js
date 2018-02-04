import axios from "axios";


class User {
    static async authenticated(credentials) {

        try {
<<<<<<< HEAD
            console.log("hello")
=======
            console.log("hello world")  
>>>>>>> a8ec4bbbac1e56051dd99191178c66cd589fea88
            let response = Promise.resolve(await axios.post("/login", credentials));
            return (response)
        }
        catch(error){
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