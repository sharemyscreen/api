# ShareMyScreen API Service

## Production

The service is deployed on heroku and is available at this address:

```
https://sharemyscreen-api.herokuapp.com/
```

## Installation

### Vagrant

In order to use the vagrant virtual environment you will need to get through the steps below.

As referenced by the [issue #1](https://github.com/phunx/sharemyscreen-api/issues/1),
**Windows**, **Vagrant** and **NPM** seem not usable together for the moment.

Firstly, you need to download **Vagrant**, in its latest version.
[Download Vagrant](https://www.vagrantup.com/downloads.html).

Secondly, you need a virtualization provider like **VirtualBox** or **VMware**.
[Download VirtualBox](https://www.virtualbox.org/wiki/Downloads).

### Native

If you want to have the development environment natively,
you must install the following technologies:
- **Node.js** (normally packaged with **NPM**)
- **MongoDB**

Needless to say it's up to you to determine the best way to get them regarding your system configuration.

Then, with **NPM**:

```shell
$ npm install -g nodemon mocha gulp
```
You may need **elevated privileges** to perform the action above.

## Getting Started

### Vagrant

```shell
$ git clone https://github.com/phunx/sharemyscreen-api
$ cd sharemyscreen-api/
$ vagrant up
$ vagrant ssh
$ cd /vagrant
$ npm start
```

### Native

```shell
$ git clone https://github.com/phunx/sharemyscreen-api
$ cd sharemyscreen-api/
$ npm start
```

## Test

```shell
$ npm test
```
