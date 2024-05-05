const Portfolio = () => {
    return (
        <div className="container max-sm:flex-col max-sm:gap-y-6">
            <div className="">
                <input type="radio" name="slide" id="c1" defaultChecked={false} />
                <label htmlFor="c1" className="card h-full bg-center max-sm:w-full max-sm:h-[400px] max-sm:pointer-events-none">
                    <div className="row">
                        <div className="icon">1</div>
                        <div className="description">
                            <h4>Winter</h4>
                            <p>Winter has so much to offer creative activities</p>
                        </div>
                    </div>
                </label>
            </div>
            <div>
                <input type="radio" name="slide" id="c2" defaultChecked={false} />
                <label htmlFor="c2" className="card bg-center h-full max-sm:w-full max-sm:h-[400px] max-sm:pointer-events-none">
                    <div className="row">
                        <div className="icon">2</div>
                        <div className="description">
                            <h4>Winter</h4>
                            <p>Winter has so much to offer creative activities</p>
                        </div>
                    </div>
                </label>
            </div>
            <div>
                <input type="radio" name="slide" id="c3" defaultChecked={false} />
                <label htmlFor="c3" className="card bg-center h-full max-sm:hidden">
                    <div className="row">
                        <div className="icon">3</div>
                        <div className="description">
                            <h4>Winter</h4>
                            <p>Winter has so much to offer creative activities</p>
                        </div>
                    </div>
                </label>
            </div>
            <div>
                <input type="radio" name="slide" id="c4" defaultChecked={false} />
                <label htmlFor="c4" className="card bg-center h-full max-sm:hidden">
                    <div className="row">
                        <div className="icon">4</div>
                        <div className="description">
                            <h4>Winter</h4>
                            <p>Winter has so much to offer creative activities</p>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    )
}

export default Portfolio