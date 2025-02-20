
export const StatusCode = {
    // Successful
    ok: 200,
    created: 201,
    accepted: 202,
    noContent: 204,
    resetContent: 205,
    // Client errors
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    requestTimeout: 408,
    // Server errors
    internalServerError: 500,
    notImplemented: 501,
    badGateway: 502,
    serviceUnavailable: 503,
    gatewayTimeout: 504,
    preconditionalError: 412,
};
