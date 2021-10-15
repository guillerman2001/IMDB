export class Professional {
    name : string;
    age : number;
    weight : number;
    height : number;
    haircolor: string;
    eyecolor: string;
    race : string;
    isretired : boolean;
    nationallity : string;
    oscarsnumber : number;
    profession : string ;
    
   constructor( name: string, age: number, weight : number, height: number, haircolor: string, eyecolor: string ,
       race: string, isretired: boolean, nationallity : string, oscarsnumber : number, profession : string )  {
           this.name = name
           this.age = age
           this.weight = weight
           this.height = height
           this.haircolor = haircolor
           this.eyecolor = eyecolor
           this.race = race
           this.isretired = isretired
           this.nationallity = nationallity
           this.oscarsnumber = oscarsnumber
           this.profession = profession
       }
   
       print(){
           let attributes : string = `name: ${this.name}
           age: ${this.age}
           weight: ${this.weight}
           height: ${this.height}
           haircolor: ${this.haircolor}
           eyecolor: ${this.eyecolor}
           race: ${this.race}
           isRetired: ${this.isretired}
           nationallity: ${this.nationallity}
           oscarsnumbers: ${this.oscarsnumber}
           profession: ${this.profession}`
           console.log(attributes)
       }
   }
