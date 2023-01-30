import { ResponsiveLine } from '@nivo/line';
import styled from 'styled-components';

const Chart = ({ carChartData }) => (
  <Wrapper>
    <ResponsiveLine
      data={carChartData}
      margin={{ top: 10, right: 110, bottom: 50, left: 60 }}
      xScale={{
        type: 'time',
        format: '%Y/%m/%d',
        useUTC: false,
        precision: 'day',
      }}
      xFormat="time:%Y/%m/%d"
      yScale={{
        type: 'linear',
        min: 0,
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      axisTop={null}
      axisRight={{
        orient: 'left',
      }}
      axisBottom={null}
      axisLeft={null}
      enableGridX={false}
      enableGridY={false}
      enablePoints={false}
      pointSize={1}
      pointColor={{ from: 'color', modifiers: [] }}
      pointBorderWidth={0}
      pointBorderColor={{ from: 'serieColor', modifiers: [] }}
      pointLabelYOffset={-16}
      areaBaselineValue={20}
      enableCrosshair={false}
      crosshairType="x"
      useMesh={true}
      legends={[]}
      motionConfig="default"
      tooltip={item => {
        return (
          <Tool>
            <ToolTip>{item.point.data.xFormatted}</ToolTip>
            <ToolTip>
              {item.point.data.yFormatted.toLocaleString('ko-KR')}원
            </ToolTip>
          </Tool>
        );
      }}
    />
  </Wrapper>
);

export default Chart;

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
`;
const Tool = styled.div`
  background-color: black;
  opacity: 0.75;
  text-align: center;
  border-radius: 10px;
  letter-spacing: -1.5;
  margin: 0;
  padding: 0 5px;
`;

const ToolTip = styled.b`
  display: block;
  color: white;
`;
