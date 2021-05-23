import { NextApiRequest, NextApiResponse } from 'next'



export default function (req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body.userame)
    res.send({ status: "ok" })
}

