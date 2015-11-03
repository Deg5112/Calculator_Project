calculator.prototype.addNum = function(value){
    var self = this;
    var length = self.arr.length;
    var curNumObject = new number(parseFloat(value));

    switch (length){
        case 0:
            self.arr.push(curNumObject);//push object into array
            num1 = curNumObject.value;
            self.c(num1);
            break;

        case 1:     //integer              integer   concat
            concat = num1 + "" + curNumObject.value;
            num1 = parseFloat(concat);
            curNumObject.value = num1;
            self.arr[0] = curNumObject;
            self.c(num1);
            break;

        case 2:
            self.arr.push(curNumObject);//push object into array
            num2 = curNumObject.value;
            self.c(num2);
            break;
        case 3: //concat
            concat = num2 + "" + curNumObject.value;
            num1 = parseFloat(concat);
            curNumObject.value = num2;
            self.arr[2] = curNumObject;
            self.c(num2);
            break;
    }

};

//new number object
//params : value of selected number
var number = function(value){
    this.value = value;
    this.type = 'number';
};