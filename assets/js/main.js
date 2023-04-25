function MyArray(){
    var arr = [1,2,3,4,5,6];
    this.remove = function(number){
       arr.length=arr.length-1;
        return arr;
    }
}

var arr1 = new MyArray();
console.log(arr1.remove(6));