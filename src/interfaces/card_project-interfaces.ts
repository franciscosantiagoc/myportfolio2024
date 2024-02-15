export interface DataProjects {
    data: CardProject[]
}
  
export interface CardProject {
  id: number
  name: string
  description: string
  dateStart: string
  dateEnd: string
  image: string[]
  technologies: number[]
  urlRepo: string
  urlPage?: string
  urlVideo?: string
}

export interface Technology {
  id: number
  name: string
  icon?: string
  prefix?: string[]
}