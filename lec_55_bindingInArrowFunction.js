function Person(name){
    this.name = name;
    console.log(this);
    /*
    setTimeout(function(){       // Print Window object
        console.log(this);
    },1000);
    */
   setTimeout(() => {            // Print binding object
    console.log(this);
   },1000);
}

var p  = new Person("Manisha");