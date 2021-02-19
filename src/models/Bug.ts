import { builtinModules } from "module";


function getAllBugs(): bug[] {
  const query = {
    // give the query a unique name
    name: "fetch-user",
    text: "SELECT * FROM user WHERE id = $1",
    values: [1],
    types: {
      getTypeParser: () => (val) => val,
    },
    rowMode: "array",
  };
  // callback
  pool.query(query, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows[0]);
    }
  });
  // promise
  return pool
    .query(query)
    .then((res) => console.log(res.rows[0]))
    .catch((e) => console.error(e.stack));
}

const getBugById = async (id: number) => {
  return await pool.query(`select * from bug where id = ${id}`);
};

const submitNewBug = async (bug: bug) => {
  pool.query(
    `insert into bug values(DEFAULT,${bug.nameOfBug},${bug.isFixed},${bug.priorityLevel})`
  );
};

module.exports = { getAllBugs, getBugById, submitNewBug };
