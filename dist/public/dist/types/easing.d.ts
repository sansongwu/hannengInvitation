/**
 * @file easing.ts 缓动效果类，主要提供计算映射的函数
 *
 * @author: zhangbobell
 * @email: zhangbobell@163.com
 *
 * @created: 2017.07.11
 */
export default class Easing {
    static easeOutQuad(sideOffset: number, sideLength: number): number;
    static rubberBand(sideOffset: number, sideLength: number): number;
    static sign(x: number): number;
}
