// Inicializa o mapa
const map = L.map("map").setView([-21.17, -47.81], 9);

// Camada do mapa (tileLayer)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(map);

// Adiciona os marcadores das batalhas
batalhas.forEach(batalha => {
  const marker = L.marker(batalha.coords).addTo(map);

  // Link para o Google Maps
  const mapsLink = `https://www.google.com/maps?q=${batalha.coords[0]},${batalha.coords[1]}`;

  // Conteúdo do popup
  const popupContent = `
    <div style="text-align: left; font-family: Arial, sans-serif;">
      <h3 style="margin: 5px 0; font-size: 16px;">${batalha.nome}</h3>
      <p style="margin: 2px 0;"><b>Cidade:</b> ${batalha.cidade}</p>
      <p style="margin: 2px 0;"><b>Dia:</b> ${batalha.dia}</p>
      <p style="margin: 2px 0;">
        <b>Instagram:</b> 
        <a href="${batalha.rede}" target="_blank" style="color: #0077cc; text-decoration: none;">
          Abrir Perfil
        </a>
      </p>
      <p style="margin: 2px 0;">
        <b>Google Maps:</b> 
        <a href="${mapsLink}" target="_blank" style="color: #0077cc; text-decoration: none;">
          Ver Localização
        </a>
      </p>
    </div>
  `;

  marker.bindPopup(popupContent);
});

// Ajusta o zoom para caber todos os pontos
const bounds = L.latLngBounds(batalhas.map(b => b.coords));
map.fitBounds(bounds.pad(0.2));
