import { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import faker from 'faker';
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
   const options = {
    responsive: true,
    aspectRatio: 1,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['10:20', '10:30', '10:40', '10:50', '11:00', '11:10'];
    var dataTemp = {
        label: 'Температура',
        data: labels.map(() => faker.datatype.number({ min: 15, max: 30 })),
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#ffffff",
        borderColor: "#ed0f51",
        borderCapStyle: "round",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#ed0f51",
        pointBackgroundColor: "#ffffff",
        pointBorderWidth: 2,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "#ed0f51",
        pointHoverBorderColor: "#ed0f51",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      }
    var dataLight = {
        label: 'Освещенность',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#ffffff",
        borderColor: "rgb(53, 162, 235)",
        borderCapStyle: "round",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(53, 162, 235)",
        pointBackgroundColor: "#ffffff",
        pointBorderWidth: 2,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "rgb(53, 162, 235)",
        pointHoverBorderColor: "rgb(53, 162, 235)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
    }

    var defDataset = [dataTemp, dataLight]

    var data = {
    labels,
    datasets: [
        dataTemp,
        dataLight,
    ],
  };


export default function Graphics({props}){
    const dispatch = useDispatch()

    const [sensorsGraphSt, setSensorsGraphSt] = useState(
        {
            temp: false,
            light: false,
        });
   
        const handleChangeState = (sensor) => {
            setSensorsGraphSt(
                {...sensorsGraphSt,
                 [sensor]: !sensorsGraphSt[`${sensor}`]}
            )
            var getGraphsDs = () =>
            {
                if (sensorsGraphSt.temp) return defDataset
                else return [defDataset[1]]
            }
            console.log(getGraphsDs())
            data = {
                ...data,
                datasets: getGraphsDs()
            }
        }
        
    
    function handleSensorsGraphSt(sensor)
    {
        setSensorsGraphSt()
    }

    const fetchGraphData = (room) => {
        switch (room) {
            case 'Мансарда':
                alert("dds")
                break;
            case 'Кухня':
                
                break;
            case 'Спальня':
                
                break;
            case 'Гостинная':
                
                break;
            case 'Санузел':
                
                break;
            default:
                break;
        }
    }
    useEffect(
        () => {
            fetchGraphData(props.selectedRoom)
        }
    );

    return(
        <Container fluid style={{maxWidth:'80vh'}}>
        <Row className="justify-content-between text-center">
            <Col>
            <Badge role="button" onClick={() => handleChangeState('temp')} pill bg={sensorsGraphSt.temp ? "primary": "secondary"}>
            Температура
            </Badge>
            </Col>
            <Col>
            <Badge onClick={()=>{alert(sensorsGraphSt.temp)}} pill bg="secondary">
            Освещенность
            </Badge>
            </Col>
            <Col>
            <Badge pill bg="secondary">
            Secondary
            </Badge>
            </Col>
            <Col>
            <Badge pill bg="secondary">
            Secondary
            </Badge>
            </Col>
        </Row>
        <Row className="justify-content-md-center text-center" style={{backgroundColor: 'black'}}>
            <Col >
            <Card>
            <Line width={null} height={null} options={options} data={data} />
            </Card>
            </Col>
        </Row>
        </Container>
    );
}