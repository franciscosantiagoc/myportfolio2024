import { Fragment } from 'react';
import { DataButton } from '../../interfaces/general-interfaces';
export default function index(props: DataButton) {

  const actionButton = ()=> {
    const personalAction = props.action || null;

    if(personalAction) {
      personalAction();
    }else {
      alert('Action is not available');
    }
  }
  return (
    <Fragment>
      {props.type == 'button' && (<button className={`${props.style}`} onClick={actionButton}>${props.text}</button>)}
      
      {props.type == 'link' && (<a className={`${props.style}`} href={props.urlRedirect} target={props.target}>${props.text}</a>)}
            
    </Fragment>
  )
}
