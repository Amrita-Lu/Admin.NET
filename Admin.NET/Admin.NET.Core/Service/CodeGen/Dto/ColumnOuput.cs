﻿// 大名科技（天津）有限公司 版权所有
//
// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动
//
// 任何基于本项目二次开发而产生的一切法律纠纷和责任，均与作者无关

namespace Admin.NET.Core.Service;

/// <summary>
/// 数据库表列
/// </summary>
public class ColumnOuput
{
    /// <summary>
    /// 字段名
    /// </summary>
    public string ColumnName { get; set; }

    /// <summary>
    /// 实体的Property名
    /// </summary>
    public string PropertyName { get; set; }

    /// <summary>
    /// 字段数据长度
    /// </summary>
    public int ColumnLength { get; set; }

    /// <summary>
    /// 数据库中类型
    /// </summary>
    public string DataType { get; set; }

    /// <summary>
    /// 是否为主键
    /// </summary>
    public bool IsPrimarykey { get; set; }

    /// <summary>
    /// 是否允许为空
    /// </summary>
    public bool IsNullable { get; set; }

    /// <summary>
    /// .NET字段类型
    /// </summary>
    public string NetType { get; set; }

    /// <summary>
    /// 字段描述
    /// </summary>
    public string ColumnComment { get; set; }

    /// <summary>
    /// 主外键
    /// </summary>
    public string ColumnKey { get; set; }
}