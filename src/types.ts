export type TimeParams = {
    before?: number,
    after?: number
};

export type TimespanParams = TimeParams & { bounds: number[] };
