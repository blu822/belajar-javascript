      // Daftar menu makanan dan harga
      var menu = {
        "Nasi Goreng": 15000,
        "Mie Goreng": 12000,
        "Soto Ayam": 18000,
        "Nasi Padang": 25000,
        Capcay: 20000,
      };

      // Menampilkan menu beserta harga
      var menuDisplay = "Silakan pilih menu makanan:\n";
      for (var item in menu) {
        menuDisplay += item + " - Rp" + menu[item].toLocaleString() + "\n";
      }

      // Meminta pengguna memilih menu
      var userChoice = prompt(menuDisplay);

      // Menggunakan pengkondisian untuk menentukan harga
      if (menu.hasOwnProperty(userChoice)) {
        var quantity = parseInt(
          prompt("Berapa banyak porsi yang Anda inginkan?"),
          10
        );

        if (!isNaN(quantity) && quantity > 0) {
          var hargaPerPorsi = menu[userChoice];
          var totalBiaya = hargaPerPorsi * quantity;

          alert(
            "Anda telah memilih " +
              userChoice +
              " sebanyak " +
              quantity +
              " porsi.\nHarga per porsi: Rp" +
              hargaPerPorsi.toLocaleString() +
              "\nTotal biaya: Rp" +
              totalBiaya.toLocaleString()
          );

          alert(
            "Terima kasih telah memesan. Mohon menunggu pesanan Anda akan segera diproses."
          );

          var kembaliLagi = prompt(
            "Apakah Anda akan datang kembali? (jawab dengan 'ya' atau 'tidak')"
          );

          var jawabanVariasi = ["ya", "iya", "iyah"];
          if (jawabanVariasi.includes(kembaliLagi.toLowerCase())) {
            alert(
              "Kami senang mendengarnya! Kami tunggu kedatangan Anda berikutnya."
            );
            showMenu();
          } else {
            alert("Yaudah Ga Usah Datang Lagi, Gw Tandain Lu");
          }
        } else {
          alert("Masukkan Jumlah Yang Benar Lah Woi");
        }
      } else {
        alert("Emang Ada Di Menu????");
      }

      showMenu();