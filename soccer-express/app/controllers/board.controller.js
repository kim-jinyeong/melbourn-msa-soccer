exports.write = (req, res) => {
    console.log(req.body)
    res.status(200).json({'result' : 'ok'})
}