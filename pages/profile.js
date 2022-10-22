import Header from './header'
import Footer from './footer'
import { useUser } from '@auth0/nextjs-auth0';

const imgStyle = { height: 100, width: 100, borderRadius: 50, margin: '25px 0 50px' }

export default function platform() {
    const { user, error, isLoading } = useUser({ redirectTo: '/' }) || {}
    console.log(useUser(), 'Auth0')
    function getDate(date) {
        const d = date && new Date(date)
        return d ? `${d.getDate()} ${
            d.getMonth() + 1} ${
            d.getFullYear()} ${
            d.getHours()}:${
            d.getMinutes()}` : '-'
    }
    function renderView() {
        if (isLoading) return <div>Loading...</div>;
        if (error) return <div>{error.message}</div>;
        return (
            <div style={{ paddingTop: '10vmax' }}>
                <div className='container' style={{maxWidth: 400, minHeight: 600 }}>
                    <div className='row'>
                        <div className='col-lg-12 text-center'>
                            <img style={imgStyle} src={user.picture} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <label>Name:</label>
                        </div>
                        <div className='col-sm-8'>
                            <label>{user.name}</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <label>Nick Name:</label>
                        </div>
                        <div className='col-sm-8'>
                            <label>{user.nickname}</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <label>Email:</label>
                        </div>
                        <div className='col-sm-8'>
                            <label className='text-primary'>{user.email}</label>
                        </div>
                    </div>
                    <div className='row pb-8'>
                        <div className='col-sm-4'>
                            <label>last updated:</label>
                        </div>
                        <div className='col-sm-8'>
                            <label>{getDate(user.updated_at)}</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <Header />
            {renderView()}
            <Footer />
        </>
    );
}
