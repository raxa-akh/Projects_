import React, {useRef} from 'react';
import styles from "./Menu.module.scss"
import Image from 'next/image';
import { useForeignClickOrFocus } from '@/hooks/use-foreign-click-or-focus';
import Link from 'next/link';


type Props = {
    links: { href: string; label: string }[];
    setIsMenuOpen: (a: boolean) => void;
}


const  Menu = (props : Props) =>{

    const ref = useRef(null);
    useForeignClickOrFocus([ref], () => props.setIsMenuOpen(false))

    return(
        <div ref={ref} className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.menu}>
                    <div className={styles.menuItem}>
                        <Link href={'/contacts'} className={styles.menuItemSpan}>Контакты</Link>
                    </div>
                    <div className={styles.menuItem}>
                        <Link href={'/our-platforms'} className={styles.menuItemSpan}>Наши площадки</Link>
                    </div>
                    <div className={styles.menuItem}>
                        <Link href={'/support'} className={styles.menuItemSpan}>Поддержать проект</Link>
                    </div>
                </div>
                <div className={styles.image}>
                    <Image src={'/assets/menu_arrow.svg'} alt="" width={16} height={8}/>
                </div>
            </div>
        </div>
    )
}

export {Menu} 