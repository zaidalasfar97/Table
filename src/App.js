import React, { useEffect, useState } from "react";
import { Table } from "./components/Table";
import * as _ from "lodash";
import axios from "axios";
function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f")
      .then((d) => {
        setTableData(_.sortBy(d?.data?.result?.auditLog, "logId"));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <div>
        <Table newData={tableData} />
      </div>
    </div>
  );
}

export default App;
