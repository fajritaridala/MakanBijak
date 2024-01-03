window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed')
  } else {
    header.classList.remove()
  }
}

const button = document.querySelector('#button');
const navMenu = document.querySelector('#nav-menu');

button.addEventListener('click', function () {
  button.classList.toggle('btn_line');
  navMenu.classList.toggle('hidden');
})


    // Menampilkan konten tombol 1 secara otomatis saat halaman dimuat
    document.addEventListener("DOMContentLoaded", function () {
        showContent('content1');
    });

    function showContent(contentId) {
        // Sembunyikan semua konten
        var contents = document.getElementsByClassName('content');
        for (var i = 0; i < contents.length; i++) {
            contents[i].style.display = 'none';
        }

        // Tampilkan konten yang sesuai dengan tombol yang diklik
        var selectedContent = document.getElementById(contentId);
        if (selectedContent) {
            selectedContent.style.display = 'block';
        }
    }


// bagian login form


function myFunction() {
  const x = document.getElementById("myInput");
  const y = document.getElementById("hide1");
  const z = document.getElementById("hide2");
  if (x.type === 'password') {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }

}


// sign form mobile
function yourFunction() {
  const a = document.getElementById("yourInput");
  const b = document.getElementById("hide3");
  const c = document.getElementById("hide4");

  if (a.type === 'password') {
    a.type = "text";
    b.style.display = "block";
    c.style.display = "none";
  } else {
    a.type = "password";
    b.style.display = "none";
    c.style.display = "block";
  }
}

// regist dekstop
