'use server'

export async function SE_VisionMissionInformation() {
    return (
        <div className={styles.container}>
            <section className="w-full sm:w-2/3">
                <h1 className="text-font-normal text-4xl mb-10 text-center">
                    Vision
                </h1>
                <p className="text-l-regular mb-3 leading-6 text-center">
                    Becoming a State-Owned Enterprise that provides public
                    information services as an added value to the company.
                </p>
                <h1 className="text-font-normal text-4xl my-10 text-center">
                    Mission
                </h1>
                <p className="text-l-regular my-3 leading-6 text-center">
                    Providing more reliable public information services to
                    information applicants
                </p>
            </section>
        </div>
    )
}

const styles = {
    container: 'mt-20 mx:auto md:mx-28 lg:mx-auto mb-8 flex justify-center',
}
