export interface DataCards {
    skills: CardTitle[]
    knowledge: CardTitle[]
  }
  
  export interface CardTitle {
    id: number
    title: string
    image: string
    isSmallCard: boolean
  }
  