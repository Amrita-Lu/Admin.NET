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
 * 授权角色机构
 *
 * @export
 * @interface RoleOrgInput
 */
export interface RoleOrgInput {

    /**
     * 主键Id
     *
     * @type {number}
     * @memberof RoleOrgInput
     */
    id: number;

    /**
     * 数据范围
     *
     * @type {number}
     * @memberof RoleOrgInput
     */
    dataScope?: number;

    /**
     * 机构Id集合
     *
     * @type {Array<number>}
     * @memberof RoleOrgInput
     */
    orgIdList?: Array<number> | null;
}
