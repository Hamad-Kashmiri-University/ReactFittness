import React from 'react';

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
                
                editing:false,
                }
                this.fetchProfiles = this.fetchProfiles.bind(this)
            };
    
    componentWillMount(){
        this.fetchProfiles();

    }

    fetchProfiles(){
        console.log('fetching...')
        fetch('http://localhost:8000/api/list')
        .then(response => response.json())
        .then(data =>
            this.setState({
                profilelist:data
            })         
            )
    }
    
    render(){
        console.log('hi:', this.state.profilelist)
        var profiles = this.state.profilelist;
        console.log('bye:', profiles)

        
        return(
        <div>
            {this.state.profilelist.map(function(profile, index){
                return(
                    <div key={index}>
                        <span>{ profile.name } </span>
                        <span>Heart rate: { profile.maxHR } </span>
                        <span>steps: { profile.stepcount } </span>
                        <span>weight: { profile.weight } </span>
                    </div>

                )
            })}
        </div>
        )
    }
};

export default Profile