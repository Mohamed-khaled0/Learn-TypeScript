// Modified Code
const user: {
    state: boolean;
    id: string;
    username: string,
    age: number | string,  
    website?: string,
    skills: {
      frontEnd: string[],
      backEnd: (string | number)[]  
    }
  } = {
    username: "Elzero",
    age: 40,
    website: "Elzero.org",
    skills: {
      frontEnd: ["HTML", "CSS", "JS"],
      backEnd: ["PHP", "Python"]
    }
  }
  
  // Now, these assignments will work without errors
  user.username = "Osama";    
  user.age = "40";            
  user.skills.backEnd.push(100); 
  