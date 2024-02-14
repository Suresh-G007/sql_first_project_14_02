// Vue component registration


Vue.component('user', {
    template: `
    <!doctype html>
<html lang="en">

<head>
    <link rel="icon" type="image/x-icon" href="/img/logo.png">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>User</title>
</head>
<body style="background-color: white; ">
   <!--Sidebar-->
    <div class="main-container d-flex ">
        <div class="sidebar  "  id="side_nav" style="background-color: #2c3e50;position: sticky;">
            <ul class="list-unstyled px-2 ">
                <li> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'"
                >Check Microphone</button>
                </li>
                <li> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'"
                >Check Audio</button>
                </li>
                <li><button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'"
                >Check Internet</button>
                </li>
                <li><button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'"
                >Check Video</button></li>
                <li> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'"
                >Test TTS</button></li>
            </ul>
            

            <ul class="list-unstyled px-2">
                <li class="">
                    <div class="dropdown mt-5 ">
                        <button class="btn btn-secondary dropdown-toggle col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'"
                        type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Select Language
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">English</a></li>
                            <li><a class="dropdown-item" href="#">Hindi</a></li>
                            <li><a class="dropdown-item" href="#">Kannada</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <!-- <div class="content"> -->
        <div class="dashboard-content px-3 pt-4  mx-auto ">
            <!-- <h2 class="fs-5"> Dashboard</h2> -->
            <div class="container mt-3  d-flex justify-content-evenly ">
                <div class="  row gap-2" role="group" aria-label="Basic example">
                    <button type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">View Question</button>
                    <button type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Record Answer</button>
                    <button type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Repeat Question</button>
                    <button type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Countdown Timer</button>
                    <button type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Close/Pass Question</button>
                    <button type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Restart Quiz </button>
                    <button type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Elaborate Question</button>
                    <button type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">View Possible Answer</button>

                </div>
            </div>
            <div class="d-flex mt-5"><a href="#"><img src="static/images/speech.jpg" alt="" class="d-flex"
                        style="width: 38px; height: 50px;"></a>
                <div style="margin-left: -20px;"></div>
                <div class="text-bg-dark p-1 text-center rounded container col-8 ms-auto">
                <h2 style="background-color:#2c3e50; border-radius: 20px; color:white">Question Text</h2>
                </div>
            </div>
            <div class="row align-items-center">
            </div>
            <div class="col">
                <div class="flex form-floating container col-8 mt-4">
                    <h3>Your Answer :</h3>
                    <textarea class="form-control container rounded custom-black border-primary" placeholder="Leave a comment here"
                        id="floatingTextarea"></textarea>
                </div>
            </div>
            <div class="float-right"><button type="button" class="btn float-end btn-dark mt-4 col-2" onmouseover="this.style.backgroundColor='#007bff'" onmouseout="this.style.backgroundColor='#343a40'" style="border-radius: 20px; margin-bottom: 10px">Submit</button>
            </div>
        </div>
    </div>
    <!-- </div> -->
    </div>
</body>
</html>
    `
});





// Vue component registration
Vue.component('summarization', {
    template: `
    
<body style="background-color: white;  ">






<!--Sidebar-->

<div class="main-container d-flex ">
    <div class="sidebar" id="side_nav" style="background-color: #2c3e50;">
        

        <ul class="list-unstyled px-2 ">
            <li> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Upload Audio Files</button>
            </li>
            <li> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Upload Text Files</button>
            </li>
            <li><button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Start Training</button>
            </li>
            <li><button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Retrain</button></li>
            <li> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Min and Max Length</button></li>
            <li> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Add More Content</button></li>
            <li> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Add Question</button></li>
            <li> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Add Possible Answer</button></li>
            <li> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Validate Translation</button></li>

        </ul>
        


    </div>



    
    <!-- <div class="content"> -->




    <div class="dashboard-content px-3 pt-4 mx-auto container-fluid   ">

        <!-- <h2 class="fs-5"> Dashboard</h2> -->
        <div class="container-fluid mt-3  d-flex  ">
            <div class="  row col-12 gap-5" role="group" aria-label="Basic example">
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Ask Question</button>
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Validate Summarization</button>
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Score Summary</button>
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Repeat Summary Generation</button>


            </div>
        </div>
        <div class="d-flex mt-5"><a href=""><img src="/static/images/speech.jpg" alt="" class="d-flex"
                    style="width: 38px; height: 50px;"></a>
            <div style="margin-left: -20px;"></div>
            <div class="text-bg-dark p-1 text-center rounded container-fluid col-8 ms-auto">

            <h2 style="background-color:#2c3e50; border-radius: 20px; color:white">Question Text</h2>
            </div>
        </div>


        <div class="row align-items-center">


        </div>
        <div class="col">
            <div class="flex form-floating container  col-8 mt-4">
                <h3>Your Answer :</h3>
                <textarea class="form-control container rounded custom-black border-primary" label="Type Your Answer Here"
                    id="floatingTextarea"></textarea>



            </div>


        </div>
        <div class="float-right"><button type="button" class="btn float-end btn-dark mt-4 col-2" onmouseover="this.style.backgroundColor='#007bff'" onmouseout="this.style.backgroundColor='#343a40'" style="border-radius: 20px; margin-bottom: 10px">Submit</button>
        </div>


    </div>



</div>
<!-- </div> -->
</div>




</body>
    `
});







