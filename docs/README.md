# relative-random-time

## Index

### Classes

* [BadBoundsError](classes/badboundserror.md)

### Type aliases

* [TimeParams](README.md#timeparams)
* [TimespanParams](README.md#timespanparams)

### Functions

* [farFuture](README.md#farfuture)
* [farPast](README.md#farpast)
* [fromTimespan](README.md#fromtimespan)
* [nearFuture](README.md#nearfuture)
* [nearPast](README.md#nearpast)
* [present](README.md#present)

## Type aliases

### TimeParams

Ƭ  **TimeParams**: { after?: undefined \| number ; before?: undefined \| number  }

*Defined in [src/types.ts:1](https://github.com/Xunnamius/relative-random-time/blob/a222753/src/types.ts#L1)*

#### Type declaration:

Name | Type |
------ | ------ |
`after?` | undefined \| number |
`before?` | undefined \| number |

___

### TimespanParams

Ƭ  **TimespanParams**: [TimeParams](README.md#timeparams) & { bounds: number[]  }

*Defined in [src/types.ts:6](https://github.com/Xunnamius/relative-random-time/blob/a222753/src/types.ts#L6)*

## Functions

### farFuture

▸ **farFuture**({ after: undefined \| number ; before: undefined \| number  }): number

*Defined in [src/index.ts:81](https://github.com/Xunnamius/relative-random-time/blob/a222753/src/index.ts#L81)*

Returns a number that is higher than `before` but lower than `after`
representing a time in the near future (seconds to minutes).

**`throws`** BadBoundsError if passed invalid bounds

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`(destructured)` | { after: undefined \| number ; before: undefined \| number  } | {} |

**Returns:** number

___

### farPast

▸ **farPast**({ after: undefined \| number ; before: undefined \| number  }): number

*Defined in [src/index.ts:44](https://github.com/Xunnamius/relative-random-time/blob/a222753/src/index.ts#L44)*

Returns a number that is higher than `before` but lower than `after`
representing a time in the distant past (months to decades).

**`throws`** BadBoundsError if passed invalid bounds

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`(destructured)` | { after: undefined \| number ; before: undefined \| number  } | {} |

**Returns:** number

___

### fromTimespan

▸ **fromTimespan**({ after: undefined \| number ; before: undefined \| number ; bounds: number[]  }): number

*Defined in [src/index.ts:22](https://github.com/Xunnamius/relative-random-time/blob/a222753/src/index.ts#L22)*

Returns a number between bounds[0] and bounds[1] (inclusive) that is higher
than `before` but lower than `after`.

**`throws`** BadBoundsError if passed invalid bounds

#### Parameters:

Name | Type |
------ | ------ |
`(destructured)` | { after: undefined \| number ; before: undefined \| number ; bounds: number[]  } |

**Returns:** number

___

### nearFuture

▸ **nearFuture**({ after: undefined \| number ; before: undefined \| number  }): number

*Defined in [src/index.ts:71](https://github.com/Xunnamius/relative-random-time/blob/a222753/src/index.ts#L71)*

Returns a number that is higher than `before` but lower than `after`
representing a time in the distant future (months to decades).

**`throws`** BadBoundsError if passed invalid bounds

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`(destructured)` | { after: undefined \| number ; before: undefined \| number  } | {} |

**Returns:** number

___

### nearPast

▸ **nearPast**({ after: undefined \| number ; before: undefined \| number  }): number

*Defined in [src/index.ts:54](https://github.com/Xunnamius/relative-random-time/blob/a222753/src/index.ts#L54)*

Returns a number that is higher than `before` but lower than `after`
representing a time in the near past (seconds to minutes).

**`throws`** BadBoundsError if passed invalid bounds

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`(destructured)` | { after: undefined \| number ; before: undefined \| number  } | {} |

**Returns:** number

___

### present

▸ **present**(): number

*Defined in [src/index.ts:61](https://github.com/Xunnamius/relative-random-time/blob/a222753/src/index.ts#L61)*

Returns Date.now()

**Returns:** number
