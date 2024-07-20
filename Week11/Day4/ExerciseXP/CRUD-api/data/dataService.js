const axios = require('axios')

async function fetchPosts(){
try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
} catch (error) {
    console.log(error);
}
}
//fetchPosts()
//'https://jsonplaceholder.typicode.com/posts'
module.exports = {
fetchPosts
}