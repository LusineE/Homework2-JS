// ---------------------Factorial-------------------------------------------------------
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
let b=prompt('Հիմա մուտքագրեք ցանկացած թիվ:')
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

// ---------------------Stars 1 ------------------------------------------------------
let c=prompt('Կրկին մուտքագրեք ցանկացած թիվ:')
let stars1=(n) =>{
    for (let i=1;i<=n;i++){
        let p=''
        let st=''
        for(j=1;j<=n-i;j++){
            p=p+'-'          
        }
        for(k=1;k<=i;k++){
            st=st+'*'
        }
        console.log(p+st)
    }
}
console.log(stars1(c))

//  ---------------------Average------------------------------------------------------
let arr=[2,3,6,10]
const av=(n)=>{
   let sum=0
    for(i=0;i<n.length;i++){
        sum=sum+n[i]
    }
    return sum/n.length
}
console.log(av(arr))