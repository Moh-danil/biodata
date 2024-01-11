import './App.css';
import logo from './profile.jpg';

function App() {
  return (
    <div>
    <header id="home" class="header">
    <div class="overlay"></div>
    <div class="header-content container">
        <h1 class="header-title">
            <span class="down">Saya Moh.Danil</span>
        </h1>
        <p class="header-subtitle">SEORANG PELAJAR</p>            
    </div>              
</header>

<section class="section pt-0" id="about">
    <div class="container text-center">
        <div class="about">
            <div class="about-img-holder">
                <img src={logo} class="about-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" /   >
            </div>
            <div class="about-caption">
                <h2 class="section-title mb-3">Tentang Saya</h2>
                <p>
                     Perkenalkan nama lengkap saya Moh Danil,saya adalah seorang siswa dari kelas 12 di jurusan Rekayasa Perangkat Lunak (RPL) di SMK Negeri 6 Jember.
                     Lahir pada tanggal 01 Mei 2005 di jember.dengan alamat Gambirono kec.Bangsalsari
                </p>
                <hr />
                <p className='By'>~By Danil</p>
            </div>              
        </div>
    </div>
</section>
    </div>
  );
}

export default App;
