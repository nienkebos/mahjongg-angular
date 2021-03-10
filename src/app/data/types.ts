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

interface Tile {
  id: number,
  type: string,
  img: string,
  number?: number,
  name?: string
}

const TileTypes = [
  {id: 1, set: 'Simples', type: 'Characters', img: '../../../assets/tiles/25.jpg'},
  {id: 2, set: 'Simples', type: 'Dots', img:'../../../assets/tiles/16.jpg'},
  {id: 3, set: 'Simples', type: 'Bamboo', img: '../../../assets/tiles/34.jpg'},
  {id: 4, set: 'Honors', type: 'Winds', img: '../../../assets/tiles/12.jpg'},
  {id: 5, set: 'Honors', type: 'Dragons', img:'../../../assets/tiles/9.jpg'},
  {id: 6, set: 'Bonus', type: 'Seasons', img: '../../../assets/tiles/1.jpg'},
  {id: 7, set: 'Bonus', type: 'Flowers', img: '../../../assets/tiles/5.jpg'}
]

const Tiles = [
  {id:1, set: 'Bonus', type: 'Seasons', number: 1, img: '../../../assets/tiles/1.jpg'},
  {id:2, set: 'Bonus', type: 'Seasons', number: 2, img: '../../../assets/tiles/2.jpg'},
  {id:3, set: 'Bonus', type: 'Seasons', number: 3, img: '../../../assets/tiles/3.jpg'},
  {id:4, set: 'Bonus', type: 'Seasons', number: 4, img: '../../../assets/tiles/4.jpg'},
  {id:5, set: 'Bonus', type: 'Flowers', number: 1, img: '../../../assets/tiles/5.jpg'},
  {id:6, set: 'Bonus', type: 'Flowers', number: 2, img: '../../../assets/tiles/6.jpg'},
  {id:7, set: 'Bonus', type: 'Flowers', number: 3, img: '../../../assets/tiles/7.jpg'},
  {id:8, set: 'Bonus', type: 'Flowers', number: 4, img: '../../../assets/tiles/8.jpg'},
  {id:9, set: 'Honors', type: 'Dragons', name: 'White', img: '../../../assets/tiles/9.jpg'},
  {id:10, set: 'Honors', type: 'Dragons', name: 'Red', img: '../../../assets/tiles/10.jpg'},
  {id:11, set: 'Honors', type: 'Dragons', name: 'Green', img: '../../../assets/tiles/11.jpg'},
  {id:12, set: 'Honors', type: 'Winds', name: 'East', number: 1, img: '../../../assets/tiles/12.jpg'},
  {id:13, set: 'Honors', type: 'Winds', name: 'South', number: 2, img: '../../../assets/tiles/13.jpg'},
  {id:14, set: 'Honors', type: 'Winds', name: 'West', number: 3, img: '../../../assets/tiles/14.jpg'},
  {id:15, set: 'Honors', type: 'Winds', name: 'North', number: 4, img: '../../../assets/tiles/15.jpg'},
  {id:16, set: 'Simples', type: 'Dots', number: 1, img: '../../../assets/tiles/16.jpg'},
  {id:17, set: 'Simples', type: 'Dots', number: 2, img: '../../../assets/tiles/17.jpg'},
  {id:18, set: 'Simples', type: 'Dots', number: 3, img: '../../../assets/tiles/18.jpg'},
  {id:19, set: 'Simples', type: 'Dots', number: 4, img: '../../../assets/tiles/19.jpg'},
  {id:20, set: 'Simples', type: 'Dots', number: 5, img: '../../../assets/tiles/20.jpg'},
  {id:21, set: 'Simples', type: 'Dots', number: 6, img: '../../../assets/tiles/21.jpg'},
  {id:22, set: 'Simples', type: 'Dots', number: 7, img: '../../../assets/tiles/22.jpg'},
  {id:23, set: 'Simples', type: 'Dots', number: 8, img: '../../../assets/tiles/23.jpg'},
  {id:24, set: 'Simples', type: 'Dots', number: 9, img: '../../../assets/tiles/24.jpg'},
  {id:25, set: 'Simples', type: 'Characters', number: 1, img: '../../../assets/tiles/25.jpg'},
  {id:26, set: 'Simples', type: 'Characters', number: 2, img: '../../../assets/tiles/26.jpg'},
  {id:27, set: 'Simples', type: 'Characters', number: 3, img: '../../../assets/tiles/27.jpg'},
  {id:28, set: 'Simples', type: 'Characters', number: 4, img: '../../../assets/tiles/28.jpg'},
  {id:29, set: 'Simples', type: 'Characters', number: 5, img: '../../../assets/tiles/29.jpg'},
  {id:30, set: 'Simples', type: 'Characters', number: 6, img: '../../../assets/tiles/30.jpg'},
  {id:31, set: 'Simples', type: 'Characters', number: 7, img: '../../../assets/tiles/31.jpg'},
  {id:32, set: 'Simples', type: 'Characters', number: 8, img: '../../../assets/tiles/32.jpg'},
  {id:33, set: 'Simples', type: 'Characters', number: 9, img: '../../../assets/tiles/33.jpg'},
  {id:34, set: 'Simples', type: 'Bamboo', number: 1, img: '../../../assets/tiles/34.jpg'},
  {id:35, set: 'Simples', type: 'Bamboo', number: 2, img: '../../../assets/tiles/35.jpg'},
  {id:36, set: 'Simples', type: 'Bamboo', number: 3, img: '../../../assets/tiles/36.jpg'},
  {id:37, set: 'Simples', type: 'Bamboo', number: 4, img: '../../../assets/tiles/37.jpg'},
  {id:38, set: 'Simples', type: 'Bamboo', number: 5, img: '../../../assets/tiles/38.jpg'},
  {id:39, set: 'Simples', type: 'Bamboo', number: 6, img: '../../../assets/tiles/39.jpg'},
  {id:40, set: 'Simples', type: 'Bamboo', number: 7, img: '../../../assets/tiles/40.jpg'},
  {id:41, set: 'Simples', type: 'Bamboo', number: 8, img: '../../../assets/tiles/41.jpg'},
  {id:42, set: 'Simples', type: 'Bamboo', number: 9, img: '../../../assets/tiles/42.jpg'},
]

interface Meld {
  mode: string,
  tileType: string,
  tileNumber: number,
  meldType: string,
  img: string,
  fullMeldImg?: any[]
}

const Melds = [
  {name: 'Chow'},
  {name: 'Pung'},
  {name:'Kong'},
]

export { INPUT_MODES, INPUT_CARD_STEPS, TileTypes, Tiles, Tile, Melds, Meld }
