import faker from "faker";

const dummyGenerator = () => {
    let dummyList = [];
    for (let i = 0; i < 30; i++) {
        const data = {
            name: faker.name.firstName(),
            submitTime: faker.date.past(),
            score: faker.random.number({ min: 0, max: 100 }),
        }
        dummyList.push(data);
    }
    return dummyList;
}

export default dummyGenerator;