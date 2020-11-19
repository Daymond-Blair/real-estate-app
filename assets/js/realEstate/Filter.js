import React, { Component } from 'react'

export default class Filter extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe',
    }

    this.cities = this.cities.bind(this)
  }
  // In this child component, we render the Filter section of our site - we use props or properties to gain access to the change method from our parent component - from here, we simply set that method equal to the onChange attribute for any input field or other field we want the user to be able to edit/change

  componentWillMount() {
    this.props.populateAction()
  }

  cities() {
    if (this.props.globalState.populateFormsData.cities != undefined) {
      var { cities } = this.props.globalState.populateFormsData
      // console.log(cities)
      return cities.map((listing) => {
        return (
          <option key={listing} value={listing}>
            {listing}
          </option>
        )
      })
    }
  }
  homes() {
    if (this.props.globalState.populateFormsData.homes != undefined) {
      var { homes } = this.props.globalState.populateFormsData
      console.log(homes)
      return homes.map((listing) => {
        return (
          <option key={listing} value={listing}>
            {listing}
          </option>
        )
      })
    }
  }
  bedrooms() {
    if (this.props.globalState.populateFormsData.bedrooms != undefined) {
      var { bedrooms } = this.props.globalState.populateFormsData
      console.log(bedrooms)
      return bedrooms.map((listing) => {
        return (
          <option key={listing} value={listing}>
            {listing}
          </option>
        )
      })
    }
  }
  render() {
    return (
      <section className="filter">
        <div className="filter-container">
          <h4>filter</h4>
          {/* SELECT BOXES */}
          <select
            name="city"
            className="city"
            onChange={this.props.change}
            defaultValue=""
          >
            <option value="" disabled hidden>
              City
            </option>
            <option value="All">All Cities</option>
            {this.cities()}
          </select>
          <select
            name="house_type"
            className="house-type"
            onChange={this.props.change}
            defaultValue=""
          >
            <option value="" disabled hidden>
              Type
            </option>
            <option value="All">All Homes</option>
            {this.homes()}
          </select>
          <select
            name="bedrooms"
            className="bedrooms"
            onChange={this.props.change}
            defaultValue=""
          >
            <option value="" disabled hidden>
              Rooms
            </option>
            <option value="All">All Rooms</option>
            {this.bedrooms()}
          </select>
          {/* FILTERS */}
          <div className="filter-price">
            <title>Price</title>
            <h5 className="title">price</h5>
            <input
              type="text"
              name="min_price"
              className="min-price"
              placeholder="Min Price"
              onChange={this.props.change}
              value={this.props.globalState.min_price}
            />
            <span> - </span>
            <input
              type="text"
              name="max_price"
              className="max-price"
              placeholder="Max Price"
              onChange={this.props.change}
              value={this.props.globalState.max_price}
            />
          </div>
          <div className="filter-space">
            <title>Square Feet</title>
            <h5 className="title">square feet</h5>
            <input
              type="text"
              name="min_space"
              className="min-space"
              placeholder="Min Feet"
              onChange={this.props.change}
              value={this.props.globalState.min_space}
            />
            <span> - </span>
            <input
              type="text"
              name="max_space"
              className="max-space"
              placeholder="Max Feet"
              onChange={this.props.change}
              value={this.props.globalState.max_space}
            />
          </div>
          {/* CHECKBOXES */}
          <div className="amenities">
            <label>
              {'Elevator'}
              <input
                type="checkbox"
                value="elevator"
                name="elevator"
                className="amenities-checkbox"
                onChange={this.props.change}
                // value={this.props.globalState.elevator}
              />
            </label>
            <label>
              {'Storage'}
              <input
                type="checkbox"
                value="storage"
                name="storage"
                className="amenities-checkbox"
                onChange={this.props.change}
              />
            </label>
            <label>
              {'Jacuzzi Tub'}
              <input
                type="checkbox"
                value="jacuzzi-tub"
                name="jacuzzi_tub"
                className="amenities-checkbox"
                onChange={this.props.change}
              />
            </label>
            <label>
              {'Separate Shower'}
              <input
                type="checkbox"
                value="separate_shower"
                name="separate_shower"
                className="amenities-checkbox"
                onChange={this.props.change}
              />
            </label>
            <label>
              {'Fireplace'}
              <input
                type="checkbox"
                value="fireplace"
                name="fireplace"
                className="amenities-checkbox"
                onChange={this.props.change}
              />
            </label>
            <label>
              {'Swimming Pool'}
              <input
                type="checkbox"
                value="swimming-pool"
                name="swimming_pool"
                className="amenities-checkbox"
                onChange={this.props.change}
              />
            </label>
          </div>
        </div>
      </section>
    )
  }
}
