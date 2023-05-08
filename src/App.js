const App = () => {

    const directories = [
        {
            id: 1,
            title: 'Hats',
            
        }
    ]

    return (
        <div className="landing-container">
            <div className="address-bar-container">
                <div className="website-title-container">
                    <h1>Blue Letter Boutique</h1>
                </div>
                <div className="navigation-container">
                    <ul>
                        <li>WHAT'S NEW</li>
                        <li>DRESSES</li>
                        <li>SWIM</li>
                        <li>CLOTHING</li>
                        <li>JEWELRY</li>
                        <li>ACCESSORIES</li>
                        <li>SHOES</li>
                        <li>SALE</li>
                    </ul>
                </div>
                <div className="search-box-container">
                    <p>I'm looking for...</p>
                </div>
                <div className="my-account-container">MY ACCOUNT</div>
                <div className="shop-icon-container">FAVICON</div>
            </div>
        </div>
    );
};

export default App;
