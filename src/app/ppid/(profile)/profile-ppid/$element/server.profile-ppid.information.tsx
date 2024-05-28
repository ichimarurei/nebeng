'use server'

export async function SE_ProfilePPIDInformation() {
    return (
        <div className={styles.container}>
            <section>
                <h1 className="text-font-normal text-4xl mb-10 text-center">
                    Information Management & Documentation Officer PT. Bank
                    Rakyat Indonesia (Persero) Tbk.
                </h1>
                <p className="text-m-regular mb-3 leading-5">
                    Disclosure of information must be applied to the performance
                    of every public body as a form of responsibility to
                    stakeholders and to increase public trust. This disclosure
                    of information has also been regulated in Law 14 of 2008.
                </p>
                <p className="text-m-regular leading-5 ">
                    In its application, PPID or Information Management &
                    Documentation Officer is the official responsible for the
                    storage, documentation, provision and/or service of
                    information at PT Bank Rakyat Indonesia (Persero) Tbk.
                    according to the Decree of the Board of Directors No.B.06-
                    SKP/COM/DCM/05/2021 concerning the Structure of Information
                    Management & Documentation Officers of PT. Bank Rakyat
                    Indonesia (Persero) Tbk
                </p>
            </section>
        </div>
    )
}

const styles = {
    container: 'mt-20 mx:auto md:mx-28 lg:mx-52 mb-8',
}
