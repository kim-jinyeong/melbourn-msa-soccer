const express =  require('express');
const adminRouter = express.Router()

adminRouter.use((req, res, next) => {
    console.log(' ### 스케줄 서버 ###');
    next();
});


module.exports = adminRouter;