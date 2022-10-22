import '../styles/common.css'
import '../styles/contact.css'
import '../styles/career.css'
import '../styles/aboutus.css'
import '../styles/product.css'
import '../styles/promotion.css'
import '../styles/footer.css'
import '../styles/header.css'
import '../styles/home.css'
import '../styles/policies.css'
import '../styles/solutions.css'
import { UserProvider } from '@auth0/nextjs-auth0';
export default function App(props) {
    const { Component, pageProps, err, router } = props
    // console.log(props);
    return (
        <UserProvider>
            <div className="root">
                <Component {...pageProps} />
            </div>
        </UserProvider>
    )
}