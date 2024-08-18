import axios from "axios";

const getInfoApi = async () => {
    const URI = process.env.REACT_APP_API_URI;
    const ACCESS_TOKEN = process.env.REACT_APP_ACESS_TOKEN;
    return await axios
        .get(`${URI}`, {
            params: {
                fields: "id,username,user_media,medi0a_type,permalink,media_url,timestamp,thumbnail_url,caption,is_shared_to_feed,children",
                access_token: ACCESS_TOKEN,
            },
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

export default getInfoApi;
