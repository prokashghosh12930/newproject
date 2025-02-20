import axios, { AxiosHeaderValue } from 'axios';
import Urls from '../constants/Urls';
import { StatusCode } from './StatusCode';
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';
import EndPoint from './ApiEndpoint';
import { navigate } from '../navigation/navigationServices';
import * as Routes from "../navigation/Routes";

/**
 * Function that makes a GET API request using Axios without the authorization token
 * @param  endPoint Endpoint of the url to be requested
 * @return response Response JSON returned from the API
 */
export async function getApi(endpoint: string) {
  try {
    const BearerToken = await RNSecureStorage.getItem("key1-accessToken").catch((err) => {
      console.log(err)
    })

    return axios
      .get(Urls.baseUrl + endpoint, {
        headers: { Authorization: BearerToken as AxiosHeaderValue },
      })
      .then(response => {
        const responseJson = response.data;
        return responseJson;
      })
      .catch(async error => {
        console.log("🚀 ~ file: ApiRequest.ts:29 ~ getApi ~ error:", error)
        if (error?.response) {
          if (error.response.status == StatusCode.badRequest) {
            return errorHandler(error.response);
          } else if (error.response.status == StatusCode.unauthorized) {
            const flag = await callAccessToken();
            if (flag) {
              const data: any = await getApi(endpoint);
              return data;
            }
          } else {
            // navigate(Routes.ERROR_SCREEN);
            return { success: false, message: "Something went wrong" }
          }
        } else {
          // navigate(Routes.ERROR_SCREEN)
          return { success: false, message: "Something went wrong" }
        }
      });
  } catch (e) { }
}
/**
 * Function that makes a POST API request using Axios without the authorization token
 * @param  endPoint Endpoint of the url to be requested
 * @param  formdata Formdata to be sent in the body of the request
 * @return response Response JSON returned from the API
 */
export async function postRequestWithoutToken(
  endPoint: string,
  requestBody: object,
) {
  try {
    return axios
      .post(Urls.baseUrl + endPoint, requestBody)
      .then(response => {
        const responseJson = response.data;
        return responseJson;
      })
      .catch(async error => {
        console.log("🚀 ~ file: ApiRequest.ts:82 ~ error:", error)
        if (!error?.response) {
          return {
            response: {
              success: false,
              message: "Something went wrong"
            }
          }
        }
        if (error.response.status == StatusCode.badRequest) {
          return errorHandler(error.response);
        } else {
          return { success: false, message: "Something went wrong" }
        }
      });
  } catch (e) { }
}

/**
 * Function that makes a POST API request using Axios 
 * @param  endPoint Endpoint of the url to be requested
 * @param  formdata Formdata to be sent in the body of the request
 * @return response Response JSON returned from the API
 */
export async function postApi(
  endPoint: string,
  requestBody: object,
) {
  try {
    const BearerToken = await RNSecureStorage.getItem("key1-accessToken").catch((err) => {
      console.log(err)
    })
    return axios
      .post(Urls.baseUrl + endPoint, requestBody, {
        headers: { Authorization: BearerToken as AxiosHeaderValue },
      })
      .then(response => {
        const responseJson = response.data;
        return responseJson;
      })
      .catch(async error => {
        console.log("🚀 ~ file: ApiRequest.ts:91 ~ error:", error)
        if (error?.response) {
          if (error.response.status == StatusCode.badRequest) {
            return errorHandler(error.response);
          } else if (error.response.status == StatusCode.unauthorized) {
            const flag = await callAccessToken();
            if (flag) {
              const data: any = await postApi(endPoint, requestBody);
              return data;
            }
          } else {
            // navigate(Routes.ERROR_SCREEN);
            return { success: false, message: "Something went wrong" }
          }
        } else {
          return { success: false, message: "Something went wrong" }
        }
      });
  } catch (e) { }
}
/**
 * @name errorHandler
 * @param responseJson take error response and filter the data from an error.
 * @returns object of response.
 */
function errorHandler(responseJson: any) {
  if (responseJson?.data) {
    return responseJson.data;
  } else if (responseJson?.errors) {
    return responseJson.errors;
  } else if (responseJson?.message) {
    return responseJson.message;
  } else {
    var errorJSON = {
      success: "false",
      errors: 'Something went wrong',
    };
    return errorJSON;
  }
}

/**
 * Function that makes a GET API request using Axios without the authorization token
 * @param  endPoint Endpoint of the url to be requested
 * @return response Response JSON returned from the API
 */

export const callAccessToken = async () => {
  try {
    const refreshToken = await RNSecureStorage.getItem('key2-RefreshToken')
    if (refreshToken !== null) {
      const requestBody = {
        refresh_token: refreshToken,
      };
      return axios
        .post(`${Urls.baseUrl}${EndPoint.newAccessToken}`, requestBody)
        .then(response => {
          const responseJson = response.data.data;
          console.log("🚀 ~ file: ApiRequest.ts:174 ~ callAccessToken ~ responseJson:", responseJson)
          RNSecureStorage.setItem('key1-accessToken', responseJson.access_token, {
            accessible: ACCESSIBLE.WHEN_UNLOCKED,
          })
          return true;
        })
        .catch(async error => {
          RNSecureStorage.removeItem("key1-accessToken");
          RNSecureStorage.removeItem("key2-RefreshToken");
          RNSecureStorage.removeItem("key3-UserId");
          navigate(Routes.LOGIN);
          return false;
        });
    }
  } catch (e) {
    return false;
  }
};

export const showToken = async () => {
  const BearerToken = await RNSecureStorage.getItem("key1-accessToken").catch((err) => {
    console.log(err)
  })
  console.log("Token --\t", BearerToken);
}
/**
 * @description 
 * It is use to hit delete api when there was no body of delete. 
 * @param endPoint take end of delete request
 * @returns object
 */
export const deleteGetRequest = async (endPoint: string) => {
  try {
    const BearerToken = await RNSecureStorage.getItem("key1-accessToken").catch((err) => {
      console.log(err)
    });
    if (BearerToken !== null) {
      return axios
        .delete(Urls.baseUrl + endPoint, {
          headers: { Authorization: BearerToken as AxiosHeaderValue },
        })
        .then(response => {
          const responseJson = response.data;
          return responseJson;
        })
        .catch(async error => {
          console.log("🚀 ~ file: ApiRequest.ts:197 ~ deleteGetRequest ~ error:", error);
          if (error?.response) {
            if (error.response?.status === StatusCode.badRequest) {
              return errorHandler(error.response);
            } else if (error.response.status == StatusCode.unauthorized) {
              const flag = await callAccessToken();
              if (flag) {
                const data: any = await deleteGetRequest(endPoint);
                return data;
              }
            } else {
              //Show errors to users
              var errorJSON = {
                success: false,
                errors: 'Something went wrong',
              };
              return errorJSON;
            }
          } else {
            return { success: false, message: "Something went wrong" }
          }
        });
    }
  } catch (e) { }
}