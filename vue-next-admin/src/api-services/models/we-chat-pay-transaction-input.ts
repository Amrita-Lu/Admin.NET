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
 * @interface WeChatPayTransactionInput
 */
export interface WeChatPayTransactionInput {
    /**
     * OpenId
     * @type {string}
     * @memberof WeChatPayTransactionInput
     */
    openId?: string | null;
    /**
     * 订单金额
     * @type {number}
     * @memberof WeChatPayTransactionInput
     */
    total?: number;
    /**
     * 商品描述
     * @type {string}
     * @memberof WeChatPayTransactionInput
     */
    description?: string | null;
    /**
     * 附加数据
     * @type {string}
     * @memberof WeChatPayTransactionInput
     */
    attachment?: string | null;
    /**
     * 优惠标记
     * @type {string}
     * @memberof WeChatPayTransactionInput
     */
    goodsTag?: string | null;
}
