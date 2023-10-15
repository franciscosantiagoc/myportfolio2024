import { HtmlHTMLAttributes } from "react";

export function activeMobileMenu() {
    let toogleMenu =  document.querySelector('.toggle-icon');
    toogleMenu?.closest('.header')?.classList.toggle('active')
}