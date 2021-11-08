var app = new Vue({
    el: '#app',
    data: {
      Q1:'',
      Q2:'',
      Q3:'',
      Q4:'',
      Q5:'',
      Q6:'',
    },
    methods: {
      ans(){
          document.getElementById('alert').style.display = "block";
          if(this.Q1 == "Yes" && this.Q2 == "Yes" && this.Q3 == "Yes" && this.Q4 == "Yes" && this.Q5 == "Yes" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "Network Administrator - Support Specialist - Software Lab"}
          else if(this.Q1 == "Yes" && this.Q2 == "Yes" && this.Q3 == "Yes" && this.Q4 == "Yes" && this.Q5 == "Yes" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "Database Administrator - Software Lab"}
          else if(this.Q1 == "Yes" && this.Q2 == "Yes" && this.Q3 == "Yes" && this.Q4 == "Yes" && this.Q5 == "NO" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "Support Specialist - Database Administrator"}
          else if(this.Q1 == "Yes" && this.Q2 == "Yes" && this.Q3 == "Yes" && this.Q4 == "Yes" && this.Q5 == "NO" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "Support Specialist - Database Administrator"}
          else if(this.Q1 == "Yes" && this.Q2 == "Yes" && this.Q3 == "Yes" && this.Q4 == "NO" && this.Q5 == "Yes" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "lab supervisor - technical teacher in Network or IT"}
          else if(this.Q1 == "Yes" && this.Q2 == "Yes" && this.Q3 == "Yes" && this.Q4 == "NO" && this.Q5 == "Yes" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "lab supervisor - technical teacher in IT"}
          else if(this.Q1 == "Yes" && this.Q2 == "Yes" && this.Q3 == "Yes" && this.Q4 == "NO" && this.Q5 == "NO" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "lab supervisor - technical teacher in IT"}
          else if(this.Q1 == "Yes" && this.Q2 == "Yes" && this.Q3 == "Yes" && this.Q4 == "NO" && this.Q5 == "NO" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "lab supervisor - technical teacher in IT"}
          else if(this.Q1 == "Yes" && this.Q2 == "Yes" && this.Q3 == "NO" && this.Q4 == "Yes" && this.Q5 == "Yes" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "Network Administrator - Database Administrator - Website Administrator  - Software Lab"}
          else if(this.Q1 == "Yes" && this.Q2 == "Yes" && this.Q3 == "NO" && this.Q4 == "Yes" && this.Q5 == "Yes" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "Network Administrator - Database Administrator - Website Administrator  - Software Lab"}
          else if(this.Q1 == "Yes" && this.Q2 == "Yes" && this.Q3 == "NO" && this.Q4 == "Yes" && this.Q5 == "NO" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "Database Administrator - Website Administrator"}
          else if(this.Q1 == "Yes" && this.Q2 == "Yes" && this.Q3 == "NO" && this.Q4 == "Yes" && this.Q5 == "NO" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "Database Administrator - Website Administrator"}
          else if(this.Q1 == "Yes" && this.Q2 == "Yes" && this.Q3 == "NO" && this.Q4 == "NO" && this.Q5 == "Yes" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "lab supervisor - technical teacher in Software"}
          else if(this.Q1 == "Yes" && this.Q2 == "Yes" && this.Q3 == "NO" && this.Q4 == "NO" && this.Q5 == "Yes" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "lab supervisor - technical teacher in Software"}
          else if(this.Q1 == "Yes" && this.Q2 == "Yes" && this.Q3 == "NO" && this.Q4 == "NO" && this.Q5 == "NO" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "lab supervisor - technical teacher in Software"}
          else if(this.Q1 == "Yes" && this.Q2 == "Yes" && this.Q3 == "NO" && this.Q4 == "NO" && this.Q5 == "NO" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "lab supervisor - technical teacher in Software"}
          else if(this.Q1 == "Yes" && this.Q2 == "NO" && this.Q3 == "Yes" && this.Q4 == "Yes" && this.Q5 == "Yes" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "Software Engineering - Arduino - Internet of Things and Robotics"}
          else if(this.Q1 == "Yes" && this.Q2 == "NO" && this.Q3 == "Yes" && this.Q4 == "Yes" && this.Q5 == "Yes" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "Software Engineering"}
          else if(this.Q1 == "Yes" && this.Q2 == "NO" && this.Q3 == "Yes" && this.Q4 == "Yes" && this.Q5 == "NO" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "Software Engineering - Arduino - Internet of Things "}
          else if(this.Q1 == "Yes" && this.Q2 == "NO" && this.Q3 == "Yes" && this.Q4 == "Yes" && this.Q5 == "NO" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "technical teacher in Arduino"}
          else if(this.Q1 == "Yes" && this.Q2 == "NO" && this.Q3 == "Yes" && this.Q4 == "NO" && this.Q5 == "Yes" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "Systems Analyst"}
          else if(this.Q1 == "Yes" && this.Q2 == "NO" && this.Q3 == "Yes" && this.Q4 == "NO" && this.Q5 == "Yes" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "Systems Analyst"}
          else if(this.Q1 == "Yes" && this.Q2 == "NO" && this.Q3 == "Yes" && this.Q4 == "NO" && this.Q5 == "NO" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "Systems Analyst"}
          else if(this.Q1 == "Yes" && this.Q2 == "NO" && this.Q3 == "Yes" && this.Q4 == "NO" && this.Q5 == "NO" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "Systems Analyst"}
          else if(this.Q1 == "Yes" && this.Q2 == "NO" && this.Q3 == "NO" && this.Q4 == "Yes" && this.Q5 == "Yes" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "Information security specialist - programmer - data scientist - artificial intelligence"}
          else if(this.Q1 == "Yes" && this.Q2 == "NO" && this.Q3 == "NO" && this.Q4 == "Yes" && this.Q5 == "Yes" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "Data scientist"}
          else if(this.Q1 == "Yes" && this.Q2 == "NO" && this.Q3 == "NO" && this.Q4 == "Yes" && this.Q5 == "NO" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "Designer - UI/UX - Video montage"}
          else if(this.Q1 == "Yes" && this.Q2 == "NO" && this.Q3 == "NO" && this.Q4 == "Yes" && this.Q5 == "NO" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "Front-End "}
          else if(this.Q1 == "Yes" && this.Q2 == "NO" && this.Q3 == "NO" && this.Q4 == "NO" && this.Q5 == "Yes" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "data scientist - Systems Analyst - Designer - UI/UX - Video montage"}
          else if(this.Q1 == "Yes" && this.Q2 == "NO" && this.Q3 == "NO" && this.Q4 == "NO" && this.Q5 == "Yes" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "Front-End"}
          else if(this.Q1 == "Yes" && this.Q2 == "NO" && this.Q3 == "NO" && this.Q4 == "NO" && this.Q5 == "NO" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "Designer - UI/UX - Video montage - Front-End"}
          else if(this.Q1 == "Yes" && this.Q2 == "NO" && this.Q3 == "NO" && this.Q4 == "NO" && this.Q5 == "NO" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "Front-End"}
          //NO
          else if(this.Q1 == "NO" && this.Q2 == "Yes" && this.Q3 == "Yes" && this.Q4 == "Yes" && this.Q5 == "Yes" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "Support Specialist - Database Administrator"}
          else if(this.Q1 == "NO" && this.Q2 == "Yes" && this.Q3 == "Yes" && this.Q4 == "Yes" && this.Q5 == "Yes" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "Support Specialist - Database Administrator"}
          else if(this.Q1 == "NO" && this.Q2 == "Yes" && this.Q3 == "Yes" && this.Q4 == "Yes" && this.Q5 == "NO" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "Support Specialist - Database Administrator"}
          else if(this.Q1 == "NO" && this.Q2 == "Yes" && this.Q3 == "Yes" && this.Q4 == "Yes" && this.Q5 == "NO" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "Support Specialist - Database Administrator"}
          else if(this.Q1 == "NO" && this.Q2 == "Yes" && this.Q3 == "Yes" && this.Q4 == "NO" && this.Q5 == "Yes" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "technical teacher in Support Specialist or Database Administrator"}
          else if(this.Q1 == "NO" && this.Q2 == "Yes" && this.Q3 == "Yes" && this.Q4 == "NO" && this.Q5 == "Yes" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "technical teacher in Support Specialist or Database Administrator"}
          else if(this.Q1 == "NO" && this.Q2 == "Yes" && this.Q3 == "Yes" && this.Q4 == "NO" && this.Q5 == "NO" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "technical teacher in Support Specialist or Database Administrator"}
          else if(this.Q1 == "NO" && this.Q2 == "Yes" && this.Q3 == "Yes" && this.Q4 == "NO" && this.Q5 == "NO" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "technical teacher in Support Specialist or Database Administrator"}
          else if(this.Q1 == "NO" && this.Q2 == "Yes" && this.Q3 == "NO" && this.Q4 == "Yes" && this.Q5 == "Yes" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "Website Administrator - data management"}
          else if(this.Q1 == "NO" && this.Q2 == "Yes" && this.Q3 == "NO" && this.Q4 == "Yes" && this.Q5 == "Yes" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "Website Administrator - data management"}
          else if(this.Q1 == "NO" && this.Q2 == "Yes" && this.Q3 == "NO" && this.Q4 == "Yes" && this.Q5 == "NO" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "Website Administrator - data management"}
          else if(this.Q1 == "NO" && this.Q2 == "Yes" && this.Q3 == "NO" && this.Q4 == "Yes" && this.Q5 == "NO" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "Website Administrator - data management"}
          else if(this.Q1 == "NO" && this.Q2 == "Yes" && this.Q3 == "NO" && this.Q4 == "NO" && this.Q5 == "Yes" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "technical teacher in Website Administrator - data management"}
          else if(this.Q1 == "NO" && this.Q2 == "Yes" && this.Q3 == "NO" && this.Q4 == "NO" && this.Q5 == "Yes" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "technical teacher in Website Administrator - data management"}
          else if(this.Q1 == "NO" && this.Q2 == "Yes" && this.Q3 == "NO" && this.Q4 == "NO" && this.Q5 == "NO" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "technical teacher in Website Administrator - data management"}
          else if(this.Q1 == "NO" && this.Q2 == "Yes" && this.Q3 == "NO" && this.Q4 == "NO" && this.Q5 == "NO" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "technical teacher in Website Administrator - data management"}
          else if(this.Q1 == "NO" && this.Q2 == "NO" && this.Q3 == "Yes" && this.Q4 == "Yes" && this.Q5 == "Yes" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "Web Devoloper"}
          else if(this.Q1 == "NO" && this.Q2 == "NO" && this.Q3 == "Yes" && this.Q4 == "Yes" && this.Q5 == "Yes" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "Software Engineering - Arduino - Internet of Things "}
          else if(this.Q1 == "NO" && this.Q2 == "NO" && this.Q3 == "Yes" && this.Q4 == "Yes" && this.Q5 == "NO" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "Software Engineering "}
          else if(this.Q1 == "NO" && this.Q2 == "NO" && this.Q3 == "Yes" && this.Q4 == "Yes" && this.Q5 == "NO" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "Software Engineering"}
          else if(this.Q1 == "NO" && this.Q2 == "NO" && this.Q3 == "Yes" && this.Q4 == "NO" && this.Q5 == "Yes" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "Software Engineering"}
          else if(this.Q1 == "NO" && this.Q2 == "NO" && this.Q3 == "Yes" && this.Q4 == "NO" && this.Q5 == "Yes" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "technical teacher in Software Engineering"}
          else if(this.Q1 == "NO" && this.Q2 == "NO" && this.Q3 == "Yes" && this.Q4 == "NO" && this.Q5 == "NO" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "technical teacher in Software Engineering"}
          else if(this.Q1 == "NO" && this.Q2 == "NO" && this.Q3 == "Yes" && this.Q4 == "NO" && this.Q5 == "NO" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "technical teacher in Software Engineering"}
          else if(this.Q1 == "NO" && this.Q2 == "NO" && this.Q3 == "NO" && this.Q4 == "Yes" && this.Q5 == "Yes" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "technical teacher in Software Engineering"}
          else if(this.Q1 == "NO" && this.Q2 == "NO" && this.Q3 == "NO" && this.Q4 == "Yes" && this.Q5 == "Yes" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "Website programmer"}
          else if(this.Q1 == "NO" && this.Q2 == "NO" && this.Q3 == "NO" && this.Q4 == "Yes" && this.Q5 == "NO" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "Website programmer"}
          else if(this.Q1 == "NO" && this.Q2 == "NO" && this.Q3 == "NO" && this.Q4 == "Yes" && this.Q5 == "NO" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "Website programmer"}
          else if(this.Q1 == "NO" && this.Q2 == "NO" && this.Q3 == "NO" && this.Q4 == "NO" && this.Q5 == "Yes" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "game designer"}
          else if(this.Q1 == "NO" && this.Q2 == "NO" && this.Q3 == "NO" && this.Q4 == "NO" && this.Q5 == "Yes" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "game designer"}
          else if(this.Q1 == "NO" && this.Q2 == "NO" && this.Q3 == "NO" && this.Q4 == "NO" && this.Q5 == "NO" && this.Q6 == "Yes"){document.getElementById('theResult').innerHTML = "Designer - UI/UX"}
          else if(this.Q1 == "NO" && this.Q2 == "NO" && this.Q3 == "NO" && this.Q4 == "NO" && this.Q5 == "NO" && this.Q6 == "NO"){document.getElementById('theResult').innerHTML = "Try to find your passion elsewhere"}
      }
    },
});
  