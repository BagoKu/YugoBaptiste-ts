import { describe, expect, it } from 'vitest';
import { mapNumbersWithYugoBaptiste, YugoBaptiste } from "./mapNumbersWithYugoBaptiste";


describe('YugoBaptiste Kata', () => {
  describe('YugoBaptiste function', () => {
    it('should return Thomas when entry is 1', function () {
      expect(YugoBaptiste(1)).toBe('Thomas');
    });

    it('should return 2 when entry is 2', () => {
      expect(YugoBaptiste(2)).toBe(2);
    })

    it('should return Yugo when entry is 3', function () {
      expect(YugoBaptiste(3)).toBe('Yugo');
    });

    it('should return Baptiste when entry is 5', () => {
      expect(YugoBaptiste(5)).toBe('Baptiste');
    })

    it('should return Yugo when entry is 6', function () {
      expect(YugoBaptiste(6)).toBe('Yugo');
    });

    it('should return Baptiste when entry is 10', function () {
      expect(YugoBaptiste(10)).toBe('Baptiste');
    })

    it('should return YugoBaptiste when entry is 15', function () {
      expect(YugoBaptiste(15)).toBe('YugoBaptiste');
    });

    it('should return Yugo if number is 13', function () {
      expect(YugoBaptiste(13)).toBe('Yugo');
    });

    it('should return BaptisteBaptiste when entry is 53', () => {
      expect(YugoBaptiste(53)).toBe('YugoBaptiste');
    })
  });

  describe('mapNumbersWithYugoBaptiste function', () => {
    it('should return list of number when entry is [2, 4]', function () {
      expect(mapNumbersWithYugoBaptiste([2, 4])).toStrictEqual([2, 4]);
    })

    it('should return the 5 first number mapped by YugoBaptiste algorithm ', function () {
      expect(mapNumbersWithYugoBaptiste([1,2,3,4,5])).toStrictEqual(['Thomas', 2, 'Yugo', 4, 'Baptiste']);
    });
  })
})
