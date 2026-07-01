import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "OgaalSan Consultancy - ICT & Digital Innovation Experts"}
                </title>
            </Head>
        </>
    )
}

export default PageHead