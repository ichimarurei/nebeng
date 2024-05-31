'use server'

import {
    LIST_OF_AUTHORITIES,
    LIST_OF_DUTIES,
} from '@/app/ppid/(profile)/duties-authorities/$action/constant'

export async function SE_VisionMissionInformation() {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.heading}>Duties</h1>
                <ul className="list-disc">
                    {LIST_OF_DUTIES.map((item, index) => (
                        <li key={index} className={styles.text}>
                            {item.label}
                        </li>
                    ))}
                </ul>
                <h1 className={`${styles.heading} my-10`}>Authorities</h1>
                <ul className="list-disc">
                    {LIST_OF_AUTHORITIES.map((item, index) => (
                        <li key={index} className={styles.text}>
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

const styles = {
    container: 'mt-20 flex justify-center mb-8',
    wrapper: 'max-w-[930px]',
    heading: 'text-font-normal text-4xl mb-10 text-center',
    text: 'text-m-regular leading-[21px]',
}
