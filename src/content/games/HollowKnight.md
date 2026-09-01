---
title: "Hollow Knight (Web Port)"
description: "Prueba de port dinámico WebGL corriendo desde un backdoor de GitHub Pages."
pubDate: "2026-05-14"
heroImage: "../../assets/blog-placeholder-about.jpg"
category: "PC" 
core: "none"
---

<div class="game-page-wrapper">
  <h2 class="game-title">Hollow Knight (Web Port)</h2>
  <p class="game-instructions">Cargando juego desde repositorio externo...</p>

  <div class="hk-container">
    <iframe 
      src="https://freedomgamingzone.github.io/hollow-knight-v1/" 
      width="100%" 
      height="600" 
      allowfullscreen
      scrolling="no">
    </iframe>
  </div>
</div>

<style>
  .game-page-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: white;
    font-family: system-ui, -apple-system, sans-serif;
  }

  .game-title {
    color: #ff00ff;
    text-shadow: 0 0 10px #ff00ff;
    font-size: 1.8rem;
    margin-bottom: 5px;
  }

  .game-instructions {
    color: #888;
    font-size: 0.9rem;
    margin-bottom: 20px;
  }

  .hk-container {
    border: 4px solid #252525;
    background: #000;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7);
    border-radius: 6px;
    overflow: hidden;
    line-height: 0;
    width: 100%;
    max-width: 960px;
  }

  iframe {
    border: none;
    display: block;
  }
</style>