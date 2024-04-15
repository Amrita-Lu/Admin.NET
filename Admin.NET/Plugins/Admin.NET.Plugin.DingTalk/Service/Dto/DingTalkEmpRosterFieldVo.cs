﻿// 大名科技（天津）有限公司 版权所有
//
// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动
//
// 任何基于本项目二次开发而产生的一切法律纠纷和责任，均与作者无关

namespace Admin.NET.Plugin.DingTalk;

public class DingTalkEmpRosterFieldVo
{
    /// <summary>
    /// 企业的corpid
    /// </summary>
    [Newtonsoft.Json.JsonProperty("corp_id")]
    [System.Text.Json.Serialization.JsonPropertyName("corp_id")]
    public string CorpId { get; set; }

    /// <summary>
    /// 返回的字段信息列表
    /// </summary>
    [Newtonsoft.Json.JsonProperty("field_data_list")]
    [System.Text.Json.Serialization.JsonPropertyName("field_data_list")]
    public List<DingTalkEmpFieldDataVo> FieldDataList { get; set; }

    /// <summary>
    /// 员工的userid
    /// </summary>
    [Newtonsoft.Json.JsonProperty("userid")]
    [System.Text.Json.Serialization.JsonPropertyName("userid")]
    public string UserId { get; set; }
}