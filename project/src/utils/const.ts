export const CITIES = [
  'Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'
];

export const DEFAULT_CITY = CITIES[0];

export const MAX_RATING = 5;

export const MAX_AMOUNT_OF_COMMENTS = 10;

export const MAX_AMOUNT_OF_PHOTOS = 6;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const sortTypes = {
  POPULAR: 'Popular',
  PRICE_LOW: 'Price: low to high',
  PRICE_HIGH: 'Price: high to low',
  RATING: 'Top rated first',
};

export enum APIRoute {
  Offers = '/hotels',
  Comments = '/comments',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
}

export enum NameSpace {
  Comments = 'COMMENTS',
  Offers = 'OFFERS',
  User = 'USER',
}

export const currentOffer = {
  'bedrooms': 0,
  'city': {
    'location': {
      'latitude': 0,
      'longitude': 0,
      'zoom': 0
    },
    'name': ''
  },
  'description': '',
  'goods': [
    '',
  ],
  'host': {
    'avatarUrl': '',
    'id': 0,
    'isPro': false,
    'name': ''
  },
  'id': 0,
  'images': [
    ''
  ],
  'isFavorite': false,
  'isPremium': false,
  'location': {
    'latitude': 0,
    'longitude': 0,
    'zoom': 0
  },
  'maxAdults': 0,
  'previewImage': '',
  'price': 0,
  'rating': 0,
  'title': '',
  'type': ''
};
