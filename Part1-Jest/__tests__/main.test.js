const { TestScheduler } = require("jest")
const formatVolumeIconPath = require("../assets/scripts/main")

describe("greater than 66", () => {
    test('less than 100', () => {
        expect(formatVolumeIconPath(67)).toBe(`./assets/media/icons/volume-level-3.svg`);
    });

    test('greater than 100', () => {
        expect(formatVolumeIconPath(101)).toBe(`./assets/media/icons/volume-level-3.svg`);
    });
});

describe("greater than 33", () => {
    test('less than 67', () => {
        expect(formatVolumeIconPath(66)).toBe(`./assets/media/icons/volume-level-2.svg`);
    });
});

describe("greater than 0", () => {
    test('less than 34', () => {
        expect(formatVolumeIconPath(33)).toBe(`./assets/media/icons/volume-level-1.svg`);
    });
});

describe("not greater than 0", () => {
    test('equal to 0', () => {
        expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`);
    });

    test('less than 0', () => {
        expect(formatVolumeIconPath(-1)).toBe(`./assets/media/icons/volume-level-0.svg`);
    });
});