// Vue component registration
Vue.component('trainer', {
    template: `
    
<body style="background-color: white;  ">




<!--Sidebar-->

<div class="main-container d-flex">
    <div class="sidebar" id="side_nav" style="background-color: #2c3e50;">
      

        <ul class="list-unstyled px-2 ">
            <li class=""> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Upload Audio Files</button>
            </li>
            <li class=""> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Upload Text Files</button>
            </li>
            <li class=""><button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Start Training</button>
            </li>
            <li class=""><button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Retrain</button></li>
            <li class=""> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Min and Max Length</button></li>
            <li class=""> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Add More Content</button></li>
            <li class=""> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Add Question</button></li>
            <li class=""> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Add Possible Answer</button></li>
            <li class=""> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Validate Translation</button></li>

        </ul>
       



    </div>
    <!-- <div class="content"> -->




    <div class="dashboard-content px-3 pt-4 mx-auto ">
        <!-- <h2 class="fs-5"> Dashboard</h2> -->
        <div class="container mt-3  d-flex justify-content-evenly ">
            <div class="  row gap-2" role="group" aria-label="Basic example">
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Ask Question</button>
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Answer Generation</button>
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Answer Validation </button>
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Score Answer</button>
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Repeat Answer & Score</button>
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Add Keyword Missed</button>
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Validate Translation</button>
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Answer Key</button>

            </div>
        </div>
        <div class="d-flex mt-5"><a href=""><img src="/static/images/speech.jpg" alt="" class="d-flex"
                    style="width: 38px; height: 50px;"></a>
            <div style="margin-left: -20px;"></div>
            <div class="text-bg-dark p-1 text-center rounded container col-8 ms-auto">

            <h2 style="background-color:#2c3e50; border-radius: 20px; color:white">Question Text</h2>
            </div>
        </div>


        <div class="row align-items-center">


        </div>
        <div class="col">
            <div class="d-flex  align-items-center"></div>


            <div class="flex form-floating container col-8 mt-4">
                <h3>Your Answer :</h3>
                <textarea class="form-control container rounded custom-black border-primary" placeholder="Leave a comment here"
                    id="floatingTextarea"></textarea>

            </div>


        </div>
        <div class="float-right"><button type="button" class="btn float-end btn-dark mt-4 col-2" style="margin-bottom:20px;border-radius:20px" onmouseover="this.style.backgroundColor='#007bff'" onmouseout="this.style.backgroundColor='#343a40'" style="border-radius: 20px; margin-bottom: 10px">Submit</button>
        </div>


    </div>

</div>
<!-- </div> -->
</div>

</body>
    `
});





