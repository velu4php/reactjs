import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MyRouter from './MyRouter';
class Layout extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <Header />
                </div>
                <div className="main">
                   <MyRouter/>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Layout;