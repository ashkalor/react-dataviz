import "../styles/BarChart.scss";
import { useRef, useEffect, useState } from "react";
import { select, axisBottom, axisRight, scaleLinear, scaleBand } from "d3";
import * as d3 from "d3";

const BarChart = () => {
  const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75]);
  const svgRef = useRef();
  const width = 600;
  const height = 300;

  useEffect(() => {
    const svg = select(svgRef.current);

    const defs = svg.append("defs");

    const bgGradient = defs
      .append("linearGradient")
      .attr("id", "bg-gradient")
      .attr("gradientTransform", "rotate(90)");
    bgGradient
      .append("stop")
      .attr("stop-color", "#F2C66B")
      .attr("offset", "0%");
    bgGradient
      .append("stop")
      .attr("stop-color", "#D13D73")
      .attr("offset", "100%");

    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, width])
      .padding(0.5);

    const yScale = scaleLinear()
      .domain([0, d3.max(data, (d) => d)])
      .range([height, 0]);

    const xAxis = axisBottom(xScale).ticks(data.length);

    svg
      .select(".barchart__xaxis")
      .style("transform", "translateY(300px)")
      .call(xAxis);

    const yAxis = axisRight(yScale);
    svg
      .select(".barchart__yaxis")
      .style("transform", "translateX(600px)")
      .call(yAxis);

    svg
      .selectAll(".barchart__bar")
      .data(data)
      .join("rect")
      .attr("class", "barchart__bar")

      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => xScale(index))
      .attr("y", -height)
      .attr("width", xScale.bandwidth())
      .transition()
      .attr("fill", "url(#bg-gradient)")
      .attr("height", (value) => height - yScale(value));
  }, [data]);

  const updateHandler = () => {
    setData(
      data.map((value) => {
        if (value >= 150) {
          return 150;
        }
        return value + Math.floor(Math.random() * 10);
      })
    );
  };

  const resetHandler = () => {
    setData([25, 30, 45, 60, 10, 65, 75]);
  };

  return (
    <div className="barchart">
      <div className="barchart__card">
        <div className="barchart__title">Bar Chart</div>

        <svg
          onClick={updateHandler}
          className="barchart__chart"
          width={width}
          height={height}
          ref={svgRef}
        >
          <g className="barchart__xaxis" />
          <g className="barchart__yaxis" />
        </svg>
        <div className="barchart__btnContainer">
          <button onClick={updateHandler} className="barchart__button">
            Update Values
          </button>
          <button onClick={resetHandler} className="barchart__button">
            Reset Values
          </button>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
