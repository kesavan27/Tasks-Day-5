class Circle {
    
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    
    getRadius() {
      return this.radius;
    }
  
    
    setRadius(radius) {
      this.radius = radius;
    }
  
    
    getColor() {
      return this.color;
    }
  
    
    setColor(color) {
      this.color = color;
    }
  
    
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  
    
    toString() {
      return `Circle[radius=${this.radius},color=${this.color}]`;
    }
  }
  
  
  let circle1 = new Circle();
  console.log(circle1.toString()); 
  
  let circle2 = new Circle(2.5, "blue");
  console.log(circle2.toString()); 
  
  console.log(circle2.getArea()); 
  console.log(circle2.getCircumference()); 
  