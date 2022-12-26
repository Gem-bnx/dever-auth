import axios from 'axios';
export const signUp = async (user) => {
    const option = {
        method: 'POST',
        url: 'https://dever-auth.onrender.com/api/v1/auth/register',
        data: user
    }
    const response = await axios(option)
    console.log(response)
    return true;
}

export const login = async (user) => {
    const option = {
        method: 'POST',
        url: 'https://dever-auth.onrender.com/api/v1/auth/login',
        data: user
    }
    const response = await axios(option)
    console.log(response);
    return true;
}
export const getUsers = async () => {
    console.log('hiii');
    const users = await axios
    .get('https://dever-auth.onrender.com/api/v1/get-users/latest')
    .then((response) => {
        console.log(response)
    })
    // console.log(users)
    // const hero = await axios
    //   .get("https://api.opendota.com/api/heroStats")
    //   .then((res) => res.data)
    //   console.log(res);
}