import React from 'react';
import {Line, Radar} from 'react-chartjs-2'
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
 /* above function uses cors library to allow the above url to be connected to where it would otherwise be blocked */      
 /* above function makes an api call to me api for the data for th profile */   
 
    render(){
        var profiles = this.state.profilelist; /*set the profilelist to a var */
        console.log('profile:', profiles)

        
        return(
        <div>
            {this.state.profilelist.map(function(profile, index){
                return(
                    <div key={index}>
                    <h1>{ profile.name } </h1>
                    <div>
                        <Radar
                            height = {200}
                            width = {200}
                            options={{
                                maintainAspectRatio:false
                            }}
                    
                        /> 
                    </div>
                    <div>

                    </div>
                    <div>
                        <Line
                            height = {200}
                            width={600}
                            options={{
                                maintainAspectRatio:false
                            }}
                            data={{
                                labels: [''], 
                                datasets: [{
                                   
                                }]
                            }}
                        />
                        
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