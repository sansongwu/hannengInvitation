/**
 * @file: device.js 关于 swiper 所在设备
 * @class Device
 *
 * @author: zhangbobell
 * @email: zhangbobell@163.com
 * @created: 2017.06.26
 *
 */
export interface Point {
    X: number;
    Y: number;
}
export interface combinedEvent extends TouchEvent, MouseEvent {
}
export interface DeviceEvent {
    type: string;
    position: Point;
    target: HTMLElement;
    button: number;
    preventDefault: Function;
}
export declare class Device {
    hasTouch: boolean;
    startEvent: string;
    moveEvent: string;
    endEvent: string;
    cancelEvent: string;
    resizeEvent: string;
    transitionEvent: string;
    constructor(global: any);
    getDeviceEvent(event: combinedEvent): DeviceEvent;
    private getTouchPosition(event);
    private getMousePosition(event);
    private getTransitionEvent();
}
