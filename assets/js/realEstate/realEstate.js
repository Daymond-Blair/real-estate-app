import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import Footer from './Footer.js'
import listingsData from './data/listingsData.js'

class App extends Component {
  // The class constructor should hold any data we want to manipulate throughout the application as state
  constructor() {
    super()
    //**********CREATE STATE**********/
    this.state = {
      // name: 'Joe',
      listingsData,
      city: 'All',
      house_type: 'All',
      bedrooms: '0',
      min_price: '0',
      max_price: '1000000',
      min_space: '0',
      max_space: '8000',
      elevator: false,
      storage: false,
      jacuzzi_tub: false,
      separate_shower: false,
      fireplace: false,
      swimming_pool: false,
      filteredData: listingsData,
      populateFormsData: '',
      sort: 'price-descending',
      view: 'grid',
      search: '',
      bgColor: '',
    }

    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateFormsData = this.populateFormsData.bind(this)
    this.changeView = this.changeView.bind(this)
  }
  componentWillMount() {
    var listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price
    })
    this.setState({
      listingsData,
    })
  }

  // **********CHANGE DATA**********
  // Create method to trigger anytime we do a change on a field in the form in order for this to work, we will pass it down into the "filter" child component as a prop/property
  change(event) {
    // Initialize variables to hold name and value - if the value is from a checkbox rather than an input or select/option then simply return checked, otherwise, return the field's/target's value - set component state equal to the name and value collected when edited/changed - FOR DEBUG, console log the state to ensure things are working
    var name, value
    name = event.target.name
    value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state)
        this.filteredData()
      },
    )
  }

  // **********CHANGE COLOR**********
  changeColor(color) {
    this.setState({
      bgColor: color,
    })
  }

  // **********CHANGE VIEW**********

  changeView(viewName) {
    this.setState({
      view: viewName,
    })
  }
  // **********FILTER DATA**********
  // Create method to filter through data
  // todo: try splitting price and space up into two different methods so that they can be filtered independently and still show results
  filteredData() {
    var newData = this.state.listingsData.filter((listing) => {
      return (
        listing.price >= this.state.min_price &&
        listing.price <= this.state.max_price &&
        listing.floorSpace >= this.state.min_space &&
        listing.floorSpace <= this.state.max_space &&
        listing.bedrooms >= this.state.bedrooms
      )
    })

    // Filter through city
    if (this.state.city != 'All') {
      newData = newData.filter((listing) => {
        return listing.city == this.state.city
      })
    }

    // Filter through home type
    if (this.state.house_type != 'All') {
      newData = newData.filter((listing) => {
        return listing.house_type == this.state.house_type
      })
    }

    // Sort by descending (default)
    if (this.state.sort == 'price-descending') {
      newData = newData.sort((a, b) => {
        return a.price - b.price
      })
    }

    // Sort by ascending
    if (this.state.sort == 'price-ascending') {
      newData = newData.sort((a, b) => {
        return b.price - a.price
      })
    }

    if (this.state.search != '') {
      newData = newData.filter((listing) => {
        var city = listing.city.toLowerCase()
        var searchText = this.state.search.toLowerCase()
        var n = city.match(searchText)

        if (n != null) {
          return true
        }
      })
    }
    // Pass the filtered data back up to the core state in our constructor
    this.setState({
      filteredData: newData,
    })
  }

  // **********POPULATE FORMS**********
  // We will pass this method down into "filter" child component as a prop/property
  populateFormsData() {
    // Create variable to store array of cities from data
    var cities = this.state.listingsData.map((listing) => {
      return listing.city
    })
    // Take the city data and create a set so that there are no duplicate cities
    cities = new Set(cities)
    // Finally, take the Set object and use the spread operator to "spread it into an array"
    cities = [...cities]
    cities = cities.sort()

    // house_type
    var homes = this.state.listingsData.map((listing) => {
      return listing.house_type
    })
    homes = new Set(homes)
    homes = [...homes]
    homes = homes.sort()
    // bedrooms
    var bedrooms = this.state.listingsData.map((listing) => {
      return listing.bedrooms
    })
    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]
    bedrooms = bedrooms.sort()
    // Pass populated data from this function back up into the core state in our constructor
    this.setState(
      {
        populateFormsData: {
          cities,
          homes,
          bedrooms,
        },
      },
      () => {
        console.log(this.state)
      },
    )
  }

  //**********RENDER CORE APPLICATION**********/
  // In our render function which renders the page to be visible, the change method down into the Filter child component - now we can use that to track when a change is made to the child component
  render() {
    // console.log(this.state.listingsData)
    return (
      <div>
        <Header />
        <section className="content-area">
          <Filter
            change={this.change}
            globalState={this.state}
            populateAction={this.populateFormsData}
          />
          <Listings
            listingsData={this.state.filteredData}
            change={this.change}
            globalState={this.state}
            changeView={this.changeView}
          />
        </section>
        <Footer />
      </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
