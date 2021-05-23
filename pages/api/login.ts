import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'


export default async function (req: NextApiRequest, res: NextApiResponse) {
    const { username, password } = req.body

    if (username === '' || username === '') {
        return res.status(406).json({ stauts: 'error', error: "Can't accept null value" })
    }

    try {
        const token: String = await jwt.sign(
            {
                username,
                admin: username === 'admin' && password === 'admin'
            },
            process.env.JWT_SECRET
        )
        return res.json({ status: 'ok', token })

    } catch (error) {
        return res.json({ status: 'error', 'error': error })
    }
}

