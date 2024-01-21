import food from "../../food.json";

export default (req, res) => {
    const filter = req.query.q ? new RegExp(req.query.q, "i") : /.*/;
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
        JSON.stringify(
            food.filter(({ name }) => name.match(filter))
        )
    );
};