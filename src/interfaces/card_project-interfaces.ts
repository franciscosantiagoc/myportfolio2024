export interface DataProjects {
    data: CardProject[]
}
  
export interface CardProject {
  id: number
  name: string
  description: string
  date: Date
  image: string
  textAlt?: string
  urlRepo: string
  urlPage: string
  urlVideo?: string
}

export interface Technology {
  id: number
  name: string
  prefix?: string[]
}