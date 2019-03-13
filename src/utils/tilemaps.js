export const loadTilemaps = loader => {
  loader.image("A1", "assets/tilemaps/A1_tileset_sheet.png");
  loader.image("A2", "assets/tilemaps/A2_tileset_sheet.png");
  loader.tilemapTiledJSON("terrain", "assets/tilemaps/terrain.json");
};

export const createTilemaps = maker => {
  const terrain = maker.tilemap({ key: "terrain" });
  const a1 = terrain.addTilesetImage("A1", "A1");
  const a2 = terrain.addTilesetImage("A2", "A2");
  terrain.createStaticLayer("ground", [a1, a2], 0, 0);
  terrain.createStaticLayer("ground2", [a1, a2], 0, 0);
  return terrain;
};
