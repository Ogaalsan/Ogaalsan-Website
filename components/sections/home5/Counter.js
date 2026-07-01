import CounterUp from "@/components/elements/CounterUp"

export default function Counter() {
    return (
        <>
            <section className="counter-area counter-bg" data-background="/assets/img/bg/counter_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="counter-item">
                                <h2 className="count"><CounterUp count={95} />%</h2>
                                <p>Success Rate</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="counter-item">
                                <h2 className="count"><CounterUp count={55} />K</h2>
                                <p>Complete Projects</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="counter-item">
                                <h2 className="count"><CounterUp count={25} />K</h2>
                                <p>Satisfied Clients</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="counter-item">
                                <h2 className="count"><CounterUp count={12} />K</h2>
                                <p>Trade In The World</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="counter-shape-wrap">
                    <img src="/assets/img/images/counter_shape01.png" alt="" className="animationFramesOne" />
                    <img src="/assets/img/images/counter_shape02.png" alt="" className="animationFramesOne" />
                </div>
            </section>
        </>
    )
}
