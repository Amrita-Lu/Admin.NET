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

 /**
 * 
 *
 * @export
 * @interface AddOpenAccessInput
 */
export interface AddOpenAccessInput {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof AddOpenAccessInput
     */
    id?: number;

    /**
     * 创建时间
     *
     * @type {Date}
     * @memberof AddOpenAccessInput
     */
    createTime?: Date | null;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof AddOpenAccessInput
     */
    updateTime?: Date | null;

    /**
     * 创建者Id
     *
     * @type {number}
     * @memberof AddOpenAccessInput
     */
    createUserId?: number | null;

    /**
     * 创建者姓名
     *
     * @type {string}
     * @memberof AddOpenAccessInput
     */
    createUserName?: string | null;

    /**
     * 修改者Id
     *
     * @type {number}
     * @memberof AddOpenAccessInput
     */
    updateUserId?: number | null;

    /**
     * 修改者姓名
     *
     * @type {string}
     * @memberof AddOpenAccessInput
     */
    updateUserName?: string | null;

    /**
     * 软删除
     *
     * @type {boolean}
     * @memberof AddOpenAccessInput
     */
    isDelete?: boolean;

    /**
     * 绑定租户Id
     *
     * @type {number}
     * @memberof AddOpenAccessInput
     */
    bindTenantId?: number;

    /**
     * 身份标识
     *
     * @type {string}
     * @memberof AddOpenAccessInput
     */
    accessKey: string;

    /**
     * 密钥
     *
     * @type {string}
     * @memberof AddOpenAccessInput
     */
    accessSecret: string;

    /**
     * 绑定用户Id
     *
     * @type {number}
     * @memberof AddOpenAccessInput
     */
    bindUserId: number;
}
