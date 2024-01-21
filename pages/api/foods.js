import foods from "../../food.json";

export default (req, res) => {
    if (!req.query.id) {
        res.statusCode = 400;
        res.end("Must have id");
    } else {
        const superfood = foods.filter(
            ({ id }) => id === parseInt(req.query.id)
        );
        if (superfood.length === 0) {
            res.statusCode = 404;
            res.end(`Food ${req.query.id} not found!!!!`);
        } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(superfood[0]));
        }
    }
};