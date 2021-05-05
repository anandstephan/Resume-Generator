const inputfields = document.querySelector(".input-fields")
const output = document.querySelector(".output")

let inputShow = true;

let workExpdetails;

ClassicEditor
    .create( inputfields['workexp'],{
        toolbar: [ 'heading', '|', 'bold', 'italic', 'numberedList', 'blockQuote' ],
    })
    .then( editor => {
        workExpdetails = editor
    } )
    .catch( error => {
        console.error( error );
    } );


function toggle(){
    if(inputShow){
        inputfields.style.display="none"
        inputShow =false;
        output.innerHTML = `
        <div class="hero">
        <h1>${inputfields['name'].value}</h1>
        <h3>${inputfields['title'].value}</h3>
        </div>
        <div class="main">
        <div>
        <h2>OBJECTIVE</h2>
        <p>${inputfields["objective"].value}</p>
        <h2>SKILLS</h2>
        <p>${inputfields["skills"].value}</p>
        <h2>ACHIEVEMENTS</h2>
        <p>${inputfields["achievements"].value}</p>   
        <h2>CONTACT</h2>
        <p>${inputfields["contact"].value}</p>
        </div>
        <h2>WORK EXPERIENCE </h2>
        <p>${inputfields["workexp"].value}</p>
        <h2>ACADEMIC DETAILS</h2>
        <p>${inputfields["academics"].value}</p>
        <h2>PROJECTS</h2>
        <p>${inputfields["projects"].value}</p>
        </div>
        `

    }else{
        inputfields.style.display="block"
        inputShow=true;
        output.innerHTML = ``
    }
}