export interface DataButton {
    style: string
    text: string,
    type: string
    action?: () => void
    urlRedirect?: string
    target?:string
}