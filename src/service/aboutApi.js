import apiConfig from "../apiConfig/apiConfig";

const aboutApi = async()=>{
    try {
        const res= await apiConfig.get('/about')
        return res.data
    } catch (error) {
        
    }
}

export default aboutApi;