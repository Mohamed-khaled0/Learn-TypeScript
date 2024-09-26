class Show {
    constructor(private _title: string) {}
  
    public  get title(): string {
      return this._title;
    }
  
   public set title(value: string) {
       this._title = value;
    }
  }
  
  let tester1 = new Show("Elzero");
  tester1.title = "Osama";
  console.log(tester1.title); // Property 'title' does not exist on type 'Show'
  tester1.title = "Osama"; // Property 'title' does not exist on type 'Show'
  console.log(tester1.title); // Property 'title' does not exist on type 'Show'