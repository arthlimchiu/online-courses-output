import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID iBqynGP2AAIaU75e__kuHQz5c1ZQyt_LHdZgn_31hVk' }
});