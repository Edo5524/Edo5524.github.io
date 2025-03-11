let selectedGame = '';

function selectGame(gameName) {
    selectedGame = gameName;
    document.getElementById('form-section').style.display = 'block';
    alert(`Game dipilih: ${gameName}`);
}

function submitTopup() {
    const userId = document.getElementById('user-id').value;
    const jumlahDiamond = document.getElementById('jumlah-diamond').value;
    const metodePembayaran = document.getElementById('metode-pembayaran').value;

    if (userId === '') {
        alert('Mohon isi User ID Anda');
        return;
    }

    // Simulasi checkout
    alert(`Top up berhasil!\n\nGame: ${selectedGame}\nUser ID: ${userId}\nDiamond: ${jumlahDiamond}\nPembayaran: ${metodePembayaran}`);
}