import 'reflect-metadata';

const HANDLER_METADATA_KEY = 'handler_metadata';

export interface HandlerMetadata {
    msgId: number;
}

// 处理器注册表
interface HandlerRegistry {
    instance: any;
    method: string;
}

const handlerMap = new Map<number, HandlerRegistry>();

/**
 * 消息处理器装饰器
 * @param msgId 消息ID
 */
export function Handler(msgId: number) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const metadata: HandlerMetadata = {
            msgId
        };
        
        // 将metadata存储到方法上
        Reflect.defineMetadata(HANDLER_METADATA_KEY, metadata, target, propertyKey);

        // 注册处理器
        handlerMap.set(msgId, {
            instance: target.constructor.name,  // 存储类名，后续需要实例化
            method: propertyKey
        });
        
        return descriptor;
    };
}

/**
 * 获取方法上的Handler元数据
 * @param target 目标类的原型
 * @param propertyKey 方法名
 */
export function getHandlerMetadata(target: any, propertyKey: string): HandlerMetadata | undefined {
    return Reflect.getMetadata(HANDLER_METADATA_KEY, target, propertyKey);
}

/**
 * 获取指定消息ID的处理器
 * @param msgId 消息ID
 * @param modules 模块实例Map
 */
export function getHandler(msgId: number, modules: Map<string, any>): { instance: any, method: string } | undefined {
    const registry = handlerMap.get(msgId);
    if (!registry) return undefined;

    // 从modules中获取实例
    const instance = modules.get(registry.instance);
    if (!instance) return undefined;

    return {
        instance,
        method: registry.method
    };
}
