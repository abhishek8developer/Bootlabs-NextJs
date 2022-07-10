import Header from './header'
import Footer from './footer'
import React from 'react'


export default function Policies() {
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            location.href = "https://blog.bootlabstech.com/"
        }, 3000)
        return () => {
            clearTimeout(timeout)
        }
    }, [])
    return (
        <>
            <Header />
            <div className="container blog" style={{ minHeight: '100vh', marginTop: 150 }} >
                We are taking you to our Blog site.
            </div>
            <Footer />
        </>
    )
}
