﻿// 大名科技（天津）有限公司 版权所有
//
// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动
//
// 任何基于本项目二次开发而产生的一切法律纠纷和责任，均与作者无关

namespace Admin.NET.Core;

/// <summary>
/// 系统访问日志表
/// </summary>
[SugarTable(null, "系统访问日志表")]
[SysTable]
[LogTable]
public partial class SysLogVis : EntityTenant
{
    /// <summary>
    /// 模块名称
    /// </summary>
    [SugarColumn(ColumnDescription = "模块名称", Length = 256)]
    [MaxLength(256)]
    public string? ControllerName { get; set; }

    /// <summary>
    /// 方法名称
    ///</summary>
    [SugarColumn(ColumnDescription = "方法名称", Length = 256)]
    [MaxLength(256)]
    public string? ActionName { get; set; }

    /// <summary>
    /// 显示名称
    ///</summary>
    [SugarColumn(ColumnDescription = "显示名称", Length = 256)]
    [MaxLength(256)]
    public string? DisplayTitle { get; set; }

    /// <summary>
    /// 执行状态
    /// </summary>
    [SugarColumn(ColumnDescription = "执行状态", Length = 32)]
    [MaxLength(32)]
    public string? Status { get; set; }

    /// <summary>
    /// IP地址
    /// </summary>
    [SugarColumn(ColumnDescription = "IP地址", Length = 256)]
    [MaxLength(256)]
    public string? RemoteIp { get; set; }

    /// <summary>
    /// 登录地点
    /// </summary>
    [SugarColumn(ColumnDescription = "登录地点", Length = 128)]
    [MaxLength(128)]
    public string? Location { get; set; }

    /// <summary>
    /// 经度
    /// </summary>
    [SugarColumn(ColumnDescription = "经度")]
    public double? Longitude { get; set; }

    /// <summary>
    /// 维度
    /// </summary>
    [SugarColumn(ColumnDescription = "维度")]
    public double? Latitude { get; set; }

    /// <summary>
    /// 浏览器
    /// </summary>
    [SugarColumn(ColumnDescription = "浏览器", Length = 1024)]
    [MaxLength(1024)]
    public string? Browser { get; set; }

    /// <summary>
    /// 操作系统
    /// </summary>
    [SugarColumn(ColumnDescription = "操作系统", Length = 256)]
    [MaxLength(256)]
    public string? Os { get; set; }

    /// <summary>
    /// 操作用时
    /// </summary>
    [SugarColumn(ColumnDescription = "操作用时")]
    public long? Elapsed { get; set; }

    /// <summary>
    /// 日志时间
    /// </summary>
    [SugarColumn(ColumnDescription = "日志时间")]
    public DateTime? LogDateTime { get; set; }

    /// <summary>
    /// 日志级别
    /// </summary>
    [SugarColumn(ColumnDescription = "日志级别")]
    public LogLevel? LogLevel { get; set; }

    /// <summary>
    /// 账号
    /// </summary>
    [SugarColumn(ColumnDescription = "账号", Length = 32)]
    [MaxLength(32)]
    public string? Account { get; set; }

    /// <summary>
    /// 真实姓名
    /// </summary>
    [SugarColumn(ColumnDescription = "真实姓名", Length = 32)]
    [MaxLength(32)]
    public string? RealName { get; set; }
}