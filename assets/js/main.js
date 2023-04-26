function MyArray(){
    var arr = [1,2,3,4,5,6];
    this.remove = function(number){
       arr.length=arr.length-1;
        return arr;
    }
}

var arr1 = new MyArray();
console.log(arr1.remove(6));



//ikinci usul


let obj = {
    arr : [1,4,6,8,16],
    rmv : function (remove) {
        return this.arr.length--
    }
}
obj.rmv(    )
console.log(obj.arr);
