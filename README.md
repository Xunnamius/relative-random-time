<!-- badges-start -->

[![Black Lives Matter!][badge-blm]][link-blm]
[![!!UNMAINTAINED!!][badge-unmaintained]][link-unmaintained]

<!-- badges-end -->

# ⛔️ DEPRECATED/UNMAINTAINED

> [!CAUTION]
>
> Time is hard. This package gets it wrong. Use something like
> [Temporal](https://github.com/tc39/proposal-temporal) or
> [various other powerful date/time libraries](https://momentjs.com/docs/#/-project-status/recommendations/).

Quickly and easily get \"fuzzy\" millisecond counts in the near/far past/future.
Useful when you need to work with times relative to other times. For example,
when generating database entries during unit testing, maybe you want the entries
to have logical "created by" dates that occur randomly in time but are well
ordered: one after the other.

This package includes TypeScript types and provides:

- A UMD/CJS/AMD bundle (no tree-shaking)
- ES2015 modules (tree-shaking)

## Install

```sh
npm install relative-random-time
```

## Usage

```typescript
import * as Time from 'relative-random-time';

// What time is it (in milliseconds) right now?
const now = Time.present();
// <== same as Date.now()
console.log(new Date(now).toString());
// <== Tue Oct 06 2020 12:00:33 GMT-0700 (Pacific Daylight Time)

// Suppose we want a time in the near future relative to right now
const nearFuture = Time.nearFuture();
console.log(new Date(nearFuture).toString());
// <== Tue Oct 06 2020 12:01:24 GMT-0700 (Pacific Daylight Time)

// We want another time in the near future relative to the time we just
// generated (i.e. a time that comes *after* the previously generated time).
const lessNearFuture = Time.nearFuture({ after: nearFuture });
console.log(new Date(lessNearFuture).toString());
// <== Tue Oct 06 2020 12:01:38 GMT-0700 (Pacific Daylight Time)

// Now suppose we want a time in the near future relative to nearFuture
// that is also no greater than a minute from now. That is:
// nearFuture < what we want < now + 1 minute
const oneMinuteInMs = 1000 * 60;
const nearFutureOneMinute = Time.nearFuture({
  after: nearFuture,
  before: now + oneMinuteInMs
});
console.log(new Date(nearFutureOneMinute).toString());
// <== Tue Oct 06 2020 12:01:32 GMT-0700 (Pacific Daylight Time)

// And if we wanted a time in the far future, we could ask for that instead.
const farFuture = Time.farFuture();
console.log(new Date(farFuture).toString());
// <== Tue Feb 01 2050 20:32:23 GMT-0800 (Pacific Standard Time)

// We can use before/after the same way, i.e. we want a time in the far future
// that occurs *before* farFuture.
const nearerFarFuture = Time.farFuture({ before: farFuture });
console.log(new Date(nearerFarFuture).toString());
// <== Wed Feb 09 2033 14:10:28 GMT-0800 (Pacific Standard Time)

// Note, however, that nearFuture and farFuture will only return times that are
// in the future relative to right now. They will never return times in the past
// no matter what params are passed in. If we wanted a time in the past,
// there are functions for that too.
const nearPast = Time.nearPast();
const farPast = Time.farPast();
const furtherPast = Time.farPast({ before: farPast });

console.log(new Date(nearPast).toString());
// <== Tue Oct 06 2020 12:00:06 GMT-0700 (Pacific Daylight Time)
console.log(new Date(farPast).toString());
// <== Sun Aug 28 2016 12:59:13 GMT-0700 (Pacific Daylight Time)
console.log(new Date(furtherPast).toString());
// <== Thu Sep 17 1992 04:54:05 GMT-0700 (Pacific Daylight Time)

// And this one will be a time before (earlier than) farPast but after (later
// than) furtherPast!
const nearerFarPast = Time.farPast({ before: farPast, after: furtherPast });
console.log(new Date(nearerFarPast).toString());
// <== Fri Jun 27 1997 20:59:42 GMT-0700 (Pacific Daylight Time)
```

## Documentation

Documentation can be found under [`docs/`](docs/README.md) and can be built with
`npm run build-docs`.

## Contributing

Issues and pull requests are welcome! In lieu of a formal styleguide, take care
to maintain the existing coding style.

Add unit tests for any new or changed functionality. Please lint and test your
code!

## Release History

- 1.0.x Initial release

[badge-blm]: https://xunn.at/badge-blm 'Join the movement!'
[link-blm]: https://xunn.at/donate-blm
[badge-unmaintained]:
  https://xunn.at/badge-unmaintained
  'Unfortunately, this project is unmaintained (forks welcome!)'
[link-unmaintained]: https://xunn.at/link-unmaintained
