/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET
 * 让 .NET 开发更简单、更通用、更流行。前后端分离架构(.NET6/Vue3)，开箱即用紧随前沿技术。<br/><a href='https://gitee.com/zuohuaijun/Admin.NET/'>https://gitee.com/zuohuaijun/Admin.NET</a>
 *
 * OpenAPI spec version: 1.0.0
 * Contact: 515096995@qq.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface AddPosInput
 */
export interface AddPosInput {
    /**
     * 主键Id
     * @type {number}
     * @memberof AddPosInput
     */
    id: number;
    /**
     * 编码
     * @type {string}
     * @memberof AddPosInput
     */
    code?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof AddPosInput
     */
    order?: number;
    /**
     * 备注
     * @type {string}
     * @memberof AddPosInput
     */
    remark?: string | null;
    /**
     * 状态
     * @type {number}
     * @memberof AddPosInput
     */
    status?: number;
    /**
     * 名称
     * @type {string}
     * @memberof AddPosInput
     */
    name: string;
}
