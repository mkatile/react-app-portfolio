import Todo from './assets/images/task-board.png';
import CommandLine from './assets/images/command-line.png';
import WeatherDashboard from './assets/images/weather-dashboard.png';

const projectData = [
    {
        id: 1,
        name: "Command Line",
        image: CommandLine,
        github: "https://github.com/mkatile/Command-Line-application.git",
        deploy: "https://drive.google.com/file/d/1h1wOyGU6ZRN5dptjbr0e701EVpPECsqb/view?usp=sharingLinks to an external site."
    },
    {
        id: 2,
        name: "Task Board",
        image: Todo,
        github: "https://github.com/mkatile/task-board-Third-party-API.git",
        deploy: "https://task-board-1-svxp.onrender.com/"
    },
    {
        id: 3,
        name: "Weather Dashboard",
        image: WeatherDashboard,
        github: "https://github.com/mkatile/Weather-Dashboard.git",
        deploy: "http://127.0.0.1:3002/assets/index.html"
    }
];

export default projectData;
