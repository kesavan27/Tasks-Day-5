class UberPriceCalculator {
    constructor(baseFare, costPerKM, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerKM = costPerKM;
      this.costPerMinute = costPerMinute;
    }
  
    
    calculatePrice(distanceInKM, timeInMinutes) {
      const distanceCost = distanceInKM * this.costPerKM;
      const timeCost = timeInMinutes * this.costPerMinute;
      const totalPrice = this.baseFare + distanceCost + timeCost;
      return totalPrice.toFixed(2); 
    }
  }
  
 
  const uberX = new UberPriceCalculator(2.00, 1.50, 0.25);
  const distance = 20000; 
  const time = 2000; 
  
  const price = uberX.calculatePrice(distance, time);
  console.log(`The total price for the Uber ride is $${price}`);
  