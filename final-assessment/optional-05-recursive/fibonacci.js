function fibonacci(n) {
  if (n < 0) {
    return "Input tidak valid"; // Deret Fibonacci umumnya untuk n >= 0
  }
  if (n === 0) {
    return 0; // Basis rekursi
  }
  if (n === 1) {
    return 1; // Basis rekursi
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // Langkah rekursi
}

// Jangan hapus kode di bawah ini!
export default fibonacci;