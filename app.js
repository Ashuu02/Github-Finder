const github = new Github;
const ui = new UI;

//add an event listener
document.getElementById('searchUser').addEventListener('keyup', (e)=>{
    const userText = e.target.value;
    
    if(userText !=''){
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    //show alert
                    ui.showAlert('User not found' , 'alert alert-danger');

                 }else {
                    //clear profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    }else{
        // clear profile
        ui.clearProfile();
    }
});

