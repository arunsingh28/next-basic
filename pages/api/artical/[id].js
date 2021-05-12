import { articles } from "../../../data"


export default function handle(req, res) {
    const {id} = req.query
    const filtered = articles.filter(article => article.id === id)

    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({ message: `data of id :${id} not found.` })
    }

}