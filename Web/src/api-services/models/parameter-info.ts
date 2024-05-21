/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET 通用权限开发平台
 * 让 .NET 开发更简单、更通用、更流行。整合最新技术，模块插件式开发，前后端分离，开箱即用。<br/><u><b><font color='FF0000'> 👮不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，我们不承担任何责任！</font></b></u>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { CustomAttributeData } from './custom-attribute-data';
import { MemberInfo } from './member-info';
import { ParameterAttributes } from './parameter-attributes';
import { Type } from './type';
 /**
 * 
 *
 * @export
 * @interface ParameterInfo
 */
export interface ParameterInfo {

    /**
     * @type {ParameterAttributes}
     * @memberof ParameterInfo
     */
    attributes?: ParameterAttributes;

    /**
     * @type {MemberInfo}
     * @memberof ParameterInfo
     */
    member?: MemberInfo;

    /**
     * @type {string}
     * @memberof ParameterInfo
     */
    name?: string | null;

    /**
     * @type {Type}
     * @memberof ParameterInfo
     */
    parameterType?: Type;

    /**
     * @type {number}
     * @memberof ParameterInfo
     */
    position?: number;

    /**
     * @type {boolean}
     * @memberof ParameterInfo
     */
    isIn?: boolean;

    /**
     * @type {boolean}
     * @memberof ParameterInfo
     */
    isLcid?: boolean;

    /**
     * @type {boolean}
     * @memberof ParameterInfo
     */
    isOptional?: boolean;

    /**
     * @type {boolean}
     * @memberof ParameterInfo
     */
    isOut?: boolean;

    /**
     * @type {boolean}
     * @memberof ParameterInfo
     */
    isRetval?: boolean;

    /**
     * @type {any}
     * @memberof ParameterInfo
     */
    defaultValue?: any | null;

    /**
     * @type {any}
     * @memberof ParameterInfo
     */
    rawDefaultValue?: any | null;

    /**
     * @type {boolean}
     * @memberof ParameterInfo
     */
    hasDefaultValue?: boolean;

    /**
     * @type {Array<CustomAttributeData>}
     * @memberof ParameterInfo
     */
    customAttributes?: Array<CustomAttributeData> | null;

    /**
     * @type {number}
     * @memberof ParameterInfo
     */
    metadataToken?: number;
}