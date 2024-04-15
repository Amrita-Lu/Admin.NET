/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET 通用权限开发平台
 * 让 .NET 开发更简单、更通用、更流行。整合最新技术，模块插件式开发，前后端分离，开箱即用。<br/><u><b><font color='FF0000'> 👮不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，均与作者无关！</font></b></u>
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
import { AdminResultObject } from '../models';
/**
 * SysServerApi - axios parameter creator
 * @export
 */
export const SysServerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 获取框架主要程序集 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysServerAssemblyListGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysServer/assemblyList`;
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
         * @summary 获取服务器配置信息 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysServerServerBaseGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysServer/serverBase`;
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
         * @summary 获取服务器磁盘信息 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysServerServerDiskGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysServer/serverDisk`;
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
         * @summary 获取服务器使用信息 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSysServerServerUsedGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sysServer/serverUsed`;
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
    }
};

/**
 * SysServerApi - functional programming interface
 * @export
 */
export const SysServerApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary 获取框架主要程序集 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysServerAssemblyListGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultObject>>> {
            const localVarAxiosArgs = await SysServerApiAxiosParamCreator(configuration).apiSysServerAssemblyListGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取服务器配置信息 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysServerServerBaseGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultObject>>> {
            const localVarAxiosArgs = await SysServerApiAxiosParamCreator(configuration).apiSysServerServerBaseGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取服务器磁盘信息 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysServerServerDiskGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultObject>>> {
            const localVarAxiosArgs = await SysServerApiAxiosParamCreator(configuration).apiSysServerServerDiskGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary 获取服务器使用信息 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysServerServerUsedGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<AdminResultObject>>> {
            const localVarAxiosArgs = await SysServerApiAxiosParamCreator(configuration).apiSysServerServerUsedGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SysServerApi - factory interface
 * @export
 */
export const SysServerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary 获取框架主要程序集 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysServerAssemblyListGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultObject>> {
            return SysServerApiFp(configuration).apiSysServerAssemblyListGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取服务器配置信息 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysServerServerBaseGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultObject>> {
            return SysServerApiFp(configuration).apiSysServerServerBaseGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取服务器磁盘信息 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysServerServerDiskGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultObject>> {
            return SysServerApiFp(configuration).apiSysServerServerDiskGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary 获取服务器使用信息 🔖
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSysServerServerUsedGet(options?: AxiosRequestConfig): Promise<AxiosResponse<AdminResultObject>> {
            return SysServerApiFp(configuration).apiSysServerServerUsedGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SysServerApi - object-oriented interface
 * @export
 * @class SysServerApi
 * @extends {BaseAPI}
 */
export class SysServerApi extends BaseAPI {
    /**
     * 
     * @summary 获取框架主要程序集 🔖
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysServerApi
     */
    public async apiSysServerAssemblyListGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultObject>> {
        return SysServerApiFp(this.configuration).apiSysServerAssemblyListGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取服务器配置信息 🔖
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysServerApi
     */
    public async apiSysServerServerBaseGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultObject>> {
        return SysServerApiFp(this.configuration).apiSysServerServerBaseGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取服务器磁盘信息 🔖
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysServerApi
     */
    public async apiSysServerServerDiskGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultObject>> {
        return SysServerApiFp(this.configuration).apiSysServerServerDiskGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary 获取服务器使用信息 🔖
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SysServerApi
     */
    public async apiSysServerServerUsedGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<AdminResultObject>> {
        return SysServerApiFp(this.configuration).apiSysServerServerUsedGet(options).then((request) => request(this.axios, this.basePath));
    }
}
