import React from 'react';
import {Line, Radar} from 'react-chartjs-2'
import '../css/profile.css'
import bargraph from  '../Assets/bargraph.png'
import areagraph from '../Assets/areagraph.svg'
// const Barchart = () => {
//     return <div>
//         <Bar
//             height = {200}
//             width={600}
//             data={{
//                 labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//                 data: [12, 19, 3, 5, 2, 3],
//             }}
//         />
//     </div>
// }

class Profile extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                profilelist:[],
                activeItem:{
                    name:'',
                    maxHR:null,
                    stepcount:null,
                    weight:null,
                },
/* constructor intial values for our profile componentstate using props(properties)   */           
                editing:false,
                }
                this.fetchProfiles = this.fetchProfiles.bind(this)
/*above line gives access to this method for fetchprofiles*/
            };
    
    componentWillMount(){
        this.fetchProfiles();
/*calls the function that makesthe api call*/
    }

    fetchProfiles(){
        console.log('fetching...')
        fetch('http://localhost:8000/api/list')
        .then(response => response.json())
        .then(data =>
            this.setState({ /*sets the state of the profile list to the data from the api*/
                profilelist:data
            })         
            )
    }
 /* above function uses cors library to allow the above url to  connect to the api where it would otherwise be blocked */      
 /* above function makes an api call to me api for the data for the graph data */   
 
    render(){
        var profiles = this.state.profilelist; /*set the profilelist to a var */
        console.log('profile:', profiles)

        
        return(       
        <div>
            {this.state.profilelist.map(function(profile, index){
                {/* this line maps each record we receive from the api to a var called profile which we use to access the fields demonstrated later in line 69 and 200 */}
                {/* loop through our profile data */}
                return(
                    <div key={index}>
                    {/* this line tells us to look at each index or pk from the list, but we only have 1 in this case */}
                    <h1 className="title">Welcome to your profile: {profile.name} </h1>
                    <div className="graphcontainer">
                        
                        <div className= "smallbg"><img src={areagraph} alt="not found"></img></div>
                        <div className= "smallbg">
                         {/* react radar chart using chartjs , we set height, width and a load of customisation options for styling, further below in the line graph we use api data to populate the graph */}
                            <Radar
                                height = {400}
                                width = {400}
                                options={{
                                    title: {
                                    display: true,
                                    text: "Track Your Goals",
                                    fontColor: "white",
                                    },
                                    animation: {
                                        easing: "easeInOutQuart"
                                        },
                                    legend: {
                                        labels: {
                                        fontColor: 'rgba(255,255,255,1)'
                                        },
                                    },
                                    maintainAspectRatio:false,
                                    scale: {
                                        ticks: {
                                            beginAtZero: true,
                                            showLabelBackdrop: false,
                                            fontColor: 'white',
                                            // need this to remove labels bg on the chart and make labels white                
                                        },
                                        pointLabels: {
                                            fontColor: 'white' // labels around the edge like arms, back etc
                                        },
                                        gridLines: {
                                            color: 'rgba(255,255,255,0.2)'
                                        },
                                        angleLines: {
                                            color: 'white'
                                        }
                                    }
                                
                                }}
                                data = {{                               
                                    labels: ["Arms", "Back", "Legs","Core","Shoulders", "Cardio"],
                                    datasets: [ {
                                        label: "Progress",
                                        backgroundColor: "rgba(97,219,251,0.3)",
                                        borderColor: "rgba(97,219,251,0.8)",
                                        pointBackgroundColor: "rgba(97,219,251,0.8))",
                                        data: [9.7,8.3,7.6,6.8,6.4,9.3],
                                        },
                                        {
                                        label: "Goals",
                                        backgroundColor: "rgba(144,124,202,0.3)",
                                        borderColor: "rgba(144,124,202,0.8)",
                                        pointBackgroundColor: "rgba(144,124,202,0.8)",
                                        data: [9.5,9.2,9.5,9,8.8,8.7],
                                        notes: ["Arms", "Back", "Legs","Core","Shoulders", "Cardio"]
                                        },
                                    ]
                                }}
                        
                            /> 
                        </div>                      
                    </div>
                    <div className= "smallbg2"><img src = {bargraph} alt="not found"></img></div>
                    <div className="linebg">
                    {/* this is the line graph using the same customisation as the radar graph, much of the layout and formatting is done through the surrounding divs */}
                    {/* check line 200 to see how we call the data from the api */}
                        <div className = "line">
                        <Line 
                            height = {280}
                            width={1400}
                            options= {{
                                title: {
                                    display: true,
                                    text: "Track Your weight",
                                    fontColor: "white",
                                },
                                responsive: false,
                                legend: {
                                    labels: {
                                    fontColor: 'rgba(255,255,255,1)',
                                    display: true,
                                    },
                                },
                                scales: {
                                    xAxes: [{
                                        gridLines: {
                                            color: 'rgba(255,255,255,0.2)',
                                        },
                                        display: true,
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'Month',  
                                            fontColor: "white",  
                                            },
                                        ticks: {
                                            fontColor: "white",
                                        },
                                        
                                        }],
                                    yAxes: [{  
                                        gridLines: {
                                            color: 'rgba(255,255,255,0.2)',
                                        },
                                        display: true,
                                        //type: 'logarithmic',
                                        scaleLabel: {
                                                display: true,
                                                labelString: 'Weight (Kg)',
                                                fontColor: "white"
                                            }, 
                                                ticks: {
                                                    fontColor: "white",
                                                    min: 70,
                                                    max: 100,
                                                    // forces step size to be 5 units
                                                    stepSize: 10,
                                            }
                                    }]
                                },
                                }}     

                            data= {{
                                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
                                datasets: [{
                                    borderWidth: 5,
                                    label: "My Weight",
                                    borderColor: "rgba(144,124,202,0.7)",
                                    fill: false,
                                    data: [
                                        78, 80, 82, 79, 80, 84, 90, 88, 90, 92, 88,
                                        profile.weight,
                                        // as mentioned we used the profile variable to map to a set of data from the list fetched using the api and the above line calls weight which is a field in our table
                                        ],
                                    },
                                    {
                                    borderWidth: 5,
                                    label: "Goal",
                                    borderColor: "rgba(97,219,251,0.7)",
                                    fill: false,
                                    data: [
                                        72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94,
                                        ],
                                    },
                                    {
                                    borderWidth: 5,
                                    label: "Forecasted",
                                    borderColor: "rgba(217,119,25,0.5)",
                                    backgroundColor: "rgba(217,119,25,1)",
                                    fill: false,
                                    data: [
                                        82, 84, 86, 82, 80, 82, 80, 86, 85, 88, 97, 89.5,
                                        ],
                                    },
                                    ]
                                    }}
    
                        />
                        </div>   
                    </div>
                    </div>
/* map function takes the data from the data list we got from the api and loops through it usng pk and then we can show the data  */                 
                )
            })}
        </div>
        )
    }
};
export default Profile;