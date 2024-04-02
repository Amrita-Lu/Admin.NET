// 大名科技（天津）有限公司 版权所有
//
// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动
//
// 任何基于本项目二次开发而产生的一切法律纠纷和责任，均与作者无关

namespace Admin.NET.Core;

/// <summary>
/// 系统角色表种子数据
/// </summary>
public class SysRoleSeedData : ISqlSugarEntitySeedData<SysRole>
{
    /// <summary>
    /// 种子数据
    /// </summary>
    /// <returns></returns>
    public IEnumerable<SysRole> HasData()
    {
        return new[]
        {
            new SysRole{ Id=1300000000101, Name="系统管理员", DataScope=DataScopeEnum.All, Code="sys_admin", CreateTime=DateTime.Parse("2022-02-10 00:00:00"), Remark="系统管理员", TenantId=1300000000001 },
            new SysRole{ Id=1300000000102, Name="本部门及以下数据", DataScope=DataScopeEnum.DeptChild, Code="sys_deptChild", CreateTime=DateTime.Parse("2022-02-10 00:00:00"), Remark="本部门及以下数据", TenantId=1300000000001 },
            new SysRole{ Id=1300000000103, Name="本部门数据", DataScope=DataScopeEnum.Dept, Code="sys_dept", CreateTime=DateTime.Parse("2022-02-10 00:00:00"), Remark="本部门数据", TenantId=1300000000001 },
            new SysRole{ Id=1300000000104, Name="仅本人数据", DataScope=DataScopeEnum.Self, Code="sys_self", CreateTime=DateTime.Parse("2022-02-10 00:00:00"), Remark="仅本人数据", TenantId=1300000000001 },
            new SysRole{ Id=1300000000105, Name="自定义数据", DataScope=DataScopeEnum.Define, Code="sys_define", CreateTime=DateTime.Parse("2022-02-10 00:00:00"), Remark="自定义数据", TenantId=1300000000001 },
        };
    }
}