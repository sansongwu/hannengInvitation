/**
 * @file swiper.ts swiper 主文件
 *
 * @author: zhangbobell
 * @email: zhangbobell@163.com
 * @created: 2017.06.26
 *
 */
import './swiper.css';
import { Device } from './device';
import { Transition, Options } from './interface';
export declare class Swiper {
    static Events: string[];
    static Device: Device;
    static DefaultOptions: Options;
    private $container;
    private debug;
    private data;
    private axis;
    private isLoop;
    private initIndex;
    private keepDefaultClasses;
    private sideLength;
    private transition;
    private _listeners;
    private $swiper;
    private $pages;
    private startTime;
    private endTime;
    private sliding;
    private moving;
    private start;
    private end;
    private offset;
    private pageChange;
    private moveDirection;
    private currentPage;
    private activePage;
    private lastActivePage;
    private renderInstance;
    log: Function;
    constructor(options: Options);
    private bindEvents();
    private unbindEvents();
    handleEvent(event: any): void;
    private keepDefaultHandler(event);
    private startHandler(startPosition);
    private moveHandler(movingPosition);
    private endHandler();
    private resizeHandler();
    private transitionEndHandler(event?);
    swipeTo(toIndex: number, transition?: Transition): void;
    swipePrev(transition?: Transition): void;
    swipeNext(transition?: Transition): void;
    getCurrentIndex(): number;
    private _swipeTo();
    private initRender();
    on(eventName: string, callback: Function): Swiper;
    off(eventName: string, callback: Function): Swiper;
    private fire(eventName, event?);
    destroy(): void;
    render(): void;
}
