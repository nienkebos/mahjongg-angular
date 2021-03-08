enum INPUT_CARDS {
  Exposed,
  Concealed,
  Bonus
}

enum INPUT_CARD_STEPS {
  PICKTILETYPE,
  PICKTILE
}

interface Tile {
  id: number,
  type: string,
  img: string,
  number?: number,
  color?: string,
  wind?: string,
}

const TileTypes = [
  {id: 1, type: 'Characters', img: '../../../assets/tiles/25.jpg'},
  {id: 2, type: 'Dots', img:'../../../assets/tiles/16.jpg'},
  {id: 3, type: 'Bamboo', img: '../../../assets/tiles/34.jpg'}
]

const Tiles = [
  {id:1, type: 'Seasons', number: 1, img: '../../../assets/tiles/1.jpg'},
  {id:2, type: 'Seasons', number: 2, img: '../../../assets/tiles/2.jpg'},
  {id:3, type: 'Seasons', number: 3, img: '../../../assets/tiles/3.jpg'},
  {id:4, type: 'Seasons', number: 4, img: '../../../assets/tiles/4.jpg'},
  {id:5, type: 'Flowers', number: 1, img: '../../../assets/tiles/5.jpg'},
  {id:6, type: 'Flowers', number: 2, img: '../../../assets/tiles/6.jpg'},
  {id:7, type: 'Flowers', number: 3, img: '../../../assets/tiles/7.jpg'},
  {id:8, type: 'Flowers', number: 8, img: '../../../assets/tiles/8.jpg'},
  {id:9, type: 'Dragons', color: 'white', img: '../../../assets/tiles/9.jpg'},
  {id:10, type: 'Dragons', color: 'red', img: '../../../assets/tiles/10.jpg'},
  {id:11, type: 'Dragons', color: 'green', img: '../../../assets/tiles/11.jpg'},
  {id:12, type: 'Winds', wind: 'East', img: '../../../assets/tiles/12.jpg'},
  {id:13, type: 'Winds', wind: 'South', img: '../../../assets/tiles/13.jpg'},
  {id:14, type: 'Winds', wind: 'West', img: '../../../assets/tiles/14.jpg'},
  {id:15, type: 'Winds', wind: 'North', img: '../../../assets/tiles/15.jpg'},
  {id:16, type: 'Dots', number: 1, img: '../../../assets/tiles/16.jpg'},
  {id:17, type: 'Dots', number: 2, img: '../../../assets/tiles/17.jpg'},
  {id:18, type: 'Dots', number: 3, img: '../../../assets/tiles/18.jpg'},
  {id:19, type: 'Dots', number: 4, img: '../../../assets/tiles/19.jpg'},
  {id:20, type: 'Dots', number: 5, img: '../../../assets/tiles/20.jpg'},
  {id:21, type: 'Dots', number: 6, img: '../../../assets/tiles/21.jpg'},
  {id:22, type: 'Dots', number: 7, img: '../../../assets/tiles/22.jpg'},
  {id:23, type: 'Dots', number: 8, img: '../../../assets/tiles/23.jpg'},
  {id:24, type: 'Dots', number: 9, img: '../../../assets/tiles/24.jpg'},
  {id:25, type: 'Characters', number: 1, img: '../../../assets/tiles/25.jpg'},
  {id:26, type: 'Characters', number: 2, img: '../../../assets/tiles/26.jpg'},
  {id:27, type: 'Characters', number: 3, img: '../../../assets/tiles/27.jpg'},
  {id:28, type: 'Characters', number: 4, img: '../../../assets/tiles/28.jpg'},
  {id:29, type: 'Characters', number: 5, img: '../../../assets/tiles/29.jpg'},
  {id:30, type: 'Characters', number: 6, img: '../../../assets/tiles/30.jpg'},
  {id:31, type: 'Characters', number: 7, img: '../../../assets/tiles/31.jpg'},
  {id:32, type: 'Characters', number: 8, img: '../../../assets/tiles/32.jpg'},
  {id:33, type: 'Characters', number: 9, img: '../../../assets/tiles/33.jpg'},
  {id:34, type: 'Bamboo', number: 1, img: '../../../assets/tiles/34.jpg'},
  {id:35, type: 'Bamboo', number: 2, img: '../../../assets/tiles/35.jpg'},
  {id:36, type: 'Bamboo', number: 3, img: '../../../assets/tiles/36.jpg'},
  {id:37, type: 'Bamboo', number: 4, img: '../../../assets/tiles/37.jpg'},
  {id:38, type: 'Bamboo', number: 5, img: '../../../assets/tiles/38.jpg'},
  {id:39, type: 'Bamboo', number: 6, img: '../../../assets/tiles/39.jpg'},
  {id:40, type: 'Bamboo', number: 7, img: '../../../assets/tiles/40.jpg'},
  {id:41, type: 'Bamboo', number: 8, img: '../../../assets/tiles/41.jpg'},
  {id:42, type: 'Bamboo', number: 9, img: '../../../assets/tiles/42.jpg'},
]


const Melds = [
  {name: 'Chow'},
  {name: 'Pung'},
  {name:'Kong'},
]

export {INPUT_CARDS, INPUT_CARD_STEPS, TileTypes, Tiles, Tile, Melds}
