var drag,drop,allowDrop,noAllowDrop;
var app = angular.module("fj", []);

app.controller("main", function ($scope, $http, $compile, $rootScope, $window, $timeout, $parse) {

$scope.task = [];
  
$scope.call=['second','first','nothing','Never', 'Gonna', 'Give', 'You', 'Up'];

// $scope.number = 5;
$scope.getNumber = function(num) {
    return new Array(num);   
}

$scope.fdata = [
  {
    "rname": "Hong Kong",
    "location": "Tiffany Place",
    "dish": "Alden",
    "rating": 3,
    "price": 60,
    "desc": "Ad ea culpa reprehenderit quis officia nisi voluptate excepteur tempor nulla.",
    "date": "Tue Jun 23 1970 12:42:10 GMT+0530 (India Standard Time)"
  },
  {
    "rname": "Tunisia",
    "location": "Nichols Avenue",
    "dish": "Homeland",
    "rating": 5,
    "price": 213,
    "desc": "Minim proident duis voluptate minim.",
    "date": "Wed Jul 12 2000 18:05:31 GMT+0530 (India Standard Time)"
  },
  {
    "rname": "Israel",
    "location": "Colonial Road",
    "dish": "Cartwright",
    "rating": 1,
    "price": 484,
    "desc": "In ut laboris reprehenderit irure enim minim.",
    "date": "Fri Oct 13 1972 22:55:39 GMT+0530 (India Standard Time)"
  },
  {
    "rname": "Belize",
    "location": "Atlantic Avenue",
    "dish": "Selma",
    "rating": 2,
    "price": 379,
    "desc": "Eiusmod ullamco nostrud elit laboris.",
    "date": "Sat Aug 10 1974 05:13:55 GMT+0530 (India Standard Time)"
  },
  {
    "rname": "Liberia",
    "location": "Dare Court",
    "dish": "Leland",
    "rating": 3,
    "price": 114,
    "desc": "Exercitation eu duis ut pariatur voluptate velit veniam laborum mollit proident amet.",
    "date": "Sat Dec 14 1974 21:38:53 GMT+0530 (India Standard Time)"
  },
  {
    "rname": "Cook Islands",
    "location": "Florence Avenue",
    "dish": "Roy",
    "rating": 2,
    "price": 172,
    "desc": "Dolor mollit tempor nisi dolor.",
    "date": "Wed Oct 17 1984 12:28:20 GMT+0530 (India Standard Time)"
  },
  {
    "rname": "Saint Vincent and The Grenadines",
    "location": "Stuart Street",
    "dish": "Campo",
    "rating": 5,
    "price": 101,
    "desc": "Magna ex quis qui mollit pariatur.",
    "date": "Sat Aug 02 1986 05:07:58 GMT+0530 (India Standard Time)"
  },
  {
    "rname": "Malta",
    "location": "Bleecker Street",
    "dish": "Rutherford",
    "rating": 2,
    "price": 416,
    "desc": "Incididunt magna et consectetur nostrud tempor esse.",
    "date": "Fri Feb 22 2013 09:14:02 GMT+0530 (India Standard Time)"
  },
  {
    "rname": "Benin",
    "location": "Hampton Avenue",
    "dish": "Canby",
    "rating": 4,
    "price": 126,
    "desc": "Enim occaecat reprehenderit quis non laboris sint magna.",
    "date": "Wed Nov 03 1993 21:36:41 GMT+0530 (India Standard Time)"
  },
  {
    "rname": "Egypt",
    "location": "Decatur Street",
    "dish": "Orin",
    "rating": 1,
    "price": 143,
    "desc": "Pariatur in deserunt et exercitation velit sunt ut proident elit proident mollit eu.",
    "date": "Mon Jun 30 1997 16:40:12 GMT+0530 (India Standard Time)"
  },
  {
    "rname": "Bosnia and Herzegovina",
    "location": "Baycliff Terrace",
    "dish": "Greensburg",
    "rating": 3,
    "price": 141,
    "desc": "Sunt sint cupidatat laboris occaecat laborum ad id nostrud esse cupidatat nisi id.",
    "date": "Sat Jul 02 1977 15:34:51 GMT+0530 (India Standard Time)"
  },
  {
    "rname": "Central African Republic",
    "location": "Gilmore Court",
    "dish": "Jacksonburg",
    "rating": 2,
    "price": 181,
    "desc": "Commodo officia nisi aliqua proident ea.",
    "date": "Fri Mar 04 1983 15:55:52 GMT+0530 (India Standard Time)"
  },
  {
    "rname": "Viet Nam",
    "location": "Doughty Street",
    "dish": "Tedrow",
    "rating": 4,
    "price": 380,
    "desc": "Sit nulla tempor officia eiusmod do eu.",
    "date": "Mon Jul 21 1986 06:15:37 GMT+0530 (India Standard Time)"
  },
  {
    "rname": "Zaire",
    "location": "Dumont Avenue",
    "dish": "Northridge",
    "rating": 1,
    "price": 249,
    "desc": "Ipsum Lorem sint veniam cupidatat consectetur Lorem aute mollit cupidatat aliqua commodo qui amet nostrud.",
    "date": "Sun Dec 01 2013 10:35:03 GMT+0530 (India Standard Time)"
  }
];
  
var  today = new Date();
month = today.getMonth() + 1
// $scope.basePrj = [];
// $scope.basePrj = [{"CCC":['360View','geoView']},{"prdPlatform":['ng8','0Auth','Theming']}];

$scope.basePrj = [{"project":"CCC","task":["task1","task2","task3"]},{"project":"Plotform","task":["taskp1","taskp2","taskp3"]}];

//$scope.updateTime = new Date();
$scope.init = function(){
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if(isChrome){

}else{

    //alert('Please Open File in Chrome only for webStorage')
    $('body').html('<h5>:-( Please open file in Chrome browser </h5>')
    return false
}
    if(localStorage.task){

       var dataa =  localStorage.getItem("task");

     let lastTime = parseInt(localStorage.getItem("updateTime"));
       
      // lastTime = 1572822792000 //11pm 6 nov

   let dd = new Date(lastTime).setHours(0,0,0,0)
   let ee = today.setHours(0,0,0,0)
       
       let daysDiff =  0;

        daysDiff =  (ee - dd) /86400000;

       console.log('Last Saved '+ daysDiff+'Days ago')
       
       $scope.task = dataa;
       $scope.task = angular.fromJson($scope.task)



if(daysDiff > 0 && daysDiff < 40){

           for(let i = 0; i < daysDiff ; i++){
           
            $scope.task.pop()

            let datee = new Date() - i*(1000*3600*24)

            let obj = {
                
                "day":datee,
                "project":"",
                "hrs":9,
                "progress":false,
                "task":"",
                "desc":""
            }
        
            // $scope.task.unshift(obj)
            $scope.task.splice(i, 0, obj)
        
           }
        }
    }else{
        for(let i=0;i<40;i++){

            let datee = new Date() - i*(1000*3600*24)

            let obj = {
                "day":datee,
                "project":[
                    
                      //  {"project":"","progress":false,"hrs":9, "task":"","desc":""}

                    ]
                
            }
        
            $scope.task.push(obj)
        
        }

    }
}
$scope.init()

// $(document).on('ondrop','td',function(){alert()})
$scope.copy = function(id) {
    let idd = JSON.stringify(id)
    let textarea = document.getElementById(idd);
    textarea.select();
    document.execCommand("copy");
  }

$scope.removeProjec = function(parntIndex,id){

    $scope.task[parntIndex].project.splice(id,1)
}

$scope.addProject2 = function(prjName){
  // alert(prjName.length)

if(prjName.length >0 && typeof(prjName) !== "undefined"){

  $scope.basePrj.push({"project":prjName,"task":[]})
  $scope.addPrj = ! $scope.addPrj

}
type

}
$scope.addTask = function(prjName,i){
// alert(i)
if(prjName.length >0 && typeof(prjName) !== "undefined"){
  $scope.basePrj[i].task.push(prjName)
}
}

$scope.addPrj=true
$scope.addProject = function(id,prjName,task){
// alert(typeof(id))
// console.log('on drop'+id)

  let obj =  {"project":prjName,"progress":false,"hrs":4,"task":task, "desc":"Working on "+task}
 
//console.log($scope.task)
    $scope.task[id].project.unshift(obj)
  //$scope.task[0].project.sub.push([obj])
}

$scope.update = function(){

    if(localStorage.task){
        localStorage.removeItem("task");
        localStorage.removeItem("updateTime");
    }

let strgii = JSON.stringify($scope.task),

time = new Date()//.format('dd/mm/yyyy');


    localStorage.setItem("task",strgii );
    localStorage.setItem("updateTime", JSON.stringify(time.getTime()));

    alert('Updated all records')
}
$scope.exportToCsv = function(Results) {


    let fileName = 'TimeSheet_'+today.getDate()+'_'+ (today.getMonth()+1)+'_'+today.getFullYear()+'.csv'
    
        var CsvString = "";
        CsvString = 'Date , Hours, Project, Progress , Task ,';
        CsvString += "\r\n";

        Results.forEach(function(RowItem, RowIndex) {
         // RowItem.forEach(function(ColItem, ColIndex) {
          //   console.log(RowItem)
             let date = new Date(RowItem.day), prg = 'In Progress';

             let day = date.getDate(), mon = date.getMonth() + 1, yy = date.getFullYear()

             if(RowItem.progress){
                  prg = 'Completed'
                }
            CsvString += day+' / '+mon+' / '+ yy+','+ RowItem.hrs+','+ RowItem.project+','+prg+','+RowItem.task+',';
         // });
          CsvString += "\r\n";
          console.log(CsvString)
        });
        CsvString = "data:application/csv," + encodeURIComponent(CsvString);
        var x = document.createElement("A");
        x.setAttribute("href", CsvString );
        x.setAttribute("download",fileName);
        document.body.appendChild(x);
        x.click();
      }

      


     // $scope.exportToCsv($scope.task)
    //   $scope.exportToCsv([['test',124],['test',124],['test',124]])

    drag = function (ev){
      //let data = e.target.innerText
      ev.dataTransfer.setData('text', ev.target.id);
      // ev.dataTransfer.setData('text', ev.target.innerHtml);

  
      //$scope.addProject(1,'sdfsf')

    //  console.log(ev)
  }
    drop = function (ev,index){

      ev.preventDefault();

    var data = ev.dataTransfer.getData("text");
    
    //  console.log(ev)
      let idx =$(ev.target).attr('data-index')
      if(idx === undefined){
      idx =$(ev.target).parentsUntil( ".dropzone" ).attr('data-index')
      alert('undefied Plsease Drop in the drop zone')

      return false
    }
       // $(ev.target).children().css('pointerEvents','none');

       var projectSplit = data.split('-');
       //alert($scope.basePrj[parseInt(projectSplit[0])].project)

       //alert($scope.basePrj[parseInt(projectSplit[0])].task[1])

    $scope.addProject(idx, $scope.basePrj[parseInt(projectSplit[0])].project,
     $scope.basePrj[parseInt(projectSplit[0])].task[parseInt(projectSplit[1])])
   //  alert(idx)
    $scope.$apply()
  }
  allowDrop = function (ev){
   ev.preventDefault();
  //  $('#'+ev.target.id).css('background','red')

    //console.log(ev.target.id)

  //  $(ev.target.id).hide()
  //   return false;
}
// noAllowDrop = function (ev) {
//   ev.stopPropagation();
// return false;
// }


    
    //controler end
})

app.directive('repeatDone', function() {
  return function(scope, element, attrs) {
    element.bind('$destroy', function(event) {
      if (scope.$last) {
        scope.$eval(attrs.repeatDone);
       // alert()
      }
    });
  }
});