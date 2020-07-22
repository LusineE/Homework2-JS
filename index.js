// // ---------------------Factorial-------------------------------------------------------
 let a=prompt('Ողջույն: Մուտքագրեք այն թիվը, որի ֆակտորիալը ուզում եք իմանալ:')
 const factorial=(n)=>{
     let fact=1
     for (let i=2;i<=n;i++){
         fact=fact*i
     }
     return fact
 }
 console.log (factorial(a))

// ---------------------Stars ------------------------------------------------------
 let b=prompt('Ողջույն: Մուտքագրեք ցանկացած թիվ:')
 let stars = (n) => {
     for(let i=1;i<=n;i++){
         let st=''
         for(let j=1;j<=i;j++){
             st=st+'*'
         }
         console.log(st)
     }
 }
 console.log(stars(b))

// ---------------------Stars ------------------------------------------------------
