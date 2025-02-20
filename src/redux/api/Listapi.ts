import EndPoint from "../../api/ApiEndpoint"
import { getApi } from "../../api/ApiRequest"

export const getTestListData = async () => {
    const response = await getApi(`${EndPoint.products}?limit=10`);
    return response;
}