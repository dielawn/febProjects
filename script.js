
const calcCompoundingInterest = (principle, rate, frequency, payment) => {   
    let monthlyRate = rate / 12
    let months = frequency * 12
    let lastInterestPayment = 0
    let interestToDate = 0;
    let principleToDate = 0;
    let totalToDate = 0;
    
    for (let i = 0; i < months; i++) {
      let remainingMonths = months - i
      let principleAfterPayment = principle - payment
      let monthlyInterestPayment = principleAfterPayment * monthlyRate
      console.log(`Last Month Interest Payment: ${lastInterestPayment}`)
      lastInterestPayment = monthlyInterestPayment
      let monthlyPrinciple = principleAfterPayment + monthlyInterestPayment
      principle = monthlyPrinciple
      let monthlyPrinciplePayment = payment - monthlyInterestPayment
      interestToDate += monthlyInterestPayment
      principleToDate += monthlyPrinciplePayment
      totalToDate += (monthlyInterestPayment + monthlyPrinciplePayment)
      
      console.log(`Month ${i + 1}`)
      console.log(`Remaining Months: ${remainingMonths}`)
      console.log(`Principle after payment: ${principleAfterPayment}`)
      console.log(`Monthly Interest Payment: ${monthlyInterestPayment}`)
     
      console.log(`Principle Balance: ${monthlyPrinciple}`)
      console.log(`Principle Payment: ${monthlyPrinciplePayment}`)
      console.log(`Total Interest paid: ${interestToDate}`)
      console.log(`Total paid to principal: ${principleToDate}`)
      console.log(`Total paid: ${totalToDate}`)
      if(principleAfterPayment <= 0){
        console.log('Payments complete')
        return
      }
    }
    
    let conventionalInterest = principle * rate * frequency
    console.log(`Conventional Interest: ${conventionalInterest}`)
  }
  

calcCompoundingInterest(20000, .1274, 6, 401.37)

