webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }
  // In this child component, we render the Filter section of our site - we use props or properties to gain access to the change method from our parent component - from here, we simply set that method equal to the onChange attribute for any input field or other field we want the user to be able to edit/change


  _createClass(Filter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'filter' },
        _react2.default.createElement(
          'div',
          { className: 'filter-container' },
          _react2.default.createElement(
            'h4',
            null,
            'filter'
          ),
          _react2.default.createElement(
            'select',
            {
              name: 'city',
              className: 'city',
              onChange: this.props.change,
              defaultValue: ''
            },
            _react2.default.createElement(
              'option',
              { value: '', disabled: true, hidden: true },
              'City'
            ),
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All Cities'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Greenville' },
              'Greenville'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Renton' },
              'Renton'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Seattle' },
              'Seattle'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Tacoma' },
              'Tacoma'
            )
          ),
          _react2.default.createElement(
            'select',
            {
              name: 'house_type',
              className: 'house-type',
              onChange: this.props.change,
              defaultValue: ''
            },
            _react2.default.createElement(
              'option',
              { value: '', disabled: true, hidden: true },
              'Type'
            ),
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All Homes'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Apartment' },
              'Apartment'
            ),
            _react2.default.createElement(
              'option',
              { value: 'House' },
              'House'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Townhome' },
              'Townhome'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Condo' },
              'Condo'
            )
          ),
          _react2.default.createElement(
            'select',
            {
              name: 'bedrooms',
              className: 'bedrooms',
              onChange: this.props.change,
              defaultValue: ''
            },
            _react2.default.createElement(
              'option',
              { value: '', disabled: true, hidden: true },
              'Rooms'
            ),
            _react2.default.createElement(
              'option',
              { value: '0' },
              'Studio'
            ),
            _react2.default.createElement(
              'option',
              { value: '1' },
              '1 Bed'
            ),
            _react2.default.createElement(
              'option',
              { value: '2' },
              '2 Beds'
            ),
            _react2.default.createElement(
              'option',
              { value: '3' },
              '3 Beds'
            ),
            _react2.default.createElement(
              'option',
              { value: '4' },
              '4+ Beds'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'filter-price' },
            _react2.default.createElement(
              'title',
              null,
              'Price'
            ),
            _react2.default.createElement(
              'h5',
              { className: 'title' },
              'price'
            ),
            _react2.default.createElement('input', {
              type: 'text',
              name: 'min_price',
              className: 'min-price',
              placeholder: 'Min Price',
              onChange: this.props.change,
              value: this.props.globalState.min_price
            }),
            _react2.default.createElement(
              'span',
              null,
              ' - '
            ),
            _react2.default.createElement('input', {
              type: 'text',
              name: 'max_price',
              className: 'max-price',
              placeholder: 'Max Price',
              onChange: this.props.change,
              value: this.props.globalState.max_price
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filter-space' },
            _react2.default.createElement(
              'title',
              null,
              'Square Feet'
            ),
            _react2.default.createElement(
              'h5',
              { className: 'title' },
              'square feet'
            ),
            _react2.default.createElement('input', {
              type: 'text',
              name: 'min_space',
              className: 'min-space',
              placeholder: 'Min Feet',
              onChange: this.props.change,
              value: this.props.globalState.min_space
            }),
            _react2.default.createElement(
              'span',
              null,
              ' - '
            ),
            _react2.default.createElement('input', {
              type: 'text',
              name: 'max_space',
              className: 'max-space',
              placeholder: 'Max Feet',
              onChange: this.props.change,
              value: this.props.globalState.max_space
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'amenities' },
            _react2.default.createElement(
              'label',
              null,
              'Elevator',
              _react2.default.createElement('input', {
                type: 'checkbox',
                value: 'elevator',
                name: 'elevator',
                className: 'amenities-checkbox',
                onChange: this.props.change
                // value={this.props.globalState.elevator}
              })
            ),
            _react2.default.createElement(
              'label',
              null,
              'Storage',
              _react2.default.createElement('input', {
                type: 'checkbox',
                value: 'storage',
                name: 'storage',
                className: 'amenities-checkbox',
                onChange: this.props.change
              })
            ),
            _react2.default.createElement(
              'label',
              null,
              'Jacuzzi Tub',
              _react2.default.createElement('input', {
                type: 'checkbox',
                value: 'jacuzzi-tub',
                name: 'jacuzzi_tub',
                className: 'amenities-checkbox',
                onChange: this.props.change
              })
            ),
            _react2.default.createElement(
              'label',
              null,
              'Separate Shower',
              _react2.default.createElement('input', {
                type: 'checkbox',
                value: 'separate_shower',
                name: 'separate_shower',
                className: 'amenities-checkbox',
                onChange: this.props.change
              })
            ),
            _react2.default.createElement(
              'label',
              null,
              'Fireplace',
              _react2.default.createElement('input', {
                type: 'checkbox',
                value: 'fireplace',
                name: 'fireplace',
                className: 'amenities-checkbox',
                onChange: this.props.change
              })
            ),
            _react2.default.createElement(
              'label',
              null,
              'Swimming Pool',
              _react2.default.createElement('input', {
                type: 'checkbox',
                value: 'swimming-pool',
                name: 'swimming_pool',
                className: 'amenities-checkbox',
                onChange: this.props.change
              })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }
  // clickedBtn = () => {
  //   console.log('swag')
  // }


  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'footer' },
        _react2.default.createElement(
          'div',
          null,
          'Footer Placeholder'
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }
  // clickedBtn = () => {
  //   console.log('swag')
  // }


  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          'Logo'
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Create Ads'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'About Us'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Log in'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'register-btn' },
            'Register'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.myListing = function () {
      var listingsData = _this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return 'No matches found in this city';
      }

      return listingsData.map(function (listing, index) {
        return _react2.default.createElement(
          'div',
          { className: 'col-md-3', key: index },
          _react2.default.createElement(
            'div',
            { className: 'listing' },
            _react2.default.createElement(
              'div',
              {
                className: 'listing-img',
                style: { background: 'url("' + listing.image + '")' }
              },
              _react2.default.createElement(
                'span',
                { className: 'address' },
                listing.address
              ),
              _react2.default.createElement(
                'div',
                { className: 'details' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-user-img' },
                  _react2.default.createElement('div', { className: 'user-img' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-9' },
                  _react2.default.createElement(
                    'div',
                    { className: 'user-details' },
                    _react2.default.createElement(
                      'span',
                      { className: 'user-name' },
                      'Agatha Thompson'
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'post-date' },
                      '09/26/2020'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'listing-details' },
                    _react2.default.createElement(
                      'div',
                      { className: 'floor-space' },
                      _react2.default.createElement('i', { className: 'fa fa-calculator', 'aria-hidden': 'true' }),
                      _react2.default.createElement(
                        'span',
                        null,
                        listing.floorSpace,
                        ' ft\xB2'
                      ),
                      _react2.default.createElement(
                        'span',
                        null,
                        'unfurnished'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'bedrooms' },
                      _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                      _react2.default.createElement(
                        'span',
                        null,
                        listing.rooms,
                        ' bedrooms'
                      ),
                      _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                          'a',
                          { href: true },
                          'view map'
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'bottom-info' },
              _react2.default.createElement(
                'span',
                { className: 'price' },
                '$',
                listing.price,
                '/month'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'span',
                { className: 'map-marker' },
                _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                listing.city,
                ', ',
                listing.state
              )
            )
          )
        );
      });
    };

    _this.state = {
      name: 'Joe'
    };
    _this.myListing = _this.myListing.bind(_this);
    return _this;
  }
  // clickedBtn = () => {
  //   console.log('swag')
  // }

  _createClass(Listings, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', placeholder: 'Short stay', name: 'search' }),
          _react2.default.createElement('i', { className: 'fa fa-times', 'aria-hidden': 'true' }),
          _react2.default.createElement('i', { className: 'fa fa-location-arrow', 'aria-hidden': 'true' }),
          _react2.default.createElement(
            'select',
            { name: 'location', className: 'location' },
            _react2.default.createElement(
              'option',
              null,
              'My location '
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'sort-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            '3920 results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sort', className: 'sort' },
              _react2.default.createElement(
                'option',
                { value: 'price-ascending' },
                'highest price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-descending' },
                'lowest price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fa fa-list', 'aria-hidden': 'true' }),
              _react2.default.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true' })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          this.myListing()
        ),
        _react2.default.createElement(
          'section',
          { className: 'pagination' },
          _react2.default.createElement(
            'ul',
            { className: 'pages' },
            _react2.default.createElement(
              'li',
              null,
              'prev'
            ),
            _react2.default.createElement(
              'li',
              null,
              '1'
            ),
            _react2.default.createElement(
              'li',
              null,
              '2'
            ),
            _react2.default.createElement(
              'li',
              { className: 'active' },
              '3'
            ),
            _react2.default.createElement(
              'li',
              null,
              '4'
            ),
            _react2.default.createElement(
              'li',
              null,
              '5'
            ),
            _react2.default.createElement(
              'li',
              null,
              'next'
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  address: '5050 Secondhand Lane',
  city: 'Tacoma',
  state: 'Washington',
  rooms: 4,
  price: 5200,
  floorSpace: 2300,
  extras: ['elevator', 'storage', 'elevator', 'bathtub', 'fireplace'],
  homeType: 'apartment',
  image: 'https://i.pinimg.com/564x/18/77/77/187777a8e40b4733cbb809152839a70a.jpg'
}, {
  address: '3252 Hwy 1 South',
  city: 'Greenville',
  state: 'Mississippi',
  rooms: 3,
  price: 900,
  floorSpace: 1700,
  extras: ['elevator', 'storage', 'elevator', 'bathtub', 'fireplace'],
  homeType: 'house',
  image: 'https://i.pinimg.com/564x/5e/5e/39/5e5e39706d7a3de972d2d21c7ff2832f.jpg '
}, {
  address: '1300 Eagle Ridge Dr. S',
  city: 'Renton',
  state: 'Washington',
  rooms: 2,
  price: 1450,
  floorSpace: 800,
  extras: ['elevator', 'storage', 'elevator', 'bathtub', 'fireplace'],
  homeType: 'condo',
  image: 'https://cdnimages.familyhomeplans.com/plans/75167/75167-b600.jpg'
}];

exports.default = listingsData;
// https://media2.s-nbcnews.com/j/newscms/2019_24/1448814/how-size-doesnt-make-you-happier-today-main-190614_b7784729377665100e60a6b2d3a6150e.fit-2000w.jpg

// https://i.pinimg.com/564x/5e/5e/39/5e5e39706d7a3de972d2d21c7ff2832f.jpg

// https://cdnimages.familyhomeplans.com/plans/75167/75167-b600.jpg

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(232);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(230);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(233);

var _Listings2 = _interopRequireDefault(_Listings);

var _Footer = __webpack_require__(231);

var _Footer2 = _interopRequireDefault(_Footer);

var _listingsData = __webpack_require__(234);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  // The class constructor should hold any data we want to manipulate throughout the application as state
  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      // name: 'Joe',
      listingsData: _listingsData2.default,
      city: 'All',
      house_type: 'All',
      bedrooms: 0,
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
      filteredData: _listingsData2.default
    };
    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    return _this;
  }

  // Create method to trigger anytime we do a change on a field in the form


  _createClass(App, [{
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      // Initialize variables to hold name and value - if the value is from a checkbox rather than an input or select/option then simply return checked, otherwise, return the field's/target's value - set component state equal to the name and value collected when edited/changed - FOR DEBUG, console log the state to ensure things are working
      var name, value;
      name = event.target.name;
      value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData();
      });
    }
    // Create method to filter through data
    // todo: try splitting price and space up into two different methods so that they can be filtered independently and still show results

  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (listing) {
        return listing.price >= _this3.state.min_price && listing.price <= _this3.state.max_price || listing.floorSpace >= _this3.state.min_space && listing.floorSpace <= _this3.state.max_space;
      });

      if (this.state.city != 'All') {
        newData = newData.filter(function (listing) {
          return listing.city == _this3.state.city;
        });
      }

      this.setState({
        filteredData: newData
      });
    }
    // In our render function which renders the page to be visible, the change method down into the Filter child component - now we can use that to track when a change is made to the child component

  }, {
    key: 'render',
    value: function render() {
      // console.log(this.state.listingsData)
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { className: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData })
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[238]);