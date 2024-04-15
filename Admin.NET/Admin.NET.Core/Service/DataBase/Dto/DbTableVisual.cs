﻿// 大名科技（天津）有限公司 版权所有
//
// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动
//
// 任何基于本项目二次开发而产生的一切法律纠纷和责任，均与作者无关

namespace Admin.NET.Core.Service;

/// <summary>
/// 库表可视化
/// </summary>
public class VisualDbTable
{
    public List<VisualTable> VisualTableList { get; set; }

    public List<VisualColumn> VisualColumnList { get; set; }

    public List<ColumnRelation> ColumnRelationList { get; set; }
}

public class VisualTable
{
    public string TableName { get; set; }

    public string TableComents { get; set; }

    public int X { get; set; }

    public int Y { get; set; }
}

public class VisualColumn
{
    public string TableName { get; set; }

    public string ColumnName { get; set; }

    public string DataType { get; set; }

    public string DataLength { get; set; }

    public string ColumnDescription { get; set; }
}

public class ColumnRelation
{
    public string SourceTableName { get; set; }

    public string SourceColumnName { get; set; }

    public string Type { get; set; }

    public string TargetTableName { get; set; }

    public string TargetColumnName { get; set; }
}