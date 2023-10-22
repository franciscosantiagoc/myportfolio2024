export interface DataCards {
    skills: Card[]
    knowledges: Card[]
  }
  
  export interface Card {
    id: number
    title: string
    image: string
    isSmallCard: boolean,
    textAlt?: string
  }
  