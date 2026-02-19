import express, { Router } from 'express'


const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
    res.render("index", { error: "" });
})



export default indexRouter;