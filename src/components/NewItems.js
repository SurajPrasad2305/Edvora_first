import React, { Component } from 'react'

export class NewItems extends Component {
    constructor() {
        super();
        console.log("bxjhvehgcvehgvc");
    }
    render() {

        let { id, originstation, stationpath, date, city, state, imageurl } = this.props;
        return (
            <div class="flex-container">
                {/* <div className="card" style={{ width: "18rem" }}> */}
                {/* <div> */}
                <div>
                    <img id='image' src={imageurl} className="card-img-top" alt="..." />
                </div>
                {/* </div> */}
                {/* <div className="card-body"> */}
                <div>

                    <li className="card-title"> Ride id : {id}</li>
                    <li className="origin station">origin station : {originstation}</li>
                    <li className="station-path"> station_path : {stationpath}</li>
                    <li className="date"> date : {date}</li>

                    <li className="city">{city}</li>
                    <li className="state">{state}</li>
                </div>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
                
            </div>
        )
    }
}

export default NewItems