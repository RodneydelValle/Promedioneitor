<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Puntos de Hechicería y Hechizos Nivel 1-5</title>
    <link rel="stylesheet" href="hechizero.css"> <!-- Vinculando el CSS -->
</head>
<body>
    <!-- Título Puntos de Hechicería -->
    <div class="counter">
        Puntos de Hechicería: <span id="availableCount">10</span>
    </div>

    <!-- Tickets en Forma de Diamante (Puntos de Hechicería) -->
    <div class="ticket-container">
        <div class="ticket" onclick="toggleActive(this)"></div>
        <div class="ticket" onclick="toggleActive(this)"></div>
        <div class="ticket" onclick="toggleActive(this)"></div>
        <div class="ticket" onclick="toggleActive(this)"></div>
        <div class="ticket" onclick="toggleActive(this)"></div>
        <div class="ticket" onclick="toggleActive(this)"></div>
        <div class="ticket" onclick="toggleActive(this)"></div>
        <div class="ticket" onclick="toggleActive(this)"></div>
        <div class="ticket" onclick="toggleActive(this)"></div>
        <div class="ticket" onclick="toggleActive(this)"></div>
    </div>

    <!-- Hechizos Nivel 1 -->
    <div class="spell-level">
        Hechizos Nivel 1:
    </div>
    <div class="spell-container">
        <div class="spell" onclick="toggleActive(this)"></div>
        <div class="spell" onclick="toggleActive(this)"></div>
        <div class="spell" onclick="toggleActive(this)"></div>
        <div class="spell" onclick="toggleActive(this)"></div>
    </div>

    <!-- Detalles de Proyectil Mágico -->
    <div class="hechizo-detalles">
        <h3>Proyectil Mágico</h3>
        <p><strong>Nivel:</strong> 1</p>
        <p><strong>Daño:</strong> 1d4 + 1</p>
        <button class="toggle-descripcion" onclick="mostrarDescripcion()">Mostrar Descripción</button>
        <div class="descripcion" id="descripcion-proyectil">
            <p><strong>Descripción:</strong> Cargando...</p>
        </div>
    </div>

    <!-- Hechizos Nivel 2 -->
    <div class="spell-level">
        Hechizos Nivel 2:
    </div>
    <div class="spell-container level2">
        <div class="spell" onclick="toggleActive(this)"></div>
        <div class="spell" onclick="toggleActive(this)"></div>
        <div class="spell" onclick="toggleActive(this)"></div>
    </div>

    <!-- Hechizos Nivel 3 -->
    <div class="spell-level">
        Hechizos Nivel 3:
    </div>
    <div class="spell-container level3">
        <div class="spell" onclick="toggleActive(this)"></div>
        <div class="spell" onclick="toggleActive(this)"></div>
        <div class="spell" onclick="toggleActive(this)"></div>
    </div>

    <!-- Hechizos Nivel 4 -->
    <div class="spell-level">
        Hechizos Nivel 4:
    </div>
    <div class="spell-container level4">
        <div class="spell" onclick="toggleActive(this)"></div>
        <div class="spell" onclick="toggleActive(this)"></div>
        <div class="spell" onclick="toggleActive(this)"></div>
    </div>

    <!-- Hechizos Nivel 5 -->
    <div class="spell-level">
        Hechizos Nivel 5:
    </div>
    <div class="spell-container level5">
        <div class="spell" onclick="toggleActive(this)"></div>
    </div>

    <script src="hechzero.js"></script> <!-- Vinculando el JavaScript -->
</body>
</html>
