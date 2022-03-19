

const couponList = [
    { id: 1, code: 'TAHUNBARU', discount: 25000, isValid: true },                 
    { id: 2, code: 'LIBURSEKOLAH', discount: 50000, isValid: false},
    { id: 3, code: 'PROMO', discount: 12000, isValid: false },
    { id: 4, code: 'FREE10', discount: 10000, isValid: true },
    { id: 5, code: 'FREE30', discount: 30000, isValid: true },
  ]
     
  


  for (let i=0; i<couponList.length; i++){
    if(couponList[i].isValid===true){
      console.log('selamat! Anda menggunakan ' + couponList[i].code +' anda berhak diskon senilai rp' +couponList[i].discount)
      }else{
        console.log('kopun yang dimasukkan tidak valid')
      }
  }
console.log(couponList.code === 'TAHUNBARU');




  // function findcoupon (elem){

  //       let kuponoke=[]

  //     for (let i =0; i<couponList.length; i++){
  //         if (couponList[i].isValid == true ){
  //             return ('kupon benar');
  
  //         } else {
  //           return ('salah');
              
  //         }
  //     }
      
  // }
  // console.log(findcoupon('TAHUNBARU' ));
  


