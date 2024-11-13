// Menangkap elemen-elemen yang dibutuhkan
const jokeText = document.getElementById('joke-text');
const jokeButton = document.getElementById('get-joke');

// Fungsi untuk mendapatkan lelucon dari API
const getJoke = async () => {
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: { 'Accept': 'application/json' }
    });
    const data = await response.json();
    jokeText.textContent = data.joke;  // Menampilkan lelucon di dalam elemen <p>
  } catch (error) {
    jokeText.textContent = 'Oops! Something went wrong... Please try again.';
  }
};

// Menambahkan event listener ke tombol
jokeButton.addEventListener('click', getJoke);

// Menampilkan lelucon pertama saat halaman dimuat
window.addEventListener('DOMContentLoaded', getJoke);
