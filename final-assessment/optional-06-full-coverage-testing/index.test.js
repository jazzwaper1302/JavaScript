import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js'; // Pastikan path ini benar

test('fungsi sum - pengujian cakupan penuh', (t) => {
  // Kasus standar: dua bilangan positif
  t.test('menjumlahkan dua bilangan positif', () => {
    assert.strictEqual(sum(2, 3), 5);
    assert.strictEqual(sum(100, 200), 300);
  });

  // Kasus input bukan angka
  t.test('mengembalikan 0 jika salah satu atau kedua input bukan angka', () => {
    assert.strictEqual(sum('a', 5), 0);
    assert.strictEqual(sum(5, 'b'), 0);
    assert.strictEqual(sum('a', 'b'), 0);
    assert.strictEqual(sum(null, 5), 0);
    assert.strictEqual(sum(5, undefined), 0);
    assert.strictEqual(sum({}, 5), 0);
    assert.strictEqual(sum(5, []), 0);
  });

  // Kasus input bilangan negatif
  t.test('mengembalikan 0 jika salah satu atau kedua input adalah bilangan negatif', () => {
    assert.strictEqual(sum(-1, 5), 0);
    assert.strictEqual(sum(5, -1), 0);
    assert.strictEqual(sum(-5, -1), 0);
  });

  // Kasus input dengan nol
  t.test('menjumlahkan dengan benar jika salah satu atau kedua input adalah nol (dan positif)', () => {
    assert.strictEqual(sum(0, 5), 5);
    assert.strictEqual(sum(5, 0), 5);
    assert.strictEqual(sum(0, 0), 0); // Sesuai aturan (0 < 0 adalah false), jadi 0+0 = 0
  });

  // Kasus kombinasi negatif dan bukan angka (seharusnya ditangani oleh cek tipe dulu)
  t.test('mengembalikan 0 jika input negatif juga bukan angka', () => {
    // Meskipun -'a' mungkin NaN, cek typeof akan return 0 duluan
    assert.strictEqual(sum(-'a', 5), 0); // 'a' bukan angka
    assert.strictEqual(sum(5, -null), 0); // null bukan angka
  });
});