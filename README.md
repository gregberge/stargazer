# stargazer
[![Build Status](https://travis-ci.org/neoziro/stargazer.svg?branch=master)](https://travis-ci.org/neoziro/stargazer)
[![Dependency Status](https://david-dm.org/neoziro/stargazer.svg?theme=shields.io)](https://david-dm.org/neoziro/stargazer)
[![devDependency Status](https://david-dm.org/neoziro/stargazer/dev-status.svg?theme=shields.io)](https://david-dm.org/neoziro/stargazer#info=devDependencies)

Command line to know more about your GitHub repository stargazers. You can list all emails of users who star your project.

## Install

```
npm install stargazer
```

## Usage

```sh
$ stargazer extract neoziro/stargazer | stargazer emails
frank@gmail.com
marko@hotmail.com
james@yahoo.fr
```

```
  Usage: stargazer [options] [command]


  Commands:

    extract <repository>  Extract stargazers
    emails [file]         Get list of emails

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

## Rate limit

To extend the rate limit of GitHub API, you can provide a GitHub access token in the environment variable "STARGAZER_ACCESS_TOKEN".

```sh
export STARGAZER_ACCESS_TOKEN=81a708fdf2ed3085a503e354c9a9df8d7bcecbb4 
stargazer extract neoziro/stargazer
```

## License

MIT
