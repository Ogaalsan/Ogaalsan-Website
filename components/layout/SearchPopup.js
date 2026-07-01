
export default function SearchPopup({ isSearch, handleSearch }) {
    return (
        <>
            <div className="search-popup-wrap" style={{ display: `${isSearch ? "block" : "none"}` }}>
                <div className="search-close" onClick={handleSearch}>
                    <span><i className="fas fa-times" /></span>
                </div>
                <div className="search-wrap text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="title">... Search Here ...</h2>
                                <div className="search-form">
                                    <form action="#">
                                        <input type="text" name="search" placeholder="Type keywords here" />
                                        <button className="search-btn"><i className="fas fa-search" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
