﻿// 大名科技（天津）有限公司 版权所有
//
// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动
//
// 任何基于本项目二次开发而产生的一切法律纠纷和责任，均与作者无关

namespace Admin.NET.Core.Service;

/// <summary>
/// 代码生成参数类
/// </summary>
public class CodeGenOutput
{
    /// <summary>
    /// 代码生成器Id
    /// </summary>
    public long Id { get; set; }

    /// <summary>
    /// 作者姓名
    /// </summary>
    public string AuthorName { get; set; }

    /// <summary>
    /// 类名
    /// </summary>
    public string ClassName { get; set; }

    /// <summary>
    /// 是否移除表前缀
    /// </summary>
    public string TablePrefix { get; set; }

    /// <summary>
    /// 生成方式
    /// </summary>
    public string GenerateType { get; set; }

    /// <summary>
    /// 数据库表名
    /// </summary>
    public string TableName { get; set; }

    /// <summary>
    /// 包名
    /// </summary>
    public string PackageName { get; set; }

    /// <summary>
    /// 业务名（业务代码包名称）
    /// </summary>
    public string BusName { get; set; }

    /// <summary>
    /// 功能名（数据库表名称）
    /// </summary>
    public string TableComment { get; set; }

    /// <summary>
    /// 菜单应用分类（应用编码）
    /// </summary>
    public string MenuApplication { get; set; }

    /// <summary>
    /// 菜单父级
    /// </summary>
    public long MenuPid { get; set; }

    /// <summary>
    /// 支持打印类型
    /// </summary>
    public string PrintType { get; set; }

    /// <summary>
    /// 打印模版名称
    /// </summary>
    public string PrintName { get; set; }
}