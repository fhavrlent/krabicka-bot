# Krabicka bot 🤖

## Did I break something? 🤦‍♂️

[![Codeship Status for fhavrlent/krabicka](https://app.codeship.com/projects/3b49cbd0-7a86-0138-8c59-4ab973632a01/status?branch=master)](https://app.codeship.com/projects/396669)

## More badges

![GitHub](https://img.shields.io/github/license/fhavrlent/krabicka) ![GitHub repo size](https://img.shields.io/github/repo-size/fhavrlent/krabicka) ![GitHub package.json version](https://img.shields.io/github/package-json/v/fhavrlent/krabicka) [![Maintainability](https://api.codeclimate.com/v1/badges/09117691334146af2e52/maintainability)](https://codeclimate.com/github/fhavrlent/krabicka-bot/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/09117691334146af2e52/test_coverage)](https://codeclimate.com/github/fhavrlent/krabicka-bot/test_coverage)

## Project 📈

### What is this? And why? 🤔

Bot that, if channel is online, will ~~spam~~ type `!krabicka` in the chat so I can get that sweet, absolutely valuable loot. This might also be used as a based for legit Twitch bot of some sort 🤷‍♂️.

### What is included / used👷‍♂️

[Agenda](https://github.com/agenda/agenda) to run the bot every hour or so.

[Tmi.js](https://github.com/tmijs/tmi.js) to connect to Twitch chat.

[Winston](https://github.com/winstonjs/winston) so I can log those totally important messages / events.

[TypeScript](https://www.typescriptlang.org/), because why not make my life ~~harder~~ better.

[Sentry](https://sentry.io/), to log those pesky errors and warning.

Deployed using [Github actions](https://github.com/features/actions), hosted on [Digital Ocean](https://digitalocean.com), managed by [PM2](https://pm2.keymetrics.io/).
