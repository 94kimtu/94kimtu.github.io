import axios from "axios";

const getInfoApi = async () => {
    const URI = process.env.REACT_APP_URI;
    const ACCESS_TOKEN1 = process.env.REACT_APP_ACCESS_TOKEN1;
    const ACCESS_TOKEN2 = process.env.REACT_APP_ACCESS_TOKEN2;
    const ACCESS_TOKEN3 = process.env.REACT_APP_ACCESS_TOKEN3;
    const ACCESS_TOKEN =
        String(ACCESS_TOKEN1) + String(ACCESS_TOKEN2) + String(ACCESS_TOKEN3);
    return await axios
        .get(`${URI}`, {
            params: {
                fields: "id,username,user_media,medi0a_type,permalink,media_url,timestamp,thumbnail_url,caption,is_shared_to_feed,children",
                access_token: `${ACCESS_TOKEN}`,
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
