enum INPUT_MODES {
  EXPOSED = 'Exposed',
  CONCEALED = 'Concealed',
  BONUS = 'Bonus'
}

enum INPUT_CARD_STEPS {
  PICKTILETYPE,
  PICKTILE,
  PICKMELD,
  SAVEMELD
}

interface TileType {
  id: number,
  set: string,
  type: string,
  img: string
}

interface Tile {
  id: number,
  set: string,
  type: string,
  img: string,
  number?: number,
  name?: string,
  quantity: number
}

interface Meld {
  mode?: string,
  tileType: string,
  tileNumber?: number,
  meldType: string,
  img: string,
  fullMeldImg?: any[]
}


export { INPUT_MODES, INPUT_CARD_STEPS, TileType, Tile, Meld }
