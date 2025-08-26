import Image from "next/image";
import styles from "./card.module.css";

interface CardProps {
    venueName: string;
    imgSrc: string;
}

export default function Card({venueName,imgSrc}: CardProps) {
    return (
        <div className={styles.card}>
            <Image src={imgSrc} className={styles.cardImage} alt="Party Image" width={200} height={200}/>
            <div className={styles.cardText}>
                <a href="/booking">{venueName}</a>
            </div>
        </div>
    );
}