// Vue component registration
Vue.component('qageneration', {
    template: `
    
<body style="background-color: white;  ">




<!--Sidebar-->

<div class="main-container d-flex">
    <div class="sidebar" id="side_nav" style="background-color: #2c3e50;">
        

        <ul class="list-unstyled px-2 ">
            <li class=""> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Upload Audio Files</button>
            </li>
            <li class=""> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Upload Text File</button>
            </li>
            <li class=""><button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Start Training</button>
            </li>
            <li class=""> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Add More Files</button></li>
            <li class=""><button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Retrain</button></li>
            <li class=""> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Select SubTopic</button></li>
            <li class=""> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Min and Max Length -
                    Question</button></li>
            <li class=""> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Min and Max Length -
                    Answer</button></li>
            <li class=""> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Create Scenarios</button></li>

        </ul>
       



    </div>
    <!-- <div class="content"> -->




    <div class="dashboard-content px-3 pt-4 mx-auto ">
        <!-- <h2 class="fs-5"> Dashboard</h2> -->
        <div class="container mt-3  d-flex justify-content-evenly ">
            <div class="  row gap-2" role="group" aria-label="Basic example">
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">View Question</button>
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Record Answer</button>
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Repeat Question</button>
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Countdown Timer</button>
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Close/Pass Question</button>
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Restart Quiz </button>
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Elaborate Question</button>
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">View Possible Answer</button>

            </div>
        </div>
        <div class="d-flex mt-5"><a href=""><img src="/static/images/speech.jpg" alt="" class="d-flex"
                    style="width: 38px; height: 50px;"></a>
            <div style="margin-left: -20px;"></div>
            <!-- <div class="text-bg-dark p-1 text-center rounded container col-8 ms-auto">

                <h2 style="background-color:#2c3e50; border-radius: 20px; color:white">Question Text</h2>
            </div> -->
        </div>


        <div class=" align-items-center">


        </div>
        <div class=" d-flex align-items-center">



            <div class="flex form-floating container col-3 mt-4">
                <h3 >Question :</h3>
                <textarea class="form-control container rounded custom-black border-primary" placeholder="Leave a comment here"
                    id="floatingTextarea"></textarea>

            </div>
            <div class="flex form-floating container col-3 mt-4">
                <h3>Answers :</h3>
                <textarea class="form-control container rounded custom-black border-primary" placeholder="Leave a comment here"
                    id="floatingTextarea"></textarea>

            </div>
            <div class="flex form-floating container col-3 mt-4">
                <h3 style="text-wrap: nowrap;">Correct Answers :</h3>
                <textarea class="form-control container rounded custom-black border-primary" placeholder="Leave a comment here"
                    id="floatingTextarea"></textarea>

            </div>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">

                </label>
            </div>



            <div class="d-flex"></div>




        </div>

        <!--Second Row-->
        <div class=" d-flex align-items-center">



            <div class="flex form-floating container col-3 mt-4">
                <h3>Question :</h3>
                <textarea class="form-control container rounded custom-black border-primary" placeholder="Leave a comment here"
                    id="floatingTextarea"></textarea>

            </div>
            <div class="flex form-floating container col-3 mt-4">
                <h3>Answers :</h3>
                <textarea class="form-control container rounded custom-black border-primary" placeholder="Leave a comment here"
                    id="floatingTextarea"></textarea>

            </div>
            <div class="flex form-floating container col-3 mt-4">
                <h3 style="text-wrap: nowrap;">Correct Answers :</h3>
                <textarea class="form-control container rounded custom-black border-primary" placeholder="Leave a comment here"
                    id="floatingTextarea"></textarea>

            </div>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">

                </label>
            </div>



            <div class="d-flex"></div>




        </div>

        <!--Third Row-->
        <div class=" d-flex align-items-center">



            <div class="flex form-floating container col-3 mt-4">
                <h3>Question :</h3>
                <textarea class="form-control container rounded custom-black border-primary" placeholder="Leave a comment here"
                    id="floatingTextarea"></textarea>

            </div>
            <div class="flex form-floating container col-3 mt-4">
                <h3>Answers :</h3>
                <textarea class="form-control container rounded custom-black border-primary" placeholder="Leave a comment here"
                    id="floatingTextarea"></textarea>

            </div>
            <div class="flex form-floating container col-3 mt-4">
                <h3 style="text-wrap: nowrap;">Correct Answers :</h3>
                <textarea class="form-control container rounded custom-black border-primary" placeholder="Leave a comment here"
                    id="floatingTextarea"></textarea>

            </div>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">

                </label>
            </div>



            <div class="d-flex"></div>

        </div>
        <div class="float-right"><button type="button"
                class="btn float-end btn-dark mt-4 col-2 text-wrap d-sm-block" style="margin-bottom:10px; border-radius:20px" onmouseover="this.style.backgroundColor='#007bff'" onmouseout="this.style.backgroundColor='#343a40'"> Download
                CSV</button>
        </div>




    </div>





</div>
<!-- </div> -->
</div>




</body>
    `
});


