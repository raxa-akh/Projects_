import React from "react";
import cls from './style.module.scss'
import Image from "next/image";

function OurPlatform() {
    return (
        <div className={cls.container}>
            <div className={cls.inner}>
                <div className={cls.title}>
                    <span className={cls.title_span}>НАШИ ПЛОЩАДКИ</span>
                </div>
                <div className={cls.body}>
                    <div className={cls.body_item}>
                        <div className={cls.body_item_inner}>
                            <div className={cls.body_item_icon_left}>
                                <img className={cls.item_icon} src="/assets/our_plat.svg" alt="Icon 1"/>
                            </div>
                            <div className={cls.body_item_text_left}>
                                <div className={cls.body_item_text_title}>
                                    <span className={cls.item_title_span}>Продюсерский центр</span>
                                </div>
                                <div className={cls.body_item_text_info_left}>
                                    <span className={cls.info_span}>Мы сотрудничаем с ведущим продюсерским центром, который 
                                        занимается развитием талантов и организацией музыкальных мероприятий.</span>
                                </div>
                                <div className={cls.body_item_text_btn}>
                                    <button className={cls.text_btn}>Перейти на сайт</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cls.body_item}>
                        <div className={cls.body_item_inner}>
                            <div className={cls.body_item_text_right}>
                                <div className={cls.body_item_text_title}>
                                    <span className={cls.item_title_span}>Продюсерский центр</span>
                                </div>
                                <div className={cls.body_item_text_info_right}>
                                    <span className={cls.info_span}>Мы сотрудничаем с ведущим продюсерским центром, который 
                                        занимается развитием талантов и организацией музыкальных мероприятий.</span>
                                </div>
                                <div className={cls.body_item_text_btn}>
                                    <button className={cls.text_btn}>Перейти на сайт</button>
                                </div>
                            </div>
                            <div className={cls.body_item_icon_right}>
                                <img className={cls.item_icon} src="/assets/our_plat.svg" alt="Icon 1"/>
                            </div>
                        </div>
                    </div>
                    <div className={cls.body_item}>
                        <div className={cls.body_item_inner}>
                            <div className={cls.body_item_icon_left}>
                                <img className={cls.item_icon} src="/assets/our_plat.svg" alt="Icon 1"/>
                            </div>
                            <div className={cls.body_item_text_left}>
                                <div className={cls.body_item_text_title}>
                                    <span className={cls.item_title_span}>Продюсерский центр</span>
                                </div>
                                <div className={cls.body_item_text_info_left}>
                                    <span className={cls.info_span}>Мы сотрудничаем с ведущим продюсерским центром, который 
                                        занимается развитием талантов и организацией музыкальных мероприятий.</span>
                                </div>
                                <div className={cls.body_item_text_btn}>
                                    <button className={cls.text_btn}>Перейти на сайт</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        
}

export default OurPlatform;