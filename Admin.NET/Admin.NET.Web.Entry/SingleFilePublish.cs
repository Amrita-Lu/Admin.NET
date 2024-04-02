// 大名科技（天津）有限公司 版权所有
//
// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动
//
// 任何基于本项目二次开发而产生的一切法律纠纷和责任，均与作者无关

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