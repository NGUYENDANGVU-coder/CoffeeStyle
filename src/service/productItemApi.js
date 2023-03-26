import apiConfig from "../apiConfig/apiConfig";

const productItemApi = async(id)=>{
    try {
        const res= await apiConfig.get(`/products/${id}`)
        return res.data
    } catch (error) {
        
    }
}

export default productItemApi;