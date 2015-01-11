# Takana Example Project

This is a basic example project which will help you get up and running with [takana](http://usetakana.com) in no time. There are two ways you can run takana: (1) using [gulp](http://gulpjs.com) and (2) using the takana command line interface.

## Requirements

- Mac OSX or Linux (Windows support coming soon)
- [node.js](http://nodejs.org/)
- [Sublime Text 2 or 3](http://www.sublimetext.com/)

## Usage with Gulp

The project includes a simple gulpfile which allows you to run takana and compile the sass source files.

#### 1. Clone the project locally

```sh
$ git clone git@github.com:mechio/takana-example.git && cd takana-example
```

#### 2. Install gulp globally

```sh
$ npm install -g gulp
```

#### 3. Install the package dependencies

```sh
$ npm install
```

#### 4. Run takana

```sh
$ gulp takana
```

#### 5. You're all set

Open `index.html` in your browser and `style.scss` in Sublime, you'll see the 

## Usage with the takana CLI

Follow the steps 1 to 3 above, then use the following instead of `gulp takana` to run takana via the cli:

```sh
$ npm install -g takana  # install takana globally
$ takana .               # run takana from the current working directory
```

