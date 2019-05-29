/**
 * @file render.ts 抽象类，为渲染提供运行时支持
 *
 * @author: zhangbobell
 * @email: zhangbobell@163.com
 *
 * @created: 2017.06.27
 */
export declare type Sign = 0 | -1 | 1;
export interface RenderInterface {
    [key: string]: any;
}
export default abstract class Render {
    static _renders: RenderInterface;
    static register(name: string, renderClass: any): void;
    static getRenderInstance(name: string): any;
    protected sign(x: number): Sign;
    abstract doRender(swiper: any): any;
}
