﻿// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证。
//
// 必须在法律法规允许的范围内正确使用，严禁将其用于非法、欺诈、恶意或侵犯他人合法权益的目的。

using Microsoft.AspNetCore.Authentication;

namespace Admin.NET.Core.Service;

public static class HttpContextExtension
{
    public static async Task<AuthenticationScheme[]> GetExternalProvidersAsync(this HttpContext context)
    {
        ArgumentNullException.ThrowIfNull(context);

        var schemes = context.RequestServices.GetRequiredService<IAuthenticationSchemeProvider>();

        return (from scheme in await schemes.GetAllSchemesAsync()
                where !string.IsNullOrEmpty(scheme.DisplayName)
                select scheme).ToArray();
    }

    public static async Task<bool> IsProviderSupportedAsync(this HttpContext context, string provider)
    {
        ArgumentNullException.ThrowIfNull(context);

        return (from scheme in await context.GetExternalProvidersAsync()
                where string.Equals(scheme.Name, provider, StringComparison.OrdinalIgnoreCase)
                select scheme).Any();
    }
}