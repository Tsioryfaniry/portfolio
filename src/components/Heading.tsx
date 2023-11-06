import style from './Heading.module.scss'

import Hero from '../interface/Landing';

function Heading(props:Hero) {
    const{ tag, children } = props
    const Tag:any = tag;
  return (
    <div className={style.heading}>
        <Tag>
            {children}
        </Tag>
    </div>
  )
}

export default Heading