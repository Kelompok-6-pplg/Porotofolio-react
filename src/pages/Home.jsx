import React from 'react';

function App() {

  return (
    <div>
      <nav className="navbar">
        <figure className="mobil-kiri"></figure>
        <div className="navbar-navigasi">
            <span className="span-kiri"></span>
                <h1>PORTO<span>FOLIO</span></h1>
            <span className="span-kanan"></span>
        </div>
        <figure className="mobil-kanan"></figure>
    </nav>

    {/* <!-- Hero Start --> */}
    <div className="remove">
        <div className="people-container">
            <figure className="people"></figure>
        </div>
    </div>
    <section className="hero">
        <div className="mask-container">
            <div className="mask">
                <main className="hero-content">
                    <h1>Selamat <span>Datang</span> di <span>Kelompok</span> 6</h1>
                </main>
            </div>
        </div>
    </section>
    <div className="remove-1">
        <div className="airplane">
            <figure><img src="../assets/img/airplane.svg" alt=""/></figure>
        </div>
        <div className="rocket">
            <figure><img src="../assets/img/rocket.svg" alt=""/></figure>
        </div>
        <div className="boat-container">
            <figure className="boat-1"><img src="../assets/img/boat.svg" alt=""/></figure>
            <figure className="boat-2"><img src="../assets/img/boat.svg" alt=""/></figure>
        </div>
    </div>
    {/* <!-- Hero End --> */}

    {/* <!-- Content Start --> */}
    <section className="content">
        <div className="bg"></div>
        <div className="content-top">
            <a href="#">
                <div className="card">
                    <h2>Portofolio</h2>
                    <div className="card-content">
                        <img src="https://i.pinimg.com/736x/29/c7/b1/29c7b12639e0ef7cde91188529244971.jpg" alt="" />
                        <div className="card-deskripsi">
                            <h3>Rozan Nouval</h3>
                            <br />
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Quaerat, beatae?
                            </p>
                        </div>
                    </div>
                    <div className="card-footer">
                        <i data-feather="user"></i>
                        <p>Leader</p>
                    </div>
                </div>
            </a>

            <a href="#">
                <div className="card">
                    <h2>Portofolio</h2>
                    <div className="card-content">
                        <img src="https://i.pinimg.com/736x/29/c7/b1/29c7b12639e0ef7cde91188529244971.jpg" alt="" />
                        <div className="card-deskripsi">
                            <h3>Rozan Nouval</h3>
                            <br />
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Quaerat, beatae?
                            </p>
                        </div>
                    </div>
                    <div className="card-footer">
                        <i data-feather="users"></i>
                        <p>Member</p>
                        {/* <img src="https://www.downloadclipart.net/medium/52620-explosion-images.png"  alt="Explosion PNG image" /> */}
                    </div>
                </div>
            </a>
        </div>
    </section>
    {/* <!-- Content End --> */}

    {/* <!-- Feather Icons --> */}
    <script>
        feather.replace();
    </script>

    {/* <!-- Javascript --> */}
    <script src="script.js"></script>
    </div>
  )
}

export default App;