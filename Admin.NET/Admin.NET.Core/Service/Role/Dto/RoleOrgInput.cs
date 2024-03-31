﻿// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证。
//
// 必须在法律法规允许的范围内正确使用，严禁将其用于非法、欺诈、恶意或侵犯他人合法权益的目的。

namespace Admin.NET.Core.Service;

/// <summary>
/// 授权角色机构
/// </summary>
public class RoleOrgInput : BaseIdInput
{
    /// <summary>
    /// 数据范围
    /// </summary>
    public int DataScope { get; set; }

    /// <summary>
    /// 机构Id集合
    /// </summary>
    public List<long> OrgIdList { get; set; }
}