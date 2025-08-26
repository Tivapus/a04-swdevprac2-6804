import Image from "next/image";
import styles from "./card.module.css";

export default function Card(){
    return (
        <div className={styles.card}>
            <Image src={"/images/Party.png"} className={styles.cardImage} alt="Party Image" width={200} height={200}/>
            <div className={styles.cardText}>
                <h3>Card Title</h3>
                <p>This is a simple card component.</p>
            </div>
        </div>
    );
}