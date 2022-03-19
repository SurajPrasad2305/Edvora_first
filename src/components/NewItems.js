import React, { Component } from 'react'

export class NewItems extends Component {
    constructor() {
        super();
        console.log("bxjhvehgcvehgvc");
    }
    render() {

        let { id, originstation, stationpath, date, city, state, imageurl } = this.props;
        return (
            // <div class="flex-container">
                <div class="rides" id='rides'>
                    <div class="ride" id='ride'>
                        <div class="ride-image" id='img'>
                            <img src="https://picsum.photos/200" alt="" class="ride-image" />
                        </div>
                        <div class="ride-data" id='ride_data'>
                            <div>Ride Id: {id}</div>
                            <div>Origin Station:  {originstation}</div>
                            <div>station_path: {stationpath}</div>
                            <div>Date: {date}</div>
                            <div>Distance: 0</div>
                        </div>
                        <div class="ride-location" id='location'>
                            <div>
                                <div class="location-button" id='lb'>{city}</div>
                            </div>
                            <div>
                                <div class="location-button" id='lb'>{state}</div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default NewItems