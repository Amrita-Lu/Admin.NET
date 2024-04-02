﻿// 大名科技（天津）有限公司 版权所有
//
// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动
//
// 任何基于本项目二次开发而产生的一切法律纠纷和责任，均与作者无关

namespace Admin.NET.Core;

/// <summary>
/// 密码加密枚举
/// </summary>
[Description("密码加密枚举")]
public enum CryptogramEnum
{
    /// <summary>
    /// MD5
    /// </summary>
    [Description("MD5")]
    MD5 = 0,

    /// <summary>
    /// SM2（国密）
    /// </summary>
    [Description("SM2")]
    SM2 = 1,

    /// <summary>
    /// SM4（国密）
    /// </summary>
    [Description("SM4")]
    SM4 = 2
}