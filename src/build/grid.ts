class GS2 {
   name: string;
 
   constructor(name: string) {
     this.name = name;
   }
 
   walk() {
     console.log('${this.name} is walking.');
   }
 }
 
 const GridSystem = new GS2('Lee');
 GridSystem.walk();