import axios from 'axios';

const base = "/javaadmin";
export const userLoginApi = params => {
    return axios.post(`${base}/user/login`, params).then(res => res.data);
};

// 内部链接
export const internalLinkGetListApi = params => {
    return axios.get(`${base}/internalLink/getList`, { params} ).then(res => res.data);
};
, params).then(res => res.data);
};


