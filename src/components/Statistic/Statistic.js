import React from 'react';
import './Statistic.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Statistic = () => {
  const data = [
        {
          id: 1,
          name: "React",
          logo: "https://live.staticflickr.com/65535/52413593240_e00326e727_o.png",
          total: 8,
        },
        {
          id: 2,
          name: "JavaScript",
          logo: "https://live.staticflickr.com/65535/52412638962_12e932256a_o.png",
          total: 9,
        },
        {
          id: 4,
          name: "CSS",
          logo: "https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png",
          total: 8,
        },
        {
          id: 5,
          name: "Git",
          logo: "https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png",
          total: 11,
        },
  ];

    return (
      <div>
        <h1 className="text-3xl font-bold mt-5">WEBSITE RECHART</h1>

        <div className="grap">
            <LineChart width={600} height={400} data={data} className="ml-80">
              <Line type="monotone" dataKey="total" stroke="#82ca9d" />
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#ccc" />
              <Tooltip></Tooltip>
            </LineChart>
        </div>
      </div>
    );
};

export default Statistic;