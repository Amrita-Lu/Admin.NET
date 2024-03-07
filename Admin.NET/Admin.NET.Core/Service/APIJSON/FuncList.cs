﻿// 麻省理工学院许可证
//
// 版权所有 (c) 2021-2023 zuohuaijun，大名科技（天津）有限公司  联系电话/微信：18020030720  QQ：515096995
//
// 特此免费授予获得本软件的任何人以处理本软件的权利，但须遵守以下条件：在所有副本或重要部分的软件中必须包括上述版权声明和本许可声明。
//
// 软件按“原样”提供，不提供任何形式的明示或暗示的保证，包括但不限于对适销性、适用性和非侵权的保证。
// 在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任负责，无论是因合同、侵权或其他方式引起的，与软件或其使用或其他交易有关。

using NewLife.Reflection;
using Newtonsoft.Json.Linq;
using OfficeOpenXml.FormulaParsing.Excel.Functions.Text;
using Org.BouncyCastle.Asn1.X509.Qualified;

namespace Admin.NET.Core.Service;

/// <summary>
/// 自定义方法
/// </summary>
public class FuncList
{
    /// <summary>
    /// 字符串相加
    /// </summary>
    /// <param name="a"></param>
    /// <param name="b"></param>
    /// <returns></returns>
    public string Merge(object a, object b)
    {
        return a.ToString() + b.ToString();
    }

    /// <summary>
    /// 对象合并
    /// </summary>
    /// <param name="a"></param>
    /// <param name="b"></param>
    /// <returns></returns>
    public object MergeObj(object a, object b)
    {
        return new { a, b };
    }

    /// <summary>
    /// 是否包含
    /// </summary>
    /// <param name="a"></param>
    /// <param name="b"></param>
    /// <returns></returns>
    public bool IsContain(object a, object b)
    {
        return a.ToString().Split(',').Contains(b);
    }
    /// <summary>
    /// 获取JToken的数据类型，用于SugarParameter里的类型转换
    /// </summary>
    /// <param name="jToken"></param>
    /// <returns></returns>
    public static Type GetTypeFromJToken(JToken jToken)
    {
        JTokenType jTokenType = jToken.Type;
        return jTokenType switch
        {
            JTokenType.Integer => typeof(long),
            JTokenType.Float => typeof(decimal),
            JTokenType.Boolean => typeof(bool),
            JTokenType.Date => typeof(DateTime),
            JTokenType.Bytes => typeof(byte),
            JTokenType.Guid => typeof(Guid),
            JTokenType.TimeSpan => typeof(TimeSpan),
            _ => jToken.GetType(),
        };
    }

    /// <summary>
    /// 根据jtoken的实际类型来转换SugarParameter，避免全转成字符串
    /// </summary>
    /// <param name="jToken"></param>
    /// <returns></returns>
    public static dynamic TransJObjectToSugarPara(JToken jToken)
    {
        JTokenType jTokenType = jToken.Type;
        return jTokenType switch
        {
            JTokenType.Integer => jToken.ToObject(typeof(long)),
            JTokenType.Float => jToken.ToObject(typeof(decimal)),
            JTokenType.Boolean => jToken.ToObject(typeof(bool)),
            JTokenType.Date => jToken.ToObject(typeof(DateTime)),
            JTokenType.Bytes => jToken.ToObject(typeof(byte)),
            JTokenType.Guid => jToken.ToObject(typeof(Guid)),
            JTokenType.TimeSpan => jToken.ToObject(typeof(TimeSpan)),
            JTokenType.Array => TransJArrayToSugarPara(jToken),
            _ => jToken
        };
    }

    /// <summary>
    /// 根据jArray的实际类型来转换SugarParameter，避免全转成字符串
    /// </summary>
    /// <param name="jToken"></param>
    /// <returns></returns>
    public static dynamic TransJArrayToSugarPara(JToken jToken)
    {
        if (jToken is not JArray) return jToken;
        if (jToken.Any())
        {
            JTokenType jTokenType = jToken.First().Type;
            return jTokenType switch
            {
                JTokenType.Integer => jToken.ToObject<long[]>(),
                JTokenType.Float => jToken.ToObject<decimal[]>(),
                JTokenType.Boolean => jToken.ToObject<bool[]>(),
                JTokenType.Date => jToken.ToObject<DateTime[]>(),
                JTokenType.Bytes => jToken.ToObject<byte[]>(),
                JTokenType.Guid => jToken.ToObject<Guid[]>(),
                JTokenType.TimeSpan => jToken.ToObject<TimeSpan[]>(),
                _ => jToken.ToArray()
            } ;
        }
        else return (JArray)jToken;

    }
}