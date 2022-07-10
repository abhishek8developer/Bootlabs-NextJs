import '../styles/common.css'
import '../styles/contact.css'
import '../styles/aboutus.css'
import '../styles/product.css'
import '../styles/footer.css'
import '../styles/header.css'
import '../styles/home.css'
import '../styles/policies.css'

export default function App(props) {
    const { Component, pageProps, err, router } = props
    // console.log(props);
    return (
        <div className="root">
            <Component {...pageProps} />
        </div>
    )
}