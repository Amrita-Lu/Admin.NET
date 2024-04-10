/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET 通用权限开发平台
 * 让 .NET 开发更简单、更通用、更流行。前后端分离架构(.NET6/Vue3)，开箱即用紧随前沿技术。<br/>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AddOpenAccessInput } from '../models';
import { AdminResultSqlSugarPagedListOpenAccessOutput } from '../models';
import { AdminResultString } from '../models';
import { DeleteOpenAccessInput } from '../models';
import { HttpMethodEnum } from '../models';
import { OpenAccessInput } from '../models';
import { UpdateOpenAccessInput } from '../models';
/**
 * SysOpenAccessApi - axios parameter creator
 * @export
 */
export const SysOpenAccessApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加开放接口身份
         * @param {AddOpenAccessInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysOpenAccessAddPost: async (body?: AddOpenAccessInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysOpenAccess/add`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 删除开放接口身份
         * @param {DeleteOpenAccessInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysOpenAccessDeletePost: async (body?: DeleteOpenAccessInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysOpenAccess/delete`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取生成的签名
         * @param {string} appSecret 密钥
         * @param {string} accessKey 身份标识
         * @param {string} url 请求接口地址
         * @param {HttpMethodEnum} [method] 请求方法
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysOpenAccessGenerateSignatureGet: async (appSecret: string, accessKey: string, url: string, method?: HttpMethodEnum, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'appSecret' is not null or undefined
            if (appSecret === null || appSecret === undefined) {
                throw new RequiredError('appSecret','Required parameter appSecret was null or undefined when calling apiSysOpenAccessGenerateSignatureGet.');
            }
            // verify required parameter 'accessKey' is not null or undefined
            if (accessKey === null || accessKey === undefined) {
                throw new RequiredError('accessKey','Required parameter accessKey was null or undefined when calling apiSysOpenAccessGenerateSignatureGet.');
            }
            // verify required parameter 'url' is not null or undefined
            if (url === null || url === undefined) {
                throw new RequiredError('url','Required parameter url was null or undefined when calling apiSysOpenAccessGenerateSignatureGet.');
            }
            const localVarPath = `/api/sysOpenAccess/generateSignature`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (appSecret !== undefined) {
                localVarQueryParameter['AppSecret'] = appSecret;
            }

            if (accessKey !== undefined) {
                localVarQueryParameter['AccessKey'] = accessKey;
            }

            if (method !== undefined) {
                localVarQueryParameter['Method'] = method;
            }

            if (url !== undefined) {
                localVarQueryParameter['Url'] = url;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 获取开放接口身份分页列表
         * @param {OpenAccessInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysOpenAccessPagePost: async (body?: OpenAccessInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysOpenAccess/page`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 创建密钥
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysOpenAccessSecretPost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysOpenAccess/secret`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary 更新开放接口身份
         * @param {UpdateOpenAccessInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysOpenAccessUpdatePost: async (body?: UpdateOpenAccessInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysOpenAccess/update`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SysOpenAccessApi - functional programming interface
 * @export
 */
export const SysOpenAccessApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 增加开放接口身份
         * @param {AddOpenAccessInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysOpenAccessAddPost(body?: AddOpenAccessInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysOpenAccessApiAxiosParamCreator(configuration).apiSysOpenAccessAddPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 删除开放接口身份
         * @param {DeleteOpenAccessInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysOpenAccessDeletePost(body?: DeleteOpenAccessInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysOpenAccessApiAxiosParamCreator(configuration).apiSysOpenAccessDeletePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取生成的签名
         * @param {string} appSecret 密钥
         * @param {string} accessKey 身份标识
         * @param {string} url 请求接口地址
         * @param {HttpMethodEnum} [method] 请求方法
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysOpenAccessGenerateSignatureGet(appSecret: string, accessKey: string, url: string, method?: HttpMethodEnum, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultString>>> {
            const localVarAxiosArgs = await SysOpenAccessApiAxiosParamCreator(configuration).apiSysOpenAccessGenerateSignatureGet(appSecret, accessKey, url, method, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取开放接口身份分页列表
         * @param {OpenAccessInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysOpenAccessPagePost(body?: OpenAccessInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultSqlSugarPagedListOpenAccessOutput>>> {
            const localVarAxiosArgs = await SysOpenAccessApiAxiosParamCreator(configuration).apiSysOpenAccessPagePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 创建密钥
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysOpenAccessSecretPost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultString>>> {
            const localVarAxiosArgs = await SysOpenAccessApiAxiosParamCreator(configuration).apiSysOpenAccessSecretPost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 更新开放接口身份
         * @param {UpdateOpenAccessInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysOpenAccessUpdatePost(body?: UpdateOpenAccessInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SysOpenAccessApiAxiosParamCreator(configuration).apiSysOpenAccessUpdatePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysOpenAccessApi - factory interface
 * @export
 */
export const SysOpenAccessApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 增加开放接口身份
         * @param {AddOpenAccessInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysOpenAccessAddPost(body?: AddOpenAccessInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysOpenAccessApiFp(configuration).apiSysOpenAccessAddPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 删除开放接口身份
         * @param {DeleteOpenAccessInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysOpenAccessDeletePost(body?: DeleteOpenAccessInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysOpenAccessApiFp(configuration).apiSysOpenAccessDeletePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取生成的签名
         * @param {string} appSecret 密钥
         * @param {string} accessKey 身份标识
         * @param {string} url 请求接口地址
         * @param {HttpMethodEnum} [method] 请求方法
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysOpenAccessGenerateSignatureGet(appSecret: string, accessKey: string, url: string, method?: HttpMethodEnum, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultString>> {
            return SysOpenAccessApiFp(configuration).apiSysOpenAccessGenerateSignatureGet(appSecret, accessKey, url, method, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取开放接口身份分页列表
         * @param {OpenAccessInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysOpenAccessPagePost(body?: OpenAccessInput, options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultSqlSugarPagedListOpenAccessOutput>> {
            return SysOpenAccessApiFp(configuration).apiSysOpenAccessPagePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 创建密钥
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysOpenAccessSecretPost(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultString>> {
            return SysOpenAccessApiFp(configuration).apiSysOpenAccessSecretPost(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 更新开放接口身份
         * @param {UpdateOpenAccessInput} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysOpenAccessUpdatePost(body?: UpdateOpenAccessInput, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SysOpenAccessApiFp(configuration).apiSysOpenAccessUpdatePost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysOpenAccessApi - object-oriented interface
 * @export
 * @class SysOpenAccessApi
 * @extends {BaseAPI}
 */
export class SysOpenAccessApi extends BaseAPI {
    /**
     * 
     * @summary 增加开放接口身份
     * @param {AddOpenAccessInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysOpenAccessApi
     */
    public async apiSysOpenAccessAddPost(body?: AddOpenAccessInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysOpenAccessApiFp(this.configuration).apiSysOpenAccessAddPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 删除开放接口身份
     * @param {DeleteOpenAccessInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysOpenAccessApi
     */
    public async apiSysOpenAccessDeletePost(body?: DeleteOpenAccessInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysOpenAccessApiFp(this.configuration).apiSysOpenAccessDeletePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取生成的签名
     * @param {string} appSecret 密钥
     * @param {string} accessKey 身份标识
     * @param {string} url 请求接口地址
     * @param {HttpMethodEnum} [method] 请求方法
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysOpenAccessApi
     */
    public async apiSysOpenAccessGenerateSignatureGet(appSecret: string, accessKey: string, url: string, method?: HttpMethodEnum, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultString>> {
        return SysOpenAccessApiFp(this.configuration).apiSysOpenAccessGenerateSignatureGet(appSecret, accessKey, url, method, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取开放接口身份分页列表
     * @param {OpenAccessInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysOpenAccessApi
     */
    public async apiSysOpenAccessPagePost(body?: OpenAccessInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultSqlSugarPagedListOpenAccessOutput>> {
        return SysOpenAccessApiFp(this.configuration).apiSysOpenAccessPagePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 创建密钥
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysOpenAccessApi
     */
    public async apiSysOpenAccessSecretPost(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultString>> {
        return SysOpenAccessApiFp(this.configuration).apiSysOpenAccessSecretPost(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 更新开放接口身份
     * @param {UpdateOpenAccessInput} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysOpenAccessApi
     */
    public async apiSysOpenAccessUpdatePost(body?: UpdateOpenAccessInput, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SysOpenAccessApiFp(this.configuration).apiSysOpenAccessUpdatePost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
