import style from '../styles/Home/Artical.module.css'

const Artical = ({artical}) => {
    return (
        <div>
            {
                artical.map((i, index) =>
                    <div className={style.card} key={Math.random()}>{index + 1}. {i.title}</div>
                )
            }
        </div>
    )
}



export default Artical
