# Teleformat

[![Build Status](https://travis-ci.org/ChrisH91/teleformat.svg?branch=master)](https://travis-ci.org/ChrisH91/teleformat)
[![codecov](https://codecov.io/gh/ChrisH91/teleformat/branch/master/graph/badge.svg)](https://codecov.io/gh/ChrisH91/teleformat)
[![Maintainability](https://api.codeclimate.com/v1/badges/b332793f2c99806fdb6f/maintainability)](https://codeclimate.com/github/ChrisH91/teleformat/maintainability)

Teleformat is a lightweight library for formatting phone numbers into a good
looking user friendly format. It takes any input which represents a phone
number and returns deocrated local and international versions of the number as
well as the  [E.164](https://en.wikipedia.org/wiki/E.164).

If you are receiving input from users
[teleformat-input](https://github.com/ChrisH91/teleformat-input) provides
functionality to format a phone number as the user types.

## Getting started

Install using `yarn`

```
yarn add teleformat
```

or `npm`

```
npm install teleformat --save
```

Call decorate on any phone number to get local, internation and E.164 versions
of the number.

```javascript
import teleformat from 'teleformat'
teleformat.decorate('+447777888888');
```

This returns an object of the form:

```javascript
{
  international: '+44 (0) 7777 888888',
  local: '07777 888888',
  e164: '447777888888',
}
```
