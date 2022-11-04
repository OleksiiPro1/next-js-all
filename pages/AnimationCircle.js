import React, { useEffect, useState } from 'react';
import { Cell, Pie, PieChart, Sector } from 'recharts';

const data = [{ name: 'Group A', value: 100 }];

export default function MenuCircleProgress(props) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      {domLoaded && (
        <PieChart width={100} height={100}>
          <text x={45} y={50} dy={8} textAnchor="middle">
            {props.uploadNumbers}
          </text>
          <Pie
            data={data}
            cx={40}
            cy={50}
            startAngle={props.startAngle}
            endAngle={props.endAngle}
            // startAngle={-180}
            // endAngle={180}
            innerRadius={30}
            outerRadius={40}
            // fill="#FFBB28"
            // paddingAngle={5}
            fill={props.fill}
            dataKey="value"
          >
            {/* {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={props.fill} />
        ))} */}
          </Pie>
        </PieChart>
      )}
    </>
  );
}
