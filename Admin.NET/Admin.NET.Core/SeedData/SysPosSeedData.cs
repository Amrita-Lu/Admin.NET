﻿// 大名科技（天津）有限公司 版权所有
//
// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动
//
// 任何基于本项目二次开发而产生的一切法律纠纷和责任，均与作者无关

namespace Admin.NET.Core;

/// <summary>
/// 系统职位表种子数据
/// </summary>
public class SysPosSeedData : ISqlSugarEntitySeedData<SysPos>
{
    /// <summary>
    /// 种子数据
    /// </summary>
    /// <returns></returns>
    public IEnumerable<SysPos> HasData()
    {
        return new[]
        {
            new SysPos{ Id=1300000000101, Name="党委书记", Code="dwsj", CreateTime=DateTime.Parse("2022-02-10 00:00:00"), Remark="党委书记", TenantId=1300000000001 },
            new SysPos{ Id=1300000000102, Name="董事长", Code="dsz", CreateTime=DateTime.Parse("2022-02-10 00:00:00"), Remark="董事长", TenantId=1300000000001 },
            new SysPos{ Id=1300000000103, Name="副董事长", Code="fdsz", CreateTime=DateTime.Parse("2022-02-10 00:00:00"), Remark="副董事长", TenantId=1300000000001 },
            new SysPos{ Id=1300000000104, Name="总经理", Code="zjl", CreateTime=DateTime.Parse("2022-02-10 00:00:00"), Remark="总经理", TenantId=1300000000001 },
            new SysPos{ Id=1300000000105, Name="副总经理", Code="fzjl", CreateTime=DateTime.Parse("2022-02-10 00:00:00"), Remark="副总经理", TenantId=1300000000001 },
            new SysPos{ Id=1300000000106, Name="部门经理", Code="bmjl", CreateTime=DateTime.Parse("2022-02-10 00:00:00"), Remark="部门经理", TenantId=1300000000001 },
            new SysPos{ Id=1300000000107, Name="部门副经理", Code="bmfjl", CreateTime=DateTime.Parse("2022-02-10 00:00:00"), Remark="部门副经理", TenantId=1300000000001 },
            new SysPos{ Id=1300000000108, Name="主任", Code="zr", CreateTime=DateTime.Parse("2022-02-10 00:00:00"), Remark="主任", TenantId=1300000000001 },
            new SysPos{ Id=1300000000109, Name="副主任", Code="fzr", CreateTime=DateTime.Parse("2022-02-10 00:00:00"), Remark="副主任", TenantId=1300000000001 },
            new SysPos{ Id=1300000000110, Name="局长", Code="jz", CreateTime=DateTime.Parse("2022-02-10 00:00:00"), Remark="局长", TenantId=1300000000001 },
            new SysPos{ Id=1300000000111, Name="副局长", Code="fjz", CreateTime=DateTime.Parse("2022-02-10 00:00:00"), Remark="副局长", TenantId=1300000000001 },
            new SysPos{ Id=1300000000112, Name="科长", Code="kz", CreateTime=DateTime.Parse("2022-02-10 00:00:00"), Remark="科长", TenantId=1300000000001 },
            new SysPos{ Id=1300000000113, Name="副科长", Code="fkz", CreateTime=DateTime.Parse("2022-02-10 00:00:00"), Remark="副科长", TenantId=1300000000001 },
            new SysPos{ Id=1300000000114, Name="财务", Code="cw", CreateTime=DateTime.Parse("2022-02-10 00:00:00"), Remark="财务", TenantId=1300000000001 },
            new SysPos{ Id=1300000000115, Name="职员", Code="zy", CreateTime=DateTime.Parse("2022-02-10 00:00:00"), Remark="职员", TenantId=1300000000001 },
            new SysPos{ Id=1300000000116, Name="其他", Code="qt", CreateTime=DateTime.Parse("2022-02-10 00:00:00"), Remark="其他", TenantId=1300000000001 },
        };
    }
}