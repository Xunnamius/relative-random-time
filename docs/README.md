# relative-random-time

## Index

### Classes

* [BadBoundsError](classes/badboundserror.md)

### Functions

* [farFuture](README.md#farfuture)
* [farPast](README.md#farpast)
* [fromTimespan](README.md#fromtimespan)
* [nearFuture](README.md#nearfuture)
* [nearPast](README.md#nearpast)
* [present](README.md#present)

## Functions

### farFuture

▸ **farFuture**({ after: undefined \| number ; before: undefined \| number  }): number

*Defined in [repos/relative-random-time/src/index.ts:79](https://github.com/Xunnamius/relative-random-time/blob/b98b584/src/index.ts#L79)*

Returns a number that is higher than `before` but lower than `after`
representing a time in the near future (seconds to minutes).

**`throws`** BadBoundsError if passed invalid bounds

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
` ` | { after: undefined \| number ; before: undefined \| number  } | {} |

**Returns:** number

___

### farPast

▸ **farPast**({ after: undefined \| number ; before: undefined \| number  }): number

*Defined in [repos/relative-random-time/src/index.ts:42](https://github.com/Xunnamius/relative-random-time/blob/b98b584/src/index.ts#L42)*

Returns a number that is higher than `before` but lower than `after`
representing a time in the distant past (months to decades).

**`throws`** BadBoundsError if passed invalid bounds

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
` ` | { after: undefined \| number ; before: undefined \| number  } | {} |

**Returns:** number

___

### fromTimespan

▸ **fromTimespan**({ after: undefined \| number ; before: undefined \| number ; bounds: number[]  }): number

*Defined in [repos/relative-random-time/src/index.ts:20](https://github.com/Xunnamius/relative-random-time/blob/b98b584/src/index.ts#L20)*

Returns a number between bounds[0] and bounds[1] (inclusive) that is higher
than `before` but lower than `after`.

**`throws`** BadBoundsError if passed invalid bounds

#### Parameters:

Name | Type |
------ | ------ |
` ` | { after: undefined \| number ; before: undefined \| number ; bounds: number[]  } |

**Returns:** number

___

### nearFuture

▸ **nearFuture**({ after: undefined \| number ; before: undefined \| number  }): number

*Defined in [repos/relative-random-time/src/index.ts:69](https://github.com/Xunnamius/relative-random-time/blob/b98b584/src/index.ts#L69)*

Returns a number that is higher than `before` but lower than `after`
representing a time in the distant future (months to decades).

**`throws`** BadBoundsError if passed invalid bounds

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
` ` | { after: undefined \| number ; before: undefined \| number  } | {} |

**Returns:** number

___

### nearPast

▸ **nearPast**({ after: undefined \| number ; before: undefined \| number  }): number

*Defined in [repos/relative-random-time/src/index.ts:52](https://github.com/Xunnamius/relative-random-time/blob/b98b584/src/index.ts#L52)*

Returns a number that is higher than `before` but lower than `after`
representing a time in the near past (seconds to minutes).

**`throws`** BadBoundsError if passed invalid bounds

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
` ` | { after: undefined \| number ; before: undefined \| number  } | {} |

**Returns:** number

___

### present

▸ **present**(): number

*Defined in [repos/relative-random-time/src/index.ts:59](https://github.com/Xunnamius/relative-random-time/blob/b98b584/src/index.ts#L59)*

Returns Date.now()

**Returns:** number
