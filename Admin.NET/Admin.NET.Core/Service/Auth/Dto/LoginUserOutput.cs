// 大名科技（天津）有限公司 版权所有
//
// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动
//
// 任何基于本项目二次开发而产生的一切法律纠纷和责任，均与作者无关

namespace Admin.NET.Core.Service;

/// <summary>
/// 用户登录信息
/// </summary>
public class LoginUserOutput
{
    /// <summary>
    /// 用户id
    /// </summary>
    public long Id { get; set; }

    /// <summary>
    /// 账号名称
    /// </summary>
    public string Account { get; set; }

    /// <summary>
    /// 真实姓名
    /// </summary>
    public string RealName { get; set; }

    /// <summary>
    /// 电话
    /// </summary>
    public string Phone { get; set; }

    /// <summary>
    /// 身份证
    /// </summary>
    public string IdCardNum { get; set; }

    /// <summary>
    /// 邮箱
    /// </summary>
    public string Email { get; set; }

    /// <summary>
    /// 账号类型
    /// </summary>
    public AccountTypeEnum AccountType { get; set; } = AccountTypeEnum.NormalUser;

    /// <summary>
    /// 头像
    /// </summary>
    public string Avatar { get; set; }

    /// <summary>
    /// 个人简介
    /// </summary>
    public string Introduction { get; set; }

    /// <summary>
    /// 地址
    /// </summary>
    public string Address { get; set; }

    /// <summary>
    /// 电子签名
    /// </summary>
    public string Signature { get; set; }

    /// <summary>
    /// 机构Id
    /// </summary>
    public long OrgId { get; set; }

    /// <summary>
    /// 机构名称
    /// </summary>
    public string OrgName { get; set; }

    /// <summary>
    /// 机构类型
    /// </summary>
    public string OrgType { get; set; }

    /// <summary>
    /// 职位名称
    /// </summary>
    public string PosName { get; set; }

    /// <summary>
    /// 按钮权限集合
    /// </summary>
    public List<string> Buttons { get; set; }

    /// <summary>
    /// 角色集合
    /// </summary>
    public List<long> RoleIds { get; set; }
}