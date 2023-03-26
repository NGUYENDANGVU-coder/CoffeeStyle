import apiConfig from "../apiConfig/apiConfig";

const productApi = async()=>{
    try {
        const res= await apiConfig.get('/products')
        return res.data
    } catch (error) {
        
    }
}

export default productApi;