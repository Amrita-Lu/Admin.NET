﻿// 大名科技（天津）有限公司 版权所有
//
// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证
//
// 不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动
//
// 任何基于本项目二次开发而产生的一切法律纠纷和责任，均与作者无关

namespace Admin.NET.Core.Service;

public class WechatPayTransactionInput
{
    /// <summary>
    /// OpenId
    /// </summary>
    public string OpenId { get; set; }

    /// <summary>
    /// 订单金额
    /// </summary>
    public int Total { get; set; }

    /// <summary>
    /// 商品描述
    /// </summary>
    public string Description { get; set; }

    /// <summary>
    /// 附加数据
    /// </summary>
    public string Attachment { get; set; }

    /// <summary>
    /// 优惠标记
    /// </summary>
    public string GoodsTag { get; set; }
}

public class WechatPayParaInput
{
    /// <summary>
    /// 订单Id
    /// </summary>
    public string PrepayId { get; set; }
}