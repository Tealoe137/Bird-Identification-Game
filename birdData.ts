
import { Bird } from './types';

// Raw CSV data converted to structured format based on the user provided list
export const BIRD_LIST: Bird[] = [
  {
    id: '1',
    name: 'California Thrasher',
    group: 'Mimidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/303894691-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/303894341-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/303894301-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/303894361-1280px.jpg'
    ],
    distractorPool: ['Northern Mockingbird', "Say's Phoebe", 'House Finch', 'House Sparrow', 'Song Sparrow', 'Mourning Dove', 'California Scrub-Jay', 'Greater Roadrunner', 'Northern Flicker']
  },
  {
    id: '2',
    name: 'Northern Mockingbird',
    group: 'Mimidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/63743751-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/303811171-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/63743721-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/63743711-1280px.jpg'
    ],
    distractorPool: ['California Thrasher', 'Acorn Woodpecker', "Say's Phoebe", 'California Scrub-Jay', 'House Finch', 'Yellow-rumped Warbler', "Cassin's Kingbird"]
  },
  {
    id: '3',
    name: 'Great-tailed Grackle',
    group: 'Icteridae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/67363301-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/67363321-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/67363311-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/67363281-1280px.jpg'
    ],
    distractorPool: ['American Crow', "Brewer's Blackbird", 'Red-winged Blackbird', 'Common Raven', 'Black Phoebe', 'European Starling']
  },
  {
    id: '4',
    name: 'Red-winged Blackbird',
    group: 'Icteridae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/306392131-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/63744301-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/306393551-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/306393661-1280px.jpg'
    ],
    distractorPool: ['American Crow', "Brewer's Blackbird", 'Great-tailed Grackle', 'Common Raven', 'Black Phoebe', 'European Starling']
  },
  {
    id: '5',
    name: 'Hooded Oriole',
    group: 'Icteridae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/306356481-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/67360291-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/306357301-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/67360341-1280px.jpg'
    ],
    distractorPool: ['Yellow Warbler', "Cassin's Kingbird", 'Yellow-rumped Warbler', "Townsend's Warbler", 'Orange-crowned Warbler', 'Common Yellowthroat', 'American Goldfinch', 'Lesser Goldfinch', "Wilson's Warbler", 'Hermit Warbler', 'Black-headed Grosbeak']
  },
  {
    id: '6',
    name: 'Brewer’s Blackbird',
    group: 'Icteridae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/306625401-1280px.jpg',
      'https://media.audubon.org/nas_birdapi/apa_2011_19499_153361_davidcourtenay_brewers_blackbird_kk_adult_male.jpg?height=472&auto=webp&quality=90&fit=bounds&disable=upscale',
      'https://www.allaboutbirds.org/guide/assets/photo/306625741-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/306625711-1280px.jpg'
    ],
    distractorPool: ['American Crow', 'Great-tailed Grackle', 'Red-winged Blackbird', 'Common Raven', 'Black Phoebe', 'European Starling']
  },
  {
    id: '7',
    name: 'California Towhee',
    group: 'Passerellidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/64989841-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/299671511-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/64989861-1280px.jpg',
      'https://media.audubon.org/nas_birdapi/a1_7569_9_california_towhee_matthew_kipper_adult.jpg?height=472&auto=webp&quality=90&fit=bounds&disable=upscale'
    ],
    distractorPool: ["Say's Phoebe", 'California Thrasher', 'Song Sparrow', 'American Robin', 'House Sparrow', 'Song Sparrow', 'House Finch']
  },
  {
    id: '8',
    name: 'White-crowned Sparrow',
    group: 'Passerellidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/64978031-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/297930781-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/297932021-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/297958711-1280px.jpg'
    ],
    distractorPool: ['Song Sparrow', 'House Finch', 'House Sparrow', 'California Towhee', 'Spotted Towhee', 'Bushtit', 'Black-headed Grosbeak']
  },
  {
    id: '9',
    name: 'Spotted Towhee',
    group: 'Passerellidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/299678301-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/299678941-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/64991481-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/64991491-1280px.jpg'
    ],
    distractorPool: ['Black-headed Grosbeak', 'Hooded Oriole', 'American Goldfinch', 'Lesser Goldfinch', 'Yellow Warbler', 'Yellow-rumped Warbler', 'Orange-crowned Warbler', "Townsend's Warbler", 'Hermit Warbler', 'Common Yellowthroat', "Wilson's Warbler", 'American Robin']
  },
  {
    id: '10',
    name: 'Song Sparrow',
    group: 'Passerellidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/308771371-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/66116671-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/66116691-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/66116651-1280px.jpg'
    ],
    distractorPool: ['House Finch', 'House Sparrow', 'California Towhee', 'Spotted Towhee', 'Western Flycatcher', 'Greater Roadrunner']
  },
  {
    id: '11',
    name: 'House Finch',
    group: 'Fringillidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/306327341-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/306327661-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/306327821-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/306327741-1280px.jpg'
    ],
    distractorPool: ['Song Sparrow', 'California Towhee', 'Orange-crowned Warbler', 'California Thrasher', "Say's Phoebe", 'Northern Flicker']
  },
  {
    id: '12',
    name: 'Lesser Goldfinch',
    group: 'Fringillidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/306428101-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/67272511-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/306434991-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/306429501-1280px.jpg'
    ],
    distractorPool: ['Yellow Warbler', "Cassin's Kingbird", 'Yellow-rumped Warbler', "Townsend's Warbler", 'Orange-crowned Warbler', 'Common Yellowthroat', 'American Goldfinch', 'Hooded Oriole', "Wilson's Warbler", 'Hermit Warbler', 'Black-headed Grosbeak']
  },
  {
    id: '13',
    name: 'American Goldfinch',
    group: 'Fringillidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/306710541-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/306710711-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/306710621-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/306711221-1280px.jpg'
    ],
    distractorPool: ['Yellow Warbler', "Cassin's Kingbird", 'Yellow-rumped Warbler', "Townsend's Warbler", 'Orange-crowned Warbler', 'Common Yellowthroat', 'Lesser Goldfinch', 'Hooded Oriole', "Wilson's Warbler", 'Hermit Warbler', 'Black-headed Grosbeak']
  },
  {
    id: '14',
    name: 'European Starling',
    group: 'Sturnidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/303928891-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/303929131-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/67454971-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/303929801-1280px.jpg'
    ],
    distractorPool: ['American Crow', "Brewer's Blackbird", 'Great-tailed Grackle', 'Common Raven', 'Black Phoebe', 'American Robin', 'Red-winged Blackbird', 'Acorn Woodpecker']
  },
  {
    id: '15',
    name: 'American Crow',
    group: 'Corivdae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/59858061-1280px.jpg',
      'https://media.audubon.org/nas_birdapi/web_americancrow_06-22-2015-106-adult.jpg?height=472&auto=webp&quality=90&fit=bounds&disable=upscale',
      'https://media.audubon.org/nas_birdapi/web_gbbc_american_crow_paul-powers-_ga_2012_kk-adult.jpg?height=472&auto=webp&quality=90&fit=bounds&disable=upscale',
      'https://www.allaboutbirds.org/guide/assets/photo/59858041-1280px.jpg'
    ],
    distractorPool: ['European Starling', "Brewer's Blackbird", 'Great-tailed Grackle', 'Common Raven', 'Black Phoebe', 'American Robin', 'Red-winged Blackbird']
  },
  {
    id: '16',
    name: 'California Scrub-Jay',
    group: 'Corivdae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/302371821-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/302371571-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/302371731-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/302371651-1280px.jpg'
    ],
    distractorPool: ['Western Bluebird', 'Great Blue Heron', 'California Thrasher', 'California Towhee', 'California Gull']
  },
  {
    id: '17',
    name: 'Common Raven',
    group: 'Corivdae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/300152741-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/63739521-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/63739491-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/312647111-1280px.jpg'
    ],
    distractorPool: ['American Crow', "Brewer's Blackbird", 'Great-tailed Grackle', 'European Starling', 'Black Phoebe', 'American Robin', 'Red-winged Blackbird']
  },
  {
    id: '18',
    name: 'Western Bluebird',
    group: 'Turdidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/67472541-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/67472531-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/67472491-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/303804091-1280px.jpg'
    ],
    distractorPool: ['California Scrub-Jay', 'House Finch', 'Bushtit', 'Northern Mockingbird', 'Song Sparrow']
  },
  {
    id: '19',
    name: 'American Robin',
    group: 'Turdidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/303441381-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/303441781-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/60412971-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/308801551-1280px.jpg'
    ],
    distractorPool: ['Black-headed Grosbeak', 'Hooded Oriole', 'American Goldfinch', 'Lesser Goldfinch', 'Spotted Towhee']
  },
  {
    id: '20',
    name: 'Cliff Swallow',
    group: 'Hirundinidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/305772321-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/305772391-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/305773791-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/305773391-1280px.jpg'
    ],
    distractorPool: ['Barn Swallow', 'American Robin', 'California Towhee', 'Western Flycatcher', "Cassin's Kingbird", "Allen's Hummingbird", "Anna's Hummingbird", 'Song Sparrow', 'House Sparrow']
  },
  {
    id: '21',
    name: 'Barn Swallow',
    group: 'Hirundinidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/312653671-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/305765651-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/312652671-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/305767031-1280px.jpg'
    ],
    distractorPool: ['Cliff Swallow', 'American Robin', 'California Towhee', 'Western Flycatcher', "Cassin's Kingbird", "Allen's Hummingbird", "Anna's Hummingbird", 'Song Sparrow', 'House Sparrow']
  },
  {
    id: '22',
    name: 'Orange-crowned Warbler',
    group: 'Parulidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/296786721-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/296785521-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/296786551-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/64441251-1280px.jpg'
    ],
    distractorPool: ['Yellow-rumped Warbler', 'Common Yellowthroat', "Townsend's Warbler", "Wilson's Warbler", 'Hermit Warbler', 'Yellow Warbler', 'Hooded Oriole', 'American Goldfinch', 'Lesser Goldfinch', "Cassin's Kingbird", 'Western Flycatcher']
  },
  {
    id: '23',
    name: 'Yellow-rumped Warbler',
    group: 'Parulidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/66119031-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/308764651-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/66119121-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/613265514-1280px.jpg'
    ],
    distractorPool: ['Orange-crowned Warbler', 'Common Yellowthroat', "Townsend's Warbler", "Wilson's Warbler", 'Hermit Warbler', 'Yellow Warbler', 'Hooded Oriole', 'American Goldfinch', 'Lesser Goldfinch', "Cassin's Kingbird", 'Western Flycatcher']
  },
  {
    id: '24',
    name: 'Common Yellowthroat',
    group: 'Parulidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/297027971-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/66117581-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/66117631-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/66117621-1280px.jpg'
    ],
    distractorPool: ['Orange-crowned Warbler', 'Yellow-rumped Warbler', "Townsend's Warbler", "Wilson's Warbler", 'Hermit Warbler', 'Yellow Warbler', 'Hooded Oriole', 'American Goldfinch', 'Lesser Goldfinch', "Cassin's Kingbird", 'Western Flycatcher']
  },
  {
    id: '25',
    name: 'Townsend’s Warbler',
    group: 'Parulidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/297064161-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/64897491-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/297064231-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/64897541-1280px.jpg'
    ],
    distractorPool: ['Orange-crowned Warbler', 'Yellow-rumped Warbler', 'Common Yellowthroat', "Wilson's Warbler", 'Hermit Warbler', 'Yellow Warbler', 'Hooded Oriole', 'American Goldfinch', 'Lesser Goldfinch', "Cassin's Kingbird", 'Western Flycatcher']
  },
  {
    id: '26',
    name: 'Wilson’s Warbler',
    group: 'Parulidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/297073391-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/64914591-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/64914581-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/64914631-1280px.jpg'
    ],
    distractorPool: ['Orange-crowned Warbler', 'Yellow-rumped Warbler', 'Common Yellowthroat', "Townsend's Warbler", 'Hermit Warbler', 'Yellow Warbler', 'Hooded Oriole', 'American Goldfinch', 'Lesser Goldfinch', "Cassin's Kingbird", 'Western Flycatcher']
  },
  {
    id: '27',
    name: 'Hermit Warbler',
    group: 'Parulidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/297068091-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/64902381-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/64902351-1280px.jpg',
      'https://media.audubon.org/nas_birdapi/hermit-warbler_001_spring_california_tombenson_flickrccby-nc-nd-2.0_adult-male.jpg?height=472&auto=webp&quality=90&fit=bounds&disable=upscale'
    ],
    distractorPool: ['Orange-crowned Warbler', 'Yellow-rumped Warbler', 'Common Yellowthroat', "Townsend's Warbler", "Wilson's Warbler", 'Yellow Warbler', 'Hooded Oriole', 'American Goldfinch', 'Lesser Goldfinch', "Cassin's Kingbird", 'Western Flycatcher']
  },
  {
    id: '28',
    name: 'Yellow Warbler',
    group: 'Parulidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/639564193-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/64802891-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/64802921-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/64802941-1280px.jpg'
    ],
    distractorPool: ['Orange-crowned Warbler', 'Yellow-rumped Warbler', 'Common Yellowthroat', "Townsend's Warbler", "Wilson's Warbler", 'Hermit Warbler', 'Hooded Oriole', 'American Goldfinch', 'Lesser Goldfinch', "Cassin's Kingbird", 'Western Flycatcher']
  },
  {
    id: '29',
    name: 'Black Phoebe',
    group: 'Tyrannidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/301873541-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/301874531-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/65681201-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/301874771-1280px.jpg'
    ],
    distractorPool: ["Say's Phoebe", 'Cliff Swallow', 'Barn Swallow', 'European Starling', 'Bushtit', "Brewer's Blackbird"]
  },
  {
    id: '30',
    name: 'Cassin’s Kingbird',
    group: 'Tyrannidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/302102281-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/302101871-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/309029531-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/302101961-1280px.jpg'
    ],
    distractorPool: ['Western Flycatcher', "Say's Phoebe", 'Hooded Oriole', 'Northern Mockingbird', 'House Finch']
  },
  {
    id: '31',
    name: 'Western Flycatcher',
    group: 'Tyrannidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/301860641-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/301860871-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/65680381-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/301865791-1280px.jpg'
    ],
    distractorPool: ['Orange-crowned Warbler', "Cassin's Kingbird", 'Bushtit', "Say's Phoebe"]
  },
  {
    id: '32',
    name: 'Say’s Phoebe',
    group: 'Tyrannidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/301881791-1280px.jpg',
      'https://media.audubon.org/nas_birdapi/says-phoebe_004_winter_california_andyreagochrissymcclarren_flickrcc-by-2.0_adult-worn-plumage.jpg?height=472&auto=webp&quality=90&fit=bounds&disable=upscale',
      'https://www.allaboutbirds.org/guide/assets/photo/301882451-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/301882631-1280px.jpg'
    ],
    distractorPool: ['Song Sparrow', 'House Sparrow', 'House Finch', 'California Towhee', 'Mourning Dove', 'California Thrasher', 'Northern Mockingbird']
  },
  {
    id: '33',
    name: 'Bushtit',
    group: 'Aegithalidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/308555001-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/308553421-1280px.jpg'
    ],
    distractorPool: ['Song Sparrow', 'Mourning Dove', 'Western Flycatcher', 'Killdeer', 'California Towhee', 'House Finch', 'House Sparrow']
  },
  {
    id: '34',
    name: 'House Sparrow',
    group: 'Passeridae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/305880301-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/305877171-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/305874191-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/305878071-1280px.jpg'
    ],
    distractorPool: ['Song Sparrow', 'House Finch', 'Cliff Swallow', 'Barn Swallow', 'Bushtit']
  },
  {
    id: '35',
    name: 'Black-headed Grosbeak',
    group: 'Cardinalidae',
    order: 'Passeriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/297327641-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/308799881-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/308800161-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/67447531-1280px.jpg'
    ],
    distractorPool: ['Hooded Oriole', 'Spotted Towhee', 'American Goldfinch', 'Lesser Goldfinch', 'California Scrub-Jay', 'American Robin']
  },
  {
    id: '36',
    name: 'Red-tailed Hawk',
    group: 'Accipitridae',
    order: 'Accipitriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/319806651-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/60384771-1280px.jpg',
      'https://media.audubon.org/nas_birdapi_hero/h_apa_2016-a1_1919_1_red-tailed-hawk_christopher_ciccone_kk_adult.jpg?height=472&auto=webp&quality=90&fit=bounds&disable=upscale',
      'https://www.allaboutbirds.org/guide/assets/photo/319861731-1280px.jpg'
    ],
    distractorPool: ["Cooper's Hawk", 'Red-shouldered Hawk', 'White-tailed Kite', 'Osprey', 'Peregrine Falcon', 'American Kestrel', 'Turkey Vulture']
  },
  {
    id: '37',
    name: 'Red-shouldered Hawk',
    group: 'Accipitridae',
    order: 'Accipitriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/306105961-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/306105171-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/71533451-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/306107321-1280px.jpg'
    ],
    distractorPool: ["Cooper's Hawk", 'Red-tailed Hawk', 'White-tailed Kite', 'Osprey', 'Peregrine Falcon', 'American Kestrel', 'Turkey Vulture']
  },
  {
    id: '38',
    name: 'Cooper’s Hawk',
    group: 'Accipitridae',
    order: 'Accipitriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/60324921-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/305687541-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/305687791-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/60324861-1280px.jpg'
    ],
    distractorPool: ['Red-tailed Hawk', 'Red-shouldered Hawk', 'White-tailed Kite', 'Osprey', 'American Kestrel', 'Peregrine Falcon', 'Turkey Vulture']
  },
  {
    id: '39',
    name: 'Osprey',
    group: 'Pandionidae',
    order: 'Accipitriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/60320581-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/305310391-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/60320571-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/60320591-1280px.jpg'
    ],
    distractorPool: ["Cooper's Hawk", 'Red-tailed Hawk', 'White-tailed Kite', 'Red-shouldered Hawk', 'Peregrine Falcon', 'American Kestrel', 'Turkey Vulture']
  },
  {
    id: '40',
    name: 'White-tailed Kite',
    group: 'Accipitridae',
    order: 'Accipitriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/70707541-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/305336671-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/305338531-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/70707601-1280px.jpg'
    ],
    distractorPool: ['Red-tailed Hawk', 'Red-shouldered Hawk', "Cooper's Hawk", 'Osprey', 'Peregrine Falcon', 'American Kestrel', 'Great Egret', 'American White Pelican', 'Western Gull']
  },
  {
    id: '41',
    name: 'Allen’s Hummingbird',
    group: 'Trochilidae',
    order: 'Apodiformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/304001991-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/65775931-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/304003321-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/304002391-1280px.jpg'
    ],
    distractorPool: ["Anna's Hummingbird", 'Bushtit', 'Killdeer']
  },
  {
    id: '42',
    name: 'Anna’s Hummingbird',
    group: 'Trochilidae',
    order: 'Apodiformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/303891031-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/303891421-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/66120961-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/303891641-1280px.jpg'
    ],
    distractorPool: ["Allen's Hummingbird", 'Bushtit', 'Killdeer']
  },
  {
    id: '43',
    name: 'Turkey Vulture',
    group: 'Cathartidae',
    order: 'Cathartiformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/60317261-1280px.jpg'
    ],
    distractorPool: ['Red-tailed Hawk', 'Red-shouldered Hawk', "Brandt's Cormorant", 'Double-crested Cormorant', 'Osprey', 'American Kestrel', 'Peregrine Falcon', "Cooper's Hawk"]
  },
  {
    id: '44',
    name: 'Mourning Dove',
    group: 'Columbidae',
    order: 'Columbiformes',
    images: [
      'https://media.audubon.org/nas_birdapi/aud_gbbc-2016_mourning-dove_35427_kk_fl_photo-mark-eden_adult.jpg?height=472&auto=webp&quality=90&fit=bounds&disable=upscale',
      'https://media.audubon.org/nas_birdapi_hero/h_aud_gbbc-2016_mourning-dove_34483_kk_me_photo-betsy-bass_adults.jpg?height=472&auto=webp&quality=90&fit=bounds&disable=upscale',
      'https://www.allaboutbirds.org/guide/assets/photo/60386941-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/60386901-1280px.jpg'
    ],
    distractorPool: ['Eurasian Collared-Dove', 'Rock Pigeon', 'Bushtit', 'American Kestrel', 'California Quail']
  },
  {
    id: '45',
    name: 'Rock Pigeon',
    group: 'Columbidae',
    order: 'Columbiformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/308065631-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/308074031-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/308067801-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/308072341-1280px.jpg'
    ],
    distractorPool: ['Mourning Dove', 'Eurasian Collared-Dove', 'American Kestrel', 'Bushtit', 'California Quail']
  },
  {
    id: '46',
    name: 'Eurasian Collared-Dove',
    group: 'Columbidae',
    order: 'Columbiformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/308119951-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/66035101-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/308120421-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/66035111-1280px.jpg'
    ],
    distractorPool: ['Mourning Dove', 'Rock Pigeon', 'Bushtit', 'American Kestrel', 'California Quail']
  },
  {
    id: '47',
    name: 'Greater Roadrunner',
    group: 'Cuculidae',
    order: 'Cuculiformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/60388681-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/60388701-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/308438211-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/60388691-1280px.jpg'
    ],
    distractorPool: ['Mourning Dove', 'Eurasian Collared-Dove', 'California Thrasher', 'Northern Mockingbird', 'California Towhee', 'California Quail']
  },
  {
    id: '48',
    name: 'American Kestrel',
    group: 'Falconidae',
    order: 'Falconiformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/302366931-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/70583901-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/302367281-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/302367271-1280px.jpg'
    ],
    distractorPool: ["Cooper's Hawk", 'Red-tailed Hawk', 'White-tailed Kite', 'Osprey', 'Peregrine Falcon', 'Red-shouldered Hawk', 'Turkey Vulture']
  },
  {
    id: '49',
    name: 'Peregrine Falcon',
    group: 'Falconidae',
    order: 'Falconiformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/303618951-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/303616431-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/60410441-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/303616551-1280px.jpg'
    ],
    distractorPool: ["Cooper's Hawk", 'Red-tailed Hawk', 'White-tailed Kite', 'Osprey', 'American Kestrel', 'Red-shouldered Hawk', 'Turkey Vulture']
  },
  {
    id: '50',
    name: 'California Quail',
    group: 'Odontophoridae',
    order: 'Galliformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/296733361-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/296733551-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/296733591-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/65610051-1280px.jpg'
    ],
    distractorPool: ['Rock Pigeon', 'Eurasian Collared-Dove', 'Mourning Dove', 'Greater Roadrunner', 'American Wigeon']
  },
  {
    id: '51',
    name: 'Nuttall’s Woodpecker',
    group: 'Picidae',
    order: 'Piciformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/297698041-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/297698461-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/297698571-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/297698611-1280px.jpg'
    ],
    distractorPool: ['Northern Flicker', 'Acorn Woodpecker', 'Downy Woodpecker']
  },
  {
    id: '52',
    name: 'Northern Flicker',
    group: 'Picidae',
    order: 'Piciformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/60403261-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/60403281-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/60403251-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/310422201-1280px.jpg'
    ],
    distractorPool: ["Nuttall's Woodpecker", 'Acorn Woodpecker', 'Downy Woodpecker']
  },
  {
    id: '53',
    name: 'Acorn Woodpecker',
    group: 'Picidae',
    order: 'Piciformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/64992871-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/64992841-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/64992881-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/64992891-1280px.jpg'
    ],
    distractorPool: ['Northern Flicker', "Nuttall's Woodpecker", 'Downy Woodpecker']
  },
  {
    id: '54',
    name: 'Downy Woodpecker',
    group: 'Picidae',
    order: 'Piciformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/60397941-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/60397891-1280px.jpg',
      'https://media.audubon.org/nas_birdapi/a1_5333_7_downy_woodpecker_tamima_itani_adult_male_and_juvenile.jpg?height=472&auto=webp&quality=90&fit=bounds&disable=upscale',
      'https://www.allaboutbirds.org/guide/assets/photo/60397951-1280px.jpg'
    ],
    distractorPool: ['Northern Flicker', 'Acorn Woodpecker', "Nuttall's Woodpecker"]
  },
  {
    id: '55',
    name: 'American Barn Owl',
    group: 'Tytonidae',
    order: 'Strigiformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/297342281-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/63738041-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/297342421-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/63738021-1280px.jpg'
    ],
    distractorPool: ['Great Horned Owl', 'Greater Roadrunner', 'Great Egret', 'Barn Swallow']
  },
  {
    id: '56',
    name: 'Great Horned Owl',
    group: 'Strigidae',
    order: 'Strigiformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/297363481-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/297363561-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/63741561-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/63741591-1280px.jpg'
    ],
    distractorPool: ['American Barn Owl', 'Barn Swallow', 'Great Egret', 'Greater Roadrunner']
  },
  {
    id: '57',
    name: 'Mallard',
    group: 'Anatidae',
    order: 'Anseriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/308743051-1280px.jpg',
      'https://media.audubon.org/nas_birdapi/a1_5962_2_mallard_robert_cook_breeding-adult-male.jpg?height=472&auto=webp&quality=90&fit=bounds&disable=upscale',
      'https://www.allaboutbirds.org/guide/assets/photo/300196861-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/300200921-1280px.jpg'
    ],
    distractorPool: ['Northern Shoveler', 'Redhead', 'Surf Scoter', 'Cinnamon Teal', 'Gadwall', 'Ruddy Duck', 'Bufflehead', 'American Wigeon', 'Ring-necked Duck', 'American Coot']
  },
  {
    id: '58',
    name: 'Canada Goose',
    group: 'Anatidae',
    order: 'Anseriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/59953191-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/59953111-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/59953131-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/59953181-1280px.jpg'
    ],
    distractorPool: ['Swan Goose', 'Greater White-fronted Goose', 'Common Loon', 'Red-throated Loon', 'Western Grebe', 'Eared Grebe', 'Double-crested Cormorant', "Brandt's Cormorant"]
  },
  {
    id: '59',
    name: 'Northern Shoveler',
    group: 'Anatidae',
    order: 'Anseriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/300124811-1280px.jpg',
      'https://media.audubon.org/nas_birdapi/a1_5268_2_northern-shoveler_marlin_gher_breeding-adult-male.jpg?height=472&auto=webp&quality=90&fit=bounds&disable=upscale',
      'https://www.allaboutbirds.org/guide/assets/photo/300125781-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/300125941-1280px.jpg'
    ],
    distractorPool: ['Mallard', 'Redhead', 'Surf Scoter', 'Cinnamon Teal', 'Gadwall', 'Ruddy Duck', 'Bufflehead', 'American Wigeon', 'Ring-necked Duck', 'American Coot']
  },
  {
    id: '60',
    name: 'Redhead',
    group: 'Anatidae',
    order: 'Anseriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/301323281-1280px.jpg',
      'https://media.audubon.org/nas_birdapi_hero/h_apa_2016-a1_2073_5_redhead_bill_dix_kk_adult-female-and-breeding-adult-male.jpg?height=472&auto=webp&quality=90&fit=bounds&disable=upscale',
      'https://www.allaboutbirds.org/guide/assets/photo/301338901-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/301323811-1280px.jpg'
    ],
    distractorPool: ['Northern Shoveler', 'Mallard', 'Surf Scoter', 'Cinnamon Teal', 'Gadwall', 'Ruddy Duck', 'Bufflehead', 'American Wigeon', 'Ring-necked Duck', 'American Coot']
  },
  {
    id: '61',
    name: 'Surf Scoter',
    group: 'Anatidae',
    order: 'Anseriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/302040411-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/302040181-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/302037741-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/302037681-1280px.jpg'
    ],
    distractorPool: ['Northern Shoveler', 'Redhead', 'Mallard', 'Cinnamon Teal', 'Gadwall', 'Ruddy Duck', 'Bufflehead', 'American Wigeon', 'Ring-necked Duck', 'American Coot']
  },
  {
    id: '62',
    name: 'Cinnamon Teal',
    group: 'Anatidae',
    order: 'Anseriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/626636864-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/299911431-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/299911301-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/60310511-1280px.jpg'
    ],
    distractorPool: ['Northern Shoveler', 'Redhead', 'Surf Scoter', 'Mallard', 'Gadwall', 'Ruddy Duck', 'Bufflehead', 'American Wigeon', 'Ring-necked Duck', 'American Coot']
  },
  {
    id: '63',
    name: 'Gadwall',
    group: 'Anatidae',
    order: 'Anseriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/308742131-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/60015831-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/60015891-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/300135821-1280px.jpg'
    ],
    distractorPool: ['Northern Shoveler', 'Redhead', 'Surf Scoter', 'Cinnamon Teal', 'Mallard', 'Ruddy Duck', 'Bufflehead', 'American Wigeon', 'Ring-necked Duck', 'American Coot']
  },
  {
    id: '64',
    name: 'Ruddy Duck',
    group: 'Anatidae',
    order: 'Anseriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/302124271-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/302126591-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/63912481-1280px.jpg',
      'https://media.audubon.org/nas_birdapi_hero/a1_5489_2_ruddy-duck_don_bland_breeding-adult-male.jpg?height=472&auto=webp&quality=90&fit=bounds&disable=upscale'
    ],
    distractorPool: ['Northern Shoveler', 'Redhead', 'Surf Scoter', 'Cinnamon Teal', 'Gadwall', 'Mallard', 'Bufflehead', 'American Wigeon', 'Ring-necked Duck', 'American Coot']
  },
  {
    id: '65',
    name: 'Bufflehead',
    group: 'Anatidae',
    order: 'Anseriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/216531741-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/302053571-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/63905211-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/302053701-1280px.jpg'
    ],
    distractorPool: ['Northern Shoveler', 'Redhead', 'Surf Scoter', 'Cinnamon Teal', 'Gadwall', 'Ruddy Duck', 'Mallard', 'American Wigeon', 'Ring-necked Duck', 'American Coot']
  },
  {
    id: '66',
    name: 'American Wigeon',
    group: 'Anatidae',
    order: 'Anseriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/60017891-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/60017901-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/60017921-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/300142261-1280px.jpg'
    ],
    distractorPool: ['Northern Shoveler', 'Redhead', 'Surf Scoter', 'Cinnamon Teal', 'Gadwall', 'Ruddy Duck', 'Bufflehead', 'Mallard', 'Ring-necked Duck', 'American Coot']
  },
  {
    id: '67',
    name: 'Swan Goose',
    group: 'Anatidae',
    order: 'Anseriformes',
    images: [
      'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/157502371/1200',
      'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/157502381/320',
      'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/157502401/320',
      'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/157502411/320'
    ],
    distractorPool: ['Canada Goose', 'Greater White-fronted Goose', 'Common Loon', 'Red-throated Loon', 'Western Grebe', 'Eared Grebe', 'Double-crested Cormorant', "Brandt's Cormorant"]
  },
  {
    id: '68',
    name: 'Greater White-fronted Goose',
    group: 'Anatidae',
    order: 'Anseriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/59938311-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/59938211-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/59938241-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/59938291-1280px.jpg'
    ],
    distractorPool: ['Swan Goose', 'Canada Goose', 'Common Loon', 'Red-throated Loon', 'Western Grebe', 'Eared Grebe', 'Double-crested Cormorant', "Brandt's Cormorant"]
  },
  {
    id: '69',
    name: 'Ring-necked Duck',
    group: 'Anatidae',
    order: 'Anseriformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/301536921-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/63895191-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/301537281-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/63895231-1280px.jpg'
    ],
    distractorPool: ['Northern Shoveler', 'Redhead', 'Surf Scoter', 'Cinnamon Teal', 'Gadwall', 'Ruddy Duck', 'Bufflehead', 'American Wigeon', 'Mallard', 'American Coot']
  },
  {
    id: '70',
    name: 'Killdeer',
    group: 'Charadriidae',
    order: 'Charadriiformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/64809691-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/64809661-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/301221881-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/64809631-1280px.jpg'
    ],
    distractorPool: ['California Scrub-Jay', 'Northern Mockingbird', 'Snowy Egret', 'White-faced Ibis', 'American Coot']
  },
  {
    id: '71',
    name: 'Western Gull',
    group: 'Laridae',
    order: 'Charadriiformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/303371381-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/303371491-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/71316801-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/71316821-1280px.jpg'
    ],
    distractorPool: ["Heermann's Gull", 'Ring-billed Gull', 'California Gull']
  },
  {
    id: '72',
    name: 'Heermann’s Gull',
    group: 'Laridae',
    order: 'Charadriiformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/303366721-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/71312841-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/71312851-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/71312861-1280px.jpg'
    ],
    distractorPool: ['Western Gull', 'Ring-billed Gull', 'California Gull']
  },
  {
    id: '73',
    name: 'Ring-billed Gull',
    group: 'Laridae',
    order: 'Charadriiformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/303369661-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/532264921-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/71316011-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/303369851-1280px.jpg'
    ],
    distractorPool: ["Heermann's Gull", 'Western Gull', 'California Gull']
  },
  {
    id: '74',
    name: 'California Gull',
    group: 'Laridae',
    order: 'Charadriiformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/303379191-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/71318181-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/303379871-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/303379251-1280px.jpg'
    ],
    distractorPool: ["Heermann's Gull", 'Ring-billed Gull', 'Western Gull']
  },
  {
    id: '75',
    name: 'Forster’s Tern',
    group: 'Laridae',
    order: 'Charadriiformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/308420601-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/308420931-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/71337161-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/71337181-1280px.jpg'
    ],
    distractorPool: ['Royal Tern', 'Caspian Tern', 'Elegant Tern']
  },
  {
    id: '76',
    name: 'Royal Tern',
    group: 'Laridae',
    order: 'Charadriiformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/308469271-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/308469651-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/170459311-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/71427421-1280px.jpg'
    ],
    distractorPool: ["Forster's Tern", 'Caspian Tern', 'Elegant Tern']
  },
  {
    id: '77',
    name: 'Caspian Tern',
    group: 'Laridae',
    order: 'Charadriiformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/618385229-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/71334321-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/308394531-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/71334351-1280px.jpg'
    ],
    distractorPool: ['Royal Tern', "Forster's Tern", 'Elegant Tern']
  },
  {
    id: '78',
    name: 'Elegant Tern',
    group: 'Laridae',
    order: 'Charadriiformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/170569841-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/170569861-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/308484621-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/308485631-1280px.jpg'
    ],
    distractorPool: ['Royal Tern', 'Caspian Tern', "Forster's Tern"]
  },
  {
    id: '79',
    name: 'Red-throated Loon',
    group: 'Gaviidae',
    order: 'Gaviiformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/306758371-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/306753701-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/306752591-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/63916701-1280px.jpg'
    ],
    distractorPool: ['Common Loon', 'Western Grebe', 'Eared Grebe', 'American Coot', 'Pied-billed Grebe', 'Double-crested Cormorant', "Brandt's Cormorant"]
  },
  {
    id: '80',
    name: 'Common Loon',
    group: 'Gaviidae',
    order: 'Gaviiformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/308049951-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/308050341-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/63918071-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/63918091-1280px.jpg'
    ],
    distractorPool: ['Red-throated Loon', 'Western Grebe', 'Eared Grebe', 'American Coot', 'Pied-billed Grebe', 'Double-crested Cormorant', "Brandt's Cormorant"]
  },
  {
    id: '81',
    name: 'American Coot',
    group: 'Rallidae',
    order: 'Gruiformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/303193191-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/71547151-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/303193371-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/303193641-1280px.jpg'
    ],
    distractorPool: ['Common Gallinule', 'Mallard', 'Gadwall', 'Northern Shoveler', 'Cinnamon Teal', 'Ruddy Duck', 'Bufflehead', 'American Wigeon', 'Ring-necked Duck', 'Red-throated Loon', 'Common Loon', 'Western Grebe', 'Eared Grebe', 'Pied-billed Grebe', 'Double-crested Cormorant', "Brandt's Cormorant"]
  },
  {
    id: '82',
    name: 'Great Egret',
    group: 'Ardeidae',
    order: 'Pelecaniformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/70610211-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/70610201-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/304480271-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/70610221-1280px.jpg'
    ],
    distractorPool: ['Snowy Egret', 'Great Blue Heron', 'Green Heron', 'Black-crowned Night Heron', 'White-faced Ibis', 'American White Pelican', 'Brown Pelican']
  },
  {
    id: '83',
    name: 'Brown Pelican',
    group: 'Pelecanidae',
    order: 'Pelecaniformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/70591141-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/304463841-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/70591171-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/304463921-1280px.jpg'
    ],
    distractorPool: ['American White Pelican', 'Double-crested Cormorant', "Brandt's Cormorant", 'Great Blue Heron', 'Great Egret', 'Snowy Egret', 'Green Heron', 'Black-crowned Night Heron', 'White-faced Ibis']
  },
  {
    id: '84',
    name: 'Black-crowned Night Heron',
    group: 'Ardeidae',
    order: 'Pelecaniformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/304986701-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/70693041-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/304988121-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/304986921-1280px.jpg'
    ],
    distractorPool: ['Green Heron', 'Snowy Egret', 'Great Egret', 'Great Blue Heron', 'White-faced Ibis', 'American White Pelican', 'Brown Pelican']
  },
  {
    id: '85',
    name: 'Snowy Egret',
    group: 'Ardeidae',
    order: 'Pelecaniformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/70611061-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/70611091-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/304481821-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/70611051-1280px.jpg'
    ],
    distractorPool: ['Great Egret', 'Great Blue Heron', 'Green Heron', 'Black-crowned Night Heron', 'White-faced Ibis', 'American White Pelican', 'Brown Pelican']
  },
  {
    id: '86',
    name: 'Great Blue Heron',
    group: 'Ardeidae',
    order: 'Pelecaniformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/304479371-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/60314281-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/60314291-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/60314261-1280px.jpg'
    ],
    distractorPool: ['Great Egret', 'Snowy Egret', 'Green Heron', 'Black-crowned Night Heron', 'White-faced Ibis', 'American White Pelican', 'Brown Pelican']
  },
  {
    id: '87',
    name: 'Green Heron',
    group: 'Ardeidae',
    order: 'Pelecaniformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/304980141-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/70691721-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/70691781-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/70691751-1280px.jpg'
    ],
    distractorPool: ['Black-crowned Night Heron', 'Snowy Egret', 'Great Egret', 'Great Blue Heron', 'White-faced Ibis', 'American White Pelican', 'Brown Pelican']
  },
  {
    id: '88',
    name: 'White-faced Ibis',
    group: 'Threskiornithidae',
    order: 'Pelecaniformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/308512681-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/308512741-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/70695691-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/70695721-1280px.jpg'
    ],
    distractorPool: ['Snowy Egret', 'Great Egret', 'Great Blue Heron', 'Green Heron', 'Black-crowned Night Heron', 'American White Pelican', 'Brown Pelican']
  },
  {
    id: '89',
    name: 'American White Pelican',
    group: 'Pelecanidae',
    order: 'Pelecaniformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/70589271-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/70589261-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/304461171-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/304461341-1280px.jpg'
    ],
    distractorPool: ['Brown Pelican', 'Double-crested Cormorant', "Brandt's Cormorant", 'Great Blue Heron', 'Great Egret', 'Snowy Egret', 'Green Heron', 'Black-crowned Night Heron', 'White-faced Ibis']
  },
  {
    id: '90',
    name: 'Eared Grebe',
    group: 'Podicipedidae',
    order: 'Podicipediformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/305508041-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/305504741-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/65058091-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/305505061-1280px.jpg'
    ],
    distractorPool: ['Western Grebe', 'Pied-billed Grebe', 'Common Loon', 'Red-throated Loon', 'American Coot', 'Double-crested Cormorant', "Brandt's Cormorant"]
  },
  {
    id: '91',
    name: 'Western Grebe',
    group: 'Podicipedidae',
    order: 'Podicipediformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/305516121-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/65072021-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/305510611-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/305510021-1280px.jpg'
    ],
    distractorPool: ['Eared Grebe', 'Pied-billed Grebe', 'Common Loon', 'Red-throated Loon', 'American Coot', 'Double-crested Cormorant', "Brandt's Cormorant"]
  },
  {
    id: '92',
    name: 'Pied-billed Grebe',
    group: 'Podicipedidae',
    order: 'Podicipediformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/304522011-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/304531221-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/304527041-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/304530361-1280px.jpg'
    ],
    distractorPool: ['Eared Grebe', 'Western Grebe', 'Common Loon', 'Red-throated Loon', 'American Coot', 'Double-crested Cormorant', "Brandt's Cormorant"]
  },
  {
    id: '93',
    name: 'Double-crested Cormorant',
    group: 'Phalacrocoracidae',
    order: 'Suliformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/66027281-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/66027241-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/66027251-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/66027261-1280px.jpg'
    ],
    distractorPool: ["Brandt's Cormorant", 'Brown Pelican', 'American White Pelican', 'Common Loon', 'Red-throated Loon', 'Western Grebe', 'Eared Grebe', 'Pied-billed Grebe']
  },
  {
    id: '94',
    name: 'Brandt’s Cormorant',
    group: 'Phalacrocoracidae',
    order: 'Suliformes',
    images: [
      'https://www.allaboutbirds.org/guide/assets/photo/66025501-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/304389641-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/66025531-1280px.jpg',
      'https://www.allaboutbirds.org/guide/assets/photo/304389661-1280px.jpg'
    ],
    distractorPool: ['Double-crested Cormorant', 'Brown Pelican', 'American White Pelican', 'Common Loon', 'Red-throated Loon', 'Western Grebe', 'Eared Grebe', 'Pied-billed Grebe']
  },
];
