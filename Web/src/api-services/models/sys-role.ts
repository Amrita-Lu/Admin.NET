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

import { DataScopeEnum } from './data-scope-enum';
import { StatusEnum } from './status-enum';
 /**
 * 系统角色表
 *
 * @export
 * @interface SysRole
 */
export interface SysRole {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof SysRole
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof SysRole
     */
    createTime?: Date | null;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof SysRole
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof SysRole
     */
    createUserId?: number | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof SysRole
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof SysRole
     */
    updateUserId?: number | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof SysRole
     */
    updateUserName?: string | null;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof SysRole
     */
    isDelete?: boolean;

    /**
     * 租户Id
     *
     * @type {number}
     * @memberof SysRole
     */
    tenantId?: number | null;

    /**
     * 名称
     *
     * @type {string}
     * @memberof SysRole
     */
    name: string;

    /**
     * 编码
     *
     * @type {string}
     * @memberof SysRole
     */
    code?: string | null;

    /**
     * 排序
     *
     * @type {number}
     * @memberof SysRole
     */
    orderNo?: number;

    /**
     * @type {DataScopeEnum}
     * @memberof SysRole
     */
    dataScope?: DataScopeEnum;

    /**
     * 备注
     *
     * @type {string}
     * @memberof SysRole
     */
    remark?: string | null;

    /**
     * @type {StatusEnum}
     * @memberof SysRole
     */
    status?: StatusEnum;
}
