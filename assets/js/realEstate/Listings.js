import React, { Component } from 'react'

export default class Listings extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe',
    }
    this.myListing = this.myListing.bind(this)
  }
  // clickedBtn = () => {
  //   console.log('swag')
  // }

  myListing = () => {
    var { listingsData } = this.props
    console.log(listingsData)
    if (listingsData == undefined || listingsData.length == 0) {
      return 'No matches found'
    }

    return listingsData.map((listing, index) => {
      if (this.props.globalState.view == 'grid') {
        // **********RETURN GRID VIEW**********
        return (
          <div className="col-md-3" key={index}>
            <div className="listing">
              <div
                className="listing-img"
                style={{ background: `url("${listing.image}")` }}
              >
                <span className="address">{listing.address}</span>
                <div className="details">
                  <div className="col-user-img">
                    <div className="user-img"></div>
                  </div>
                  <div className="col-md-9">
                    <div className="user-details">
                      <span className="user-name">Agatha Thompson</span>
                      <span className="post-date">09/26/2020</span>
                    </div>
                    <div className="listing-details">
                      <div className="floor-space">
                        <i className="fa fa-calculator" aria-hidden="true"></i>
                        <span>{listing.floorSpace} ft&sup2;</span>
                        <span>unfurnished</span>
                      </div>
                      <div className="bedrooms">
                        <i className="fa fa-bed" aria-hidden="true"></i>
                        <span>{listing.bedrooms}</span>
                        <span>
                          <a href>view map</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <span className="price">${listing.price}/month</span>
                <br />
                <span className="map-marker">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  {listing.city}, {listing.state}
                </span>
              </div>
            </div>
          </div>
        )
      } else {
        // **********RETURN LIST VIEW**********
        return (
          <div className="col-md-12 col-lg-6" key={index}>
            <div className="listing">
              <div
                className="listing-img"
                style={{ background: `url("${listing.image}")` }}
              >
                <span className="address">{listing.address}</span>
                <div className="details">
                  <div className="col-user-img">
                    <div className="user-img"></div>
                  </div>
                  <div className="col-md-9">
                    <div className="user-details">
                      <span className="user-name">Agatha Thompson</span>
                      <span className="post-date">09/26/2020</span>
                    </div>
                    <div className="listing-details">
                      <div className="floor-space">
                        <i className="fa fa-calculator" aria-hidden="true"></i>
                        <span>{listing.floorSpace} ft&sup2;</span>
                        <span>unfurnished</span>
                      </div>
                      <div className="bedrooms">
                        <i className="fa fa-bed" aria-hidden="true"></i>
                        <span>{listing.bedrooms}</span>
                        <span>
                          <a href>view map</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <span className="price">${listing.price}/month</span>
                <br />
                <span className="map-marker">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  {listing.city}, {listing.state}
                </span>
              </div>
            </div>
          </div>
        )
      }
    })
  }
  render() {
    return (
      <section className="listings">
        <section className="search-area">
          <input
            type="text"
            placeholder="Short stay"
            name="search"
            onChange={this.props.change}
          />
          <i className="fa fa-times" aria-hidden="true"></i>
          <i className="fa fa-location-arrow" aria-hidden="true"></i>
          {/* CUT THIS SELECT OUT IF IT MESSES WITH RESPONSIVE */}
          <select name="location" className="location">
            <option>{'My location '}</option>
          </select>
        </section>
        <section className="sort-area">
          <div className="results">
            {this.props.globalState.filteredData.length} results found
          </div>
          <div className="sort-options">
            <select name="sort" className="sort" onChange={this.props.change}>
              <option value="price-descending">lowest price</option>
              <option value="price-ascending">highest price</option>
            </select>
            <div className="view">
              {/* LIST VIEW */}
              <i
                className="fa fa-list"
                aria-hidden="true"
                onClick={this.props.changeView.bind(null, 'list')}
              ></i>
              {/* GRID VIEW */}
              <i
                className="fa fa-th"
                aria-hidden="true"
                onClick={this.props.changeView.bind(null, 'grid')}
              ></i>
            </div>
          </div>
        </section>
        <section className="listings-results">
          <div className="row">{this.myListing()}</div>
        </section>
        <section className="pagination">
          <ul className="pages">
            <li>prev</li>
            <li>1</li>
            <li>2</li>
            <li className="active">3</li>
            <li>4</li>
            <li>5</li>
            <li>next</li>
          </ul>
        </section>
      </section>
    )
  }
}
