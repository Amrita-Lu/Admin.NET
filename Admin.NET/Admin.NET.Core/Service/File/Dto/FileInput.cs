// 大名科技（天津）有限公司 版权所有
//
// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动
//
// 任何基于本项目二次开发而产生的一切法律纠纷和责任，均与作者无关

namespace Admin.NET.Core.Service;

public class FileInput : BaseIdInput
{
    /// <summary>
    /// 文件名称
    /// </summary>
    public string FileName { get; set; }

    /// <summary>
    /// 文件Url
    /// </summary>
    public string? Url { get; set; }
}

public class PageFileInput : BasePageInput
{
    /// <summary>
    /// 文件名称
    /// </summary>
    public string FileName { get; set; }

    /// <summary>
    /// 开始时间
    /// </summary>
    public DateTime? StartTime { get; set; }

    /// <summary>
    /// 结束时间
    /// </summary>
    public DateTime? EndTime { get; set; }
}

public class DeleteFileInput : BaseIdInput
{
}

public class UploadFileFromBase64Input
{
    /// <summary>
    /// 文件内容
    /// </summary>
    public string FileDataBase64 { get; set; }

    /// <summary>
    /// 文件类型( "image/jpeg",)
    /// </summary>
    public string ContentType { get; set; }

    /// <summary>
    /// 文件名称
    /// </summary>
    public string FileName { get; set; }

    /// <summary>
    /// 保存路径
    /// </summary>
    public string Path { get; set; }
}