// Vue component registration
Vue.component('shortanseval', {
    template: `
    
<body style="background-color: white;  ">



<!--Sidebar-->

<div class="main-container d-flex">
    <div class="sidebar" id="side_nav" style="background-color: #2c3e50;">


        <ul class="list-unstyled px-2 ">
            <li> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Select Audio Files</button>
            </li>
            <li> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Select Answer Files</button>
            </li>
            <li><button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Select Topics</button>
            </li>

            <li> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Min and Max Text Length</button>
            </li>
            <li> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Add Answer Key</button></li>
            <li> <button type="button" class="btn btn-secondary mt-5 col-12" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Validate Translation</button></li>

        </ul>
       



    </div>
    <!-- <div class="content"> -->




    <div class="dashboard-content px-3 pt-4 mx-auto ">
        <!-- <h2 class="fs-5"> Dashboard</h2> -->
        <div class="container mt-3  d-flex justify-content-evenly ">
            <div class="  row gap-2" role="group" aria-label="Basic example">
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Statistics and Gap Batches</button>
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Answer Generation</button>
                <button type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Answer Validation </button>
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Score Answer</button>
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Repeat Answer & Score</button>
                <button type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Add Keyword Missed</button>
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Validate Translation</button>
                <button  type="button" class="col btn btn-secondary" onmouseover="this.style.backgroundColor='#3498DB'" onmouseout="this.style.backgroundColor='#6c757d'">Answer Key</button>

            </div>
        </div>
        <div class="d-flex mt-5"><a href=""><img src="/static/images/speech.jpg" alt="" class="d-flex"
                    style="width: 38px; height: 50px;"></a>
            <div style="margin-left: -20px;"></div>
            <div class="text-bg-dark p-1 text-center rounded container col-8 ms-auto">

                <h2 style="background-color:#2c3e50;; border-radius: 20px; color:white">Question Text</h2>
            </div>
        </div>


        <div class="row align-items-center">


        </div>
        <div class="col d-flex">
            <div class="d-flex  align-items-center"></div>

            <div class=" form-floating container col-4 mt-4">
                <h3>Key :</h3>
                <textarea class="form-control container rounded custom-black border-primary" placeholder="Leave a comment here"
                    id="floatingTextarea"></textarea>

            </div>


            <div class=" form-floating container col-4 mt-4">
                <h3>Your Answer :</h3>
                <textarea class="form-control container rounded custom-black border-primary" placeholder="Leave a comment here"
                    id="floatingTextarea"></textarea>

            </div>


        </div>
        <div class="float-right"><button type="button" class="btn float-end btn-dark mt-4 col-2" onmouseover="this.style.backgroundColor='#007bff'" onmouseout="this.style.backgroundColor='#343a40'" style="border-radius: 20px; margin-bottom: 10px">Submit</button>
        </div>


    </div>

</div>
<!-- </div> -->
</div>



</body>

    `
});




Vue.component('login', {
  template: `
    <div>
      <h2>Login</h2>
      <form @submit.prevent="submitForm">
        <label for="username">Username:</label>
        <input v-model="username" type="text" id="username" required>
        
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" required>

        <button type="submit">Login</button>
      </form>
    </div>
  `,
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      // Send a POST request to your Flask backend with the entered credentials
      const credentials = {
        username: this.username,
        password: this.password,
      };

      // You can use Axios or another library for making HTTP requests
      axios.post('/login', credentials)
        .then(response => {
          // Handle the response from the backend
          console.log(response.data);

          // Assuming successful login, navigate to the index.html page
          this.$router.push('/index.html');
        })
        .catch(error => {
          // Handle login error
          console.error(error.response.data.message);
        });
    },
  },
});







// // Create Vue instance
// const app = new Vue({
//     el: '#app',
//     data: {
//         activeComponent: '', // Initially, no component is active
//     },
// });

// Create Vue instance
const app = new Vue({
    el: '#app',
    data: {
      activeComponent: 'user', // Set 'user' as the initial active component
    },
    mounted() {
      // This will be executed when the Vue instance is mounted
      // Set the activeComponent to 'user' to render the Home component by default
      this.activeComponent = 'user';
    },
  });



// const router = new VueRouter({
//     routes: [
//       { path: '/login', component: 'login' },
//       { path: '/home', component: 'home' }, // Create a 'home' component for your home page
//     ],
//   });
  
//   // Modify your Vue instance to use the router
//   const app = new Vue({
//     el: '#app',
//     router,
//     // Other Vue instance options...
//   });
  