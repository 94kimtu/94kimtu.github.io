import axios from "axios";

const ACCESS_TOKEN1 = process.env.REACT_APP_ACCESS_TOKEN1;
const ACCESS_TOKEN2 = process.env.REACT_APP_ACCESS_TOKEN2;
const ACCESS_TOKEN3 = process.env.REACT_APP_ACCESS_TOKEN3;
const ACCESS_TOKEN =
    String(ACCESS_TOKEN1) + String(ACCESS_TOKEN2) + String(ACCESS_TOKEN3);
const FIELDS =
    "id,username,user_media,medi0a_type,permalink,media_url,timestamp,thumbnail_url,caption,is_shared_to_feed,children";
const URI = process.env.REACT_APP_URI;

export const getInfoApi = async () => {
    return await axios
        .get(`${URI}`, {
            params: {
                fields: FIELDS,
                access_token: `${ACCESS_TOKEN}`,
                limit: 6,
            },
        })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.log(err);
        });
};
export const getNextApi = async (next: string) => {
    return await axios
        .get(`${next}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.log(err);
        });
};
export const getprevApi = async (prev: string) => {
    return await axios
        .get(`${prev}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.log(err);
        });
};

export default getInfoApi;
