// 大名科技（天津）有限公司 版权所有
//
// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动
//
// 任何基于本项目二次开发而产生的一切法律纠纷和责任，均与作者无关

namespace Admin.NET.Core;

/// <summary>
/// 全局分页查询输入参数
/// </summary>
public class BasePageInput
{
    /// <summary>
    /// 当前页码
    /// </summary>
    [DataValidation(ValidationTypes.Numeric)]
    public virtual int Page { get; set; } = 1;

    /// <summary>
    /// 页码容量
    /// </summary>
    //[Range(0, 100, ErrorMessage = "页码容量超过最大限制")]
    [DataValidation(ValidationTypes.Numeric)]
    public virtual int PageSize { get; set; } = 20;

    /// <summary>
    /// 排序字段
    /// </summary>
    public virtual string Field { get; set; }

    /// <summary>
    /// 排序方向
    /// </summary>
    public virtual string Order { get; set; }

    /// <summary>
    /// 降序排序
    /// </summary>
    public virtual string DescStr { get; set; } = "descending";
}