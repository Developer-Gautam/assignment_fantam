import React, { useState } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import styled from "styled-components";

const ChartContainer = styled.div`
  margin: 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px;
  padding: 16px;
  background-color: #ffffff;
`;

const ButtonGroup = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  margin: 0 8px;
  border: none;
  border-radius: 30px;
  background-color: ${(props) => (props.isSelected ? "#808080" : "#ffffff")};
  color: ${(props) => (props.isSelected ? "#ffffff" : "#808080")};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#808080" : "#80808083")};
    color: #ffffff;
  }
`;

const dataByDay = [
  { name: "Day 1", value: 10 },
  { name: "Day 2", value: 20 },
  { name: "Day 3", value: 30 },
  { name: "Day 4", value: 15 },
  { name: "Day 5", value: 25 },
  { name: "Day 6", value: 35 },
  { name: "Day 7", value: 40 },
  // Add more day data here
];

const dataByWeek = [
  { name: "Week 1", value: 50 },
  { name: "Week 2", value: 60 },
  { name: "Week 3", value: 55 },
  { name: "Week 4", value: 70 },
  { name: "Week 5", value: 65 },
  { name: "Week 6", value: 80 },
  { name: "Week 7", value: 75 },
  // Add more week data here
];

const dataByMonth = [
  { name: "January", value: 200 },
  { name: "February", value: 180 },
  { name: "March", value: 220 },
  { name: "April", value: 250 },
  { name: "May", value: 230 },
  { name: "June", value: 270 },
  { name: "July", value: 240 },
  // Add more month data here
];

const dataByYear = [
  { name: "2022", value: 800 },
  { name: "2023", value: 1000 },
  { name: "2024", value: 1200 },
  { name: "2025", value: 900 },
  { name: "2026", value: 1500 },
  { name: "2027", value: 1300 },
  { name: "2028", value: 1800 },
  // Add more year data here
];


const Graph = () => {
  const [data, setData] = useState(dataByDay);
  const [selectedButton, setSelectedButton] = useState("Week");

  const handleButtonClick = (buttonData, buttonName) => {
    setData(buttonData);
    setSelectedButton(buttonName);
  };
  return (
    <div>
      <ButtonGroup>
        <Button onClick={() => handleButtonClick(dataByDay, "Day")} isSelected={selectedButton === "Day"}>
          Day
        </Button>
        <Button onClick={() => handleButtonClick(dataByWeek, "Week")} isSelected={selectedButton === "Week"}>
          Week
        </Button>
        <Button onClick={() => handleButtonClick(dataByMonth, "Month")} isSelected={selectedButton === "Month"}>
          Month
        </Button>
        <Button onClick={() => handleButtonClick(dataByYear, "Year")} isSelected={selectedButton === "Year"}>
          Year
        </Button>
      </ButtonGroup>
      <ChartContainer>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={data}>
            <Line type="bump" dataKey="value" stroke="#ffc400" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>

  );
};

export default Graph;
