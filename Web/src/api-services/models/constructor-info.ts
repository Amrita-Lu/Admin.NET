/* tslint:disable */
/* eslint-disable */
/**
 * Admin.NET 通用权限开发平台
 * 让 .NET 开发更简单、更通用、更流行。整合最新技术，模块插件式开发，前后端分离，开箱即用。<br/><u><b><font color='FF0000'> 👮不得利用本项目从事危害国家安全、扰乱社会秩序、侵犯他人合法权益等法律法规禁止的活动！任何基于本项目二次开发而产生的一切法律纠纷和责任，我们不承担任何责任！</font></b></u>
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { CallingConventions } from './calling-conventions';
import { CustomAttributeData } from './custom-attribute-data';
import { MemberTypes } from './member-types';
import { MethodAttributes } from './method-attributes';
import { MethodImplAttributes } from './method-impl-attributes';
import { Module } from './module';
import { RuntimeMethodHandle } from './runtime-method-handle';
import { Type } from './type';
 /**
 * 
 *
 * @export
 * @interface ConstructorInfo
 */
export interface ConstructorInfo {

    /**
     * @type {string}
     * @memberof ConstructorInfo
     */
    name?: string | null;

    /**
     * @type {Type}
     * @memberof ConstructorInfo
     */
    declaringType?: Type;

    /**
     * @type {Type}
     * @memberof ConstructorInfo
     */
    reflectedType?: Type;

    /**
     * @type {Module}
     * @memberof ConstructorInfo
     */
    module?: Module;

    /**
     * @type {Array<CustomAttributeData>}
     * @memberof ConstructorInfo
     */
    customAttributes?: Array<CustomAttributeData> | null;

    /**
     * @type {boolean}
     * @memberof ConstructorInfo
     */
    isCollectible?: boolean;

    /**
     * @type {number}
     * @memberof ConstructorInfo
     */
    metadataToken?: number;

    /**
     * @type {MethodAttributes}
     * @memberof ConstructorInfo
     */
    attributes?: MethodAttributes;

    /**
     * @type {MethodImplAttributes}
     * @memberof ConstructorInfo
     */
    methodImplementationFlags?: MethodImplAttributes;

    /**
     * @type {CallingConventions}
     * @memberof ConstructorInfo
     */
    callingConvention?: CallingConventions;

    /**
     * @type {boolean}
     * @memberof ConstructorInfo
     */
    isAbstract?: boolean;

    /**
     * @type {boolean}
     * @memberof ConstructorInfo
     */
    isConstructor?: boolean;

    /**
     * @type {boolean}
     * @memberof ConstructorInfo
     */
    isFinal?: boolean;

    /**
     * @type {boolean}
     * @memberof ConstructorInfo
     */
    isHideBySig?: boolean;

    /**
     * @type {boolean}
     * @memberof ConstructorInfo
     */
    isSpecialName?: boolean;

    /**
     * @type {boolean}
     * @memberof ConstructorInfo
     */
    isStatic?: boolean;

    /**
     * @type {boolean}
     * @memberof ConstructorInfo
     */
    isVirtual?: boolean;

    /**
     * @type {boolean}
     * @memberof ConstructorInfo
     */
    isAssembly?: boolean;

    /**
     * @type {boolean}
     * @memberof ConstructorInfo
     */
    isFamily?: boolean;

    /**
     * @type {boolean}
     * @memberof ConstructorInfo
     */
    isFamilyAndAssembly?: boolean;

    /**
     * @type {boolean}
     * @memberof ConstructorInfo
     */
    isFamilyOrAssembly?: boolean;

    /**
     * @type {boolean}
     * @memberof ConstructorInfo
     */
    isPrivate?: boolean;

    /**
     * @type {boolean}
     * @memberof ConstructorInfo
     */
    isPublic?: boolean;

    /**
     * @type {boolean}
     * @memberof ConstructorInfo
     */
    isConstructedGenericMethod?: boolean;

    /**
     * @type {boolean}
     * @memberof ConstructorInfo
     */
    isGenericMethod?: boolean;

    /**
     * @type {boolean}
     * @memberof ConstructorInfo
     */
    isGenericMethodDefinition?: boolean;

    /**
     * @type {boolean}
     * @memberof ConstructorInfo
     */
    containsGenericParameters?: boolean;

    /**
     * @type {RuntimeMethodHandle}
     * @memberof ConstructorInfo
     */
    methodHandle?: RuntimeMethodHandle;

    /**
     * @type {boolean}
     * @memberof ConstructorInfo
     */
    isSecurityCritical?: boolean;

    /**
     * @type {boolean}
     * @memberof ConstructorInfo
     */
    isSecuritySafeCritical?: boolean;

    /**
     * @type {boolean}
     * @memberof ConstructorInfo
     */
    isSecurityTransparent?: boolean;

    /**
     * @type {MemberTypes}
     * @memberof ConstructorInfo
     */
    memberType?: MemberTypes;
}