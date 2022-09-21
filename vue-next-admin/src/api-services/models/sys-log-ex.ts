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
 * 系统异常日志表
 * @export
 * @interface SysLogEx
 */
export interface SysLogEx {
    /**
     * 雪花Id
     * @type {number}
     * @memberof SysLogEx
     */
    id?: number;
    /**
     * 创建时间
     * @type {Date}
     * @memberof SysLogEx
     */
    createTime?: Date | null;
    /**
     * 更新时间
     * @type {Date}
     * @memberof SysLogEx
     */
    updateTime?: Date | null;
    /**
     * 创建者Id
     * @type {number}
     * @memberof SysLogEx
     */
    createUserId?: number | null;
    /**
     * 修改者Id
     * @type {number}
     * @memberof SysLogEx
     */
    updateUserId?: number | null;
    /**
     * 软删除
     * @type {boolean}
     * @memberof SysLogEx
     */
    isDelete?: boolean;
    /**
     * 日志名称
     * @type {string}
     * @memberof SysLogEx
     */
    logName?: string | null;
    /**
     * 日志级别
     * @type {string}
     * @memberof SysLogEx
     */
    logLevel?: string | null;
    /**
     * 事件Id
     * @type {string}
     * @memberof SysLogEx
     */
    eventId?: string | null;
    /**
     * 日志消息
     * @type {string}
     * @memberof SysLogEx
     */
    message?: string | null;
    /**
     * 异常对象
     * @type {string}
     * @memberof SysLogEx
     */
    exception?: string | null;
}
