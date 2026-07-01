import CounterUp from "@/components/elements/CounterUp"

export default function Counter() {
    return (
        <>
            <section className="counter-area-three pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="counter-item-three">
                                <div className="counter-icon">
                                    <i className="flaticon-trophy" />
                                </div>
                                <div className="counter-content">
                                    <h2 className="count"><CounterUp count={23} />k</h2>
                                    <p>Best Awards</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="counter-item-three">
                                <div className="counter-icon">
                                    <i className="flaticon-rating" />
                                </div>
                                <div className="counter-content">
                                    <h2 className="count"><CounterUp count={223} />k</h2>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="counter-item-three">
                                <div className="counter-icon">
                                    <i className="flaticon-folder-1" />
                                </div>
                                <div className="counter-content">
                                    <h2 className="count"><CounterUp count={98} />k</h2>
                                    <p>Projects Done</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="counter-item-three">
                                <div className="counter-icon">
                                    <i className="flaticon-round-table" />
                                </div>
                                <div className="counter-content">
                                    <h2 className="count"><CounterUp count={22} />k</h2>
                                    <p>Expert People</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
