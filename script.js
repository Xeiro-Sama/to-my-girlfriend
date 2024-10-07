// Memulai musik ketika halaman dimuat
window.onload = function() {
    const music = document.getElementById('backgroundMusic');
    music.play();
};

document.getElementById('revealButton').addEventListener('click', function() {
    const message = `




        I Love You, You’re the Star in My Empty Night Sky
        
        Dalam hening malam yang sepi, ketika bintang-bintang berkilauan di langit yang gelap, aku teringat padamu, sayang. Kau adalah cahaya yang menerangi setiap sudut hatiku, seperti bintang paling terang yang menembus kegelapan. Tanpamu, malam-malamku terasa kosong, seolah langit tak memiliki makna.

        Saat aku menatap langit, aku melihat lebih dari sekadar bintang; aku melihat kenangan kita. Setiap tawa yang kita bagi, setiap pelukan hangat yang membuatku merasa aman, semuanya berputar dalam pikiranku. Kau adalah bintang yang tidak pernah pudar, selalu bersinar meski angin kencang menerpa. Dalam setiap detik, kau mengingatkanku bahwa cinta bisa mengatasi segala kesedihan.

        Malam ini, aku ingin kau tahu betapa berharganya dirimu bagiku. Ketika dunia terasa berat dan masalah datang silih berganti, aku hanya perlu melihat ke arahmu untuk menemukan ketenangan. Kau adalah tempat perlindunganku, cahaya di ujung terowongan yang gelap. Cintaku padamu bukan sekadar kata-kata; itu adalah janji untuk selalu ada, seperti bintang yang setia menyinari malam.

        Bersamamu, aku merasa seperti langit yang penuh dengan bintang. Momen-momen kecil yang kita lewati bersama mengubah malam yang suram menjadi indah. Kita menari di bawah sinar bulan, berbagi mimpi dan harapan. Setiap detik bersamamu adalah cahaya baru yang menggantikan gelap, menambahkan warna pada kanvas kehidupanku.

        Ketika malam semakin larut dan semua orang terlelap dalam mimpi mereka, aku tetap terjaga, mengenang senyummu. Dalam kesunyian itu, aku menyadari bahwa meskipun langit malam bisa tampak kosong tanpa bintang, hatiku tidak pernah sepi saat kau ada di sampingku. Kau adalah bintangku, sumber inspirasi dan kekuatanku. Tanpa dirimu, dunia ini akan kehilangan sinar, dan aku akan tersesat dalam gelap.

        Sayang, ingatlah bahwa dalam setiap bintang yang berkelap-kelip, ada ungkapan cintaku untukmu. Dalam setiap detakan jantungku, namamu terukir. Cinta kita adalah perjalanan yang indah, dan aku berjanji akan terus mencari bintang-bintang baru bersamamu, meski malam-malam kelam menghampiri.

        Kau adalah segalanya bagiku. Selamanya, aku akan mencintaimu.
    `;
    
    document.getElementById('revealMessage').innerText = message;
    document.getElementById('revealMessage').classList.remove('hidden');
    this.style.display = 'none'; // Menyembunyikan tombol setelah diklik
});
