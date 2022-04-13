import express from 'express'
import { prismaTest } from '../controllers/testController'
const router = express.Router()

router.get('/prisma', prismaTest)

module.exports = router
