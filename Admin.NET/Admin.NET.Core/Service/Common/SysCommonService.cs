﻿// 大名科技（天津）有限公司 版权所有
//
// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动
//
// 任何基于本项目二次开发而产生的一切法律纠纷和责任，均与作者无关

using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Utilities.Encoders;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Admin.NET.Core.Service;

/// <summary>
/// 系统通用服务 🧩
/// </summary>
[ApiDescriptionSettings(Order = 101)]
[AllowAnonymous]
public class SysCommonService : IDynamicApiController, ITransient
{
    private readonly IApiDescriptionGroupCollectionProvider _apiProvider;

    public SysCommonService(IApiDescriptionGroupCollectionProvider apiProvider)
    {
        _apiProvider = apiProvider;
    }

    /// <summary>
    /// 获取国密公钥私钥对 🏆
    /// </summary>
    /// <returns></returns>
    [DisplayName("获取国密公钥私钥对")]
    public SmKeyPairOutput GetSmKeyPair()
    {
        var kp = GM.GenerateKeyPair();
        var privateKey = Hex.ToHexString(((ECPrivateKeyParameters)kp.Private).D.ToByteArray()).ToUpper();
        var publicKey = Hex.ToHexString(((ECPublicKeyParameters)kp.Public).Q.GetEncoded()).ToUpper();

        return new SmKeyPairOutput
        {
            PrivateKey = privateKey,
            PublicKey = publicKey,
        };
    }

    /// <summary>
    /// 获取所有接口/动态API 🔖
    /// </summary>
    /// <returns></returns>
    [DisplayName("获取所有接口/动态API")]
    public List<ApiOutput> GetApiList()
    {
        var apiList = new List<ApiOutput>();
        foreach (var item in _apiProvider.ApiDescriptionGroups.Items)
        {
            foreach (var apiDescription in item.Items)
            {
                var displayName = apiDescription.TryGetMethodInfo(out MethodInfo apiMethodInfo) ? apiMethodInfo.GetCustomAttribute<DisplayNameAttribute>(true)?.DisplayName : "";

                apiList.Add(new ApiOutput
                {
                    GroupName = item.GroupName,
                    DisplayName = displayName,
                    RouteName = apiDescription.RelativePath
                });
            }
        }
        return apiList;
    }
}