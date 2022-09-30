class Bmi{
   constructor(height, weight){
    this.height = height;
    this.weight = weight;
   } 

   calculateBMI(){
       let bmi = (this.weight/(this.height**2)) * 10**4;
       return bmi;
   }
}

let bmi1 = new Bmi(180,105);

console.log(bmi1.calculateBMI()); 