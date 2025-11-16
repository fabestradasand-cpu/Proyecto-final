import { Link } from "react-router-dom"
import "../style/Juegos.css"
function Juegos() {
    return (
        <>
            <header className="topbar">
                <div>
                    <button className="hamb">☰</button>
                    <h1 className="brand">Más allá de la pantalla</h1>
                </div>
                <nav className="nav">
                    <Link to="/">Inicio</Link>
                    <Link to="/Historia">Historia</Link>
                    <Link to="/Creadores">Creadores</Link>
                    <Link to="/Perifericos">Perifericos</Link>
                    <Link to="/Componentes">Componentes</Link>
                    <Link to="/Placa">Placa Madre</Link>
                    <Link to="/Juegos" className="active">Juegos</Link>
                </nav>
            </header>

            <main className="container">
                <h2 className="title">Zona de juegos — Divertite aprendiendo</h2>
                <p className="lead">Seleccioná un juego. Cada juego es desafiante — probá tus conocimientos de hardware.</p>

                <section className="game-select" aria-label="Seleccion de juegos">
                    <button className="game-btn" data-game="quiz">Quiz avanzado</button>
                    <button className="game-btn" data-game="memotest">Memotest</button>
                    <button className="game-btn" data-game="match">Matching</button>
                    <button className="game-btn" data-game="hangman">Ahorcado</button>
                </section>

                {/*Contenedor único donde se carga un solo juego a la vez*/}
                <section id="game-container" className="game-container" aria-live="polite">
                    <div className="placeholder">🎮 Seleccioná un juego para empezar</div>
                </section>

                {/*Historial compacto (si querés mostrarlo dentro del contenido; HUD principal es fijo arriba)*/}
                <aside className="score-board" aria-label="Historial de Puntajes">
                    <h3>🏆 Historial (records)</h3>
                    <ul id="scoreList"></ul>
                </aside>
            </main>

            {/*HUD fijo arriba a la derecha (records)*/}
            <div id="scoreHUD" className="score-hud" aria-hidden="false"></div>

            {/*Toasts*/}
            <div id="toast-root"></div>

            <footer className="footer container">
                <p>Proyecto escolar — Más allá de la pantalla © 2025</p>
            </footer>
        </>
    )
}
export default Juegos