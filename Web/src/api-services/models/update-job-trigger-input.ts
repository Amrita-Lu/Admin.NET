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

import { TriggerStatus } from './trigger-status';
 /**
 * 
 *
 * @export
 * @interface UpdateJobTriggerInput
 */
export interface UpdateJobTriggerInput {

    /**
     * 雪花Id
     *
     * @type {number}
     * @memberof UpdateJobTriggerInput
     */
    id?: number;

    /**
     * 触发器类型FullName
     *
     * @type {string}
     * @memberof UpdateJobTriggerInput
     */
    triggerType?: string | null;

    /**
     * 程序集Name
     *
     * @type {string}
     * @memberof UpdateJobTriggerInput
     */
    assemblyName?: string | null;

    /**
     * 参数
     *
     * @type {string}
     * @memberof UpdateJobTriggerInput
     */
    args?: string | null;

    /**
     * 描述信息
     *
     * @type {string}
     * @memberof UpdateJobTriggerInput
     */
    description?: string | null;

    /**
     * @type {TriggerStatus}
     * @memberof UpdateJobTriggerInput
     */
    status?: TriggerStatus;

    /**
     * 起始时间
     *
     * @type {Date}
     * @memberof UpdateJobTriggerInput
     */
    startTime?: Date | null;

    /**
     * 结束时间
     *
     * @type {Date}
     * @memberof UpdateJobTriggerInput
     */
    endTime?: Date | null;

    /**
     * 最近运行时间
     *
     * @type {Date}
     * @memberof UpdateJobTriggerInput
     */
    lastRunTime?: Date | null;

    /**
     * 下一次运行时间
     *
     * @type {Date}
     * @memberof UpdateJobTriggerInput
     */
    nextRunTime?: Date | null;

    /**
     * 触发次数
     *
     * @type {number}
     * @memberof UpdateJobTriggerInput
     */
    numberOfRuns?: number;

    /**
     * 最大触发次数（0:不限制，n:N次）
     *
     * @type {number}
     * @memberof UpdateJobTriggerInput
     */
    maxNumberOfRuns?: number;

    /**
     * 出错次数
     *
     * @type {number}
     * @memberof UpdateJobTriggerInput
     */
    numberOfErrors?: number;

    /**
     * 最大出错次数（0:不限制，n:N次）
     *
     * @type {number}
     * @memberof UpdateJobTriggerInput
     */
    maxNumberOfErrors?: number;

    /**
     * 重试次数
     *
     * @type {number}
     * @memberof UpdateJobTriggerInput
     */
    numRetries?: number;

    /**
     * 重试间隔时间（ms）
     *
     * @type {number}
     * @memberof UpdateJobTriggerInput
     */
    retryTimeout?: number;

    /**
     * 是否立即启动
     *
     * @type {boolean}
     * @memberof UpdateJobTriggerInput
     */
    startNow?: boolean;

    /**
     * 是否启动时执行一次
     *
     * @type {boolean}
     * @memberof UpdateJobTriggerInput
     */
    runOnStart?: boolean;

    /**
     * 是否在启动时重置最大触发次数等于一次的作业
     *
     * @type {boolean}
     * @memberof UpdateJobTriggerInput
     */
    resetOnlyOnce?: boolean;

    /**
     * 更新时间
     *
     * @type {Date}
     * @memberof UpdateJobTriggerInput
     */
    updatedTime?: Date | null;

    /**
     * 作业Id
     *
     * @type {string}
     * @memberof UpdateJobTriggerInput
     */
    jobId: string;

    /**
     * 触发器Id
     *
     * @type {string}
     * @memberof UpdateJobTriggerInput
     */
    triggerId: string;
}
