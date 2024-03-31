// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证。
//
// 必须在法律法规允许的范围内正确使用，严禁将其用于非法、欺诈、恶意或侵犯他人合法权益的目的。

using Furion;
using System.Reflection;

namespace Admin.NET.Web.Entry;

/// <summary>
/// 解决单文件发布问题
/// </summary>
public class SingleFilePublish : ISingleFilePublish
{
    /// <summary>
    /// 解决单文件不能扫描的程序集
    /// </summary>
    /// <remarks>和 <see cref="IncludeAssemblyNames"/>可同时配置</remarks>
    /// <returns></returns>
    public Assembly[] IncludeAssemblies()
    {
        // 需要 Furion 框架扫描哪些程序集就写上去即可
        return Array.Empty<Assembly>();
    }

    /// <summary>
    /// 解决单文件不能扫描的程序集名称
    /// </summary>
    /// <remarks>和 <see cref="IncludeAssemblies"/>可同时配置</remarks>
    /// <returns></returns>
    public string[] IncludeAssemblyNames()
    {
        // 需要 Furion 框架扫描哪些程序集就写上去即可
        return new[]
        {
            "Admin.NET.Application",
            "Admin.NET.Core",
            "Admin.NET.Web.Core",
        };
    }
}