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
 * @interface UpdateDictDataInput
 */
export interface UpdateDictDataInput {
    /**
     * 主键Id
     * @type {number}
     * @memberof UpdateDictDataInput
     */
    id: number;
    /**
     * 字典类型Id
     * @type {number}
     * @memberof UpdateDictDataInput
     */
    dictTypeId?: number;
    /**
     * 值
     * @type {string}
     * @memberof UpdateDictDataInput
     */
    value?: string | null;
    /**
     * 编码
     * @type {string}
     * @memberof UpdateDictDataInput
     */
    code?: string | null;
    /**
     * 排序
     * @type {number}
     * @memberof UpdateDictDataInput
     */
    order?: number;
    /**
     * 备注
     * @type {string}
     * @memberof UpdateDictDataInput
     */
    remark?: string | null;
    /**
     * 状态
     * @type {number}
     * @memberof UpdateDictDataInput
     */
    status?: number;
}
