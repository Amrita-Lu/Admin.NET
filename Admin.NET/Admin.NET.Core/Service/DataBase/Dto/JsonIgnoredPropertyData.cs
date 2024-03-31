﻿// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证。
//
// 必须在法律法规允许的范围内正确使用，严禁将其用于非法、欺诈、恶意或侵犯他人合法权益的目的。

namespace Admin.NET.Core.Service;

/// <summary>
/// 保存标注了JsonIgnore的Property的值信息
/// </summary>
public class JsonIgnoredPropertyData
{
    /// <summary>
    /// 记录索引
    /// </summary>
    public int RecordIndex { get; set; }

    /// <summary>
    /// 属性名
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// 属性值描述
    /// </summary>
    public string Value { get; set; }
}