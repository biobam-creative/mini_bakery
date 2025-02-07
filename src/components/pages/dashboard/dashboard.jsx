import { useEffect, useState } from "react";
import httpServices from "../../../services/httpServices";
import config from "../../../config.json";
import { BsPeopleFill, BsPersonFill, BsFillBellFill } from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { PageWrapper } from "../../styledComponents";
import SideBar from "../../ui/sidebar/sideBar";
// import "./style.css";

function Dashboard() {
  let [teachers, setTeachers] = useState(0);
  let [students, setStudents] = useState(0);

  useEffect(() => {
    async function getData() {
      const result = await httpServices.header.get(
        config.apiUrl + "/registration/dashboard"
      );
      setTeachers(result.data["teachers"]);
      setStudents(result.data["students"]);
    }
    getData();
  }, [teachers, students]);

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>
      Dashboard hdjddldkdkdkdkdkdkjdjkdkkdkdkdkjhdjddjdkdkdkdkdkdkkd d dkdkkdkd
      dkdkdkkdkdkdjdjdjjddlkdjkjdlflflrrkrjnoslnfkkfjj hskksk"
    </div>
  );
}

export default Dashboard;
