import Link from 'next/link'
import style from '../styles/Home/Artical.module.css'

const Artical = ({artical}) => {
    return (
        <div>
            {
                artical.data.map((i, index) =>
                    <Link href={'posts/'+i.id}>
                    <div className={style.card} key={Math.random()}>{index + 1}. {i.name}</div></Link>
                )
            }
        </div>
    )
}



export default Artical
