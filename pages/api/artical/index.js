
import { getStaticPaths } from '../../../data/index'
getStaticPaths()

export default function handle(req, res) {
    res.status(200).json()
}