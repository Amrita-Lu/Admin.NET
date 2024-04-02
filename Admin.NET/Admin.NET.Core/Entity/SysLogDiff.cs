﻿// 大名科技（天津）有限公司 版权所有
//
// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动
//
// 任何基于本项目二次开发而产生的一切法律纠纷和责任，均与作者无关

namespace Admin.NET.Core;

/// <summary>
/// 系统差异日志表
/// </summary>
[SugarTable(null, "系统差异日志表")]
[SysTable]
[LogTable]
public partial class SysLogDiff : EntityBase
{
    /// <summary>
    /// 操作前记录
    /// </summary>
    [SugarColumn(ColumnDescription = "操作前记录", ColumnDataType = StaticConfig.CodeFirst_BigString)]
    public string? BeforeData { get; set; }

    /// <summary>
    /// 操作后记录
    /// </summary>
    [SugarColumn(ColumnDescription = "操作后记录", ColumnDataType = StaticConfig.CodeFirst_BigString)]
    public string? AfterData { get; set; }

    /// <summary>
    /// Sql
    /// </summary>
    [SugarColumn(ColumnDescription = "Sql", ColumnDataType = StaticConfig.CodeFirst_BigString)]
    public string? Sql { get; set; }

    /// <summary>
    /// 参数  手动传入的参数
    /// </summary>
    [SugarColumn(ColumnDescription = "参数", ColumnDataType = StaticConfig.CodeFirst_BigString)]
    public string? Parameters { get; set; }

    /// <summary>
    /// 业务对象
    /// </summary>
    [SugarColumn(ColumnDescription = "业务对象", ColumnDataType = StaticConfig.CodeFirst_BigString)]
    public string? BusinessData { get; set; }

    /// <summary>
    /// 差异操作
    /// </summary>
    [SugarColumn(ColumnDescription = "差异操作", ColumnDataType = StaticConfig.CodeFirst_BigString)]
    public string? DiffType { get; set; }

    /// <summary>
    /// 耗时
    /// </summary>
    [SugarColumn(ColumnDescription = "耗时")]
    public long? Elapsed { get; set; }
}