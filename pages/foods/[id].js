
import axios from "axios";
import { Container, Row } from "react-bootstrap";
export const config = { runtime: 'edge' };

const fetchFood = async (id) => {
    return (await axios.get(`http://localhost:3001/api/foods?id=${encodeURIComponent(id)}`)).data;
};

export async function getServerSideProps({ params }) {
    return { props: { data: await fetchFood(params.id) }};
}

const foodImageStyle = {
    width: "100%",
};

const Food = ({ data }) => {
    return (
        <div>
            <Container>
                {data && (
                    <>
                        <Row>
                            <img src={`/foods/${data.id}.jpg`} style={foodImageStyle} alt={data.name} />
                        </Row>
                        <Row>
                            <h1 className="text-center">{data.name || "superfood"}</h1>
                        </Row>
                    </>
                )}
            </Container>
        </div>
    );
};

export default Food;
