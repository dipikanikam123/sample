const API_ID='b1b72227'

const API_KEY='33fc678b3ba4d5d7929b51b738ad6935'

const SEARCH_OPTIONS=["Python","java","web","ml","fullstack","web3","UI-Ux"];
  
let items_container=document.querySelector(".serch-item")
let search_item=""
SEARCH_OPTIONS.forEach((opt,index)=>{
    search_item +=`<span class="search-items">${opt}</span>`
})

items_container.innerHTML = search_item


const COMPANY_NAME=[
    {
      logo: '<i class="ri-instagram-line"></i>',
      name :"instragram"
    },
    {
       logo:`<i class='ri-whatsapp-line'></i>`,
        name:"whatsapp"
    },
    {
        logo:`<i class="ri-facebook-circle-line"></i>`,
        name:"facebook"
    },
    {
        logo:`<i class="ri-twitter-line"></i>`,
        name:"twitter"
    },
    {
        logo:`<i class="ri-chat-1-line"></i>`,
        name:"message"
    }
];

let nameContainer = document.querySelector(".company")
let companyName=""

COMPANY_NAME.forEach((opt,index)=>{
    companyName +=`<div >${opt?.logo} ${opt?.name}</div >`
})
nameContainer.innerHTML= companyName



//second page
const card_name=[{
    logo:`<i class="ri-id-card-line"></i>`,
    name:"web development",
    available:"100 jobs"
},
{
  logo:`<i class="ri-java-line"></i>`,
  name:"java",
  available:"100 job"
},
{
    logo:`<i class="ri-html5-line"></i>`,
    name:"html",
    available:"100 jobs"
},
{
    logo:`<i class="ri-javascript-line"></i>`,
    name:"javascript",
    available:"100 jobs"
},
{
    logo:`<i class="ri-css3-line"></i>`,
    name:"css",
    available:"100 jobs"
},
{
    logo:`<i class="ri-bootstrap-line"></i>`,
    name:"bootstarp",
    available:"100 jobs"
}
];
let Container =document.querySelector(".card1")
let card=""

 card_name.forEach((opt,index)=>{

  card += `<div class="categories-item-card">
                <div class="categories-item-card-logo">
                    ${opt?.logo}

                </div>
                <div  >
                    <span class="cat">${opt?.name}</span>
                </div>

                <div>
                    <p>${opt?.available}</p>
                </div>

            </div>`
 })
 Container.innerHTML= card 
   

//  third

let chart = [
 {
    name:"Finance",
    info:"Financial Analyst",
    title:"San Diego, CA",
    date:"June 11, 2002",
    author:"Grammar",
    icon:'<i class="ri-drag-move-2-line"></i>'
 },
 {
    name:"Finance",
    info:"Financial Analyst",
    title:"San Diego, CA",
    date:"June 11, 2002",
    author:"Grammar",
    icon:'<i class="ri-drag-move-2-line"></i>'
 },
 {
    name:"Finance",
    info:"Financial Analyst",
    title:"San Diego, CA",
    date:"June 11, 2002",
    author:"Grammar",
    icon:'<i class="ri-drag-move-2-line"></i>'
 },
 {
    name:"Finance",
    info:"Financial Analyst",
    title:"San Diego, CA",
    date:"June 11, 2002",
    author:"Grammar",
    icon:'<i class="ri-drag-move-2-line"></i>'
 },
 {
    name:"Finance",
    info:"Financial Analyst",
    title:"San Diego, CA",
    date:"June 11, 2002",
    author:"Grammar",
    icon:'<i class="ri-drag-move-2-line"></i>'
 },
  {
    name:"Finance",
    info:"Financial Analyst",
    title:"San Diego, CA",
    date:"June 11, 2002",
    author:"Grammar",
    icon:'<i class="ri-drag-move-2-line"></i>'
 },
  {
    name:"Finance",
    info:"Financial Analyst",
    title:"San Diego, CA",
    date:"June 11, 2002",
    author:"Grammar",
    icon:'<i class="ri-drag-move-2-line"></i>'
 },
  {
    name:"Finance",
    info:"Financial Analyst",
    title:"San Diego, CA",
    date:"June 11, 2002",
    author:"Grammar",
    icon:'<i class="ri-drag-move-2-line"></i>'
 },
  {
    name:"Finance",
    info:"Financial Analyst",
    title:"San Diego, CA",
    date:"June 11, 2002",
    author:"Grammar",
    icon:'<i class="ri-drag-move-2-line"></i>'
 },
  {
    name:"Finance",
    info:"Financial Analyst",
    title:"San Diego, CA",
    date:"June 11, 2002",
    author:"Grammar",
    icon:'<i class="ri-drag-move-2-line"></i>'
 }
];

let conta = document.querySelector(".cards-container");
let con = "";

chart.forEach(opt => { 
    con += `
      <div class="sub-div">
        <div class="part-top">
            <h3>${opt.name}</h3>
            <h1>${opt.info}</h1>
            <h5>${opt.title}</h5>
        </div>
        <div class="part-bottom">
            <p>${opt.date}</p>
            <h4>${opt.author}</h4>
            <div class="child-div">${opt.icon}</div>
        </div>
      </div>`;
});

conta.innerHTML = con;



//select label
 let country=["india","japan","america","mumbai"]

 let contain=document.querySelector("#select-label")
 let contry=""

 country.forEach((opt)=>
    {
      
    contry+=`<option >${opt}</option> `

 })
 contain.innerHTML=contry

 //handle search
let input=document.querySelector("#userinput")
 
let select=document.querySelector("#select-label")

let button=document.querySelector("#btn")


//loader

let loader = document.querySelector(".loader")
let loadertext = document.querySelector(".loading-index")



 const loadjobs= async(jobrole,joblocation)=>{
    try{
        let response = await fetch(`https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${API_ID}&app_key=${API_KEY}&results_per_page=20&what=${jobrole}&where=${joblocation}&content-type=application/json`)
    let data =await response.json()
    //console.log(data)
    //load cancel
    if(data?.results?.length==0){
        loadertext.innerText=`no jobs found for ${jobrole?.replace("%20","")} in ${joblocation}..`

        setTimeout(()=>{
            loader.style.display="none"
        },3000);
    }else{
        loadertext.innerText = `yahhh,${data?.count} jobs found in india${joblocation}`
        localStorage.setItem("JOBS",JSON.stringify(data))
        setTimeout(()=>{
            loader.style.display="none"
            window.location.href="job.html"
        },3000);
        // console.log(data)
    }
    }catch(error){
         console.log(error)
    }
 }



button.addEventListener('click',()=>{

    let jobrole = userinput.value.replace(" ","%20")
    let joblocation = select.value || india
     if(!jobrole){return}
     loadjobs(jobrole,joblocation)
     loader.style.display="flex"
     loadertext.innerText = `loading jobbs for ${userinput?.value} in ${joblocation}..`
 })
